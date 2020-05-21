/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */
import { __awaiter, __generator } from "tslib";
import { catchGenericError } from '../core/ApiError';
import { request as __request } from '../core/request';
import { OpenAPI } from '../core/OpenAPI';
import { Auth } from '../core/Auth';
var ApiService = /** @class */ (function () {
    function ApiService() {
    }
    /**
     *
     * ### **Api::list (v1)**
     *
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    ApiService.getApiServiceRcmsApi1Apis = function (requestParam) {
        return __awaiter(this, void 0, void 0, function () {
            var shouldHookToken, headers, request, result;
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        shouldHookToken = Object.keys({
                            'Token-Auth': OpenAPI.SECURITY['Token-Auth'],
                        }).length > 0;
                        headers = shouldHookToken ? (_a = {}, _a[OpenAPI.SECURITY['Token-Auth'].name] = "" + Auth.getAccessToken(), _a) : {};
                        request = function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, __request({
                                            headers: headers,
                                            method: 'get',
                                            path: "/rcms-api/1/apis",
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
     * ### **Api::openapi_data (v1)**
     *
     *
     * @param apiId API ID
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    ApiService.getApiServiceRcmsApi1Openapi = function (requestParam) {
        return __awaiter(this, void 0, void 0, function () {
            var shouldHookToken, headers, request, result;
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        shouldHookToken = Object.keys({
                            'Token-Auth': OpenAPI.SECURITY['Token-Auth'],
                        }).length > 0;
                        headers = shouldHookToken ? (_a = {}, _a[OpenAPI.SECURITY['Token-Auth'].name] = "" + Auth.getAccessToken(), _a) : {};
                        request = function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, __request({
                                            headers: headers,
                                            method: 'get',
                                            path: "/rcms-api/1/openapi",
                                            query: {
                                                'api_id': requestParam.apiId,
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
     * ### **Api::request_api (v1)**
     *
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    ApiService.getApiServiceRcmsApi1Request = function (requestParam) {
        return __awaiter(this, void 0, void 0, function () {
            var shouldHookToken, headers, request, result;
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        shouldHookToken = Object.keys({
                            'Token-Auth': OpenAPI.SECURITY['Token-Auth'],
                        }).length > 0;
                        headers = shouldHookToken ? (_a = {}, _a[OpenAPI.SECURITY['Token-Auth'].name] = "" + Auth.getAccessToken(), _a) : {};
                        request = function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, __request({
                                            headers: headers,
                                            method: 'get',
                                            path: "/rcms-api/1/request",
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
    return ApiService;
}());
export { ApiService };
(function (ApiService) {
    ;
    ;
    ;
})(ApiService || (ApiService = {}));
export var infos = [
    {
        path: '/rcms-api/1/apis',
        httpMethod: 'get',
        class: ApiService,
        className: 'ApiService',
        method: ApiService.getApiServiceRcmsApi1Apis,
        methodName: 'getApiServiceRcmsApi1Apis',
        auth: null,
        description: "\n        export interface getApiServiceRcmsApi1ApisRequest {\n            outputFormat?: string,\n            lang?: string,\n            charset?: string,\n        };\n        export type getApiServiceRcmsApi1ApisResponse = any;\n        ",
    },
    {
        path: '/rcms-api/1/openapi',
        httpMethod: 'get',
        class: ApiService,
        className: 'ApiService',
        method: ApiService.getApiServiceRcmsApi1Openapi,
        methodName: 'getApiServiceRcmsApi1Openapi',
        auth: null,
        description: "\n        export interface getApiServiceRcmsApi1OpenapiRequest {\n            apiId: number,\n            outputFormat?: string,\n            lang?: string,\n            charset?: string,\n        };\n        export type getApiServiceRcmsApi1OpenapiResponse = any;\n        ",
    },
    {
        path: '/rcms-api/1/request',
        httpMethod: 'get',
        class: ApiService,
        className: 'ApiService',
        method: ApiService.getApiServiceRcmsApi1Request,
        methodName: 'getApiServiceRcmsApi1Request',
        auth: null,
        description: "\n        export interface getApiServiceRcmsApi1RequestRequest {\n            outputFormat?: string,\n            lang?: string,\n            charset?: string,\n        };\n        export type getApiServiceRcmsApi1RequestResponse = any;\n        ",
    },
];
