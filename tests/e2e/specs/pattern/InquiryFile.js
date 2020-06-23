/// <reference types="cypress" />
// @ts-check

// https://docs.cypress.io/api/introduction/api.html

import { executeRequest, formatDate, login, upload, getFileNm } from '../../base';
const path = require('path');

const getMessageById = ({ inquiryBnId }) => {
  /** @type {import('../../../../generated/services/InquiriesService').InquiriesService.getInquiriesServiceRcmsApi1Inquiry1MessagesRequest} */
  const requestData = {};
  return executeRequest({
    cy,
    query: 'inquiry messages get',
    requestData,
  }).then((res) => {
    return res.list.find(
      msg => msg.inquiry_bn_id === inquiryBnId
    );
  });
};

const sendMessage = ({ file }) => {
  /** @type {import('../../../../generated/services/InquiriesService').InquiriesService.postInquiriesServiceRcmsApi1Inquiry1MessagesSendRequest} */
  const requestData = {
    requestBody: {
      name: 'File Test',
      from_mail: 'email@example.com',
      body: 'test',
      inquiry_category_id: 1,
      ext_01: 'test',
      ext_04: '1',
      ext_07: {
        file_id: file.fileId,
        file_nm: file.fileNm,
        desc: 'inserted',
      },
      validate_only: false,
    },
  };
  return executeRequest({
    cy,
    query: 'inquiry send',
    requestData,
  });
};

const updateMessage = ({ inquiryBnId, file }) => {
  /** @type {import('../../../../generated/services/InquiriesService').InquiriesService.postInquiriesServiceRcmsApi1Inquiry1MessagesUpdateRequest} */
  const requestData = {
    inquiryBnId: inquiryBnId,
    requestBody: {
      ext_07: {
        file_id: file.fileId,
        file_nm: file.fileNm,
        desc: 'updated',
      },
      validate_only: false,
    },
  };
  return executeRequest({
    cy,
    query: 'inquiry update',
    requestData,
  });
};

const updateMessageDesc = ({ inquiryBnId }) => {
  /** @type {import('../../../../generated/services/InquiriesService').InquiriesService.postInquiriesServiceRcmsApi1Inquiry1MessagesUpdateRequest} */
  const requestData = {
    inquiryBnId: inquiryBnId,
    requestBody: {
      ext_07: {
        desc: 'desc',
      },
      validate_only: false,
    },
  };
  return executeRequest({
    cy,
    query: 'inquiry update',
    requestData,
  });
};

const updateMessageDeleteFile = ({ inquiryBnId }) => {
  /** @type {import('../../../../generated/services/InquiriesService').InquiriesService.postInquiriesServiceRcmsApi1Inquiry1MessagesUpdateRequest} */
  const requestData = {
    inquiryBnId: inquiryBnId,
    requestBody: {
      ext_07: {},
      validate_only: false,
    },
  };
  return executeRequest({
    cy,
    query: 'inquiry update',
    requestData,
  });
};


const fixtures = {
  rcms: 'rcms.png',
  diverta: 'diverta.png',
  rcms_white: 'rcms_white.png',
};

describe('Topics pattern (File)', () => {

  it(`
      send message with file ->
      get message ->
      update message with file ->
      get message ->
      update message with only desc ->
      get message ->
      update message delete file ->
      get message
  `, async () => {
    login();

    // send message with file
    const insertFile = fixtures.rcms;
    const insertFileData = await upload({ path: insertFile });
    const insertRes = await sendMessage({ file: insertFileData });
    const addedId = insertRes.id;

    // get message
    const insertedMsg = await getMessageById({ inquiryBnId: addedId });
    expect(insertedMsg).to.exist;
    expect(insertedMsg.ext_07.desc).to.equal('inserted');
    const insertedFileUrl = insertedMsg.ext_07.url;
    expect(insertedFileUrl).to.exist;
    // const insertedFileNm = getFileNm(insertedFileUrl);
    // expect(path.extname(insertedFileNm)).to.equal(path.extname(insertFile));

    // update message with file
    const updateFile = fixtures.diverta;
    const updateFileData = await upload({ path: updateFile });
    await updateMessage({ inquiryBnId: addedId, file: updateFileData });

    // get message
    const updatedMsg = await getMessageById({ inquiryBnId: addedId });
    expect(updatedMsg).to.exist;
    expect(updatedMsg.ext_07.desc).to.equal('updated');
    const updatedFileUrl = updatedMsg.ext_07.url;
    expect(updatedFileUrl).to.exist;
    // const updatedFileNm = getFileNm(updatedFileUrl);
    // expect(path.extname(updatedFileNm)).to.equal(path.extname(updateFile));

    // update message with only desc
    await updateMessageDesc({ inquiryBnId: addedId });

    // get message
    const updatedMsgDesc = await getMessageById({ inquiryBnId: addedId });
    expect(updatedMsgDesc).to.exist;
    expect(updatedMsgDesc.ext_07.desc).to.equal('desc');
    const updatedFileDescUrl = updatedMsgDesc.ext_07.url;
    expect(updatedFileDescUrl).to.exist;

    // update message delete file
    await updateMessageDeleteFile({ inquiryBnId: addedId });

    // get message
    const updateMsgDeleteFile = await getMessageById({ inquiryBnId: addedId });
    expect(updateMsgDeleteFile).to.exist;
    expect(updateMsgDeleteFile.ext_07.desc).to.be.empty;


  });

});
