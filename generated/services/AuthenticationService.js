/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */
import { __awaiter, __generator } from "tslib";
import { catchGenericError } from '../core/ApiError';
import { request as __request } from '../core/request';
import { OpenAPI } from '../core/OpenAPI';
import { Auth } from '../core/Auth';
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService() {
    }
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
    AuthenticationService.postAuthenticationServiceRcmsApi1AuthLogin = function (requestParam) {
        return __awaiter(this, void 0, void 0, function () {
            var shouldHookToken, headers, request, result;
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        shouldHookToken = Object.keys({}).length > 0;
                        headers = shouldHookToken ? (_a = {}, _a[OpenAPI.SECURITY['Token-Auth'].name] = "" + Auth.getAccessToken(), _a) : {};
                        request = function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, __request({
                                            headers: headers,
                                            method: 'post',
                                            path: "/rcms-api/1/auth/login",
                                            query: {
                                                '_output_format': requestParam.outputFormat,
                                                '_lang': requestParam.lang,
                                                '_charset': requestParam.charset,
                                            },
                                            body: requestParam.requestBody,
                                        })];
                                    case 1: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); };
                        return [4 /*yield*/, request()];
                    case 1:
                        result = _b.sent();
                        if (!(shouldHookToken && !result.ok && result.status === 401)) return [3 /*break*/, 3];
                        return [4 /*yield*/, Auth.retryRequest(request, result)];
                    case 2:
                        result = _b.sent();
                        _b.label = 3;
                    case 3:
                        catchGenericError(result);
                        return [2 /*return*/, result.body];
                }
            });
        });
    };
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
    AuthenticationService.postAuthenticationServiceRcmsApi1AuthLogout = function (requestParam) {
        return __awaiter(this, void 0, void 0, function () {
            var shouldHookToken, headers, request, result;
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        shouldHookToken = Object.keys({
                            'Token-Auth': OpenAPI.SECURITY['Token-Auth'],
                        }).length > 0;
                        headers = shouldHookToken ? (_a = {}, _a[OpenAPI.SECURITY['Token-Auth'].name] = "" + Auth.getAccessToken(), _a) : {};
                        request = function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, __request({
                                            headers: headers,
                                            method: 'post',
                                            path: "/rcms-api/1/auth/logout",
                                            query: {
                                                '_output_format': requestParam.outputFormat,
                                                '_lang': requestParam.lang,
                                                '_charset': requestParam.charset,
                                            },
                                        })];
                                    case 1: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); };
                        return [4 /*yield*/, request()];
                    case 1:
                        result = _b.sent();
                        if (!(shouldHookToken && !result.ok && result.status === 401)) return [3 /*break*/, 3];
                        return [4 /*yield*/, Auth.retryRequest(request, result)];
                    case 2:
                        result = _b.sent();
                        _b.label = 3;
                    case 3:
                        catchGenericError(result);
                        return [2 /*return*/, result.body];
                }
            });
        });
    };
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
    AuthenticationService.postAuthenticationServiceRcmsApi1AuthToken = function (requestParam) {
        return __awaiter(this, void 0, void 0, function () {
            var shouldHookToken, headers, request, result;
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        shouldHookToken = Object.keys({}).length > 0;
                        headers = shouldHookToken ? (_a = {}, _a[OpenAPI.SECURITY['Token-Auth'].name] = "" + Auth.getAccessToken(), _a) : {};
                        request = function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, __request({
                                            headers: headers,
                                            method: 'post',
                                            path: "/rcms-api/1/auth/token",
                                            query: {
                                                '_output_format': requestParam.outputFormat,
                                                '_lang': requestParam.lang,
                                                '_charset': requestParam.charset,
                                            },
                                            body: requestParam.requestBody,
                                        })];
                                    case 1: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); };
                        return [4 /*yield*/, request()];
                    case 1:
                        result = _b.sent();
                        if (!(shouldHookToken && !result.ok && result.status === 401)) return [3 /*break*/, 3];
                        return [4 /*yield*/, Auth.retryRequest(request, result)];
                    case 2:
                        result = _b.sent();
                        _b.label = 3;
                    case 3:
                        catchGenericError(result);
                        return [2 /*return*/, result.body];
                }
            });
        });
    };
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
    AuthenticationService.postAuthenticationServiceRcmsApi1MePwReminder = function (requestParam) {
        return __awaiter(this, void 0, void 0, function () {
            var shouldHookToken, headers, request, result;
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        shouldHookToken = Object.keys({
                            'Token-Auth': OpenAPI.SECURITY['Token-Auth'],
                        }).length > 0;
                        headers = shouldHookToken ? (_a = {}, _a[OpenAPI.SECURITY['Token-Auth'].name] = "" + Auth.getAccessToken(), _a) : {};
                        request = function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, __request({
                                            headers: headers,
                                            method: 'post',
                                            path: "/rcms-api/1/me/pw/reminder",
                                            query: {
                                                '_output_format': requestParam.outputFormat,
                                                '_lang': requestParam.lang,
                                                '_charset': requestParam.charset,
                                            },
                                            body: requestParam.requestBody,
                                        })];
                                    case 1: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); };
                        return [4 /*yield*/, request()];
                    case 1:
                        result = _b.sent();
                        if (!(shouldHookToken && !result.ok && result.status === 401)) return [3 /*break*/, 3];
                        return [4 /*yield*/, Auth.retryRequest(request, result)];
                    case 2:
                        result = _b.sent();
                        _b.label = 3;
                    case 3:
                        catchGenericError(result);
                        return [2 /*return*/, result.body];
                }
            });
        });
    };
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
    AuthenticationService.postAuthenticationServiceRcmsApi1MePwReset = function (requestParam) {
        return __awaiter(this, void 0, void 0, function () {
            var shouldHookToken, headers, request, result;
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        shouldHookToken = Object.keys({
                            'Token-Auth': OpenAPI.SECURITY['Token-Auth'],
                        }).length > 0;
                        headers = shouldHookToken ? (_a = {}, _a[OpenAPI.SECURITY['Token-Auth'].name] = "" + Auth.getAccessToken(), _a) : {};
                        request = function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, __request({
                                            headers: headers,
                                            method: 'post',
                                            path: "/rcms-api/1/me/pw/reset",
                                            query: {
                                                '_output_format': requestParam.outputFormat,
                                                '_lang': requestParam.lang,
                                                '_charset': requestParam.charset,
                                            },
                                            body: requestParam.requestBody,
                                        })];
                                    case 1: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); };
                        return [4 /*yield*/, request()];
                    case 1:
                        result = _b.sent();
                        if (!(shouldHookToken && !result.ok && result.status === 401)) return [3 /*break*/, 3];
                        return [4 /*yield*/, Auth.retryRequest(request, result)];
                    case 2:
                        result = _b.sent();
                        _b.label = 3;
                    case 3:
                        catchGenericError(result);
                        return [2 /*return*/, result.body];
                }
            });
        });
    };
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
    AuthenticationService.getAuthenticationServiceRcmsApi1MeProfile = function (requestParam) {
        return __awaiter(this, void 0, void 0, function () {
            var shouldHookToken, headers, request, result;
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        shouldHookToken = Object.keys({
                            'Token-Auth': OpenAPI.SECURITY['Token-Auth'],
                        }).length > 0;
                        headers = shouldHookToken ? (_a = {}, _a[OpenAPI.SECURITY['Token-Auth'].name] = "" + Auth.getAccessToken(), _a) : {};
                        request = function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, __request({
                                            headers: headers,
                                            method: 'get',
                                            path: "/rcms-api/1/me/profile",
                                            query: {
                                                '_output_format': requestParam.outputFormat,
                                                '_lang': requestParam.lang,
                                                '_charset': requestParam.charset,
                                            },
                                        })];
                                    case 1: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); };
                        return [4 /*yield*/, request()];
                    case 1:
                        result = _b.sent();
                        if (!(shouldHookToken && !result.ok && result.status === 401)) return [3 /*break*/, 3];
                        return [4 /*yield*/, Auth.retryRequest(request, result)];
                    case 2:
                        result = _b.sent();
                        _b.label = 3;
                    case 3:
                        catchGenericError(result);
                        return [2 /*return*/, result.body];
                }
            });
        });
    };
    return AuthenticationService;
}());
export { AuthenticationService };
(function (AuthenticationService) {
    ;
    ;
    ;
    ;
    ;
    ;
})(AuthenticationService || (AuthenticationService = {}));
export var infos = [
    {
        path: '/rcms-api/1/auth/login',
        httpMethod: 'post',
        class: AuthenticationService,
        className: 'AuthenticationService',
        method: AuthenticationService.postAuthenticationServiceRcmsApi1AuthLogin,
        methodName: 'postAuthenticationServiceRcmsApi1AuthLogin',
        auth: 'LOGIN',
        description: "\n        export interface postAuthenticationServiceRcmsApi1AuthLoginRequest {\n            requestBody: {\n                /**\n                 * Login ID\n                 */\n                email?: string,\n                /**\n                 * Password\n                 */\n                password?: string,\n                /**\n                 * Log in automatically next time\n                 */\n                login_save?: (0 | 1),\n            },\n            outputFormat?: string,\n            lang?: string,\n            charset?: string,\n        };\n        export type postAuthenticationServiceRcmsApi1AuthLoginResponse = any;\n        ",
    },
    {
        path: '/rcms-api/1/auth/logout',
        httpMethod: 'post',
        class: AuthenticationService,
        className: 'AuthenticationService',
        method: AuthenticationService.postAuthenticationServiceRcmsApi1AuthLogout,
        methodName: 'postAuthenticationServiceRcmsApi1AuthLogout',
        auth: 'LOGOUT',
        description: "\n        export interface postAuthenticationServiceRcmsApi1AuthLogoutRequest {\n            outputFormat?: string,\n            lang?: string,\n            charset?: string,\n        };\n        export type postAuthenticationServiceRcmsApi1AuthLogoutResponse = any;\n        ",
    },
    {
        path: '/rcms-api/1/auth/token',
        httpMethod: 'post',
        class: AuthenticationService,
        className: 'AuthenticationService',
        method: AuthenticationService.postAuthenticationServiceRcmsApi1AuthToken,
        methodName: 'postAuthenticationServiceRcmsApi1AuthToken',
        auth: 'TOKEN',
        description: "\n        export interface postAuthenticationServiceRcmsApi1AuthTokenRequest {\n            requestBody: {\n                /**\n                 * Resource grant token\n                 */\n                grant_token?: string,\n                /**\n                 * Refresh token\n                 */\n                refresh_token?: string,\n            },\n            outputFormat?: string,\n            lang?: string,\n            charset?: string,\n        };\n        export type postAuthenticationServiceRcmsApi1AuthTokenResponse = any;\n        ",
    },
    {
        path: '/rcms-api/1/me/pw/reminder',
        httpMethod: 'post',
        class: AuthenticationService,
        className: 'AuthenticationService',
        method: AuthenticationService.postAuthenticationServiceRcmsApi1MePwReminder,
        methodName: 'postAuthenticationServiceRcmsApi1MePwReminder',
        auth: null,
        description: "\n        export interface postAuthenticationServiceRcmsApi1MePwReminderRequest {\n            requestBody: { email: string } | { token: string ,temp_pwd: string ,password: string  },\n            outputFormat?: string,\n            lang?: string,\n            charset?: string,\n        };\n        export type postAuthenticationServiceRcmsApi1MePwReminderResponse = any;\n        ",
    },
    {
        path: '/rcms-api/1/me/pw/reset',
        httpMethod: 'post',
        class: AuthenticationService,
        className: 'AuthenticationService',
        method: AuthenticationService.postAuthenticationServiceRcmsApi1MePwReset,
        methodName: 'postAuthenticationServiceRcmsApi1MePwReset',
        auth: null,
        description: "\n        export interface postAuthenticationServiceRcmsApi1MePwResetRequest {\n            requestBody: {\n                /**\n                 * Token\n                 */\n                login_id: string,\n                /**\n                 * Current Login Password\n                 */\n                current_password: string,\n                /**\n                 * New Password\n                 */\n                new_password: string,\n            },\n            outputFormat?: string,\n            lang?: string,\n            charset?: string,\n        };\n        export type postAuthenticationServiceRcmsApi1MePwResetResponse = any;\n        ",
    },
    {
        path: '/rcms-api/1/me/profile',
        httpMethod: 'get',
        class: AuthenticationService,
        className: 'AuthenticationService',
        method: AuthenticationService.getAuthenticationServiceRcmsApi1MeProfile,
        methodName: 'getAuthenticationServiceRcmsApi1MeProfile',
        auth: null,
        description: "\n        export interface getAuthenticationServiceRcmsApi1MeProfileRequest {\n            outputFormat?: string,\n            lang?: string,\n            charset?: string,\n        };\n        export type getAuthenticationServiceRcmsApi1MeProfileResponse = any;\n        ",
    },
];
