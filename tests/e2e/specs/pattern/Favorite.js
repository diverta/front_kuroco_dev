/// <reference types="cypress" />
// @ts-check

// https://docs.cypress.io/api/introduction/api.html

import { executeRequest, login } from '../../base';

const insertFavoriteWithoutRequiredTargetCols = [
  'module_type',
  'module_id',
];
const insertFavoriteWithoutRequired = ({ moduleType = 'topics', moduleId, targetCol }) => {
  /** @type {import('../../../../generated/services/FavoritesService').FavoritesService.postFavoritesServiceRcmsApi1FavoritesInsertRequest} */
  const requestData = {
    requestBody: {
      module_type: moduleType,
      module_id: moduleId,
    },
    lang: 'en',
  };
  delete requestData.requestBody[targetCol];
  return executeRequest({
    cy,
    query: 'favorite insert',
    requestData,
  });
};

const insertFavoriteMailformedTargetCols = [
  'module_type',
  'module_id',
  'page_sysnm',
];
const insertFavoriteMailformed = ({ moduleId, targetCol }) => {
  /** @type {import('../../../../generated/services/FavoritesService').FavoritesService.postFavoritesServiceRcmsApi1FavoritesInsertRequest} */
  const requestData = {
    requestBody: {
      module_type: 'topics',
      module_id: moduleId,
      page_sysnm: 'api_test',
    },
    lang: 'en',
  };
  requestData.requestBody[targetCol] = ['test'];
  return executeRequest({
    cy,
    query: 'favorite insert',
    requestData,
  });
};

const insertFavoriteIllegalModule = ({ moduleId }) => {
  /** @type {import('../../../../generated/services/FavoritesService').FavoritesService.postFavoritesServiceRcmsApi1FavoritesInsertRequest} */
  const requestData = {
    requestBody: {
      module_type: 'no_such_module',
      module_id: moduleId,
      page_sysnm: 'api_test',
    },
    lang: 'en',
  };
  return executeRequest({
    cy,
    query: 'favorite insert',
    requestData,
  });
};

// topics for Favorite Test
const topicsIdFavoriteTest = 44;
// member_id of default test member
const defaultMemberId = 9;

describe('Favorite pattern', () => {

  insertFavoriteWithoutRequiredTargetCols.forEach(target => {
    it('insert favorite without required ' + target + ' -> error', async () => {
      try {
        login();
        let errorResponse = {};
        await insertFavoriteWithoutRequired({moduleId: topicsIdFavoriteTest, targetCol: target})
          .then(res => console.log('!!RES!!', res))
          .catch(e => {
            console.log('!!ERR!!', e);
            errorResponse = JSON.parse(e.message);
          });
        expect(errorResponse.status).to.equal(400, target);
        expect(errorResponse.body.errors[0]).to.include('Required property missing: ' + target);
      } catch(e) {
        console.log('ERROR!!', e);
      }
    });
  });

  insertFavoriteMailformedTargetCols.forEach(target => {
    it('insert favorite with malformed ' + target + ' -> error', async () => {
      login();
      let errorResponse = {};
      await insertFavoriteMailformed({ moduleId: topicsIdFavoriteTest, targetCol: target }).catch(e => {
        errorResponse = JSON.parse(e.message);
      });
      expect(errorResponse.status).to.equal(400);
      expect(errorResponse.body.errors[0]).to.include('properties:'+target, target);
    });
  });

  it('insert favorite with module_type not exist -> error', async () => {
    login();
    let errorResponse = {};
    await insertFavoriteIllegalModule({ moduleId: topicsIdFavoriteTest }).catch(e => {
      errorResponse = JSON.parse(e.message);
    });
    expect(errorResponse.status).to.equal(400);
  });

});
