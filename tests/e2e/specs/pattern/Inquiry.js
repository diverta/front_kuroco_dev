/// <reference types="cypress" />
// @ts-check

// https://docs.cypress.io/api/introduction/api.html

import { executeRequest, login, logout } from '../../base';

const getMessages = () => {
  /** @type {import('../../../../generated/services/InquiriesService').InquiriesService.getInquiriesServiceRcmsApi1Inquiry1MessagesRequest} */
  const requestData = {};
  return executeRequest({
    cy,
    query: 'inquiry messages get',
    requestData,
  });
};

const sendMessageWithoutRequiredTargetCols = [
  'inquiry_category_id',
  'ext_01',
  'ext_04',
];
const sendMessageWithoutRequired = ({ targetCol }) => {
  /** @type {import('../../../../generated/services/InquiriesService').InquiriesService.postInquiriesServiceRcmsApi1Inquiry1MessagesSendRequest} */
  const requestData = {
    requestBody: {
      name: 'Inquiry Test',
      from_mail: 'email@example.com',
      body: 'test',
      inquiry_category_id: 1,
      ext_01: 'string1',
      ext_04: {
        key: '1',
        label: 'select1',
      },
      validate_only: false,
    },
  };
  delete requestData.requestBody[targetCol];
  return executeRequest({
    cy,
    query: 'inquiry send',
    requestData,
  });
};

const sendMessageMalformedTargetCols = [
  'name',
  'from_mail',
  'body',
  'inquiry_category_id',
  'ext_01',
  'ext_02',
  'ext_03',
  'ext_04',
  'ext_05',
  'ext_06',
  'ext_07',
  'ext_08',
  'ext_09',
  'ext_10',

];
const sendMessageMalformed = ({ targetCol }) => {
  /** @type {import('../../../../generated/services/InquiriesService').InquiriesService.postInquiriesServiceRcmsApi1Inquiry1MessagesSendRequest} */
  const requestData = {
    requestBody: {
      name: 'Inquiry Test',
      from_mail: 'email@example.com',
      body: 'test message',
      inquiry_category_id: 1,
      ext_01: 'string1',
      ext_02: 'string1',
      ext_03: {
        key: '1',
        label: 'radio1',
      },
      ext_04: {
        key: '1',
        label: 'select1',
      },
      ext_05: [
        {
          key: '2',
          label: 'check2',
        },
        {
          key: '3',
          label: 'check3',
        },
      ],
      ext_06: '2020-04-23 10:28:00 +0900',
      ext_07: {
      },
      ext_08: {
        tdfk_cd: '01',
        tdfk_nm: '北海道',
      },
      ext_09: {
        options: '1',
        text: 'Text',
      },
      ext_10: new Date().toISOString().substr(0, 10),
      validate_only: false,
    },
  };
  switch(targetCol) {
    case 'name':
    case 'from_mail':
    case 'body':
    case 'ext_01':
    case 'ext_02':
      requestData.requestBody[targetCol] = ['test'];
      break;
    case 'inquiry_category_id':
    case 'ext_03':
    case 'ext_04':
    case 'ext_05':
    case 'ext_06':
    case 'ext_07':
    case 'ext_08':
    case 'ext_09':
    case 'ext_10':
      requestData.requestBody[targetCol] = 'test';
      break;
    default:
      throw new Error();
  }
  return executeRequest({
    cy,
    query: 'inquiry send',
    requestData,
  });
};

describe('Inquiry', () => {

  sendMessageWithoutRequiredTargetCols.forEach(target => {
    it('send message without required ' + target + ' -> error', async () => {
      login();
      let errorResponse = {};
      await sendMessageWithoutRequired({ targetCol: target }).catch(e => {
        errorResponse = JSON.parse(e.message);
      })
      expect(errorResponse.status).to.equal(400, target);
      expect(errorResponse.body.errors[0].code).to.equal('required');
      expect(errorResponse.body.errors[0].message).to.equal('Required property missing');
      expect(errorResponse.body.errors[0].field).to.equal(target);
    });
  })

  sendMessageMalformedTargetCols.forEach(target => {
    it('send message with malformed ' + target + ' -> error', async () => {
      login();
      let errorResponse = {};
      await sendMessageMalformed({ targetCol: target }).catch(e => {
        errorResponse = JSON.parse(e.message);
      });
      expect(errorResponse.status).to.equal(400);
      expect(errorResponse.body.errors[0].code).to.equal('invalid');
      expect(errorResponse.body.errors[0].field).to.equal(target);
    });
  });

});
