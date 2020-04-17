import { AuthenticationApi } from './apis/AuthenticationApi';
export declare const AUTH_INFO: {
    'LOGIN': {
        classFile: typeof AuthenticationApi;
        requestFnName: "rcmsApi1AuthLoginPost";
    };
    'LOGOUT': {
        classFile: typeof AuthenticationApi;
        requestFnName: "rcmsApi1AuthLogoutPost";
    };
    'TOKEN': {
        classFile: typeof AuthenticationApi;
        requestFnName: "rcmsApi1AuthTokenPost";
    };
};
export declare const API_INFOS: {
    infos: {
        url: string;
        requestMethodName: string;
        requestRequiredParamSample: {
            [k: string]: any;
        };
    }[];
    className: string;
}[];
export declare const checkUrlMatchesFns: {
    Login: (inputUrl: string) => boolean;
    Logout: (inputUrl: string) => boolean;
    Token: (inputUrl: string) => boolean;
    _All: (inputUrl: string) => boolean;
};
export declare const getInjectedInlineObj: (className: string, methodName: string, injectValue: any) => {};
//# sourceMappingURL=auth_info.d.ts.map