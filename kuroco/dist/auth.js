import { __assign, __awaiter, __generator } from "tslib";
import { AUTH_INFO, checkUrlMatchesFns, getInjectedInlineObj, } from './auth_info';
var Auth = /** @class */ (function () {
    function Auth() {
    }
    /**
     * hooks auto re-requesting process with overriding browser's native fetch function.
     * this is for the user using token-based authentication of Kuroco.
     * @param onResolved a function if you need to execute on resolved.
     * @param onRejected a function if you need to execute on rejected.
     */
    Auth.setupAuthHookOnFetchForKurocoRequestings = function (onResolved, onRejected) {
        if (onResolved === void 0) { onResolved = function () { }; }
        if (onRejected === void 0) { onRejected = function () { }; }
        var fetchFn = window.fetch;
        window.fetch = function (input, init) {
            return __awaiter(this, void 0, void 0, function () {
                var response_1, response_2, initCpy, response;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!!checkUrlMatchesFns._All("" + input)) return [3 /*break*/, 2];
                            return [4 /*yield*/, fetchFn(input, init)];
                        case 1:
                            response_1 = _a.sent();
                            return [2 /*return*/, response_1];
                        case 2:
                            if (!!AUTH_INFO.TOKEN) return [3 /*break*/, 4];
                            return [4 /*yield*/, fetchFn(input, init)];
                        case 3:
                            response_2 = _a.sent();
                            return [2 /*return*/, response_2];
                        case 4:
                            initCpy = checkUrlMatchesFns.Login("" + input) ||
                                checkUrlMatchesFns.Token("" + input)
                                ? init
                                : Auth.getTokenAppendedToHttpHeader(init);
                            return [4 /*yield*/, fetchFn.apply(this, [input, initCpy])];
                        case 5:
                            response = _a.sent();
                            // returns response without a process re-requetings when it is not Unauthorized(401).
                            if (response.status !== 401) {
                                onResolved();
                                return [2 /*return*/, response];
                            }
                            if (!checkUrlMatchesFns.Token("" + input)) return [3 /*break*/, 7];
                            return [4 /*yield*/, Auth.handleError(onRejected)];
                        case 6:
                            _a.sent();
                            _a.label = 7;
                        case 7: 
                        // re-requests with re-generating token, and return response.
                        return [4 /*yield*/, Auth.loginWithStoredToken().catch(function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, Auth.handleError(onRejected)];
                                    case 1: return [2 /*return*/, _a.sent()];
                                }
                            }); }); })];
                        case 8:
                            // re-requests with re-generating token, and return response.
                            _a.sent();
                            return [4 /*yield*/, fetchFn.apply(this, [input, initCpy]).then(function (d) {
                                    console.info("tokens were auto regenerated.\nthe requesting URL was: " + input);
                                    onResolved();
                                    return d;
                                })];
                        case 9: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
    };
    Auth.handleError = function (onRejected) {
        if (onRejected === void 0) { onRejected = function () { }; }
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.error('please relogin.');
                        Auth.deleteAccessToken();
                        Auth.deleteRefreshToken();
                        if (!AUTH_INFO.LOGOUT) return [3 /*break*/, 2];
                        return [4 /*yield*/, new AUTH_INFO.LOGOUT.classFile()[AUTH_INFO.LOGOUT.requestFnName]({})];
                    case 1:
                        _a = _b.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, null];
                    case 3:
                        _a = _b.sent();
                        _b.label = 4;
                    case 4:
                        _a;
                        onRejected();
                        return [2 /*return*/, Promise.reject()];
                }
            });
        });
    };
    Auth.loginWithStoredToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var refreshToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        refreshToken = Auth.getRefreshToken();
                        if (!(refreshToken === '')) return [3 /*break*/, 2];
                        return [4 /*yield*/, null];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, Promise.reject('no refresh token.')];
                    case 2: return [4 /*yield*/, Auth.createToken({ refreshToken: refreshToken })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Auth.login = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            var param, request, rtn, grant_token, errors;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Auth.deleteAccessToken();
                        Auth.deleteRefreshToken();
                        if (!AUTH_INFO.LOGIN) {
                            return [2 /*return*/, Promise.resolve()];
                        }
                        param = getInjectedInlineObj(AUTH_INFO.LOGIN.classFile.className, AUTH_INFO.LOGIN.requestFnName, payload);
                        request = new AUTH_INFO.LOGIN.classFile()[AUTH_INFO.LOGIN.requestFnName](param);
                        return [4 /*yield*/, request.then(function (prms) { return prms.value(); })];
                    case 1:
                        rtn = _a.sent();
                        grant_token = rtn.grant_token, errors = rtn.errors;
                        if (errors && Array.isArray(errors) && errors.length > 0) {
                            return [2 /*return*/, Promise.reject(errors)];
                        }
                        return [4 /*yield*/, Auth.createToken({ grantToken: grant_token })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Auth.getTokenAppendedToHttpHeader = function (init) {
        var initCpy = __assign({}, (init || {}));
        var accessToken = Auth.getAccessToken();
        if (!initCpy.headers) {
            initCpy.headers = {};
        }
        initCpy.headers['X-RCMS-API-ACCESS-TOKEN'] =
            accessToken === '' ? 'NO_TOKEN' : accessToken;
        return initCpy;
    };
    Auth.createToken = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            var param, request, res, access_token, refresh_token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!AUTH_INFO.TOKEN) {
                            return [2 /*return*/, Promise.resolve()];
                        }
                        param = getInjectedInlineObj(AUTH_INFO.TOKEN.classFile.className, AUTH_INFO.TOKEN.requestFnName, payload);
                        request = new AUTH_INFO.TOKEN.classFile()[AUTH_INFO.TOKEN.requestFnName](param);
                        return [4 /*yield*/, request.then(function (prms) { return prms.value(); })];
                    case 1:
                        res = _a.sent();
                        access_token = res.access_token, refresh_token = res.refresh_token;
                        access_token ? Auth.setAccessToken(access_token) : undefined;
                        refresh_token ? Auth.setRefreshToken(refresh_token) : undefined;
                        return [2 /*return*/];
                }
            });
        });
    };
    Auth.logout = function () {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!AUTH_INFO.LOGOUT) {
                            return [2 /*return*/, Promise.resolve()];
                        }
                        request = new AUTH_INFO.LOGOUT.classFile()[AUTH_INFO.LOGOUT.requestFnName]({});
                        return [4 /*yield*/, request.finally(function () {
                                Auth.deleteAccessToken();
                                Auth.deleteRefreshToken();
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
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
    return Auth;
}());
export { Auth };
(function (Auth) {
    var TokenKeys;
    (function (TokenKeys) {
        TokenKeys["accessToken"] = "accessToken";
        TokenKeys["refreshToken"] = "refreshToken";
    })(TokenKeys = Auth.TokenKeys || (Auth.TokenKeys = {}));
})(Auth || (Auth = {}));
