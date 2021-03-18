/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { request as __request } from '../core/request';

export class FavoritesService {

    /**
     *
     * ### **Favorite::list (v1)**
     *
     *
     * @returns any
     * @throws ApiError
     */
    public static async getFavoritesService({
        outputFormat,
        lang,
        charset,
        cnt,
        pageId,
        moduleId,
        moduleType,
        memberId,
        groupBy,
        type,
    }: {
        /** Format (json|xml|csv|zip) **/
        outputFormat?: string,
        /** Language **/
        lang?: string,
        /** Charset **/
        charset?: string,
        /** Display number per page **/
        cnt?: number,
        /** Page ID **/
        pageId?: number,
        moduleId?: Array<number>,
        /** Module type **/
        moduleType?: Array<string>,
        /** Member ID **/
        memberId?: Array<number>,
        /** Grouping List by (module_id) **/
        groupBy?: string,
        /** Grouping List as (array or object) **/
        type?: string,
    }): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/rcms-api/1/favorites`,
            query: {
                '_output_format': outputFormat,
                '_lang': lang,
                '_charset': charset,
                'cnt': cnt,
                'pageID': pageId,
                'module_id[]': moduleId,
                'module_type[]': moduleType,
                'member_id[]': memberId,
                'groupBy': groupBy,
                'type': type,
            },
        });
        return result.body;
    }

    /**
     *
     * ### **Favorite::insert (v1)**
     *
     *
     * @returns any
     * @throws ApiError
     */
    public static async postFavoritesService({
        requestBody,
        outputFormat,
        lang,
        charset,
    }: {
        requestBody: {
            /**
             * Module type
             */
            module_type: 'group' | 'menu' | 'comment' | 'inquiry' | 'login' | 'login_history' | 'member' | 'staticcontents' | 'site' | 'topics' | 'memberregist' | 'batch' | 'mailtemplateedit' | 'relation' | 'csvtable' | 'approvalflow' | 'api_googleanalytics' | 'onetime' | 'magazine' | 'tag' | 'api_webpush' | 'rcms_api' | 'firebase' | 'trigger' | 'ec' | 'rcms',
            /**
             * module_id
             */
            module_id: number,
            /**
             * ページシステム名
             */
            page_sysnm?: string,
            /**
             * アクション種別
             */
            action_type?: number,
        },
        /** Format (json|xml|csv|zip) **/
        outputFormat?: string,
        /** Language **/
        lang?: string,
        /** Charset **/
        charset?: string,
    }): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/rcms-api/1/favorites/insert`,
            query: {
                '_output_format': outputFormat,
                '_lang': lang,
                '_charset': charset,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     *
     * ### **Favorite::delete (v1)**
     *
     *
     * @returns any
     * @throws ApiError
     */
    public static async postFavoritesService1({
        requestBody,
        outputFormat,
        lang,
        charset,
    }: {
        requestBody: {
            /**
             * Module type
             */
            module_type: 'group' | 'menu' | 'comment' | 'inquiry' | 'login' | 'login_history' | 'member' | 'staticcontents' | 'site' | 'topics' | 'memberregist' | 'batch' | 'mailtemplateedit' | 'relation' | 'csvtable' | 'approvalflow' | 'api_googleanalytics' | 'onetime' | 'magazine' | 'tag' | 'api_webpush' | 'rcms_api' | 'firebase' | 'trigger' | 'ec' | 'rcms',
            /**
             * module_id
             */
            module_id: number,
            /**
             * ページシステム名
             */
            page_sysnm?: string,
            /**
             * アクション種別
             */
            action_type?: number,
        },
        /** Format (json|xml|csv|zip) **/
        outputFormat?: string,
        /** Language **/
        lang?: string,
        /** Charset **/
        charset?: string,
    }): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/rcms-api/1/favorites/delete`,
            query: {
                '_output_format': outputFormat,
                '_lang': lang,
                '_charset': charset,
            },
            body: requestBody,
        });
        return result.body;
    }

}