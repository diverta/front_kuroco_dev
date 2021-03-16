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
exports.infos = exports.FavoritesService = void 0;
const ApiError_1 = require("../core/ApiError");
const request_1 = require("../core/request");
const OpenAPI_1 = require("../core/OpenAPI");
const LocalStorage_1 = require("../core/LocalStorage");
class FavoritesService {
    /**
     *
     * ### **Favorite::list (v1)**
     *
     *
     * @param outputFormat Format (json|xml|csv|zip)
     * @param lang Language
     * @param charset Charset
     * @param cnt Display number per page
     * @param pageId Page ID
     * @param moduleId
     * @param moduleType Module type
     * @param memberId Member ID
     * @param groupBy Grouping List by (module_id)
     * @param type Grouping List as (array or object)
     * @result any
     * @throws ApiError
     */
    static getFavoritesServiceRcmsApi1Favorites(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI_1.OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield request_1.request({
                    headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage_1.LocalStorage.getAccessToken()}` } : {},
                    method: 'get',
                    path: `/rcms-api/1/favorites`,
                    query: {
                        '_output_format': requestParam.outputFormat,
                        '_lang': requestParam.lang,
                        '_charset': requestParam.charset,
                        'cnt': requestParam.cnt,
                        'pageID': requestParam.pageId,
                        'module_id[]': requestParam.moduleId,
                        'module_type[]': requestParam.moduleType,
                        'member_id[]': requestParam.memberId,
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
     * ### **Favorite::insert (v1)**
     *
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv|zip)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postFavoritesServiceRcmsApi1FavoritesInsert(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI_1.OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield request_1.request({
                    headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage_1.LocalStorage.getAccessToken()}` } : {},
                    method: 'post',
                    path: `/rcms-api/1/favorites/insert`,
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
     * ### **Favorite::delete (v1)**
     *
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv|zip)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postFavoritesServiceRcmsApi1FavoritesDelete(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI_1.OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield request_1.request({
                    headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage_1.LocalStorage.getAccessToken()}` } : {},
                    method: 'post',
                    path: `/rcms-api/1/favorites/delete`,
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
exports.FavoritesService = FavoritesService;
(function (FavoritesService) {
    ;
    ;
    ;
})(FavoritesService = exports.FavoritesService || (exports.FavoritesService = {}));
exports.infos = [
    {
        path: '/rcms-api/1/favorites',
        httpMethod: 'get',
        class: FavoritesService,
        className: 'FavoritesService',
        method: FavoritesService.getFavoritesServiceRcmsApi1Favorites,
        methodName: 'getFavoritesServiceRcmsApi1Favorites',
        auth: null,
        description: `
        export interface getFavoritesServiceRcmsApi1FavoritesRequest {
            outputFormat?: string,
            lang?: string,
            charset?: string,
            cnt?: number,
            pageId?: number,
            moduleId?: Array<number>,
            moduleType?: Array<string>,
            memberId?: Array<number>,
            groupBy?: string,
            type?: string,
        };
        export type getFavoritesServiceRcmsApi1FavoritesResponse = any;
        `,
    },
    {
        path: '/rcms-api/1/favorites/insert',
        httpMethod: 'post',
        class: FavoritesService,
        className: 'FavoritesService',
        method: FavoritesService.postFavoritesServiceRcmsApi1FavoritesInsert,
        methodName: 'postFavoritesServiceRcmsApi1FavoritesInsert',
        auth: null,
        description: `
        export interface postFavoritesServiceRcmsApi1FavoritesInsertRequest {
            requestBody: {
                /**
                 * Module type
                 */
                module_type: ('group' | 'menu' | 'comment' | 'inquiry' | 'login' | 'login_history' | 'member' | 'staticcontents' | 'site' | 'topics' | 'memberregist' | 'batch' | 'mailtemplateedit' | 'relation' | 'csvtable' | 'approvalflow' | 'api_googleanalytics' | 'onetime' | 'magazine' | 'tag' | 'api_webpush' | 'rcms_api' | 'firebase' | 'trigger' | 'ec' | 'rcms'),
                /**
                 * module_id
                 */
                module_id: number,
                /**
                 * ページシステム名
                 */
                page_sysnm?: string,
                /**
                 * アクション種別
                 */
                action_type?: number,
            },
            outputFormat?: string,
            lang?: string,
            charset?: string,
        };
        export type postFavoritesServiceRcmsApi1FavoritesInsertResponse = any;
        `,
    },
    {
        path: '/rcms-api/1/favorites/delete',
        httpMethod: 'post',
        class: FavoritesService,
        className: 'FavoritesService',
        method: FavoritesService.postFavoritesServiceRcmsApi1FavoritesDelete,
        methodName: 'postFavoritesServiceRcmsApi1FavoritesDelete',
        auth: null,
        description: `
        export interface postFavoritesServiceRcmsApi1FavoritesDeleteRequest {
            requestBody: {
                /**
                 * Module type
                 */
                module_type: ('group' | 'menu' | 'comment' | 'inquiry' | 'login' | 'login_history' | 'member' | 'staticcontents' | 'site' | 'topics' | 'memberregist' | 'batch' | 'mailtemplateedit' | 'relation' | 'csvtable' | 'approvalflow' | 'api_googleanalytics' | 'onetime' | 'magazine' | 'tag' | 'api_webpush' | 'rcms_api' | 'firebase' | 'trigger' | 'ec' | 'rcms'),
                /**
                 * module_id
                 */
                module_id: number,
                /**
                 * ページシステム名
                 */
                page_sysnm?: string,
                /**
                 * アクション種別
                 */
                action_type?: number,
            },
            outputFormat?: string,
            lang?: string,
            charset?: string,
        };
        export type postFavoritesServiceRcmsApi1FavoritesDeleteResponse = any;
        `,
    },
];
