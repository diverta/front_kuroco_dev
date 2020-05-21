/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */
import { __awaiter, __generator } from "tslib";
import { catchGenericError } from '../core/ApiError';
import { request as __request } from '../core/request';
import { OpenAPI } from '../core/OpenAPI';
import { Auth } from '../core/Auth';
var FavoritesService = /** @class */ (function () {
    function FavoritesService() {
    }
    /**
     *
     * ### **Favorite::list (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **module_type** `topics`
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @param cnt Display number per page
     * @param pageId Page ID
     * @param moduleId
     * @param memberId Member ID
     * @param rcmsid rcmsid
     * @param groupBy Grouping List by (module_id)
     * @param groupAs Grouping List as (array or object)
     * @result any
     * @throws ApiError
     */
    FavoritesService.getFavoritesServiceRcmsApi1Favorites = function (requestParam) {
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
                                            method: 'get',
                                            path: "/rcms-api/1/favorites",
                                            query: {
                                                '_output_format': requestParam.outputFormat,
                                                '_lang': requestParam.lang,
                                                '_charset': requestParam.charset,
                                                'cnt': requestParam.cnt,
                                                'pageID': requestParam.pageId,
                                                'module_id[]': requestParam.moduleId,
                                                'member_id[]': requestParam.memberId,
                                                'rcmsid[]': requestParam.rcmsid,
                                                'groupBy': requestParam.groupBy,
                                                'groupAs': requestParam.groupAs,
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
     * ### **Favorite::insert (v1)**
     *
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    FavoritesService.postFavoritesServiceRcmsApi1FavoritesInsert = function (requestParam) {
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
                                            path: "/rcms-api/1/favorites/insert",
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
     * ### **Favorite::delete (v1)**
     *
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    FavoritesService.postFavoritesServiceRcmsApi1FavoritesDelete = function (requestParam) {
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
                                            path: "/rcms-api/1/favorites/delete",
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
    return FavoritesService;
}());
export { FavoritesService };
(function (FavoritesService) {
    ;
    ;
    ;
})(FavoritesService || (FavoritesService = {}));
export var infos = [
    {
        path: '/rcms-api/1/favorites',
        httpMethod: 'get',
        class: FavoritesService,
        className: 'FavoritesService',
        method: FavoritesService.getFavoritesServiceRcmsApi1Favorites,
        methodName: 'getFavoritesServiceRcmsApi1Favorites',
        auth: null,
        description: "\n        export interface getFavoritesServiceRcmsApi1FavoritesRequest {\n            outputFormat?: string,\n            lang?: string,\n            charset?: string,\n            cnt?: number,\n            pageId?: number,\n            moduleId?: Array<number>,\n            memberId?: Array<number>,\n            rcmsid?: Array<string>,\n            groupBy?: string,\n            groupAs?: string,\n        };\n        export type getFavoritesServiceRcmsApi1FavoritesResponse = any;\n        ",
    },
    {
        path: '/rcms-api/1/favorites/insert',
        httpMethod: 'post',
        class: FavoritesService,
        className: 'FavoritesService',
        method: FavoritesService.postFavoritesServiceRcmsApi1FavoritesInsert,
        methodName: 'postFavoritesServiceRcmsApi1FavoritesInsert',
        auth: null,
        description: "\n        export interface postFavoritesServiceRcmsApi1FavoritesInsertRequest {\n            requestBody: {\n                /**\n                 * Module type\n                 */\n                module_type: string,\n                /**\n                 * module_id\n                 */\n                module_id: number,\n                /**\n                 * \u30DA\u30FC\u30B8\u30B7\u30B9\u30C6\u30E0\u540D\n                 */\n                page_sysnm?: string,\n            },\n            outputFormat?: string,\n            lang?: string,\n            charset?: string,\n        };\n        export type postFavoritesServiceRcmsApi1FavoritesInsertResponse = any;\n        ",
    },
    {
        path: '/rcms-api/1/favorites/delete',
        httpMethod: 'post',
        class: FavoritesService,
        className: 'FavoritesService',
        method: FavoritesService.postFavoritesServiceRcmsApi1FavoritesDelete,
        methodName: 'postFavoritesServiceRcmsApi1FavoritesDelete',
        auth: null,
        description: "\n        export interface postFavoritesServiceRcmsApi1FavoritesDeleteRequest {\n            requestBody: {\n                /**\n                 * Module type\n                 */\n                module_type: string,\n                /**\n                 * module_id\n                 */\n                module_id: number,\n                /**\n                 * \u30DA\u30FC\u30B8\u30B7\u30B9\u30C6\u30E0\u540D\n                 */\n                page_sysnm?: string,\n            },\n            outputFormat?: string,\n            lang?: string,\n            charset?: string,\n        };\n        export type postFavoritesServiceRcmsApi1FavoritesDeleteResponse = any;\n        ",
    },
];
