import { Result } from './Result';
export declare class ApiError extends Error {
    readonly url: string;
    readonly status: number;
    readonly statusText: string;
    readonly body: any;
    constructor(result: Readonly<Result>, message: string);
}
export declare namespace ApiError {
    enum Message {
        BAD_REQUEST = "Bad Request",
        UNAUTHORIZED = "Unauthorized",
        FORBIDDEN = "Forbidden",
        NOT_FOUND = "Not Found",
        INTERNAL_SERVER_ERROR = "Internal Server Error",
        BAD_GATEWAY = "Bad Gateway",
        SERVICE_UNAVAILABLE = "Service Unavailable",
        GENERIC_ERROR = "Generic Error"
    }
}
/**
 * Catch common errors (based on status code).
 * @param result
 */
export declare function catchGenericError(result: Result): void;
