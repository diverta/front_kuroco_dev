/// <reference types="cypress" />
// @ts-check

// https://docs.cypress.io/api/introduction/api.html

import { executeRequest } from '../base';

describe('Authentication', () => {
  it('Login -> Logout', async () => {
    /** @type {import('kuroco').AuthenticationApiRcmsApi1AuthLoginPostRequest} */
    const loginRequestData = {
      inlineObject: {
        email: 'test',
        password: 'qwer1234',
      },
    };

    executeRequest({
      cy,
      query: 'login',
      requestData: loginRequestData,
    });

    /** @type {import('kuroco').AuthenticationApiRcmsApi1AuthLogoutPostRequest} */
    const logoutRequestData = {};
    const logoutRes = await executeRequest({
      cy,
      query: 'logout',
      requestData: logoutRequestData,
    });
    const res = JSON.parse(logoutRes);
    if (/errored/.test(res)) {
      throw Error('requested API throws error.');
    }
  });

  it('Login -> Token -> Logout', async () => {
    /** @type {import('kuroco').AuthenticationApiRcmsApi1AuthLoginPostRequest} */
    const loginRequestData = {
      inlineObject: {
        email: 'test',
        password: 'qwer1234',
      },
    };

    const loginRes = await executeRequest({
      cy,
      query: 'login',
      requestData: loginRequestData,
    });

    /** @type {import('kuroco').AuthenticationApiRcmsApi1AuthTokenPostRequest} */
    const tokenRequestData = {
      inlineObject1: {
        grantToken: JSON.parse(loginRes).grant_token,
      },
    };

    const tokenRes = await executeRequest({
      cy,
      query: 'token',
      requestData: tokenRequestData,
    });

    /** @type {import('kuroco').AuthenticationApiRcmsApi1AuthLogoutPostRequest} */
    const logoutRequestData = {};
    const logoutRes = await executeRequest({
      cy,
      query: 'logout',
      requestData: logoutRequestData,
    });
  });
});
