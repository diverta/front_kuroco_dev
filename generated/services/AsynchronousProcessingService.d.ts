import { Result } from '../core/Result';
export declare class AsynchronousProcessingService {
    /**
     *
     * ### **Batch::kickbat (v1)**
     *
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postAsynchronousProcessingServiceRcmsApi1Batch(requestParam: AsynchronousProcessingService.postAsynchronousProcessingServiceRcmsApi1BatchRequest): Promise<Result<any>>;
}
export declare namespace AsynchronousProcessingService {
    interface postAsynchronousProcessingServiceRcmsApi1BatchRequest {
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type postAsynchronousProcessingServiceRcmsApi1BatchResponse = any;
}
export declare const infos: {
    path: string;
    httpMethod: string;
    class: typeof AsynchronousProcessingService;
    className: string;
    method: typeof AsynchronousProcessingService.postAsynchronousProcessingServiceRcmsApi1Batch;
    methodName: string;
    auth: null;
    description: string;
}[];
//# sourceMappingURL=AsynchronousProcessingService.d.ts.map