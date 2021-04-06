/// <reference types="cypress" />
// @ts-check

// https://docs.cypress.io/api/introduction/api.html

import { executeRequest, login } from '../../base';

const execLogin = () => {
  /** @type {import('../../../../generated/services/AuthenticationService').AuthenticationService.postRcmsApi1AuthLoginRequest} */
  const requestData = {
    requestBody: {
      email: 'test',
      password: 'test1234',
    },
  };
  return executeRequest({
    cy,
    query: 'login',
    requestData,
  });
};
const execLogout = () => {
  /** @type {import('../../../../generated/services/AuthenticationService').AuthenticationService.postRcmsApi1AuthLogoutRequest} */
  const requestData = {};
  return executeRequest({
    cy,
    query: 'logout',
    requestData,
  });
};
const token = ({ grant_token }) => {
  /** @type {import('../../../../generated/services/AuthenticationService').AuthenticationService.postRcmsApi1AuthTokenRequest} */
  const requestData = {
    requestBody: {
      grant_token,
    },
  };
  return executeRequest({
    cy,
    query: 'token',
    requestData,
  });
};

describe('Authentication', () => {
  it('Login -> Logout', async () => {
    login();
    await execLogin();
    await execLogout();
  });
  it('Login -> Token -> Logout', async () => {
    login();
    const loginRes = await execLogin();
    await token(loginRes);
    await execLogout();
  });
});
