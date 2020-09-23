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
exports.infos = exports.TopicsService = void 0;
const ApiError_1 = require("../core/ApiError");
const request_1 = require("../core/request");
const OpenAPI_1 = require("../core/OpenAPI");
const LocalStorage_1 = require("../core/LocalStorage");
class TopicsService {
    /**
     *
     * ### **Topics::details (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **topics_group_id** `1`
     *
     * @param topicsId
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static getTopicsServiceRcmsApi1Topics1TopicsId(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI_1.OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield request_1.request({
                    headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage_1.LocalStorage.getAccessToken()}` } : {},
                    method: 'get',
                    path: `/rcms-api/1/topics1/${requestParam.topicsId}`,
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
    /**
     *
     * ### **Topics::list (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **topics_group_id** `1`
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @param cnt Number of topics per page
     * @param pageId Page ID
     * @param filter Filter query
     * @param customSearchId search contdition
     * @param topicsKeyword Keyword
     * @param topicsKeywordCond Change the way of narrowing down by keyword (Default: AND)
     * @param contentsType The ID from the displayed category. All data will be displayed when this is not set.
     * @param contentsTypeCond Change the way of narrowing down by category ID (Default: OR)
     * @param date Date
     * @param usingSeason Use season (Yes: 1 | No: 0)
     * @param season Season
     * @param extColumnCond ext_column condition type (Default:OR)<br>
     * To specify an ext_col number set: 'ext_column_{no}_cond'
     * @param excludeTopicsId IDs of the excluded topics
     * @param tagCategoryId ID of the tag category to be displayed. (Default: All)
     * @param tagSearch narrowed by the value of the tag id.  yes:1 no:0
     * @param tagId Tag IDs that you would like to display
     * @param tagCond Change the way to narrow down tags (Default: OR)
     * @param excludeTagId Tag IDs that you would like to hide
     * @param myFavoriteList
     * @param myCommentList
     * @param myOwnList
     * @param order Set the sort order. Available param {0}
     * @param orderById
     * @param id IDs of the displayed topics
     * @result any
     * @throws ApiError
     */
    static getTopicsServiceRcmsApi1Topics1(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI_1.OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield request_1.request({
                    headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage_1.LocalStorage.getAccessToken()}` } : {},
                    method: 'get',
                    path: `/rcms-api/1/topics1`,
                    query: {
                        '_output_format': requestParam.outputFormat,
                        '_lang': requestParam.lang,
                        '_charset': requestParam.charset,
                        'cnt': requestParam.cnt,
                        'pageID': requestParam.pageId,
                        'filter': requestParam.filter,
                        'custom_search_id': requestParam.customSearchId,
                        'topics_keyword': requestParam.topicsKeyword,
                        'topics_keyword_cond': requestParam.topicsKeywordCond,
                        'contents_type[]': requestParam.contentsType,
                        'contents_type_cond': requestParam.contentsTypeCond,
                        'date': requestParam.date,
                        'using_season': requestParam.usingSeason,
                        'season': requestParam.season,
                        'ext_column_cond': requestParam.extColumnCond,
                        'exclude_topics_id': requestParam.excludeTopicsId,
                        'tag_category_id': requestParam.tagCategoryId,
                        'tag_search': requestParam.tagSearch,
                        'tag_id[]': requestParam.tagId,
                        'tag_cond': requestParam.tagCond,
                        'exclude_tag_id': requestParam.excludeTagId,
                        'my_favorite_list': requestParam.myFavoriteList,
                        'my_comment_list': requestParam.myCommentList,
                        'my_own_list': requestParam.myOwnList,
                        'order': requestParam.order,
                        'order_by_id': requestParam.orderById,
                        'id[]': requestParam.id,
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
     * ### **Topics::insert (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **topics_group_id** `1`
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postTopicsServiceRcmsApi1Topics1Insert(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI_1.OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield request_1.request({
                    headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage_1.LocalStorage.getAccessToken()}` } : {},
                    method: 'post',
                    path: `/rcms-api/1/topics1/insert`,
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
     * ### **Topics::update (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **topics_group_id** `1`
     *
     * @param topicsId
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postTopicsServiceRcmsApi1Topics1UpdateTopicsId(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI_1.OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield request_1.request({
                    headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage_1.LocalStorage.getAccessToken()}` } : {},
                    method: 'post',
                    path: `/rcms-api/1/topics1/update/${requestParam.topicsId}`,
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
     * ### **Topics::delete (v1)**
     *
     *
     * @param topicsId
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postTopicsServiceRcmsApi1Topics1DeleteTopicsId(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI_1.OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield request_1.request({
                    headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage_1.LocalStorage.getAccessToken()}` } : {},
                    method: 'post',
                    path: `/rcms-api/1/topics1/delete/${requestParam.topicsId}`,
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
    /**
     *
     * ### **Topics::list (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **topics_group_id** `2`
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @param cnt Number of topics per page
     * @param pageId Page ID
     * @param filter Filter query
     * @param customSearchId search contdition
     * @param topicsKeyword Keyword
     * @param topicsKeywordCond Change the way of narrowing down by keyword (Default: AND)
     * @param contentsType The ID from the displayed category. All data will be displayed when this is not set.
     * @param contentsTypeCond Change the way of narrowing down by category ID (Default: OR)
     * @param date Date
     * @param usingSeason Use season (Yes: 1 | No: 0)
     * @param season Season
     * @param extColumnCond ext_column condition type (Default:OR)<br>
     * To specify an ext_col number set: 'ext_column_{no}_cond'
     * @param excludeTopicsId IDs of the excluded topics
     * @param tagCategoryId ID of the tag category to be displayed. (Default: All)
     * @param tagSearch narrowed by the value of the tag id.  yes:1 no:0
     * @param tagId Tag IDs that you would like to display
     * @param tagCond Change the way to narrow down tags (Default: OR)
     * @param excludeTagId Tag IDs that you would like to hide
     * @param myFavoriteList
     * @param myCommentList
     * @param myOwnList
     * @param order Set the sort order. Available param {0}
     * @param orderById
     * @param id IDs of the displayed topics
     * @result any
     * @throws ApiError
     */
    static getTopicsServiceRcmsApi1TopicsMultiple(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI_1.OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield request_1.request({
                    headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage_1.LocalStorage.getAccessToken()}` } : {},
                    method: 'get',
                    path: `/rcms-api/1/topics/multiple`,
                    query: {
                        '_output_format': requestParam.outputFormat,
                        '_lang': requestParam.lang,
                        '_charset': requestParam.charset,
                        'cnt': requestParam.cnt,
                        'pageID': requestParam.pageId,
                        'filter': requestParam.filter,
                        'custom_search_id': requestParam.customSearchId,
                        'topics_keyword': requestParam.topicsKeyword,
                        'topics_keyword_cond': requestParam.topicsKeywordCond,
                        'contents_type[]': requestParam.contentsType,
                        'contents_type_cond': requestParam.contentsTypeCond,
                        'date': requestParam.date,
                        'using_season': requestParam.usingSeason,
                        'season': requestParam.season,
                        'ext_column_cond': requestParam.extColumnCond,
                        'exclude_topics_id': requestParam.excludeTopicsId,
                        'tag_category_id': requestParam.tagCategoryId,
                        'tag_search': requestParam.tagSearch,
                        'tag_id[]': requestParam.tagId,
                        'tag_cond': requestParam.tagCond,
                        'exclude_tag_id': requestParam.excludeTagId,
                        'my_favorite_list': requestParam.myFavoriteList,
                        'my_comment_list': requestParam.myCommentList,
                        'my_own_list': requestParam.myOwnList,
                        'order': requestParam.order,
                        'order_by_id': requestParam.orderById,
                        'id[]': requestParam.id,
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
     * ### **Topics::details (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **topics_group_id** `2`
     *
     * @param topicsId
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static getTopicsServiceRcmsApi1TopicsMultipleTopicsId(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI_1.OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield request_1.request({
                    headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage_1.LocalStorage.getAccessToken()}` } : {},
                    method: 'get',
                    path: `/rcms-api/1/topics/multiple/${requestParam.topicsId}`,
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
    /**
     *
     * ### **Topics::insert (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **topics_group_id** `2`
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postTopicsServiceRcmsApi1TopicsMultipleInsert(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI_1.OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield request_1.request({
                    headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage_1.LocalStorage.getAccessToken()}` } : {},
                    method: 'post',
                    path: `/rcms-api/1/topics/multiple/insert`,
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
     * ### **Topics::update (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **topics_group_id** `2`
     *
     * @param topicsId
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postTopicsServiceRcmsApi1TopicsMultipleUpdateTopicsId(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI_1.OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield request_1.request({
                    headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage_1.LocalStorage.getAccessToken()}` } : {},
                    method: 'post',
                    path: `/rcms-api/1/topics/multiple/update/${requestParam.topicsId}`,
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
     * ### **Topics::list (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **topics_group_id** `3`
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @param cnt Number of topics per page
     * @param pageId Page ID
     * @param filter Filter query
     * @param customSearchId search contdition
     * @param topicsKeyword Keyword
     * @param topicsKeywordCond Change the way of narrowing down by keyword (Default: AND)
     * @param contentsType The ID from the displayed category. All data will be displayed when this is not set.
     * @param contentsTypeCond Change the way of narrowing down by category ID (Default: OR)
     * @param date Date
     * @param usingSeason Use season (Yes: 1 | No: 0)
     * @param season Season
     * @param extColumnCond ext_column condition type (Default:OR)<br>
     * To specify an ext_col number set: 'ext_column_{no}_cond'
     * @param excludeTopicsId IDs of the excluded topics
     * @param tagCategoryId ID of the tag category to be displayed. (Default: All)
     * @param tagSearch narrowed by the value of the tag id.  yes:1 no:0
     * @param tagId Tag IDs that you would like to display
     * @param tagCond Change the way to narrow down tags (Default: OR)
     * @param excludeTagId Tag IDs that you would like to hide
     * @param myFavoriteList
     * @param myCommentList
     * @param myOwnList
     * @param order Set the sort order. Available param {0}
     * @param orderById
     * @param id IDs of the displayed topics
     * @result any
     * @throws ApiError
     */
    static getTopicsServiceRcmsApi1TopicsStatic(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI_1.OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield request_1.request({
                    headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage_1.LocalStorage.getAccessToken()}` } : {},
                    method: 'get',
                    path: `/rcms-api/1/topics/static`,
                    query: {
                        '_output_format': requestParam.outputFormat,
                        '_lang': requestParam.lang,
                        '_charset': requestParam.charset,
                        'cnt': requestParam.cnt,
                        'pageID': requestParam.pageId,
                        'filter': requestParam.filter,
                        'custom_search_id': requestParam.customSearchId,
                        'topics_keyword': requestParam.topicsKeyword,
                        'topics_keyword_cond': requestParam.topicsKeywordCond,
                        'contents_type[]': requestParam.contentsType,
                        'contents_type_cond': requestParam.contentsTypeCond,
                        'date': requestParam.date,
                        'using_season': requestParam.usingSeason,
                        'season': requestParam.season,
                        'ext_column_cond': requestParam.extColumnCond,
                        'exclude_topics_id': requestParam.excludeTopicsId,
                        'tag_category_id': requestParam.tagCategoryId,
                        'tag_search': requestParam.tagSearch,
                        'tag_id[]': requestParam.tagId,
                        'tag_cond': requestParam.tagCond,
                        'exclude_tag_id': requestParam.excludeTagId,
                        'my_favorite_list': requestParam.myFavoriteList,
                        'my_comment_list': requestParam.myCommentList,
                        'my_own_list': requestParam.myOwnList,
                        'order': requestParam.order,
                        'order_by_id': requestParam.orderById,
                        'id[]': requestParam.id,
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
     * ### **Topics::details (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **topics_group_id** `3`
     *
     * @param topicsId
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static getTopicsServiceRcmsApi1TopicsStaticTopicsId(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI_1.OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield request_1.request({
                    headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage_1.LocalStorage.getAccessToken()}` } : {},
                    method: 'get',
                    path: `/rcms-api/1/topics/static/${requestParam.topicsId}`,
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
    /**
     *
     * ### **Topics::delete (v1)**
     *
     *
     * @param topicsId
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postTopicsServiceRcmsApi1TopicsMultipleDeleteTopicsId(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI_1.OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield request_1.request({
                    headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage_1.LocalStorage.getAccessToken()}` } : {},
                    method: 'post',
                    path: `/rcms-api/1/topics/multiple/delete/${requestParam.topicsId}`,
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
    /**
     *
     * ### **Topics::list (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **topics_group_id** `1`
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @param cnt Number of topics per page
     * @param pageId Page ID
     * @param filter Filter query
     * @param customSearchId search contdition
     * @param topicsKeyword Keyword
     * @param topicsKeywordCond Change the way of narrowing down by keyword (Default: AND)
     * @param contentsType The ID from the displayed category. All data will be displayed when this is not set.
     * @param contentsTypeCond Change the way of narrowing down by category ID (Default: OR)
     * @param date Date
     * @param usingSeason Use season (Yes: 1 | No: 0)
     * @param season Season
     * @param extColumnCond ext_column condition type (Default:OR)<br>
     * To specify an ext_col number set: 'ext_column_{no}_cond'
     * @param excludeTopicsId IDs of the excluded topics
     * @param tagCategoryId ID of the tag category to be displayed. (Default: All)
     * @param tagSearch narrowed by the value of the tag id.  yes:1 no:0
     * @param tagId Tag IDs that you would like to display
     * @param tagCond Change the way to narrow down tags (Default: OR)
     * @param excludeTagId Tag IDs that you would like to hide
     * @param myFavoriteList
     * @param myCommentList
     * @param myOwnList
     * @param order Set the sort order. Available param {0}
     * @param orderById
     * @param id IDs of the displayed topics
     * @result any
     * @throws ApiError
     */
    static getTopicsServiceRcmsApi1TopicsPostprocess(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI_1.OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield request_1.request({
                    headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage_1.LocalStorage.getAccessToken()}` } : {},
                    method: 'get',
                    path: `/rcms-api/1/topics/postprocess`,
                    query: {
                        '_output_format': requestParam.outputFormat,
                        '_lang': requestParam.lang,
                        '_charset': requestParam.charset,
                        'cnt': requestParam.cnt,
                        'pageID': requestParam.pageId,
                        'filter': requestParam.filter,
                        'custom_search_id': requestParam.customSearchId,
                        'topics_keyword': requestParam.topicsKeyword,
                        'topics_keyword_cond': requestParam.topicsKeywordCond,
                        'contents_type[]': requestParam.contentsType,
                        'contents_type_cond': requestParam.contentsTypeCond,
                        'date': requestParam.date,
                        'using_season': requestParam.usingSeason,
                        'season': requestParam.season,
                        'ext_column_cond': requestParam.extColumnCond,
                        'exclude_topics_id': requestParam.excludeTopicsId,
                        'tag_category_id': requestParam.tagCategoryId,
                        'tag_search': requestParam.tagSearch,
                        'tag_id[]': requestParam.tagId,
                        'tag_cond': requestParam.tagCond,
                        'exclude_tag_id': requestParam.excludeTagId,
                        'my_favorite_list': requestParam.myFavoriteList,
                        'my_comment_list': requestParam.myCommentList,
                        'my_own_list': requestParam.myOwnList,
                        'order': requestParam.order,
                        'order_by_id': requestParam.orderById,
                        'id[]': requestParam.id,
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
exports.TopicsService = TopicsService;
(function (TopicsService) {
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
})(TopicsService = exports.TopicsService || (exports.TopicsService = {}));
exports.infos = [
    {
        path: '/rcms-api/1/topics1/${requestParam.topicsId}',
        httpMethod: 'get',
        class: TopicsService,
        className: 'TopicsService',
        method: TopicsService.getTopicsServiceRcmsApi1Topics1TopicsId,
        methodName: 'getTopicsServiceRcmsApi1Topics1TopicsId',
        auth: null,
        description: `
        export interface getTopicsServiceRcmsApi1Topics1TopicsIdRequest {
            topicsId: number,
            outputFormat?: string,
            lang?: string,
            charset?: string,
        };
        export type getTopicsServiceRcmsApi1Topics1TopicsIdResponse = any;
        `,
    },
    {
        path: '/rcms-api/1/topics1',
        httpMethod: 'get',
        class: TopicsService,
        className: 'TopicsService',
        method: TopicsService.getTopicsServiceRcmsApi1Topics1,
        methodName: 'getTopicsServiceRcmsApi1Topics1',
        auth: null,
        description: `
        export interface getTopicsServiceRcmsApi1Topics1Request {
            outputFormat?: string,
            lang?: string,
            charset?: string,
            cnt?: number,
            pageId?: number,
            filter?: string,
            customSearchId?: string,
            topicsKeyword?: string,
            topicsKeywordCond?: string,
            contentsType?: Array<number>,
            contentsTypeCond?: string,
            date?: string,
            usingSeason?: string,
            season?: number,
            extColumnCond?: string,
            excludeTopicsId?: string,
            tagCategoryId?: number,
            tagSearch?: string,
            tagId?: Array<number>,
            tagCond?: string,
            excludeTagId?: string,
            myFavoriteList?: number,
            myCommentList?: number,
            myOwnList?: string,
            order?: string,
            orderById?: string,
            id?: Array<number>,
        };
        export type getTopicsServiceRcmsApi1Topics1Response = any;
        `,
    },
    {
        path: '/rcms-api/1/topics1/insert',
        httpMethod: 'post',
        class: TopicsService,
        className: 'TopicsService',
        method: TopicsService.postTopicsServiceRcmsApi1Topics1Insert,
        methodName: 'postTopicsServiceRcmsApi1Topics1Insert',
        auth: null,
        description: `
        export interface postTopicsServiceRcmsApi1Topics1InsertRequest {
            requestBody: { subject: string ,contents_type: string ,ymd: string ,open_type: string ,topics_flg: string ,contents: string ,regular_flg: number ,tag_id: string ,ext_col_01: string ,ext_col_02: string ,ext_col_03: { key: string ,label: string  } | '' | '1' | '2' | '3' ,ext_col_04: { key: string ,label: string  } | '1' | '2' | '3' ,ext_col_07: string | string | { ymd: string } ,ext_col_08: string | string | { ymd: string ,h: number ,i: number  } ,ext_col_05: any ,ext_col_15: any ,ext_col_06: { key: string ,label: string  } | '' | '1' | '2' | '3' | '4' | '5' ,ext_col_09: { module_type: string ,module_id: number  } | number ,ext_col_11: any ,ext_col_17: any ,ext_jsn_12: any ,ext_col_13: string ,ext_col_14: string ,ext_col_16: any ,ext_col_18: string ,validate_only: boolean  } | any,
            outputFormat?: string,
            lang?: string,
            charset?: string,
        };
        export type postTopicsServiceRcmsApi1Topics1InsertResponse = any;
        `,
    },
    {
        path: '/rcms-api/1/topics1/update/${requestParam.topicsId}',
        httpMethod: 'post',
        class: TopicsService,
        className: 'TopicsService',
        method: TopicsService.postTopicsServiceRcmsApi1Topics1UpdateTopicsId,
        methodName: 'postTopicsServiceRcmsApi1Topics1UpdateTopicsId',
        auth: null,
        description: `
        export interface postTopicsServiceRcmsApi1Topics1UpdateTopicsIdRequest {
            topicsId: number,
            requestBody: { subject: string ,contents_type: string ,ymd: string ,open_type: string ,topics_flg: string ,contents: string ,regular_flg: number ,tag_id: string ,ext_col_01: string ,ext_col_02: string ,ext_col_03: { key: string ,label: string  } | '' | '1' | '2' | '3' ,ext_col_04: { key: string ,label: string  } | '1' | '2' | '3' ,ext_col_07: string | string | { ymd: string } ,ext_col_08: string | string | { ymd: string ,h: number ,i: number  } ,ext_col_05: any ,ext_col_15: any ,ext_col_06: { key: string ,label: string  } | '' | '1' | '2' | '3' | '4' | '5' ,ext_col_09: { module_type: string ,module_id: number  } | number ,ext_col_11: any ,ext_col_17: any ,ext_jsn_12: any ,ext_col_13: string ,ext_col_14: string ,ext_col_16: any ,ext_col_18: string ,validate_only: boolean  } | any,
            outputFormat?: string,
            lang?: string,
            charset?: string,
        };
        export type postTopicsServiceRcmsApi1Topics1UpdateTopicsIdResponse = any;
        `,
    },
    {
        path: '/rcms-api/1/topics1/delete/${requestParam.topicsId}',
        httpMethod: 'post',
        class: TopicsService,
        className: 'TopicsService',
        method: TopicsService.postTopicsServiceRcmsApi1Topics1DeleteTopicsId,
        methodName: 'postTopicsServiceRcmsApi1Topics1DeleteTopicsId',
        auth: null,
        description: `
        export interface postTopicsServiceRcmsApi1Topics1DeleteTopicsIdRequest {
            topicsId: number,
            outputFormat?: string,
            lang?: string,
            charset?: string,
        };
        export type postTopicsServiceRcmsApi1Topics1DeleteTopicsIdResponse = any;
        `,
    },
    {
        path: '/rcms-api/1/topics/multiple',
        httpMethod: 'get',
        class: TopicsService,
        className: 'TopicsService',
        method: TopicsService.getTopicsServiceRcmsApi1TopicsMultiple,
        methodName: 'getTopicsServiceRcmsApi1TopicsMultiple',
        auth: null,
        description: `
        export interface getTopicsServiceRcmsApi1TopicsMultipleRequest {
            outputFormat?: string,
            lang?: string,
            charset?: string,
            cnt?: number,
            pageId?: number,
            filter?: string,
            customSearchId?: string,
            topicsKeyword?: string,
            topicsKeywordCond?: string,
            contentsType?: Array<number>,
            contentsTypeCond?: string,
            date?: string,
            usingSeason?: string,
            season?: number,
            extColumnCond?: string,
            excludeTopicsId?: string,
            tagCategoryId?: number,
            tagSearch?: string,
            tagId?: Array<number>,
            tagCond?: string,
            excludeTagId?: string,
            myFavoriteList?: number,
            myCommentList?: number,
            myOwnList?: string,
            order?: string,
            orderById?: string,
            id?: Array<number>,
        };
        export type getTopicsServiceRcmsApi1TopicsMultipleResponse = any;
        `,
    },
    {
        path: '/rcms-api/1/topics/multiple/${requestParam.topicsId}',
        httpMethod: 'get',
        class: TopicsService,
        className: 'TopicsService',
        method: TopicsService.getTopicsServiceRcmsApi1TopicsMultipleTopicsId,
        methodName: 'getTopicsServiceRcmsApi1TopicsMultipleTopicsId',
        auth: null,
        description: `
        export interface getTopicsServiceRcmsApi1TopicsMultipleTopicsIdRequest {
            topicsId: number,
            outputFormat?: string,
            lang?: string,
            charset?: string,
        };
        export type getTopicsServiceRcmsApi1TopicsMultipleTopicsIdResponse = any;
        `,
    },
    {
        path: '/rcms-api/1/topics/multiple/insert',
        httpMethod: 'post',
        class: TopicsService,
        className: 'TopicsService',
        method: TopicsService.postTopicsServiceRcmsApi1TopicsMultipleInsert,
        methodName: 'postTopicsServiceRcmsApi1TopicsMultipleInsert',
        auth: null,
        description: `
        export interface postTopicsServiceRcmsApi1TopicsMultipleInsertRequest {
            requestBody: { subject: string ,contents_type: string ,ymd: string ,open_type: string ,topics_flg: string ,contents: string ,regular_flg: number ,tag_id: string ,ext_col_01: string ,ext_col_02: string ,ext_col_03: { key: string ,label: string  } | '' | '1' | '2' | '3' ,ext_col_04: { key: string ,label: string  } | '1' | '2' | '3' ,ext_col_07: string | string | { ymd: string } ,ext_col_08: string | string | { ymd: string ,h: number ,i: number  } ,ext_col_05: any ,ext_col_15: any ,ext_col_06: { key: string ,label: string  } | '' | '1' | '2' | '3' | '4' | '5' ,ext_col_09: { module_type: string ,module_id: number  } | number ,ext_col_11: any ,ext_col_17: any ,ext_jsn_12: any ,ext_col_13: string ,ext_col_14: string ,ext_col_16: any ,ext_col_18: string ,validate_only: boolean  } | any,
            outputFormat?: string,
            lang?: string,
            charset?: string,
        };
        export type postTopicsServiceRcmsApi1TopicsMultipleInsertResponse = any;
        `,
    },
    {
        path: '/rcms-api/1/topics/multiple/update/${requestParam.topicsId}',
        httpMethod: 'post',
        class: TopicsService,
        className: 'TopicsService',
        method: TopicsService.postTopicsServiceRcmsApi1TopicsMultipleUpdateTopicsId,
        methodName: 'postTopicsServiceRcmsApi1TopicsMultipleUpdateTopicsId',
        auth: null,
        description: `
        export interface postTopicsServiceRcmsApi1TopicsMultipleUpdateTopicsIdRequest {
            topicsId: number,
            requestBody: { subject: string ,contents_type: string ,ymd: string ,open_type: string ,topics_flg: string ,contents: string ,regular_flg: number ,tag_id: string ,ext_col_01: string ,ext_col_02: string ,ext_col_03: { key: string ,label: string  } | '' | '1' | '2' | '3' ,ext_col_04: { key: string ,label: string  } | '1' | '2' | '3' ,ext_col_07: string | string | { ymd: string } ,ext_col_08: string | string | { ymd: string ,h: number ,i: number  } ,ext_col_05: any ,ext_col_15: any ,ext_col_06: { key: string ,label: string  } | '' | '1' | '2' | '3' | '4' | '5' ,ext_col_09: { module_type: string ,module_id: number  } | number ,ext_col_11: any ,ext_col_17: any ,ext_jsn_12: any ,ext_col_13: string ,ext_col_14: string ,ext_col_16: any ,ext_col_18: string ,validate_only: boolean  } | any,
            outputFormat?: string,
            lang?: string,
            charset?: string,
        };
        export type postTopicsServiceRcmsApi1TopicsMultipleUpdateTopicsIdResponse = any;
        `,
    },
    {
        path: '/rcms-api/1/topics/static',
        httpMethod: 'get',
        class: TopicsService,
        className: 'TopicsService',
        method: TopicsService.getTopicsServiceRcmsApi1TopicsStatic,
        methodName: 'getTopicsServiceRcmsApi1TopicsStatic',
        auth: null,
        description: `
        export interface getTopicsServiceRcmsApi1TopicsStaticRequest {
            outputFormat?: string,
            lang?: string,
            charset?: string,
            cnt?: number,
            pageId?: number,
            filter?: string,
            customSearchId?: string,
            topicsKeyword?: string,
            topicsKeywordCond?: string,
            contentsType?: Array<number>,
            contentsTypeCond?: string,
            date?: string,
            usingSeason?: string,
            season?: number,
            extColumnCond?: string,
            excludeTopicsId?: string,
            tagCategoryId?: number,
            tagSearch?: string,
            tagId?: Array<number>,
            tagCond?: string,
            excludeTagId?: string,
            myFavoriteList?: number,
            myCommentList?: number,
            myOwnList?: string,
            order?: string,
            orderById?: string,
            id?: Array<number>,
        };
        export type getTopicsServiceRcmsApi1TopicsStaticResponse = any;
        `,
    },
    {
        path: '/rcms-api/1/topics/static/${requestParam.topicsId}',
        httpMethod: 'get',
        class: TopicsService,
        className: 'TopicsService',
        method: TopicsService.getTopicsServiceRcmsApi1TopicsStaticTopicsId,
        methodName: 'getTopicsServiceRcmsApi1TopicsStaticTopicsId',
        auth: null,
        description: `
        export interface getTopicsServiceRcmsApi1TopicsStaticTopicsIdRequest {
            topicsId: number,
            outputFormat?: string,
            lang?: string,
            charset?: string,
        };
        export type getTopicsServiceRcmsApi1TopicsStaticTopicsIdResponse = any;
        `,
    },
    {
        path: '/rcms-api/1/topics/multiple/delete/${requestParam.topicsId}',
        httpMethod: 'post',
        class: TopicsService,
        className: 'TopicsService',
        method: TopicsService.postTopicsServiceRcmsApi1TopicsMultipleDeleteTopicsId,
        methodName: 'postTopicsServiceRcmsApi1TopicsMultipleDeleteTopicsId',
        auth: null,
        description: `
        export interface postTopicsServiceRcmsApi1TopicsMultipleDeleteTopicsIdRequest {
            topicsId: number,
            outputFormat?: string,
            lang?: string,
            charset?: string,
        };
        export type postTopicsServiceRcmsApi1TopicsMultipleDeleteTopicsIdResponse = any;
        `,
    },
    {
        path: '/rcms-api/1/topics/postprocess',
        httpMethod: 'get',
        class: TopicsService,
        className: 'TopicsService',
        method: TopicsService.getTopicsServiceRcmsApi1TopicsPostprocess,
        methodName: 'getTopicsServiceRcmsApi1TopicsPostprocess',
        auth: null,
        description: `
        export interface getTopicsServiceRcmsApi1TopicsPostprocessRequest {
            outputFormat?: string,
            lang?: string,
            charset?: string,
            cnt?: number,
            pageId?: number,
            filter?: string,
            customSearchId?: string,
            topicsKeyword?: string,
            topicsKeywordCond?: string,
            contentsType?: Array<number>,
            contentsTypeCond?: string,
            date?: string,
            usingSeason?: string,
            season?: number,
            extColumnCond?: string,
            excludeTopicsId?: string,
            tagCategoryId?: number,
            tagSearch?: string,
            tagId?: Array<number>,
            tagCond?: string,
            excludeTagId?: string,
            myFavoriteList?: number,
            myCommentList?: number,
            myOwnList?: string,
            order?: string,
            orderById?: string,
            id?: Array<number>,
        };
        export type getTopicsServiceRcmsApi1TopicsPostprocessResponse = any;
        `,
    },
];
