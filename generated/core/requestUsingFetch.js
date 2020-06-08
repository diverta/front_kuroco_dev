"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */
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
exports.requestUsingFetch = void 0;
/**
 * Try to parse the content for any response status code.
 * We check the "Content-Type" header to see if we need to parse the
 * content as json or as plain text.
 * @param response Response object from fetch
 */
function parseBody(response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const contentType = response.headers.get('Content-Type');
            if (contentType) {
                switch (contentType.toLowerCase()) {
                    case 'application/json':
                    case 'application/json;charset=utf-8':
                    case 'application/json; charset=utf-8':
                        return yield response.json();
                    default:
                        return yield response.text();
                }
            }
        }
        catch (e) {
            console.error(e);
        }
        return null;
    });
}
/**
 * Fetch the response header (if specified)
 * @param response Response object from fetch
 * @param responseHeader The name of the header to fetch
 */
function parseHeader(response, responseHeader) {
    if (responseHeader) {
        const content = response.headers.get(responseHeader);
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
function requestUsingFetch(url, request, responseHeader) {
    return __awaiter(this, void 0, void 0, function* () {
        // Fetch response using fetch API.
        const response = yield fetch(url, request);
        // Get content of response header or response body
        const contentHeader = parseHeader(response, responseHeader);
        const contentBody = yield parseBody(response);
        // Create result object.
        return {
            url,
            ok: response.ok,
            status: response.status,
            statusText: response.statusText,
            body: contentHeader || contentBody,
        };
    });
}
exports.requestUsingFetch = requestUsingFetch;
