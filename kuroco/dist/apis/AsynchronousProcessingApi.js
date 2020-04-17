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
var usingModelsDescription = {};
var AsynchronousProcessingApiRcmsApi1BatchPostRequestDescription = (function (usingModelsDescription) { return "{\n    outputFormat?: string;\n    lang?: string;\n    charset?: string;\n}"; })(usingModelsDescription);
/**
 * no description
 */
var AsynchronousProcessingApi = /** @class */ (function (_super) {
    __extends(AsynchronousProcessingApi, _super);
    function AsynchronousProcessingApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(AsynchronousProcessingApi, "className", {
        get: function () {
            return 'AsynchronousProcessingApi';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AsynchronousProcessingApi, "infos", {
        get: function () {
            return [
                {
                    class: AsynchronousProcessingApi,
                    url: "/rcms-api/1/batch",
                    requestMethodName: 'rcmsApi1BatchPost',
                    requestRequiredParamSample: {},
                    requestParamInterfaceDescription: AsynchronousProcessingApiRcmsApi1BatchPostRequestDescription,
                },
            ];
        },
        enumerable: true,
        configurable: true
    });
    /**
     *  ### **Batch::kickbat (v1)**
     */
    AsynchronousProcessingApi.prototype.rcmsApi1BatchPost = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var rcmsApi1BatchPostRaw;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rcmsApi1BatchPostRaw = function (requestParameters) { return __awaiter(_this, void 0, void 0, function () {
                            var queryParameters, headerParameters, response;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (requestParameters === null || requestParameters === undefined) {
                                            throw new runtime.RequiredError('request parameter was null or undefined', [
                                                'request parameter was null or undefined when calling rcmsApi1BatchPost.',
                                                'This method requires parameters even if defined parameters are all optional (not required).',
                                                'In case of that, please specify empty Object.',
                                                'e.g. rcmsApi1BatchPost({})'
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
                                        headerParameters = {};
                                        if (this.configuration && this.configuration.apiKey) {
                                            headerParameters["X-RCMS-API-ACCESS-TOKEN"] = this.configuration.apiKey("X-RCMS-API-ACCESS-TOKEN"); // Token-Auth authentication
                                        }
                                        return [4 /*yield*/, this.request({
                                                path: "/rcms-api/1/batch",
                                                method: 'POST',
                                                headers: headerParameters,
                                                query: queryParameters,
                                            })];
                                    case 1:
                                        response = _a.sent();
                                        return [2 /*return*/, new runtime.JSONApiResponse(response)];
                                }
                            });
                        }); };
                        return [4 /*yield*/, rcmsApi1BatchPostRaw(requestParameters)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return AsynchronousProcessingApi;
}(runtime.BaseAPI));
export { AsynchronousProcessingApi };
