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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
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
exports.infos = exports.CommentsService = void 0;
const ApiError_1 = require("../core/ApiError");
const request_1 = require("../core/request");
const OpenAPI_1 = require("../core/OpenAPI");
const LocalStorage_1 = require("../core/LocalStorage");
class CommentsService {
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
    static getCommentsServiceRcmsApi1TopicsComments(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI_1.OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield request_1.request({
                    headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage_1.LocalStorage.getAccessToken()}` } : {},
                    method: 'get',
                    path: `/rcms-api/1/topics/comments`,
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
    static postCommentsServiceRcmsApi1TopicsCommentsInsert(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI_1.OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield request_1.request({
                    headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage_1.LocalStorage.getAccessToken()}` } : {},
                    method: 'post',
                    path: `/rcms-api/1/topics/comments/insert`,
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
    static postCommentsServiceRcmsApi1TopicsCommentsUpdate(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI_1.OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield request_1.request({
                    headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage_1.LocalStorage.getAccessToken()}` } : {},
                    method: 'post',
                    path: `/rcms-api/1/topics/comments/update`,
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
    static postCommentsServiceRcmsApi1TopicsCommentsDelete(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI_1.OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield request_1.request({
                    headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage_1.LocalStorage.getAccessToken()}` } : {},
                    method: 'post',
                    path: `/rcms-api/1/topics/comments/delete`,
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
}
exports.CommentsService = CommentsService;
(function (CommentsService) {
    ;
    ;
    ;
    ;
})(CommentsService = exports.CommentsService || (exports.CommentsService = {}));
exports.infos = [
    {
        path: '/rcms-api/1/topics/comments',
        httpMethod: 'get',
        class: CommentsService,
        className: 'CommentsService',
        method: CommentsService.getCommentsServiceRcmsApi1TopicsComments,
        methodName: 'getCommentsServiceRcmsApi1TopicsComments',
        auth: null,
        description: `
        export interface getCommentsServiceRcmsApi1TopicsCommentsRequest {
            moduleId: Array<number>,
            outputFormat?: string,
            lang?: string,
            charset?: string,
            newOrderFlg?: number,
            cnt?: number,
            pageId?: number,
            fromDate?: string,
            toDate?: string,
            groupBy?: string,
            groupAs?: string,
        };
        export type getCommentsServiceRcmsApi1TopicsCommentsResponse = any;
        `,
    },
    {
        path: '/rcms-api/1/topics/comments/insert',
        httpMethod: 'post',
        class: CommentsService,
        className: 'CommentsService',
        method: CommentsService.postCommentsServiceRcmsApi1TopicsCommentsInsert,
        methodName: 'postCommentsServiceRcmsApi1TopicsCommentsInsert',
        auth: null,
        description: `
        export interface postCommentsServiceRcmsApi1TopicsCommentsInsertRequest {
            requestBody: {
                /**
                 * モジュールID
                 */
                module_id: number,
                /**
                 * Name
                 */
                name: string,
                /**
                 * Mail
                 */
                mail?: string,
                /**
                 * URL
                 */
                url?: string,
                /**
                 * Comments
                 */
                note: string,
                /**
                 * Rating
                 */
                rating?: number,
                /**
                 * 削除キー
                 */
                delkey?: string,
            },
            outputFormat?: string,
            lang?: string,
            charset?: string,
        };
        export type postCommentsServiceRcmsApi1TopicsCommentsInsertResponse = any;
        `,
    },
    {
        path: '/rcms-api/1/topics/comments/update',
        httpMethod: 'post',
        class: CommentsService,
        className: 'CommentsService',
        method: CommentsService.postCommentsServiceRcmsApi1TopicsCommentsUpdate,
        methodName: 'postCommentsServiceRcmsApi1TopicsCommentsUpdate',
        auth: null,
        description: `
        export interface postCommentsServiceRcmsApi1TopicsCommentsUpdateRequest {
            requestBody: {
                /**
                 * コメントID
                 */
                comment_id: number,
                /**
                 * モジュールID
                 */
                module_id: number,
                /**
                 * Name
                 */
                name: string,
                /**
                 * Mail
                 */
                mail?: string,
                /**
                 * URL
                 */
                url?: string,
                /**
                 * Comments
                 */
                note: string,
                /**
                 * Rating
                 */
                rating?: number,
                /**
                 * 削除キー
                 */
                delkey?: string,
            },
            outputFormat?: string,
            lang?: string,
            charset?: string,
        };
        export type postCommentsServiceRcmsApi1TopicsCommentsUpdateResponse = any;
        `,
    },
    {
        path: '/rcms-api/1/topics/comments/delete',
        httpMethod: 'post',
        class: CommentsService,
        className: 'CommentsService',
        method: CommentsService.postCommentsServiceRcmsApi1TopicsCommentsDelete,
        methodName: 'postCommentsServiceRcmsApi1TopicsCommentsDelete',
        auth: null,
        description: `
        export interface postCommentsServiceRcmsApi1TopicsCommentsDeleteRequest {
            requestBody: {
                /**
                 * コメントID
                 */
                comment_id: number,
                /**
                 * 削除キー
                 */
                delkey?: string,
            },
            outputFormat?: string,
            lang?: string,
            charset?: string,
        };
        export type postCommentsServiceRcmsApi1TopicsCommentsDeleteResponse = any;
        `,
    },
];
