/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */

import { ApiError, catchGenericError } from '../core/ApiError';
import { request as __request } from '../core/request';
import { OpenAPI } from '../core/OpenAPI';
import { Auth } from '../core/Auth';

export class TablesService {
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
    public static async getTablesServiceRcmsApi1TablesSimple(requestParam: TablesService.getTablesServiceRcmsApi1TablesSimpleRequest): Promise<any> {

        const request = async () =>
        await __request({
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
    public static async getTablesServiceRcmsApi1TablesMatrix(requestParam: TablesService.getTablesServiceRcmsApi1TablesMatrixRequest): Promise<any> {

        const request = async () =>
        await __request({
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
    public static async getTablesServiceRcmsApi1TablesDate(requestParam: TablesService.getTablesServiceRcmsApi1TablesDateRequest): Promise<any> {

        const request = async () =>
        await __request({
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
    public static async getTablesServiceRcmsApi1TablesChecksheet(requestParam: TablesService.getTablesServiceRcmsApi1TablesChecksheetRequest): Promise<any> {

        const request = async () =>
        await __request({
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
    public static async getTablesServiceRcmsApi1TablesInvalid(requestParam: TablesService.getTablesServiceRcmsApi1TablesInvalidRequest): Promise<any> {

        const request = async () =>
        await __request({
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
    public static async getTablesServiceRcmsApi1FirebaseMeta(requestParam: TablesService.getTablesServiceRcmsApi1FirebaseMetaRequest): Promise<any> {

        const request = async () =>
        await __request({
            method: 'get',
            path: `/rcms-api/1/firebase/meta`,
            query: {
                '_output_format': requestParam.outputFormat,
                '_lang': requestParam.lang,
                '_charset': requestParam.charset,
                'multiple': requestParam.multiple,
                'outputAs': requestParam.outputAs,
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
}

export namespace TablesService {
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
    export interface getTablesServiceRcmsApi1FirebaseMetaRequest {
        outputFormat?: string,
        lang?: string,
        charset?: string,
        multiple?: number,
        outputAs?: string,
    };
    export type getTablesServiceRcmsApi1FirebaseMetaResponse = any;
}

export const infos = [
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
        path: '/rcms-api/1/firebase/meta',
        httpMethod: 'get',
        class: TablesService,
        className: 'TablesService',
        method: TablesService.getTablesServiceRcmsApi1FirebaseMeta,
        methodName: 'getTablesServiceRcmsApi1FirebaseMeta',
        auth: null,
        description: `
        export interface getTablesServiceRcmsApi1FirebaseMetaRequest {
            outputFormat?: string,
            lang?: string,
            charset?: string,
            multiple?: number,
            outputAs?: string,
        };
        export type getTablesServiceRcmsApi1FirebaseMetaResponse = any;
        `,
    },
];
