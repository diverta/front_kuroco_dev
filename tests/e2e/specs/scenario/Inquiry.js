/// <reference types="cypress" />
// @ts-check

// https://docs.cypress.io/api/introduction/api.html

import { executeRequest, login } from '../../base';

const getMessages = () => {
  /** @type {import('../../../../generated/services/InquiriesService').InquiriesService.getInquiriesServiceRcmsApi1Inquiry1MessagesRequest} */
  const requestData = {};
  return executeRequest({
    cy,
    query: 'inquiry messages get',
    requestData,
  });
};
const getForms = () => {
  /** @type {import('../../../../generated/services/InquiriesService').InquiriesService.getInquiriesServiceRcmsApi1InquiryFormsRequest} */
  const requestData = {};
  return executeRequest({
    cy,
    query: 'inquiry forms get',
    requestData,
  });
};
const getFormById = ({ inquiryId }) => {
  /** @type {import('../../../../generated/services/InquiriesService').InquiriesService.getInquiriesServiceRcmsApi1InquiryFormsInquiryIdRequest} */
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
  /** @type {import('../../../../generated/services/InquiriesService').InquiriesService.postInquiriesServiceRcmsApi1Inquiry1MessagesSendRequest} */
  const requestData = {
    requestBody: {
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
        file_id: 'test.png',
        file_nm: 'test',
        desc: '',
      },
      ext_08: {
        tdfk_cd: '01',
        tdfk_nm: '北海道',
      },
      ext_09: {
        options: '1',
        text: 'Text',
      },
      ext_10: new Date().toISOString().substr(0, 10),
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
  /** @type {import('../../../../generated/services/InquiriesService').InquiriesService.postInquiriesServiceRcmsApi1Inquiry1MessagesUpdateRequest} */
  const requestData = {
    inquiryBnId,
    requestBody: {
      name: 'My Name',
      from_mail: 'email@example.com',
      body: 'テストメッセージ2',
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
        file_id: '',
        file_nm: '',
        desc: '',
      },
      ext_08: {
        tdfk_cd: '01',
        tdfk_nm: '北海道',
      },
      ext_09: {
        options: '1',
        text: 'Text',
      },
      ext_10: new Date().toISOString().substr(0, 10),
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
      get form by ID 1 ->
      send message ->
      get messages including sended one ->
      get message of created message ->
      update created message ->
      get message of updated message
    `, async () => {
    login();
    // cy.visit('/');
    await getMessages();
    const formsGetRes = await getForms();
    const inquiryId = formsGetRes.list.find(
      ({ inquiry_id }) => inquiry_id === 1
    ).inquiry_id;
    await getFormById({ inquiryId });

    let messageGetRes = await sendMessage();
    const addedId = messageGetRes.id;

    const getMessageBy = async addedId => {
      return (await getMessages()).list.find(
        msg => msg.inquiry_bn_id === addedId
      ).body;
    };
    expect(await getMessageBy(addedId)).to.equal('テストメッセージ1');

    updateMessage({ inquiryBnId: addedId });
    expect(await getMessageBy(addedId)).to.equal('テストメッセージ2');
  });
});
