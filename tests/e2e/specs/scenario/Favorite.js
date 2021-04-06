/// <reference types="cypress" />
// @ts-check

// https://docs.cypress.io/api/introduction/api.html

import { executeRequest, login, profile } from '../../base';

const getFavorites = ({ memberId }) => {
  /** @type {import('../../../../generated/services/FavoritesService').FavoritesService.getRcmsApi1FavoritesRequest} */
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
  /** @type {import('../../../../generated/services/FavoritesService').FavoritesService.getRcmsApi1FavoritesRequest} */
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
  /** @type {import('../../../../generated/services/FavoritesService').FavoritesService.postRcmsApi1FavoritesInsertRequest} */
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

const deleteFavoriteByFavoriteId = ({ favoriteId }) => {
  /** @type {import('../../../../generated/services/FavoritesService').FavoritesService.postRcmsApi1FavoritesDeleteFavoriteIdRequest} */
  const requestData = {
    favoriteId: favoriteId,
    requestBody: {
    },
    lang: 'en',
  };
  return executeRequest({
    cy,
    query: 'favorite delete id',
    requestData,
  });
};

const deleteFavoriteByModuleId = ({ moduleType = 'topics', moduleId }) => {
  /** @type {import('../../../../generated/services/FavoritesService').FavoritesService.postRcmsApi1FavoritesDeleteBodyRequest} */
  const requestData = {
    requestBody: {
      module_type: moduleType,
      module_id: moduleId,
    },
    lang: 'en',
  };
  return executeRequest({
    cy,
    query: 'favorite delete body',
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
      delete favorite by favorite_id ->
      get favorites not including deleted one
      insert favorite ->
      get favorites including inserted one ->
      delete favorite by module_id ->
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

    await deleteFavoriteByModuleId({ moduleType: 'topics', moduleId: topicsIdFavoriteTest });
    
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
        .find(row => row.favorite_id === addedId);
    expect(insertedFavorite).to.exist;
    // delete favorite by favorite_id
    await deleteFavoriteByFavoriteId({ favoriteId: insertedFavorite.favorite_id });
    // get favorites not including deleted one
    expect(
      (await getFavorites({memberId: memberId}))
        .list
        .find(row => row.favorite_id === addedId)
    ).to.not.exist;


    // insert favorite
    await insertFavorite({ moduleType: 'topics', moduleId: topicsIdFavoriteTest });
    // get favorites including inserted one
    expect(
      (await getFavoritesByModuleId({ memberId: memberId, moduleType: 'topics', moduleId: topicsIdFavoriteTest }))
        .list
        .find(row => row.module_id === topicsIdFavoriteTest)
    ).to.exist;
    // delete favorite by favorite_id
    await deleteFavoriteByModuleId({ moduleType: 'topics', moduleId: topicsIdFavoriteTest });
    // get favorites not including deleted one
    expect(
      (await getFavorites({memberId: memberId}))
        .list
        .find(row => row.module_id === topicsIdFavoriteTest)
    ).to.not.exist;

  });
});
