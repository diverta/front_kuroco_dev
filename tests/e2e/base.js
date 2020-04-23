const path = require('path');

export const queries = {
  logginForm: {
    status: '.js-loggin-form-status',
    email: '.js-loggin-form-email',
    password: '.js-loggin-form-password',
    submit: '.js-loggin-form-submit-button',
  },
  apiInfos: {
    filter: '.js-apilist-filter',
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

export function executeRequest(cy, methodName, obj) {
  cy.get(queries.apiInfos.filter)
    .clear()
    .type(methodName);
  cy.get(queries.apiInfos.getApiInfoQuery(methodName))
    .children()
    .first()
    .trigger('mouseover')
    .click();
  cy.get(queries.codeBlock)
    .click()
    .type(`{cmd}A{del}`) // clears textarea
    .type(JSON.stringify(obj), { parseSpecialCharSequences: false });
  cy.get(queries.apiInfos.request).click();

  cy.screenshot();
  cy.get(queries.responseBlock.response)
    .invoke('text')
    .then(txt => {
      const p = path.join('tests', 'e2e', 'json', `${methodName}.json`);
      cy.writeFile(p, txt);
    });
}
