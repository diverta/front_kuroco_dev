/// <reference types="cypress" />
// @ts-check

// https://docs.cypress.io/api/introduction/api.html

import { executeRequest, login } from '../../base';

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
    'module_id': 15
  },
  // file: {
  //   file_id: 'file.png',
  //   file_nm: 'file',
  //   desc: 'File',
  // },
};
const postInsertMember = () => {
  /** @type {import('../../../../generated/services/MembersService').MembersService.postMembersServiceRcmsApi1MembersInsertRequest} */
  const requestData = {
    requestBody: {
      email: 'email+' + Date.now() + '@example.com',
      // login_id: string,
      login_pwd: 'qwer1234',
      nickname: 'TestMember',
      name1: 'Test',
      name2: 'Member',
      sex: 'm',
      birth: '1990-01-01',
      // member_photo: {
      //     file_id: 'test.png',
      //     file_nm: 'test',
      //     desc: 'desc',
      // },
      text: insertExt.text,
      textarea: insertExt.textarea,
      radio: insertExt.radio,
      selectbox: insertExt.selectbox,
      checkbox: insertExt.checkbox,
      date: insertExt.date,
      relation: insertExt.relation,
      // file: insertExt.file,
      open_flg: 1,
      login_ok_flg: 0,
      validate_only: false,
    },
  };
  return executeRequest({
    cy,
    query: 'MembersService post insert',
    requestData,
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
  relation: 15,
  // file: {
  //   file_id: 'file.png',
  //   file_nm: 'file',
  //   desc: 'File',
  // },
};
const postUpdateMember = ({ memberId }) => {
  /** @type {import('../../../../generated/services/MembersService').MembersService.postMembersServiceRcmsApi1MembersUpdateRequest} */
  const requestData = {
    requestBody: {
      member_id: memberId,
      email: 'email+' + Date.now() + '@example.com',
      // login_id: string,
      login_pwd: 'qwer1234',
      nickname: 'テストメンバー',
      name1: 'テスト',
      name2: 'メンバー',
      sex: 'f',
      birth: '1990-01-01',
      // member_photo: {
      //     file_id: 'test.png',
      //     file_nm: 'test',
      //     desc: 'desc',
      // },
      text: updateExt.text,
      textarea: updateExt.textarea,
      radio: updateExt.radio,
      selectbox: updateExt.selectbox,
      checkbox: updateExt.checkbox,
      date: updateExt.date,
      relation: updateExt.relation,
      // file: updateExt.file,
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
    const insertRes = await postInsertMember();
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
      expect(insertedMember.details[key]).to.deep.equal(insertExt[key]);
    });

    // post update inserted member
    const updateRes = await postUpdateMember({ memberId: addedId });
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
      expect(updatedMember.details[key]).to.deep.equal(updateExt[key]);
    });

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
});
