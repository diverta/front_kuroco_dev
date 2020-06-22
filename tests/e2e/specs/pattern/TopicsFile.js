/// <reference types="cypress" />
// @ts-check

// https://docs.cypress.io/api/introduction/api.html

import { executeRequest, formatDate, login, upload, getFileNm } from '../../base';
const path = require('path');

const getTopic = ({ topicsId }) => {
  /** @type {import('../../../../generated/services/TopicsService').TopicsService.getTopicsServiceRcmsApi1Topics1TopicsIdRequest} */
  const requestData = {
    topicsId: topicsId,
    lang: 'en',
  };
  return executeRequest({
    cy,
    query: 'TopicsService get topics1 id',
    requestData,
  });
};

const postInsertTopic = ({ file }) => {
  /** @type {import('../../../../generated/services/TopicsService').TopicsService.postTopicsServiceRcmsApi1Topics1InsertRequest} */
  const requestData = {
    requestBody: {
      subject: 'File Test',
      ymd: formatDate('date'),
      contents_type: 1,
      open_type: 'open',
      contents: 'test',
      ext_col_11: {
        file_id: file.fileId,
        file_nm: file.fileNm,
        desc: 'insert',
      },
      validate_only: false,
    },
    lang: 'en',
  };
  return executeRequest({
    cy,
    query: 'TopicsService post topics1 insert',
    requestData,
    timeout: 15000,
  });
};

const postUpdateTopic = ({ topicsId, file }) => {
  /** @type {import('../../../../generated/services/TopicsService').TopicsService.postTopicsServiceRcmsApi1Topics1UpdateTopicsIdRequest} */
  const requestData = {
    topicsId: topicsId,
    requestBody: {
      ext_col_11: {
        file_id: file.fileId,
        file_nm: file.fileNm,
        desc: 'update',
      },
      validate_only: false,
    },
    lang: 'en',
  };
  return executeRequest({
    cy,
    query: 'TopicsService post topics1 update',
    requestData,
    timeout: 15000,
  });
};

const postUpdateTopicDesc = ({ topicsId }) => {
  /** @type {import('../../../../generated/services/TopicsService').TopicsService.postTopicsServiceRcmsApi1Topics1UpdateTopicsIdRequest} */
  const requestData = {
    topicsId: topicsId,
    requestBody: {
      ext_col_11: {
        desc: 'desc',
      },
      validate_only: false,
    },
    lang: 'en',
  };
  return executeRequest({
    cy,
    query: 'TopicsService post topics1 update',
    requestData,
  });
};

const postUpdateTopicDescNm = ({ topicsId, fileNm }) => {
  /** @type {import('../../../../generated/services/TopicsService').TopicsService.postTopicsServiceRcmsApi1Topics1UpdateTopicsIdRequest} */
  const requestData = {
    topicsId: topicsId,
    requestBody: {
      ext_col_11: {
        file_nm: fileNm,
        desc: 'desc&file_nm',
      },
      validate_only: false,
    },
    lang: 'en',
  };
  return executeRequest({
    cy,
    query: 'TopicsService post topics1 update',
    requestData,
  });
};

const postUpdateTopicDeleteFile = ({ topicsId }) => {
  /** @type {import('../../../../generated/services/TopicsService').TopicsService.postTopicsServiceRcmsApi1Topics1UpdateTopicsIdRequest} */
  const requestData = {
    topicsId: topicsId,
    requestBody: {
      ext_col_11: {},
      validate_only: false,
    },
    lang: 'en',
  };
  return executeRequest({
    cy,
    query: 'TopicsService post topics1 update',
    requestData,
  });
};

const postDeleteTopic = ({ topicsId }) => {
  /** @type {import('../../../../generated/services/TopicsService').TopicsService.postTopicsServiceRcmsApi1Topics1DeleteTopicsIdRequest} */
  const requestData = {
    topicsId: topicsId,
    lang: 'en',
  };
  return executeRequest({
    cy,
    query: 'TopicsService post topics1 delete',
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
      post insert topic with file ->
      get inserted topic ->
      post update topic with file ->
      get updated topic ->
      post update topic with only desc ->
      get updated topic ->
      post update topic with desc & file_nm ->
      get updated topic ->
      post update topic delete file ->
      hey updated topic ->
      post delete topic ->
      get deleted topic
  `, async () => {
    login();
    
    // post insert topic with file
    const insertFile = fixtures.rcms;
    const insertFileData = await upload({ path: insertFile });
    const insertRes = await postInsertTopic({ file: insertFileData });
    const addedId = insertRes.id;

    // get inserted topic
    const insertedTopic = await getTopic({ topicsId: addedId });
    expect(insertedTopic.details.ext_col_11.desc).to.equal('insert');
    const insertedFileUrl = insertedTopic.details.ext_col_11.url;
    expect(insertedFileUrl).to.exist;
    const insertedFileNm = getFileNm(insertedFileUrl);
    expect(path.extname(insertedFileNm)).to.equal(path.extname(insertFile));
    
    // post update topic with file
    const updateFile = fixtures.diverta;
    const updateFileData = await upload({ path: updateFile });
    await postUpdateTopic({ topicsId: addedId, file: updateFileData });

    // get updated topic
    const updatedTopic = await getTopic({ topicsId: addedId });
    expect(updatedTopic.details.ext_col_11.desc).to.equal('update');
    const updatedFileUrl = updatedTopic.details.ext_col_11.url;
    expect(updatedFileUrl).to.exist;
    const updatedFileNm = getFileNm(updatedFileUrl);
    expect(path.extname(updatedFileNm)).to.equal(path.extname(updateFile));

    // post update topic with only desc
    await postUpdateTopicDesc({ topicsId: addedId });

    // get updated topic
    const updatedTopicDesc = await getTopic({ topicsId: addedId });
    expect(updatedTopicDesc.details.ext_col_11.desc).to.equal('desc');
    const updatedFileDescUrl = updatedTopicDesc.details.ext_col_11.url;
    expect(updatedFileDescUrl).to.exist;

    // post update topic with desc & file_nm
    const currentFileNm = getFileNm(updatedFileDescUrl);
    await postUpdateTopicDescNm({ topicsId: addedId, fileNm: currentFileNm });

    // get updated topic
    const updatedTopicDescNm = await getTopic({ topicsId: addedId });
    expect(updatedTopicDescNm.details.ext_col_11.desc).to.equal('desc&file_nm');
    const updatedFileDescNmUrl = updatedTopicDescNm.details.ext_col_11.url;
    expect(updatedFileDescNmUrl).to.exist;

    // post update topic delete file
    await postUpdateTopicDeleteFile({ topicsId: addedId });

    // het updated topic
    const updatedTopicDeleteFile = await getTopic({ topicsId: addedId });
    expect(updatedTopicDeleteFile.details.ext_col_11).to.empty;

    // post delete topic
    await postDeleteTopic({ topicsId: addedId });

    // get deleted topic
    let errorResponse = {};
    await getTopic({ topicsId: addedId }).catch(e => {
      errorResponse = JSON.parse(e.message);
    });
    expect(errorResponse.status).to.equal(404);

  });

});
