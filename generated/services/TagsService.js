"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.infos = exports.TagsService = void 0;
const ApiError_1 = require("../core/ApiError");
const request_1 = require("../core/request");
const OpenAPI_1 = require("../core/OpenAPI");
const LocalStorage_1 = require("../core/LocalStorage");
class TagsService {
    /**
     *
     * ### **Tag::list (v1)**
     *
     *
     * @param outputFormat Format (json|xml|csv|zip)
     * @param lang Language
     * @param charset Charset
     * @param order Set the sort order. Available param {0}
     * @param pageId Page ID
     * @param id Tag IDs that you would like to display
     * @param categoryId ID of the tag category to be displayed. (Default: All)
     * @param groupBy Grouping List by (module_id|category)
     * @param type Grouping List as (array|object)
     * @result any
     * @throws ApiError
     */
    static getTagsServiceRcmsApi1Tags(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI_1.OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield request_1.request({
                    headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage_1.LocalStorage.getAccessToken()}` } : {},
                    method: 'get',
                    path: `/rcms-api/1/tags`,
                    query: {
                        '_output_format': requestParam.outputFormat,
                        '_lang': requestParam.lang,
                        '_charset': requestParam.charset,
                        'order[]': requestParam.order,
                        'pageID': requestParam.pageId,
                        'id[]': requestParam.id,
                        'category_id[]': requestParam.categoryId,
                        'groupBy': requestParam.groupBy,
                        'type': requestParam.type,
                    },
                });
            });
            let result = yield request();
            if (shouldHookToken && !result.ok && result.status === 401) {
                result = yield Promise.resolve().then(() => __importStar(require('../core/Auth'))).then(({ Auth }) => Auth.retryRequest(request, result));
            }
            ApiError_1.catchGenericError(result);
            return result;
        });
    }
    /**
     *
     * ### **Tag::insert (v1)**
     *
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv|zip)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postTagsServiceRcmsApi1TagsInsert(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI_1.OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield request_1.request({
                    headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage_1.LocalStorage.getAccessToken()}` } : {},
                    method: 'post',
                    path: `/rcms-api/1/tags/insert`,
                    query: {
                        '_output_format': requestParam.outputFormat,
                        '_lang': requestParam.lang,
                        '_charset': requestParam.charset,
                    },
                    body: requestParam.requestBody,
                });
            });
            let result = yield request();
            if (shouldHookToken && !result.ok && result.status === 401) {
                result = yield Promise.resolve().then(() => __importStar(require('../core/Auth'))).then(({ Auth }) => Auth.retryRequest(request, result));
            }
            ApiError_1.catchGenericError(result);
            return result;
        });
    }
    /**
     *
     * ### **Tag::delete (v1)**
     *
     *
     * @param tagId
     * @param outputFormat Format (json|xml|csv|zip)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postTagsServiceRcmsApi1TagsDeleteTagId(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI_1.OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield request_1.request({
                    headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage_1.LocalStorage.getAccessToken()}` } : {},
                    method: 'post',
                    path: `/rcms-api/1/tags/delete/${requestParam.tagId}`,
                    query: {
                        '_output_format': requestParam.outputFormat,
                        '_lang': requestParam.lang,
                        '_charset': requestParam.charset,
                    },
                });
            });
            let result = yield request();
            if (shouldHookToken && !result.ok && result.status === 401) {
                result = yield Promise.resolve().then(() => __importStar(require('../core/Auth'))).then(({ Auth }) => Auth.retryRequest(request, result));
            }
            ApiError_1.catchGenericError(result);
            return result;
        });
    }
}
exports.TagsService = TagsService;
(function (TagsService) {
    ;
    ;
    ;
})(TagsService = exports.TagsService || (exports.TagsService = {}));
exports.infos = [
    {
        path: '/rcms-api/1/tags',
        httpMethod: 'get',
        class: TagsService,
        className: 'TagsService',
        method: TagsService.getTagsServiceRcmsApi1Tags,
        methodName: 'getTagsServiceRcmsApi1Tags',
        auth: null,
        description: `
        export interface getTagsServiceRcmsApi1TagsRequest {
            outputFormat?: string,
            lang?: string,
            charset?: string,
            order?: Array<string>,
            pageId?: number,
            id?: Array<number>,
            categoryId?: Array<number>,
            groupBy?: string,
            type?: string,
        };
        export type getTagsServiceRcmsApi1TagsResponse = any;
        `,
    },
    {
        path: '/rcms-api/1/tags/insert',
        httpMethod: 'post',
        class: TagsService,
        className: 'TagsService',
        method: TagsService.postTagsServiceRcmsApi1TagsInsert,
        methodName: 'postTagsServiceRcmsApi1TagsInsert',
        auth: null,
        description: `
        export interface postTagsServiceRcmsApi1TagsInsertRequest {
            requestBody: {
                /**
                 * Title
                 */
                tag_nm: string,
                /**
                 * Category ID
                 * * 0 => Uncategorized
                 * * 1 => Category1
                 * * 2 => Category2
                 * * 3 => Category3
                 * * 4 => Category1__Child1
                 * * 5 => Category1__Child2
                 */
                tag_category_id?: (0 | 1 | 2 | 3 | 4 | 5),
                /**
                 * Published / Not published
                 */
                open_type?: ('open' | 'close' | 'default'),
                /**
                 * Sort
                 */
                weight?: number,
                /**
                 * ext_col_01
                 */
                ext_col_01?: string,
                /**
                 * ext_col_02
                 */
                ext_col_02?: string,
                /**
                 * ext_col_03
                 */
                ext_col_03?: string,
                /**
                 * ext_col_04
                 */
                ext_col_04?: string,
                /**
                 * ext_col_05
                 */
                ext_col_05?: string,
                /**
                 * ext_col_06
                 */
                ext_col_06?: string,
                /**
                 * ext_col_07
                 */
                ext_col_07?: string,
                /**
                 * ext_col_08
                 */
                ext_col_08?: string,
                /**
                 * ext_col_09
                 */
                ext_col_09?: string,
                /**
                 * ext_col_10
                 */
                ext_col_10?: string,
            },
            outputFormat?: string,
            lang?: string,
            charset?: string,
        };
        export type postTagsServiceRcmsApi1TagsInsertResponse = any;
        `,
    },
    {
        path: '/rcms-api/1/tags/delete/${requestParam.tagId}',
        httpMethod: 'post',
        class: TagsService,
        className: 'TagsService',
        method: TagsService.postTagsServiceRcmsApi1TagsDeleteTagId,
        methodName: 'postTagsServiceRcmsApi1TagsDeleteTagId',
        auth: null,
        description: `
        export interface postTagsServiceRcmsApi1TagsDeleteTagIdRequest {
            tagId: number,
            outputFormat?: string,
            lang?: string,
            charset?: string,
        };
        export type postTagsServiceRcmsApi1TagsDeleteTagIdResponse = any;
        `,
    },
];
