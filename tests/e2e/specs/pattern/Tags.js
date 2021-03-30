/// <reference types="cypress" />
// @ts-check

// https://docs.cypress.io/api/introduction/api.html

import { executeRequest, login } from '../../base';

const postInsertTagWithoutTagName = () => {
  /** @type {import('../../../../generated/services/TagsService').TagsService.postTagsServiceRcmsApi1TagsInsertRequest} */
  const requestData = {
    requestBody: {
      //tag_nm: 'TestTag' + Date.now(),
    },
    lang: 'en',
  };
  return executeRequest({
    cy,
    query: 'tags post insert',
    requestData,
  });
}

const postInsertTagMalformedTargetCols = [
  'tag_nm',
  'open_type',
  'tag_category_id',
  'weight',
  'ext_col_01',
  'ext_col_02',
  'ext_col_03',
  'ext_col_04',
  'ext_col_05',
  'ext_col_06',
  'ext_col_07',
  'ext_col_08',
  'ext_col_09',
  'ext_col_10',
];
const postInsertTagMalformed = ({ targetCol }) => {
  /** @type {import('../../../../generated/services/TagsService').TagsService.postTagsServiceRcmsApi1TagsInsertRequest} */
  const requestData = {
    requestBody: {
      tag_nm: 'TestTag' + Date.now(),
      open_type: 'open',
      tag_category_id: 0,
      weight: 0,
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
    },
    lang: 'en',
  };
  switch (targetCol) {
    case 'open_type':
    case 'tag_category_id':
    case 'weight':
      requestData.requestBody[targetCol] = 'test';
      break;
    case 'tag_nm':
    case 'ext_col_01':
    case 'ext_col_02':
    case 'ext_col_03':
    case 'ext_col_04':
    case 'ext_col_05':
    case 'ext_col_06':
    case 'ext_col_07':
    case 'ext_col_08':
    case 'ext_col_09':
    case 'ext_col_10':
      requestData.requestBody[targetCol] = ['test'];
      break;
    default:
      throw new Error();

  }
  return executeRequest({
    cy,
    query: 'tags post insert',
    requestData,
  });
}

describe('Comment pattern', () => {

  it('insert comment without required tag_nm -> error', async () => {
    login();
    let errorResponse = {};
    await postInsertTagWithoutTagName().catch(e => {
      errorResponse = JSON.parse(e.message);
    })
    expect(errorResponse.status).to.equal(400, 'tag_nm');
    expect(errorResponse.body.errors[0].code).to.equal('required');
    expect(errorResponse.body.errors[0].message).to.equal('Required property missing');
    expect(errorResponse.body.errors[0].field).to.equal('tag_nm');
  });

  postInsertTagMalformedTargetCols.forEach(target => {
    it('insert comment with malformed ' + target + ' -> error', async () => {
      login();
      let errorResponse = {};
      await postInsertTagMalformed({ targetCol: target }).catch(e => {
        errorResponse = JSON.parse(e.message);
      });
      expect(errorResponse.status).to.equal(400);
      expect(errorResponse.body.errors[0].code).to.equal('invalid');
      expect(errorResponse.body.errors[0].field).to.equal(target);
    });
  });

});
