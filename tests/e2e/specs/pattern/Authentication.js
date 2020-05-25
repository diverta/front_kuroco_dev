import { Auth } from '../../../../generated/core/Auth';
import { OpenAPI } from '../../../../generated/core/OpenAPI';
import { SpecialOperationInfo } from './../../../../generated/core/ApiInfo';

const promiseAllSequential = require('promise-all-sequential');
import { executeRequest } from '../../base';

const requiresAuth = !!OpenAPI.SECURITY['Token-Auth'];
const hasLoginEndpoint = !!SpecialOperationInfo.login;

// logger
(() => {
  console.group('AUTHENTICATION INFO');
  console.info(
    `OpenAPI.SECURITY['Token-Auth'] (a value from openapi.json):`,
    OpenAPI.SECURITY['Token-Auth']
  );
  console.info(
    `SpecialOperationInfo.login (an object of endpoint which has login feature):`,
    SpecialOperationInfo.login
  );
  console.info(
    `the authentication pattern for the current Kuroco is: %c${(() => {
      if (requiresAuth && hasLoginEndpoint) {
        return 'token + login';
      }
      if (requiresAuth && !hasLoginEndpoint) {
        return 'token + no-login';
      }
      if (!requiresAuth && hasLoginEndpoint) {
        return 'cookie + login';
      }
      if (!requiresAuth && !hasLoginEndpoint) {
        return 'cookie + no-login';
      }
    })().toUpperCase()}%c`,
    'font-weight: bold; color: red;',
    ''
  );
  console.groupEnd();
})();

const execLogin = () => {
  const requestData = {
    requestBody: {
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
const execToken = ({ grant_token } = {}) => {
  const requestData = grant_token
    ? {
        requestBody: {
          grant_token,
        },
      }
    : {};
  return executeRequest({
    cy,
    query: 'token',
    requestData,
  });
};
const execApis = () => {
  const requestData = {};
  return executeRequest({
    cy,
    query: 'apis',
    requestData,
  });
};
const execTopics = () => {
  const requestData = {};
  return executeRequest({
    cy,
    query: 'get topics',
    indexOfApis: 1,
    requestData,
  });
};
const execFavorites = () => {
  const requestData = {};
  return executeRequest({
    cy,
    query: 'get favorites',
    requestData,
  });
};
const execMembers = () => {
  const requestData = {};
  return executeRequest({
    cy,
    query: 'get members',
    requestData,
  });
};
const execTags = () => {
  const requestData = {};
  return executeRequest({
    cy,
    query: 'get tags',
    requestData,
  });
};
const execConfirmingAPIs = () =>
  promiseAllSequential([
    execTopics,
    execFavorites,
    execMembers,
    execTags,
    execApis,
  ]);

describe('Authentication pattern.', () => {
  // Token based system & has Login feature.
  if (requiresAuth && hasLoginEndpoint) {
    it('should not be 401: requests login -> token -> apis.', async () => {
      cy.visit('/');
      const res = await execLogin();
      const { access_token, refresh_token } = await execToken({
        grant_token: res.grant_token,
      });
      Auth.setAccessToken(access_token);
      Auth.setRefreshToken(refresh_token);

      let error;
      await execConfirmingAPIs().catch(() => (error = true));
      expect(error).to.not.be.true;
    });
  }

  // Token based system & no Login feature.
  if (requiresAuth && !hasLoginEndpoint) {
    it('should not be 401: requests token -> apis.', async () => {
      cy.visit('/');
      const { access_token } = await execToken();
      Auth.setAccessToken(access_token);

      let error;
      await execConfirmingAPIs().catch(() => (error = true));
      expect(error).to.not.be.true;
    });
  }

  // Cookie based system & has Login feature.
  if (!requiresAuth && hasLoginEndpoint) {
    it('should not be 401: requests login -> apis.', async () => {
      cy.visit('/');
      await execLogin();

      let error;
      await execConfirmingAPIs().catch(() => (error = true));
      expect(error).to.not.be.true;
    });
  }

  // Cookie based system & no Login feature.
  if (!requiresAuth && !hasLoginEndpoint) {
    it('should not be 401: requests apis.', async () => {
      cy.visit('/');
      let error;
      await execConfirmingAPIs().catch(() => (error = true));
      expect(error).to.not.be.true;
    });
  }
});
