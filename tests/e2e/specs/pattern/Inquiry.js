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

const expectedResponseShortExt = {
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
      key: '1',
      label: 'check1',
    },
    {
      key: '3',
      label: 'check3',
    },
  ],
  ext_11: [
    {
      ROW: {
        key: 'col1',
        label: 'COLUMN_1'
      },
      COL: {
        key: 'row1',
        label: 'ROW_1'
      }
    },
    {
      ROW: {
        key: 'col2',
        label: 'COLUMN_2'
      },
      COL: {
        key: 'row2',
        label: 'ROW_2'
      }
    },
    {
      ROW: {
        key: 'col3',
        label: 'COLUMN_3'
      },
      COL: {
        key: 'row3',
        label: 'ROW_3'
      }
    },
  ],
  ext_12: [
    {
      ROW: {
        key: 'col1',
        label: 'COLUMN_1'
      },
      COL: [
        {
          key: 'row1',
          label: 'ROW_1'
        }
      ]
    },
    {
      ROW: {
        key: 'col2',
        label: 'COLUMN_2'
      },
      COL: [
        {
          key: 'row1',
          label: 'ROW_1'
        },
        {
          key: 'row2',
          label: 'ROW_2'
        },
      ]
    },
    {
      ROW: {
        key: 'col3',
        label: 'COLUMN_3'
      },
      COL: [
        {
          key: 'row1',
          label: 'ROW_1'
        },
        {
          key: 'row2',
          label: 'ROW_2'
        },
        {
          key: 'row3',
          label: 'ROW_3'
        }
      ]
    },
  ],
};
const sendMessageShortExt = () => {
  /** @type {import('../../../../generated/services/InquiriesService').InquiriesService.postInquiriesServiceRcmsApi1Inquiry1MessagesSendRequest} */
  const requestData = {
    requestBody: {
      name: 'Inquiry Test',
      from_mail: 'email@example.com',
      body: 'test',
      inquiry_category_id: 1,
      ext_01: 'string1',
      ext_03: '1',
      ext_04: '1',
      ext_05: ['1', '3'],
      ext_11: {
        col1: 'row1',
        col2: 'row2',
        col3: 'row3',
      },
      ext_12: {
        col1: ['row1'],
        col2: ['row1', 'row2'],
        col3: ['row1', 'row2', 'row3'],
      },
      validate_only: false,
    },
  };
  return executeRequest({
    cy,
    query: 'inquiry send',
    requestData,
    timeout: 15000,
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

  it('send message with short ext', async () => {
    login();
    const insertRes = await sendMessageShortExt();
    const addedId = insertRes.id;

    const getMessageBy = async id => {
      try {
        return (await getMessages()).list.find(
          msg => msg.inquiry_bn_id === id
        );
      } catch(e) {
        throw Error(`the created message is not found.\nid: ${id}\n${e}`)
      }
    };
    const sentMessage = await getMessageBy(addedId);
    expect(sentMessage).to.exist;
    Object.keys(expectedResponseShortExt).forEach(key => {
      expect(sentMessage[key], key).to.deep.equal(expectedResponseShortExt[key]);
    });
  });

  sendMessageWithoutRequiredTargetCols.forEach(target => {
    it('send message without required ' + target + ' -> error', async () => {
      login();
      let errorResponse = {};
      await sendMessageWithoutRequired({ targetCol: target }).catch(e => {
        errorResponse = JSON.parse(e.message);
      })
      expect(errorResponse.status).to.equal(400, target);
      // expect(errorResponse.body.errors[0]).to.include('Required property missing: ' + target);
      expect(errorResponse.body.errors[0].code).to.equal('required');
      
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
      // expect(errorResponse.body.errors[0]).to.include('properties:'+target, target);
      expect(errorResponse.body.errors[0].code).to.equal('invalid');
    });
  });

});
