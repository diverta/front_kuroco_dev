/// <reference types="cypress" />
// @ts-check

// https://docs.cypress.io/api/introduction/api.html

import { executeRequest, formatDate, login, upload, getFileNm } from '../../base';
import promisify from 'cypress-promise';
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

const getTopicMultiple = ({ topicsId }) => {
  /** @type {import('../../../../generated/services/TopicsService').TopicsService.getTopicsServiceRcmsApi1TopicsMultipleTopicsIdRequest} */
  const requestData = {
    topicsId: topicsId,
    lang: 'en',
  };
  return executeRequest({
    cy,
    query: 'TopicsService get topics multiple id',
    requestData,
  });
};

const postInsertTopicMultiple = ({ files = [] }) => {
  /** @type {import('../../../../generated/services/TopicsService').TopicsService.postTopicsServiceRcmsApi1TopicsMultipleInsertRequest} */
  const requestData = {
    requestBody: {
      subject: 'File Test',
      ymd: formatDate('date'),
      contents_type: 2,
      open_type: 'open',
      contents: 'test',
      ext_col_11: files.map((file, idx) => {
        return {
          file_id: file.fileId,
          file_nm: file.fileNm,
          desc: `insert:${idx}`,
        };
      }),
      validate_only: false,
    },
    lang: 'en',
  };
  return executeRequest({
    cy,
    query: 'TopicsService post topics multiple insert',
    requestData,
    timeout: 15000,
  });
};

const postUpdateTopicMultiple = ({ topicsId, files = [] }) => {
  /** @type {import('../../../../generated/services/TopicsService').TopicsService.postTopicsServiceRcmsApi1TopicsMultipleUpdateTopicsIdRequest} */
  const requestData = {
    topicsId: topicsId,
    requestBody: {
      ext_col_11: files.map((file, idx) => {
        return {
          file_id: file.fileId,
          file_nm: file.fileNm,
          desc: `update:${idx}`,
        };
      }),
      validate_only: false,
    },
    lang: 'en',
  };
  return executeRequest({
    cy,
    query: 'TopicsService post topics multiple update',
    requestData,
    timeout: 15000,
  });
};

const postUpdateTopicMultipleDesc = ({ topicsId, filesCount }) => {
  /** @type {import('../../../../generated/services/TopicsService').TopicsService.postTopicsServiceRcmsApi1TopicsMultipleUpdateTopicsIdRequest} */
  const requestData = {
    topicsId: topicsId,
    requestBody: {
      ext_col_11: [...new Array(filesCount)].map((_, idx) => {
        return {
          desc: `desc:${idx}`, 
        };
      }),
      validate_only: false,
    },
    lang: 'en',
  };
  return executeRequest({
    cy,
    query: 'TopicsService post topics multiple update',
    requestData,
    timeout: 15000,
  });
};

const postUpdateTopicMultipleDescNm = ({ topicsId, fileNms }) => {
  /** @type {import('../../../../generated/services/TopicsService').TopicsService.postTopicsServiceRcmsApi1TopicsMultipleUpdateTopicsIdRequest} */
  const requestData = {
    topicsId: topicsId,
    requestBody: {
      ext_col_11: fileNms.map((fileNm, idx) => {
        return {
          file_nm: fileNm,
          desc: `desc&file_nm:${idx}`, 
        };
      }),
      validate_only: false,
    },
    lang: 'en',
  };
  return executeRequest({
    cy,
    query: 'TopicsService post topics multiple update',
    requestData,
    timeout: 15000,
  });
};

const postUpdateTopicMultipleRearrangement = ({ topicsId, ids }) => {
  /** @type {import('../../../../generated/services/TopicsService').TopicsService.postTopicsServiceRcmsApi1TopicsMultipleUpdateTopicsIdRequest} */
  const requestData = {
    topicsId: topicsId,
    requestBody: {
      ext_col_11: ids.map((id) => {
        return {
          id: id,
        };
      }),
      validate_only: false,
    },
    lang: 'en',
  };
  return executeRequest({
    cy,
    query: 'TopicsService post topics multiple update',
    requestData,
    timeout: 15000,
  });
};

const postUpdateTopicMultipleAddFile = ({ topicsId, ids, insertFile, insertIndex }) => {
  /** @type {import('../../../../generated/services/TopicsService').TopicsService.postTopicsServiceRcmsApi1TopicsMultipleUpdateTopicsIdRequest} */
  const requestData = {
    topicsId: topicsId,
    requestBody: {
      ext_col_11: ids.map((id) => {
        return {
          id: id,
        };
      }),
      validate_only: false,
    },
    lang: 'en',
  };
  requestData.requestBody.ext_col_11.splice(insertIndex, 0, {
    file_id: insertFile.fileId,
    file_nm: insertFile.fileNm,
    desc: 'inserted',
  });
  return executeRequest({
    cy,
    query: 'TopicsService post topics multiple update',
    requestData,
    timeout: 15000,
  });
};

const postUpdateTopicMultipleDeleteFile = ({ topicsId, ids, deleteIndex }) => {
  /** @type {import('../../../../generated/services/TopicsService').TopicsService.postTopicsServiceRcmsApi1TopicsMultipleUpdateTopicsIdRequest} */
  const requestData = {
    topicsId: topicsId,
    requestBody: {
      ext_col_11: ids.map((id) => {
        return {
          id: id,
        };
      }),
      validate_only: false,
    },
    lang: 'en',
  };
  requestData.requestBody.ext_col_11.splice(deleteIndex, 1);
  return executeRequest({
    cy,
    query: 'TopicsService post topics multiple update',
    requestData,
    timeout: 15000,
  });
};

const postUpdateTopicMultipleDeleteAllFile = ({ topicsId }) => {
  /** @type {import('../../../../generated/services/TopicsService').TopicsService.postTopicsServiceRcmsApi1TopicsMultipleUpdateTopicsIdRequest} */
  const requestData = {
    topicsId: topicsId,
    requestBody: {
      ext_col_11: [],
      validate_only: false,
    },
    lang: 'en',
  };
  return executeRequest({
    cy,
    query: 'TopicsService post topics multiple update',
    requestData,
    timeout: 15000,
  });
};

const postDeleteTopicMultiple = ({ topicsId }) => {
  /** @type {import('../../../../generated/services/TopicsService').TopicsService.postTopicsServiceRcmsApi1TopicsMultipleDeleteTopicsIdRequest} */
  const requestData = {
    topicsId: topicsId,
    lang: 'en',
  };
  return executeRequest({
    cy,
    query: 'TopicsService post topics multiple delete',
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

  it(`
    post insert topic with file ->
    get inserted topic ->
    post update topic with file ->
    get updated topic ->
    post update topic with only desc ->
    get updated topic ->
    post update topic with desc & file_nm ->
    get updated topic ->
    post update topic with rearrangement ->
    get updated topic ->
    post update topic added new file ->
    get updated topic ->
    post update topic delete one file ->
    get updated topic ->
    post update topic delete all files ->
    get updated topic ->
    post delete topic ->
    get deleted topic
  `, async () => {
    login();

    // post insert topic with file
    const insertFiles = [fixtures.rcms, fixtures.diverta];
    const insertFilesData = [];
    for (let idx = 0; idx < insertFiles.length; idx++) {
      insertFilesData[idx] = await upload({ path: insertFiles[idx] });
    }
    const insertRes = await postInsertTopicMultiple({ files: insertFilesData });
    const addedId = insertRes.id;

    // get inserted topic
    const insertedTopic = await getTopicMultiple({ topicsId: addedId });
    expect(insertedTopic.details.ext_col_11).to.not.empty;
    for (let idx = 0; idx < insertFiles.length; idx++) {
      expect(insertedTopic.details.ext_col_11[idx].desc).to.equal(`insert:${idx}`);
      const insertedFileUrl = insertedTopic.details.ext_col_11[idx].url;
      expect(insertedFileUrl).to.exist;
      const insertedFileNm = getFileNm(insertedFileUrl);
      expect(path.extname(insertedFileNm)).to.equal(path.extname(insertFiles[idx]));
    }

    // post update topic with file
    const updateFiles = [fixtures.diverta, fixtures.rcms];
    const updateFilesData = [];
    for (let idx = 0; idx < updateFiles.length; idx++) {
      updateFilesData[idx] = await upload({ path: updateFiles[idx] });
    }
    await postUpdateTopicMultiple({ topicsId: addedId, files: updateFilesData });

    // get updated topic
    const updatedTopic = await getTopicMultiple({ topicsId: addedId });
    expect(updatedTopic.details.ext_col_11).to.not.empty;
    for (let idx = 0; idx < updateFiles.length; idx++) {
      expect(updatedTopic.details.ext_col_11[idx].desc).to.equal(`update:${idx}`);
      const updatedFileUrl = updatedTopic.details.ext_col_11[idx].url;
      expect(updatedFileUrl).to.exist;
      const updatedFileNm = getFileNm(updatedFileUrl);
      expect(path.extname(updatedFileNm)).to.equal(path.extname(updateFiles[idx]));
    }

    // post update topic with only desc
    await postUpdateTopicMultipleDesc({ topicsId: addedId, filesCount: updateFiles.length });

    // get updated topic
    const updatedTopicDesc = await getTopicMultiple({ topicsId: addedId });
    expect(updatedTopicDesc.details.ext_col_11).to.not.empty;
    for (let idx = 0; idx < updateFiles.length; idx++) {
      expect(updatedTopicDesc.details.ext_col_11[idx].desc).to.equal(`desc:${idx}`);
      const updatedFileUrl = updatedTopicDesc.details.ext_col_11[idx].url;
      expect(updatedFileUrl).to.exist;
    }

    // post update topic with desc & file_nm
    const currentFileNms = updatedTopicDesc.details.ext_col_11.map(file => getFileNm(file.url));
    await postUpdateTopicMultipleDescNm({ topicsId: addedId, fileNms: currentFileNms });

    // get updated topic
    const updatedTopicDescNm = await getTopicMultiple({ topicsId: addedId });
    expect(updatedTopicDescNm.details.ext_col_11).to.not.empty;
    for (let idx = 0; idx < currentFileNms.length; idx++) {
      expect(updatedTopicDescNm.details.ext_col_11[idx].desc).to.equal(`desc&file_nm:${idx}`);
      const updatedFileUrl = updatedTopicDescNm.details.ext_col_11[idx].url;
      expect(updatedFileUrl).to.exist;
    }

    // post update topic with rearrangement
    const currentIds = updatedTopicDescNm.details.ext_col_11.map(file => file.id);
    const updateIds = currentIds.slice(1).concat(currentIds[0]);
    await postUpdateTopicMultipleRearrangement({ topicsId: addedId, ids: updateIds });

    // get updated topic
    const updatedTopicRearrangement = await getTopicMultiple({ topicsId: addedId });
    expect(updatedTopicRearrangement.details.ext_col_11).to.not.empty;
    for (let idx = 0; idx < updateIds.length; idx++) {
      expect(updatedTopicRearrangement.details.ext_col_11[idx].id).to.equal(updateIds[idx]);
      const updatedFileUrl = updatedTopicRearrangement.details.ext_col_11[idx].url;
      expect(updatedFileUrl).to.exist;
    }

    // post update topic added new file
    const insertFileData = await upload({ path: fixtures.rcms_white });
    const insertIndex = 1;
    await postUpdateTopicMultipleAddFile({
      topicsId: addedId,
      ids: updateIds,
      insertFile: insertFileData,
      insertIndex: insertIndex,
    });

    // get updated topic
    const updatedTopicAddFile = await getTopicMultiple({ topicsId: addedId });
    expect(updatedTopicAddFile.details.ext_col_11).to.not.empty;
    expect(updatedTopicAddFile.details.ext_col_11.length).to.equal(updateIds.length + 1);
    expect(updatedTopicAddFile.details.ext_col_11[insertIndex].desc).to.equal('inserted');
    expect(updatedTopicAddFile.details.ext_col_11[insertIndex].url).to.exist;
    
    for (let idx = 0; idx < updateIds.length; idx++) {
      const expectedIndex = idx >= insertIndex ? idx + 1 : idx;
      expect(updatedTopicAddFile.details.ext_col_11[expectedIndex].id).to.equal(updateIds[idx]);
      const updatedFileUrl = updatedTopicAddFile.details.ext_col_11[expectedIndex].url;
      expect(updatedFileUrl).to.exist;
    }

    // post update topic delete one file
    const currentIdsAdded = updatedTopicAddFile.details.ext_col_11.map(file => file.id);
    const deleteIndex = 0;
    await postUpdateTopicMultipleDeleteFile({
      topicsId: addedId,
      ids: currentIdsAdded,
      deleteIndex: deleteIndex,
    });

    // get updated topic
    const updatedTopicDeleteFile = await getTopicMultiple({ topicsId: addedId });
    expect(updatedTopicDeleteFile.details.ext_col_11).to.not.empty;
    expect(updatedTopicDeleteFile.details.ext_col_11.length).to.equal(currentIdsAdded.length - 1);
    for(let idx = 0; idx < updatedTopicDeleteFile.details.ext_col_11.length; idx++) {
      const idsIndex = idx >= deleteIndex ? idx + 1 : idx;
      expect(updatedTopicDeleteFile.details.ext_col_11[idx].id).to.equal(currentIdsAdded[idsIndex]);
      const updatedFileUrl = updatedTopicDeleteFile.details.ext_col_11[idx].url;
      expect(updatedFileUrl).to.exist;
    }

    // post update topic delete all files
    await postUpdateTopicMultipleDeleteAllFile({ topicsId: addedId });

    // get updated topic
    const updatedTopicDeleteAllFiles = await getTopicMultiple({ topicsId: addedId });
    expect(updatedTopicDeleteAllFiles.details.ext_col_11).to.empty;

    // post delete topic
    await postDeleteTopicMultiple({ topicsId: addedId });

    // get deleted topic
    let errorResponse = {};
    await getTopicMultiple({ topicsId: addedId }).catch(e => {
      errorResponse = JSON.parse(e.message);
    });
    expect(errorResponse.status).to.equal(404);


  });

});
