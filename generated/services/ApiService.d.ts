import { Result } from '../core/Result';
export declare class ApiService {
    /**
     *
     * ### **Api::list (v1)**
     *
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static getApiServiceRcmsApi1Apis(requestParam: ApiService.getApiServiceRcmsApi1ApisRequest): Promise<Result<any>>;
    /**
     *
     * ### **Api::openapi_data (v1)**
     *
     *
     * @param apiId API ID
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static getApiServiceRcmsApi1Openapi(requestParam: ApiService.getApiServiceRcmsApi1OpenapiRequest): Promise<Result<any>>;
    /**
     *
     * ### **Api::request_api (v1)**
     *
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static getApiServiceRcmsApi1Request(requestParam: ApiService.getApiServiceRcmsApi1RequestRequest): Promise<Result<any>>;
}
export declare namespace ApiService {
    interface getApiServiceRcmsApi1ApisRequest {
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type getApiServiceRcmsApi1ApisResponse = any;
    interface getApiServiceRcmsApi1OpenapiRequest {
        apiId: number;
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type getApiServiceRcmsApi1OpenapiResponse = any;
    interface getApiServiceRcmsApi1RequestRequest {
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type getApiServiceRcmsApi1RequestResponse = any;
}
export declare const infos: {
    path: string;
    httpMethod: string;
    class: typeof ApiService;
    className: string;
    method: typeof ApiService.getApiServiceRcmsApi1Apis;
    methodName: string;
    auth: null;
    description: string;
}[];
//# sourceMappingURL=ApiService.d.ts.map