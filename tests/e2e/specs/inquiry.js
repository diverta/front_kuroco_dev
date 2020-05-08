/// <reference types="cypress" />
// @ts-check

// https://docs.cypress.io/api/introduction/api.html

import { executeRequest } from '../base';

import {
  InquiriesApiRcmsApi1InquiryFormsGetRequest,
  InquiriesApiRcmsApi1InquiryFormsInquiryIdGetRequest,
  InquiriesApiRcmsApi1Inquiry1MessagesSendPostRequest,
  RcmsApi1Topics1InsertExtCol05TdfkCdEnum,
  RcmsApi1Topics1InsertExtCol05TdfkNmEnum,
  RcmsApi1Topics1InsertExtJsn12OptionsEnum,
} from 'kuroco';

describe('Inquiry', () => {
  it('rcmsApi1InquiryFormsGet', () => {
    const methodName = 'rcmsApi1InquiryFormsGet';
    /** @type {InquiriesApiRcmsApi1InquiryFormsGetRequest} */
    const requestData = {};

    executeRequest({ cy, query: methodName, requestData });
  });

  it('rcmsApi1Inquiry1MessagesSendPost', () => {
    const methodName = 'rcmsApi1Inquiry1MessagesSendPost';

    /** @type {InquiriesApiRcmsApi1Inquiry1MessagesSendPostRequest} */
    const requestData = {
      inlineObject16: {
        name: 'My Name',
        fromMail: 'email@example.com',
        body: 'Example Message',
        inquiryCategoryId: 1,
        ext01: 'string',
        ext02: 'string',
        ext03: {
          key: '1',
          label: 'radio1',
        },
        ext04: {
          key: '1',
          label: 'select1',
        },
        ext05: [
          {
            key: '2',
            label: 'check2',
          },
          {
            key: '3',
            label: 'check3',
          },
        ],
        ext06: '2020-04-23 10:28 +0900',
        ext07: {
          id: 'string',
          fileId: 'string',
          fileNm: 'string',
          desc: 'string',
        },
        ext08: {
          tdfkCd: RcmsApi1Topics1InsertExtCol05TdfkCdEnum._01,
          tdfkNm: RcmsApi1Topics1InsertExtCol05TdfkNmEnum._北海道,
        },
        ext09: {
          options: RcmsApi1Topics1InsertExtJsn12OptionsEnum._1,
          text: 'Text',
        },
        ext10: new Date(),
        validateOnly: false,
      },
    };

    executeRequest({ cy, query: methodName, requestData });
  });

  it('rcmsApi1InquiryFormsInquiryIdGet', () => {
    const methodName = 'rcmsApi1InquiryFormsInquiryIdGet';
    /** @type {InquiriesApiRcmsApi1InquiryFormsInquiryIdGetRequest} */
    const requestData = {
      inquiryId: 1,
    };

    executeRequest({ cy, query: methodName, requestData });
  });
});
