"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
// @ts-ignore-start
const ApiInfo_1 = require("./ApiInfo");
const OpenAPI_1 = require("./OpenAPI");
const ApiError_1 = require("./ApiError");
// @ts-ignore-end
class Auth {
    static async login(param) {
        Auth.deleteAccessToken();
        Auth.deleteRefreshToken();
        if (!ApiInfo_1.SpecialOperationInfo.login) {
            return Promise.resolve();
        }
        const res = await ApiInfo_1.SpecialOperationInfo.login.method(param);
        const { grant_token, errors } = res;
        if (errors && Array.isArray(errors) && errors.length > 0) {
            return Promise.reject(errors);
        }
        await Auth.createToken({ requestBody: { grant_token } });
        return res.member_id;
    }
    static async logout(param) {
        return await ApiInfo_1.SpecialOperationInfo.logout.method(param).finally(() => {
            Auth.deleteAccessToken();
            Auth.deleteRefreshToken();
        });
    }
    static async createToken(param) {
        if (OpenAPI_1.OpenAPI.SECURITY['Token-Auth']) {
            const res = await ApiInfo_1.SpecialOperationInfo.token.method(param);
            const { access_token, refresh_token } = res;
            if (access_token) {
                Auth.setAccessToken(access_token);
            }
            if (refresh_token) {
                Auth.setRefreshToken(refresh_token);
            }
            return res;
        }
        return Promise.resolve();
    }
    static async retryRequest(requestFn, result) {
        // throws error when refresh_token is empty
        if (!Auth.getRefreshToken()) {
            Auth.deleteTokens();
            await Auth.onErrorHandler(result);
            throw new ApiError_1.ApiError(result, ApiError_1.ApiError.Message.UNAUTHORIZED);
        }
        // handle on error to get refreshed token
        await Auth.createToken({ requestBody: { refresh_token: Auth.getRefreshToken() } }).catch(async () => {
            Auth.deleteTokens();
            await Auth.onErrorHandler(result);
            throw new ApiError_1.ApiError(result, ApiError_1.ApiError.Message.UNAUTHORIZED);
        });
        // retry with refreshed token
        result = await requestFn().catch(async () => {
            Auth.deleteTokens();
            await Auth.onErrorHandler(result);
            throw new ApiError_1.ApiError(result, ApiError_1.ApiError.Message.UNAUTHORIZED);
        });
        return result;
    }
    /** get */
    static getAccessToken() {
        const token = localStorage.getItem(Auth.TokenKeys.accessToken);
        return !!token ? token : '';
    }
    static getRefreshToken() {
        const token = localStorage.getItem(Auth.TokenKeys.refreshToken);
        return !!token ? token : '';
    }
    /** set */
    static setAccessToken(token) {
        localStorage.setItem(Auth.TokenKeys.accessToken, token);
    }
    static setRefreshToken(token) {
        localStorage.setItem(Auth.TokenKeys.refreshToken, token);
    }
    /** delete */
    static deleteAccessToken() {
        localStorage.removeItem(Auth.TokenKeys.accessToken);
    }
    static deleteRefreshToken() {
        localStorage.removeItem(Auth.TokenKeys.refreshToken);
    }
    static deleteTokens() {
        localStorage.removeItem(Auth.TokenKeys.accessToken);
        localStorage.removeItem(Auth.TokenKeys.refreshToken);
    }
}
exports.Auth = Auth;
(function (Auth) {
    Auth.onErrorHandler = result => Promise.reject();
    let TokenKeys;
    (function (TokenKeys) {
        TokenKeys["accessToken"] = "accessToken";
        TokenKeys["refreshToken"] = "refreshToken";
    })(TokenKeys = Auth.TokenKeys || (Auth.TokenKeys = {}));
})(Auth = exports.Auth || (exports.Auth = {}));
