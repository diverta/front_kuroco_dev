import { Result } from '../core/Result';
export declare class ApiService {
    /**
     *
     * ### **Api::bulk (v1)**
     *
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv|zip)
     * @param lang Language
     * @param charset Charset
     * @param async Asynchronous execution (true|false)
     * @result any
     * @throws ApiError
     */
    static postApiServiceRcmsApi1Bulk(requestParam: ApiService.postApiServiceRcmsApi1BulkRequest): Promise<Result<any>>;
    /**
     *
     * ### **Api::request_api_post (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **name** `chkhash`
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv|zip)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postApiServiceRcmsApi1Chkhash(requestParam: ApiService.postApiServiceRcmsApi1ChkhashRequest): Promise<Result<any>>;
    /**
     *
     * ### **Api::list (v1)**
     *
     *
     * @param outputFormat Format (json|xml|csv|zip)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static getApiServiceRcmsApi1Apis(requestParam: ApiService.getApiServiceRcmsApi1ApisRequest): Promise<Result<any>>;
}
export declare namespace ApiService {
    interface postApiServiceRcmsApi1BulkRequest {
        requestBody: {
            /**
             * Endpoint description
             */
            endpoint_list?: Array<{
                /**
                 * Endpoint URI
                 */
                uri?: string;
                method?: ('get' | 'post');
                headers?: Array<string>;
                direct?: boolean;
                filename?: string;
                body?: any;
            }>;
        };
        outputFormat?: string;
        lang?: string;
        charset?: string;
        async?: string;
    }
    type postApiServiceRcmsApi1BulkResponse = any;
    interface postApiServiceRcmsApi1ChkhashRequest {
        requestBody: any;
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type postApiServiceRcmsApi1ChkhashResponse = any;
    interface getApiServiceRcmsApi1ApisRequest {
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type getApiServiceRcmsApi1ApisResponse = any;
}
export declare const infos: {
    path: string;
    httpMethod: string;
    class: typeof ApiService;
    className: string;
    method: typeof ApiService.postApiServiceRcmsApi1Bulk;
    methodName: string;
    auth: null;
    description: string;
}[];
//# sourceMappingURL=ApiService.d.ts.map