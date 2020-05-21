import { __awaiter, __generator } from "tslib";
/* tslint:disable */
// @ts-ignore-start
import { SpecialOperationInfo } from './ApiInfo';
import { OpenAPI } from './OpenAPI';
import { ApiError } from './ApiError';
// @ts-ignore-end
var Auth = /** @class */ (function () {
    function Auth() {
    }
    Auth.login = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            var res, grant_token, errors;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Auth.deleteAccessToken();
                        Auth.deleteRefreshToken();
                        if (!SpecialOperationInfo.login) {
                            return [2 /*return*/, Promise.resolve()];
                        }
                        return [4 /*yield*/, SpecialOperationInfo.login.method(param)];
                    case 1:
                        res = _a.sent();
                        grant_token = res.grant_token, errors = res.errors;
                        if (errors && Array.isArray(errors) && errors.length > 0) {
                            return [2 /*return*/, Promise.reject(errors)];
                        }
                        return [4 /*yield*/, Auth.createToken({ requestBody: { grant_token: grant_token } })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, res.member_id];
                }
            });
        });
    };
    Auth.logout = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, SpecialOperationInfo.logout.method(param).finally(function () {
                            Auth.deleteAccessToken();
                            Auth.deleteRefreshToken();
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Auth.createToken = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            var res, access_token, refresh_token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!OpenAPI.SECURITY['Token-Auth']) return [3 /*break*/, 2];
                        return [4 /*yield*/, SpecialOperationInfo.token.method(param)];
                    case 1:
                        res = _a.sent();
                        access_token = res.access_token, refresh_token = res.refresh_token;
                        access_token ? Auth.setAccessToken(access_token) : undefined;
                        refresh_token ? Auth.setRefreshToken(refresh_token) : undefined;
                        return [2 /*return*/, res];
                    case 2: return [2 /*return*/, Promise.resolve()];
                }
            });
        });
    };
    Auth.retryRequest = function (requestFn, result) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(Auth.getRefreshToken() === '')) return [3 /*break*/, 2];
                        Auth.deleteTokens();
                        return [4 /*yield*/, Auth.onErrorHandler(result)];
                    case 1:
                        _a.sent();
                        throw new ApiError(result, ApiError.Message.UNAUTHORIZED);
                    case 2: 
                    // handle on error to get refreshed token
                    return [4 /*yield*/, Auth.createToken({ requestBody: { refresh_token: Auth.getRefreshToken() } }).catch(function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        Auth.deleteTokens();
                                        return [4 /*yield*/, Auth.onErrorHandler(result)];
                                    case 1:
                                        _a.sent();
                                        throw new ApiError(result, ApiError.Message.UNAUTHORIZED);
                                }
                            });
                        }); })];
                    case 3:
                        // handle on error to get refreshed token
                        _a.sent();
                        return [4 /*yield*/, requestFn().catch(function () { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            Auth.deleteTokens();
                                            return [4 /*yield*/, Auth.onErrorHandler(result)];
                                        case 1:
                                            _a.sent();
                                            throw new ApiError(result, ApiError.Message.UNAUTHORIZED);
                                    }
                                });
                            }); })];
                    case 4:
                        // retry with refreshed token
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /** get */
    Auth.getAccessToken = function () {
        return localStorage.getItem(Auth.TokenKeys.accessToken) || '';
    };
    Auth.getRefreshToken = function () {
        return localStorage.getItem(Auth.TokenKeys.refreshToken) || '';
    };
    /** set */
    Auth.setAccessToken = function (token) {
        localStorage.setItem(Auth.TokenKeys.accessToken, token);
    };
    Auth.setRefreshToken = function (token) {
        localStorage.setItem(Auth.TokenKeys.refreshToken, token);
    };
    /** delete */
    Auth.deleteAccessToken = function () {
        localStorage.removeItem(Auth.TokenKeys.accessToken);
    };
    Auth.deleteRefreshToken = function () {
        localStorage.removeItem(Auth.TokenKeys.refreshToken);
    };
    Auth.deleteTokens = function () {
        localStorage.removeItem(Auth.TokenKeys.accessToken);
        localStorage.removeItem(Auth.TokenKeys.refreshToken);
    };
    return Auth;
}());
export { Auth };
(function (Auth) {
    Auth.onErrorHandler = function (result) { return Promise.reject(); };
    var TokenKeys;
    (function (TokenKeys) {
        TokenKeys["accessToken"] = "accessToken";
        TokenKeys["refreshToken"] = "refreshToken";
    })(TokenKeys = Auth.TokenKeys || (Auth.TokenKeys = {}));
})(Auth || (Auth = {}));
