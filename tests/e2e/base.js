const path = require('path');
import promisify from 'cypress-promise';

export const queries = {
  logginForm: {
    status: '.js-loggin-form-status',
    email: '.js-loggin-form-email',
    password: '.js-loggin-form-password',
    submit: '.js-loggin-form-submit-button',
  },
  apiInfos: {
    filter: '.js-apilist-filter',
    apiList: '.js-apilist',
    getApiInfoQuery: methodname => `.js-info-method-methodname-${methodname}`,
    request: '.js-apilist-request',
  },
  codeBlock: '.CodeMirror',
  responseBlock: {
    _: '.response',
    isError: '.js-response-isError',
    response: '.js-apilist-response',
  },
};

/**
 * executes request to endpoint finded by query, writes results into disk as json files.
 *
 * @export
 * @param options.cy cypress instance.
 * @param options.query query string for searching unique target endpoint.
 * @param options.requestData request data supposed to send as request body JSON.
 * @param options.screenshot an option either captures screenshot, default valus is false.
 * @returns Promise<result string convertible to JSON>
 */
export function executeRequest({ cy, query, requestData, screenshot = false }) {
  const requestBody = JSON.stringify(requestData, undefined, '\t');

  cy.get(queries.apiInfos.filter)
    .clear()
    .type(query);
  cy.get(queries.apiInfos.apiList).within(() => {
    cy.get('li')
      .should('have.length', 1)
      .children()
      .first()
      .trigger('mouseover')
      .click();
  });
  cy.get(queries.codeBlock)
    .click()
    .type(`{cmd}A{del}`) // clears textarea
    .type(requestBody, { parseSpecialCharSequences: false });
  cy.get(queries.apiInfos.request).click();

  cy.get(queries.responseBlock.isError)
    .invoke('text')
    .then(txt => {
      if (/true/.test(txt)) {
        cy.get(queries.responseBlock.response)
          .invoke('text')
          .then(txt => {
            throw Error(txt);
          });
      }
    });

  if (screenshot) {
    cy.screenshot();
  }

  return promisify(
    cy
      .get(queries.responseBlock.response)
      .invoke('text')
      .then(txt => {
        cy.writeFile(
          path.join('tests', 'e2e', 'requestBody', `${query}.json`),
          requestBody
        );
        cy.writeFile(
          path.join('tests', 'e2e', 'response', `${query}.json`),
          txt
        );
        return Promise.resolve(txt);
      })
  );
}
