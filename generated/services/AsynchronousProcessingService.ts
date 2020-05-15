/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */

import { ApiError, catchGenericError } from '../core/ApiError';
import { request as __request } from '../core/request';
import { OpenAPI } from '../core/OpenAPI';
import { Auth } from '../core/Auth';

export class AsynchronousProcessingService {
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
    public static async postAsynchronousProcessingServiceRcmsApi1Batch(requestParam: AsynchronousProcessingService.postAsynchronousProcessingServiceRcmsApi1BatchRequest): Promise<any> {

        const request = async () =>
        await __request({
            method: 'post',
            path: `/rcms-api/1/batch`,
            query: {
                '_output_format': requestParam.outputFormat,
                '_lang': requestParam.lang,
                '_charset': requestParam.charset,
            },
        });

        const security = {
            'Token-Auth': OpenAPI.SECURITY['Token-Auth'],
        };
        const shouldHookToken = Object.values(security).find((v: any) => v.type === 'apiKey');

        let result = await request();

        if (shouldHookToken && !result.ok && result.status === 401) {
            // no token stored
            if (Auth.getRefreshToken() === '') {
                console.info('no refresh token in your local storage');
                Auth.onErrorHandler(result);
                throw new ApiError(result, ApiError.Message.UNAUTHORIZED);
            }
            // handle on error to get refreshed token
            await Auth.createToken({ requestBody: {} }).catch(() => {
                console.info('it failed that retrying to get token from stored refresh token');
                Auth.onErrorHandler(result);
                throw new ApiError(result, ApiError.Message.UNAUTHORIZED);
            });
            // retry with refreshed token
            result = await request();
        }

        catchGenericError(result);
        return result.body;
    }
}

export namespace AsynchronousProcessingService {
    export interface postAsynchronousProcessingServiceRcmsApi1BatchRequest {
        outputFormat?: string,
        lang?: string,
        charset?: string,
    };
    export type postAsynchronousProcessingServiceRcmsApi1BatchResponse = any;
}

export const infos = [
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
