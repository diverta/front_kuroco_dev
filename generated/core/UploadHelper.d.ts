import { FlowChunk as IFlowChunk } from 'flowjs';
export declare function generateUploader(gcsHost: string, accessToken: string, chunkSize?: number): any;
export declare function getTarget(uri: string): (flowFile: any, flowChunk: any) => string;
export declare function getHeaders(accessToken: string): (flowFile: any, flowChunk: any) => {
    Authorization: string;
    'x-goog-meta-rcms_gcs_x_meta_chunk_number': any;
    'x-goog-meta-rcms_gcs_x_meta_current_chunk_size': number;
    'x-goog-meta-rcms_gcs_x_meta_total_size': any;
    'x-goog-meta-rcms_gcs_x_meta_identifier': any;
    'x-goog-meta-rcms_gcs_x_meta_filename': string;
    'x-goog-meta-rcms_gcs_x_meta_total_chunks': any;
    'x-goog-acl': string;
    'Content-Type': any;
};
export declare function generateUniqueIdentifier(file: File): string;
export declare function changeRawDataBeforeSend(flowChunk: IFlowChunk, data: any): Blob;
//# sourceMappingURL=UploadHelper.d.ts.map