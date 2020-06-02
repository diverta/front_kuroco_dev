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
class FavoritesService {
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
    static async getFavoritesServiceRcmsApi1Favorites(requestParam) {
        const shouldHookToken = Object.keys({
            'Token-Auth': OpenAPI_1.OpenAPI.SECURITY['Token-Auth'],
        }).length > 0;
        const request = async () => await request_1.request({
            headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${Auth_1.Auth.getAccessToken()}` } : {},
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
        let result = await request();
        if (shouldHookToken && !result.ok && result.status === 401) {
            result = await Auth_1.Auth.retryRequest(request, result);
        }
        ApiError_1.catchGenericError(result);
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
    static async postFavoritesServiceRcmsApi1FavoritesInsert(requestParam) {
        const shouldHookToken = Object.keys({
            'Token-Auth': OpenAPI_1.OpenAPI.SECURITY['Token-Auth'],
        }).length > 0;
        const request = async () => await request_1.request({
            headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${Auth_1.Auth.getAccessToken()}` } : {},
            method: 'post',
            path: `/rcms-api/1/favorites/insert`,
            query: {
                '_output_format': requestParam.outputFormat,
                '_lang': requestParam.lang,
                '_charset': requestParam.charset,
            },
            body: requestParam.requestBody,
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
    static async postFavoritesServiceRcmsApi1FavoritesDelete(requestParam) {
        const shouldHookToken = Object.keys({
            'Token-Auth': OpenAPI_1.OpenAPI.SECURITY['Token-Auth'],
        }).length > 0;
        const request = async () => await request_1.request({
            headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${Auth_1.Auth.getAccessToken()}` } : {},
            method: 'post',
            path: `/rcms-api/1/favorites/delete`,
            query: {
                '_output_format': requestParam.outputFormat,
                '_lang': requestParam.lang,
                '_charset': requestParam.charset,
            },
            body: requestParam.requestBody,
        });
        let result = await request();
        if (shouldHookToken && !result.ok && result.status === 401) {
            result = await Auth_1.Auth.retryRequest(request, result);
        }
        ApiError_1.catchGenericError(result);
        return result.body;
    }
}
exports.FavoritesService = FavoritesService;
(function (FavoritesService) {
    ;
    ;
    ;
})(FavoritesService = exports.FavoritesService || (exports.FavoritesService = {}));
exports.infos = [
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
