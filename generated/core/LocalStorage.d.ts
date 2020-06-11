export declare class LocalStorage {
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
export declare namespace LocalStorage {
    enum TokenKeys {
        accessToken = "accessToken",
        refreshToken = "refreshToken"
    }
}
//# sourceMappingURL=LocalStorage.d.ts.map