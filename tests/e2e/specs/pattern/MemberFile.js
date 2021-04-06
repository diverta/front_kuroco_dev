/// <reference types="cypress" />
// @ts-check

// https://docs.cypress.io/api/introduction/api.html

import { executeRequest, login, upload, getFileNm } from '../../base';
const path = require('path');

const getMember = ({ memberId }) => {
  /** @type {import('../../../../generated/services/MembersService').MembersService.getRcmsApi1MembersMemberIdRequest} */
  const requestData = {
    memberId,
  };
  return executeRequest({
    cy,
    query: 'MembersService get member id',
    requestData,
  });
};

const postInsertMember = ({ file }) => {
  /** @type {import('../../../../generated/services/MembersService').MembersService.postRcmsApi1MembersInsertRequest} */
  const requestData = {
    requestBody: {
      email: 'email+' + Date.now() + '@example.com',
      login_pwd: 'qwer1234',
      name1: 'File Test',
      text: 'test',
      file: {
        file_id: file.fileId,
        file_nm: file.fileNm,
        desc: 'insert file',
      },
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

const postUpdateMember = ({ memberId, file }) => {
  /** @type {import('../../../../generated/services/MembersService').MembersService.postRcmsApi1MembersUpdateMemberIdRequest} */
  const requestData = {
    memberId: memberId,
    requestBody: {
      file: {
        file_id: file.fileId,
        file_nm: file.fileNm,
        desc: 'update file',
      },
      login_ok_flg: 0,
      validate_only: false,
    },
  };
  return executeRequest({
    cy,
    query: 'MembersService post update',
    indexOfApis: 0,
    requestData,
    timeout: 15000,
  });
};

const postUpdateMemberDesc = ({ memberId }) => {
  /** @type {import('../../../../generated/services/MembersService').MembersService.postRcmsApi1MembersUpdateMemberIdRequest} */
  const requestData = {
    memberId: memberId,
    requestBody: {
      file: {
        desc: 'desc',
      },
      login_ok_flg: 0,
      validate_only: false,
    },
  };
  return executeRequest({
    cy,
    query: 'MembersService post update',
    indexOfApis: 0,
    requestData,
    timeout: 15000,
  });
};

const postUpdateMemberDeleteFile = ({ memberId }) => {
  /** @type {import('../../../../generated/services/MembersService').MembersService.postRcmsApi1MembersUpdateMemberIdRequest} */
  const requestData = {
    memberId: memberId,
    requestBody: {
      file: {},
      login_ok_flg: 0,
      validate_only: false,
    },
  };
  return executeRequest({
    cy,
    query: 'MembersService post update',
    indexOfApis: 0,
    requestData,
    timeout: 15000,
  });
};

const postDeleteMember = ({ memberId }) => {
  /** @type {import('../../../../generated/services/MembersService').MembersService.postRcmsApi1MembersDeleteMemberIdRequest} */
  const requestData = {
    memberId: memberId,
    requestBody: {
    },
  };
  return executeRequest({
    cy,
    query: 'MembersService post delete',
    indexOfApis: 0,
    requestData,
  });
};

const fixtures = {
  rcms: 'rcms.png',
  diverta: 'diverta.png',
  rcms_white: 'rcms_white.png',
};

describe('Member pattern (File)', () => {
  it(`
      insert member with file ->
      get member ->
      update member with file ->
      get member ->
      update member with only desc ->
      get member ->
      update member delete file ->
      get member ->
      delete member
  `, async () => {
    login();

    // insert member with file
    const insertFile = fixtures.rcms;
    const insertFileData = await upload({ path: insertFile });
    const insertRes = await postInsertMember({ file: insertFileData });
    const addedId = insertRes.id;

    // get member
    const insertedMember = (await getMember({ memberId: addedId })).details;
    expect(insertedMember).to.exist;
    expect(insertedMember.file.desc).to.equal('insert file');
    const insertedFileUrl = insertedMember.file.url;
    expect(insertedFileUrl).to.exist;
    const insertedFileNm = getFileNm(insertedFileUrl);
    expect(path.extname(insertedFileNm)).to.equal(path.extname(insertFile));

    // update member with file
    const updateFile = fixtures.rcms_white;
    const updateFileData = await upload({ path: updateFile });
    await postUpdateMember({ memberId: addedId, file: updateFileData });

    // get member
    const updatedMember = (await getMember({ memberId: addedId })).details;
    expect(updatedMember).to.exist;
    expect(updatedMember.file.desc).to.equal('update file');
    const updatedFileUrl = updatedMember.file.url;
    expect(updatedFileUrl).to.exist;
    const updatedFileNm = getFileNm(updatedFileUrl);
    expect(path.extname(updatedFileNm)).to.equal(path.extname(updateFile));

    // update member with only desc
    await postUpdateMemberDesc({ memberId: addedId });

    // get member
    const updatedMemberDesc = (await getMember({ memberId: addedId })).details;
    expect(updatedMemberDesc).to.exist;
    expect(updatedMemberDesc.file.desc).to.equal('desc');
    expect(updatedMemberDesc.file.url).to.exist;

    // update member delete file
    await postUpdateMemberDeleteFile({ memberId: addedId });

    // get member
    const updateMemberDeleteFile = (await getMember({ memberId: addedId })).details;
    expect(updateMemberDeleteFile).to.exist;
    expect(updateMemberDeleteFile.file).to.be.empty;
    
    // delete member
    await postDeleteMember({ memberId: addedId });
    
  });
});