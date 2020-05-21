/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */
import { __awaiter, __generator } from "tslib";
import { catchGenericError } from '../core/ApiError';
import { request as __request } from '../core/request';
import { OpenAPI } from '../core/OpenAPI';
import { Auth } from '../core/Auth';
var TagsService = /** @class */ (function () {
    function TagsService() {
    }
    /**
     *
     * ### **Tag::list (v1)**
     *
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @param order Set the sort order. Available param {0}
     * @param pageId Page ID
     * @param id Tag IDs that you would like to display
     * @param categoryId ID of the tag category to be displayed. (Default: All)
     * @param groupBy Grouping List by (module_id / category)
     * @param groupAs Grouping List as (array or object)
     * @result any
     * @throws ApiError
     */
    TagsService.getTagsServiceRcmsApi1Tags = function (requestParam) {
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
                                            path: "/rcms-api/1/tags",
                                            query: {
                                                '_output_format': requestParam.outputFormat,
                                                '_lang': requestParam.lang,
                                                '_charset': requestParam.charset,
                                                'order[]': requestParam.order,
                                                'pageID': requestParam.pageId,
                                                'id[]': requestParam.id,
                                                'category_id[]': requestParam.categoryId,
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
     * ### **Tag::insert (v1)**
     *
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    TagsService.postTagsServiceRcmsApi1TagsInsert = function (requestParam) {
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
                                            path: "/rcms-api/1/tags/insert",
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
     * ### **Tag::delete (v1)**
     *
     *
     * @param tagId
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    TagsService.postTagsServiceRcmsApi1TagsDeleteTagId = function (requestParam) {
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
                                            path: "/rcms-api/1/tags/delete/" + requestParam.tagId,
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
    return TagsService;
}());
export { TagsService };
(function (TagsService) {
    ;
    ;
    ;
})(TagsService || (TagsService = {}));
export var infos = [
    {
        path: '/rcms-api/1/tags',
        httpMethod: 'get',
        class: TagsService,
        className: 'TagsService',
        method: TagsService.getTagsServiceRcmsApi1Tags,
        methodName: 'getTagsServiceRcmsApi1Tags',
        auth: null,
        description: "\n        export interface getTagsServiceRcmsApi1TagsRequest {\n            outputFormat?: string,\n            lang?: string,\n            charset?: string,\n            order?: Array<string>,\n            pageId?: number,\n            id?: Array<number>,\n            categoryId?: Array<number>,\n            groupBy?: string,\n            groupAs?: string,\n        };\n        export type getTagsServiceRcmsApi1TagsResponse = any;\n        ",
    },
    {
        path: '/rcms-api/1/tags/insert',
        httpMethod: 'post',
        class: TagsService,
        className: 'TagsService',
        method: TagsService.postTagsServiceRcmsApi1TagsInsert,
        methodName: 'postTagsServiceRcmsApi1TagsInsert',
        auth: null,
        description: "\n        export interface postTagsServiceRcmsApi1TagsInsertRequest {\n            requestBody: {\n                /**\n                 * Title\n                 */\n                tag_nm: string,\n                /**\n                 * Category ID\n                 */\n                tag_category_id?: number,\n                /**\n                 * Published / Not published\n                 */\n                open_type?: ('open' | 'close' | 'default'),\n                /**\n                 * Sort\n                 */\n                weight?: number,\n                /**\n                 * ext_col_01\n                 */\n                ext_col_01?: string,\n                /**\n                 * ext_col_02\n                 */\n                ext_col_02?: string,\n                /**\n                 * ext_col_03\n                 */\n                ext_col_03?: string,\n                /**\n                 * ext_col_04\n                 */\n                ext_col_04?: string,\n                /**\n                 * ext_col_05\n                 */\n                ext_col_05?: string,\n                /**\n                 * ext_col_06\n                 */\n                ext_col_06?: string,\n                /**\n                 * ext_col_07\n                 */\n                ext_col_07?: string,\n                /**\n                 * ext_col_08\n                 */\n                ext_col_08?: string,\n                /**\n                 * ext_col_09\n                 */\n                ext_col_09?: string,\n                /**\n                 * ext_col_10\n                 */\n                ext_col_10?: string,\n            },\n            outputFormat?: string,\n            lang?: string,\n            charset?: string,\n        };\n        export type postTagsServiceRcmsApi1TagsInsertResponse = any;\n        ",
    },
    {
        path: '/rcms-api/1/tags/delete/${requestParam.tagId}',
        httpMethod: 'post',
        class: TagsService,
        className: 'TagsService',
        method: TagsService.postTagsServiceRcmsApi1TagsDeleteTagId,
        methodName: 'postTagsServiceRcmsApi1TagsDeleteTagId',
        auth: null,
        description: "\n        export interface postTagsServiceRcmsApi1TagsDeleteTagIdRequest {\n            tagId: number,\n            outputFormat?: string,\n            lang?: string,\n            charset?: string,\n        };\n        export type postTagsServiceRcmsApi1TagsDeleteTagIdResponse = any;\n        ",
    },
];
