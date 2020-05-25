/// <reference types="cypress" />
// @ts-check

// https://docs.cypress.io/api/introduction/api.html

import { executeRequest, login } from '../../base';

const getTopics = () => {
  /** @type {import('../../../../generated/services/TopicsService').TopicsService.getTopicsServiceRcmsApi1Topics1Request} */
  const requestData = {};
  return executeRequest({
    cy,
    query: 'TopicsService get topics1',
    indexOfApis: 1,
    requestData,
  });
};
const getTopic = ({ topicsId }) => {
  /** @type {import('../../../../generated/services/TopicsService').TopicsService.getTopicsServiceRcmsApi1Topics1TopicsIdRequest} */
  const requestData = {
    topicsId,
  };
  return executeRequest({
    cy,
    query: 'TopicsService get topics1 id',
    requestData,
  });
};
const postInsertTopic = () => {
  /** @type {import('../../../../generated/services/TopicsService').TopicsService.postTopicsServiceRcmsApi1Topics1InsertRequest} */
  const requestData = {
    requestBody: {
      subject: 'Inserted',
      contents_type: 1,
      ymd: '2020-04-23',
      open_type: 'open',
      topics_flg: 0,
      season: 1,
      contents: 'SampleValue',
      regular_flg: 1,
      link_flg: 1,
      link_url: 'SampleValue',
      ext_col_01: 'SampleValue',
      ext_col_02: 'SampleValue',
      ext_col_03: { key: '1', label: 'Option1' },
      ext_col_04: [{ key: '1', label: 'Option1' }],
      ext_col_07: '2020-04-23',
      ext_col_08: '2020-04-23 10:28 +0900',
      ext_col_05: {
        tdfk_cd: '01',
        tdfk_nm: '北海道',
      },
      ext_col_15: {
        tdfk_cd: '01',
        tdfk_nm: '北海道',
        sub_area_cd: '01100',
        sub_area_nm: '札幌市',
      },
      ext_col_06: { key: '1', label: 'Parent1' },
      ext_col_09: 1,
      ext_col_11: {
        file_id: 'SampleValue',
        file_nm: 'SampleValue',
        desc: 'SampleValue',
      },
      ext_jsn_12: {
        options: '1',
        text: 'SampleValue',
      },
      ext_col_13: 'SampleValue',
      ext_col_14: 'SampleValue',
      validate_only: true,
    },
  };
  return executeRequest({
    cy,
    query: 'TopicsService post topics1 insert',
    requestData,
  });
};
const postUpdateTopic = () => {};
const postDeleteTopic = () => {};

describe('Topics', () => {
  it(`
      get topics ->
      get topic by ID ->
      post insert topic ->
      get topics including inserted one ->
      get topic by ID of inserted one ->
      post update inserted topic ->
      get topics including updated one ->
      get topic by ID of updated one ->
      post delete updated topic ->
      get topics not including deleted one ->
      get topic by ID of deleted one (should be empty)
    `, async () => {
    login();
    const topics = await getTopics();
    const topic = await getTopic({
      topicsId: topics.list[0].topics_id,
    });
    const res = await postInsertTopic();
    console.log(res);
  });
});
