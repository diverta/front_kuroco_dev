/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */

import { ApiError, catchGenericError } from '../core/ApiError';
import { request as __request } from '../core/request';
import { OpenAPI } from '../core/OpenAPI';
import { Auth } from '../core/Auth';

export class FilesService {
    /**
     *
     * ### **Files::upload (v1)**
     *
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @param requestBody
     * @result any
     * @throws ApiError
     */
    public static async postFilesServiceRcmsApi1FilesUpload(requestParam: FilesService.postFilesServiceRcmsApi1FilesUploadRequest): Promise<any> {

        const request = async () =>
        await __request({
            method: 'post',
            path: `/rcms-api/1/files/upload`,
            query: {
                '_output_format': requestParam.outputFormat,
                '_lang': requestParam.lang,
                '_charset': requestParam.charset,
            },
            body: requestParam.requestBody,
        });

        const security = {
            'Token-Auth': OpenAPI.SECURITY['Token-Auth'],
        };
        const shouldHookToken = Object.values(security).find((v: any) => v.type === 'apiKey');

        const result = await request().then(result => {
            if (shouldHookToken && result.status === 401) {
                return Auth.loginWithStoredToken({ requestBody: {} }).then(async () => await request());
            }
            return result;
        });

        catchGenericError(result);
        return result.body;
    }
}

export namespace FilesService {
    export interface postFilesServiceRcmsApi1FilesUploadRequest {
        outputFormat?: string,
        lang?: string,
        charset?: string,
        requestBody?: any,
    };
    export type postFilesServiceRcmsApi1FilesUploadResponse = any;
}

export const infos = [
    {
        path: '/rcms-api/1/files/upload',
        httpMethod: 'post',
        class: FilesService,
        className: 'FilesService',
        method: FilesService.postFilesServiceRcmsApi1FilesUpload,
        methodName: 'postFilesServiceRcmsApi1FilesUpload',
        auth: null,
        description: `
        export interface postFilesServiceRcmsApi1FilesUploadRequest {
            outputFormat?: string,
            lang?: string,
            charset?: string,
            requestBody?: any,
        };
        export type postFilesServiceRcmsApi1FilesUploadResponse = any;
        `,
    },
];
