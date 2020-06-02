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
class AsynchronousProcessingService {
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
    static async postAsynchronousProcessingServiceRcmsApi1Batch(requestParam) {
        const shouldHookToken = Object.keys({
            'Token-Auth': OpenAPI_1.OpenAPI.SECURITY['Token-Auth'],
        }).length > 0;
        const request = async () => await request_1.request({
            headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${Auth_1.Auth.getAccessToken()}` } : {},
            method: 'post',
            path: `/rcms-api/1/batch`,
            query: {
                '_output_format': requestParam.outputFormat,
                '_lang': requestParam.lang,
                '_charset': requestParam.charset,
            },
        });
        let result = await request();
        if (shouldHookToken && !result.ok && result.status === 401) {
            result = await Auth_1.Auth.retryRequest(request, result);
        }
        ApiError_1.catchGenericError(result);
        return result.body;
    }
}
exports.AsynchronousProcessingService = AsynchronousProcessingService;
(function (AsynchronousProcessingService) {
    ;
})(AsynchronousProcessingService = exports.AsynchronousProcessingService || (exports.AsynchronousProcessingService = {}));
exports.infos = [
    {
        path: '/rcms-api/1/batch',
        httpMethod: 'post',
        class: AsynchronousProcessingService,
        className: 'AsynchronousProcessingService',
        method: AsynchronousProcessingService.postAsynchronousProcessingServiceRcmsApi1Batch,
        methodName: 'postAsynchronousProcessingServiceRcmsApi1Batch',
        auth: null,
        description: `
        export interface postAsynchronousProcessingServiceRcmsApi1BatchRequest {
            outputFormat?: string,
            lang?: string,
            charset?: string,
        };
        export type postAsynchronousProcessingServiceRcmsApi1BatchResponse = any;
        `,
    },
];
