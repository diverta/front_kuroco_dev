import { Result } from './Result';
import { AuthenticationService } from '../services/AuthenticationService';
export declare const SpecialOperations: {
    login: typeof AuthenticationService.postAuthenticationServiceRcmsApi1AuthLogin;
    logout: typeof AuthenticationService.postAuthenticationServiceRcmsApi1AuthLogout;
    token: typeof AuthenticationService.postAuthenticationServiceRcmsApi1AuthToken;
};
export declare class Auth {
    static login(param: Parameters<typeof SpecialOperations.login>[0]): Promise<number | void>;
    static logout(param: Parameters<typeof SpecialOperations.logout>[0]): Promise<Result<any>>;
    static createToken(param: Parameters<typeof SpecialOperations.token>[0]): Promise<void | Result<any>>;
    static retryRequest(requestFn: () => Promise<Result>, result: Result): Promise<Result<any>>;
}
export declare namespace Auth {
    let onErrorHandler: (result: Result) => Promise<void>;
}
export interface LoginResponse {
    grant_token: string;
    status: number;
    info: any;
    messages: string[];
    errors: string[];
}
export interface TokenResponse {
    access_token: string;
    refresh_token: string;
}
//# sourceMappingURL=Auth.d.ts.map