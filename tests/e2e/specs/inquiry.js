/// <reference types="cypress" />
// @ts-check

// https://docs.cypress.io/api/introduction/api.html

import { executeRequest } from '../base';

import {
  RcmsApi1Topics1InsertExtCol05TdfkCdEnum,
  RcmsApi1Topics1InsertExtCol05TdfkNmEnum,
  RcmsApi1Topics1InsertExtJsn12OptionsEnum,
} from 'kuroco';

const getMessages = () => {
  /** @type {import('kuroco').InquiriesApiRcmsApi1Inquiry1MessagesGetRequest} */
  const requestData = {};
  return executeRequest({
    cy,
    query: 'inquiry messages get',
    requestData,
  });
};
const getForms = () => {
  /** @type {import('kuroco').InquiriesApiRcmsApi1InquiryFormsGetRequest} */
  const requestData = {};
  return executeRequest({
    cy,
    query: 'inquiry forms get',
    requestData,
  });
};
const getFormById = ({ inquiryId }) => {
  /** @type {import('kuroco').InquiriesApiRcmsApi1InquiryFormsInquiryIdGetRequest} */
  const requestData = {
    inquiryId,
  };
  return executeRequest({
    cy,
    query: 'inquiry forms id get',
    requestData,
  });
};
const sendMessage = () => {
  /** @type {import('kuroco').InquiriesApiRcmsApi1Inquiry1MessagesSendPostRequest} */
  const requestData = {
    inlineObject16: {
      name: 'John Doe',
      from_mail: 'email@example.com',
      body: 'テストメッセージ1',
      inquiry_category_id: 1,
      ext_01: 'string1',
      ext_02: 'string1',
      ext_03: {
        key: '1',
        label: 'radio1',
      },
      ext_04: {
        key: '1',
        label: 'select1',
      },
      ext_05: [
        {
          key: '2',
          label: 'check2',
        },
        {
          key: '3',
          label: 'check3',
        },
      ],
      ext_06: '2020-04-23 10:28 +0900',
      ext_07: {
        id: 'test1',
        file_id: '',
        file_nm: '',
        desc: '',
      },
      ext_08: {
        tdfk_cd: RcmsApi1Topics1InsertExtCol05TdfkCdEnum._01,
        tdfk_nm: RcmsApi1Topics1InsertExtCol05TdfkNmEnum._北海道,
      },
      ext_09: {
        options: RcmsApi1Topics1InsertExtJsn12OptionsEnum._1,
        text: 'Text',
      },
      ext_10: new Date(),
      validate_only: false,
    },
  };
  return executeRequest({
    cy,
    query: 'inquiry send',
    requestData,
  });
};
const updateMessage = ({ inquiryBnId }) => {
  /** @type {import('kuroco').InquiriesApiRcmsApi1Inquiry1MessagesUpdatePostRequest} */
  const requestData = {
    inquiryBnId,
    inlineObject17: {
      name: 'My Name',
      from_mail: 'email@example.com',
      body: 'Example Message',
      inquiry_category_id: 1,
      ext_01: 'string2',
      ext_02: 'string2',
      ext_03: {
        key: '1',
        label: 'radio1',
      },
      ext_04: {
        key: '1',
        label: 'select1',
      },
      ext_05: [
        {
          key: '2',
          label: 'check2',
        },
        {
          key: '3',
          label: 'check3',
        },
      ],
      ext_06: '2020-04-23 10:28 +0900',
      ext_07: {
        id: 'test2',
        file_id: '',
        file_nm: '',
        desc: '',
      },
      ext_08: {
        tdfk_cd: RcmsApi1Topics1InsertExtCol05TdfkCdEnum._01,
        tdfk_nm: RcmsApi1Topics1InsertExtCol05TdfkNmEnum._北海道,
      },
      ext_09: {
        options: RcmsApi1Topics1InsertExtJsn12OptionsEnum._1,
        text: 'Text',
      },
      ext_10: new Date(),
      validate_only: false,
    },
  };
  return executeRequest({
    cy,
    query: 'inquiry update',
    requestData,
  });
};

describe('Inquiry', () => {
  it(`
    get messages ->
    get forms ->
    get form by id ->
    send message ->
    get messages ->
    update message ->
    get messages
  `, async () => {
    await getMessages();
    const formsGetResTxt = await getForms();
    const id1Form = JSON.parse(formsGetResTxt).list.find(
      ({ inquiry_id }) => inquiry_id === 1
    );
    await getFormById({ inquiryId: id1Form.inquiry_id });
    await sendMessage();
    // getMessages();
    // updateMessage({ inquiryBnId: '1' });
    // getMessages();
  });
});
