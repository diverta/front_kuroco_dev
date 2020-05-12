/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */

import { ApiError, catchGenericError } from '../core/ApiError';
import { request as __request } from '../core/request';
import { OpenAPI } from '../core/OpenAPI';
import { Auth } from '../core/Auth';

export class FavoritesService {
    /**
     *
     * ### **Favorite::list (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **module_type** `topics`
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @param cnt Display number per page
     * @param pageId Page ID
     * @param moduleId
     * @param memberId Member ID
     * @param rcmsid rcmsid
     * @param groupBy Grouping List by (module_id)
     * @param groupAs Grouping List as (array or object)
     * @result any
     * @throws ApiError
     */
    public static async getFavoritesServiceRcmsApi1Favorites(requestParam: FavoritesService.getFavoritesServiceRcmsApi1FavoritesRequest): Promise<any> {

        const request = async () =>
        await __request({
            method: 'get',
            path: `/rcms-api/1/favorites`,
            query: {
                '_output_format': requestParam.outputFormat,
                '_lang': requestParam.lang,
                '_charset': requestParam.charset,
                'cnt': requestParam.cnt,
                'pageID': requestParam.pageId,
                'module_id[]': requestParam.moduleId,
                'member_id[]': requestParam.memberId,
                'rcmsid[]': requestParam.rcmsid,
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
     * ### **Favorite::insert (v1)**
     *
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    public static async postFavoritesServiceRcmsApi1FavoritesInsert(requestParam: FavoritesService.postFavoritesServiceRcmsApi1FavoritesInsertRequest): Promise<any> {

        const request = async () =>
        await __request({
            method: 'post',
            path: `/rcms-api/1/favorites/insert`,
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
     * ### **Favorite::delete (v1)**
     *
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    public static async postFavoritesServiceRcmsApi1FavoritesDelete(requestParam: FavoritesService.postFavoritesServiceRcmsApi1FavoritesDeleteRequest): Promise<any> {

        const request = async () =>
        await __request({
            method: 'post',
            path: `/rcms-api/1/favorites/delete`,
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
}

export namespace FavoritesService {
    export interface getFavoritesServiceRcmsApi1FavoritesRequest {
        outputFormat?: string,
        lang?: string,
        charset?: string,
        cnt?: number,
        pageId?: number,
        moduleId?: Array<number>,
        memberId?: Array<number>,
        rcmsid?: Array<string>,
        groupBy?: string,
        groupAs?: string,
    };
    export type getFavoritesServiceRcmsApi1FavoritesResponse = any;
    export interface postFavoritesServiceRcmsApi1FavoritesInsertRequest {
        requestBody: {
            /**
             * Module type
             */
            module_type: string,
            /**
             * module_id
             */
            module_id: number,
            /**
             * ページシステム名
             */
            page_sysnm?: string,
        },
        outputFormat?: string,
        lang?: string,
        charset?: string,
    };
    export type postFavoritesServiceRcmsApi1FavoritesInsertResponse = any;
    export interface postFavoritesServiceRcmsApi1FavoritesDeleteRequest {
        requestBody: {
            /**
             * Module type
             */
            module_type: string,
            /**
             * module_id
             */
            module_id: number,
            /**
             * ページシステム名
             */
            page_sysnm?: string,
        },
        outputFormat?: string,
        lang?: string,
        charset?: string,
    };
    export type postFavoritesServiceRcmsApi1FavoritesDeleteResponse = any;
}

export const infos = [
    {
        path: '/rcms-api/1/favorites',
        httpMethod: 'get',
        class: FavoritesService,
        className: 'FavoritesService',
        method: FavoritesService.getFavoritesServiceRcmsApi1Favorites,
        methodName: 'getFavoritesServiceRcmsApi1Favorites',
        auth: null,
        description: `
        export interface getFavoritesServiceRcmsApi1FavoritesRequest {
            outputFormat?: string,
            lang?: string,
            charset?: string,
            cnt?: number,
            pageId?: number,
            moduleId?: Array<number>,
            memberId?: Array<number>,
            rcmsid?: Array<string>,
            groupBy?: string,
            groupAs?: string,
        };
        export type getFavoritesServiceRcmsApi1FavoritesResponse = any;
        `,
    },
    {
        path: '/rcms-api/1/favorites/insert',
        httpMethod: 'post',
        class: FavoritesService,
        className: 'FavoritesService',
        method: FavoritesService.postFavoritesServiceRcmsApi1FavoritesInsert,
        methodName: 'postFavoritesServiceRcmsApi1FavoritesInsert',
        auth: null,
        description: `
        export interface postFavoritesServiceRcmsApi1FavoritesInsertRequest {
            requestBody: {
                /**
                 * Module type
                 */
                module_type: string,
                /**
                 * module_id
                 */
                module_id: number,
                /**
                 * ページシステム名
                 */
                page_sysnm?: string,
            },
            outputFormat?: string,
            lang?: string,
            charset?: string,
        };
        export type postFavoritesServiceRcmsApi1FavoritesInsertResponse = any;
        `,
    },
    {
        path: '/rcms-api/1/favorites/delete',
        httpMethod: 'post',
        class: FavoritesService,
        className: 'FavoritesService',
        method: FavoritesService.postFavoritesServiceRcmsApi1FavoritesDelete,
        methodName: 'postFavoritesServiceRcmsApi1FavoritesDelete',
        auth: null,
        description: `
        export interface postFavoritesServiceRcmsApi1FavoritesDeleteRequest {
            requestBody: {
                /**
                 * Module type
                 */
                module_type: string,
                /**
                 * module_id
                 */
                module_id: number,
                /**
                 * ページシステム名
                 */
                page_sysnm?: string,
            },
            outputFormat?: string,
            lang?: string,
            charset?: string,
        };
        export type postFavoritesServiceRcmsApi1FavoritesDeleteResponse = any;
        `,
    },
];
