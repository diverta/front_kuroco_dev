/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { request as __request } from '../core/request';

export class ApiService {

    /**
     *
     * ### **Api::bulk (v1)**
     *
     *
     * @returns any
     * @throws ApiError
     */
    public static async postApiService({
        requestBody,
        outputFormat,
        lang,
        charset,
        async,
    }: {
        requestBody: {
            /**
             * Endpoint description
             */
            endpoint_list: Array<{
                /**
                 * Endpoint URI
                 */
                uri: string,
                method: 'get' | 'post',
                headers?: Array<string>,
                direct?: boolean,
                filename: string,
                body?: any,
            }>,
        },
        /** Format (json|xml|csv|zip) **/
        outputFormat?: string,
        /** Language **/
        lang?: string,
        /** Charset **/
        charset?: string,
        /** Asynchronous execution (true|false) **/
        async?: string,
    }): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/rcms-api/1/bulk`,
            query: {
                '_output_format': outputFormat,
                '_lang': lang,
                '_charset': charset,
                '_async': async,
            },
            body: requestBody,
        });
        return result.body;
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
     * @returns any
     * @throws ApiError
     */
    public static async postApiService1({
        requestBody,
        outputFormat,
        lang,
        charset,
    }: {
        requestBody: any,
        /** Format (json|xml|csv|zip) **/
        outputFormat?: string,
        /** Language **/
        lang?: string,
        /** Charset **/
        charset?: string,
    }): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/rcms-api/1/chkhash`,
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
     * ### **Api::list (v1)**
     *
     *
     * @returns any
     * @throws ApiError
     */
    public static async getApiService({
        outputFormat,
        lang,
        charset,
    }: {
        /** Format (json|xml|csv|zip) **/
        outputFormat?: string,
        /** Language **/
        lang?: string,
        /** Charset **/
        charset?: string,
    }): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/rcms-api/1/apis`,
            query: {
                '_output_format': outputFormat,
                '_lang': lang,
                '_charset': charset,
            },
        });
        return result.body;
    }

}