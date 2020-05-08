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
  xit('rcmsApi1InquiryFormsGet', () => {
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
        from_mail: 'email@example.com',
        body: 'Example Message',
        inquiry_category_id: 1,
        ext_01: 'string',
        ext_02: 'string',
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
        ext_06: '2020-04-23 10:28 +0900',
        ext_07: {
          id: 'test',
          file_id: '',
          file_nm: '',
          desc: '',
        },
        ext_08: {
          tdfk_cd: RcmsApi1Topics1InsertExtCol05TdfkCdEnum._01,
          tdfk_nm: RcmsApi1Topics1InsertExtCol05TdfkNmEnum._北海道,
        },
        ext_09: {
          options: RcmsApi1Topics1InsertExtJsn12OptionsEnum._1,
          text: 'Text',
        },
        ext_10: new Date(),
        validate_only: false,
      },
    };

    executeRequest({ cy, query: methodName, requestData });
  });

  xit('rcmsApi1InquiryFormsInquiryIdGet', () => {
    const methodName = 'rcmsApi1InquiryFormsInquiryIdGet';
    /** @type {InquiriesApiRcmsApi1InquiryFormsInquiryIdGetRequest} */
    const requestData = {
      inquiryId: 1,
    };

    executeRequest({ cy, query: methodName, requestData });
  });
});
