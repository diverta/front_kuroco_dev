/// <reference types="cypress" />
// @ts-check

// https://docs.cypress.io/api/introduction/api.html

import { executeRequest, login, upload } from '../../base';

const getMember = ({ memberId }) => {
  /** @type {import('../../../../generated/services/MembersService').MembersService.getMembersServiceRcmsApi1MembersMemberIdRequest} */
  const requestData = {
    memberId,
  };
  return executeRequest({
    cy,
    query: 'MembersService get member id',
    requestData,
  });
};

const postInsertMemberFile = ({ file }) => {
  /** @type {import('../../../../generated/services/MembersService').MembersService.postMembersServiceRcmsApi1MembersInsertRequest} */
  const requestData = {
    requestBody: {
      email: 'email+' + Date.now() + '@example.com',
      login_pwd: 'qwer1234',
      nickname: 'File Test',
      text: 'test',
      file: file,
      open_flg: 1,
      login_ok_flg: 0,
      validate_only: false,
    },
  };
  return executeRequest({
    cy,
    query: 'MembersService post insert',
    requestData,
    timeout: 15000,
  });
};

const postInsertMemberPhoto = ({ memberPhoto }) => {
  /** @type {import('../../../../generated/services/MembersService').MembersService.postMembersServiceRcmsApi1MembersInsertRequest} */
  const requestData = {
    requestBody: {
      email: 'email+' + Date.now() + '@example.com',
      login_pwd: 'qwer1234',
      nickname: 'File Test',
      member_photo: memberPhoto,
      text: 'test',
      open_flg: 1,
      login_ok_flg: 0,
      validate_only: false,
    },
  };
  return executeRequest({
    cy,
    query: 'MembersService post insert',
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


describe('Member pattern (File)', () => {

  it(`insert member file with inappropriate file_nm`, async () => {
    login();
    const file = await upload({ path: fixtures.rcms });
    let errorResponse = {};
    await postInsertMemberFile({file: {
      file_id: file.fileId,
      file_nm: 'bar',
      desc: 'baz'
    }}).catch(e => {
      errorResponse = JSON.parse(e.message);
    });
    expect(errorResponse.status).to.equal(422);

  });

  it(`insert member file with inappropriate file_id`, async () => {
    login();
    const file = await upload({ path: fixtures.rcms });
    let errorResponse = {};
    await postInsertMemberFile({file: {
      file_id: 'foo',
      file_nm: 'bar.png',
      desc: 'baz'
    }}).catch(e => {
      errorResponse = JSON.parse(e.message);
    });
    expect(errorResponse.status).to.equal(422);

  });

  it(`insert member file with additional key`, async () => {
    login();
    let errorResponse = {};
    const file = await upload({ path: fixtures.rcms });
    await postInsertMemberFile({file: {
      file_id: file.fileId,
      file_nm: file.fileNm,
      desc: 'desc',
      test_key: 'test',
    }}).catch(e => {
      errorResponse = JSON.parse(e.message);
    });
    expect(errorResponse.status).to.equal(400);
    expect(errorResponse.body.errors[0]).to.include('Additional properties not allowed: test_key');
  });

  it(`insert member file with empty file_id`, async () => {
    login();
    let errorResponse = {};
    await postInsertMemberFile({file: {
      file_id: '',
      file_nm: 'test.png',
      desc: 'test'
    }}).catch(e => {
      errorResponse = JSON.parse(e.message);
    });
    expect(errorResponse.status).to.equal(422);
  });

  it(`insert member file with empty file_nm`, async () => {
    login();
    let errorResponse = {};
    const file = await upload({ path: fixtures.rcms });
    await postInsertMemberFile({file: {
      file_id: file.fileId,
      file_nm: '',
      desc: 'test'
    }}).catch(e => {
      errorResponse = JSON.parse(e.message);
    });
    expect(errorResponse.status).to.equal(422);
  });

  it(`insert member file with null values`, async () => {
    login();
    let errorResponse = {};
    await postInsertMemberFile({file: {
      file_id: null,
      file_nm: null,
      desc: null
    }}).catch(e => {
      errorResponse = JSON.parse(e.message);
    });
    expect(errorResponse.status).to.equal(400);
    expect(errorResponse.body.errors[0]).to.include('null');
  });

  it(`insert member file with no extension`, async () => {
    login();
    let errorResponse = {};
    const file = await upload({ path: fixtures.rcms });
    await postInsertMemberFile({file: {
      file_id: file.fileId,
      file_nm: file.fileNm.replace(/\.(?!.*\..*).+/, ''),
      desc: 'desc',
    }}).catch(e => {
      errorResponse = JSON.parse(e.message);
    });
    expect(errorResponse.status).to.equal(422);
  });

  it(`insert member file with wrong extension in file_nm`, async () => {
    login();
    let errorResponse = {};
    const file = await upload({ path: fixtures.rcms });
    await postInsertMemberFile({file: {
      file_id: file.fileId,
      file_nm: file.fileNm.replace(/\.(?!.*\..*).+/, '.xyz'),
      desc: 'desc',
    }}).catch(e => {
      errorResponse = JSON.parse(e.message);
    });
    expect(errorResponse.status).to.equal(422);
  });

  it(`insert member photo with inappropriate file_nm`, async () => {
    login();
    const file = await upload({ path: fixtures.rcms });
    let errorResponse = {};
    await postInsertMemberPhoto({memberPhoto: {
      file_id: file.fileId,
      file_nm: 'bar',
      desc: 'baz'
    }}).catch(e => {
      errorResponse = JSON.parse(e.message);
    });
    expect(errorResponse.status).to.equal(422);

  });

  it(`insert member photo with inappropriate file_id`, async () => {
    login();
    const file = await upload({ path: fixtures.rcms });
    let errorResponse = {};
    await postInsertMemberPhoto({memberPhoto: {
      file_id: 'foo',
      file_nm: 'bar.png',
      desc: 'baz'
    }}).catch(e => {
      errorResponse = JSON.parse(e.message);
    });
    expect(errorResponse.status).to.equal(422);

  });

  it(`insert member photo with additional key`, async () => {
    login();
    let errorResponse = {};
    const file = await upload({ path: fixtures.rcms });
    await postInsertMemberPhoto({memberPhoto: {
      file_id: file.fileId,
      file_nm: file.fileNm,
      desc: 'desc',
      test_key: 'test',
    }}).catch(e => {
      errorResponse = JSON.parse(e.message);
    });
    expect(errorResponse.status).to.equal(400);
    expect(errorResponse.body.errors[0]).to.include('Additional properties not allowed: test_key');
  });

  it(`insert member photo with empty file_id`, async () => {
    login();
    let errorResponse = {};
    await postInsertMemberPhoto({memberPhoto: {
      file_id: '',
      file_nm: 'test.png',
      desc: 'test'
    }}).catch(e => {
      errorResponse = JSON.parse(e.message);
    });
    expect(errorResponse.status).to.equal(422);
  });

  it(`insert member photo with empty file_nm`, async () => {
    login();
    let errorResponse = {};
    const file = await upload({ path: fixtures.rcms });
    await postInsertMemberPhoto({memberPhoto: {
      file_id: file.fileId,
      file_nm: '',
      desc: 'test'
    }}).catch(e => {
      errorResponse = JSON.parse(e.message);
    });
    expect(errorResponse.status).to.equal(422);
  });

  it(`insert member photo with null values`, async () => {
    login();
    let errorResponse = {};
    await postInsertMemberPhoto({memberPhoto: {
      file_id: null,
      file_nm: null,
      desc: null
    }}).catch(e => {
      errorResponse = JSON.parse(e.message);
    });
    expect(errorResponse.status).to.equal(400);
    expect(errorResponse.body.errors[0]).to.include('null');
  });

  it(`insert member photo with no extension`, async () => {
    login();
    let errorResponse = {};
    const file = await upload({ path: fixtures.rcms });
    await postInsertMemberPhoto({memberPhoto: {
      file_id: file.fileId,
      file_nm: file.fileNm.replace(/\.(?!.*\..*).+/, ''),
      desc: 'desc',
    }}).catch(e => {
      errorResponse = JSON.parse(e.message);
    });
    expect(errorResponse.status).to.equal(422);
  });

  it(`insert member photo with wrong extension in file_nm`, async () => {
    login();
    let errorResponse = {};
    const file = await upload({ path: fixtures.rcms });
    await postInsertMemberPhoto({memberPhoto: {
      file_id: file.fileId,
      file_nm: file.fileNm.replace(/\.(?!.*\..*).+/, '.jpg'),
      desc: 'desc',
    }}).catch(e => {
      errorResponse = JSON.parse(e.message);
    });
    expect(errorResponse.status).to.equal(422);
  });

  it(`insert member photo with not image`, async () => {
    login();
    let errorResponse = {};
    const file = await upload({ path: fixtures.empty_pdf });
    await postInsertMemberPhoto({memberPhoto: {
      file_id: file.fileId,
      file_nm: file.fileNm,
      desc: 'desc',
    }}).catch(e => {
      errorResponse = JSON.parse(e.message);
    });
    expect(errorResponse.status).to.equal(422);
  });

});

