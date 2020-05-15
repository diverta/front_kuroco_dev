/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */

import { ApiError, catchGenericError } from '../core/ApiError';
import { request as __request } from '../core/request';
import { OpenAPI } from '../core/OpenAPI';
import { Auth } from '../core/Auth';

export class ApiService {
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
    public static async getApiServiceRcmsApi1Apis(requestParam: ApiService.getApiServiceRcmsApi1ApisRequest): Promise<any> {

        const request = async () =>
        await __request({
            method: 'get',
            path: `/rcms-api/1/apis`,
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

        let result = await request();

        if (shouldHookToken && !result.ok && result.status === 401) {
            // no token stored
            if (Auth.getRefreshToken() === '') {
                console.info('no refresh token in your local storage');
                Auth.onErrorHandler(result);
                throw new ApiError(result, ApiError.Message.UNAUTHORIZED);
            }
            // handle on error to get refreshed token
            await Auth.createToken({ requestBody: {} }).catch(() => {
                console.info('it failed that retrying to get token from stored refresh token');
                Auth.onErrorHandler(result);
                throw new ApiError(result, ApiError.Message.UNAUTHORIZED);
            });
            // retry with refreshed token
            result = await request();
        }

        catchGenericError(result);
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
    public static async getApiServiceRcmsApi1Openapi(requestParam: ApiService.getApiServiceRcmsApi1OpenapiRequest): Promise<any> {

        const request = async () =>
        await __request({
            method: 'get',
            path: `/rcms-api/1/openapi`,
            query: {
                'api_id': requestParam.apiId,
                '_output_format': requestParam.outputFormat,
                '_lang': requestParam.lang,
                '_charset': requestParam.charset,
            },
        });

        const security = {
            'Token-Auth': OpenAPI.SECURITY['Token-Auth'],
        };
        const shouldHookToken = Object.values(security).find((v: any) => v.type === 'apiKey');

        let result = await request();

        if (shouldHookToken && !result.ok && result.status === 401) {
            // no token stored
            if (Auth.getRefreshToken() === '') {
                console.info('no refresh token in your local storage');
                Auth.onErrorHandler(result);
                throw new ApiError(result, ApiError.Message.UNAUTHORIZED);
            }
            // handle on error to get refreshed token
            await Auth.createToken({ requestBody: {} }).catch(() => {
                console.info('it failed that retrying to get token from stored refresh token');
                Auth.onErrorHandler(result);
                throw new ApiError(result, ApiError.Message.UNAUTHORIZED);
            });
            // retry with refreshed token
            result = await request();
        }

        catchGenericError(result);
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
    public static async getApiServiceRcmsApi1Request(requestParam: ApiService.getApiServiceRcmsApi1RequestRequest): Promise<any> {

        const request = async () =>
        await __request({
            method: 'get',
            path: `/rcms-api/1/request`,
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

        let result = await request();

        if (shouldHookToken && !result.ok && result.status === 401) {
            // no token stored
            if (Auth.getRefreshToken() === '') {
                console.info('no refresh token in your local storage');
                Auth.onErrorHandler(result);
                throw new ApiError(result, ApiError.Message.UNAUTHORIZED);
            }
            // handle on error to get refreshed token
            await Auth.createToken({ requestBody: {} }).catch(() => {
                console.info('it failed that retrying to get token from stored refresh token');
                Auth.onErrorHandler(result);
                throw new ApiError(result, ApiError.Message.UNAUTHORIZED);
            });
            // retry with refreshed token
            result = await request();
        }

        catchGenericError(result);
        return result.body;
    }
}

export namespace ApiService {
    export interface getApiServiceRcmsApi1ApisRequest {
        outputFormat?: string,
        lang?: string,
        charset?: string,
    };
    export type getApiServiceRcmsApi1ApisResponse = any;
    export interface getApiServiceRcmsApi1OpenapiRequest {
        apiId: number,
        outputFormat?: string,
        lang?: string,
        charset?: string,
    };
    export type getApiServiceRcmsApi1OpenapiResponse = any;
    export interface getApiServiceRcmsApi1RequestRequest {
        outputFormat?: string,
        lang?: string,
        charset?: string,
    };
    export type getApiServiceRcmsApi1RequestResponse = any;
}

export const infos = [
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
