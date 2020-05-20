export declare class Service {
    /**
     *
     * ### **Manifest::gcs_info (v1)**
     *
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static getServiceRcmsApi1ManifestGcs(requestParam: Service.getServiceRcmsApi1ManifestGcsRequest): Promise<any>;
}
export declare namespace Service {
    interface getServiceRcmsApi1ManifestGcsRequest {
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type getServiceRcmsApi1ManifestGcsResponse = any;
}
export declare const infos: {
    path: string;
    httpMethod: string;
    class: typeof Service;
    className: string;
    method: typeof Service.getServiceRcmsApi1ManifestGcs;
    methodName: string;
    auth: null;
    description: string;
}[];
//# sourceMappingURL=Service.d.ts.map