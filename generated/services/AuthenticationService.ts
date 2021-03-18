/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { request as __request } from '../core/request';

export class AuthenticationService {

    /**
     *
     * ### **Login::login_challenge (v1)**
     *
     *
     * @returns any
     * @throws ApiError
     */
    public static async postAuthenticationService({
        requestBody,
        outputFormat,
        lang,
        charset,
    }: {
        requestBody: {
            /**
             * Login ID
             */
            email: string,
            /**
             * Password
             */
            password: string,
            /**
             * Log in automatically next time
             */
            login_save: 0 | 1,
        },
        /** Format (json|xml|csv|zip) **/
        outputFormat?: string,
        /** Language **/
        lang?: string,
        /** Charset **/
        charset?: string,
    }): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/rcms-api/1/auth/login`,
            query: {
                '_output_format': outputFormat,
                '_lang': lang,
                '_charset': charset,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     *
     * ### **Login::logout (v1)**
     *
     *
     * @returns any
     * @throws ApiError
     */
    public static async postAuthenticationService1({
        outputFormat,
        lang,
        charset,
    }: {
        /** Format (json|xml|csv|zip) **/
        outputFormat?: string,
        /** Language **/
        lang?: string,
        /** Charset **/
        charset?: string,
    }): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/rcms-api/1/auth/logout`,
            query: {
                '_output_format': outputFormat,
                '_lang': lang,
                '_charset': charset,
            },
        });
        return result.body;
    }

    /**
     *
     * ### **Login::token (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **use_refresh_token** `true`
     *
     * @returns any
     * @throws ApiError
     */
    public static async postAuthenticationService2({
        requestBody,
        outputFormat,
        lang,
        charset,
    }: {
        requestBody: {
            /**
             * Resource grant token
             */
            grant_token: string,
            /**
             * Refresh token
             */
            refresh_token: string,
        },
        /** Format (json|xml|csv|zip) **/
        outputFormat?: string,
        /** Language **/
        lang?: string,
        /** Charset **/
        charset?: string,
    }): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/rcms-api/1/auth/token`,
            query: {
                '_output_format': outputFormat,
                '_lang': lang,
                '_charset': charset,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     *
     * ### **Login::reminder (v1)**
     *
     *
     * @returns any
     * @throws ApiError
     */
    public static async postAuthenticationService3({
        requestBody,
        outputFormat,
        lang,
        charset,
    }: {
        requestBody: ({
            /**
             * E-mail
             */
            email: string,
        } | {
            /**
             * Token
             */
            token: string,
            /**
             * Temporary Password
             */
            temp_pwd: string,
            /**
             * New Password
             */
            login_pwd: string,
        }),
        /** Format (json|xml|csv|zip) **/
        outputFormat?: string,
        /** Language **/
        lang?: string,
        /** Charset **/
        charset?: string,
    }): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/rcms-api/1/me/pw/reminder`,
            query: {
                '_output_format': outputFormat,
                '_lang': lang,
                '_charset': charset,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     *
     * ### **Login::reset_password (v1)**
     *
     *
     * @returns any
     * @throws ApiError
     */
    public static async postAuthenticationService4({
        requestBody,
        outputFormat,
        lang,
        charset,
    }: {
        requestBody: {
            /**
             * Token
             */
            login_id: string,
            /**
             * Current Login Password
             */
            current_password: string,
            /**
             * New Password
             */
            new_password: string,
        },
        /** Format (json|xml|csv|zip) **/
        outputFormat?: string,
        /** Language **/
        lang?: string,
        /** Charset **/
        charset?: string,
    }): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/rcms-api/1/me/pw/reset`,
            query: {
                '_output_format': outputFormat,
                '_lang': lang,
                '_charset': charset,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     *
     * ### **Login::profile (v1)**
     *
     *
     * @returns any
     * @throws ApiError
     */
    public static async getAuthenticationService({
        outputFormat,
        lang,
        charset,
    }: {
        /** Format (json|xml|csv|zip) **/
        outputFormat?: string,
        /** Language **/
        lang?: string,
        /** Charset **/
        charset?: string,
    }): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/rcms-api/1/me/profile`,
            query: {
                '_output_format': outputFormat,
                '_lang': lang,
                '_charset': charset,
            },
        });
        return result.body;
    }

    /**
     *
     * ### **Login::firebaseToken (v1)**
     *
     *
     * @returns any
     * @throws ApiError
     */
    public static async postAuthenticationService5({
        outputFormat,
        lang,
        charset,
    }: {
        /** Format (json|xml|csv|zip) **/
        outputFormat?: string,
        /** Language **/
        lang?: string,
        /** Charset **/
        charset?: string,
    }): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/rcms-api/1/firebase_token`,
            query: {
                '_output_format': outputFormat,
                '_lang': lang,
                '_charset': charset,
            },
        });
        return result.body;
    }

}