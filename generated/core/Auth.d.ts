import { SpecialOperationInfo } from './ApiInfo';
import { Result } from './Result';
export declare class Auth {
    static login(param: Parameters<typeof SpecialOperationInfo.login.method>[0]): Promise<number | void>;
    static logout(param: Parameters<typeof SpecialOperationInfo.logout.method>[0]): Promise<any>;
    static createToken(param: Parameters<typeof SpecialOperationInfo.token.method>[0]): Promise<any>;
    static retryRequest(requestFn: () => Promise<Result>, result: Result): Promise<Result>;
    /** get */
    static getAccessToken(): string;
    static getRefreshToken(): string;
    /** set */
    static setAccessToken(token: string): void;
    static setRefreshToken(token: string): void;
    /** delete */
    static deleteAccessToken(): void;
    static deleteRefreshToken(): void;
    static deleteTokens(): void;
}
export declare namespace Auth {
    let onErrorHandler: (result: Result) => Promise<void>;
    enum TokenKeys {
        accessToken = "accessToken",
        refreshToken = "refreshToken"
    }
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
