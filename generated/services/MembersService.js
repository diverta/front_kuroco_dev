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
exports.infos = exports.MembersService = void 0;
const ApiError_1 = require("../core/ApiError");
const request_1 = require("../core/request");
const OpenAPI_1 = require("../core/OpenAPI");
const LocalStorage_1 = require("../core/LocalStorage");
class MembersService {
    /**
     *
     * ### **Member::list (v1)**
     *
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @param id Member ID
     * @param cnt Number of topics per page
     * @param pageId Page ID
     * @param sName Member search
     * @param sEmail Member search
     * @param sTel Member search
     * @param sAddress Member search
     * @param sTdfkCd Member search
     * @param groupId Member search
     * @result any
     * @throws ApiError
     */
    static getMembersServiceRcmsApi1Members(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI_1.OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield request_1.request({
                    headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage_1.LocalStorage.getAccessToken()}` } : {},
                    method: 'get',
                    path: `/rcms-api/1/members`,
                    query: {
                        '_output_format': requestParam.outputFormat,
                        '_lang': requestParam.lang,
                        '_charset': requestParam.charset,
                        'id[]': requestParam.id,
                        'cnt': requestParam.cnt,
                        'pageID': requestParam.pageId,
                        's_name': requestParam.sName,
                        's_email': requestParam.sEmail,
                        's_tel': requestParam.sTel,
                        's_address': requestParam.sAddress,
                        's_tdfk_cd': requestParam.sTdfkCd,
                        'group_id': requestParam.groupId,
                    },
                });
            });
            let result = yield request();
            if (shouldHookToken && !result.ok && result.status === 401) {
                result = yield Promise.resolve().then(() => __importStar(require('../core/Auth'))).then(({ Auth }) => Auth.retryRequest(request, result));
            }
            ApiError_1.catchGenericError(result);
            return result.body;
        });
    }
    /**
     *
     * ### **Member::details (v1)**
     *
     *
     * @param memberId
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static getMembersServiceRcmsApi1MembersMemberId(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI_1.OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield request_1.request({
                    headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage_1.LocalStorage.getAccessToken()}` } : {},
                    method: 'get',
                    path: `/rcms-api/1/members/${requestParam.memberId}`,
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
            return result.body;
        });
    }
    /**
     *
     * ### **Member::insert (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **default_group_id** `2`
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postMembersServiceRcmsApi1MembersInsert(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI_1.OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield request_1.request({
                    headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage_1.LocalStorage.getAccessToken()}` } : {},
                    method: 'post',
                    path: `/rcms-api/1/members/insert`,
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
            return result.body;
        });
    }
    /**
     *
     * ### **Member::update (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **allowed_group_ids** `2`
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postMembersServiceRcmsApi1MembersUpdate(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI_1.OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield request_1.request({
                    headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage_1.LocalStorage.getAccessToken()}` } : {},
                    method: 'post',
                    path: `/rcms-api/1/members/update`,
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
            return result.body;
        });
    }
    /**
     *
     * ### **Member::delete (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **allowed_group_ids** `2`
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postMembersServiceRcmsApi1MembersDelete(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI_1.OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield request_1.request({
                    headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage_1.LocalStorage.getAccessToken()}` } : {},
                    method: 'post',
                    path: `/rcms-api/1/members/delete`,
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
            return result.body;
        });
    }
    /**
     *
     * ### **Member::update (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **self_only** `true`
     *
     * > **allowed_group_ids** `2`
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postMembersServiceRcmsApi1MeUpdate(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI_1.OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield request_1.request({
                    headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage_1.LocalStorage.getAccessToken()}` } : {},
                    method: 'post',
                    path: `/rcms-api/1/me/update`,
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
            return result.body;
        });
    }
    /**
     *
     * ### **Member::delete (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **self_only** `true`
     *
     * > **allowed_group_ids** `2`
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postMembersServiceRcmsApi1MeDelete(requestParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldHookToken = Object.keys({
                'Token-Auth': OpenAPI_1.OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;
            const request = () => __awaiter(this, void 0, void 0, function* () {
                return yield request_1.request({
                    headers: shouldHookToken ? { [OpenAPI_1.OpenAPI.SECURITY['Token-Auth'].name]: `${LocalStorage_1.LocalStorage.getAccessToken()}` } : {},
                    method: 'post',
                    path: `/rcms-api/1/me/delete`,
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
            return result.body;
        });
    }
}
exports.MembersService = MembersService;
(function (MembersService) {
    ;
    ;
    ;
    ;
    ;
    ;
    ;
})(MembersService = exports.MembersService || (exports.MembersService = {}));
exports.infos = [
    {
        path: '/rcms-api/1/members',
        httpMethod: 'get',
        class: MembersService,
        className: 'MembersService',
        method: MembersService.getMembersServiceRcmsApi1Members,
        methodName: 'getMembersServiceRcmsApi1Members',
        auth: null,
        description: `
        export interface getMembersServiceRcmsApi1MembersRequest {
            outputFormat?: string,
            lang?: string,
            charset?: string,
            id?: Array<number>,
            cnt?: number,
            pageId?: number,
            sName?: string,
            sEmail?: string,
            sTel?: string,
            sAddress?: string,
            sTdfkCd?: string,
            groupId?: number,
        };
        export type getMembersServiceRcmsApi1MembersResponse = any;
        `,
    },
    {
        path: '/rcms-api/1/members/${requestParam.memberId}',
        httpMethod: 'get',
        class: MembersService,
        className: 'MembersService',
        method: MembersService.getMembersServiceRcmsApi1MembersMemberId,
        methodName: 'getMembersServiceRcmsApi1MembersMemberId',
        auth: null,
        description: `
        export interface getMembersServiceRcmsApi1MembersMemberIdRequest {
            memberId: number,
            outputFormat?: string,
            lang?: string,
            charset?: string,
        };
        export type getMembersServiceRcmsApi1MembersMemberIdResponse = any;
        `,
    },
    {
        path: '/rcms-api/1/members/insert',
        httpMethod: 'post',
        class: MembersService,
        className: 'MembersService',
        method: MembersService.postMembersServiceRcmsApi1MembersInsert,
        methodName: 'postMembersServiceRcmsApi1MembersInsert',
        auth: null,
        description: `
        export interface postMembersServiceRcmsApi1MembersInsertRequest {
            requestBody: {
                /**
                 * Email
                 */
                email: string,
                /**
                 * Login ID
                 */
                login_id?: string,
                /**
                 * Password
                 */
                login_pwd: string,
                /**
                 * Nickname
                 */
                nickname: string,
                /**
                 * Family name
                 */
                name1?: string,
                /**
                 * Given name
                 */
                name2?: string,
                /**
                 * Sex
                 */
                sex?: ('m' | 'f' | 'e'),
                /**
                 * Date of birth
                 */
                birth?: string,
                /**
                 * Image1
                 */
                member_photo?: {
                    /**
                     * File ID returned by File Upload API
                     */
                    file_id?: string,
                    /**
                     * File name
                     */
                    file_nm?: string,
                    /**
                     * Description
                     */
                    desc?: string,
                    extension?: ('jpg' | 'gif' | 'png'),
                },
                /**
                 * Text
                 */
                text: string,
                /**
                 * Textarea
                 */
                textarea?: string,
                /**
                 * Radio
                 * * 1 => radioOption1
                 * * 2 => radioOption2
                 * * 3 => radioOption3
                 */
                radio?: { key: string ,label: string  } | '' | '1' | '2' | '3',
                /**
                 * Selectbox
                 * * 1 => selectBoxOption1
                 * * 2 => selectBoxOption2
                 * * 3 => selectBoxOption3
                 */
                selectbox?: { key: string ,label: string  } | '' | '1' | '2' | '3',
                /**
                 * Checkbox
                 * * 1 => checkboxOption1
                 * * 2 => checkboxOption2
                 * * 3 => checkboxOption3
                 */
                checkbox?: Array<{ key: string ,label: string  } | '1' | '2' | '3'>,
                /**
                 * Date
                 */
                date?: string,
                relation?: number,
                /**
                 * File
                 */
                file?: {
                    /**
                     * File ID returned by File Upload API
                     */
                    file_id?: string,
                    /**
                     * File name
                     */
                    file_nm?: string,
                    /**
                     * Description
                     */
                    desc?: string,
                },
                /**
                 * /label/open_flg
                 */
                open_flg?: (0 | 1),
                /**
                 * /label/login_ok_flg
                 */
                login_ok_flg?: (0 | 1),
                /**
                 * Validate
                 */
                validate_only?: boolean,
            },
            outputFormat?: string,
            lang?: string,
            charset?: string,
        };
        export type postMembersServiceRcmsApi1MembersInsertResponse = any;
        `,
    },
    {
        path: '/rcms-api/1/members/update',
        httpMethod: 'post',
        class: MembersService,
        className: 'MembersService',
        method: MembersService.postMembersServiceRcmsApi1MembersUpdate,
        methodName: 'postMembersServiceRcmsApi1MembersUpdate',
        auth: null,
        description: `
        export interface postMembersServiceRcmsApi1MembersUpdateRequest {
            requestBody: {
                /**
                 * /label/member_id
                 */
                member_id: number,
                /**
                 * Email
                 */
                email?: string,
                /**
                 * Login ID
                 */
                login_id?: string,
                /**
                 * Password
                 */
                login_pwd?: string,
                /**
                 * Nickname
                 */
                nickname?: string,
                /**
                 * Family name
                 */
                name1?: string,
                /**
                 * Given name
                 */
                name2?: string,
                /**
                 * Sex
                 */
                sex?: ('m' | 'f' | 'e'),
                /**
                 * Date of birth
                 */
                birth?: string,
                /**
                 * Image1
                 */
                member_photo?: {
                    /**
                     * File ID returned by File Upload API
                     */
                    file_id?: string,
                    /**
                     * File name
                     */
                    file_nm?: string,
                    /**
                     * Description
                     */
                    desc?: string,
                    extension?: ('jpg' | 'gif' | 'png'),
                },
                /**
                 * Text
                 */
                text?: string,
                /**
                 * Textarea
                 */
                textarea?: string,
                /**
                 * Radio
                 * * 1 => radioOption1
                 * * 2 => radioOption2
                 * * 3 => radioOption3
                 */
                radio?: { key: string ,label: string  } | '' | '1' | '2' | '3',
                /**
                 * Selectbox
                 * * 1 => selectBoxOption1
                 * * 2 => selectBoxOption2
                 * * 3 => selectBoxOption3
                 */
                selectbox?: { key: string ,label: string  } | '' | '1' | '2' | '3',
                /**
                 * Checkbox
                 * * 1 => checkboxOption1
                 * * 2 => checkboxOption2
                 * * 3 => checkboxOption3
                 */
                checkbox?: Array<{ key: string ,label: string  } | '1' | '2' | '3'>,
                /**
                 * Date
                 */
                date?: string,
                relation?: number,
                /**
                 * File
                 */
                file?: {
                    /**
                     * File ID returned by File Upload API
                     */
                    file_id?: string,
                    /**
                     * File name
                     */
                    file_nm?: string,
                    /**
                     * Description
                     */
                    desc?: string,
                },
                /**
                 * /label/group_id
                 */
                group_id?: (2),
                /**
                 * /label/open_flg
                 */
                open_flg?: (0 | 1),
                /**
                 * /label/login_ok_flg
                 */
                login_ok_flg?: (0 | 1),
                /**
                 * Validate
                 */
                validate_only?: boolean,
            },
            outputFormat?: string,
            lang?: string,
            charset?: string,
        };
        export type postMembersServiceRcmsApi1MembersUpdateResponse = any;
        `,
    },
    {
        path: '/rcms-api/1/members/delete',
        httpMethod: 'post',
        class: MembersService,
        className: 'MembersService',
        method: MembersService.postMembersServiceRcmsApi1MembersDelete,
        methodName: 'postMembersServiceRcmsApi1MembersDelete',
        auth: null,
        description: `
        export interface postMembersServiceRcmsApi1MembersDeleteRequest {
            requestBody: {
                /**
                 * /label/member_id
                 */
                member_id: number,
            },
            outputFormat?: string,
            lang?: string,
            charset?: string,
        };
        export type postMembersServiceRcmsApi1MembersDeleteResponse = any;
        `,
    },
    {
        path: '/rcms-api/1/me/update',
        httpMethod: 'post',
        class: MembersService,
        className: 'MembersService',
        method: MembersService.postMembersServiceRcmsApi1MeUpdate,
        methodName: 'postMembersServiceRcmsApi1MeUpdate',
        auth: null,
        description: `
        export interface postMembersServiceRcmsApi1MeUpdateRequest {
            requestBody: {
                /**
                 * Email
                 */
                email?: string,
                /**
                 * Login ID
                 */
                login_id?: string,
                /**
                 * Password
                 */
                login_pwd?: string,
                /**
                 * Nickname
                 */
                nickname?: string,
                /**
                 * Family name
                 */
                name1?: string,
                /**
                 * Given name
                 */
                name2?: string,
                /**
                 * Sex
                 */
                sex?: ('m' | 'f' | 'e'),
                /**
                 * Date of birth
                 */
                birth?: string,
                /**
                 * Image1
                 */
                member_photo?: {
                    /**
                     * File ID returned by File Upload API
                     */
                    file_id?: string,
                    /**
                     * File name
                     */
                    file_nm?: string,
                    /**
                     * Description
                     */
                    desc?: string,
                    extension?: ('jpg' | 'gif' | 'png'),
                },
                /**
                 * Text
                 */
                text?: string,
                /**
                 * Textarea
                 */
                textarea?: string,
                /**
                 * Radio
                 * * 1 => radioOption1
                 * * 2 => radioOption2
                 * * 3 => radioOption3
                 */
                radio?: { key: string ,label: string  } | '' | '1' | '2' | '3',
                /**
                 * Selectbox
                 * * 1 => selectBoxOption1
                 * * 2 => selectBoxOption2
                 * * 3 => selectBoxOption3
                 */
                selectbox?: { key: string ,label: string  } | '' | '1' | '2' | '3',
                /**
                 * Checkbox
                 * * 1 => checkboxOption1
                 * * 2 => checkboxOption2
                 * * 3 => checkboxOption3
                 */
                checkbox?: Array<{ key: string ,label: string  } | '1' | '2' | '3'>,
                /**
                 * Date
                 */
                date?: string,
                relation?: number,
                /**
                 * File
                 */
                file?: {
                    /**
                     * File ID returned by File Upload API
                     */
                    file_id?: string,
                    /**
                     * File name
                     */
                    file_nm?: string,
                    /**
                     * Description
                     */
                    desc?: string,
                },
                /**
                 * /label/group_id
                 */
                group_id?: (2),
                /**
                 * /label/open_flg
                 */
                open_flg?: (0 | 1),
                /**
                 * /label/login_ok_flg
                 */
                login_ok_flg?: (0 | 1),
                /**
                 * Validate
                 */
                validate_only?: boolean,
            },
            outputFormat?: string,
            lang?: string,
            charset?: string,
        };
        export type postMembersServiceRcmsApi1MeUpdateResponse = any;
        `,
    },
    {
        path: '/rcms-api/1/me/delete',
        httpMethod: 'post',
        class: MembersService,
        className: 'MembersService',
        method: MembersService.postMembersServiceRcmsApi1MeDelete,
        methodName: 'postMembersServiceRcmsApi1MeDelete',
        auth: null,
        description: `
        export interface postMembersServiceRcmsApi1MeDeleteRequest {
            requestBody: any,
            outputFormat?: string,
            lang?: string,
            charset?: string,
        };
        export type postMembersServiceRcmsApi1MeDeleteResponse = any;
        `,
    },
];
