/// <reference types="cypress" />
// @ts-check

// https://docs.cypress.io/api/introduction/api.html

import { executeRequest, login } from '../../base';

const postInsertCommentWithoutRequiredTargetCols = [
  'module_id',
  'name',
  'note',
];
const postInsertCommentWithoutRequired = ({ topicsId, targetCol }) => {
  /** @type {import('../../../../generated/services/ActivityService').ActivityService.postActivityServiceRcmsApi1TopicsCommentsInsertRequest} */
  const requestData = {
    requestBody: {
      module_id: topicsId,
      name: 'Name',
      note: 'Text',
    },
   lang: 'en', 
  };
  delete requestData.requestBody[targetCol];
  return executeRequest({
    cy,
    query: 'comment post insert',
    requestData,
  });
}

const postInsertCommentMalformedTargetCols = [
  'module_id',
  'name',
  'mail',
  'url',
  'note',
  'rating',
  'delkey'
];
const postInsertCommentMalformed = ({ topicsId, targetCol }) => {
  /** @type {import('../../../../generated/services/ActivityService').ActivityService.postActivityServiceRcmsApi1TopicsCommentsInsertRequest} */
  const requestData = {
    requestBody: {
      module_id: topicsId,
      name: 'Insert',
      mail: 'insert@example.com',
      url: 'https://insert.example.com',
      note: 'test comment insert',
      rating: 3,
      delkey: 'test',
    },
   lang: 'en', 
  };
  requestData.requestBody[targetCol] = ['test', 0];
  return executeRequest({
    cy,
    query: 'comment post insert',
    requestData,
  });
}

// topics for Comment Test
const topicsIdCommentTest = 45;

describe('Comment pattern', () => {

  postInsertCommentWithoutRequiredTargetCols.forEach(target => {
    it('insert comment without required ' + target + ' -> error', async () => {
      login();
      let errorResponse = {};
      await postInsertCommentWithoutRequired({ topicsId: topicsIdCommentTest, targetCol: target }).catch(e => {
        errorResponse = JSON.parse(e.message);
      })
      expect(errorResponse.status).to.equal(400, target);
      expect(errorResponse.body.errors[0].code).to.equal('required');
      expect(errorResponse.body.errors[0].message).to.equal('Required property missing');
      expect(errorResponse.body.errors[0].field).to.equal(target);
    });
  });

  postInsertCommentMalformedTargetCols.forEach(target => {
    it('insert comment with malformed ' + target + ' -> error', async () => {
      login();
      let errorResponse = {};
      await postInsertCommentMalformed({ topicsId: topicsIdCommentTest, targetCol: target }).catch(e => {
        errorResponse = JSON.parse(e.message);
      });
      expect(errorResponse.status).to.equal(400);
      expect(errorResponse.body.errors[0].code).to.equal('invalid');
      expect(errorResponse.body.errors[0].field).to.equal(target);
    });
  });

});
