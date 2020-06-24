/// <reference types="cypress" />
// @ts-check

// https://docs.cypress.io/api/introduction/api.html

import { executeRequest, login, upload } from '../../base';

const getMessages = () => {
  /** @type {import('../../../../generated/services/InquiriesService').InquiriesService.getInquiriesServiceRcmsApi1Inquiry1MessagesRequest} */
  const requestData = {};
  return executeRequest({
    cy,
    query: 'inquiry messages get',
    requestData,
    timeout: 15000,
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
const sendMessage = ({ file }) => {
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
          key: '1',
          label: 'check1',
        },
        {
          key: '3',
          label: 'check3',
        },
      ],
      ext_06: '2020-04-23 10:28 +0900',
      ext_07: {
        file_id: file.fileId,
        file_nm: file.fileNm,
        desc: 'desc1',
      },
      ext_08: {
        tdfk_cd: '01',
        tdfk_nm: '北海道',
      },
      ext_09: {
        options: '1',
        text: 'Text1',
      },
      ext_10: '2020-04-23',
      validate_only: false,
    },
  };
  return executeRequest({
    cy,
    query: 'inquiry send',
    requestData,
    timeout: 15000,
  });
};
const updateMessage = ({ inquiryBnId, file }) => {
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
        key: '2',
        label: 'radio2',
      },
      ext_04: {
        key: '2',
        label: 'select2',
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
      ext_06: '2020-04-24 10:28 +0900',
      ext_07: {
        file_id: file.fileId,
        file_nm: file.fileNm,
        desc: 'desc2',
      },
      ext_08: {
        tdfk_cd: '13',
        tdfk_nm: '東京都',
      },
      ext_09: {
        options: '2',
        text: 'Text2',
      },
      ext_10: '2020-04-24',
      validate_only: false,
    },
  };
  return executeRequest({
    cy,
    query: 'inquiry update',
    requestData,
    timeout: 15000,
  });
};

const fixtures = {
  rcms: 'rcms.png',
  diverta: 'diverta.png',
  rcms_white: 'rcms_white.png',
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

    const sendFile = fixtures.diverta;
    const sendFileData = await upload({ path: sendFile });
    let messageGetRes = await sendMessage({ file: sendFileData });
    const addedId = messageGetRes.id;

    const getMessageBy = async addedId => {
      try {
        return (await getMessages()).list.find(
          msg => msg.inquiry_bn_id === addedId
        );
      } catch(e) {
        throw Error(`the created message is not found.\nid: ${addedId}\n${e}`)
      }
    };
    const sentMessage = await getMessageBy(addedId);
    expect(sentMessage).to.exist;
    expect(sentMessage.name, 'name').to.equal('John Doe');
    expect(sentMessage.from_mail, 'from_mail').to.equal('email@example.com');
    expect(sentMessage.body, 'body').to.equal('テストメッセージ1');
    expect(sentMessage.inquiry_category_id, 'inquiry_category_id').to.equal(1);
    expect(sentMessage.ext_01, 'ext_01').to.equal('string1');
    expect(sentMessage.ext_02, 'ext_02').to.equal('string1');
    expect(sentMessage.ext_03.key, 'ext_03.key').to.equal('1');
    expect(sentMessage.ext_03.label, 'ext_03.label').to.equal('radio1');
    expect(sentMessage.ext_04.key, 'ext_04.key').to.equal('1');
    expect(sentMessage.ext_04.label, 'ext_04.label').to.equal('select1');
    expect(sentMessage.ext_05.length, 'ext_05').to.equal(2);
    expect(sentMessage.ext_05, 'ext_05').to.deep.include({key: '1', label: 'check1'});
    expect(sentMessage.ext_05, 'ext_05').to.deep.include({key: '3', label: 'check3'});
    // expect(sentMessage.ext_06, 'ext_06').to.equal('2020-04-23 10:28:42 +0900');
    expect(sentMessage.ext_07.desc, 'ext_07.desc').to.equal('desc1');
    expect(sentMessage.ext_07.url, 'ext_07.url').to.exist;
    expect(sentMessage.ext_08.tdfk_cd, 'ext_08.tdfk_cd').to.equal('01');
    expect(sentMessage.ext_08.tdfk_nm, 'ext_08.tdfk_nm').to.equal('北海道');
    expect(sentMessage.ext_09.options, 'ext_09.options').to.equal('1');
    expect(sentMessage.ext_09.text, 'ext_09.text').to.equal('Text1');
    // expect(sentMessage.ext_10, 'ext_10').to.equal('2020-04-23');

    const updateFile = fixtures.rcms;
    const updateFileData = await upload({ path: updateFile });
    updateMessage({ inquiryBnId: addedId, file: updateFileData });
    const updatedMessage = await getMessageBy(addedId);
    expect(updatedMessage).to.exist;
    expect(updatedMessage.name, 'name').to.equal('My Name');
    expect(updatedMessage.from_mail, 'from_mail').to.equal('email@example.com');
    expect(updatedMessage.body, 'body').to.equal('テストメッセージ2');
    expect(updatedMessage.inquiry_category_id, 'inquiry_category_id').to.equal(1);
    expect(updatedMessage.ext_01, 'ext_01').to.equal('string2');
    expect(updatedMessage.ext_02, 'ext_02').to.equal('string2');
    expect(updatedMessage.ext_03.key, 'ext_03.key').to.equal('2');
    expect(updatedMessage.ext_03.label, 'ext_03.label').to.equal('radio2');
    expect(updatedMessage.ext_04.key, 'ext_04.key').to.equal('2');
    expect(updatedMessage.ext_04.label, 'ext_04.label').to.equal('select2');
    expect(updatedMessage.ext_05.length, 'ext_05').to.equal(2);
    expect(updatedMessage.ext_05, 'ext_05').to.deep.include({key: '2', label: 'check2'});
    expect(updatedMessage.ext_05, 'ext_05').to.deep.include({key: '3', label: 'check3'});
    // expect(updatedMessage.ext_06, 'ext_06').to.equal('2020-04-24 10:28:42 +0900');
    expect(updatedMessage.ext_07.desc, 'ext_07.desc').to.equal('desc2');
    expect(updatedMessage.ext_07.url, 'ext_07.url').to.exist;
    expect(updatedMessage.ext_08.tdfk_cd, 'ext_08.tdfk_cd').to.equal('13');
    expect(updatedMessage.ext_08.tdfk_nm, 'ext_08.tdfk_nm').to.equal('東京都');
    expect(updatedMessage.ext_09.options, 'ext_09.options').to.equal('2');
    expect(updatedMessage.ext_09.text, 'ext_09.text').to.equal('Text2');
    // expect(updatedMessage.ext_10, 'ext_10').to.equal('2020-04-24');

  });
});
