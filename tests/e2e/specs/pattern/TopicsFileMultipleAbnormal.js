/// <reference types="cypress" />
// @ts-check

// https://docs.cypress.io/api/introduction/api.html

import { executeRequest, formatDate, login, upload, getFileNm } from '../../base';

const getTopicMultiple = ({ topicsId }) => {
  /** @type {import('../../../../generated/services/ContentService').ContentService.getContentServiceRcmsApi1TopicsMultipleTopicsIdRequest} */
  const requestData = {
    topicsId: topicsId,
    lang: 'en',
  };
  return executeRequest({
    cy,
    query: 'ContentService get topics multiple id',
    requestData,
    timeout: 15000,
  });
};

const postInsertTopicMultiple = ({ files }) => {
  /** @type {import('../../../../generated/services/ContentService').ContentService.postContentServiceRcmsApi1TopicsMultipleInsertRequest} */
  const requestData = {
    requestBody: {
      subject: 'File Test',
      ymd: formatDate('date'),
      contents_type: 2,
      open_type: 'open',
      contents: 'test',
      ext_col_11: files,
      validate_only: false,
    },
    lang: 'en',
  };
  return executeRequest({
    cy,
    query: 'ContentService post topics multiple insert',
    requestData,
    timeout: 15000,
  });
};

const postInsertTopicMultipleImage = ({ files }) => {
  /** @type {import('../../../../generated/services/ContentService').ContentService.postContentServiceRcmsApi1TopicsMultipleInsertRequest} */
  const requestData = {
    requestBody: {
      subject: 'File Test',
      ymd: formatDate('date'),
      contents_type: 2,
      open_type: 'open',
      contents: 'test',
      ext_col_17: files,
      validate_only: false,
    },
    lang: 'en',
  };
  return executeRequest({
    cy,
    query: 'ContentService post topics multiple insert',
    requestData,
    timeout: 15000,
  });
};

const postUpdateTopicMultiple = ({ topicsId, files }) => {
  /** @type {import('../../../../generated/services/ContentService').ContentService.postContentServiceRcmsApi1TopicsMultipleUpdateTopicsIdRequest} */
  const requestData = {
    topicsId: topicsId,
    requestBody: {
      ext_col_11: files,
      validate_only: false,
    },
    lang: 'en',
  };
  return executeRequest({
    cy,
    query: 'ContentService post topics multiple update',
    requestData,
    timeout: 15000,
  });
};

const postUpdateTopicMultipleImage = ({ topicsId, files }) => {
  /** @type {import('../../../../generated/services/ContentService').ContentService.postContentServiceRcmsApi1TopicsMultipleUpdateTopicsIdRequest} */
  const requestData = {
    topicsId: topicsId,
    requestBody: {
      ext_col_17: files,
      validate_only: false,
    },
    lang: 'en',
  };
  return executeRequest({
    cy,
    query: 'ContentService post topics multiple update',
    requestData,
    timeout: 15000,
  });
};


const fixtures = {
  rcms: 'rcms.png',
  diverta: 'diverta.png',
  rcms_white: 'rcms_white.png',
  empty_pdf: 'empty.pdf'
};


describe('Topics pattern (Multiple File)', () => {

  it(`insert topic with inappropriate values`, async () => {
    login();
    let errorResponse = {};
    await postInsertTopicMultiple({files: [
      {
        file_id: 'foo',
        file_nm: 'bar',
        desc: 'baz'
      },
      {
        file_id: 'FOO',
        file_nm: 'BAR',
        desc: 'BAZ',
      },
    ]}).catch(e => {
      errorResponse = JSON.parse(e.message);
    });
    expect(errorResponse.status).to.equal(400);
  });

  it(`insert topic with additional key`, async () => {
    login();
    let errorResponse = {};
    const file1 = await upload({ path: fixtures.rcms });
    const file2= await upload({ path: fixtures.rcms_white });
    await postInsertTopicMultiple({files: [
      {
        file_id: file1.fileId,
        file_nm: file1.fileNm,
        desc: 'desc',
      },
      {
        file_id: file2.fileId,
        file_nm: file2.fileNm,
        desc: 'desc',
        test_key: 'test',
      },
    ]}).catch(e => {
      errorResponse = JSON.parse(e.message);
    });
    expect(errorResponse.status).to.equal(400);
    expect(errorResponse.body.errors[0].message).to.include('Additional properties not allowed: test_key');
  });

  it(`insert topic with empty values`, async () => {
    login();
    let errorResponse = {};
    await postInsertTopicMultiple({files: [
      {
        file_id: '',
        file_nm: '',
        desc: ''
      },
      {
        file_id: '',
        file_nm: '',
        desc: ''
      },
    ]}).catch(e => {
      errorResponse = JSON.parse(e.message);
    });
    expect(errorResponse.status).to.equal(400);
  });

  it(`insert topic with null values`, async () => {
    login();
    let errorResponse = {};
    await postInsertTopicMultiple({files: [
      {
        file_id: null,
        file_nm: null,
        desc: null
      },
      {
        file_id: null,
        file_nm: null,
        desc: null
      },
    ]}).catch(e => {
      errorResponse = JSON.parse(e.message);
    });
    expect(errorResponse.status).to.equal(400);
    expect(errorResponse.body.errors[0].message).to.include('null');
  });

  it(`insert topic with no extension`, async () => {
    login();
    let errorResponse = {};
    const file1 = await upload({ path: fixtures.rcms });
    const file2 = await upload({ path: fixtures.rcms });
    await postInsertTopicMultiple({files: [
      {
        file_id: file1.fileId,
        file_nm: file1.fileNm.replace(/\.(?!.*\..*).+/, ''),
        desc: 'desc',
      },
      {
        file_id: file2.fileId,
        file_nm: file2.fileNm.replace(/\.(?!.*\..*).+/, ''),
        desc: 'desc',
      },
    ]}).catch(e => {
      errorResponse = JSON.parse(e.message);
    });
    expect(errorResponse.status).to.equal(400);
  });

  it(`insert topic with wrong extension in file_nm`, async () => {
    login();
    let errorResponse = {};
    const file1 = await upload({ path: fixtures.rcms });
    const file2 = await upload({ path: fixtures.rcms });
    await postInsertTopicMultiple({files: [
      {
        file_id: file1.fileId,
        file_nm: file1.fileNm.replace(/\.(?!.*\..*).+/, '.html'),
        desc: 'desc',
      },
      {
        file_id: file2.fileId,
        file_nm: file2.fileNm.replace(/\.(?!.*\..*).+/, '.html'),
        desc: 'desc',
      },
    ]}).catch(e => {
      errorResponse = JSON.parse(e.message);
    });
    expect(errorResponse.status).to.equal(400);
  });

  it(`insert topic set image to not image file`, async () => {
    login();
    let errorResponse = {};
    const file1 = await upload({ path: fixtures.empty_pdf });
    const file2 = await upload({ path: fixtures.empty_pdf });
    await postInsertTopicMultipleImage({files: [
      {
        file_id: file1.fileId,
        file_nm: file1.fileNm,
        desc: 'desc',
      },
      {
        file_id: file2.fileId,
        file_nm: file2.fileNm,
        desc: 'desc',
      },
    ]}).catch(e => {
      errorResponse = JSON.parse(e.message);
    });
    expect(errorResponse.status).to.equal(400);
    expect(errorResponse.body.errors[0].message).to.include('The extension is invalid');
  });

  it(`insert topic with no extension image`, async () => {
    login();
    let errorResponse = {};
    const file1 = await upload({ path: fixtures.rcms });
    const file2 = await upload({ path: fixtures.rcms_white });
    await postInsertTopicMultipleImage({files: [
      {
        file_id: file1.fileId,
        file_nm: file1.fileNm.replace(/\.(?!.*\..*).+/, ''),
        desc: 'desc',
      },
      {
        file_id: file2.fileId,
        file_nm: file2.fileNm.replace(/\.(?!.*\..*).+/, ''),
        desc: 'desc',
      },
    ]}).catch(e => {
      errorResponse = JSON.parse(e.message);
    });
    expect(errorResponse.status).to.equal(400);
  });

  it(`insert topic with wrong extension in image file_nm (png -> pdf)`, async () => {
    login();
    let errorResponse = {};
    const file1 = await upload({ path: fixtures.rcms });
    const file2 = await upload({ path: fixtures.rcms_white });
    await postInsertTopicMultipleImage({files: [
      {
        file_id: file1.fileId,
        file_nm: file1.fileNm.replace(/\.(?!.*\..*).+/, '.pdf'),
        desc: 'desc',
      },
      {
        file_id: file2.fileId,
        file_nm: file2.fileNm.replace(/\.(?!.*\..*).+/, '.pdf'),
        desc: 'desc',
      },
    ]}).catch(e => {
      errorResponse = JSON.parse(e.message);
    });
    expect(errorResponse.status).to.equal(400);
    expect(errorResponse.body.errors[0].message).to.include('The extension is invalid');
  });

  it(`insert topic with wrong extension in image file_nm (pdf -> png)`, async () => {
    login();
    let errorResponse = {};
    const file1 = await upload({ path: fixtures.empty_pdf });
    const file2 = await upload({ path: fixtures.empty_pdf });
    await postInsertTopicMultipleImage({files: [
      {
        file_id: file1.fileId,
        file_nm: file1.fileNm.replace(/\.(?!.*\..*).+/, '.png'),
        desc: 'desc',
      },
      {
        file_id: file2.fileId,
        file_nm: file2.fileNm.replace(/\.(?!.*\..*).+/, '.png'),
        desc: 'desc',
      },
    ]}).catch(e => {
      errorResponse = JSON.parse(e.message);
    });
    expect(errorResponse.status).to.equal(400);
  });

  it(`update topic with the same id`, async () => {
    login();
    let errorResponse = {};
    const file1 = await upload({ path: fixtures.rcms });
    const file2 = await upload({ path: fixtures.rcms_white });
    const file3 = await upload({ path: fixtures.diverta });
    const insertRes = await postInsertTopicMultiple({files: [
      {
        file_id: file1.fileId,
        file_nm: file1.fileNm,
        desc: 'desc1',
      },
      {
        file_id: file2.fileId,
        file_nm: file2.fileNm,
        desc: 'desc2',
      },
      {
        file_id: file3.fileId,
        file_nm: file3.fileNm,
        desc: 'desc3',
      },
    ]});
    const addedId = insertRes.id;

    const insertedTopic = (await getTopicMultiple({ topicsId: addedId })).details;
    expect(insertedTopic).to.exist;
    const ids = insertedTopic.ext_col_11.map(data => data.id);
    expect(ids).to.exist;

    await postUpdateTopicMultiple({topicsId: addedId, files: [
      {
        id: ids[0],
      },
      {
        id: ids[0],
      },
      {
        id: ids[0],
      },
    ]}).catch(e => {
      errorResponse = JSON.parse(e.message);
    });
    expect(errorResponse.status).to.equal(422);

  });

  it(`update topic ext_col_11 with the ids of ext_col_17`, async () => {
    login();
    let errorResponse = {};
    const file1 = await upload({ path: fixtures.rcms });
    const file2 = await upload({ path: fixtures.rcms_white });
    const file3 = await upload({ path: fixtures.diverta });
    const insertRes = await postInsertTopicMultipleImage({files: [
      {
        file_id: file1.fileId,
        file_nm: file1.fileNm,
        desc: 'desc1',
      },
      {
        file_id: file2.fileId,
        file_nm: file2.fileNm,
        desc: 'desc2',
      },
      {
        file_id: file3.fileId,
        file_nm: file3.fileNm,
        desc: 'desc3',
      },
    ]});
    const addedId = insertRes.id;

    const insertedTopic = (await getTopicMultiple({ topicsId: addedId })).details;
    expect(insertedTopic).to.exist;
    const ids = insertedTopic.ext_col_17.map(data => data.id);
    expect(ids).to.exist;

    await postUpdateTopicMultiple({topicsId: addedId, files: ids.map(id => {
      return {id: id};
    })}).catch(e => {
      errorResponse = JSON.parse(e.message);
    });
    expect(errorResponse.status).to.equal(400);

  });

  it(`update topic ext_col_11 with the ids of other topic`, async () => {
    login();
    let errorResponse = {};
    const file1 = await upload({ path: fixtures.rcms });
    const file2 = await upload({ path: fixtures.rcms_white });
    const file3 = await upload({ path: fixtures.diverta });
    const insertResBase = await postInsertTopicMultiple({files: [
      {
        file_id: file1.fileId,
        file_nm: file1.fileNm,
        desc: 'desc1',
      },
      {
        file_id: file2.fileId,
        file_nm: file2.fileNm,
        desc: 'desc2',
      },
      {
        file_id: file3.fileId,
        file_nm: file3.fileNm,
        desc: 'desc3',
      },
    ]});
    const baseId = insertResBase.id;

    const baseTopic = (await getTopicMultiple({ topicsId: baseId })).details;
    expect(baseTopic).to.exist;
    const ids = baseTopic.ext_col_11.map(data => data.id);

    const insertResTarget = await postInsertTopicMultiple({files: []});
    const targetId = insertResTarget.id;

    await postUpdateTopicMultiple({topicsId: targetId, files: ids.map(id => {
      return {id: id};
    })}).catch(e => {
      errorResponse = JSON.parse(e.message);
    });
    expect(errorResponse.status).to.equal(422);
  });

  it(`update topic with inappropriate ids`, async () => {
    login();
    let errorResponse = {};
    const file1 = await upload({ path: fixtures.rcms });
    const file2 = await upload({ path: fixtures.rcms_white });
    const file3 = await upload({ path: fixtures.diverta });
    const insertRes = await postInsertTopicMultiple({files: [
      {
        file_id: file1.fileId,
        file_nm: file1.fileNm,
        desc: 'desc1',
      },
      {
        file_id: file2.fileId,
        file_nm: file2.fileNm,
        desc: 'desc2',
      },
      {
        file_id: file3.fileId,
        file_nm: file3.fileNm,
        desc: 'desc3',
      },
    ]});
    const addedId = insertRes.id;

    const insertedTopic = (await getTopicMultiple({ topicsId: addedId })).details;
    expect(insertedTopic).to.exist;

    await postUpdateTopicMultiple({topicsId: addedId, files: [
      {
        id: 'hoge',
      },
      {
        id: 'fuga',
      },
      {
        id: 'piyo',
      },
    ]}).catch(e => {
      errorResponse = JSON.parse(e.message);
    });
    expect(errorResponse.status).to.equal(400);

  });

  it(`update topic with id index out of limit`, async () => {
    login();
    let errorResponse = {};
    const file1 = await upload({ path: fixtures.rcms });
    const file2 = await upload({ path: fixtures.rcms_white });
    const file3 = await upload({ path: fixtures.diverta });
    const insertRes = await postInsertTopicMultiple({files: [
      {
        file_id: file1.fileId,
        file_nm: file1.fileNm,
        desc: 'desc1',
      },
      {
        file_id: file2.fileId,
        file_nm: file2.fileNm,
        desc: 'desc2',
      },
      {
        file_id: file3.fileId,
        file_nm: file3.fileNm,
        desc: 'desc3',
      },
    ]});
    const addedId = insertRes.id;

    const insertedTopic = (await getTopicMultiple({ topicsId: addedId })).details;
    expect(insertedTopic).to.exist;

    await postUpdateTopicMultiple({topicsId: addedId, files: [
      {
        id: `${addedId}_ext_11_4`,
      },
      {
        id: `${addedId}_ext_11_5`,
      },
      {
        id: `${addedId}_ext_11_6`,
      },
    ]}).catch(e => {
      errorResponse = JSON.parse(e.message);
    });
    expect(errorResponse.status).to.equal(400);

  });

  it(`update topic add only desc`, async () => {
    login();
    let errorResponse = {};
    const file1 = await upload({ path: fixtures.rcms });
    const file2 = await upload({ path: fixtures.rcms_white });
    const insertRes = await postInsertTopicMultiple({files: [
      {
        file_id: file1.fileId,
        file_nm: file1.fileNm,
        desc: 'desc1',
      },
      {
        file_id: file2.fileId,
        file_nm: file2.fileNm,
        desc: 'desc2',
      },
    ]});
    const addedId = insertRes.id;

    const insertedTopic = (await getTopicMultiple({ topicsId: addedId })).details;
    expect(insertedTopic).to.exist;
    const ids = insertedTopic.ext_col_11.map(data => data.id);

    await postUpdateTopicMultiple({topicsId: addedId, files: [
      {
        id: ids[1],
        desc: 'test1'
      },
      {
        desc: 'test',
      },
      {
        id: ids[0],
        desc: 'test0'
      },
    ]}).catch(e => {
      errorResponse = JSON.parse(e.message);
    });
    expect(errorResponse.status).to.equal(422);

  });

  it(`update topic add only desc & file_nm`, async () => {
    login();
    let errorResponse = {};
    const file1 = await upload({ path: fixtures.rcms });
    const file2 = await upload({ path: fixtures.rcms_white });
    const insertRes = await postInsertTopicMultiple({files: [
      {
        file_id: file1.fileId,
        file_nm: file1.fileNm,
        desc: 'desc1',
      },
      {
        file_id: file2.fileId,
        file_nm: file2.fileNm,
        desc: 'desc2',
      },
    ]});
    const addedId = insertRes.id;

    const insertedTopic = (await getTopicMultiple({ topicsId: addedId })).details;
    expect(insertedTopic).to.exist;
    const ids = insertedTopic.ext_col_11.map(data => data.id);

    await postUpdateTopicMultiple({topicsId: addedId, files: [
      {
        id: ids[1],
        desc: 'hoge1',
      },
      {
        desc: 'test',
        file_nm: 'name.png',
      },
      {
        id: ids[0],
        desc: 'hoge0',
      },
    ]}).catch(e => {
      errorResponse = JSON.parse(e.message);
    });
    expect(errorResponse.status).to.equal(422);

    // const updatedTopic = (await getTopicMultiple({ topicsId: addedId })).details;
    // expect(updatedTopic).to.exist;

  });



});