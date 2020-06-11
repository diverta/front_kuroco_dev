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
exports.Auth = exports.SpecialOperations = void 0;
const OpenAPI_1 = require("./OpenAPI");
const ApiError_1 = require("./ApiError");
const LocalStorage_1 = require("./LocalStorage");
// @ts-ignore-end
const AuthenticationService_1 = require("../services/AuthenticationService");
exports.SpecialOperations = {
    login: AuthenticationService_1.AuthenticationService.postAuthenticationServiceRcmsApi1AuthLogin,
    logout: AuthenticationService_1.AuthenticationService.postAuthenticationServiceRcmsApi1AuthLogout,
    token: AuthenticationService_1.AuthenticationService.postAuthenticationServiceRcmsApi1AuthToken,
};
class Auth {
    static login(param) {
        return __awaiter(this, void 0, void 0, function* () {
            LocalStorage_1.LocalStorage.deleteAccessToken();
            LocalStorage_1.LocalStorage.deleteRefreshToken();
            if (!exports.SpecialOperations.login) {
                return Promise.resolve();
            }
            const res = yield exports.SpecialOperations.login(param);
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
            return yield exports.SpecialOperations.logout(param).finally(() => {
                LocalStorage_1.LocalStorage.deleteAccessToken();
                LocalStorage_1.LocalStorage.deleteRefreshToken();
            });
        });
    }
    static createToken(param) {
        return __awaiter(this, void 0, void 0, function* () {
            if (OpenAPI_1.OpenAPI.SECURITY['Token-Auth']) {
                const res = yield exports.SpecialOperations.token(param);
                const { access_token, refresh_token } = res;
                if (access_token) {
                    LocalStorage_1.LocalStorage.setAccessToken(access_token);
                }
                if (refresh_token) {
                    LocalStorage_1.LocalStorage.setRefreshToken(refresh_token);
                }
                return res;
            }
            return Promise.resolve();
        });
    }
    static retryRequest(requestFn, result) {
        return __awaiter(this, void 0, void 0, function* () {
            // throws error when refresh_token is empty
            if (!LocalStorage_1.LocalStorage.getRefreshToken()) {
                LocalStorage_1.LocalStorage.deleteTokens();
                yield Auth.onErrorHandler(result);
                throw new ApiError_1.ApiError(result, ApiError_1.ApiError.Message.UNAUTHORIZED);
            }
            // handle on error to get refreshed token
            yield Auth.createToken({ requestBody: { refresh_token: LocalStorage_1.LocalStorage.getRefreshToken() } }).catch(() => __awaiter(this, void 0, void 0, function* () {
                LocalStorage_1.LocalStorage.deleteTokens();
                yield Auth.onErrorHandler(result);
                throw new ApiError_1.ApiError(result, ApiError_1.ApiError.Message.UNAUTHORIZED);
            }));
            // retry with refreshed token
            result = yield requestFn().catch(() => __awaiter(this, void 0, void 0, function* () {
                LocalStorage_1.LocalStorage.deleteTokens();
                yield Auth.onErrorHandler(result);
                throw new ApiError_1.ApiError(result, ApiError_1.ApiError.Message.UNAUTHORIZED);
            }));
            return result;
        });
    }
}
exports.Auth = Auth;
(function (Auth) {
    Auth.onErrorHandler = result => Promise.reject();
})(Auth = exports.Auth || (exports.Auth = {}));
