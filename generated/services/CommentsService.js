/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */
import { __awaiter, __generator } from "tslib";
import { catchGenericError } from '../core/ApiError';
import { request as __request } from '../core/request';
import { OpenAPI } from '../core/OpenAPI';
import { Auth } from '../core/Auth';
var CommentsService = /** @class */ (function () {
    function CommentsService() {
    }
    /**
     *
     * ### **Comment::list (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **module_type** `topics`
     *
     * @param moduleId モジュールID
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @param newOrderFlg To the display the newest use 1. Default: 0
     * @param cnt Display number per page
     * @param pageId Page ID
     * @param fromDate Posted Date
     * @param toDate Posted Date
     * @param groupBy Grouping List by (module_id)
     * @param groupAs Grouping List as (array or object)
     * @result any
     * @throws ApiError
     */
    CommentsService.getCommentsServiceRcmsApi1TopicsComments = function (requestParam) {
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
                                            path: "/rcms-api/1/topics/comments",
                                            query: {
                                                'module_id[]': requestParam.moduleId,
                                                '_output_format': requestParam.outputFormat,
                                                '_lang': requestParam.lang,
                                                '_charset': requestParam.charset,
                                                'new_order_flg': requestParam.newOrderFlg,
                                                'cnt': requestParam.cnt,
                                                'pageID': requestParam.pageId,
                                                'from_date': requestParam.fromDate,
                                                'to_date': requestParam.toDate,
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
     * ### **Comment::insert (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **use_module_type** `topics`
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    CommentsService.postCommentsServiceRcmsApi1TopicsCommentsInsert = function (requestParam) {
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
                                            path: "/rcms-api/1/topics/comments/insert",
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
     * ### **Comment::update (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **use_module_type** `topics`
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    CommentsService.postCommentsServiceRcmsApi1TopicsCommentsUpdate = function (requestParam) {
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
                                            path: "/rcms-api/1/topics/comments/update",
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
     * ### **Comment::delete (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **use_module_type** `topics`
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    CommentsService.postCommentsServiceRcmsApi1TopicsCommentsDelete = function (requestParam) {
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
                                            path: "/rcms-api/1/topics/comments/delete",
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
    return CommentsService;
}());
export { CommentsService };
(function (CommentsService) {
    ;
    ;
    ;
    ;
})(CommentsService || (CommentsService = {}));
export var infos = [
    {
        path: '/rcms-api/1/topics/comments',
        httpMethod: 'get',
        class: CommentsService,
        className: 'CommentsService',
        method: CommentsService.getCommentsServiceRcmsApi1TopicsComments,
        methodName: 'getCommentsServiceRcmsApi1TopicsComments',
        auth: null,
        description: "\n        export interface getCommentsServiceRcmsApi1TopicsCommentsRequest {\n            moduleId: Array<number>,\n            outputFormat?: string,\n            lang?: string,\n            charset?: string,\n            newOrderFlg?: number,\n            cnt?: number,\n            pageId?: number,\n            fromDate?: string,\n            toDate?: string,\n            groupBy?: string,\n            groupAs?: string,\n        };\n        export type getCommentsServiceRcmsApi1TopicsCommentsResponse = any;\n        ",
    },
    {
        path: '/rcms-api/1/topics/comments/insert',
        httpMethod: 'post',
        class: CommentsService,
        className: 'CommentsService',
        method: CommentsService.postCommentsServiceRcmsApi1TopicsCommentsInsert,
        methodName: 'postCommentsServiceRcmsApi1TopicsCommentsInsert',
        auth: null,
        description: "\n        export interface postCommentsServiceRcmsApi1TopicsCommentsInsertRequest {\n            requestBody: {\n                /**\n                 * \u30E2\u30B8\u30E5\u30FC\u30EBID\n                 */\n                module_id: number,\n                /**\n                 * Name\n                 */\n                name: string,\n                /**\n                 * Mail\n                 */\n                mail?: string,\n                /**\n                 * URL\n                 */\n                url?: string,\n                /**\n                 * Comments\n                 */\n                note: string,\n                /**\n                 * Rating\n                 */\n                rating?: number,\n                /**\n                 * \u524A\u9664\u30AD\u30FC\n                 */\n                delkey?: string,\n            },\n            outputFormat?: string,\n            lang?: string,\n            charset?: string,\n        };\n        export type postCommentsServiceRcmsApi1TopicsCommentsInsertResponse = any;\n        ",
    },
    {
        path: '/rcms-api/1/topics/comments/update',
        httpMethod: 'post',
        class: CommentsService,
        className: 'CommentsService',
        method: CommentsService.postCommentsServiceRcmsApi1TopicsCommentsUpdate,
        methodName: 'postCommentsServiceRcmsApi1TopicsCommentsUpdate',
        auth: null,
        description: "\n        export interface postCommentsServiceRcmsApi1TopicsCommentsUpdateRequest {\n            requestBody: {\n                /**\n                 * \u30B3\u30E1\u30F3\u30C8ID\n                 */\n                comment_id: number,\n                /**\n                 * \u30E2\u30B8\u30E5\u30FC\u30EBID\n                 */\n                module_id: number,\n                /**\n                 * Name\n                 */\n                name: string,\n                /**\n                 * Mail\n                 */\n                mail?: string,\n                /**\n                 * URL\n                 */\n                url?: string,\n                /**\n                 * Comments\n                 */\n                note: string,\n                /**\n                 * Rating\n                 */\n                rating?: number,\n                /**\n                 * \u524A\u9664\u30AD\u30FC\n                 */\n                delkey?: string,\n            },\n            outputFormat?: string,\n            lang?: string,\n            charset?: string,\n        };\n        export type postCommentsServiceRcmsApi1TopicsCommentsUpdateResponse = any;\n        ",
    },
    {
        path: '/rcms-api/1/topics/comments/delete',
        httpMethod: 'post',
        class: CommentsService,
        className: 'CommentsService',
        method: CommentsService.postCommentsServiceRcmsApi1TopicsCommentsDelete,
        methodName: 'postCommentsServiceRcmsApi1TopicsCommentsDelete',
        auth: null,
        description: "\n        export interface postCommentsServiceRcmsApi1TopicsCommentsDeleteRequest {\n            requestBody: {\n                /**\n                 * \u30B3\u30E1\u30F3\u30C8ID\n                 */\n                comment_id: number,\n                /**\n                 * \u524A\u9664\u30AD\u30FC\n                 */\n                delkey?: string,\n            },\n            outputFormat?: string,\n            lang?: string,\n            charset?: string,\n        };\n        export type postCommentsServiceRcmsApi1TopicsCommentsDeleteResponse = any;\n        ",
    },
];
