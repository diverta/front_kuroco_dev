"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */
Object.defineProperty(exports, "__esModule", { value: true });
const ApiError_1 = require("../core/ApiError");
const request_1 = require("../core/request");
const OpenAPI_1 = require("../core/OpenAPI");
const Auth_1 = require("../core/Auth");
class FilesService {
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
    static async postFilesServiceRcmsApi1FilesUpload(requestParam) {
        const shouldHookToken = Object.keys({
            'Token-Auth': OpenAPI_1.OpenAPI.SECURITY['Token-Auth'],
        }).length > 0;
        const request = async () => await request_1.request({
            headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${Auth_1.Auth.getAccessToken()}` } : {},
            method: 'post',
            path: `/rcms-api/1/files/upload`,
            query: {
                '_output_format': requestParam.outputFormat,
                '_lang': requestParam.lang,
                '_charset': requestParam.charset,
            },
            body: requestParam.requestBody,
        });
        let result = await request();
        if (shouldHookToken && !result.ok && result.status === 401) {
            result = await Auth_1.Auth.retryRequest(request, result);
        }
        ApiError_1.catchGenericError(result);
        return result.body;
    }
}
exports.FilesService = FilesService;
(function (FilesService) {
    ;
})(FilesService = exports.FilesService || (exports.FilesService = {}));
exports.infos = [
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
