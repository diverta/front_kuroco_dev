/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */
import { __awaiter, __generator } from "tslib";
import { catchGenericError } from '../core/ApiError';
import { request as __request } from '../core/request';
import { OpenAPI } from '../core/OpenAPI';
import { Auth } from '../core/Auth';
var AsynchronousProcessingService = /** @class */ (function () {
    function AsynchronousProcessingService() {
    }
    /**
     *
     * ### **Batch::kickbat (v1)**
     *
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    AsynchronousProcessingService.postAsynchronousProcessingServiceRcmsApi1Batch = function (requestParam) {
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
                                            path: "/rcms-api/1/batch",
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
    return AsynchronousProcessingService;
}());
export { AsynchronousProcessingService };
(function (AsynchronousProcessingService) {
    ;
})(AsynchronousProcessingService || (AsynchronousProcessingService = {}));
export var infos = [
    {
        path: '/rcms-api/1/batch',
        httpMethod: 'post',
        class: AsynchronousProcessingService,
        className: 'AsynchronousProcessingService',
        method: AsynchronousProcessingService.postAsynchronousProcessingServiceRcmsApi1Batch,
        methodName: 'postAsynchronousProcessingServiceRcmsApi1Batch',
        auth: null,
        description: "\n        export interface postAsynchronousProcessingServiceRcmsApi1BatchRequest {\n            outputFormat?: string,\n            lang?: string,\n            charset?: string,\n        };\n        export type postAsynchronousProcessingServiceRcmsApi1BatchResponse = any;\n        ",
    },
];
