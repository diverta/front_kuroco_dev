/// <reference types="cypress" />
// @ts-check

// https://docs.cypress.io/api/introduction/api.html

import { executeRequest, formatDate, login, upload, getFileNm } from '../../base';


const postInsertTopic = ({ file }) => {
  /** @type {import('../../../../generated/services/TopicsService').TopicsService.postTopicsServiceRcmsApi1Topics1InsertRequest} */
  const requestData = {
    requestBody: {
      subject: 'File Test',
      ymd: formatDate('date'),
      contents_type: 1,
      open_type: 'open',
      contents: 'test',
      ext_col_11: file,
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

const postInsertTopicImage = ({ file }) => {
  /** @type {import('../../../../generated/services/TopicsService').TopicsService.postTopicsServiceRcmsApi1Topics1InsertRequest} */
  const requestData = {
    requestBody: {
      subject: 'File Test',
      ymd: formatDate('date'),
      contents_type: 1,
      open_type: 'open',
      contents: 'test',
      ext_col_17: file,
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



const fixtures = {
  rcms: 'rcms.png',
  diverta: 'diverta.png',
  rcms_white: 'rcms_white.png',
  empty_pdf: 'empty.pdf'
};

describe('Topics pattern (File)', () => {

  it(`insert topic with inappropriate values`, async () => {
    login();
    let errorResponse = {};
    await postInsertTopic({file: {
      file_id: 'foo',
      file_nm: 'bar',
      desc: 'baz'
    }}).catch(e => {
      errorResponse = JSON.parse(e.message);
    });
    expect(errorResponse.status).to.equal(422);
  });

  it(`insert topic with additional key`, async () => {
    login();
    let errorResponse = {};
    const file = await upload({ path: fixtures.rcms });
    await postInsertTopic({file: {
      file_id: file.fileId,
      file_nm: file.fileNm,
      desc: 'desc',
      test_key: 'test',
    }}).catch(e => {
      errorResponse = JSON.parse(e.message);
    });
    expect(errorResponse.status).to.equal(422);
    expect(errorResponse.body.errors[0]).to.include('Additional properties not allowed: test_key');
  });

  it(`insert topic with empty values`, async () => {
    login();
    let errorResponse = {};
    await postInsertTopic({file: {
      file_id: '',
      file_nm: '',
      desc: ''
    }}).catch(e => {
      errorResponse = JSON.parse(e.message);
    });
    expect(errorResponse.status).to.equal(422);
  });

  it(`insert topic with null values`, async () => {
    login();
    let errorResponse = {};
    await postInsertTopic({file: {
      file_id: null,
      file_nm: null,
      desc: null
    }}).catch(e => {
      errorResponse = JSON.parse(e.message);
    });
    expect(errorResponse.status).to.equal(422);
    expect(errorResponse.body.errors[0]).to.include('null');
  });

  it(`insert topic with no extension`, async () => {
    login();
    let errorResponse = {};
    const file = await upload({ path: fixtures.rcms });
    await postInsertTopic({file: {
      file_id: file.fileId,
      file_nm: file.fileNm.replace(/\.(?!.*\..*).+/, ''),
      desc: 'desc',
    }}).catch(e => {
      errorResponse = JSON.parse(e.message);
    });
    expect(errorResponse.status).to.equal(422);
  });

  it(`insert topic with wrong extension in file_nm`, async () => {
    login();
    let errorResponse = {};
    const file = await upload({ path: fixtures.rcms });
    await postInsertTopic({file: {
      file_id: file.fileId,
      file_nm: file.fileNm.replace(/\.(?!.*\..*).+/, '.html'),
      desc: 'desc',
    }}).catch(e => {
      errorResponse = JSON.parse(e.message);
    });
    expect(errorResponse.status).to.equal(422);
  });

  it(`insert topic set image to not image file`, async () => {
    login();
    let errorResponse = {};
    const file = await upload({ path: fixtures.empty_pdf });
    await postInsertTopicImage({file: {
      file_id: file.fileId,
      file_nm: file.fileNm,
      desc: 'desc',
    }}).catch(e => {
      errorResponse = JSON.parse(e.message);
    });
    expect(errorResponse.status).to.equal(422);
    expect(errorResponse.body.errors[0]).to.include('The extension is invalid');
  });

  it(`insert topic with no extension image`, async () => {
    login();
    let errorResponse = {};
    const file = await upload({ path: fixtures.rcms });
    await postInsertTopicImage({file: {
      file_id: file.fileId,
      file_nm: file.fileNm.replace(/\.(?!.*\..*).+/, ''),
      desc: 'desc',
    }}).catch(e => {
      errorResponse = JSON.parse(e.message);
    });
    expect(errorResponse.status).to.equal(422);
    expect(errorResponse.body.errors[0]).to.include('The extension is invalid');
  });

  it(`insert topic with wrong extension in image file_nm (png -> pdf)`, async () => {
    login();
    let errorResponse = {};
    const file = await upload({ path: fixtures.rcms });
    await postInsertTopicImage({file: {
      file_id: file.fileId,
      file_nm: file.fileNm.replace(/\.(?!.*\..*).+/, '.pdf'),
      desc: 'desc',
    }}).catch(e => {
      errorResponse = JSON.parse(e.message);
    });
    expect(errorResponse.status).to.equal(422);
    expect(errorResponse.body.errors[0]).to.include('The extension is invalid');
  });

  it(`insert topic with wrong extension in image file_nm (pdf -> png)`, async () => {
    login();
    let errorResponse = {};
    const file = await upload({ path: fixtures.empty_pdf });
    await postInsertTopicImage({file: {
      file_id: file.fileId,
      file_nm: file.fileNm.replace(/\.(?!.*\..*).+/, '.png'),
      desc: 'desc',
    }}).catch(e => {
      errorResponse = JSON.parse(e.message);
    });
    expect(errorResponse.status).to.equal(422);
  });


});


