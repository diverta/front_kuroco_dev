/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */
import { __awaiter, __generator } from "tslib";
import { catchGenericError } from '../core/ApiError';
import { request as __request } from '../core/request';
import { OpenAPI } from '../core/OpenAPI';
import { Auth } from '../core/Auth';
var Service = /** @class */ (function () {
    function Service() {
    }
    /**
     *
     * ### **Manifest::gcs_info (v1)**
     *
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    Service.getServiceRcmsApi1ManifestGcs = function (requestParam) {
        return __awaiter(this, void 0, void 0, function () {
            var shouldHookToken, headers, request, result;
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        shouldHookToken = Object.keys({
                            'Token-Auth': OpenAPI.SECURITY['Token-Auth'],
                        }).length > 0;
                        headers = shouldHookToken ? (_a = {}, _a[OpenAPI.SECURITY['Token-Auth'].name] = "" + Auth.getAccessToken(), _a) : {};
                        request = function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, __request({
                                            headers: headers,
                                            method: 'get',
                                            path: "/rcms-api/1/manifest/gcs",
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
    return Service;
}());
export { Service };
(function (Service) {
    ;
})(Service || (Service = {}));
export var infos = [
    {
        path: '/rcms-api/1/manifest/gcs',
        httpMethod: 'get',
        class: Service,
        className: 'Service',
        method: Service.getServiceRcmsApi1ManifestGcs,
        methodName: 'getServiceRcmsApi1ManifestGcs',
        auth: null,
        description: "\n        export interface getServiceRcmsApi1ManifestGcsRequest {\n            outputFormat?: string,\n            lang?: string,\n            charset?: string,\n        };\n        export type getServiceRcmsApi1ManifestGcsResponse = any;\n        ",
    },
];
