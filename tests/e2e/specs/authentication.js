/// <reference types="cypress" />
// @ts-check

// https://docs.cypress.io/api/introduction/api.html

import { executeRequest } from '../base';

const login = () => {
  /** @type {import('kuroco').AuthenticationApiRcmsApi1AuthLoginPostRequest} */
  const requestData = {
    inlineObject: {
      email: 'test',
      password: 'qwer1234',
    },
  };
  return executeRequest({
    cy,
    query: 'login',
    requestData,
  });
};
const logout = () => {
  /** @type {import('kuroco').AuthenticationApiRcmsApi1AuthLogoutPostRequest} */
  const requestData = {};
  return executeRequest({
    cy,
    query: 'logout',
    requestData,
  });
};
const token = ({ grant_token }) => {
  /** @type {import('kuroco').AuthenticationApiRcmsApi1AuthTokenPostRequest} */
  const requestData = {
    inlineObject1: {
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
    await login();
    await logout();
  });
  it('Login -> Token -> Logout', async () => {
    const loginRes = await login();
    await token(JSON.parse(loginRes));
    await logout();
  });
});
