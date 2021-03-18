/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { request as __request } from '../core/request';

export class ActivityService {

    /**
     *
     * ### **Comment::list (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **module_type** `topics`
     *
     * @returns any
     * @throws ApiError
     */
    public static async getActivityService({
        moduleId,
        outputFormat,
        lang,
        charset,
        newOrderFlg,
        cnt,
        pageId,
        fromDate,
        toDate,
        groupBy,
        type,
        memberId,
    }: {
        /** モジュールID **/
        moduleId: Array<number>,
        /** Format (json|xml|csv|zip) **/
        outputFormat?: string,
        /** Language **/
        lang?: string,
        /** Charset **/
        charset?: string,
        /** To the display the newest use 1. Default: 0 **/
        newOrderFlg?: number,
        /** Display number per page **/
        cnt?: number,
        /** Page ID **/
        pageId?: number,
        /** Posted Date **/
        fromDate?: string,
        /** Posted Date **/
        toDate?: string,
        /** Grouping List by (module_id) **/
        groupBy?: string,
        /** Grouping List as (array or object) **/
        type?: string,
        /** Member ID **/
        memberId?: Array<number>,
    }): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/rcms-api/1/topics/comments`,
            query: {
                'module_id[]': moduleId,
                '_output_format': outputFormat,
                '_lang': lang,
                '_charset': charset,
                'new_order_flg': newOrderFlg,
                'cnt': cnt,
                'pageID': pageId,
                'from_date': fromDate,
                'to_date': toDate,
                'groupBy': groupBy,
                'type': type,
                'member_id[]': memberId,
            },
        });
        return result.body;
    }

    /**
     *
     * ### **Comment::insert (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **use_module_type** `topics`
     *
     * @returns any
     * @throws ApiError
     */
    public static async postActivityService({
        requestBody,
        outputFormat,
        lang,
        charset,
    }: {
        requestBody: {
            /**
             * モジュールID
             */
            module_id: number,
            /**
             * Name
             */
            name: string,
            /**
             * Mail
             */
            mail?: string,
            /**
             * URL
             */
            url?: string,
            /**
             * Activity
             */
            note: string,
            /**
             * Rating
             */
            rating?: number,
            /**
             * 削除キー
             */
            delkey?: string,
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
            path: `/rcms-api/1/topics/comments/insert`,
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
     * ### **Comment::update (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **use_module_type** `topics`
     *
     * @returns any
     * @throws ApiError
     */
    public static async postActivityService1({
        commentId,
        requestBody,
        outputFormat,
        lang,
        charset,
    }: {
        commentId: number,
        requestBody: {
            /**
             * モジュールID
             */
            module_id?: number,
            /**
             * Name
             */
            name?: string,
            /**
             * Mail
             */
            mail?: string,
            /**
             * URL
             */
            url?: string,
            /**
             * Activity
             */
            note?: string,
            /**
             * Rating
             */
            rating?: number,
            /**
             * 削除キー
             */
            delkey?: string,
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
            path: `/rcms-api/1/topics/comments/update/${commentId}`,
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
     * ### **Comment::delete (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **use_module_type** `topics`
     *
     * @returns any
     * @throws ApiError
     */
    public static async postActivityService2({
        commentId,
        requestBody,
        outputFormat,
        lang,
        charset,
    }: {
        commentId: number,
        requestBody: {
            /**
             * 削除キー
             */
            delkey?: string,
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
            path: `/rcms-api/1/topics/comments/delete/${commentId}`,
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