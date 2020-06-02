"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenAPI = {
    BASE: 'https://kuroco-dev.r-cms.jp',
    VERSION: '1',
    TOKEN: '',
    SECURITY: {
        'Token-Auth': {
            'type': 'apiKey',
            'in': 'header',
            'name': 'X-RCMS-API-ACCESS-TOKEN',
        },
    }
};
