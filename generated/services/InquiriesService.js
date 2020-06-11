"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.infos = exports.InquiriesService = void 0;
const ApiError_1 = require("../core/ApiError");
const request_1 = require("../core/request");
const OpenAPI_1 = require("../core/OpenAPI");
const LocalStorage_1 = require("../core/LocalStorage");
class InquiriesService {
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
    static getInquiriesServiceRcmsApi1InquiryForms(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI_1.OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield request_1.request({
                    headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage_1.LocalStorage.getAccessToken()}` } : {},
                    method: 'get',
                    path: `/rcms-api/1/inquiry/forms`,
                    query: {
                        '_output_format': requestParam.outputFormat,
                        '_lang': requestParam.lang,
                        '_charset': requestParam.charset,
                    },
                });
            });
            let result = yield request();
            if (shouldHookToken && !result.ok && result.status === 401) {
                result = yield Promise.resolve().then(() => __importStar(require('../core/Auth'))).then(({ Auth }) => Auth.retryRequest(request, result));
            }
            ApiError_1.catchGenericError(result);
            return result.body;
        });
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
    static getInquiriesServiceRcmsApi1InquiryFormsInquiryId(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI_1.OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield request_1.request({
                    headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage_1.LocalStorage.getAccessToken()}` } : {},
                    method: 'get',
                    path: `/rcms-api/1/inquiry/forms/${requestParam.inquiryId}`,
                    query: {
                        '_output_format': requestParam.outputFormat,
                        '_lang': requestParam.lang,
                        '_charset': requestParam.charset,
                    },
                });
            });
            let result = yield request();
            if (shouldHookToken && !result.ok && result.status === 401) {
                result = yield Promise.resolve().then(() => __importStar(require('../core/Auth'))).then(({ Auth }) => Auth.retryRequest(request, result));
            }
            ApiError_1.catchGenericError(result);
            return result.body;
        });
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
    static getInquiriesServiceRcmsApi1Inquiry1Messages(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI_1.OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield request_1.request({
                    headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage_1.LocalStorage.getAccessToken()}` } : {},
                    method: 'get',
                    path: `/rcms-api/1/inquiry1/messages`,
                    query: {
                        '_output_format': requestParam.outputFormat,
                        '_lang': requestParam.lang,
                        '_charset': requestParam.charset,
                        'order': requestParam.order,
                    },
                });
            });
            let result = yield request();
            if (shouldHookToken && !result.ok && result.status === 401) {
                result = yield Promise.resolve().then(() => __importStar(require('../core/Auth'))).then(({ Auth }) => Auth.retryRequest(request, result));
            }
            ApiError_1.catchGenericError(result);
            return result.body;
        });
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
    static postInquiriesServiceRcmsApi1Inquiry1MessagesSend(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI_1.OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield request_1.request({
                    headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage_1.LocalStorage.getAccessToken()}` } : {},
                    method: 'post',
                    path: `/rcms-api/1/inquiry1/messages/send`,
                    query: {
                        '_output_format': requestParam.outputFormat,
                        '_lang': requestParam.lang,
                        '_charset': requestParam.charset,
                    },
                    body: requestParam.requestBody,
                });
            });
            let result = yield request();
            if (shouldHookToken && !result.ok && result.status === 401) {
                result = yield Promise.resolve().then(() => __importStar(require('../core/Auth'))).then(({ Auth }) => Auth.retryRequest(request, result));
            }
            ApiError_1.catchGenericError(result);
            return result.body;
        });
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
    static postInquiriesServiceRcmsApi1Inquiry1MessagesUpdate(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI_1.OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield request_1.request({
                    headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage_1.LocalStorage.getAccessToken()}` } : {},
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
            });
            let result = yield request();
            if (shouldHookToken && !result.ok && result.status === 401) {
                result = yield Promise.resolve().then(() => __importStar(require('../core/Auth'))).then(({ Auth }) => Auth.retryRequest(request, result));
            }
            ApiError_1.catchGenericError(result);
            return result.body;
        });
    }
}
exports.InquiriesService = InquiriesService;
(function (InquiriesService) {
    ;
    ;
    ;
    ;
    ;
})(InquiriesService = exports.InquiriesService || (exports.InquiriesService = {}));
exports.infos = [
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
                ext_03?: { key: string ,label: string  } | '' | '1' | '2' | '3',
                /**
                 * RequiredSelect
                 * * 1 => select1
                 * * 2 => select2
                 * * 3 => select3
                 */
                ext_04: { key: string ,label: string  } | '' | '1' | '2' | '3',
                /**
                 * Checkbox
                 * * 1 => check1
                 * * 2 => check2
                 * * 3 => check3
                 */
                ext_05?: Array<{ key: string ,label: string  } | '1' | '2' | '3'>,
                /**
                 * DateTime
                 */
                ext_06?: string | { y: number ,m: number ,d: number ,h: number ,mm: number  },
                ext_07?: {
                    /**
                     * File ID returned by File Upload API
                     */
                    file_id?: string,
                    /**
                     * File name
                     */
                    file_nm?: string,
                    /**
                     * Description
                     */
                    desc?: string,
                },
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
                ext_10?: string | { y: number ,m: number ,d: number  },
                /**
                 * Validate
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
                ext_03?: { key: string ,label: string  } | '' | '1' | '2' | '3',
                /**
                 * RequiredSelect
                 * * 1 => select1
                 * * 2 => select2
                 * * 3 => select3
                 */
                ext_04?: { key: string ,label: string  } | '' | '1' | '2' | '3',
                /**
                 * Checkbox
                 * * 1 => check1
                 * * 2 => check2
                 * * 3 => check3
                 */
                ext_05?: Array<{ key: string ,label: string  } | '1' | '2' | '3'>,
                /**
                 * DateTime
                 */
                ext_06?: string | { y: number ,m: number ,d: number ,h: number ,mm: number  },
                ext_07?: {
                    /**
                     * File ID returned by File Upload API
                     */
                    file_id?: string,
                    /**
                     * File name
                     */
                    file_nm?: string,
                    /**
                     * Description
                     */
                    desc?: string,
                },
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
                ext_10?: string | { y: number ,m: number ,d: number  },
                /**
                 * Validate
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
