interface Config {
    BASE: string;
    VERSION: string;
    TOKEN: string;
    SECURITY: {
        [definedName: string]: object;
    };
}
export declare const OpenAPI: Config;
export {};
