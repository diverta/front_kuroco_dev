/// <reference types="cypress" />
// @ts-check

// https://docs.cypress.io/api/introduction/api.html

import { executeRequest, login, logout } from '../../base';

const getComments = ({ topicsId }) => {
  /** @type {import('../../../../generated/services/ActivityService').ActivityService.getRcmsApi1TopicsCommentsRequest} */
  const requestData = {
    moduleId: topicsId,
    newOrderFlg: 0,
    lang: 'en',
  };
  return executeRequest({
    cy,
    query: 'comment get',
    requestData,
  });
};

const postInsertCommentData = {
  name: 'Insert',
  mail: 'insert@example.com',
  url: 'https://insert.example.com',
  note: 'test comment insert',
  rating: 5,
};
const postInsertComment = ({ topicsId }) => {
  /** @type {import('../../../../generated/services/ActivityService').ActivityService.postRcmsApi1TopicsCommentsInsertRequest} */
  const requestData = {
    requestBody: {
      module_id: topicsId,
      name: postInsertCommentData.name,
      mail: postInsertCommentData.mail,
      url: postInsertCommentData.url,
      note: postInsertCommentData.note,
      rating: postInsertCommentData.rating,
      delkey: 'test',
    },
   lang: 'en', 
  };
  return executeRequest({
    cy,
    query: 'comment post insert',
    requestData,
  });
}

const postUpdateCommentData = {
  name: 'Update',
  mail: 'update@example.com',
  url: 'https://update.example.com',
  note: 'test comment update',
  rating: 1,
};
const postUpdateComment = ({ commentId, topicsId }) => {
  /** @type {import('../../../../generated/services/ActivityService').ActivityService.postRcmsApi1TopicsCommentsUpdateCommentIdRequest} */
  const requestData = {
    commentId: commentId,
    requestBody: {
      module_id: topicsId,
      name: postUpdateCommentData.name,
      mail: postUpdateCommentData.mail,
      url: postUpdateCommentData.url,
      note: postUpdateCommentData.note,
      rating: postUpdateCommentData.rating,
      delkey: 'test',
    },
    lang: 'en', 
  };
  return executeRequest({
    cy,
    query: 'comment post update',
    requestData,
  });
}

const postDeleteComment = ({ commentId }) => {
  /** @type {import('../../../../generated/services/ActivityService').ActivityService.postRcmsApi1TopicsCommentsDeleteCommentIdRequest} */
  const requestData = {
    commentId: commentId,
    requestBody: {
      delkey: 'test',
    },
    lang: 'en', 
  };
  return executeRequest({
    cy,
    query: 'comment post delete',
    requestData,
  });
}


/* 
 * get comments ->
 * post insert comment ->
 * get comments including inserted one ->
 * post update inserted comment ->
 * get comments including updated one ->
 * post delete updated comment ->
 * get comments not including deleted one 
 */
const testCommentScenario = async () => {
  // get comments
  await getComments({ topicsId: topicsIdCommentTest });

  // post insert comment
  const insertRes = await postInsertComment({ topicsId: topicsIdCommentTest });
  const addedId = insertRes.id;

  // get comments including inserted one
  const insertedList = await getComments({topicsId: [topicsIdCommentTest]});
  const insertedComment = insertedList.list.find(row => row.comment_id === addedId);

  expect(insertedComment).to.exist;
  Object.keys(postInsertCommentData).forEach(key => {
    if(key=='name') return;
    expect(insertedComment[key], key).to.equal(postInsertCommentData[key]);
  });
  expect(insertedComment['member_id'], 'member_id').to.not.equal(0);

  
  // post update comment
  await postUpdateComment({ topicsId: topicsIdCommentTest, commentId: addedId });

  // get comments including updated one
  const updatedList = await getComments({topicsId: [topicsIdCommentTest]});
  const updatedComment = updatedList.list.find(row => row.comment_id === addedId);

  expect(updatedComment).to.exist;
  Object.keys(postUpdateCommentData).forEach(key => {
    expect(updatedComment[key], key).to.equal(postUpdateCommentData[key]);
  });
  expect(updatedComment['member_id'], 'member_id').to.not.equal(0);

  // post delete comment
  await postDeleteComment({ commentId: addedId });

  // get comments not including deleted one
  expect(
    (await getComments({topicsId: [topicsIdCommentTest]}))
      .list
      .find(row => row.comment_id === addedId)
  ).to.not.exist;
  
};

// topics for Comment Test
const topicsIdCommentTest = 45;

describe('Comment', () => {


  it(`
      login ->
      get comments ->
      post insert comment ->
      get comments including inserted one ->
      post update inserted comment ->
      get comments including updated one ->
      post delete updated comment ->
      get comments not including deleted one

  `, async () => {
    login();
    await testCommentScenario();
    // logout();
  });

});
