import { Result } from '../core/Result';
export declare class AsynchronousProcessingService {
    /**
     *
     * ### **Batch::check_batch (v1)**
     *
     *
     * @param batchId Batch Id
     * @param outputFormat Format (json|xml|csv|zip)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static getAsynchronousProcessingServiceRcmsApi1CheckBatch(requestParam: AsynchronousProcessingService.getAsynchronousProcessingServiceRcmsApi1CheckBatchRequest): Promise<Result<any>>;
}
export declare namespace AsynchronousProcessingService {
    interface getAsynchronousProcessingServiceRcmsApi1CheckBatchRequest {
        batchId: number;
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type getAsynchronousProcessingServiceRcmsApi1CheckBatchResponse = any;
}
export declare const infos: {
    path: string;
    httpMethod: string;
    class: typeof AsynchronousProcessingService;
    className: string;
    method: typeof AsynchronousProcessingService.getAsynchronousProcessingServiceRcmsApi1CheckBatch;
    methodName: string;
    auth: null;
    description: string;
}[];
//# sourceMappingURL=AsynchronousProcessingService.d.ts.map