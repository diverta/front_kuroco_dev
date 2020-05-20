/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */
import { __extends } from "tslib";
import { isSuccess } from './isSuccess';
var ApiError = /** @class */ (function (_super) {
    __extends(ApiError, _super);
    function ApiError(result, message) {
        var _this = _super.call(this, message) || this;
        _this.url = result.url;
        _this.status = result.status;
        _this.statusText = result.statusText;
        _this.body = result.body;
        return _this;
    }
    return ApiError;
}(Error));
export { ApiError };
(function (ApiError) {
    var Message;
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
})(ApiError || (ApiError = {}));
/**
 * Catch common errors (based on status code).
 * @param result
 */
export function catchGenericError(result) {
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
    if (!isSuccess(result.status)) {
        throw new ApiError(result, ApiError.Message.GENERIC_ERROR);
    }
}
