/// <reference types="cypress" />
// @ts-check

// https://docs.cypress.io/api/introduction/api.html

import { executeRequest, login } from '../../base';

const getTags = () => {
  /** @type {import('../../../../generated/services/TagsService').TagsService.getRcmsApi1TagsRequest} */
  const requestData = {
    lang: 'en',
  };
  return executeRequest({
    cy,
    query: 'tags get',
    requestData,
  });
};

const getTagsByIds = ({ tagIds }) => {
  /** @type {import('../../../../generated/services/TagsService').TagsService.getRcmsApi1TagsRequest} */
  const requestData = {
    id: tagIds,
    lang: 'en',
  };
  return executeRequest({
    cy,
    query: 'tags get',
    requestData,
  });
};

const postInsertTagData = {
  ext_col_01: 'ext_01',
  ext_col_02: 'ext_02',
  ext_col_03: 'ext_03',
  ext_col_04: 'ext_04',
  ext_col_05: 'ext_05',
  ext_col_06: 'ext_06',
  ext_col_07: 'ext_07',
  ext_col_08: 'ext_08',
  ext_col_09: 'ext_09',
  ext_col_10: 'ext_10',
};
const postInsertTag = () => {
  /** @type {import('../../../../generated/services/TagsService').TagsService.postRcmsApi1TagsInsertRequest} */
  const requestData = {
    requestBody: {
      tag_nm: 'TestTag' + Date.now(),
      open_type: 'open',
      // tag_category_id: 1,
      // weight: 0,
      ext_col_01: postInsertTagData.ext_col_01,
      ext_col_02: postInsertTagData.ext_col_02,
      ext_col_03: postInsertTagData.ext_col_03,
      ext_col_04: postInsertTagData.ext_col_04,
      ext_col_05: postInsertTagData.ext_col_05,
      ext_col_06: postInsertTagData.ext_col_06,
      ext_col_07: postInsertTagData.ext_col_07,
      ext_col_08: postInsertTagData.ext_col_08,
      ext_col_09: postInsertTagData.ext_col_09,
      ext_col_10: postInsertTagData.ext_col_10,
    },
    lang: 'en',
  };
  return executeRequest({
    cy,
    query: 'tags post insert',
    requestData,
  });
}

const postDeleteTag = ({ tagId }) => {
  /** @type {import('../../../../generated/services/TagsService').TagsService.postRcmsApi1TagsDeleteTagIdRequest} */
  const requestData = {
    tagId: tagId,
  };
  return executeRequest({
    cy,
    query: 'tags post delete',
    requestData,
  });
};

describe('Tags', () => {

  it(`
      get tags ->
      post insert tag ->
      get tags including inserted one ->
      post delete inserted tag ->
      get tags not including deleted one
  `, async () => {
    login();

    // get tags
    await getTags();

    // post insert tag
    const insertRes = await postInsertTag();
    const addedId = insertRes.id;

    // get tags including inserted one
    const insertedList = await getTagsByIds({ tagIds: [addedId] });
    const insertedTag = insertedList.list.find(row => row.tag_id === addedId);
    expect(insertedTag).to.exist;
    Object.keys(postInsertTagData).forEach(key => {
      expect(insertedTag[key], key).to.equal(postInsertTagData[key]);
    });

    // post delete inserted tag
    await postDeleteTag({ tagId: addedId });

    // get tags not including deleted one
    expect(
      (await getTagsByIds({ tagIds: [addedId] }))
        .list
        .find(row => row.tag_id === addedId)
    ).to.not.exist;

  });

});
