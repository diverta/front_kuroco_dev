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
exports.infos = exports.EcService = void 0;
const ApiError_1 = require("../core/ApiError");
const request_1 = require("../core/request");
const OpenAPI_1 = require("../core/OpenAPI");
const LocalStorage_1 = require("../core/LocalStorage");
class EcService {
    /**
     *
     * ### **ECProduct::list (v1)**
     *
     *
     * @param outputFormat Format (json|xml|csv|zip)
     * @param lang Language
     * @param charset Charset
     * @param cnt Number of products per page
     * @param pageId Page ID
     * @param filter Filter query
     * @param topicsId Topic ID
     * @param topicsGroupId Topics group ID
     * @param productId Product ID to be displayed, all of the items of interest if there is no setting
     * @param myOrderFlg
     * @param ymdSortChange
     * @param topicsKeyword Keyword
     * @param topicsKeywordCond Change the way of narrowing down by keyword (Default: AND)
     * @param ecExtOptionsSearch narrowed by the value of the extend item option.  yes:1 no:0
     * @param searchEcExtCol
     * @param order Set the sort order. Available param {0}
     * @result any
     * @throws ApiError
     */
    static getEcServiceRcmsApi1EcProducts(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI_1.OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield request_1.request({
                    headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage_1.LocalStorage.getAccessToken()}` } : {},
                    method: 'get',
                    path: `/rcms-api/1/ec/products`,
                    query: {
                        '_output_format': requestParam.outputFormat,
                        '_lang': requestParam.lang,
                        '_charset': requestParam.charset,
                        'cnt': requestParam.cnt,
                        'pageID': requestParam.pageId,
                        'filter': requestParam.filter,
                        'topics_id': requestParam.topicsId,
                        'topics_group_id': requestParam.topicsGroupId,
                        'product_id[]': requestParam.productId,
                        'my_order_flg': requestParam.myOrderFlg,
                        'ymd_sort_change': requestParam.ymdSortChange,
                        'topics_keyword': requestParam.topicsKeyword,
                        'topics_keyword_cond': requestParam.topicsKeywordCond,
                        'ec_ext_options_search': requestParam.ecExtOptionsSearch,
                        'search_ec_ext_col[]': requestParam.searchEcExtCol,
                        'order[]': requestParam.order,
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
     * ### **ECProduct::details (v1)**
     *
     *
     * @param productId
     * @param outputFormat Format (json|xml|csv|zip)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static getEcServiceRcmsApi1EcProductsProductId(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI_1.OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield request_1.request({
                    headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage_1.LocalStorage.getAccessToken()}` } : {},
                    method: 'get',
                    path: `/rcms-api/1/ec/products/${requestParam.productId}`,
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
     * ### **ECCart::details (v1)**
     *
     *
     * @param ecCartId
     * @param outputFormat Format (json|xml|csv|zip)
     * @param lang Language
     * @param charset Charset
     * @param zipCode
     * @param tdfkCd
     * @result any
     * @throws ApiError
     */
    static getEcServiceRcmsApi1EcCartEcCartId(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI_1.OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield request_1.request({
                    headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage_1.LocalStorage.getAccessToken()}` } : {},
                    method: 'get',
                    path: `/rcms-api/1/ec/cart/${requestParam.ecCartId}`,
                    query: {
                        '_output_format': requestParam.outputFormat,
                        '_lang': requestParam.lang,
                        '_charset': requestParam.charset,
                        'zip_code': requestParam.zipCode,
                        'tdfk_cd': requestParam.tdfkCd,
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
     * ### **ECCart::add (v1)**
     *
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv|zip)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postEcServiceRcmsApi1EcCartAdd(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI_1.OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield request_1.request({
                    headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage_1.LocalStorage.getAccessToken()}` } : {},
                    method: 'post',
                    path: `/rcms-api/1/ec/cart/add`,
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
     * ### **ECCart::update (v1)**
     *
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv|zip)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postEcServiceRcmsApi1EcCartUpdate(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI_1.OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield request_1.request({
                    headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage_1.LocalStorage.getAccessToken()}` } : {},
                    method: 'post',
                    path: `/rcms-api/1/ec/cart/update`,
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
     * ### **ECOrder::total (v1)**
     *
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv|zip)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postEcServiceRcmsApi1EcOrderTotal(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI_1.OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield request_1.request({
                    headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage_1.LocalStorage.getAccessToken()}` } : {},
                    method: 'post',
                    path: `/rcms-api/1/ec/order/total`,
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
     * ### **ECPayment::list (v1)**
     *
     *
     * @param outputFormat Format (json|xml|csv|zip)
     * @param lang Language
     * @param charset Charset
     * @param ecCartId
     * @param serialCode Coupon Code
     * @param usePoint
     * @result any
     * @throws ApiError
     */
    static getEcServiceRcmsApi1EcPayments(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI_1.OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield request_1.request({
                    headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage_1.LocalStorage.getAccessToken()}` } : {},
                    method: 'get',
                    path: `/rcms-api/1/ec/payments`,
                    query: {
                        '_output_format': requestParam.outputFormat,
                        '_lang': requestParam.lang,
                        '_charset': requestParam.charset,
                        'ec_cart_id': requestParam.ecCartId,
                        'serial_code': requestParam.serialCode,
                        'use_point': requestParam.usePoint,
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
     * ### **ECPayment::details (v1)**
     *
     *
     * @param ecPaymentId
     * @param outputFormat Format (json|xml|csv|zip)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static getEcServiceRcmsApi1EcPaymentsEcPaymentId(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI_1.OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield request_1.request({
                    headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage_1.LocalStorage.getAccessToken()}` } : {},
                    method: 'get',
                    path: `/rcms-api/1/ec/payments/${requestParam.ecPaymentId}`,
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
     * ### **ECOrder::purchase (v1)**
     *
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv|zip)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postEcServiceRcmsApi1EcPurchase(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI_1.OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield request_1.request({
                    headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage_1.LocalStorage.getAccessToken()}` } : {},
                    method: 'post',
                    path: `/rcms-api/1/ec/purchase`,
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
exports.EcService = EcService;
(function (EcService) {
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
})(EcService = exports.EcService || (exports.EcService = {}));
exports.infos = [
    {
        path: '/rcms-api/1/ec/products',
        httpMethod: 'get',
        class: EcService,
        className: 'EcService',
        method: EcService.getEcServiceRcmsApi1EcProducts,
        methodName: 'getEcServiceRcmsApi1EcProducts',
        auth: null,
        description: `
        export interface getEcServiceRcmsApi1EcProductsRequest {
            outputFormat?: string,
            lang?: string,
            charset?: string,
            cnt?: number,
            pageId?: number,
            filter?: string,
            topicsId?: number,
            topicsGroupId?: number,
            productId?: Array<number>,
            myOrderFlg?: number,
            ymdSortChange?: string,
            topicsKeyword?: string,
            topicsKeywordCond?: string,
            ecExtOptionsSearch?: number,
            searchEcExtCol?: Array<string>,
            order?: Array<string>,
        };
        export type getEcServiceRcmsApi1EcProductsResponse = any;
        `,
    },
    {
        path: '/rcms-api/1/ec/products/${requestParam.productId}',
        httpMethod: 'get',
        class: EcService,
        className: 'EcService',
        method: EcService.getEcServiceRcmsApi1EcProductsProductId,
        methodName: 'getEcServiceRcmsApi1EcProductsProductId',
        auth: null,
        description: `
        export interface getEcServiceRcmsApi1EcProductsProductIdRequest {
            productId: number,
            outputFormat?: string,
            lang?: string,
            charset?: string,
        };
        export type getEcServiceRcmsApi1EcProductsProductIdResponse = any;
        `,
    },
    {
        path: '/rcms-api/1/ec/cart/${requestParam.ecCartId}',
        httpMethod: 'get',
        class: EcService,
        className: 'EcService',
        method: EcService.getEcServiceRcmsApi1EcCartEcCartId,
        methodName: 'getEcServiceRcmsApi1EcCartEcCartId',
        auth: null,
        description: `
        export interface getEcServiceRcmsApi1EcCartEcCartIdRequest {
            ecCartId: number,
            outputFormat?: string,
            lang?: string,
            charset?: string,
            zipCode?: string,
            tdfkCd?: string,
        };
        export type getEcServiceRcmsApi1EcCartEcCartIdResponse = any;
        `,
    },
    {
        path: '/rcms-api/1/ec/cart/add',
        httpMethod: 'post',
        class: EcService,
        className: 'EcService',
        method: EcService.postEcServiceRcmsApi1EcCartAdd,
        methodName: 'postEcServiceRcmsApi1EcCartAdd',
        auth: null,
        description: `
        export interface postEcServiceRcmsApi1EcCartAddRequest {
            requestBody: {
                /**
                 * カートID
                 */
                ec_cart_id?: number,
                /**
                 * Product
                 */
                item?: {
                    /**
                     * Product ID
                     */
                    product_id: number,
                    /**
                     * Quantity
                     */
                    quantity: number,
                },
            },
            outputFormat?: string,
            lang?: string,
            charset?: string,
        };
        export type postEcServiceRcmsApi1EcCartAddResponse = any;
        `,
    },
    {
        path: '/rcms-api/1/ec/cart/update',
        httpMethod: 'post',
        class: EcService,
        className: 'EcService',
        method: EcService.postEcServiceRcmsApi1EcCartUpdate,
        methodName: 'postEcServiceRcmsApi1EcCartUpdate',
        auth: null,
        description: `
        export interface postEcServiceRcmsApi1EcCartUpdateRequest {
            requestBody: {
                /**
                 * カートID
                 */
                ec_cart_id?: number,
                /**
                 * Product
                 */
                item?: {
                    /**
                     * Product ID
                     */
                    product_id: number,
                    /**
                     * Quantity
                     */
                    quantity: number,
                },
            },
            outputFormat?: string,
            lang?: string,
            charset?: string,
        };
        export type postEcServiceRcmsApi1EcCartUpdateResponse = any;
        `,
    },
    {
        path: '/rcms-api/1/ec/order/total',
        httpMethod: 'post',
        class: EcService,
        className: 'EcService',
        method: EcService.postEcServiceRcmsApi1EcOrderTotal,
        methodName: 'postEcServiceRcmsApi1EcOrderTotal',
        auth: null,
        description: `
        export interface postEcServiceRcmsApi1EcOrderTotalRequest {
            requestBody: {
                /**
                 * カートID
                 */
                ec_cart_id?: number,
                order_products?: any,
                /**
                 * Product ID
                 */
                product_id?: number,
                /**
                 * Quantity
                 */
                quantity?: number,
                /**
                 * 支払方法ID
                 */
                ec_payment_id?: number,
                /**
                 * Use discount price
                 */
                discount?: {
                    /**
                     * Use point
                     */
                    point?: number,
                    /**
                     * Coupon Code
                     */
                    serial_code?: string,
                },
                /**
                 * 配送先住所
                 */
                shipping_address?: 'default' | { name1: string ,name2: string ,zip_code: string ,tdfk_cd: string ,address1: string ,address2: string ,address3: string ,tel: string  },
            },
            outputFormat?: string,
            lang?: string,
            charset?: string,
        };
        export type postEcServiceRcmsApi1EcOrderTotalResponse = any;
        `,
    },
    {
        path: '/rcms-api/1/ec/payments',
        httpMethod: 'get',
        class: EcService,
        className: 'EcService',
        method: EcService.getEcServiceRcmsApi1EcPayments,
        methodName: 'getEcServiceRcmsApi1EcPayments',
        auth: null,
        description: `
        export interface getEcServiceRcmsApi1EcPaymentsRequest {
            outputFormat?: string,
            lang?: string,
            charset?: string,
            ecCartId?: number,
            serialCode?: string,
            usePoint?: number,
        };
        export type getEcServiceRcmsApi1EcPaymentsResponse = any;
        `,
    },
    {
        path: '/rcms-api/1/ec/payments/${requestParam.ecPaymentId}',
        httpMethod: 'get',
        class: EcService,
        className: 'EcService',
        method: EcService.getEcServiceRcmsApi1EcPaymentsEcPaymentId,
        methodName: 'getEcServiceRcmsApi1EcPaymentsEcPaymentId',
        auth: null,
        description: `
        export interface getEcServiceRcmsApi1EcPaymentsEcPaymentIdRequest {
            ecPaymentId: number,
            outputFormat?: string,
            lang?: string,
            charset?: string,
        };
        export type getEcServiceRcmsApi1EcPaymentsEcPaymentIdResponse = any;
        `,
    },
    {
        path: '/rcms-api/1/ec/purchase',
        httpMethod: 'post',
        class: EcService,
        className: 'EcService',
        method: EcService.postEcServiceRcmsApi1EcPurchase,
        methodName: 'postEcServiceRcmsApi1EcPurchase',
        auth: null,
        description: `
        export interface postEcServiceRcmsApi1EcPurchaseRequest {
            requestBody: {
                /**
                 * カートID
                 */
                ec_cart_id?: number,
                order_products?: any,
                /**
                 * Product ID
                 */
                product_id?: number,
                /**
                 * Quantity
                 */
                quantity?: number,
                /**
                 * 支払方法ID
                 */
                ec_payment_id: number,
                /**
                 * Use discount price
                 */
                discount?: {
                    /**
                     * Use point
                     */
                    point?: number,
                    /**
                     * Coupon Code
                     */
                    serial_code?: string,
                },
                /**
                 * 配送先住所
                 */
                shipping_address?: 'default' | { name1: string ,name2: string ,zip_code: string ,tdfk_cd: string ,address1: string ,address2: string ,address3: string ,tel: string  },
                /**
                 * Orderer information
                 */
                orderer?: {
                    /**
                     * Family name
                     */
                    name1?: string,
                    /**
                     * Given name
                     */
                    name2?: string,
                    zip_code?: string,
                    /**
                     * * 01 => 北海道
                     * * 02 => 青森県
                     * * 03 => 岩手県
                     * * 04 => 宮城県
                     * * 05 => 秋田県
                     * * 06 => 山形県
                     * * 07 => 福島県
                     * * 08 => 茨城県
                     * * 09 => 栃木県
                     * * 10 => 群馬県
                     * * 11 => 埼玉県
                     * * 12 => 千葉県
                     * * 13 => 東京都
                     * * 14 => 神奈川県
                     * * 15 => 新潟県
                     * * 16 => 富山県
                     * * 17 => 石川県
                     * * 18 => 福井県
                     * * 19 => 山梨県
                     * * 20 => 長野県
                     * * 21 => 岐阜県
                     * * 22 => 静岡県
                     * * 23 => 愛知県
                     * * 24 => 三重県
                     * * 25 => 滋賀県
                     * * 26 => 京都府
                     * * 27 => 大阪府
                     * * 28 => 兵庫県
                     * * 29 => 奈良県
                     * * 30 => 和歌山県
                     * * 31 => 鳥取県
                     * * 32 => 島根県
                     * * 33 => 岡山県
                     * * 34 => 広島県
                     * * 35 => 山口県
                     * * 36 => 徳島県
                     * * 37 => 香川県
                     * * 38 => 愛媛県
                     * * 39 => 高知県
                     * * 40 => 福岡県
                     * * 41 => 佐賀県
                     * * 42 => 長崎県
                     * * 43 => 熊本県
                     * * 44 => 大分県
                     * * 45 => 宮崎県
                     * * 46 => 鹿児島県
                     * * 47 => 沖縄県
                     * * 99 => 海外
                     */
                    tdfk_cd?: ('01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '20' | '21' | '22' | '23' | '24' | '25' | '26' | '27' | '28' | '29' | '30' | '31' | '32' | '33' | '34' | '35' | '36' | '37' | '38' | '39' | '40' | '41' | '42' | '43' | '44' | '45' | '46' | '47' | '99'),
                    /**
                     * Address1
                     */
                    address1?: string,
                    /**
                     * Address2
                     */
                    address2?: string,
                    /**
                     * Address3
                     */
                    address3?: string,
                    /**
                     * TEL
                     */
                    tel?: string,
                    /**
                     * [Only for guest] E-mail
                     */
                    email?: string,
                },
                /**
                 * Token
                 */
                card_token?: string,
                order_note?: string,
                /**
                 * Validate
                 */
                validate_only?: boolean,
            },
            outputFormat?: string,
            lang?: string,
            charset?: string,
        };
        export type postEcServiceRcmsApi1EcPurchaseResponse = any;
        `,
    },
];
