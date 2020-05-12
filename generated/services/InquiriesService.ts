/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */

import { ApiError, catchGenericError } from '../core/ApiError';
import { request as __request } from '../core/request';
import { OpenAPI } from '../core/OpenAPI';
import { Auth } from '../core/Auth';

export class InquiriesService {
    /**
     * null
     *
     * ### **InquiryForm::list (v1)**
     *
     * null
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    public static async getInquiriesServiceRcmsApi1InquiryForms(requestParam: InquiriesService.getInquiriesServiceRcmsApi1InquiryFormsRequest): Promise<any> {

        const request = async () =>
        await __request({
            method: 'get',
            path: `/rcms-api/1/inquiry/forms`,
            query: {
                '_output_format': requestParam.outputFormat,
                '_lang': requestParam.lang,
                '_charset': requestParam.charset,
            },
        });

        const security = {
            'Token-Auth': OpenAPI.SECURITY['Token-Auth'],
        };
        const shouldHookToken = Object.values(security).find((v: any) => v.type === 'apiKey');

        const result = await request().then(result => {
            if (shouldHookToken && result.status === 401) {
                return Auth.loginWithStoredToken({ requestBody: {} }).then(async () => await request());
            }
            return result;
        });

        catchGenericError(result);
        return result.body;
    }
    /**
     * null
     *
     * ### **InquiryForm::details (v1)**
     *
     * null
     * @param inquiryId
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    public static async getInquiriesServiceRcmsApi1InquiryFormsInquiryId(requestParam: InquiriesService.getInquiriesServiceRcmsApi1InquiryFormsInquiryIdRequest): Promise<any> {

        const request = async () =>
        await __request({
            method: 'get',
            path: `/rcms-api/1/inquiry/forms/${requestParam.inquiryId}`,
            query: {
                '_output_format': requestParam.outputFormat,
                '_lang': requestParam.lang,
                '_charset': requestParam.charset,
            },
        });

        const security = {
            'Token-Auth': OpenAPI.SECURITY['Token-Auth'],
        };
        const shouldHookToken = Object.values(security).find((v: any) => v.type === 'apiKey');

        const result = await request().then(result => {
            if (shouldHookToken && result.status === 401) {
                return Auth.loginWithStoredToken({ requestBody: {} }).then(async () => await request());
            }
            return result;
        });

        catchGenericError(result);
        return result.body;
    }
    /**
     *
     * ### **InquiryMessage::list (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **id** `1`
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @param order Set the sort order. Available param {0}
     * @result any
     * @throws ApiError
     */
    public static async getInquiriesServiceRcmsApi1Inquiry1Messages(requestParam: InquiriesService.getInquiriesServiceRcmsApi1Inquiry1MessagesRequest): Promise<any> {

        const request = async () =>
        await __request({
            method: 'get',
            path: `/rcms-api/1/inquiry1/messages`,
            query: {
                '_output_format': requestParam.outputFormat,
                '_lang': requestParam.lang,
                '_charset': requestParam.charset,
                'order': requestParam.order,
            },
        });

        const security = {
            'Token-Auth': OpenAPI.SECURITY['Token-Auth'],
        };
        const shouldHookToken = Object.values(security).find((v: any) => v.type === 'apiKey');

        const result = await request().then(result => {
            if (shouldHookToken && result.status === 401) {
                return Auth.loginWithStoredToken({ requestBody: {} }).then(async () => await request());
            }
            return result;
        });

        catchGenericError(result);
        return result.body;
    }
    /**
     *
     * ### **InquiryMessage::send (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **id** `1`
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    public static async postInquiriesServiceRcmsApi1Inquiry1MessagesSend(requestParam: InquiriesService.postInquiriesServiceRcmsApi1Inquiry1MessagesSendRequest): Promise<any> {

        const request = async () =>
        await __request({
            method: 'post',
            path: `/rcms-api/1/inquiry1/messages/send`,
            query: {
                '_output_format': requestParam.outputFormat,
                '_lang': requestParam.lang,
                '_charset': requestParam.charset,
            },
            body: requestParam.requestBody,
        });

        const security = {
            'Token-Auth': OpenAPI.SECURITY['Token-Auth'],
        };
        const shouldHookToken = Object.values(security).find((v: any) => v.type === 'apiKey');

        const result = await request().then(result => {
            if (shouldHookToken && result.status === 401) {
                return Auth.loginWithStoredToken({ requestBody: {} }).then(async () => await request());
            }
            return result;
        });

        catchGenericError(result);
        return result.body;
    }
    /**
     *
     * ### **InquiryMessage::update (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **id** `1`
     *
     * @param inquiryBnId Message ID
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    public static async postInquiriesServiceRcmsApi1Inquiry1MessagesUpdate(requestParam: InquiriesService.postInquiriesServiceRcmsApi1Inquiry1MessagesUpdateRequest): Promise<any> {

        const request = async () =>
        await __request({
            method: 'post',
            path: `/rcms-api/1/inquiry1/messages/update`,
            query: {
                'inquiry_bn_id': requestParam.inquiryBnId,
                '_output_format': requestParam.outputFormat,
                '_lang': requestParam.lang,
                '_charset': requestParam.charset,
            },
            body: requestParam.requestBody,
        });

        const security = {
            'Token-Auth': OpenAPI.SECURITY['Token-Auth'],
        };
        const shouldHookToken = Object.values(security).find((v: any) => v.type === 'apiKey');

        const result = await request().then(result => {
            if (shouldHookToken && result.status === 401) {
                return Auth.loginWithStoredToken({ requestBody: {} }).then(async () => await request());
            }
            return result;
        });

        catchGenericError(result);
        return result.body;
    }
}

export namespace InquiriesService {
    export interface getInquiriesServiceRcmsApi1InquiryFormsRequest {
        outputFormat?: string,
        lang?: string,
        charset?: string,
    };
    export type getInquiriesServiceRcmsApi1InquiryFormsResponse = any;
    export interface getInquiriesServiceRcmsApi1InquiryFormsInquiryIdRequest {
        inquiryId: number,
        outputFormat?: string,
        lang?: string,
        charset?: string,
    };
    export type getInquiriesServiceRcmsApi1InquiryFormsInquiryIdResponse = any;
    export interface getInquiriesServiceRcmsApi1Inquiry1MessagesRequest {
        outputFormat?: string,
        lang?: string,
        charset?: string,
        order?: string,
    };
    export type getInquiriesServiceRcmsApi1Inquiry1MessagesResponse = any;
    export interface postInquiriesServiceRcmsApi1Inquiry1MessagesSendRequest {
        requestBody: {
            /**
             * Name
             */
            name?: string,
            /**
             * E-mail
             */
            from_mail?: string,
            /**
             * Message
             */
            body?: string,
            /**
             * * 1 => Category1
             * * 3 => Category2
             * * 4 => Category3
             */
            inquiry_category_id: (1 | 3 | 4),
            /**
             * RequiredText
             */
            ext_01: string,
            /**
             * LongText
             */
            ext_02?: string,
            /**
             * Radio
             * * 1 => radio1
             * * 2 => radio2
             * * 3 => radio3
             */
            ext_03?: any,
            /**
             * RequiredSelect
             * * 1 => select1
             * * 2 => select2
             * * 3 => select3
             */
            ext_04: any,
            /**
             * Checkbox
             * * 1 => check1
             * * 2 => check2
             * * 3 => check3
             */
            ext_05?: Array<any>,
            /**
             * DateTime
             */
            ext_06?: any,
            ext_07?: any,
            /**
             * Tdfk
             */
            ext_08?: {
                tdfk_cd?: ('01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '20' | '21' | '22' | '23' | '24' | '25' | '26' | '27' | '28' | '29' | '30' | '31' | '32' | '33' | '34' | '35' | '36' | '37' | '38' | '39' | '40' | '41' | '42' | '43' | '44' | '45' | '46' | '47' | '99'),
                tdfk_nm?: ('北海道' | '青森県' | '岩手県' | '宮城県' | '秋田県' | '山形県' | '福島県' | '茨城県' | '栃木県' | '群馬県' | '埼玉県' | '千葉県' | '東京都' | '神奈川県' | '新潟県' | '富山県' | '石川県' | '福井県' | '山梨県' | '長野県' | '岐阜県' | '静岡県' | '愛知県' | '三重県' | '滋賀県' | '京都府' | '大阪府' | '兵庫県' | '奈良県' | '和歌山県' | '鳥取県' | '島根県' | '岡山県' | '広島県' | '山口県' | '徳島県' | '香川県' | '愛媛県' | '高知県' | '福岡県' | '佐賀県' | '長崎県' | '熊本県' | '大分県' | '宮崎県' | '鹿児島県' | '沖縄県' | '海外'),
            },
            /**
             * JSON
             */
            ext_09?: {
                /**
                 * * 1 => opt1
                 * * 2 => opt2
                 */
                options?: ('1' | '2'),
                text?: string,
            },
            /**
             * Date
             */
            ext_10?: string,
            /**
             * /label/send_validate
             */
            validate_only?: boolean,
        },
        outputFormat?: string,
        lang?: string,
        charset?: string,
    };
    export type postInquiriesServiceRcmsApi1Inquiry1MessagesSendResponse = any;
    export interface postInquiriesServiceRcmsApi1Inquiry1MessagesUpdateRequest {
        inquiryBnId: string,
        requestBody: {
            /**
             * Name
             */
            name?: string,
            /**
             * E-mail
             */
            from_mail?: string,
            /**
             * Message
             */
            body?: string,
            /**
             * * 1 => Category1
             * * 3 => Category2
             * * 4 => Category3
             */
            inquiry_category_id?: (1 | 3 | 4),
            /**
             * RequiredText
             */
            ext_01?: string,
            /**
             * LongText
             */
            ext_02?: string,
            /**
             * Radio
             * * 1 => radio1
             * * 2 => radio2
             * * 3 => radio3
             */
            ext_03?: any,
            /**
             * RequiredSelect
             * * 1 => select1
             * * 2 => select2
             * * 3 => select3
             */
            ext_04?: any,
            /**
             * Checkbox
             * * 1 => check1
             * * 2 => check2
             * * 3 => check3
             */
            ext_05?: Array<any>,
            /**
             * DateTime
             */
            ext_06?: any,
            ext_07?: any,
            /**
             * Tdfk
             */
            ext_08?: {
                tdfk_cd?: ('01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '20' | '21' | '22' | '23' | '24' | '25' | '26' | '27' | '28' | '29' | '30' | '31' | '32' | '33' | '34' | '35' | '36' | '37' | '38' | '39' | '40' | '41' | '42' | '43' | '44' | '45' | '46' | '47' | '99'),
                tdfk_nm?: ('北海道' | '青森県' | '岩手県' | '宮城県' | '秋田県' | '山形県' | '福島県' | '茨城県' | '栃木県' | '群馬県' | '埼玉県' | '千葉県' | '東京都' | '神奈川県' | '新潟県' | '富山県' | '石川県' | '福井県' | '山梨県' | '長野県' | '岐阜県' | '静岡県' | '愛知県' | '三重県' | '滋賀県' | '京都府' | '大阪府' | '兵庫県' | '奈良県' | '和歌山県' | '鳥取県' | '島根県' | '岡山県' | '広島県' | '山口県' | '徳島県' | '香川県' | '愛媛県' | '高知県' | '福岡県' | '佐賀県' | '長崎県' | '熊本県' | '大分県' | '宮崎県' | '鹿児島県' | '沖縄県' | '海外'),
            },
            /**
             * JSON
             */
            ext_09?: {
                /**
                 * * 1 => opt1
                 * * 2 => opt2
                 */
                options?: ('1' | '2'),
                text?: string,
            },
            /**
             * Date
             */
            ext_10?: any,
            /**
             * /label/send_validate
             */
            validate_only?: boolean,
        },
        outputFormat?: string,
        lang?: string,
        charset?: string,
    };
    export type postInquiriesServiceRcmsApi1Inquiry1MessagesUpdateResponse = any;
}

export const infos = [
    {
        path: '/rcms-api/1/inquiry/forms',
        httpMethod: 'get',
        class: InquiriesService,
        className: 'InquiriesService',
        method: InquiriesService.getInquiriesServiceRcmsApi1InquiryForms,
        methodName: 'getInquiriesServiceRcmsApi1InquiryForms',
        auth: null,
        description: `
        export interface getInquiriesServiceRcmsApi1InquiryFormsRequest {
            outputFormat?: string,
            lang?: string,
            charset?: string,
        };
        export type getInquiriesServiceRcmsApi1InquiryFormsResponse = any;
        `,
    },
    {
        path: '/rcms-api/1/inquiry/forms/${requestParam.inquiryId}',
        httpMethod: 'get',
        class: InquiriesService,
        className: 'InquiriesService',
        method: InquiriesService.getInquiriesServiceRcmsApi1InquiryFormsInquiryId,
        methodName: 'getInquiriesServiceRcmsApi1InquiryFormsInquiryId',
        auth: null,
        description: `
        export interface getInquiriesServiceRcmsApi1InquiryFormsInquiryIdRequest {
            inquiryId: number,
            outputFormat?: string,
            lang?: string,
            charset?: string,
        };
        export type getInquiriesServiceRcmsApi1InquiryFormsInquiryIdResponse = any;
        `,
    },
    {
        path: '/rcms-api/1/inquiry1/messages',
        httpMethod: 'get',
        class: InquiriesService,
        className: 'InquiriesService',
        method: InquiriesService.getInquiriesServiceRcmsApi1Inquiry1Messages,
        methodName: 'getInquiriesServiceRcmsApi1Inquiry1Messages',
        auth: null,
        description: `
        export interface getInquiriesServiceRcmsApi1Inquiry1MessagesRequest {
            outputFormat?: string,
            lang?: string,
            charset?: string,
            order?: string,
        };
        export type getInquiriesServiceRcmsApi1Inquiry1MessagesResponse = any;
        `,
    },
    {
        path: '/rcms-api/1/inquiry1/messages/send',
        httpMethod: 'post',
        class: InquiriesService,
        className: 'InquiriesService',
        method: InquiriesService.postInquiriesServiceRcmsApi1Inquiry1MessagesSend,
        methodName: 'postInquiriesServiceRcmsApi1Inquiry1MessagesSend',
        auth: null,
        description: `
        export interface postInquiriesServiceRcmsApi1Inquiry1MessagesSendRequest {
            requestBody: {
                /**
                 * Name
                 */
                name?: string,
                /**
                 * E-mail
                 */
                from_mail?: string,
                /**
                 * Message
                 */
                body?: string,
                /**
                 * * 1 => Category1
                 * * 3 => Category2
                 * * 4 => Category3
                 */
                inquiry_category_id: (1 | 3 | 4),
                /**
                 * RequiredText
                 */
                ext_01: string,
                /**
                 * LongText
                 */
                ext_02?: string,
                /**
                 * Radio
                 * * 1 => radio1
                 * * 2 => radio2
                 * * 3 => radio3
                 */
                ext_03?: any,
                /**
                 * RequiredSelect
                 * * 1 => select1
                 * * 2 => select2
                 * * 3 => select3
                 */
                ext_04: any,
                /**
                 * Checkbox
                 * * 1 => check1
                 * * 2 => check2
                 * * 3 => check3
                 */
                ext_05?: Array<any>,
                /**
                 * DateTime
                 */
                ext_06?: any,
                ext_07?: any,
                /**
                 * Tdfk
                 */
                ext_08?: {
                    tdfk_cd?: ('01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '20' | '21' | '22' | '23' | '24' | '25' | '26' | '27' | '28' | '29' | '30' | '31' | '32' | '33' | '34' | '35' | '36' | '37' | '38' | '39' | '40' | '41' | '42' | '43' | '44' | '45' | '46' | '47' | '99'),
                    tdfk_nm?: ('北海道' | '青森県' | '岩手県' | '宮城県' | '秋田県' | '山形県' | '福島県' | '茨城県' | '栃木県' | '群馬県' | '埼玉県' | '千葉県' | '東京都' | '神奈川県' | '新潟県' | '富山県' | '石川県' | '福井県' | '山梨県' | '長野県' | '岐阜県' | '静岡県' | '愛知県' | '三重県' | '滋賀県' | '京都府' | '大阪府' | '兵庫県' | '奈良県' | '和歌山県' | '鳥取県' | '島根県' | '岡山県' | '広島県' | '山口県' | '徳島県' | '香川県' | '愛媛県' | '高知県' | '福岡県' | '佐賀県' | '長崎県' | '熊本県' | '大分県' | '宮崎県' | '鹿児島県' | '沖縄県' | '海外'),
                },
                /**
                 * JSON
                 */
                ext_09?: {
                    /**
                     * * 1 => opt1
                     * * 2 => opt2
                     */
                    options?: ('1' | '2'),
                    text?: string,
                },
                /**
                 * Date
                 */
                ext_10?: string,
                /**
                 * /label/send_validate
                 */
                validate_only?: boolean,
            },
            outputFormat?: string,
            lang?: string,
            charset?: string,
        };
        export type postInquiriesServiceRcmsApi1Inquiry1MessagesSendResponse = any;
        `,
    },
    {
        path: '/rcms-api/1/inquiry1/messages/update',
        httpMethod: 'post',
        class: InquiriesService,
        className: 'InquiriesService',
        method: InquiriesService.postInquiriesServiceRcmsApi1Inquiry1MessagesUpdate,
        methodName: 'postInquiriesServiceRcmsApi1Inquiry1MessagesUpdate',
        auth: null,
        description: `
        export interface postInquiriesServiceRcmsApi1Inquiry1MessagesUpdateRequest {
            inquiryBnId: string,
            requestBody: {
                /**
                 * Name
                 */
                name?: string,
                /**
                 * E-mail
                 */
                from_mail?: string,
                /**
                 * Message
                 */
                body?: string,
                /**
                 * * 1 => Category1
                 * * 3 => Category2
                 * * 4 => Category3
                 */
                inquiry_category_id?: (1 | 3 | 4),
                /**
                 * RequiredText
                 */
                ext_01?: string,
                /**
                 * LongText
                 */
                ext_02?: string,
                /**
                 * Radio
                 * * 1 => radio1
                 * * 2 => radio2
                 * * 3 => radio3
                 */
                ext_03?: any,
                /**
                 * RequiredSelect
                 * * 1 => select1
                 * * 2 => select2
                 * * 3 => select3
                 */
                ext_04?: any,
                /**
                 * Checkbox
                 * * 1 => check1
                 * * 2 => check2
                 * * 3 => check3
                 */
                ext_05?: Array<any>,
                /**
                 * DateTime
                 */
                ext_06?: any,
                ext_07?: any,
                /**
                 * Tdfk
                 */
                ext_08?: {
                    tdfk_cd?: ('01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '20' | '21' | '22' | '23' | '24' | '25' | '26' | '27' | '28' | '29' | '30' | '31' | '32' | '33' | '34' | '35' | '36' | '37' | '38' | '39' | '40' | '41' | '42' | '43' | '44' | '45' | '46' | '47' | '99'),
                    tdfk_nm?: ('北海道' | '青森県' | '岩手県' | '宮城県' | '秋田県' | '山形県' | '福島県' | '茨城県' | '栃木県' | '群馬県' | '埼玉県' | '千葉県' | '東京都' | '神奈川県' | '新潟県' | '富山県' | '石川県' | '福井県' | '山梨県' | '長野県' | '岐阜県' | '静岡県' | '愛知県' | '三重県' | '滋賀県' | '京都府' | '大阪府' | '兵庫県' | '奈良県' | '和歌山県' | '鳥取県' | '島根県' | '岡山県' | '広島県' | '山口県' | '徳島県' | '香川県' | '愛媛県' | '高知県' | '福岡県' | '佐賀県' | '長崎県' | '熊本県' | '大分県' | '宮崎県' | '鹿児島県' | '沖縄県' | '海外'),
                },
                /**
                 * JSON
                 */
                ext_09?: {
                    /**
                     * * 1 => opt1
                     * * 2 => opt2
                     */
                    options?: ('1' | '2'),
                    text?: string,
                },
                /**
                 * Date
                 */
                ext_10?: any,
                /**
                 * /label/send_validate
                 */
                validate_only?: boolean,
            },
            outputFormat?: string,
            lang?: string,
            charset?: string,
        };
        export type postInquiriesServiceRcmsApi1Inquiry1MessagesUpdateResponse = any;
        `,
    },
];
