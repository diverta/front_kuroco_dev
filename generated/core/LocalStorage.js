"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalStorage = void 0;
class LocalStorage {
    /** get */
    static getAccessToken() {
        const token = localStorage.getItem(LocalStorage.TokenKeys.accessToken);
        return !!token ? token : '';
    }
    static getRefreshToken() {
        const token = localStorage.getItem(LocalStorage.TokenKeys.refreshToken);
        return !!token ? token : '';
    }
    /** set */
    static setAccessToken(token) {
        localStorage.setItem(LocalStorage.TokenKeys.accessToken, token);
    }
    static setRefreshToken(token) {
        localStorage.setItem(LocalStorage.TokenKeys.refreshToken, token);
    }
    /** delete */
    static deleteAccessToken() {
        localStorage.removeItem(LocalStorage.TokenKeys.accessToken);
    }
    static deleteRefreshToken() {
        localStorage.removeItem(LocalStorage.TokenKeys.refreshToken);
    }
    static deleteTokens() {
        localStorage.removeItem(LocalStorage.TokenKeys.accessToken);
        localStorage.removeItem(LocalStorage.TokenKeys.refreshToken);
    }
}
exports.LocalStorage = LocalStorage;
(function (LocalStorage) {
    let TokenKeys;
    (function (TokenKeys) {
        TokenKeys["accessToken"] = "accessToken";
        TokenKeys["refreshToken"] = "refreshToken";
    })(TokenKeys = LocalStorage.TokenKeys || (LocalStorage.TokenKeys = {}));
})(LocalStorage = exports.LocalStorage || (exports.LocalStorage = {}));
