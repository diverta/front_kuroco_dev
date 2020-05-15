/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */

import { ApiError, catchGenericError } from '../core/ApiError';
import { request as __request } from '../core/request';
import { OpenAPI } from '../core/OpenAPI';
import { Auth } from '../core/Auth';

export class AuthenticationService {
    /**
     *
     * ### **Login::login_challenge (v1)**
     *
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    public static async postAuthenticationServiceRcmsApi1AuthLogin(requestParam: AuthenticationService.postAuthenticationServiceRcmsApi1AuthLoginRequest): Promise<any> {

        const request = async () =>
        await __request({
            method: 'post',
            path: `/rcms-api/1/auth/login`,
            query: {
                '_output_format': requestParam.outputFormat,
                '_lang': requestParam.lang,
                '_charset': requestParam.charset,
            },
            body: requestParam.requestBody,
        });

        const security = {
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
    /**
     *
     * ### **Login::logout (v1)**
     *
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    public static async postAuthenticationServiceRcmsApi1AuthLogout(requestParam: AuthenticationService.postAuthenticationServiceRcmsApi1AuthLogoutRequest): Promise<any> {

        const request = async () =>
        await __request({
            method: 'post',
            path: `/rcms-api/1/auth/logout`,
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
    /**
     *
     * ### **Login::token (v1)**
     *
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    public static async postAuthenticationServiceRcmsApi1AuthToken(requestParam: AuthenticationService.postAuthenticationServiceRcmsApi1AuthTokenRequest): Promise<any> {

        const request = async () =>
        await __request({
            method: 'post',
            path: `/rcms-api/1/auth/token`,
            query: {
                '_output_format': requestParam.outputFormat,
                '_lang': requestParam.lang,
                '_charset': requestParam.charset,
            },
            body: requestParam.requestBody,
        });

        const security = {
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
    /**
     *
     * ### **Login::reminder (v1)**
     *
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    public static async postAuthenticationServiceRcmsApi1MePwReminder(requestParam: AuthenticationService.postAuthenticationServiceRcmsApi1MePwReminderRequest): Promise<any> {

        const request = async () =>
        await __request({
            method: 'post',
            path: `/rcms-api/1/me/pw/reminder`,
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
    /**
     *
     * ### **Login::reset_password (v1)**
     *
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    public static async postAuthenticationServiceRcmsApi1MePwReset(requestParam: AuthenticationService.postAuthenticationServiceRcmsApi1MePwResetRequest): Promise<any> {

        const request = async () =>
        await __request({
            method: 'post',
            path: `/rcms-api/1/me/pw/reset`,
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
    /**
     *
     * ### **Login::profile (v1)**
     *
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    public static async getAuthenticationServiceRcmsApi1MeProfile(requestParam: AuthenticationService.getAuthenticationServiceRcmsApi1MeProfileRequest): Promise<any> {

        const request = async () =>
        await __request({
            method: 'get',
            path: `/rcms-api/1/me/profile`,
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

export namespace AuthenticationService {
    export interface postAuthenticationServiceRcmsApi1AuthLoginRequest {
        requestBody: {
            /**
             * Login ID
             */
            email?: string,
            /**
             * Password
             */
            password?: string,
            /**
             * Log in automatically next time
             */
            login_save?: (0 | 1),
        },
        outputFormat?: string,
        lang?: string,
        charset?: string,
    };
    export type postAuthenticationServiceRcmsApi1AuthLoginResponse = any;
    export interface postAuthenticationServiceRcmsApi1AuthLogoutRequest {
        outputFormat?: string,
        lang?: string,
        charset?: string,
    };
    export type postAuthenticationServiceRcmsApi1AuthLogoutResponse = any;
    export interface postAuthenticationServiceRcmsApi1AuthTokenRequest {
        requestBody: {
            /**
             * Resource grant token
             */
            grant_token?: string,
        },
        outputFormat?: string,
        lang?: string,
        charset?: string,
    };
    export type postAuthenticationServiceRcmsApi1AuthTokenResponse = any;
    export interface postAuthenticationServiceRcmsApi1MePwReminderRequest {
        requestBody: any,
        outputFormat?: string,
        lang?: string,
        charset?: string,
    };
    export type postAuthenticationServiceRcmsApi1MePwReminderResponse = any;
    export interface postAuthenticationServiceRcmsApi1MePwResetRequest {
        requestBody: {
            /**
             * Token
             */
            login_id: string,
            /**
             * Current Login Password
             */
            current_password: string,
            /**
             * New Password
             */
            new_password: string,
        },
        outputFormat?: string,
        lang?: string,
        charset?: string,
    };
    export type postAuthenticationServiceRcmsApi1MePwResetResponse = any;
    export interface getAuthenticationServiceRcmsApi1MeProfileRequest {
        outputFormat?: string,
        lang?: string,
        charset?: string,
    };
    export type getAuthenticationServiceRcmsApi1MeProfileResponse = any;
}

export const infos = [
    {
        path: '/rcms-api/1/auth/login',
        httpMethod: 'post',
        class: AuthenticationService,
        className: 'AuthenticationService',
        method: AuthenticationService.postAuthenticationServiceRcmsApi1AuthLogin,
        methodName: 'postAuthenticationServiceRcmsApi1AuthLogin',
        auth: 'LOGIN',
        description: `
        export interface postAuthenticationServiceRcmsApi1AuthLoginRequest {
            requestBody: {
                /**
                 * Login ID
                 */
                email?: string,
                /**
                 * Password
                 */
                password?: string,
                /**
                 * Log in automatically next time
                 */
                login_save?: (0 | 1),
            },
            outputFormat?: string,
            lang?: string,
            charset?: string,
        };
        export type postAuthenticationServiceRcmsApi1AuthLoginResponse = any;
        `,
    },
    {
        path: '/rcms-api/1/auth/logout',
        httpMethod: 'post',
        class: AuthenticationService,
        className: 'AuthenticationService',
        method: AuthenticationService.postAuthenticationServiceRcmsApi1AuthLogout,
        methodName: 'postAuthenticationServiceRcmsApi1AuthLogout',
        auth: 'LOGOUT',
        description: `
        export interface postAuthenticationServiceRcmsApi1AuthLogoutRequest {
            outputFormat?: string,
            lang?: string,
            charset?: string,
        };
        export type postAuthenticationServiceRcmsApi1AuthLogoutResponse = any;
        `,
    },
    {
        path: '/rcms-api/1/auth/token',
        httpMethod: 'post',
        class: AuthenticationService,
        className: 'AuthenticationService',
        method: AuthenticationService.postAuthenticationServiceRcmsApi1AuthToken,
        methodName: 'postAuthenticationServiceRcmsApi1AuthToken',
        auth: 'TOKEN',
        description: `
        export interface postAuthenticationServiceRcmsApi1AuthTokenRequest {
            requestBody: {
                /**
                 * Resource grant token
                 */
                grant_token?: string,
            },
            outputFormat?: string,
            lang?: string,
            charset?: string,
        };
        export type postAuthenticationServiceRcmsApi1AuthTokenResponse = any;
        `,
    },
    {
        path: '/rcms-api/1/me/pw/reminder',
        httpMethod: 'post',
        class: AuthenticationService,
        className: 'AuthenticationService',
        method: AuthenticationService.postAuthenticationServiceRcmsApi1MePwReminder,
        methodName: 'postAuthenticationServiceRcmsApi1MePwReminder',
        auth: null,
        description: `
        export interface postAuthenticationServiceRcmsApi1MePwReminderRequest {
            requestBody: any,
            outputFormat?: string,
            lang?: string,
            charset?: string,
        };
        export type postAuthenticationServiceRcmsApi1MePwReminderResponse = any;
        `,
    },
    {
        path: '/rcms-api/1/me/pw/reset',
        httpMethod: 'post',
        class: AuthenticationService,
        className: 'AuthenticationService',
        method: AuthenticationService.postAuthenticationServiceRcmsApi1MePwReset,
        methodName: 'postAuthenticationServiceRcmsApi1MePwReset',
        auth: null,
        description: `
        export interface postAuthenticationServiceRcmsApi1MePwResetRequest {
            requestBody: {
                /**
                 * Token
                 */
                login_id: string,
                /**
                 * Current Login Password
                 */
                current_password: string,
                /**
                 * New Password
                 */
                new_password: string,
            },
            outputFormat?: string,
            lang?: string,
            charset?: string,
        };
        export type postAuthenticationServiceRcmsApi1MePwResetResponse = any;
        `,
    },
    {
        path: '/rcms-api/1/me/profile',
        httpMethod: 'get',
        class: AuthenticationService,
        className: 'AuthenticationService',
        method: AuthenticationService.getAuthenticationServiceRcmsApi1MeProfile,
        methodName: 'getAuthenticationServiceRcmsApi1MeProfile',
        auth: null,
        description: `
        export interface getAuthenticationServiceRcmsApi1MeProfileRequest {
            outputFormat?: string,
            lang?: string,
            charset?: string,
        };
        export type getAuthenticationServiceRcmsApi1MeProfileResponse = any;
        `,
    },
];
