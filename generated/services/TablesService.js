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
exports.infos = exports.TablesService = void 0;
const ApiError_1 = require("../core/ApiError");
const request_1 = require("../core/request");
const OpenAPI_1 = require("../core/OpenAPI");
const LocalStorage_1 = require("../core/LocalStorage");
class TablesService {
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
    static getTablesServiceRcmsApi1TablesSimple(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI_1.OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield request_1.request({
                    headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage_1.LocalStorage.getAccessToken()}` } : {},
                    method: 'get',
                    path: `/rcms-api/1/tables/simple`,
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
    static getTablesServiceRcmsApi1TablesMatrix(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI_1.OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield request_1.request({
                    headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage_1.LocalStorage.getAccessToken()}` } : {},
                    method: 'get',
                    path: `/rcms-api/1/tables/matrix`,
                    query: {
                        '_output_format': requestParam.outputFormat,
                        '_lang': requestParam.lang,
                        '_charset': requestParam.charset,
                        'key_idx[]': requestParam.keyIdx,
                        'value_idx[]': requestParam.valueIdx,
                        'multiple': requestParam.multiple,
                        'outputAs': requestParam.outputAs,
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
    static getTablesServiceRcmsApi1TablesDate(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI_1.OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield request_1.request({
                    headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage_1.LocalStorage.getAccessToken()}` } : {},
                    method: 'get',
                    path: `/rcms-api/1/tables/date`,
                    query: {
                        '_output_format': requestParam.outputFormat,
                        '_lang': requestParam.lang,
                        '_charset': requestParam.charset,
                        'key_idx[]': requestParam.keyIdx,
                        'value_idx[]': requestParam.valueIdx,
                        'multiple': requestParam.multiple,
                        'outputAs': requestParam.outputAs,
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
    static getTablesServiceRcmsApi1TablesChecksheet(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI_1.OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield request_1.request({
                    headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage_1.LocalStorage.getAccessToken()}` } : {},
                    method: 'get',
                    path: `/rcms-api/1/tables/checksheet`,
                    query: {
                        '_output_format': requestParam.outputFormat,
                        '_lang': requestParam.lang,
                        '_charset': requestParam.charset,
                        'key_idx[]': requestParam.keyIdx,
                        'value_idx[]': requestParam.valueIdx,
                        'multiple': requestParam.multiple,
                        'outputAs': requestParam.outputAs,
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
    static getTablesServiceRcmsApi1TablesInvalid(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI_1.OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield request_1.request({
                    headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage_1.LocalStorage.getAccessToken()}` } : {},
                    method: 'get',
                    path: `/rcms-api/1/tables/invalid`,
                    query: {
                        '_output_format': requestParam.outputFormat,
                        '_lang': requestParam.lang,
                        '_charset': requestParam.charset,
                        'key_idx[]': requestParam.keyIdx,
                        'value_idx[]': requestParam.valueIdx,
                        'multiple': requestParam.multiple,
                        'outputAs': requestParam.outputAs,
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
     * ### **Master::list (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **csvtable_id** `1`
     *
     * > **key_idx** `1`
     *
     * > **value_idx** `2`
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @param multiple Multiple(0|1)
     * @param outputAs Output List As (array|object)
     * @param groupBy Grouping List By (id|parentValue|parentLabel|childValue|childLabel)
     * @param groupAs Grouping List As (array|object)
     * @result any
     * @throws ApiError
     */
    static getTablesServiceRcmsApi1TablesSimpleKey1Value2(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI_1.OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield request_1.request({
                    headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage_1.LocalStorage.getAccessToken()}` } : {},
                    method: 'get',
                    path: `/rcms-api/1/tables/simple/key1-value2`,
                    query: {
                        '_output_format': requestParam.outputFormat,
                        '_lang': requestParam.lang,
                        '_charset': requestParam.charset,
                        'multiple': requestParam.multiple,
                        'outputAs': requestParam.outputAs,
                        'groupBy': requestParam.groupBy,
                        'groupAs': requestParam.groupAs,
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
}
exports.TablesService = TablesService;
(function (TablesService) {
    ;
    ;
    ;
    ;
    ;
    ;
})(TablesService = exports.TablesService || (exports.TablesService = {}));
exports.infos = [
    {
        path: '/rcms-api/1/tables/simple',
        httpMethod: 'get',
        class: TablesService,
        className: 'TablesService',
        method: TablesService.getTablesServiceRcmsApi1TablesSimple,
        methodName: 'getTablesServiceRcmsApi1TablesSimple',
        auth: null,
        description: `
        export interface getTablesServiceRcmsApi1TablesSimpleRequest {
            outputFormat?: string,
            lang?: string,
            charset?: string,
            keyIdx?: Array<number>,
            valueIdx?: Array<number>,
            multiple?: number,
            outputAs?: string,
            groupBy?: string,
            groupAs?: string,
        };
        export type getTablesServiceRcmsApi1TablesSimpleResponse = any;
        `,
    },
    {
        path: '/rcms-api/1/tables/matrix',
        httpMethod: 'get',
        class: TablesService,
        className: 'TablesService',
        method: TablesService.getTablesServiceRcmsApi1TablesMatrix,
        methodName: 'getTablesServiceRcmsApi1TablesMatrix',
        auth: null,
        description: `
        export interface getTablesServiceRcmsApi1TablesMatrixRequest {
            outputFormat?: string,
            lang?: string,
            charset?: string,
            keyIdx?: Array<number>,
            valueIdx?: Array<number>,
            multiple?: number,
            outputAs?: string,
        };
        export type getTablesServiceRcmsApi1TablesMatrixResponse = any;
        `,
    },
    {
        path: '/rcms-api/1/tables/date',
        httpMethod: 'get',
        class: TablesService,
        className: 'TablesService',
        method: TablesService.getTablesServiceRcmsApi1TablesDate,
        methodName: 'getTablesServiceRcmsApi1TablesDate',
        auth: null,
        description: `
        export interface getTablesServiceRcmsApi1TablesDateRequest {
            outputFormat?: string,
            lang?: string,
            charset?: string,
            keyIdx?: Array<number>,
            valueIdx?: Array<number>,
            multiple?: number,
            outputAs?: string,
        };
        export type getTablesServiceRcmsApi1TablesDateResponse = any;
        `,
    },
    {
        path: '/rcms-api/1/tables/checksheet',
        httpMethod: 'get',
        class: TablesService,
        className: 'TablesService',
        method: TablesService.getTablesServiceRcmsApi1TablesChecksheet,
        methodName: 'getTablesServiceRcmsApi1TablesChecksheet',
        auth: null,
        description: `
        export interface getTablesServiceRcmsApi1TablesChecksheetRequest {
            outputFormat?: string,
            lang?: string,
            charset?: string,
            keyIdx?: Array<number>,
            valueIdx?: Array<number>,
            multiple?: number,
            outputAs?: string,
        };
        export type getTablesServiceRcmsApi1TablesChecksheetResponse = any;
        `,
    },
    {
        path: '/rcms-api/1/tables/invalid',
        httpMethod: 'get',
        class: TablesService,
        className: 'TablesService',
        method: TablesService.getTablesServiceRcmsApi1TablesInvalid,
        methodName: 'getTablesServiceRcmsApi1TablesInvalid',
        auth: null,
        description: `
        export interface getTablesServiceRcmsApi1TablesInvalidRequest {
            outputFormat?: string,
            lang?: string,
            charset?: string,
            keyIdx?: Array<number>,
            valueIdx?: Array<number>,
            multiple?: number,
            outputAs?: string,
        };
        export type getTablesServiceRcmsApi1TablesInvalidResponse = any;
        `,
    },
    {
        path: '/rcms-api/1/tables/simple/key1-value2',
        httpMethod: 'get',
        class: TablesService,
        className: 'TablesService',
        method: TablesService.getTablesServiceRcmsApi1TablesSimpleKey1Value2,
        methodName: 'getTablesServiceRcmsApi1TablesSimpleKey1Value2',
        auth: null,
        description: `
        export interface getTablesServiceRcmsApi1TablesSimpleKey1Value2Request {
            outputFormat?: string,
            lang?: string,
            charset?: string,
            multiple?: number,
            outputAs?: string,
            groupBy?: string,
            groupAs?: string,
        };
        export type getTablesServiceRcmsApi1TablesSimpleKey1Value2Response = any;
        `,
    },
];
