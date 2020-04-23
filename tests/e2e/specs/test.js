// https://docs.cypress.io/api/introduction/api.html

import { executeRequest } from '../base';

describe('Inquiry', () => {
  it('rcmsApi1InquiryFormsGet', () => {
    const methodName = 'rcmsApi1InquiryFormsGet';
    const requestData = {};

    executeRequest(cy, methodName, requestData);
  });

  it('rcmsApi1InquiryFormsInquiryIdGet', () => {
    const methodName = 'rcmsApi1InquiryFormsInquiryIdGet';
    const requestData = {
      inquiryId: 1,
    };

    executeRequest(cy, methodName, requestData);
  });
});
