/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { request as __request } from '../core/request';

export class AsynchronousProcessingService {

    /**
     *
     * ### **Batch::check_batch (v1)**
     *
     *
     * @returns any
     * @throws ApiError
     */
    public static async getAsynchronousProcessingService({
        batchId,
        outputFormat,
        lang,
        charset,
    }: {
        /** Batch Id **/
        batchId: number,
        /** Format (json|xml|csv|zip) **/
        outputFormat?: string,
        /** Language **/
        lang?: string,
        /** Charset **/
        charset?: string,
    }): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/rcms-api/1/check-batch`,
            query: {
                'batch_id': batchId,
                '_output_format': outputFormat,
                '_lang': lang,
                '_charset': charset,
            },
        });
        return result.body;
    }

}