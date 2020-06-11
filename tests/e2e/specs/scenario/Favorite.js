/// <reference types="cypress" />
// @ts-check

// https://docs.cypress.io/api/introduction/api.html

import { executeRequest, login } from '../../base';

const getFavorites = ({ memberId }) => {
  /** @type {import('../../../../generated/services/FavoritesService').FavoritesService.getFavoritesServiceRcmsApi1FavoritesRequest} */
  const requestData = {
    memberId: memberId,
  };
  return executeRequest({
    cy,
    query: 'favorite get',
    requestData,
  });
};

const insertFavorite = ({ moduleType = 'topics', moduleId }) => {
  /** @type {import('../../../../generated/services/FavoritesService').FavoritesService.postFavoritesServiceRcmsApi1FavoritesInsertRequest} */
  const requestData = {
    requestBody: {
      module_type: moduleType,
      module_id: moduleId,
    },
  };
  return executeRequest({
    cy,
    query: 'favorite insert',
    requestData,
  });
};

const deleteFavorite = ({ moduleType = 'topics', moduleId }) => {
  /** @type {import('../../../../generated/services/FavoritesService').FavoritesService.postFavoritesServiceRcmsApi1FavoritesDeleteRequest} */
  const requestData = {
    requestBody: {
      module_type: moduleType,
      module_id: moduleId,
    },
  };
  return executeRequest({
    cy,
    query: 'favorite delete',
    requestData,
  });
};

// topics for Favorite Test
const topicsIdFavoriteTest = 44;
// member_id of default test member
const defaultMemberId = 9;

describe('Favorite', () => {

  it(`
      delete all favorites of test member ->
      get favorites of test members ->
      insert favorite ->
      get favorites including inserted one ->
      delete favorites ->
      get favorites not including deleted one
  `, async () => {
    login();
    // delete all favorites of test member
    while (true) {
      const favorites = await getFavorites({ memberId: defaultMemberId });
      if ( favorites.list.length === 0) {
        break;
      }
      favorites.list.forEach(row => {
        deleteFavorite({ moduleType: row.module_type, moduleId: row.module_id});
      });
    };
    // get favorites of test members
    expect(
      (await getFavorites({ memberId: defaultMemberId })).list
    ).to.empty;
    // insert favorite
    await insertFavorite({ moduleId: topicsIdFavoriteTest });
    // get favorites including inserted one
    expect(
      (await getFavorites({memberId: defaultMemberId}))
        .list
        .find(row => row.module_id === topicsIdFavoriteTest)
    ).to.exist;
    // delete favorites
    await deleteFavorite({ moduleId: topicsIdFavoriteTest });
    // get favorites not including deleted one
    expect(
      (await getFavorites({memberId: defaultMemberId}))
        .list
        .find(row => row.module_id === topicsIdFavoriteTest)
    ).to.not.exist;

  });
});
