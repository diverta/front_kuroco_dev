/// <reference types="cypress" />
// @ts-check

// https://docs.cypress.io/api/introduction/api.html

import { executeRequest, formatDate, login, upload } from '../../base';
import promisify from 'cypress-promise';


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

const postUpdateTopicDescNm = ({ topicsId }) => {
  /** @type {import('../../../../generated/services/TopicsService').TopicsService.postTopicsServiceRcmsApi1Topics1UpdateTopicsIdRequest} */
  const requestData = {
    topicsId: topicsId,
    requestBody: {
      ext_col_11: {
        file_nm: 'file-nm.png',
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
  diverta: 'diverta.png'
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
      post delete topic ->
      get deleted topic
  `, async () => {
    login();
    
    // post insert topic with file
    const insertFile = await upload({ path: fixtures.rcms });
    const insertRes = await postInsertTopic({ file: insertFile });
    const addedId = insertRes.id;

    // get inserted topic
    const insertedTopic = await getTopic({ topicsId: addedId });
    expect(insertedTopic.details.ext_col_11.desc).to.equal('insert');
    const insertedFileUrl = insertedTopic.details.ext_col_11.url;
    expect(insertedFileUrl).to.exist;
    
    // post update topic with file
    const updateFile = await upload({ path: fixtures.diverta });
    await postUpdateTopic({ topicsId: addedId, file: updateFile });

    // get updated topic
    const updatedTopic = await getTopic({ topicsId: addedId });
    expect(updatedTopic.details.ext_col_11.desc).to.equal('update');
    const updatedFileUrl = updatedTopic.details.ext_col_11.url;
    expect(updatedFileUrl).to.exist;

    // post update topic with only desc
    await postUpdateTopicDesc({ topicsId: addedId });

    // get updated topic
    const updatedTopicDesc = await getTopic({ topicsId: addedId });
    expect(updatedTopicDesc.details.ext_col_11.desc).to.equal('desc');
    const updatedFileDescUrl = updatedTopicDesc.details.ext_col_11.url;
    expect(updatedFileDescUrl).to.exist;

    // post update topic with desc & file_nm
    await postUpdateTopicDescNm({ topicsId: addedId });

    // get updated topic
    const updatedTopicDescNm = await getTopic({ topicsId: addedId });
    expect(updatedTopicDescNm.details.ext_col_11.desc).to.equal('desc&file_nm');
    const updatedFileDescNmUrl = updatedTopicDescNm.details.ext_col_11.url;
    expect(updatedFileDescNmUrl).to.exist;

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
