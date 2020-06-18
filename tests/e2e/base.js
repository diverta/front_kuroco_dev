const path = require('path');
import promisify from 'cypress-promise';
import 'cypress-file-upload';

function decode(content) {
  return content
    .replace(/\\n/g, '\\n')
    .replace(/\\'/g, "\\'")
    .replace(/\\"/g, '\\"')
    .replace(/\\&/g, '\\&')
    .replace(/\\r/g, '\\r')
    .replace(/\\t/g, '\\t')
    .replace(/\\b/g, '\\b')
    .replace(/\\f/g, '\\f')
    .replace(/[\u0000-\u0019]+/g, '');
}

export const queries = {
  login: {
    status: '.js-login-status',
    button: '.js-login-button',
    form: {
      _: '.js-login-form',
      status: '.js-loggin-form-status',
      email: '.js-loggin-form-email',
      password: '.js-loggin-form-password',

      close: '.js-loggin-form-close-button',
      logout: '.js-loggin-form-logout-button',
      login: '.js-loggin-form-login-button',
    },
  },
  upload: {
    button: '.js-upload-button',
    file: '.js-upload-file',
    form: {
      _: '.js-upload-form',
      fileId: '.js-upload-form-file-id',
      fileNm: '.js-upload-form-file-nm',

      select: '.js-upload-form-select-button',
      close: '.js-upload-form-close-button',
    },
  },
  apiInfos: {
    filter: '.js-apilist-filter',
    apiList: '.js-apilist',
    getApiInfoQuery: methodname => `.js-info-method-methodname-${methodname}`,
    request: '.js-apilist-request',
  },
  codeBlock: '.CodeMirror textarea',
  responseBlock: {
    _: '.response-panel',
    isError: '.js-response-isError',
    response: '.js-apilist-response',
    closeButton: '.response-panel-button-close',
  },
};

/**
 * login to Kuroco.
 *
 * @param {*} options.email for customized login info as email user expected.
 * @param {*} options.password for customized login info as password user expected.
 */
export function login(options = { email: 'test', password: 'qwer1234' }) {
  function __login({ email, password }) {
    cy.contains(queries.login.status, 'ANONYMOUS');
    cy.get(queries.login.button).click();
    cy.get(queries.login.form._);
    cy.get(queries.login.form.email).type(email);
    cy.get(queries.login.form.password).type(password);
    cy.get(queries.login.form.login).click();
    cy.get(queries.login.form.close).click();
    cy.contains(queries.login.status, 'LOGGEDIN');
  }

  cy.visit('/');
  __login(options);
}

/**
 * logout from Kuroco.
 */
export function logout() {
  function __logout() {
    cy.get(queries.login.button).click();
    cy.get(queries.login.form._);
    cy.get(queries.login.form.logout).click();
    cy.get(queries.login.form.close).click();
    cy.contains(queries.login.status, 'ANONYMOUS');
  }

  cy.visit('/');
  __logout();
}

/**
 * upload file
 * 
 * @param options.path upload file path.
 */
export async function upload({path}) {
  const dataCyFileId = 'data-upload-form-file-id';
  const dataCyFileNm = 'data-upload-form-file-nm';

  cy.get(queries.upload.button).trigger('mouseover').click();
  cy.get(queries.upload.form._);
  // cy.get(queries.upload.form.select).click();
  cy.get(queries.upload.file).attachFile(path);
  cy.get(`[data-cy=${dataCyFileId}]`).should('not.have.value', '');

  const fileId = await promisify(
    cy.get(`[data-cy=${dataCyFileId}]`)
      .invoke('val')
  );
  const fileNm = await promisify(
    cy.get(`[data-cy=${dataCyFileNm}]`)
      .invoke('val')
  );
  cy.get(queries.upload.form.close).trigger('mouseover').click();
  return {
    fileId: fileId,
    fileNm: fileNm,
  };

}

/**
 * executes request to endpoint finded by query, writes results into disk as json files.
 *
 * @export
 * @param options.cy cypress instance.
 * @param options.query query string for searching unique target endpoint.
 * @param options.indexOfApis an target index number for APIs.
 * @param options.requestData request data supposed to send as request body JSON.
 * @param options.screenshot an option either captures screenshot, default valus is false.
 * @param options.timeout time to wait for response, default value is 5000(ms).
 * @returns Promise<result string convertible to JSON>
 */
export async function executeRequest({
  cy,
  query,
  indexOfApis = 0,
  requestData,
  screenshot = false,
  timeout = 5000,
}) {
  const requestBody = JSON.stringify(requestData, undefined, '\t');
  const toSaveFileName = query.replace(/ /g, '_');

  const getStore = () => cy.window().its('app.$store');

  getStore().then(async store => {
    store.dispatch('setQuery', query);
  });

  cy.get('tbody')
    .children()
    .eq(indexOfApis)
    .trigger('mouseover')
    .click()
    .get(queries.codeBlock)
    .click({ force: true })
    .type(`{cmd}A{del}`) // clears textarea
    .invoke('val', requestBody)
    .trigger('change', { force: true })
    .get(queries.apiInfos.request)
    .click();

  cy.get(queries.responseBlock.isError, {timeout: timeout}).then(elms => {
    if (/true/.test(elms[0].innerText)) {
      return cy.get(queries.responseBlock.response).then(elms => {
        cy.writeFile(
          path.join('tests', 'e2e', 'requestBody', `${toSaveFileName}.json`),
          requestBody
        );
        throw new Error(elms[0].innerText);
      });
    }
  });

  if (screenshot) {
    await cy.screenshot();
  }

  const res = await promisify(
    cy
      .wrap(queries.responseBlock.response)
      .get(queries.responseBlock.response)
      .invoke('text')
  );
  const data = JSON.parse(decode(res));

  await promisify(
    cy
      .writeFile(
        path.join('tests', 'e2e', 'requestBody', `${toSaveFileName}.json`),
        requestBody
      )
      .writeFile(
        path.join('tests', 'e2e', 'response', `${toSaveFileName}.json`),
        res
      )
  );

  await promisify(
    cy
      .get(queries.responseBlock.closeButton)
      .trigger('mouseover')
      .click()
  );

  return Promise.resolve(data);
}

/**
 * return date as formatted string by specified format.
 * @example `
  console.log(formatDate())                         // '2020-01-01' (current date)
  console.log(formatDate('date'))                   // '2020-01-01' (current date)
  console.log(formatDate('datetime'))               // '2020-01-01 01:01 +0900' (current date)
  console.log(formatDate(undefined, new Date(0)))   // '19070-01-01'
  console.log(formatDate('date', new Date(0)))      // '19070-01-01'
  console.log(formatDate('datetime', new Date(0)))  // '19070-01-01 09:00 +0900'
 ` `
 * @param date target Date.
 * @param format expected format which must be either of 'date' | 'datetime'.
 */
export function formatDate(format = 'date', date = new Date()) {
  const hasExpectedFormat = ['date', 'datetime'].some(fmt => format === fmt);
  if (!hasExpectedFormat) {
    throw new Error(`the format ${format} is unexpected value.`);
  }

  const o = ((date) => {
    const d = new Date(date);

    // 2020-01-01
    const ymd = d.toISOString().substr(0,10)

    // 01:01
    const hm = [
      zeroPadding(d.getHours()),
      zeroPadding(d.getMinutes()),
    ].join(':');

    // +0900
    const timezone = (new Date()).toTimeString().split('GMT')[1].replace(/ .*/, '')

    return {
      date: `${ymd}`,
      datetime: `${ymd} ${hm} ${timezone}`,
    }
  })(date);

  return o[format];

  function zeroPadding(value) {
    return ('0' + `${value}`).slice(-2)
  }
}