/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */
import { __awaiter, __generator } from "tslib";
/**
 * Try to parse the content for any response status code.
 * We check the "Content-Type" header to see if we need to parse the
 * content as json or as plain text.
 * @param response Response object from fetch
 */
function parseBody(response) {
    return __awaiter(this, void 0, void 0, function () {
        var contentType, _a, e_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 6, , 7]);
                    contentType = response.headers.get('Content-Type');
                    if (!contentType) return [3 /*break*/, 5];
                    _a = contentType.toLowerCase();
                    switch (_a) {
                        case 'application/json': return [3 /*break*/, 1];
                        case 'application/json;charset=utf-8': return [3 /*break*/, 1];
                        case 'application/json; charset=utf-8': return [3 /*break*/, 1];
                    }
                    return [3 /*break*/, 3];
                case 1: return [4 /*yield*/, response.json()];
                case 2: return [2 /*return*/, _b.sent()];
                case 3: return [4 /*yield*/, response.text()];
                case 4: return [2 /*return*/, _b.sent()];
                case 5: return [3 /*break*/, 7];
                case 6:
                    e_1 = _b.sent();
                    console.error(e_1);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/, null];
            }
        });
    });
}
/**
 * Fetch the response header (if specified)
 * @param response Response object from fetch
 * @param responseHeader The name of the header to fetch
 */
function parseHeader(response, responseHeader) {
    if (responseHeader) {
        var content = response.headers.get(responseHeader);
        if (typeof content === 'string') {
            return content;
        }
    }
    return null;
}
/**
 * Request content using the new Fetch API. This is the default API that is used and
 * is create for all JSON, XML and text objects. However it is limited to UTF-8.
 * This is a problem for some of the Docs content, since that requires UTF-16!
 * @param url The url to request.
 * @param request The request object, containing method, headers, body, etc.
 * @param responseHeader The header we want to parse.
 */
export function requestUsingFetch(url, request, responseHeader) {
    return __awaiter(this, void 0, void 0, function () {
        var response, contentHeader, contentBody;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(url, request)];
                case 1:
                    response = _a.sent();
                    contentHeader = parseHeader(response, responseHeader);
                    return [4 /*yield*/, parseBody(response)];
                case 2:
                    contentBody = _a.sent();
                    // Create result object.
                    return [2 /*return*/, {
                            url: url,
                            ok: response.ok,
                            status: response.status,
                            statusText: response.statusText,
                            body: contentHeader || contentBody,
                        }];
            }
        });
    });
}
