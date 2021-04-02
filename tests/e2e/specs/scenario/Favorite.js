/// <reference types="cypress" />
// @ts-check

// https://docs.cypress.io/api/introduction/api.html

import { executeRequest, login, profile } from '../../base';

const getFavorites = ({ memberId }) => {
  /** @type {import('../../../../generated/services/FavoritesService').FavoritesService.getFavoritesServiceRcmsApi1FavoritesRequest} */
  const requestData = {
    memberId: memberId,
    lang: 'en',
  };
  return executeRequest({
    cy,
    query: 'favorite get',
    requestData,
  });
};

const getFavoritesByModuleId = ({ memberId, moduleType = 'topics', moduleId }) => {
  /** @type {import('../../../../generated/services/FavoritesService').FavoritesService.getFavoritesServiceRcmsApi1FavoritesRequest} */
  const requestData = {
    memberId: memberId,
    moduleType: [moduleType],
    moduleId: moduleId,
    lang: 'en',
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
    lang: 'en',
  };
  return executeRequest({
    cy,
    query: 'favorite insert',
    requestData,
  });
};

const deleteFavorite = ({ favoriteId }) => {
  /** @type {import('../../../../generated/services/FavoritesService').FavoritesService.postFavoritesServiceRcmsApi1FavoritesDeleteFavoriteIdRequest} */
  const requestData = {
    favoriteId: favoriteId,
    requestBody: {
    },
    lang: 'en',
  };
  return executeRequest({
    cy,
    query: 'favorite delete',
    requestData,
  });
};

// topics for Favorite Test
const topicsIdFavoriteTest = 44;

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
    const memberId = (await profile()).member_id;

    // delete all favorites of test member
    // while (true) {
    //   const favorites = await getFavorites({ memberId: memberId });
    //   if ( favorites.list.length === 0) {
    //     break;
    //   }
    //   /*
    //    * なんか順に削除する処理がうまく動かない上に、
    //    * 削除されないことも結構あるので要調査
    //    */
    //   for (let row of favorites.list) {
    //     await deleteFavorite({ favoriteId: row.favorite_id });
    //   }
    // };

    // get favorites of test members
    expect(
      (await getFavorites({ memberId: memberId })).list
    ).to.empty;

    // insert favorite
    const insertRes = await insertFavorite({ moduleType: 'topics', moduleId: topicsIdFavoriteTest });
    const addedId = insertRes.id;
    // get favorites including inserted one
    const insertedFavorite = (await getFavoritesByModuleId({ memberId: memberId, moduleType: 'topics', moduleId: topicsIdFavoriteTest }))
        .list
        .find(row => row.module_id === topicsIdFavoriteTest);
    expect(insertedFavorite).to.exist;
    // delete favorites
    await deleteFavorite({ favoriteId: insertedFavorite.favorite_id });
    // get favorites not including deleted one
    expect(
      (await getFavorites({memberId: memberId}))
        .list
        .find(row => row.module_id === topicsIdFavoriteTest)
    ).to.not.exist;

  });
});
