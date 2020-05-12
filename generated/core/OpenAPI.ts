/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */

interface Config {
    BASE: string;
    VERSION: string;
    TOKEN: string;
    SECURITY: { [definedName: string]: object };
}

export const OpenAPI: Config = {
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