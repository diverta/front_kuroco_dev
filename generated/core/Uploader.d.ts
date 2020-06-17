import 'firebase/auth';
import 'firebase/storage';
import { AuthenticationService } from '../services/AuthenticationService';
/**
 * Create Uploader.
 */
export declare class UploaderFactory {
    static storage: any;
    static create(params: AuthenticationService.postAuthenticationServiceRcmsApi1FirebaseTokenRequest): Promise<Uploader>;
}
export interface Uploader {
    upload: (file: File, index?: number) => Promise<UploaderMeta>;
}
export interface UploaderMeta {
    url: string;
    fileName: string;
    dirPath: string;
    path: string;
    contentType: string;
    /**
     * file_id string value for identifying this uploaded file,
     * considered to be used for uploading as `file_id` with posting topic.
     */
    file_id: string;
}
//# sourceMappingURL=Uploader.d.ts.map