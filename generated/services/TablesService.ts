/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { request as __request } from '../core/request';

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
     * @returns any
     * @throws ApiError
     */
    public static async getTablesService({
        outputFormat,
        lang,
        charset,
        keyIdx,
        valueIdx,
        multiple,
        outputAs,
        groupBy,
        type,
    }: {
        /** Format (json|xml|csv|zip) **/
        outputFormat?: string,
        /** Language **/
        lang?: string,
        /** Charset **/
        charset?: string,
        /** Key index (0|1|2|3|4) **/
        keyIdx?: Array<number>,
        /** Value index (0|1|2|3|4) **/
        valueIdx?: Array<number>,
        /** Multiple(0|1) **/
        multiple?: number,
        /** Output List As (array|object) **/
        outputAs?: string,
        /** Grouping List By (id|parentValue|parentLabel|childValue|childLabel) **/
        groupBy?: string,
        /** Grouping List As (array|object) **/
        type?: string,
    }): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/rcms-api/1/tables/1`,
            query: {
                '_output_format': outputFormat,
                '_lang': lang,
                '_charset': charset,
                'key_idx[]': keyIdx,
                'value_idx[]': valueIdx,
                'multiple': multiple,
                'outputAs': outputAs,
                'groupBy': groupBy,
                'type': type,
            },
        });
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
     * @returns any
     * @throws ApiError
     */
    public static async getTablesService1({
        outputFormat,
        lang,
        charset,
        keyIdx,
        valueIdx,
        multiple,
        outputAs,
        groupBy,
        type,
    }: {
        /** Format (json|xml|csv|zip) **/
        outputFormat?: string,
        /** Language **/
        lang?: string,
        /** Charset **/
        charset?: string,
        /** Key index (0|1|2|3) **/
        keyIdx?: Array<number>,
        /** Value index (0|1|2|3) **/
        valueIdx?: Array<number>,
        /** Multiple(0|1) **/
        multiple?: number,
        /** Output List As (array|object) **/
        outputAs?: string,
        /** Grouping List By (|||) **/
        groupBy?: string,
        /** Grouping List As (array|object) **/
        type?: string,
    }): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/rcms-api/1/tables/invalid`,
            query: {
                '_output_format': outputFormat,
                '_lang': lang,
                '_charset': charset,
                'key_idx[]': keyIdx,
                'value_idx[]': valueIdx,
                'multiple': multiple,
                'outputAs': outputAs,
                'groupBy': groupBy,
                'type': type,
            },
        });
        return result.body;
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
     * @returns any
     * @throws ApiError
     */
    public static async getTablesService2({
        outputFormat,
        lang,
        charset,
        multiple,
        outputAs,
        groupBy,
        type,
    }: {
        /** Format (json|xml|csv|zip) **/
        outputFormat?: string,
        /** Language **/
        lang?: string,
        /** Charset **/
        charset?: string,
        /** Multiple(0|1) **/
        multiple?: number,
        /** Output List As (array|object) **/
        outputAs?: string,
        /** Grouping List By (id|parentValue|parentLabel|childValue|childLabel) **/
        groupBy?: string,
        /** Grouping List As (array|object) **/
        type?: string,
    }): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/rcms-api/1/tables/1/key1-value2`,
            query: {
                '_output_format': outputFormat,
                '_lang': lang,
                '_charset': charset,
                'multiple': multiple,
                'outputAs': outputAs,
                'groupBy': groupBy,
                'type': type,
            },
        });
        return result.body;
    }

}