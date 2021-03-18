/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { request as __request } from '../core/request';

export class FilesService {

    /**
     *
     * ### **Files::upload (v1)**
     *
     *
     * @returns any
     * @throws ApiError
     */
    public static async postFilesService({
        outputFormat,
        lang,
        charset,
        requestBody,
    }: {
        /** Format (json|xml|csv|zip) **/
        outputFormat?: string,
        /** Language **/
        lang?: string,
        /** Charset **/
        charset?: string,
        requestBody?: any,
    }): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/rcms-api/1/files/upload`,
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