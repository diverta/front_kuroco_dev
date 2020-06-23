/// <reference types="cypress" />
// @ts-check

// https://docs.cypress.io/api/introduction/api.html

import { executeRequest, login, upload, getFileNm } from '../../base';
const path = require('path');

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

const postInsertMember = ({ memberPhoto, file }) => {
  /** @type {import('../../../../generated/services/MembersService').MembersService.postMembersServiceRcmsApi1MembersInsertRequest} */
  const requestData = {
    requestBody: {
      email: 'email+' + Date.now() + '@example.com',
      login_pwd: 'qwer1234',
      nickname: 'File Test',
      member_photo: {
          file_id: memberPhoto.fileId,
          file_nm: memberPhoto.fileNm,
          desc: 'insert member photo',
      },
      text: 'test',
      file: {
        file_id: file.fileId,
        file_nm: file.fileNm,
        desc: 'insert file',
      },
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

const postUpdateMember = ({ memberId, memberPhoto, file }) => {
  /** @type {import('../../../../generated/services/MembersService').MembersService.postMembersServiceRcmsApi1MembersUpdateRequest} */
  const requestData = {
    requestBody: {
      member_id: memberId,
      member_photo: {
          file_id: memberPhoto.fileId,
          file_nm: memberPhoto.fileNm,
          desc: 'update member photo',
      },
      file: {
        file_id: file.fileId,
        file_nm: file.fileNm,
        desc: 'update file',
      },
      open_flg: 1,
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
  /** @type {import('../../../../generated/services/MembersService').MembersService.postMembersServiceRcmsApi1MembersUpdateRequest} */
  const requestData = {
    requestBody: {
      member_id: memberId,
      file: {
        desc: 'desc',
      },
      open_flg: 1,
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
  /** @type {import('../../../../generated/services/MembersService').MembersService.postMembersServiceRcmsApi1MembersUpdateRequest} */
  const requestData = {
    requestBody: {
      member_id: memberId,
      member_photo: {},
      file: {},
      open_flg: 1,
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
  /** @type {import('../../../../generated/services/MembersService').MembersService.postMembersServiceRcmsApi1MembersDeleteRequest} */
  const requestData = {
    requestBody: {
      member_id: memberId,
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
      insert member with member_photo & file ->
      get member ->
      update member with member_photo & file ->
      get member ->
      update member with only desc ->
      get member ->
      update member delete file ->
      get member ->
      delete member
  `, async () => {
    login();

    // insert member with member_photo & file
    const insertMemberPhoto = fixtures.diverta;
    const insertMemberPhotoData = await upload({ path: insertMemberPhoto });
    const insertFile = fixtures.rcms;
    const insertFileData = await upload({ path: insertFile });
    const insertRes = await postInsertMember({ memberPhoto: insertMemberPhotoData, file: insertFileData });
    const addedId = insertRes.id;

    // get member
    const insertedMember = (await getMember({ memberId: addedId })).details;
    expect(insertedMember).to.exist;
    expect(insertedMember.image_exist).to.be.true;
    const insertedMemberPhotoUrl = insertedMember.image_url;
    expect(insertedMemberPhotoUrl).to.exist;
    const insertedMemberPhotoNm = getFileNm(insertedMemberPhotoUrl);
    expect(path.extname(insertedMemberPhotoNm)).to.equal(path.extname(insertMemberPhoto));
    expect(insertedMember.file.desc).to.equal('insert file');
    const insertedFileUrl = insertedMember.file.url;
    expect(insertedFileUrl).to.exist;
    const insertedFileNm = getFileNm(insertedFileUrl);
    expect(path.extname(insertedFileNm)).to.equal(path.extname(insertFile));

    // update member with member_photo & file
    const updateMemberPhoto = fixtures.rcms;
    const updateMemberPhotoData = await upload({ path: updateMemberPhoto });
    const updateFile = fixtures.rcms_white;
    const updateFileData = await upload({ path: updateFile });
    await postUpdateMember({ memberId: addedId, memberPhoto: updateMemberPhotoData, file: updateFileData });

    // get member
    const updatedMember = (await getMember({ memberId: addedId })).details;
    expect(updatedMember).to.exist;
    expect(updatedMember.image_exist).to.be.true;
    const updatedMemberPhotoUrl = updatedMember.image_url;
    expect(updatedMemberPhotoUrl).to.exist;
    const updatedMemberPhotoNm = getFileNm(updatedMemberPhotoUrl);
    expect(path.extname(updatedMemberPhotoNm)).to.equal(path.extname(updateMemberPhoto));
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
    expect(updatedMemberDesc.image_exist).to.be.true;
    expect(updatedMemberDesc.image_url).to.exist;
    expect(updatedMemberDesc.file.desc).to.equal('desc');
    expect(updatedMemberDesc.file.url).to.exist;

    // update member delete file
    await postUpdateMemberDeleteFile({ memberId: addedId });

    // get member
    const updateMemberDeleteFile = (await getMember({ memberId: addedId })).details;
    expect(updateMemberDeleteFile).to.exist;
    expect(updateMemberDeleteFile.image_exist).to.be.false;
    expect(updateMemberDeleteFile.file).to.be.empty;
    
    // delete member
    await postDeleteMember({ memberId: addedId });
    
  });
});