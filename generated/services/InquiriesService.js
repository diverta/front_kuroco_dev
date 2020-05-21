/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */
import { __awaiter, __generator } from "tslib";
import { catchGenericError } from '../core/ApiError';
import { request as __request } from '../core/request';
import { OpenAPI } from '../core/OpenAPI';
import { Auth } from '../core/Auth';
var InquiriesService = /** @class */ (function () {
    function InquiriesService() {
    }
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
    InquiriesService.getInquiriesServiceRcmsApi1InquiryForms = function (requestParam) {
        return __awaiter(this, void 0, void 0, function () {
            var shouldHookToken, headers, request, result;
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        shouldHookToken = Object.keys({}).length > 0;
                        headers = shouldHookToken ? (_a = {}, _a[OpenAPI.SECURITY['Token-Auth'].name] = "" + Auth.getAccessToken(), _a) : {};
                        request = function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, __request({
                                            headers: headers,
                                            method: 'get',
                                            path: "/rcms-api/1/inquiry/forms",
                                            query: {
                                                '_output_format': requestParam.outputFormat,
                                                '_lang': requestParam.lang,
                                                '_charset': requestParam.charset,
                                            },
                                        })];
                                    case 1: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); };
                        return [4 /*yield*/, request()];
                    case 1:
                        result = _b.sent();
                        if (!(shouldHookToken && !result.ok && result.status === 401)) return [3 /*break*/, 3];
                        return [4 /*yield*/, Auth.retryRequest(request, result)];
                    case 2:
                        result = _b.sent();
                        _b.label = 3;
                    case 3:
                        catchGenericError(result);
                        return [2 /*return*/, result.body];
                }
            });
        });
    };
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
    InquiriesService.getInquiriesServiceRcmsApi1InquiryFormsInquiryId = function (requestParam) {
        return __awaiter(this, void 0, void 0, function () {
            var shouldHookToken, headers, request, result;
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        shouldHookToken = Object.keys({}).length > 0;
                        headers = shouldHookToken ? (_a = {}, _a[OpenAPI.SECURITY['Token-Auth'].name] = "" + Auth.getAccessToken(), _a) : {};
                        request = function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, __request({
                                            headers: headers,
                                            method: 'get',
                                            path: "/rcms-api/1/inquiry/forms/" + requestParam.inquiryId,
                                            query: {
                                                '_output_format': requestParam.outputFormat,
                                                '_lang': requestParam.lang,
                                                '_charset': requestParam.charset,
                                            },
                                        })];
                                    case 1: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); };
                        return [4 /*yield*/, request()];
                    case 1:
                        result = _b.sent();
                        if (!(shouldHookToken && !result.ok && result.status === 401)) return [3 /*break*/, 3];
                        return [4 /*yield*/, Auth.retryRequest(request, result)];
                    case 2:
                        result = _b.sent();
                        _b.label = 3;
                    case 3:
                        catchGenericError(result);
                        return [2 /*return*/, result.body];
                }
            });
        });
    };
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
    InquiriesService.getInquiriesServiceRcmsApi1Inquiry1Messages = function (requestParam) {
        return __awaiter(this, void 0, void 0, function () {
            var shouldHookToken, headers, request, result;
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        shouldHookToken = Object.keys({}).length > 0;
                        headers = shouldHookToken ? (_a = {}, _a[OpenAPI.SECURITY['Token-Auth'].name] = "" + Auth.getAccessToken(), _a) : {};
                        request = function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, __request({
                                            headers: headers,
                                            method: 'get',
                                            path: "/rcms-api/1/inquiry1/messages",
                                            query: {
                                                '_output_format': requestParam.outputFormat,
                                                '_lang': requestParam.lang,
                                                '_charset': requestParam.charset,
                                                'order': requestParam.order,
                                            },
                                        })];
                                    case 1: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); };
                        return [4 /*yield*/, request()];
                    case 1:
                        result = _b.sent();
                        if (!(shouldHookToken && !result.ok && result.status === 401)) return [3 /*break*/, 3];
                        return [4 /*yield*/, Auth.retryRequest(request, result)];
                    case 2:
                        result = _b.sent();
                        _b.label = 3;
                    case 3:
                        catchGenericError(result);
                        return [2 /*return*/, result.body];
                }
            });
        });
    };
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
    InquiriesService.postInquiriesServiceRcmsApi1Inquiry1MessagesSend = function (requestParam) {
        return __awaiter(this, void 0, void 0, function () {
            var shouldHookToken, headers, request, result;
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        shouldHookToken = Object.keys({}).length > 0;
                        headers = shouldHookToken ? (_a = {}, _a[OpenAPI.SECURITY['Token-Auth'].name] = "" + Auth.getAccessToken(), _a) : {};
                        request = function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, __request({
                                            headers: headers,
                                            method: 'post',
                                            path: "/rcms-api/1/inquiry1/messages/send",
                                            query: {
                                                '_output_format': requestParam.outputFormat,
                                                '_lang': requestParam.lang,
                                                '_charset': requestParam.charset,
                                            },
                                            body: requestParam.requestBody,
                                        })];
                                    case 1: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); };
                        return [4 /*yield*/, request()];
                    case 1:
                        result = _b.sent();
                        if (!(shouldHookToken && !result.ok && result.status === 401)) return [3 /*break*/, 3];
                        return [4 /*yield*/, Auth.retryRequest(request, result)];
                    case 2:
                        result = _b.sent();
                        _b.label = 3;
                    case 3:
                        catchGenericError(result);
                        return [2 /*return*/, result.body];
                }
            });
        });
    };
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
    InquiriesService.postInquiriesServiceRcmsApi1Inquiry1MessagesUpdate = function (requestParam) {
        return __awaiter(this, void 0, void 0, function () {
            var shouldHookToken, headers, request, result;
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        shouldHookToken = Object.keys({}).length > 0;
                        headers = shouldHookToken ? (_a = {}, _a[OpenAPI.SECURITY['Token-Auth'].name] = "" + Auth.getAccessToken(), _a) : {};
                        request = function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, __request({
                                            headers: headers,
                                            method: 'post',
                                            path: "/rcms-api/1/inquiry1/messages/update",
                                            query: {
                                                'inquiry_bn_id': requestParam.inquiryBnId,
                                                '_output_format': requestParam.outputFormat,
                                                '_lang': requestParam.lang,
                                                '_charset': requestParam.charset,
                                            },
                                            body: requestParam.requestBody,
                                        })];
                                    case 1: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); };
                        return [4 /*yield*/, request()];
                    case 1:
                        result = _b.sent();
                        if (!(shouldHookToken && !result.ok && result.status === 401)) return [3 /*break*/, 3];
                        return [4 /*yield*/, Auth.retryRequest(request, result)];
                    case 2:
                        result = _b.sent();
                        _b.label = 3;
                    case 3:
                        catchGenericError(result);
                        return [2 /*return*/, result.body];
                }
            });
        });
    };
    return InquiriesService;
}());
export { InquiriesService };
(function (InquiriesService) {
    ;
    ;
    ;
    ;
    ;
})(InquiriesService || (InquiriesService = {}));
export var infos = [
    {
        path: '/rcms-api/1/inquiry/forms',
        httpMethod: 'get',
        class: InquiriesService,
        className: 'InquiriesService',
        method: InquiriesService.getInquiriesServiceRcmsApi1InquiryForms,
        methodName: 'getInquiriesServiceRcmsApi1InquiryForms',
        auth: null,
        description: "\n        export interface getInquiriesServiceRcmsApi1InquiryFormsRequest {\n            outputFormat?: string,\n            lang?: string,\n            charset?: string,\n        };\n        export type getInquiriesServiceRcmsApi1InquiryFormsResponse = any;\n        ",
    },
    {
        path: '/rcms-api/1/inquiry/forms/${requestParam.inquiryId}',
        httpMethod: 'get',
        class: InquiriesService,
        className: 'InquiriesService',
        method: InquiriesService.getInquiriesServiceRcmsApi1InquiryFormsInquiryId,
        methodName: 'getInquiriesServiceRcmsApi1InquiryFormsInquiryId',
        auth: null,
        description: "\n        export interface getInquiriesServiceRcmsApi1InquiryFormsInquiryIdRequest {\n            inquiryId: number,\n            outputFormat?: string,\n            lang?: string,\n            charset?: string,\n        };\n        export type getInquiriesServiceRcmsApi1InquiryFormsInquiryIdResponse = any;\n        ",
    },
    {
        path: '/rcms-api/1/inquiry1/messages',
        httpMethod: 'get',
        class: InquiriesService,
        className: 'InquiriesService',
        method: InquiriesService.getInquiriesServiceRcmsApi1Inquiry1Messages,
        methodName: 'getInquiriesServiceRcmsApi1Inquiry1Messages',
        auth: null,
        description: "\n        export interface getInquiriesServiceRcmsApi1Inquiry1MessagesRequest {\n            outputFormat?: string,\n            lang?: string,\n            charset?: string,\n            order?: string,\n        };\n        export type getInquiriesServiceRcmsApi1Inquiry1MessagesResponse = any;\n        ",
    },
    {
        path: '/rcms-api/1/inquiry1/messages/send',
        httpMethod: 'post',
        class: InquiriesService,
        className: 'InquiriesService',
        method: InquiriesService.postInquiriesServiceRcmsApi1Inquiry1MessagesSend,
        methodName: 'postInquiriesServiceRcmsApi1Inquiry1MessagesSend',
        auth: null,
        description: "\n        export interface postInquiriesServiceRcmsApi1Inquiry1MessagesSendRequest {\n            requestBody: {\n                /**\n                 * Name\n                 */\n                name?: string,\n                /**\n                 * E-mail\n                 */\n                from_mail?: string,\n                /**\n                 * Message\n                 */\n                body?: string,\n                /**\n                 * * 1 => Category1\n                 * * 3 => Category2\n                 * * 4 => Category3\n                 */\n                inquiry_category_id: (1 | 3 | 4),\n                /**\n                 * RequiredText\n                 */\n                ext_01: string,\n                /**\n                 * LongText\n                 */\n                ext_02?: string,\n                /**\n                 * Radio\n                 * * 1 => radio1\n                 * * 2 => radio2\n                 * * 3 => radio3\n                 */\n                ext_03?: { key: string ,label: string  } | '' | '1' | '2' | '3',\n                /**\n                 * RequiredSelect\n                 * * 1 => select1\n                 * * 2 => select2\n                 * * 3 => select3\n                 */\n                ext_04: { key: string ,label: string  } | '' | '1' | '2' | '3',\n                /**\n                 * Checkbox\n                 * * 1 => check1\n                 * * 2 => check2\n                 * * 3 => check3\n                 */\n                ext_05?: Array<{ key: string ,label: string  } | '1' | '2' | '3'>,\n                /**\n                 * DateTime\n                 */\n                ext_06?: string | { y: number ,m: number ,d: number ,h: number ,mm: number  },\n                ext_07?: {\n                    /**\n                     * File ID returned by File Upload API\n                     */\n                    file_id?: string,\n                    /**\n                     * File name\n                     */\n                    file_nm?: string,\n                    /**\n                     * Description\n                     */\n                    desc?: string,\n                },\n                /**\n                 * Tdfk\n                 */\n                ext_08?: {\n                    tdfk_cd?: ('01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '20' | '21' | '22' | '23' | '24' | '25' | '26' | '27' | '28' | '29' | '30' | '31' | '32' | '33' | '34' | '35' | '36' | '37' | '38' | '39' | '40' | '41' | '42' | '43' | '44' | '45' | '46' | '47' | '99'),\n                    tdfk_nm?: ('\u5317\u6D77\u9053' | '\u9752\u68EE\u770C' | '\u5CA9\u624B\u770C' | '\u5BAE\u57CE\u770C' | '\u79CB\u7530\u770C' | '\u5C71\u5F62\u770C' | '\u798F\u5CF6\u770C' | '\u8328\u57CE\u770C' | '\u6803\u6728\u770C' | '\u7FA4\u99AC\u770C' | '\u57FC\u7389\u770C' | '\u5343\u8449\u770C' | '\u6771\u4EAC\u90FD' | '\u795E\u5948\u5DDD\u770C' | '\u65B0\u6F5F\u770C' | '\u5BCC\u5C71\u770C' | '\u77F3\u5DDD\u770C' | '\u798F\u4E95\u770C' | '\u5C71\u68A8\u770C' | '\u9577\u91CE\u770C' | '\u5C90\u961C\u770C' | '\u9759\u5CA1\u770C' | '\u611B\u77E5\u770C' | '\u4E09\u91CD\u770C' | '\u6ECB\u8CC0\u770C' | '\u4EAC\u90FD\u5E9C' | '\u5927\u962A\u5E9C' | '\u5175\u5EAB\u770C' | '\u5948\u826F\u770C' | '\u548C\u6B4C\u5C71\u770C' | '\u9CE5\u53D6\u770C' | '\u5CF6\u6839\u770C' | '\u5CA1\u5C71\u770C' | '\u5E83\u5CF6\u770C' | '\u5C71\u53E3\u770C' | '\u5FB3\u5CF6\u770C' | '\u9999\u5DDD\u770C' | '\u611B\u5A9B\u770C' | '\u9AD8\u77E5\u770C' | '\u798F\u5CA1\u770C' | '\u4F50\u8CC0\u770C' | '\u9577\u5D0E\u770C' | '\u718A\u672C\u770C' | '\u5927\u5206\u770C' | '\u5BAE\u5D0E\u770C' | '\u9E7F\u5150\u5CF6\u770C' | '\u6C96\u7E04\u770C' | '\u6D77\u5916'),\n                },\n                /**\n                 * JSON\n                 */\n                ext_09?: {\n                    /**\n                     * * 1 => opt1\n                     * * 2 => opt2\n                     */\n                    options?: ('1' | '2'),\n                    text?: string,\n                },\n                /**\n                 * Date\n                 */\n                ext_10?: string | { y: number ,m: number ,d: number  },\n                /**\n                 * Validate\n                 */\n                validate_only?: boolean,\n            },\n            outputFormat?: string,\n            lang?: string,\n            charset?: string,\n        };\n        export type postInquiriesServiceRcmsApi1Inquiry1MessagesSendResponse = any;\n        ",
    },
    {
        path: '/rcms-api/1/inquiry1/messages/update',
        httpMethod: 'post',
        class: InquiriesService,
        className: 'InquiriesService',
        method: InquiriesService.postInquiriesServiceRcmsApi1Inquiry1MessagesUpdate,
        methodName: 'postInquiriesServiceRcmsApi1Inquiry1MessagesUpdate',
        auth: null,
        description: "\n        export interface postInquiriesServiceRcmsApi1Inquiry1MessagesUpdateRequest {\n            inquiryBnId: string,\n            requestBody: {\n                /**\n                 * Name\n                 */\n                name?: string,\n                /**\n                 * E-mail\n                 */\n                from_mail?: string,\n                /**\n                 * Message\n                 */\n                body?: string,\n                /**\n                 * * 1 => Category1\n                 * * 3 => Category2\n                 * * 4 => Category3\n                 */\n                inquiry_category_id?: (1 | 3 | 4),\n                /**\n                 * RequiredText\n                 */\n                ext_01?: string,\n                /**\n                 * LongText\n                 */\n                ext_02?: string,\n                /**\n                 * Radio\n                 * * 1 => radio1\n                 * * 2 => radio2\n                 * * 3 => radio3\n                 */\n                ext_03?: { key: string ,label: string  } | '' | '1' | '2' | '3',\n                /**\n                 * RequiredSelect\n                 * * 1 => select1\n                 * * 2 => select2\n                 * * 3 => select3\n                 */\n                ext_04?: { key: string ,label: string  } | '' | '1' | '2' | '3',\n                /**\n                 * Checkbox\n                 * * 1 => check1\n                 * * 2 => check2\n                 * * 3 => check3\n                 */\n                ext_05?: Array<{ key: string ,label: string  } | '1' | '2' | '3'>,\n                /**\n                 * DateTime\n                 */\n                ext_06?: string | { y: number ,m: number ,d: number ,h: number ,mm: number  },\n                ext_07?: {\n                    /**\n                     * File ID returned by File Upload API\n                     */\n                    file_id?: string,\n                    /**\n                     * File name\n                     */\n                    file_nm?: string,\n                    /**\n                     * Description\n                     */\n                    desc?: string,\n                },\n                /**\n                 * Tdfk\n                 */\n                ext_08?: {\n                    tdfk_cd?: ('01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '20' | '21' | '22' | '23' | '24' | '25' | '26' | '27' | '28' | '29' | '30' | '31' | '32' | '33' | '34' | '35' | '36' | '37' | '38' | '39' | '40' | '41' | '42' | '43' | '44' | '45' | '46' | '47' | '99'),\n                    tdfk_nm?: ('\u5317\u6D77\u9053' | '\u9752\u68EE\u770C' | '\u5CA9\u624B\u770C' | '\u5BAE\u57CE\u770C' | '\u79CB\u7530\u770C' | '\u5C71\u5F62\u770C' | '\u798F\u5CF6\u770C' | '\u8328\u57CE\u770C' | '\u6803\u6728\u770C' | '\u7FA4\u99AC\u770C' | '\u57FC\u7389\u770C' | '\u5343\u8449\u770C' | '\u6771\u4EAC\u90FD' | '\u795E\u5948\u5DDD\u770C' | '\u65B0\u6F5F\u770C' | '\u5BCC\u5C71\u770C' | '\u77F3\u5DDD\u770C' | '\u798F\u4E95\u770C' | '\u5C71\u68A8\u770C' | '\u9577\u91CE\u770C' | '\u5C90\u961C\u770C' | '\u9759\u5CA1\u770C' | '\u611B\u77E5\u770C' | '\u4E09\u91CD\u770C' | '\u6ECB\u8CC0\u770C' | '\u4EAC\u90FD\u5E9C' | '\u5927\u962A\u5E9C' | '\u5175\u5EAB\u770C' | '\u5948\u826F\u770C' | '\u548C\u6B4C\u5C71\u770C' | '\u9CE5\u53D6\u770C' | '\u5CF6\u6839\u770C' | '\u5CA1\u5C71\u770C' | '\u5E83\u5CF6\u770C' | '\u5C71\u53E3\u770C' | '\u5FB3\u5CF6\u770C' | '\u9999\u5DDD\u770C' | '\u611B\u5A9B\u770C' | '\u9AD8\u77E5\u770C' | '\u798F\u5CA1\u770C' | '\u4F50\u8CC0\u770C' | '\u9577\u5D0E\u770C' | '\u718A\u672C\u770C' | '\u5927\u5206\u770C' | '\u5BAE\u5D0E\u770C' | '\u9E7F\u5150\u5CF6\u770C' | '\u6C96\u7E04\u770C' | '\u6D77\u5916'),\n                },\n                /**\n                 * JSON\n                 */\n                ext_09?: {\n                    /**\n                     * * 1 => opt1\n                     * * 2 => opt2\n                     */\n                    options?: ('1' | '2'),\n                    text?: string,\n                },\n                /**\n                 * Date\n                 */\n                ext_10?: string | { y: number ,m: number ,d: number  },\n                /**\n                 * Validate\n                 */\n                validate_only?: boolean,\n            },\n            outputFormat?: string,\n            lang?: string,\n            charset?: string,\n        };\n        export type postInquiriesServiceRcmsApi1Inquiry1MessagesUpdateResponse = any;\n        ",
    },
];
