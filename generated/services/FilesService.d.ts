import { Result } from '../core/Result';
export declare class FilesService {
    /**
     *
     * ### **Files::upload (v1)**
     *
     *
     * @param outputFormat Format (json|xml|csv|zip)
     * @param lang Language
     * @param charset Charset
     * @param requestBody
     * @result any
     * @throws ApiError
     */
    static postFilesServiceRcmsApi1FilesUpload(requestParam: FilesService.postFilesServiceRcmsApi1FilesUploadRequest): Promise<Result<any>>;
}
export declare namespace FilesService {
    interface postFilesServiceRcmsApi1FilesUploadRequest {
        outputFormat?: string;
        lang?: string;
        charset?: string;
        requestBody?: any;
    }
    type postFilesServiceRcmsApi1FilesUploadResponse = any;
}
export declare const infos: {
    path: string;
    httpMethod: string;
    class: typeof FilesService;
    className: string;
    method: typeof FilesService.postFilesServiceRcmsApi1FilesUpload;
    methodName: string;
    auth: null;
    description: string;
}[];
//# sourceMappingURL=FilesService.d.ts.map