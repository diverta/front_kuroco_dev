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
class AuthenticationService {
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
    static async postAuthenticationServiceRcmsApi1AuthLogin(requestParam) {
        const shouldHookToken = Object.keys({}).length > 0;
        const request = async () => await request_1.request({
            headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${Auth_1.Auth.getAccessToken()}` } : {},
            method: 'post',
            path: `/rcms-api/1/auth/login`,
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
    static async postAuthenticationServiceRcmsApi1AuthLogout(requestParam) {
        const shouldHookToken = Object.keys({
            'Token-Auth': OpenAPI_1.OpenAPI.SECURITY['Token-Auth'],
        }).length > 0;
        const request = async () => await request_1.request({
            headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${Auth_1.Auth.getAccessToken()}` } : {},
            method: 'post',
            path: `/rcms-api/1/auth/logout`,
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
    /**
     *
     * ### **Login::token (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **use_refresh_token** `true`
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static async postAuthenticationServiceRcmsApi1AuthToken(requestParam) {
        const shouldHookToken = Object.keys({}).length > 0;
        const request = async () => await request_1.request({
            headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${Auth_1.Auth.getAccessToken()}` } : {},
            method: 'post',
            path: `/rcms-api/1/auth/token`,
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
    static async postAuthenticationServiceRcmsApi1MePwReminder(requestParam) {
        const shouldHookToken = Object.keys({
            'Token-Auth': OpenAPI_1.OpenAPI.SECURITY['Token-Auth'],
        }).length > 0;
        const request = async () => await request_1.request({
            headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${Auth_1.Auth.getAccessToken()}` } : {},
            method: 'post',
            path: `/rcms-api/1/me/pw/reminder`,
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
    static async postAuthenticationServiceRcmsApi1MePwReset(requestParam) {
        const shouldHookToken = Object.keys({
            'Token-Auth': OpenAPI_1.OpenAPI.SECURITY['Token-Auth'],
        }).length > 0;
        const request = async () => await request_1.request({
            headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${Auth_1.Auth.getAccessToken()}` } : {},
            method: 'post',
            path: `/rcms-api/1/me/pw/reset`,
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
    static async getAuthenticationServiceRcmsApi1MeProfile(requestParam) {
        const shouldHookToken = Object.keys({
            'Token-Auth': OpenAPI_1.OpenAPI.SECURITY['Token-Auth'],
        }).length > 0;
        const request = async () => await request_1.request({
            headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${Auth_1.Auth.getAccessToken()}` } : {},
            method: 'get',
            path: `/rcms-api/1/me/profile`,
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
exports.AuthenticationService = AuthenticationService;
(function (AuthenticationService) {
    ;
    ;
    ;
    ;
    ;
    ;
})(AuthenticationService = exports.AuthenticationService || (exports.AuthenticationService = {}));
exports.infos = [
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
                /**
                 * Refresh token
                 */
                refresh_token?: string,
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
            requestBody: { email: string } | { token: string ,temp_pwd: string ,password: string  },
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
