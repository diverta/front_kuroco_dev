/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */
import { __awaiter, __generator } from "tslib";
import { catchGenericError } from '../core/ApiError';
import { request as __request } from '../core/request';
import { OpenAPI } from '../core/OpenAPI';
import { Auth } from '../core/Auth';
var MembersService = /** @class */ (function () {
    function MembersService() {
    }
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
    MembersService.getMembersServiceRcmsApi1Members = function (requestParam) {
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
                                            path: "/rcms-api/1/members",
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
    MembersService.getMembersServiceRcmsApi1MembersMemberId = function (requestParam) {
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
                                            path: "/rcms-api/1/members/" + requestParam.memberId,
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
    /**
     *
     * ### **Member::insert (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **default_group_id** `1`
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    MembersService.postMembersServiceRcmsApi1MembersInsert = function (requestParam) {
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
                                            path: "/rcms-api/1/members/insert",
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
     * ### **Member::update (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **allowed_group_ids** `1`
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    MembersService.postMembersServiceRcmsApi1MembersUpdate = function (requestParam) {
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
                                            path: "/rcms-api/1/members/update",
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
     * ### **Member::delete (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **allowed_group_ids** `1`
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    MembersService.postMembersServiceRcmsApi1MembersDelete = function (requestParam) {
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
                                            path: "/rcms-api/1/members/delete",
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
     * ### **Member::update (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **self_only** `true`
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    MembersService.postMembersServiceRcmsApi1MeUpdate = function (requestParam) {
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
                                            path: "/rcms-api/1/me/update",
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
     * ### **Member::delete (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **self_only** `true`
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    MembersService.postMembersServiceRcmsApi1MeDelete = function (requestParam) {
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
                                            path: "/rcms-api/1/me/delete",
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
    return MembersService;
}());
export { MembersService };
(function (MembersService) {
    ;
    ;
    ;
    ;
    ;
    ;
    ;
})(MembersService || (MembersService = {}));
export var infos = [
    {
        path: '/rcms-api/1/members',
        httpMethod: 'get',
        class: MembersService,
        className: 'MembersService',
        method: MembersService.getMembersServiceRcmsApi1Members,
        methodName: 'getMembersServiceRcmsApi1Members',
        auth: null,
        description: "\n        export interface getMembersServiceRcmsApi1MembersRequest {\n            outputFormat?: string,\n            lang?: string,\n            charset?: string,\n            id?: Array<number>,\n            cnt?: number,\n            pageId?: number,\n            sName?: string,\n            sEmail?: string,\n            sTel?: string,\n            sAddress?: string,\n            sTdfkCd?: string,\n            groupId?: number,\n        };\n        export type getMembersServiceRcmsApi1MembersResponse = any;\n        ",
    },
    {
        path: '/rcms-api/1/members/${requestParam.memberId}',
        httpMethod: 'get',
        class: MembersService,
        className: 'MembersService',
        method: MembersService.getMembersServiceRcmsApi1MembersMemberId,
        methodName: 'getMembersServiceRcmsApi1MembersMemberId',
        auth: null,
        description: "\n        export interface getMembersServiceRcmsApi1MembersMemberIdRequest {\n            memberId: number,\n            outputFormat?: string,\n            lang?: string,\n            charset?: string,\n        };\n        export type getMembersServiceRcmsApi1MembersMemberIdResponse = any;\n        ",
    },
    {
        path: '/rcms-api/1/members/insert',
        httpMethod: 'post',
        class: MembersService,
        className: 'MembersService',
        method: MembersService.postMembersServiceRcmsApi1MembersInsert,
        methodName: 'postMembersServiceRcmsApi1MembersInsert',
        auth: null,
        description: "\n        export interface postMembersServiceRcmsApi1MembersInsertRequest {\n            requestBody: {\n                /**\n                 * Email\n                 */\n                email: string,\n                /**\n                 * Login ID\n                 */\n                login_id?: string,\n                /**\n                 * Password\n                 */\n                login_pwd: string,\n                /**\n                 * Nickname\n                 */\n                nickname: string,\n                /**\n                 * Family name\n                 */\n                name1?: string,\n                /**\n                 * Given name\n                 */\n                name2?: string,\n                /**\n                 * Sex\n                 */\n                sex?: ('m' | 'f' | 'e'),\n                /**\n                 * Date of birth\n                 */\n                birth?: string,\n                /**\n                 * Image1\n                 */\n                member_photo?: {\n                    /**\n                     * File ID returned by File Upload API\n                     */\n                    file_id?: string,\n                    /**\n                     * File name\n                     */\n                    file_nm?: string,\n                    /**\n                     * Description\n                     */\n                    desc?: string,\n                    extension?: ('jpg' | 'gif' | 'png'),\n                },\n                /**\n                 * Text\n                 */\n                text: string,\n                /**\n                 * Textarea\n                 */\n                textarea?: string,\n                /**\n                 * Radio\n                 * * 1 => radioOption1\n                 * * 2 => radioOption2\n                 * * 3 => radioOption3\n                 */\n                radio?: { key: string ,label: string  } | '' | '1' | '2' | '3',\n                /**\n                 * Selectbox\n                 * * 1 => selectBoxOption1\n                 * * 2 => selectBoxOption2\n                 * * 3 => selectBoxOption3\n                 */\n                selectbox?: { key: string ,label: string  } | '' | '1' | '2' | '3',\n                /**\n                 * Checkbox\n                 * * 1 => checkboxOption1\n                 * * 2 => checkboxOption2\n                 * * 3 => checkboxOption3\n                 */\n                checkbox?: Array<{ key: string ,label: string  } | '1' | '2' | '3'>,\n                /**\n                 * Date\n                 */\n                date?: string,\n                relation?: number,\n                /**\n                 * File\n                 */\n                file?: {\n                    /**\n                     * File ID returned by File Upload API\n                     */\n                    file_id?: string,\n                    /**\n                     * File name\n                     */\n                    file_nm?: string,\n                    /**\n                     * Description\n                     */\n                    desc?: string,\n                },\n                /**\n                 * /label/open_flg\n                 */\n                open_flg?: (0 | 1),\n                /**\n                 * /label/login_ok_flg\n                 */\n                login_ok_flg?: (0 | 1),\n                /**\n                 * Validate\n                 */\n                validate_only?: boolean,\n            },\n            outputFormat?: string,\n            lang?: string,\n            charset?: string,\n        };\n        export type postMembersServiceRcmsApi1MembersInsertResponse = any;\n        ",
    },
    {
        path: '/rcms-api/1/members/update',
        httpMethod: 'post',
        class: MembersService,
        className: 'MembersService',
        method: MembersService.postMembersServiceRcmsApi1MembersUpdate,
        methodName: 'postMembersServiceRcmsApi1MembersUpdate',
        auth: null,
        description: "\n        export interface postMembersServiceRcmsApi1MembersUpdateRequest {\n            requestBody: {\n                /**\n                 * /label/member_id\n                 */\n                member_id: number,\n                /**\n                 * Email\n                 */\n                email?: string,\n                /**\n                 * Login ID\n                 */\n                login_id?: string,\n                /**\n                 * Password\n                 */\n                login_pwd?: string,\n                /**\n                 * Nickname\n                 */\n                nickname?: string,\n                /**\n                 * Family name\n                 */\n                name1?: string,\n                /**\n                 * Given name\n                 */\n                name2?: string,\n                /**\n                 * Sex\n                 */\n                sex?: ('m' | 'f' | 'e'),\n                /**\n                 * Date of birth\n                 */\n                birth?: string,\n                /**\n                 * Image1\n                 */\n                member_photo?: {\n                    /**\n                     * File ID returned by File Upload API\n                     */\n                    file_id?: string,\n                    /**\n                     * File name\n                     */\n                    file_nm?: string,\n                    /**\n                     * Description\n                     */\n                    desc?: string,\n                    extension?: ('jpg' | 'gif' | 'png'),\n                },\n                /**\n                 * Text\n                 */\n                text?: string,\n                /**\n                 * Textarea\n                 */\n                textarea?: string,\n                /**\n                 * Radio\n                 * * 1 => radioOption1\n                 * * 2 => radioOption2\n                 * * 3 => radioOption3\n                 */\n                radio?: { key: string ,label: string  } | '' | '1' | '2' | '3',\n                /**\n                 * Selectbox\n                 * * 1 => selectBoxOption1\n                 * * 2 => selectBoxOption2\n                 * * 3 => selectBoxOption3\n                 */\n                selectbox?: { key: string ,label: string  } | '' | '1' | '2' | '3',\n                /**\n                 * Checkbox\n                 * * 1 => checkboxOption1\n                 * * 2 => checkboxOption2\n                 * * 3 => checkboxOption3\n                 */\n                checkbox?: Array<{ key: string ,label: string  } | '1' | '2' | '3'>,\n                /**\n                 * Date\n                 */\n                date?: string,\n                relation?: number,\n                /**\n                 * File\n                 */\n                file?: {\n                    /**\n                     * File ID returned by File Upload API\n                     */\n                    file_id?: string,\n                    /**\n                     * File name\n                     */\n                    file_nm?: string,\n                    /**\n                     * Description\n                     */\n                    desc?: string,\n                },\n                /**\n                 * /label/group_id\n                 */\n                group_id?: (1),\n                /**\n                 * /label/open_flg\n                 */\n                open_flg?: (0 | 1),\n                /**\n                 * /label/login_ok_flg\n                 */\n                login_ok_flg?: (0 | 1),\n                /**\n                 * Validate\n                 */\n                validate_only?: boolean,\n            },\n            outputFormat?: string,\n            lang?: string,\n            charset?: string,\n        };\n        export type postMembersServiceRcmsApi1MembersUpdateResponse = any;\n        ",
    },
    {
        path: '/rcms-api/1/members/delete',
        httpMethod: 'post',
        class: MembersService,
        className: 'MembersService',
        method: MembersService.postMembersServiceRcmsApi1MembersDelete,
        methodName: 'postMembersServiceRcmsApi1MembersDelete',
        auth: null,
        description: "\n        export interface postMembersServiceRcmsApi1MembersDeleteRequest {\n            requestBody: {\n                /**\n                 * /label/member_id\n                 */\n                member_id: number,\n            },\n            outputFormat?: string,\n            lang?: string,\n            charset?: string,\n        };\n        export type postMembersServiceRcmsApi1MembersDeleteResponse = any;\n        ",
    },
    {
        path: '/rcms-api/1/me/update',
        httpMethod: 'post',
        class: MembersService,
        className: 'MembersService',
        method: MembersService.postMembersServiceRcmsApi1MeUpdate,
        methodName: 'postMembersServiceRcmsApi1MeUpdate',
        auth: null,
        description: "\n        export interface postMembersServiceRcmsApi1MeUpdateRequest {\n            requestBody: {\n                /**\n                 * Email\n                 */\n                email?: string,\n                /**\n                 * Login ID\n                 */\n                login_id?: string,\n                /**\n                 * Password\n                 */\n                login_pwd?: string,\n                /**\n                 * Nickname\n                 */\n                nickname?: string,\n                /**\n                 * Family name\n                 */\n                name1?: string,\n                /**\n                 * Given name\n                 */\n                name2?: string,\n                /**\n                 * Sex\n                 */\n                sex?: ('m' | 'f' | 'e'),\n                /**\n                 * Date of birth\n                 */\n                birth?: string,\n                /**\n                 * Image1\n                 */\n                member_photo?: {\n                    /**\n                     * File ID returned by File Upload API\n                     */\n                    file_id?: string,\n                    /**\n                     * File name\n                     */\n                    file_nm?: string,\n                    /**\n                     * Description\n                     */\n                    desc?: string,\n                    extension?: ('jpg' | 'gif' | 'png'),\n                },\n                /**\n                 * Text\n                 */\n                text?: string,\n                /**\n                 * Textarea\n                 */\n                textarea?: string,\n                /**\n                 * Radio\n                 * * 1 => radioOption1\n                 * * 2 => radioOption2\n                 * * 3 => radioOption3\n                 */\n                radio?: { key: string ,label: string  } | '' | '1' | '2' | '3',\n                /**\n                 * Selectbox\n                 * * 1 => selectBoxOption1\n                 * * 2 => selectBoxOption2\n                 * * 3 => selectBoxOption3\n                 */\n                selectbox?: { key: string ,label: string  } | '' | '1' | '2' | '3',\n                /**\n                 * Checkbox\n                 * * 1 => checkboxOption1\n                 * * 2 => checkboxOption2\n                 * * 3 => checkboxOption3\n                 */\n                checkbox?: Array<{ key: string ,label: string  } | '1' | '2' | '3'>,\n                /**\n                 * Date\n                 */\n                date?: string,\n                relation?: number,\n                /**\n                 * File\n                 */\n                file?: {\n                    /**\n                     * File ID returned by File Upload API\n                     */\n                    file_id?: string,\n                    /**\n                     * File name\n                     */\n                    file_nm?: string,\n                    /**\n                     * Description\n                     */\n                    desc?: string,\n                },\n                /**\n                 * /label/group_id\n                 */\n                group_id?: Array<(1 | 2)>,\n                /**\n                 * /label/open_flg\n                 */\n                open_flg?: (0 | 1),\n                /**\n                 * /label/login_ok_flg\n                 */\n                login_ok_flg?: (0 | 1),\n                /**\n                 * Validate\n                 */\n                validate_only?: boolean,\n            },\n            outputFormat?: string,\n            lang?: string,\n            charset?: string,\n        };\n        export type postMembersServiceRcmsApi1MeUpdateResponse = any;\n        ",
    },
    {
        path: '/rcms-api/1/me/delete',
        httpMethod: 'post',
        class: MembersService,
        className: 'MembersService',
        method: MembersService.postMembersServiceRcmsApi1MeDelete,
        methodName: 'postMembersServiceRcmsApi1MeDelete',
        auth: null,
        description: "\n        export interface postMembersServiceRcmsApi1MeDeleteRequest {\n            requestBody: any,\n            outputFormat?: string,\n            lang?: string,\n            charset?: string,\n        };\n        export type postMembersServiceRcmsApi1MeDeleteResponse = any;\n        ",
    },
];
