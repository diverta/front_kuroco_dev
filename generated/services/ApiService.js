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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
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
exports.infos = exports.ApiService = void 0;
const ApiError_1 = require("../core/ApiError");
const request_1 = require("../core/request");
const OpenAPI_1 = require("../core/OpenAPI");
const LocalStorage_1 = require("../core/LocalStorage");
class ApiService {
    /**
     *
     * ### **Api::bulk (v1)**
     *
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv|zip)
     * @param lang Language
     * @param charset Charset
     * @param async Asynchronous execution (true|false)
     * @result any
     * @throws ApiError
     */
    static postApiServiceRcmsApi1Bulk(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI_1.OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield request_1.request({
                    headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage_1.LocalStorage.getAccessToken()}` } : {},
                    method: 'post',
                    path: `/rcms-api/1/bulk`,
                    query: {
                        '_output_format': requestParam.outputFormat,
                        '_lang': requestParam.lang,
                        '_charset': requestParam.charset,
                        '_async': requestParam.async,
                    },
                    body: requestParam.requestBody,
                });
            });
            let result = yield request();
            if (shouldHookToken && !result.ok && result.status === 401) {
                result = yield Promise.resolve().then(() => __importStar(require('../core/Auth'))).then(({ Auth }) => Auth.retryRequest(request, result));
            }
            ApiError_1.catchGenericError(result);
            return result;
        });
    }
    /**
     *
     * ### **Api::request_api_post (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **name** `chkhash`
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv|zip)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postApiServiceRcmsApi1Chkhash(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI_1.OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield request_1.request({
                    headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage_1.LocalStorage.getAccessToken()}` } : {},
                    method: 'post',
                    path: `/rcms-api/1/chkhash`,
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
            return result;
        });
    }
    /**
     *
     * ### **Api::list (v1)**
     *
     *
     * @param outputFormat Format (json|xml|csv|zip)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static getApiServiceRcmsApi1Apis(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI_1.OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield request_1.request({
                    headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage_1.LocalStorage.getAccessToken()}` } : {},
                    method: 'get',
                    path: `/rcms-api/1/apis`,
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
            return result;
        });
    }
}
exports.ApiService = ApiService;
(function (ApiService) {
    ;
    ;
    ;
})(ApiService = exports.ApiService || (exports.ApiService = {}));
exports.infos = [
    {
        path: '/rcms-api/1/bulk',
        httpMethod: 'post',
        class: ApiService,
        className: 'ApiService',
        method: ApiService.postApiServiceRcmsApi1Bulk,
        methodName: 'postApiServiceRcmsApi1Bulk',
        auth: null,
        description: `
        export interface postApiServiceRcmsApi1BulkRequest {
            requestBody: {
                /**
                 * Endpoint description
                 */
                endpoint_list?: Array<{
                    /**
                     * Endpoint URI
                     */
                    uri?: string,
                    method?: ('get' | 'post'),
                    headers?: Array<string>,
                    direct?: boolean,
                    filename?: string,
                    body?: any,
                }>,
            },
            outputFormat?: string,
            lang?: string,
            charset?: string,
            async?: string,
        };
        export type postApiServiceRcmsApi1BulkResponse = any;
        `,
    },
    {
        path: '/rcms-api/1/chkhash',
        httpMethod: 'post',
        class: ApiService,
        className: 'ApiService',
        method: ApiService.postApiServiceRcmsApi1Chkhash,
        methodName: 'postApiServiceRcmsApi1Chkhash',
        auth: null,
        description: `
        export interface postApiServiceRcmsApi1ChkhashRequest {
            requestBody: any,
            outputFormat?: string,
            lang?: string,
            charset?: string,
        };
        export type postApiServiceRcmsApi1ChkhashResponse = any;
        `,
    },
    {
        path: '/rcms-api/1/apis',
        httpMethod: 'get',
        class: ApiService,
        className: 'ApiService',
        method: ApiService.getApiServiceRcmsApi1Apis,
        methodName: 'getApiServiceRcmsApi1Apis',
        auth: null,
        description: `
        export interface getApiServiceRcmsApi1ApisRequest {
            outputFormat?: string,
            lang?: string,
            charset?: string,
        };
        export type getApiServiceRcmsApi1ApisResponse = any;
        `,
    },
];
