"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */
Object.defineProperty(exports, "__esModule", { value: true });
const ApiError_1 = require("../core/ApiError");
const request_1 = require("../core/request");
const OpenAPI_1 = require("../core/OpenAPI");
const Auth_1 = require("../core/Auth");
class ApiService {
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
    static async getApiServiceRcmsApi1Apis(requestParam) {
        const shouldHookToken = Object.keys({
            'Token-Auth': OpenAPI_1.OpenAPI.SECURITY['Token-Auth'],
        }).length > 0;
        const request = async () => await request_1.request({
            headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${Auth_1.Auth.getAccessToken()}` } : {},
            method: 'get',
            path: `/rcms-api/1/apis`,
            query: {
                '_output_format': requestParam.outputFormat,
                '_lang': requestParam.lang,
                '_charset': requestParam.charset,
            },
        });
        let result = await request();
        if (shouldHookToken && !result.ok && result.status === 401) {
            result = await Auth_1.Auth.retryRequest(request, result);
        }
        ApiError_1.catchGenericError(result);
        return result.body;
    }
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
    static async getApiServiceRcmsApi1Openapi(requestParam) {
        const shouldHookToken = Object.keys({
            'Token-Auth': OpenAPI_1.OpenAPI.SECURITY['Token-Auth'],
        }).length > 0;
        const request = async () => await request_1.request({
            headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${Auth_1.Auth.getAccessToken()}` } : {},
            method: 'get',
            path: `/rcms-api/1/openapi`,
            query: {
                'api_id': requestParam.apiId,
                '_output_format': requestParam.outputFormat,
                '_lang': requestParam.lang,
                '_charset': requestParam.charset,
            },
        });
        let result = await request();
        if (shouldHookToken && !result.ok && result.status === 401) {
            result = await Auth_1.Auth.retryRequest(request, result);
        }
        ApiError_1.catchGenericError(result);
        return result.body;
    }
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
    static async getApiServiceRcmsApi1Request(requestParam) {
        const shouldHookToken = Object.keys({
            'Token-Auth': OpenAPI_1.OpenAPI.SECURITY['Token-Auth'],
        }).length > 0;
        const request = async () => await request_1.request({
            headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${Auth_1.Auth.getAccessToken()}` } : {},
            method: 'get',
            path: `/rcms-api/1/request`,
            query: {
                '_output_format': requestParam.outputFormat,
                '_lang': requestParam.lang,
                '_charset': requestParam.charset,
            },
        });
        let result = await request();
        if (shouldHookToken && !result.ok && result.status === 401) {
            result = await Auth_1.Auth.retryRequest(request, result);
        }
        ApiError_1.catchGenericError(result);
        return result.body;
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
    {
        path: '/rcms-api/1/openapi',
        httpMethod: 'get',
        class: ApiService,
        className: 'ApiService',
        method: ApiService.getApiServiceRcmsApi1Openapi,
        methodName: 'getApiServiceRcmsApi1Openapi',
        auth: null,
        description: `
        export interface getApiServiceRcmsApi1OpenapiRequest {
            apiId: number,
            outputFormat?: string,
            lang?: string,
            charset?: string,
        };
        export type getApiServiceRcmsApi1OpenapiResponse = any;
        `,
    },
    {
        path: '/rcms-api/1/request',
        httpMethod: 'get',
        class: ApiService,
        className: 'ApiService',
        method: ApiService.getApiServiceRcmsApi1Request,
        methodName: 'getApiServiceRcmsApi1Request',
        auth: null,
        description: `
        export interface getApiServiceRcmsApi1RequestRequest {
            outputFormat?: string,
            lang?: string,
            charset?: string,
        };
        export type getApiServiceRcmsApi1RequestResponse = any;
        `,
    },
];
