import { Flow as IFlow, FlowFile as IFlowFile, FlowChunk as IFlowChunk } from 'flowjs';
declare type IExtendedFlow = IFlow & {
    /** returns file_id */
    uploadAsync: () => Promise<string>;
};
export declare function generateUploader(gcsHost: string, accessToken: string, chunkSize?: number): IExtendedFlow;
export declare function getTarget(uri: string): (flowFile: IFlowFile, flowChunk: IFlowChunk) => string;
export declare function getHeaders(accessToken: string): (flowFile: IFlowFile, flowChunk: IFlowChunk) => {
    Authorization: string;
    'x-goog-meta-rcms_gcs_x_meta_chunk_number': number;
    'x-goog-meta-rcms_gcs_x_meta_current_chunk_size': number;
    'x-goog-meta-rcms_gcs_x_meta_total_size': number;
    'x-goog-meta-rcms_gcs_x_meta_identifier': string;
    'x-goog-meta-rcms_gcs_x_meta_filename': string;
    'x-goog-meta-rcms_gcs_x_meta_total_chunks': number;
    'x-goog-acl': string;
    'Content-Type': any;
};
export declare function generateUniqueIdentifier(file: File): string;
export declare function changeRawDataBeforeSend(flowChunk: IFlowChunk, data: any): Blob;
export {};
//# sourceMappingURL=uploadToGCS.d.ts.map