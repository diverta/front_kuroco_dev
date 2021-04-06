/// <reference types="cypress" />
// @ts-check

// https://docs.cypress.io/api/introduction/api.html

import { executeRequest, login, upload } from '../../base';

const sendMessage = ({ file }) => {
  /** @type {import('../../../../generated/services/InquiriesService').InquiriesService.postRcmsApi1Inquiry1MessagesSendRequest} */
  const requestData = {
    requestBody: {
      name: 'File Test',
      from_mail: 'email@example.com',
      body: 'test',
      inquiry_category_id: 1,
      ext_01: 'test',
      ext_04: '1',
      ext_07: file,
      validate_only: false,
    },
  };
  return executeRequest({
    cy,
    query: 'inquiry send',
    requestData,
  });
};


const fixtures = {
  rcms: 'rcms.png',
  diverta: 'diverta.png',
  rcms_white: 'rcms_white.png',
  empty_pdf: 'empty.pdf'
};

describe('Inquiry pattern (File)', () => {

  it(`send message with inappropriate file_nm`, async () => {
    login();
    const file = await upload({ path: fixtures.rcms });
    let errorResponse = {};
    await sendMessage({file: {
      file_id: file.fileId,
      file_nm: 'bar',
      desc: 'baz'
    }}).catch(e => {
      errorResponse = JSON.parse(e.message);
    });
    // TODO topicsでは400だが、ここでは422が返ってくる
    expect(errorResponse.status).to.equal(400);

  });

  it(`send message with inappropriate file_id`, async () => {
    login();
    const file = await upload({ path: fixtures.rcms });
    let errorResponse = {};
    await sendMessage({file: {
      file_id: 'foo',
      file_nm: 'bar.png',
      desc: 'baz'
    }}).catch(e => {
      errorResponse = JSON.parse(e.message);
    });
    expect(errorResponse.status).to.equal(400);

  });

  it(`send message with additional key`, async () => {
    login();
    let errorResponse = {};
    const file = await upload({ path: fixtures.rcms });
    await sendMessage({file: {
      file_id: file.fileId,
      file_nm: file.fileNm,
      desc: 'desc',
      test_key: 'test',
    }}).catch(e => {
      errorResponse = JSON.parse(e.message);
    });
    expect(errorResponse.status).to.equal(400);
    expect(errorResponse.body.errors[0].message).to.include('Additional properties not allowed: test_key');
  });

  it(`send message with empty file_id`, async () => {
    login();
    let errorResponse = {};
    await sendMessage({file: {
      file_id: '',
      file_nm: 'test.png',
      desc: 'test'
    }}).catch(e => {
      errorResponse = JSON.parse(e.message);
    });
    expect(errorResponse.status).to.equal(400);
  });

  it(`send message with empty file_nm`, async () => {
    login();
    let errorResponse = {};
    const file = await upload({ path: fixtures.rcms });
    await sendMessage({file: {
      file_id: file.fileId,
      file_nm: '',
      desc: 'test'
    }}).catch(e => {
      errorResponse = JSON.parse(e.message);
    });
    // TODO topicsでは400だが、ここでは422が返ってくる
    expect(errorResponse.status).to.equal(400);
  });

  it(`send message with null values`, async () => {
    login();
    let errorResponse = {};
    await sendMessage({file: {
      file_id: null,
      file_nm: null,
      desc: null
    }}).catch(e => {
      errorResponse = JSON.parse(e.message);
    });
    expect(errorResponse.status).to.equal(400);
    expect(errorResponse.body.errors[0].message).to.include('null');
  });

  it(`send message with no extension`, async () => {
    login();
    let errorResponse = {};
    const file = await upload({ path: fixtures.rcms });
    await sendMessage({file: {
      file_id: file.fileId,
      file_nm: file.fileNm.replace(/\.(?!.*\..*).+/, ''),
      desc: 'desc',
    }}).catch(e => {
      errorResponse = JSON.parse(e.message);
    });
    // TODO topicsでは400だが、ここでは422が返ってくる
    expect(errorResponse.status).to.equal(400);
  });

  it(`send message with wrong extension in file_nm`, async () => {
    login();
    let errorResponse = {};
    const file = await upload({ path: fixtures.rcms });
    await sendMessage({file: {
      file_id: file.fileId,
      file_nm: file.fileNm.replace(/\.(?!.*\..*).+/, '.html'),
      desc: 'desc',
    }}).catch(e => {
      errorResponse = JSON.parse(e.message);
    });
    expect(errorResponse.status).to.equal(422);
  });

  it(`send message with file_id match to pattern but file not exist`, async () => {
    login();
    const file = await upload({ path: fixtures.rcms });
    let errorResponse = {};
    await sendMessage({file: {
      file_id: 'files/temp/foo',
      file_nm: 'bar.png',
      desc: 'baz'
    }}).catch(e => {
      errorResponse = JSON.parse(e.message);
    });
    expect(errorResponse.status).to.equal(422);
  
  });

});



