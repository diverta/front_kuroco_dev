import { Result } from './Result';
/**
 * Request content using the new Fetch API. This is the default API that is used and
 * is create for all JSON, XML and text objects. However it is limited to UTF-8.
 * This is a problem for some of the Docs content, since that requires UTF-16!
 * @param url The url to request.
 * @param request The request object, containing method, headers, body, etc.
 * @param responseHeader The header we want to parse.
 */
export declare function requestUsingFetch(url: string, request: Readonly<RequestInit>, responseHeader?: string): Promise<Result>;
