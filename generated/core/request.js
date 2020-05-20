/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */
import { __assign, __awaiter, __generator } from "tslib";
// @ts-ignore-start
import { OpenAPI } from './OpenAPI';
// @ts-ignore-end
import { getFormData } from './getFormData';
import { getQueryString } from './getQueryString';
import { requestUsingFetch } from './requestUsingFetch';
/**
 * Create the request.
 * @param options Request method options.
 * @returns Result object (see above)
 */
export function request(options) {
    return __awaiter(this, void 0, void 0, function () {
        var path, url, headers, request, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    path = options.path.replace(/[:]/g, '_');
                    url = "" + OpenAPI.BASE + path;
                    headers = new Headers(__assign(__assign({}, options.headers), { Accept: 'application/json' }));
                    request = {
                        headers: headers,
                        method: options.method,
                        credentials: 'same-origin',
                    };
                    // Add the query parameters (if defined).
                    if (options.query) {
                        url += getQueryString(options.query);
                    }
                    // Append formData as body
                    if (options.formData) {
                        request.body = getFormData(options.formData);
                    }
                    else if (options.body) {
                        // If this is blob data, then pass it directly to the body and set content type.
                        // Otherwise we just convert request data to JSON string (needed for fetch api)
                        if (options.body instanceof Blob) {
                            request.body = options.body;
                            if (options.body.type) {
                                headers.append('Content-Type', options.body.type);
                            }
                        }
                        else {
                            request.body = JSON.stringify(options.body);
                            headers.append('Content-Type', 'application/json');
                        }
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, requestUsingFetch(url, request, options.responseHeader)];
                case 2: return [2 /*return*/, _a.sent()];
                case 3:
                    error_1 = _a.sent();
                    return [2 /*return*/, {
                            url: url,
                            ok: false,
                            status: 0,
                            statusText: '',
                            body: error_1,
                        }];
                case 4: return [2 /*return*/];
            }
        });
    });
}
