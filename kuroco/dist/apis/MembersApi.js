/* tslint:disable */
/* eslint-disable */
import { __awaiter, __extends, __generator } from "tslib";
/**
 * Test
 * test
 *
 * The version of the OpenAPI document: 1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import * as runtime from '../runtime';
import { InlineObject5Description, InlineObject5ToJSON, InlineObject6Description, InlineObject6ToJSON, InlineObject7Description, InlineObject7ToJSON, InlineObject8Description, InlineObject8ToJSON, } from '../models';
var usingModelsDescription = {
    InlineObject5: InlineObject5Description.split('\n').map(function (str) { return "  " + str; }).join('\n'),
    InlineObject6: InlineObject6Description.split('\n').map(function (str) { return "  " + str; }).join('\n'),
    InlineObject7: InlineObject7Description.split('\n').map(function (str) { return "  " + str; }).join('\n'),
    InlineObject8: InlineObject8Description.split('\n').map(function (str) { return "  " + str; }).join('\n'),
};
var MembersApiRcmsApi1MeDeletePostRequestDescription = (function (usingModelsDescription) { return "{\n    body: object;\n    outputFormat?: string;\n    lang?: string;\n    charset?: string;\n}"; })(usingModelsDescription);
var MembersApiRcmsApi1MeUpdatePostRequestDescription = (function (usingModelsDescription) { return "{\n    inlineObject8: " + usingModelsDescription.InlineObject8 + ";\n    outputFormat?: string;\n    lang?: string;\n    charset?: string;\n}"; })(usingModelsDescription);
var MembersApiRcmsApi1MembersDeletePostRequestDescription = (function (usingModelsDescription) { return "{\n    inlineObject7: " + usingModelsDescription.InlineObject7 + ";\n    outputFormat?: string;\n    lang?: string;\n    charset?: string;\n}"; })(usingModelsDescription);
var MembersApiRcmsApi1MembersGetRequestDescription = (function (usingModelsDescription) { return "{\n    outputFormat?: string;\n    lang?: string;\n    charset?: string;\n    id?: Array<number>;\n    cnt?: number;\n    pageID?: number;\n    sName?: string;\n    sEmail?: string;\n    sTel?: string;\n    sAddress?: string;\n    sTdfkCd?: string;\n    groupId?: number;\n}"; })(usingModelsDescription);
var MembersApiRcmsApi1MembersInsertPostRequestDescription = (function (usingModelsDescription) { return "{\n    inlineObject5: " + usingModelsDescription.InlineObject5 + ";\n    outputFormat?: string;\n    lang?: string;\n    charset?: string;\n}"; })(usingModelsDescription);
var MembersApiRcmsApi1MembersMemberIdGetRequestDescription = (function (usingModelsDescription) { return "{\n    memberId: number;\n    outputFormat?: string;\n    lang?: string;\n    charset?: string;\n}"; })(usingModelsDescription);
var MembersApiRcmsApi1MembersUpdatePostRequestDescription = (function (usingModelsDescription) { return "{\n    inlineObject6: " + usingModelsDescription.InlineObject6 + ";\n    outputFormat?: string;\n    lang?: string;\n    charset?: string;\n}"; })(usingModelsDescription);
/**
 * no description
 */
var MembersApi = /** @class */ (function (_super) {
    __extends(MembersApi, _super);
    function MembersApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MembersApi, "className", {
        get: function () {
            return 'MembersApi';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MembersApi, "infos", {
        get: function () {
            return [
                {
                    class: MembersApi,
                    url: "/rcms-api/1/me/delete",
                    requestMethodName: 'rcmsApi1MeDeletePost',
                    requestRequiredParamSample: {
                        body: {},
                    },
                    requestParamInterfaceDescription: MembersApiRcmsApi1MeDeletePostRequestDescription,
                },
                {
                    class: MembersApi,
                    url: "/rcms-api/1/me/update",
                    requestMethodName: 'rcmsApi1MeUpdatePost',
                    requestRequiredParamSample: {
                        inlineObject8: {},
                    },
                    requestParamInterfaceDescription: MembersApiRcmsApi1MeUpdatePostRequestDescription,
                },
                {
                    class: MembersApi,
                    url: "/rcms-api/1/members/delete",
                    requestMethodName: 'rcmsApi1MembersDeletePost',
                    requestRequiredParamSample: {
                        inlineObject7: {},
                    },
                    requestParamInterfaceDescription: MembersApiRcmsApi1MembersDeletePostRequestDescription,
                },
                {
                    class: MembersApi,
                    url: "/rcms-api/1/members",
                    requestMethodName: 'rcmsApi1MembersGet',
                    requestRequiredParamSample: {},
                    requestParamInterfaceDescription: MembersApiRcmsApi1MembersGetRequestDescription,
                },
                {
                    class: MembersApi,
                    url: "/rcms-api/1/members/insert",
                    requestMethodName: 'rcmsApi1MembersInsertPost',
                    requestRequiredParamSample: {
                        inlineObject5: {},
                    },
                    requestParamInterfaceDescription: MembersApiRcmsApi1MembersInsertPostRequestDescription,
                },
                {
                    class: MembersApi,
                    url: "/rcms-api/1/members/{member_id}".replace("{" + "member_id" + "}", ''),
                    requestMethodName: 'rcmsApi1MembersMemberIdGet',
                    requestRequiredParamSample: {
                        memberId: {},
                    },
                    requestParamInterfaceDescription: MembersApiRcmsApi1MembersMemberIdGetRequestDescription,
                },
                {
                    class: MembersApi,
                    url: "/rcms-api/1/members/update",
                    requestMethodName: 'rcmsApi1MembersUpdatePost',
                    requestRequiredParamSample: {
                        inlineObject6: {},
                    },
                    requestParamInterfaceDescription: MembersApiRcmsApi1MembersUpdatePostRequestDescription,
                },
            ];
        },
        enumerable: true,
        configurable: true
    });
    /**
     *  ### **Member::delete (v1)**   ## Controller parameters  > **self_only** `true`
     */
    MembersApi.prototype.rcmsApi1MeDeletePost = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var rcmsApi1MeDeletePostRaw;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rcmsApi1MeDeletePostRaw = function (requestParameters) { return __awaiter(_this, void 0, void 0, function () {
                            var queryParameters, headerParameters, response;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (requestParameters === null || requestParameters === undefined) {
                                            throw new runtime.RequiredError('request parameter was null or undefined', [
                                                'request parameter was null or undefined when calling rcmsApi1MeDeletePost.',
                                                'This method requires parameters even if defined parameters are all optional (not required).',
                                                'In case of that, please specify empty Object.',
                                                'e.g. rcmsApi1MeDeletePost({})'
                                            ].join('\n'));
                                        }
                                        if (requestParameters.body === null || requestParameters.body === undefined) {
                                            throw new runtime.RequiredError('body', 'Required parameter requestParameters.body was null or undefined when calling rcmsApi1MeDeletePost.');
                                        }
                                        queryParameters = {};
                                        if (requestParameters.outputFormat !== undefined) {
                                            queryParameters['_output_format'] = requestParameters.outputFormat;
                                        }
                                        if (requestParameters.lang !== undefined) {
                                            queryParameters['_lang'] = requestParameters.lang;
                                        }
                                        if (requestParameters.charset !== undefined) {
                                            queryParameters['_charset'] = requestParameters.charset;
                                        }
                                        headerParameters = {};
                                        headerParameters['Content-Type'] = 'application/json';
                                        if (this.configuration && this.configuration.apiKey) {
                                            headerParameters["X-RCMS-API-ACCESS-TOKEN"] = this.configuration.apiKey("X-RCMS-API-ACCESS-TOKEN"); // Token-Auth authentication
                                        }
                                        return [4 /*yield*/, this.request({
                                                path: "/rcms-api/1/me/delete",
                                                method: 'POST',
                                                headers: headerParameters,
                                                query: queryParameters,
                                                body: requestParameters.body,
                                            })];
                                    case 1:
                                        response = _a.sent();
                                        return [2 /*return*/, new runtime.JSONApiResponse(response)];
                                }
                            });
                        }); };
                        return [4 /*yield*/, rcmsApi1MeDeletePostRaw(requestParameters)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  ### **Member::update (v1)**   ## Controller parameters  > **self_only** `true`
     */
    MembersApi.prototype.rcmsApi1MeUpdatePost = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var rcmsApi1MeUpdatePostRaw;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rcmsApi1MeUpdatePostRaw = function (requestParameters) { return __awaiter(_this, void 0, void 0, function () {
                            var queryParameters, headerParameters, response;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (requestParameters === null || requestParameters === undefined) {
                                            throw new runtime.RequiredError('request parameter was null or undefined', [
                                                'request parameter was null or undefined when calling rcmsApi1MeUpdatePost.',
                                                'This method requires parameters even if defined parameters are all optional (not required).',
                                                'In case of that, please specify empty Object.',
                                                'e.g. rcmsApi1MeUpdatePost({})'
                                            ].join('\n'));
                                        }
                                        if (requestParameters.inlineObject8 === null || requestParameters.inlineObject8 === undefined) {
                                            throw new runtime.RequiredError('inlineObject8', 'Required parameter requestParameters.inlineObject8 was null or undefined when calling rcmsApi1MeUpdatePost.');
                                        }
                                        queryParameters = {};
                                        if (requestParameters.outputFormat !== undefined) {
                                            queryParameters['_output_format'] = requestParameters.outputFormat;
                                        }
                                        if (requestParameters.lang !== undefined) {
                                            queryParameters['_lang'] = requestParameters.lang;
                                        }
                                        if (requestParameters.charset !== undefined) {
                                            queryParameters['_charset'] = requestParameters.charset;
                                        }
                                        headerParameters = {};
                                        headerParameters['Content-Type'] = 'application/json';
                                        if (this.configuration && this.configuration.apiKey) {
                                            headerParameters["X-RCMS-API-ACCESS-TOKEN"] = this.configuration.apiKey("X-RCMS-API-ACCESS-TOKEN"); // Token-Auth authentication
                                        }
                                        return [4 /*yield*/, this.request({
                                                path: "/rcms-api/1/me/update",
                                                method: 'POST',
                                                headers: headerParameters,
                                                query: queryParameters,
                                                body: InlineObject8ToJSON(requestParameters.inlineObject8),
                                            })];
                                    case 1:
                                        response = _a.sent();
                                        return [2 /*return*/, new runtime.JSONApiResponse(response)];
                                }
                            });
                        }); };
                        return [4 /*yield*/, rcmsApi1MeUpdatePostRaw(requestParameters)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  ### **Member::delete (v1)**   ## Controller parameters  > **allowed_group_ids** `1`
     */
    MembersApi.prototype.rcmsApi1MembersDeletePost = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var rcmsApi1MembersDeletePostRaw;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rcmsApi1MembersDeletePostRaw = function (requestParameters) { return __awaiter(_this, void 0, void 0, function () {
                            var queryParameters, headerParameters, response;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (requestParameters === null || requestParameters === undefined) {
                                            throw new runtime.RequiredError('request parameter was null or undefined', [
                                                'request parameter was null or undefined when calling rcmsApi1MembersDeletePost.',
                                                'This method requires parameters even if defined parameters are all optional (not required).',
                                                'In case of that, please specify empty Object.',
                                                'e.g. rcmsApi1MembersDeletePost({})'
                                            ].join('\n'));
                                        }
                                        if (requestParameters.inlineObject7 === null || requestParameters.inlineObject7 === undefined) {
                                            throw new runtime.RequiredError('inlineObject7', 'Required parameter requestParameters.inlineObject7 was null or undefined when calling rcmsApi1MembersDeletePost.');
                                        }
                                        queryParameters = {};
                                        if (requestParameters.outputFormat !== undefined) {
                                            queryParameters['_output_format'] = requestParameters.outputFormat;
                                        }
                                        if (requestParameters.lang !== undefined) {
                                            queryParameters['_lang'] = requestParameters.lang;
                                        }
                                        if (requestParameters.charset !== undefined) {
                                            queryParameters['_charset'] = requestParameters.charset;
                                        }
                                        headerParameters = {};
                                        headerParameters['Content-Type'] = 'application/json';
                                        if (this.configuration && this.configuration.apiKey) {
                                            headerParameters["X-RCMS-API-ACCESS-TOKEN"] = this.configuration.apiKey("X-RCMS-API-ACCESS-TOKEN"); // Token-Auth authentication
                                        }
                                        return [4 /*yield*/, this.request({
                                                path: "/rcms-api/1/members/delete",
                                                method: 'POST',
                                                headers: headerParameters,
                                                query: queryParameters,
                                                body: InlineObject7ToJSON(requestParameters.inlineObject7),
                                            })];
                                    case 1:
                                        response = _a.sent();
                                        return [2 /*return*/, new runtime.JSONApiResponse(response)];
                                }
                            });
                        }); };
                        return [4 /*yield*/, rcmsApi1MembersDeletePostRaw(requestParameters)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  ### **Member::list (v1)**
     */
    MembersApi.prototype.rcmsApi1MembersGet = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var rcmsApi1MembersGetRaw;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rcmsApi1MembersGetRaw = function (requestParameters) { return __awaiter(_this, void 0, void 0, function () {
                            var queryParameters, headerParameters, response;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (requestParameters === null || requestParameters === undefined) {
                                            throw new runtime.RequiredError('request parameter was null or undefined', [
                                                'request parameter was null or undefined when calling rcmsApi1MembersGet.',
                                                'This method requires parameters even if defined parameters are all optional (not required).',
                                                'In case of that, please specify empty Object.',
                                                'e.g. rcmsApi1MembersGet({})'
                                            ].join('\n'));
                                        }
                                        queryParameters = {};
                                        if (requestParameters.outputFormat !== undefined) {
                                            queryParameters['_output_format'] = requestParameters.outputFormat;
                                        }
                                        if (requestParameters.lang !== undefined) {
                                            queryParameters['_lang'] = requestParameters.lang;
                                        }
                                        if (requestParameters.charset !== undefined) {
                                            queryParameters['_charset'] = requestParameters.charset;
                                        }
                                        if (requestParameters.id) {
                                            queryParameters['id[]'] = requestParameters.id;
                                        }
                                        if (requestParameters.cnt !== undefined) {
                                            queryParameters['cnt'] = requestParameters.cnt;
                                        }
                                        if (requestParameters.pageID !== undefined) {
                                            queryParameters['pageID'] = requestParameters.pageID;
                                        }
                                        if (requestParameters.sName !== undefined) {
                                            queryParameters['s_name'] = requestParameters.sName;
                                        }
                                        if (requestParameters.sEmail !== undefined) {
                                            queryParameters['s_email'] = requestParameters.sEmail;
                                        }
                                        if (requestParameters.sTel !== undefined) {
                                            queryParameters['s_tel'] = requestParameters.sTel;
                                        }
                                        if (requestParameters.sAddress !== undefined) {
                                            queryParameters['s_address'] = requestParameters.sAddress;
                                        }
                                        if (requestParameters.sTdfkCd !== undefined) {
                                            queryParameters['s_tdfk_cd'] = requestParameters.sTdfkCd;
                                        }
                                        if (requestParameters.groupId !== undefined) {
                                            queryParameters['group_id'] = requestParameters.groupId;
                                        }
                                        headerParameters = {};
                                        if (this.configuration && this.configuration.apiKey) {
                                            headerParameters["X-RCMS-API-ACCESS-TOKEN"] = this.configuration.apiKey("X-RCMS-API-ACCESS-TOKEN"); // Token-Auth authentication
                                        }
                                        return [4 /*yield*/, this.request({
                                                path: "/rcms-api/1/members",
                                                method: 'GET',
                                                headers: headerParameters,
                                                query: queryParameters,
                                            })];
                                    case 1:
                                        response = _a.sent();
                                        return [2 /*return*/, new runtime.JSONApiResponse(response)];
                                }
                            });
                        }); };
                        return [4 /*yield*/, rcmsApi1MembersGetRaw(requestParameters)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  ### **Member::insert (v1)**   ## Controller parameters  > **default_group_id** `1`
     */
    MembersApi.prototype.rcmsApi1MembersInsertPost = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var rcmsApi1MembersInsertPostRaw;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rcmsApi1MembersInsertPostRaw = function (requestParameters) { return __awaiter(_this, void 0, void 0, function () {
                            var queryParameters, headerParameters, response;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (requestParameters === null || requestParameters === undefined) {
                                            throw new runtime.RequiredError('request parameter was null or undefined', [
                                                'request parameter was null or undefined when calling rcmsApi1MembersInsertPost.',
                                                'This method requires parameters even if defined parameters are all optional (not required).',
                                                'In case of that, please specify empty Object.',
                                                'e.g. rcmsApi1MembersInsertPost({})'
                                            ].join('\n'));
                                        }
                                        if (requestParameters.inlineObject5 === null || requestParameters.inlineObject5 === undefined) {
                                            throw new runtime.RequiredError('inlineObject5', 'Required parameter requestParameters.inlineObject5 was null or undefined when calling rcmsApi1MembersInsertPost.');
                                        }
                                        queryParameters = {};
                                        if (requestParameters.outputFormat !== undefined) {
                                            queryParameters['_output_format'] = requestParameters.outputFormat;
                                        }
                                        if (requestParameters.lang !== undefined) {
                                            queryParameters['_lang'] = requestParameters.lang;
                                        }
                                        if (requestParameters.charset !== undefined) {
                                            queryParameters['_charset'] = requestParameters.charset;
                                        }
                                        headerParameters = {};
                                        headerParameters['Content-Type'] = 'application/json';
                                        if (this.configuration && this.configuration.apiKey) {
                                            headerParameters["X-RCMS-API-ACCESS-TOKEN"] = this.configuration.apiKey("X-RCMS-API-ACCESS-TOKEN"); // Token-Auth authentication
                                        }
                                        return [4 /*yield*/, this.request({
                                                path: "/rcms-api/1/members/insert",
                                                method: 'POST',
                                                headers: headerParameters,
                                                query: queryParameters,
                                                body: InlineObject5ToJSON(requestParameters.inlineObject5),
                                            })];
                                    case 1:
                                        response = _a.sent();
                                        return [2 /*return*/, new runtime.JSONApiResponse(response)];
                                }
                            });
                        }); };
                        return [4 /*yield*/, rcmsApi1MembersInsertPostRaw(requestParameters)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  ### **Member::details (v1)**
     */
    MembersApi.prototype.rcmsApi1MembersMemberIdGet = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var rcmsApi1MembersMemberIdGetRaw;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rcmsApi1MembersMemberIdGetRaw = function (requestParameters) { return __awaiter(_this, void 0, void 0, function () {
                            var queryParameters, headerParameters, response;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (requestParameters === null || requestParameters === undefined) {
                                            throw new runtime.RequiredError('request parameter was null or undefined', [
                                                'request parameter was null or undefined when calling rcmsApi1MembersMemberIdGet.',
                                                'This method requires parameters even if defined parameters are all optional (not required).',
                                                'In case of that, please specify empty Object.',
                                                'e.g. rcmsApi1MembersMemberIdGet({})'
                                            ].join('\n'));
                                        }
                                        if (requestParameters.memberId === null || requestParameters.memberId === undefined) {
                                            throw new runtime.RequiredError('memberId', 'Required parameter requestParameters.memberId was null or undefined when calling rcmsApi1MembersMemberIdGet.');
                                        }
                                        queryParameters = {};
                                        if (requestParameters.outputFormat !== undefined) {
                                            queryParameters['_output_format'] = requestParameters.outputFormat;
                                        }
                                        if (requestParameters.lang !== undefined) {
                                            queryParameters['_lang'] = requestParameters.lang;
                                        }
                                        if (requestParameters.charset !== undefined) {
                                            queryParameters['_charset'] = requestParameters.charset;
                                        }
                                        headerParameters = {};
                                        if (this.configuration && this.configuration.apiKey) {
                                            headerParameters["X-RCMS-API-ACCESS-TOKEN"] = this.configuration.apiKey("X-RCMS-API-ACCESS-TOKEN"); // Token-Auth authentication
                                        }
                                        return [4 /*yield*/, this.request({
                                                path: "/rcms-api/1/members/{member_id}".replace("{" + "member_id" + "}", encodeURIComponent(String(requestParameters.memberId))),
                                                method: 'GET',
                                                headers: headerParameters,
                                                query: queryParameters,
                                            })];
                                    case 1:
                                        response = _a.sent();
                                        return [2 /*return*/, new runtime.JSONApiResponse(response)];
                                }
                            });
                        }); };
                        return [4 /*yield*/, rcmsApi1MembersMemberIdGetRaw(requestParameters)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  ### **Member::update (v1)**   ## Controller parameters  > **allowed_group_ids** `1`
     */
    MembersApi.prototype.rcmsApi1MembersUpdatePost = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var rcmsApi1MembersUpdatePostRaw;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rcmsApi1MembersUpdatePostRaw = function (requestParameters) { return __awaiter(_this, void 0, void 0, function () {
                            var queryParameters, headerParameters, response;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (requestParameters === null || requestParameters === undefined) {
                                            throw new runtime.RequiredError('request parameter was null or undefined', [
                                                'request parameter was null or undefined when calling rcmsApi1MembersUpdatePost.',
                                                'This method requires parameters even if defined parameters are all optional (not required).',
                                                'In case of that, please specify empty Object.',
                                                'e.g. rcmsApi1MembersUpdatePost({})'
                                            ].join('\n'));
                                        }
                                        if (requestParameters.inlineObject6 === null || requestParameters.inlineObject6 === undefined) {
                                            throw new runtime.RequiredError('inlineObject6', 'Required parameter requestParameters.inlineObject6 was null or undefined when calling rcmsApi1MembersUpdatePost.');
                                        }
                                        queryParameters = {};
                                        if (requestParameters.outputFormat !== undefined) {
                                            queryParameters['_output_format'] = requestParameters.outputFormat;
                                        }
                                        if (requestParameters.lang !== undefined) {
                                            queryParameters['_lang'] = requestParameters.lang;
                                        }
                                        if (requestParameters.charset !== undefined) {
                                            queryParameters['_charset'] = requestParameters.charset;
                                        }
                                        headerParameters = {};
                                        headerParameters['Content-Type'] = 'application/json';
                                        if (this.configuration && this.configuration.apiKey) {
                                            headerParameters["X-RCMS-API-ACCESS-TOKEN"] = this.configuration.apiKey("X-RCMS-API-ACCESS-TOKEN"); // Token-Auth authentication
                                        }
                                        return [4 /*yield*/, this.request({
                                                path: "/rcms-api/1/members/update",
                                                method: 'POST',
                                                headers: headerParameters,
                                                query: queryParameters,
                                                body: InlineObject6ToJSON(requestParameters.inlineObject6),
                                            })];
                                    case 1:
                                        response = _a.sent();
                                        return [2 /*return*/, new runtime.JSONApiResponse(response)];
                                }
                            });
                        }); };
                        return [4 /*yield*/, rcmsApi1MembersUpdatePostRaw(requestParameters)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return MembersApi;
}(runtime.BaseAPI));
export { MembersApi };
