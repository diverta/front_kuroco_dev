const path = require('path');
import promisify from 'cypress-promise';

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
 * executes request to endpoint finded by query, writes results into disk as json files.
 *
 * @export
 * @param options.cy cypress instance.
 * @param options.query query string for searching unique target endpoint.
 * @param options.indexOfApis an target index number for APIs.
 * @param options.requestData request data supposed to send as request body JSON.
 * @param options.screenshot an option either captures screenshot, default valus is false.
 * @returns Promise<result string convertible to JSON>
 */
export async function executeRequest({
  cy,
  query,
  indexOfApis = 0,
  requestData,
  screenshot = false,
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

  cy.get(queries.responseBlock.isError).then(elms => {
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
