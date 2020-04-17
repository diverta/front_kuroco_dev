/**
 * Test
 * test
 *
 * The version of the OpenAPI document: 1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import * as runtime from '../runtime';
import { InlineObject14, InlineObject15 } from '../models';
export interface InquiriesApiRcmsApi1Inquiry1MessagesGetRequest {
    outputFormat?: string;
    lang?: string;
    charset?: string;
    order?: string;
}
export interface InquiriesApiRcmsApi1Inquiry1MessagesSendPostRequest {
    inlineObject14: InlineObject14;
    outputFormat?: string;
    lang?: string;
    charset?: string;
}
export interface InquiriesApiRcmsApi1Inquiry1MessagesUpdatePostRequest {
    inquiryBnId: string;
    inlineObject15: InlineObject15;
    outputFormat?: string;
    lang?: string;
    charset?: string;
}
export interface InquiriesApiRcmsApi1InquiryFormsGetRequest {
    outputFormat?: string;
    lang?: string;
    charset?: string;
}
export interface InquiriesApiRcmsApi1InquiryFormsInquiryIdGetRequest {
    inquiryId: number;
    outputFormat?: string;
    lang?: string;
    charset?: string;
}
/**
 * no description
 */
export declare class InquiriesApi extends runtime.BaseAPI {
    static readonly className: string;
    static readonly infos: ({
        class: typeof InquiriesApi;
        url: string;
        requestMethodName: string;
        requestRequiredParamSample: {
            inlineObject14?: undefined;
            inquiryBnId?: undefined;
            inlineObject15?: undefined;
            inquiryId?: undefined;
        };
        requestParamInterfaceDescription: string;
    } | {
        class: typeof InquiriesApi;
        url: string;
        requestMethodName: string;
        requestRequiredParamSample: {
            inlineObject14: any;
            inquiryBnId?: undefined;
            inlineObject15?: undefined;
            inquiryId?: undefined;
        };
        requestParamInterfaceDescription: string;
    } | {
        class: typeof InquiriesApi;
        url: string;
        requestMethodName: string;
        requestRequiredParamSample: {
            inquiryBnId: any;
            inlineObject15: any;
            inlineObject14?: undefined;
            inquiryId?: undefined;
        };
        requestParamInterfaceDescription: string;
    } | {
        class: typeof InquiriesApi;
        url: string;
        requestMethodName: string;
        requestRequiredParamSample: {
            inquiryId: any;
            inlineObject14?: undefined;
            inquiryBnId?: undefined;
            inlineObject15?: undefined;
        };
        requestParamInterfaceDescription: string;
    })[];
    /**
     *  ### **InquiryMessage::list (v1)**   ## Controller parameters  > **id** `1`
     */
    rcmsApi1Inquiry1MessagesGet(requestParameters: InquiriesApiRcmsApi1Inquiry1MessagesGetRequest): Promise<runtime.JSONApiResponse<any>>;
    /**
     *  ### **InquiryMessage::send (v1)**   ## Controller parameters  > **id** `1`
     */
    rcmsApi1Inquiry1MessagesSendPost(requestParameters: InquiriesApiRcmsApi1Inquiry1MessagesSendPostRequest): Promise<runtime.JSONApiResponse<any>>;
    /**
     *  ### **InquiryMessage::update (v1)**   ## Controller parameters  > **id** `1`
     */
    rcmsApi1Inquiry1MessagesUpdatePost(requestParameters: InquiriesApiRcmsApi1Inquiry1MessagesUpdatePostRequest): Promise<runtime.JSONApiResponse<any>>;
    /**
     *  ### **InquiryForm::list (v1)**  null
     */
    rcmsApi1InquiryFormsGet(requestParameters: InquiriesApiRcmsApi1InquiryFormsGetRequest): Promise<runtime.JSONApiResponse<any>>;
    /**
     *  ### **InquiryForm::details (v1)**  null
     */
    rcmsApi1InquiryFormsInquiryIdGet(requestParameters: InquiriesApiRcmsApi1InquiryFormsInquiryIdGetRequest): Promise<runtime.JSONApiResponse<any>>;
}
//# sourceMappingURL=InquiriesApi.d.ts.map