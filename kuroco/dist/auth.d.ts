export declare class Auth {
    /**
     * hooks auto re-requesting process with overriding browser's native fetch function.
     * this is for the user using token-based authentication of Kuroco.
     * @param onResolved a function if you need to execute on resolved.
     * @param onRejected a function if you need to execute on rejected.
     */
    static setupAuthHookOnFetchForKurocoRequestings(onResolved?: Function, onRejected?: Function): void;
    static handleError(onRejected?: Function): Promise<never>;
    static loginWithStoredToken(): Promise<undefined>;
    static login(payload: any): Promise<void>;
    static getTokenAppendedToHttpHeader(init?: RequestInit): RequestInit;
    static createToken(payload: any): Promise<void>;
    static logout(): Promise<void | import("./runtime").JSONApiResponse<any>>;
    /** get */
    static getAccessToken(): string;
    static getRefreshToken(): string;
    /** set */
    static setAccessToken(token: string): void;
    static setRefreshToken(token: string): void;
    /** delete */
    static deleteAccessToken(): void;
    static deleteRefreshToken(): void;
}
export declare namespace Auth {
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
//# sourceMappingURL=auth.d.ts.map