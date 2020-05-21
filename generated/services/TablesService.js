/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */
import { __awaiter, __generator } from "tslib";
import { catchGenericError } from '../core/ApiError';
import { request as __request } from '../core/request';
import { OpenAPI } from '../core/OpenAPI';
import { Auth } from '../core/Auth';
var TablesService = /** @class */ (function () {
    function TablesService() {
    }
    /**
     *
     * ### **Master::list (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **csvtable_id** `1`
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @param keyIdx Key index (0|1|2|3|4)
     * @param valueIdx Value index (0|1|2|3|4)
     * @param multiple Multiple(0|1)
     * @param outputAs Output List As (array|object)
     * @param groupBy Grouping List By (id|parentValue|parentLabel|childValue|childLabel)
     * @param groupAs Grouping List As (array|object)
     * @result any
     * @throws ApiError
     */
    TablesService.getTablesServiceRcmsApi1TablesSimple = function (requestParam) {
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
                                            path: "/rcms-api/1/tables/simple",
                                            query: {
                                                '_output_format': requestParam.outputFormat,
                                                '_lang': requestParam.lang,
                                                '_charset': requestParam.charset,
                                                'key_idx[]': requestParam.keyIdx,
                                                'value_idx[]': requestParam.valueIdx,
                                                'multiple': requestParam.multiple,
                                                'outputAs': requestParam.outputAs,
                                                'groupBy': requestParam.groupBy,
                                                'groupAs': requestParam.groupAs,
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
     * ### **Master::list (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **csvtable_id** `2`
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @param keyIdx Key index (0|1)
     * @param valueIdx Value index (0|1)
     * @param multiple Multiple(0|1)
     * @param outputAs Output List As (array|object)
     * @result any
     * @throws ApiError
     */
    TablesService.getTablesServiceRcmsApi1TablesMatrix = function (requestParam) {
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
                                            path: "/rcms-api/1/tables/matrix",
                                            query: {
                                                '_output_format': requestParam.outputFormat,
                                                '_lang': requestParam.lang,
                                                '_charset': requestParam.charset,
                                                'key_idx[]': requestParam.keyIdx,
                                                'value_idx[]': requestParam.valueIdx,
                                                'multiple': requestParam.multiple,
                                                'outputAs': requestParam.outputAs,
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
     * ### **Master::list (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **csvtable_id** `3`
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @param keyIdx Key index (0|1)
     * @param valueIdx Value index (0|1)
     * @param multiple Multiple(0|1)
     * @param outputAs Output List As (array|object)
     * @result any
     * @throws ApiError
     */
    TablesService.getTablesServiceRcmsApi1TablesDate = function (requestParam) {
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
                                            path: "/rcms-api/1/tables/date",
                                            query: {
                                                '_output_format': requestParam.outputFormat,
                                                '_lang': requestParam.lang,
                                                '_charset': requestParam.charset,
                                                'key_idx[]': requestParam.keyIdx,
                                                'value_idx[]': requestParam.valueIdx,
                                                'multiple': requestParam.multiple,
                                                'outputAs': requestParam.outputAs,
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
     * ### **Master::list (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **csvtable_id** `4`
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @param keyIdx Key index (0|1|2|3|4)
     * @param valueIdx Value index (0|1|2|3|4)
     * @param multiple Multiple(0|1)
     * @param outputAs Output List As (array|object)
     * @result any
     * @throws ApiError
     */
    TablesService.getTablesServiceRcmsApi1TablesChecksheet = function (requestParam) {
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
                                            path: "/rcms-api/1/tables/checksheet",
                                            query: {
                                                '_output_format': requestParam.outputFormat,
                                                '_lang': requestParam.lang,
                                                '_charset': requestParam.charset,
                                                'key_idx[]': requestParam.keyIdx,
                                                'value_idx[]': requestParam.valueIdx,
                                                'multiple': requestParam.multiple,
                                                'outputAs': requestParam.outputAs,
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
     * ### **Master::list (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **csvtable_id** `5`
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @param keyIdx Key index
     * @param valueIdx Value index
     * @param multiple Multiple(0|1)
     * @param outputAs Output List As (array|object)
     * @result any
     * @throws ApiError
     */
    TablesService.getTablesServiceRcmsApi1TablesInvalid = function (requestParam) {
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
                                            path: "/rcms-api/1/tables/invalid",
                                            query: {
                                                '_output_format': requestParam.outputFormat,
                                                '_lang': requestParam.lang,
                                                '_charset': requestParam.charset,
                                                'key_idx[]': requestParam.keyIdx,
                                                'value_idx[]': requestParam.valueIdx,
                                                'multiple': requestParam.multiple,
                                                'outputAs': requestParam.outputAs,
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
     * ### **Master::list (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **csvtable_id** `6`
     *
     * > **key_idx** `0`
     *
     * > **value_idx** `1`
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @param multiple Multiple(0|1)
     * @param outputAs Output List As (array|object)
     * @result any
     * @throws ApiError
     */
    TablesService.getTablesServiceRcmsApi1FirebaseMeta = function (requestParam) {
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
                                            path: "/rcms-api/1/firebase/meta",
                                            query: {
                                                '_output_format': requestParam.outputFormat,
                                                '_lang': requestParam.lang,
                                                '_charset': requestParam.charset,
                                                'multiple': requestParam.multiple,
                                                'outputAs': requestParam.outputAs,
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
    return TablesService;
}());
export { TablesService };
(function (TablesService) {
    ;
    ;
    ;
    ;
    ;
    ;
})(TablesService || (TablesService = {}));
export var infos = [
    {
        path: '/rcms-api/1/tables/simple',
        httpMethod: 'get',
        class: TablesService,
        className: 'TablesService',
        method: TablesService.getTablesServiceRcmsApi1TablesSimple,
        methodName: 'getTablesServiceRcmsApi1TablesSimple',
        auth: null,
        description: "\n        export interface getTablesServiceRcmsApi1TablesSimpleRequest {\n            outputFormat?: string,\n            lang?: string,\n            charset?: string,\n            keyIdx?: Array<number>,\n            valueIdx?: Array<number>,\n            multiple?: number,\n            outputAs?: string,\n            groupBy?: string,\n            groupAs?: string,\n        };\n        export type getTablesServiceRcmsApi1TablesSimpleResponse = any;\n        ",
    },
    {
        path: '/rcms-api/1/tables/matrix',
        httpMethod: 'get',
        class: TablesService,
        className: 'TablesService',
        method: TablesService.getTablesServiceRcmsApi1TablesMatrix,
        methodName: 'getTablesServiceRcmsApi1TablesMatrix',
        auth: null,
        description: "\n        export interface getTablesServiceRcmsApi1TablesMatrixRequest {\n            outputFormat?: string,\n            lang?: string,\n            charset?: string,\n            keyIdx?: Array<number>,\n            valueIdx?: Array<number>,\n            multiple?: number,\n            outputAs?: string,\n        };\n        export type getTablesServiceRcmsApi1TablesMatrixResponse = any;\n        ",
    },
    {
        path: '/rcms-api/1/tables/date',
        httpMethod: 'get',
        class: TablesService,
        className: 'TablesService',
        method: TablesService.getTablesServiceRcmsApi1TablesDate,
        methodName: 'getTablesServiceRcmsApi1TablesDate',
        auth: null,
        description: "\n        export interface getTablesServiceRcmsApi1TablesDateRequest {\n            outputFormat?: string,\n            lang?: string,\n            charset?: string,\n            keyIdx?: Array<number>,\n            valueIdx?: Array<number>,\n            multiple?: number,\n            outputAs?: string,\n        };\n        export type getTablesServiceRcmsApi1TablesDateResponse = any;\n        ",
    },
    {
        path: '/rcms-api/1/tables/checksheet',
        httpMethod: 'get',
        class: TablesService,
        className: 'TablesService',
        method: TablesService.getTablesServiceRcmsApi1TablesChecksheet,
        methodName: 'getTablesServiceRcmsApi1TablesChecksheet',
        auth: null,
        description: "\n        export interface getTablesServiceRcmsApi1TablesChecksheetRequest {\n            outputFormat?: string,\n            lang?: string,\n            charset?: string,\n            keyIdx?: Array<number>,\n            valueIdx?: Array<number>,\n            multiple?: number,\n            outputAs?: string,\n        };\n        export type getTablesServiceRcmsApi1TablesChecksheetResponse = any;\n        ",
    },
    {
        path: '/rcms-api/1/tables/invalid',
        httpMethod: 'get',
        class: TablesService,
        className: 'TablesService',
        method: TablesService.getTablesServiceRcmsApi1TablesInvalid,
        methodName: 'getTablesServiceRcmsApi1TablesInvalid',
        auth: null,
        description: "\n        export interface getTablesServiceRcmsApi1TablesInvalidRequest {\n            outputFormat?: string,\n            lang?: string,\n            charset?: string,\n            keyIdx?: Array<number>,\n            valueIdx?: Array<number>,\n            multiple?: number,\n            outputAs?: string,\n        };\n        export type getTablesServiceRcmsApi1TablesInvalidResponse = any;\n        ",
    },
    {
        path: '/rcms-api/1/firebase/meta',
        httpMethod: 'get',
        class: TablesService,
        className: 'TablesService',
        method: TablesService.getTablesServiceRcmsApi1FirebaseMeta,
        methodName: 'getTablesServiceRcmsApi1FirebaseMeta',
        auth: null,
        description: "\n        export interface getTablesServiceRcmsApi1FirebaseMetaRequest {\n            outputFormat?: string,\n            lang?: string,\n            charset?: string,\n            multiple?: number,\n            outputAs?: string,\n        };\n        export type getTablesServiceRcmsApi1FirebaseMetaResponse = any;\n        ",
    },
];
