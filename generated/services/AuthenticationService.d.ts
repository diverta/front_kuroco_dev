import { Result } from '../core/Result';
export declare class AuthenticationService {
    /**
     *
     * ### **Login::login_challenge (v1)**
     *
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv|zip)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postAuthenticationServiceRcmsApi1AuthLogin(requestParam: AuthenticationService.postAuthenticationServiceRcmsApi1AuthLoginRequest): Promise<Result<any>>;
    /**
     *
     * ### **Login::logout (v1)**
     *
     *
     * @param outputFormat Format (json|xml|csv|zip)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postAuthenticationServiceRcmsApi1AuthLogout(requestParam: AuthenticationService.postAuthenticationServiceRcmsApi1AuthLogoutRequest): Promise<Result<any>>;
    /**
     *
     * ### **Login::token (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **use_refresh_token** `true`
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv|zip)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postAuthenticationServiceRcmsApi1AuthToken(requestParam: AuthenticationService.postAuthenticationServiceRcmsApi1AuthTokenRequest): Promise<Result<any>>;
    /**
     *
     * ### **Login::reminder (v1)**
     *
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv|zip)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postAuthenticationServiceRcmsApi1MePwReminder(requestParam: AuthenticationService.postAuthenticationServiceRcmsApi1MePwReminderRequest): Promise<Result<any>>;
    /**
     *
     * ### **Login::reset_password (v1)**
     *
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv|zip)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postAuthenticationServiceRcmsApi1MePwReset(requestParam: AuthenticationService.postAuthenticationServiceRcmsApi1MePwResetRequest): Promise<Result<any>>;
    /**
     *
     * ### **Login::profile (v1)**
     *
     *
     * @param outputFormat Format (json|xml|csv|zip)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static getAuthenticationServiceRcmsApi1MeProfile(requestParam: AuthenticationService.getAuthenticationServiceRcmsApi1MeProfileRequest): Promise<Result<any>>;
    /**
     *
     * ### **Login::firebaseToken (v1)**
     *
     *
     * @param outputFormat Format (json|xml|csv|zip)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postAuthenticationServiceRcmsApi1FirebaseToken(requestParam: AuthenticationService.postAuthenticationServiceRcmsApi1FirebaseTokenRequest): Promise<Result<any>>;
}
export declare namespace AuthenticationService {
    interface postAuthenticationServiceRcmsApi1AuthLoginRequest {
        requestBody: {
            /**
             * Login ID
             */
            email?: string;
            /**
             * Password
             */
            password?: string;
            /**
             * Log in automatically next time
             */
            login_save?: (0 | 1);
        };
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type postAuthenticationServiceRcmsApi1AuthLoginResponse = any;
    interface postAuthenticationServiceRcmsApi1AuthLogoutRequest {
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type postAuthenticationServiceRcmsApi1AuthLogoutResponse = any;
    interface postAuthenticationServiceRcmsApi1AuthTokenRequest {
        requestBody: {
            /**
             * Resource grant token
             */
            grant_token?: string;
            /**
             * Refresh token
             */
            refresh_token?: string;
        };
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type postAuthenticationServiceRcmsApi1AuthTokenResponse = any;
    interface postAuthenticationServiceRcmsApi1MePwReminderRequest {
        requestBody: {
            email: string;
        } | {
            token: string;
            temp_pwd: string;
            login_pwd: string;
        };
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type postAuthenticationServiceRcmsApi1MePwReminderResponse = any;
    interface postAuthenticationServiceRcmsApi1MePwResetRequest {
        requestBody: {
            /**
             * Token
             */
            login_id: string;
            /**
             * Current Login Password
             */
            current_password: string;
            /**
             * New Password
             */
            new_password: string;
        };
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type postAuthenticationServiceRcmsApi1MePwResetResponse = any;
    interface getAuthenticationServiceRcmsApi1MeProfileRequest {
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type getAuthenticationServiceRcmsApi1MeProfileResponse = any;
    interface postAuthenticationServiceRcmsApi1FirebaseTokenRequest {
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type postAuthenticationServiceRcmsApi1FirebaseTokenResponse = any;
}
export declare const infos: ({
    path: string;
    httpMethod: string;
    class: typeof AuthenticationService;
    className: string;
    method: typeof AuthenticationService.postAuthenticationServiceRcmsApi1AuthLogin;
    methodName: string;
    auth: string;
    description: string;
} | {
    path: string;
    httpMethod: string;
    class: typeof AuthenticationService;
    className: string;
    method: typeof AuthenticationService.postAuthenticationServiceRcmsApi1MePwReminder;
    methodName: string;
    auth: null;
    description: string;
} | {
    path: string;
    httpMethod: string;
    class: typeof AuthenticationService;
    className: string;
    method: typeof AuthenticationService.postAuthenticationServiceRcmsApi1MePwReset;
    methodName: string;
    auth: null;
    description: string;
})[];
//# sourceMappingURL=AuthenticationService.d.ts.map