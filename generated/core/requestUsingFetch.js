"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Try to parse the content for any response status code.
 * We check the "Content-Type" header to see if we need to parse the
 * content as json or as plain text.
 * @param response Response object from fetch
 */
async function parseBody(response) {
    try {
        const contentType = response.headers.get('Content-Type');
        if (contentType) {
            switch (contentType.toLowerCase()) {
                case 'application/json':
                case 'application/json;charset=utf-8':
                case 'application/json; charset=utf-8':
                    return await response.json();
                default:
                    return await response.text();
            }
        }
    }
    catch (e) {
        console.error(e);
    }
    return null;
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
async function requestUsingFetch(url, request, responseHeader) {
    // Fetch response using fetch API.
    const response = await fetch(url, request);
    // Get content of response header or response body
    const contentHeader = parseHeader(response, responseHeader);
    const contentBody = await parseBody(response);
    // Create result object.
    return {
        url,
        ok: response.ok,
        status: response.status,
        statusText: response.statusText,
        body: contentHeader || contentBody,
    };
}
exports.requestUsingFetch = requestUsingFetch;
