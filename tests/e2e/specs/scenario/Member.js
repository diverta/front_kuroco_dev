/// <reference types="cypress" />
// @ts-check

// https://docs.cypress.io/api/introduction/api.html

import { executeRequest, login, logout, upload } from '../../base';

const getMembers = () => {
  /** @type {import('../../../../generated/services/MembersService').MembersService.getMembersServiceRcmsApi1MembersRequest} */
  const requestData = {};
  return executeRequest({
    cy,
    query: 'MembersService get members',
    indexOfApis: 0,
    requestData,
  });
};
const getMembersByIds = ({ memberIds }) => {
  /** @type {import('../../../../generated/services/MembersService').MembersService.getMembersServiceRcmsApi1MembersRequest} */
  const requestData = {
    id: memberIds,
  };
  return executeRequest({
    cy,
    query: 'MembersService get members',
    indexOfApis: 0,
    requestData,
  });
};
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
const insertExt = {
  text: 'string1',
  textarea: 'string\n01',
  radio: {key: '1', label: 'radioOption1'},
  selectbox: {key: '1',label: 'selectBoxOption1'},
  checkbox: [
    {key: '1', label: 'checkboxOption1'},
    {key: '3', label: 'checkboxOption3'},
  ],
  date: '2020-06-01',
  relation: {
    'module_type': 'topics',
    'module_id': 444
  },
  // file: {
  //   file_id: 'file.png',
  //   file_nm: 'file',
  //   desc: 'File',
  // },
};
const postInsertMember = ({ file }) => {
  /** @type {import('../../../../generated/services/MembersService').MembersService.postMembersServiceRcmsApi1MembersInsertRequest} */
  const requestData = {
    requestBody: {
      email: 'email+' + Date.now() + '@example.com',
      login_id: Date.now() + '',
      login_pwd: 'qwer1234',
      nickname: 'TestMember',
      name1: 'Test',
      name2: 'Member',
      text: insertExt.text,
      textarea: insertExt.textarea,
      radio: insertExt.radio,
      selectbox: insertExt.selectbox,
      checkbox: insertExt.checkbox,
      date: insertExt.date,
      relation: insertExt.relation,
      file: {
        file_id: file.fileId,
        file_nm: file.fileNm,
        desc: 'InsertFile',
      },
      login_ok_flg: 1,
      validate_only: false,
    },
  };
  return executeRequest({
    cy,
    query: 'MembersService post insert',
    requestData,
    timeout: 10000,
  });
};
const updateExt = {
  text: 'string2',
  textarea: 'string\n02',
  radio: {key: '2', label: 'radioOption2'},
  selectbox: {key: '2',label: 'selectBoxOption2'},
  checkbox: [
    {key: '2', label: 'checkboxOption2'},
    {key: '3', label: 'checkboxOption3'},
  ],
  date: '2020-06-02',
  relation: {
    'module_type': 'topics',
    'module_id': 445
  },
  // file: {
  //   file_id: 'file.png',
  //   file_nm: 'file',
  //   desc: 'File',
  // },
};
const postUpdateMember = ({ memberId, file }) => {
  /** @type {import('../../../../generated/services/MembersService').MembersService.postMembersServiceRcmsApi1MembersUpdateMemberIdRequest} */
  const requestData = {
    memberId: memberId,
    requestBody: {
      email: 'email+' + Date.now() + '@example.com',
      login_id: Date.now() + 'U',
      login_pwd: 'qwer1234',
      nickname: 'テストメンバー',
      name1: 'テスト',
      name2: 'メンバー',
      text: updateExt.text,
      textarea: updateExt.textarea,
      radio: updateExt.radio,
      selectbox: updateExt.selectbox,
      checkbox: updateExt.checkbox,
      date: updateExt.date,
      relation: updateExt.relation,
      file: {
        file_id: file.fileId,
        file_nm: file.fileNm,
        desc: 'UpdateFile',
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
    timeout: 10000,
  });
};
const postDeleteMember = ({ memberId }) => {
  /** @type {import('../../../../generated/services/MembersService').MembersService.postMembersServiceRcmsApi1MembersDeleteMemberIdRequest} */
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

const postUpdateMe = () => {
  /** @type {import('../../../../generated/services/MembersService').MembersService.postMembersServiceRcmsApi1MeUpdateRequest} */
  const requestData = {
    requestBody: {
      text: 'me/update',
      validate_only: false,
    },
  };
  return executeRequest({
    cy,
    query: 'MembersService MeUpdate',
    requestData,
  });
};
const postDeleteMe = () => {
  /** @type {import('../../../../generated/services/MembersService').MembersService.postMembersServiceRcmsApi1MeDeleteRequest} */
  const requestData = {
    requestBody: {
    },
  };
  return executeRequest({
    cy,
    query: 'MembersService MeDelete',
    requestData,
  });
};

const fixtures = {
  rcms: 'rcms.png',
  diverta: 'diverta.png'
};

describe('Member', () => {
  it(`
      get members ->
      get member by ID ->
      post insert member ->
      get members including updated one ->
      get member by ID of inserted one ->
      post update inserted member ->
      get members including updated one ->
      get member by ID of updated one ->
      post delete updated member ->
      get members not including deleted one ->
      get member by ID of deleted one (should be empty)
    `, async () => {
    login();
    // get members
    const members = await getMembers();
    // get member by ID
    await getMember({ memberId: members.list[0].member_id });

    // post insert member
    const insertFile = await upload({ path: fixtures.diverta });
    const insertRes = await postInsertMember({ file: insertFile });
    const addedId = insertRes.id;
    // get members including updated one
    expect(
      (await getMembersByIds({memberIds: [addedId]}))
        .list
        .find(row => row.member_id === addedId)
    ).to.exist;
    // get member by ID of inserted one
    const insertedMember = await getMember({ memberId: addedId });
    expect(insertedMember.details).to.exist;

    Object.keys(insertExt).forEach(key => {
      // if (key === 'date' || key === 'relation') return;
      expect(insertedMember.details[key], key).to.deep.equal(insertExt[key]);
    });
    expect(insertedMember.details.file, 'file').to.exist;
    expect(insertedMember.details.file.id, 'file.id').to.not.empty;
    expect(insertedMember.details.file.url, 'file.url').to.not.empty;
    expect(insertedMember.details.file.desc, 'file.desc').to.equal('InsertFile');

    // post update inserted member
    const updateFile = await upload({ path: fixtures.rcms });
    const updateRes = await postUpdateMember({ memberId: addedId, file: updateFile });
    // get members including updated one
    expect(
      (await getMembersByIds({memberIds: [addedId]}))
        .list
        .find(row => row.member_id === addedId)
    ).to.exist;
    // get member by ID of updated one
    const updatedMember = await getMember({ memberId: addedId });
    expect(updatedMember.details).to.exist;

    Object.keys(updateExt).forEach(key => {
      // if (key === 'date' || key === 'relation') return;
      expect(updatedMember.details[key], key).to.deep.equal(updateExt[key]);
    });
    expect(updatedMember.details.file, 'file').to.exist;
    expect(updatedMember.details.file.id, 'file,id').to.not.empty;
    expect(updatedMember.details.file.url, 'file,url').to.not.empty;
    expect(updatedMember.details.file.desc, 'file.desc').to.equal('UpdateFile');

    // post delete updated member
    const deleteRes = await postDeleteMember({ memberId: addedId });
    // get members not including deleted one
    expect(
      (await getMembersByIds({memberIds: [addedId]}))
        .list
        .find(row => row.member_id === addedId)
    ).to.not.exist;
    // get member by ID of deleted one (should be empty)
    let errorResponse = {};
    await getMember({ memberId: addedId }).catch(e => {
      errorResponse = JSON.parse(e.message);
    });
    expect(errorResponse.status).to.equal(404);


  });

  it(`
      post insert member ->
      get member by ID of inserted one ->
      login ->
      post me/update ->
      get member by ID of inserted one ->
      post me/delete ->
      get member by ID of deleted one (should be empty)
  `, async () => {
    // login with default user to add test user
    login();

    // post insert member
    const insertFile = await upload({ path: fixtures.diverta });
    const insertRes = await postInsertMember({ file: insertFile });
    const addedId = insertRes.id;

    // get member by ID of inserted one
    const insertedMember = await getMember({ memberId: addedId });
    const insertedMemberEmail = insertedMember.details.email;

    // login
    logout();
    login({ email: insertedMemberEmail, password: 'qwer1234' });

    // post me/update
    await postUpdateMe();
    // get member by ID of inserted one
    const updatedMe = await getMember({ memberId: addedId });
    // post me/delete
    await postDeleteMe();
    // get member by ID of deleted one (should be empty)
    let errorResponse = {};
    await getMember({ memberId: addedId }).catch(e => {
      errorResponse = JSON.parse(e.message);
    });
    expect(errorResponse.status).to.equal(404);

  });

});
