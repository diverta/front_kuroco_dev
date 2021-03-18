/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { request as __request } from '../core/request';

export class TagsService {

    /**
     *
     * ### **Tag::list (v1)**
     *
     *
     * @returns any
     * @throws ApiError
     */
    public static async getTagsService({
        outputFormat,
        lang,
        charset,
        order,
        pageId,
        id,
        categoryId,
        groupBy,
        type,
    }: {
        /** Format (json|xml|csv|zip) **/
        outputFormat?: string,
        /** Language **/
        lang?: string,
        /** Charset **/
        charset?: string,
        /** Set the sort order. Available param {0} **/
        order?: Array<string>,
        /** Page ID **/
        pageId?: number,
        /** Tag IDs that you would like to display **/
        id?: Array<number>,
        /** ID of the tag category to be displayed. (Default: All) **/
        categoryId?: Array<number>,
        /** Grouping List by (module_id|category) **/
        groupBy?: string,
        /** Grouping List as (array|object) **/
        type?: string,
    }): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/rcms-api/1/tags`,
            query: {
                '_output_format': outputFormat,
                '_lang': lang,
                '_charset': charset,
                'order[]': order,
                'pageID': pageId,
                'id[]': id,
                'category_id[]': categoryId,
                'groupBy': groupBy,
                'type': type,
            },
        });
        return result.body;
    }

    /**
     *
     * ### **Tag::insert (v1)**
     *
     *
     * @returns any
     * @throws ApiError
     */
    public static async postTagsService({
        requestBody,
        outputFormat,
        lang,
        charset,
    }: {
        requestBody: {
            /**
             * Title
             */
            tag_nm: string,
            /**
             * Category ID
             * * 0 => Uncategorized
             * * 1 => Category1
             * * 2 => Category2
             * * 3 => Category3
             * * 4 => Category1__Child1
             * * 5 => Category1__Child2
             */
            tag_category_id: 0 | 1 | 2 | 3 | 4 | 5,
            /**
             * Published / Not published
             */
            open_type: 'open' | 'close' | 'default',
            /**
             * Sort
             */
            weight: number,
            /**
             * ext_col_01
             */
            ext_col_01?: string,
            /**
             * ext_col_02
             */
            ext_col_02?: string,
            /**
             * ext_col_03
             */
            ext_col_03?: string,
            /**
             * ext_col_04
             */
            ext_col_04?: string,
            /**
             * ext_col_05
             */
            ext_col_05?: string,
            /**
             * ext_col_06
             */
            ext_col_06?: string,
            /**
             * ext_col_07
             */
            ext_col_07?: string,
            /**
             * ext_col_08
             */
            ext_col_08?: string,
            /**
             * ext_col_09
             */
            ext_col_09?: string,
            /**
             * ext_col_10
             */
            ext_col_10?: string,
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
            path: `/rcms-api/1/tags/insert`,
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
     * ### **Tag::delete (v1)**
     *
     *
     * @returns any
     * @throws ApiError
     */
    public static async postTagsService1({
        tagId,
        outputFormat,
        lang,
        charset,
    }: {
        tagId: number,
        /** Format (json|xml|csv|zip) **/
        outputFormat?: string,
        /** Language **/
        lang?: string,
        /** Charset **/
        charset?: string,
    }): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/rcms-api/1/tags/delete/${tagId}`,
            query: {
                '_output_format': outputFormat,
                '_lang': lang,
                '_charset': charset,
            },
        });
        return result.body;
    }

}