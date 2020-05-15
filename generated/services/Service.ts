/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */

import { ApiError, catchGenericError } from '../core/ApiError';
import { request as __request } from '../core/request';
import { OpenAPI } from '../core/OpenAPI';
import { Auth } from '../core/Auth';

export class Service {
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
    public static async getServiceRcmsApi1ManifestGcs(requestParam: Service.getServiceRcmsApi1ManifestGcsRequest): Promise<any> {

        const request = async () =>
        await __request({
            method: 'get',
            path: `/rcms-api/1/manifest/gcs`,
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

export namespace Service {
    export interface getServiceRcmsApi1ManifestGcsRequest {
        outputFormat?: string,
        lang?: string,
        charset?: string,
    };
    export type getServiceRcmsApi1ManifestGcsResponse = any;
}

export const infos = [
    {
        path: '/rcms-api/1/manifest/gcs',
        httpMethod: 'get',
        class: Service,
        className: 'Service',
        method: Service.getServiceRcmsApi1ManifestGcs,
        methodName: 'getServiceRcmsApi1ManifestGcs',
        auth: null,
        description: `
        export interface getServiceRcmsApi1ManifestGcsRequest {
            outputFormat?: string,
            lang?: string,
            charset?: string,
        };
        export type getServiceRcmsApi1ManifestGcsResponse = any;
        `,
    },
];
