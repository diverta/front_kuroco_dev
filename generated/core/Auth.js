"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = void 0;
// @ts-ignore-start
const ApiInfo_1 = require("./ApiInfo");
const OpenAPI_1 = require("./OpenAPI");
const ApiError_1 = require("./ApiError");
// @ts-ignore-end
class Auth {
    static login(param) {
        return __awaiter(this, void 0, void 0, function* () {
            Auth.deleteAccessToken();
            Auth.deleteRefreshToken();
            if (!ApiInfo_1.SpecialOperationInfo.login) {
                return Promise.resolve();
            }
            const res = yield ApiInfo_1.SpecialOperationInfo.login.method(param);
            const { grant_token, errors } = res;
            if (errors && Array.isArray(errors) && errors.length > 0) {
                return Promise.reject(errors);
            }
            yield Auth.createToken({ requestBody: { grant_token } });
            return res.member_id;
        });
    }
    static logout(param) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield ApiInfo_1.SpecialOperationInfo.logout.method(param).finally(() => {
                Auth.deleteAccessToken();
                Auth.deleteRefreshToken();
            });
        });
    }
    static createToken(param) {
        return __awaiter(this, void 0, void 0, function* () {
            if (OpenAPI_1.OpenAPI.SECURITY['Token-Auth']) {
                const res = yield ApiInfo_1.SpecialOperationInfo.token.method(param);
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
        });
    }
    static retryRequest(requestFn, result) {
        return __awaiter(this, void 0, void 0, function* () {
            // throws error when refresh_token is empty
            if (!Auth.getRefreshToken()) {
                Auth.deleteTokens();
                yield Auth.onErrorHandler(result);
                throw new ApiError_1.ApiError(result, ApiError_1.ApiError.Message.UNAUTHORIZED);
            }
            // handle on error to get refreshed token
            yield Auth.createToken({ requestBody: { refresh_token: Auth.getRefreshToken() } }).catch(() => __awaiter(this, void 0, void 0, function* () {
                Auth.deleteTokens();
                yield Auth.onErrorHandler(result);
                throw new ApiError_1.ApiError(result, ApiError_1.ApiError.Message.UNAUTHORIZED);
            }));
            // retry with refreshed token
            result = yield requestFn().catch(() => __awaiter(this, void 0, void 0, function* () {
                Auth.deleteTokens();
                yield Auth.onErrorHandler(result);
                throw new ApiError_1.ApiError(result, ApiError_1.ApiError.Message.UNAUTHORIZED);
            }));
            return result;
        });
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
