"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */
Object.defineProperty(exports, "__esModule", { value: true });
exports.catchGenericError = exports.ApiError = void 0;
const isSuccess_1 = require("./isSuccess");
class ApiError extends Error {
    constructor(result, message) {
        super(message);
        this.url = result.url;
        this.status = result.status;
        this.statusText = result.statusText;
        this.body = result.body;
    }
}
exports.ApiError = ApiError;
(function (ApiError) {
    let Message;
    (function (Message) {
        Message["BAD_REQUEST"] = "Bad Request";
        Message["UNAUTHORIZED"] = "Unauthorized";
        Message["FORBIDDEN"] = "Forbidden";
        Message["NOT_FOUND"] = "Not Found";
        Message["INTERNAL_SERVER_ERROR"] = "Internal Server Error";
        Message["BAD_GATEWAY"] = "Bad Gateway";
        Message["SERVICE_UNAVAILABLE"] = "Service Unavailable";
        Message["GENERIC_ERROR"] = "Generic Error";
    })(Message = ApiError.Message || (ApiError.Message = {}));
})(ApiError = exports.ApiError || (exports.ApiError = {}));
/**
 * Catch common errors (based on status code).
 * @param result
 */
function catchGenericError(result) {
    switch (result.status) {
        case 400:
            throw new ApiError(result, ApiError.Message.BAD_REQUEST);
        case 401:
            throw new ApiError(result, ApiError.Message.UNAUTHORIZED);
        case 403:
            throw new ApiError(result, ApiError.Message.FORBIDDEN);
        case 404:
            throw new ApiError(result, ApiError.Message.NOT_FOUND);
        case 500:
            throw new ApiError(result, ApiError.Message.INTERNAL_SERVER_ERROR);
        case 502:
            throw new ApiError(result, ApiError.Message.BAD_GATEWAY);
        case 503:
            throw new ApiError(result, ApiError.Message.SERVICE_UNAVAILABLE);
    }
    if (!isSuccess_1.isSuccess(result.status)) {
        throw new ApiError(result, ApiError.Message.GENERIC_ERROR);
    }
}
exports.catchGenericError = catchGenericError;
