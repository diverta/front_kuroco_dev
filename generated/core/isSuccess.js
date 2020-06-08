"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSuccess = void 0;
/**
 * Check success response code.
 * @param status Status code
 */
function isSuccess(status) {
    return status >= 200 && status < 300;
}
exports.isSuccess = isSuccess;
