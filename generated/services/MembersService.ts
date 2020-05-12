/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */

import { ApiError, catchGenericError } from '../core/ApiError';
import { request as __request } from '../core/request';
import { OpenAPI } from '../core/OpenAPI';
import { Auth } from '../core/Auth';

export class MembersService {
    /**
     *
     * ### **Member::list (v1)**
     *
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @param id Member ID
     * @param cnt Number of topics per page
     * @param pageId Page ID
     * @param sName Member search
     * @param sEmail Member search
     * @param sTel Member search
     * @param sAddress Member search
     * @param sTdfkCd Member search
     * @param groupId Member search
     * @result any
     * @throws ApiError
     */
    public static async getMembersServiceRcmsApi1Members(requestParam: MembersService.getMembersServiceRcmsApi1MembersRequest): Promise<any> {

        const request = async () =>
        await __request({
            method: 'get',
            path: `/rcms-api/1/members`,
            query: {
                '_output_format': requestParam.outputFormat,
                '_lang': requestParam.lang,
                '_charset': requestParam.charset,
                'id[]': requestParam.id,
                'cnt': requestParam.cnt,
                'pageID': requestParam.pageId,
                's_name': requestParam.sName,
                's_email': requestParam.sEmail,
                's_tel': requestParam.sTel,
                's_address': requestParam.sAddress,
                's_tdfk_cd': requestParam.sTdfkCd,
                'group_id': requestParam.groupId,
            },
        });

        const security = {
            'Token-Auth': OpenAPI.SECURITY['Token-Auth'],
        };
        const shouldHookToken = Object.values(security).find((v: any) => v.type === 'apiKey');

        const result = await request().then(result => {
            if (shouldHookToken && result.status === 401) {
                return Auth.loginWithStoredToken({ requestBody: {} }).then(async () => await request());
            }
            return result;
        });

        catchGenericError(result);
        return result.body;
    }
    /**
     *
     * ### **Member::details (v1)**
     *
     *
     * @param memberId
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    public static async getMembersServiceRcmsApi1MembersMemberId(requestParam: MembersService.getMembersServiceRcmsApi1MembersMemberIdRequest): Promise<any> {

        const request = async () =>
        await __request({
            method: 'get',
            path: `/rcms-api/1/members/${requestParam.memberId}`,
            query: {
                '_output_format': requestParam.outputFormat,
                '_lang': requestParam.lang,
                '_charset': requestParam.charset,
            },
        });

        const security = {
            'Token-Auth': OpenAPI.SECURITY['Token-Auth'],
        };
        const shouldHookToken = Object.values(security).find((v: any) => v.type === 'apiKey');

        const result = await request().then(result => {
            if (shouldHookToken && result.status === 401) {
                return Auth.loginWithStoredToken({ requestBody: {} }).then(async () => await request());
            }
            return result;
        });

        catchGenericError(result);
        return result.body;
    }
    /**
     *
     * ### **Member::insert (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **default_group_id** `1`
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    public static async postMembersServiceRcmsApi1MembersInsert(requestParam: MembersService.postMembersServiceRcmsApi1MembersInsertRequest): Promise<any> {

        const request = async () =>
        await __request({
            method: 'post',
            path: `/rcms-api/1/members/insert`,
            query: {
                '_output_format': requestParam.outputFormat,
                '_lang': requestParam.lang,
                '_charset': requestParam.charset,
            },
            body: requestParam.requestBody,
        });

        const security = {
            'Token-Auth': OpenAPI.SECURITY['Token-Auth'],
        };
        const shouldHookToken = Object.values(security).find((v: any) => v.type === 'apiKey');

        const result = await request().then(result => {
            if (shouldHookToken && result.status === 401) {
                return Auth.loginWithStoredToken({ requestBody: {} }).then(async () => await request());
            }
            return result;
        });

        catchGenericError(result);
        return result.body;
    }
    /**
     *
     * ### **Member::update (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **allowed_group_ids** `1`
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    public static async postMembersServiceRcmsApi1MembersUpdate(requestParam: MembersService.postMembersServiceRcmsApi1MembersUpdateRequest): Promise<any> {

        const request = async () =>
        await __request({
            method: 'post',
            path: `/rcms-api/1/members/update`,
            query: {
                '_output_format': requestParam.outputFormat,
                '_lang': requestParam.lang,
                '_charset': requestParam.charset,
            },
            body: requestParam.requestBody,
        });

        const security = {
            'Token-Auth': OpenAPI.SECURITY['Token-Auth'],
        };
        const shouldHookToken = Object.values(security).find((v: any) => v.type === 'apiKey');

        const result = await request().then(result => {
            if (shouldHookToken && result.status === 401) {
                return Auth.loginWithStoredToken({ requestBody: {} }).then(async () => await request());
            }
            return result;
        });

        catchGenericError(result);
        return result.body;
    }
    /**
     *
     * ### **Member::delete (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **allowed_group_ids** `1`
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    public static async postMembersServiceRcmsApi1MembersDelete(requestParam: MembersService.postMembersServiceRcmsApi1MembersDeleteRequest): Promise<any> {

        const request = async () =>
        await __request({
            method: 'post',
            path: `/rcms-api/1/members/delete`,
            query: {
                '_output_format': requestParam.outputFormat,
                '_lang': requestParam.lang,
                '_charset': requestParam.charset,
            },
            body: requestParam.requestBody,
        });

        const security = {
            'Token-Auth': OpenAPI.SECURITY['Token-Auth'],
        };
        const shouldHookToken = Object.values(security).find((v: any) => v.type === 'apiKey');

        const result = await request().then(result => {
            if (shouldHookToken && result.status === 401) {
                return Auth.loginWithStoredToken({ requestBody: {} }).then(async () => await request());
            }
            return result;
        });

        catchGenericError(result);
        return result.body;
    }
    /**
     *
     * ### **Member::update (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **self_only** `true`
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    public static async postMembersServiceRcmsApi1MeUpdate(requestParam: MembersService.postMembersServiceRcmsApi1MeUpdateRequest): Promise<any> {

        const request = async () =>
        await __request({
            method: 'post',
            path: `/rcms-api/1/me/update`,
            query: {
                '_output_format': requestParam.outputFormat,
                '_lang': requestParam.lang,
                '_charset': requestParam.charset,
            },
            body: requestParam.requestBody,
        });

        const security = {
            'Token-Auth': OpenAPI.SECURITY['Token-Auth'],
        };
        const shouldHookToken = Object.values(security).find((v: any) => v.type === 'apiKey');

        const result = await request().then(result => {
            if (shouldHookToken && result.status === 401) {
                return Auth.loginWithStoredToken({ requestBody: {} }).then(async () => await request());
            }
            return result;
        });

        catchGenericError(result);
        return result.body;
    }
    /**
     *
     * ### **Member::delete (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **self_only** `true`
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    public static async postMembersServiceRcmsApi1MeDelete(requestParam: MembersService.postMembersServiceRcmsApi1MeDeleteRequest): Promise<any> {

        const request = async () =>
        await __request({
            method: 'post',
            path: `/rcms-api/1/me/delete`,
            query: {
                '_output_format': requestParam.outputFormat,
                '_lang': requestParam.lang,
                '_charset': requestParam.charset,
            },
            body: requestParam.requestBody,
        });

        const security = {
            'Token-Auth': OpenAPI.SECURITY['Token-Auth'],
        };
        const shouldHookToken = Object.values(security).find((v: any) => v.type === 'apiKey');

        const result = await request().then(result => {
            if (shouldHookToken && result.status === 401) {
                return Auth.loginWithStoredToken({ requestBody: {} }).then(async () => await request());
            }
            return result;
        });

        catchGenericError(result);
        return result.body;
    }
}

export namespace MembersService {
    export interface getMembersServiceRcmsApi1MembersRequest {
        outputFormat?: string,
        lang?: string,
        charset?: string,
        id?: Array<number>,
        cnt?: number,
        pageId?: number,
        sName?: string,
        sEmail?: string,
        sTel?: string,
        sAddress?: string,
        sTdfkCd?: string,
        groupId?: number,
    };
    export type getMembersServiceRcmsApi1MembersResponse = any;
    export interface getMembersServiceRcmsApi1MembersMemberIdRequest {
        memberId: number,
        outputFormat?: string,
        lang?: string,
        charset?: string,
    };
    export type getMembersServiceRcmsApi1MembersMemberIdResponse = any;
    export interface postMembersServiceRcmsApi1MembersInsertRequest {
        requestBody: {
            /**
             * Email
             */
            email: string,
            /**
             * Login ID
             */
            login_id?: string,
            /**
             * Password
             */
            login_pwd: string,
            /**
             * Nickname
             */
            nickname: string,
            /**
             * Family name
             */
            name1?: string,
            /**
             * Given name
             */
            name2?: string,
            /**
             * Sex
             */
            sex?: ('m' | 'f' | 'e'),
            /**
             * Date of birth
             */
            birth?: string,
            /**
             * Image1
             */
            member_photo?: any,
            /**
             * Text
             */
            text: string,
            /**
             * Textarea
             */
            textarea?: string,
            /**
             * Radio
             * * 1 => radioOption1
             * * 2 => radioOption2
             * * 3 => radioOption3
             */
            radio?: any,
            /**
             * Selectbox
             * * 1 => selectBoxOption1
             * * 2 => selectBoxOption2
             * * 3 => selectBoxOption3
             */
            selectbox?: any,
            /**
             * Checkbox
             * * 1 => checkboxOption1
             * * 2 => checkboxOption2
             * * 3 => checkboxOption3
             */
            checkbox?: Array<any>,
            /**
             * Date
             */
            date?: any,
            relation?: number,
            /**
             * File
             */
            file?: any,
            /**
             * /label/open_flg
             */
            open_flg?: (0 | 1),
            /**
             * /label/login_ok_flg
             */
            login_ok_flg?: (0 | 1),
            /**
             * /label/send_validate
             */
            validate_only?: boolean,
        },
        outputFormat?: string,
        lang?: string,
        charset?: string,
    };
    export type postMembersServiceRcmsApi1MembersInsertResponse = any;
    export interface postMembersServiceRcmsApi1MembersUpdateRequest {
        requestBody: {
            /**
             * /label/member_id
             */
            member_id: number,
            /**
             * Email
             */
            email?: string,
            /**
             * Login ID
             */
            login_id?: string,
            /**
             * Password
             */
            login_pwd?: string,
            /**
             * Nickname
             */
            nickname?: string,
            /**
             * Family name
             */
            name1?: string,
            /**
             * Given name
             */
            name2?: string,
            /**
             * Sex
             */
            sex?: ('m' | 'f' | 'e'),
            /**
             * Date of birth
             */
            birth?: string,
            /**
             * Image1
             */
            member_photo?: any,
            /**
             * Text
             */
            text?: string,
            /**
             * Textarea
             */
            textarea?: string,
            /**
             * Radio
             * * 1 => radioOption1
             * * 2 => radioOption2
             * * 3 => radioOption3
             */
            radio?: any,
            /**
             * Selectbox
             * * 1 => selectBoxOption1
             * * 2 => selectBoxOption2
             * * 3 => selectBoxOption3
             */
            selectbox?: any,
            /**
             * Checkbox
             * * 1 => checkboxOption1
             * * 2 => checkboxOption2
             * * 3 => checkboxOption3
             */
            checkbox?: Array<any>,
            /**
             * Date
             */
            date?: any,
            relation?: number,
            /**
             * File
             */
            file?: any,
            /**
             * /label/group_id
             */
            group_id?: (1),
            /**
             * /label/open_flg
             */
            open_flg?: (0 | 1),
            /**
             * /label/login_ok_flg
             */
            login_ok_flg?: (0 | 1),
            /**
             * /label/send_validate
             */
            validate_only?: boolean,
        },
        outputFormat?: string,
        lang?: string,
        charset?: string,
    };
    export type postMembersServiceRcmsApi1MembersUpdateResponse = any;
    export interface postMembersServiceRcmsApi1MembersDeleteRequest {
        requestBody: {
            /**
             * /label/member_id
             */
            member_id: number,
        },
        outputFormat?: string,
        lang?: string,
        charset?: string,
    };
    export type postMembersServiceRcmsApi1MembersDeleteResponse = any;
    export interface postMembersServiceRcmsApi1MeUpdateRequest {
        requestBody: {
            /**
             * Email
             */
            email?: string,
            /**
             * Login ID
             */
            login_id?: string,
            /**
             * Password
             */
            login_pwd?: string,
            /**
             * Nickname
             */
            nickname?: string,
            /**
             * Family name
             */
            name1?: string,
            /**
             * Given name
             */
            name2?: string,
            /**
             * Sex
             */
            sex?: ('m' | 'f' | 'e'),
            /**
             * Date of birth
             */
            birth?: string,
            /**
             * Image1
             */
            member_photo?: any,
            /**
             * Text
             */
            text?: string,
            /**
             * Textarea
             */
            textarea?: string,
            /**
             * Radio
             * * 1 => radioOption1
             * * 2 => radioOption2
             * * 3 => radioOption3
             */
            radio?: any,
            /**
             * Selectbox
             * * 1 => selectBoxOption1
             * * 2 => selectBoxOption2
             * * 3 => selectBoxOption3
             */
            selectbox?: any,
            /**
             * Checkbox
             * * 1 => checkboxOption1
             * * 2 => checkboxOption2
             * * 3 => checkboxOption3
             */
            checkbox?: Array<any>,
            /**
             * Date
             */
            date?: any,
            relation?: number,
            /**
             * File
             */
            file?: any,
            /**
             * /label/group_id
             */
            group_id?: Array<(1 | 2)>,
            /**
             * /label/open_flg
             */
            open_flg?: (0 | 1),
            /**
             * /label/login_ok_flg
             */
            login_ok_flg?: (0 | 1),
            /**
             * /label/send_validate
             */
            validate_only?: boolean,
        },
        outputFormat?: string,
        lang?: string,
        charset?: string,
    };
    export type postMembersServiceRcmsApi1MeUpdateResponse = any;
    export interface postMembersServiceRcmsApi1MeDeleteRequest {
        requestBody: any,
        outputFormat?: string,
        lang?: string,
        charset?: string,
    };
    export type postMembersServiceRcmsApi1MeDeleteResponse = any;
}

export const infos = [
    {
        path: '/rcms-api/1/members',
        httpMethod: 'get',
        class: MembersService,
        className: 'MembersService',
        method: MembersService.getMembersServiceRcmsApi1Members,
        methodName: 'getMembersServiceRcmsApi1Members',
        auth: null,
        description: `
        export interface getMembersServiceRcmsApi1MembersRequest {
            outputFormat?: string,
            lang?: string,
            charset?: string,
            id?: Array<number>,
            cnt?: number,
            pageId?: number,
            sName?: string,
            sEmail?: string,
            sTel?: string,
            sAddress?: string,
            sTdfkCd?: string,
            groupId?: number,
        };
        export type getMembersServiceRcmsApi1MembersResponse = any;
        `,
    },
    {
        path: '/rcms-api/1/members/${requestParam.memberId}',
        httpMethod: 'get',
        class: MembersService,
        className: 'MembersService',
        method: MembersService.getMembersServiceRcmsApi1MembersMemberId,
        methodName: 'getMembersServiceRcmsApi1MembersMemberId',
        auth: null,
        description: `
        export interface getMembersServiceRcmsApi1MembersMemberIdRequest {
            memberId: number,
            outputFormat?: string,
            lang?: string,
            charset?: string,
        };
        export type getMembersServiceRcmsApi1MembersMemberIdResponse = any;
        `,
    },
    {
        path: '/rcms-api/1/members/insert',
        httpMethod: 'post',
        class: MembersService,
        className: 'MembersService',
        method: MembersService.postMembersServiceRcmsApi1MembersInsert,
        methodName: 'postMembersServiceRcmsApi1MembersInsert',
        auth: null,
        description: `
        export interface postMembersServiceRcmsApi1MembersInsertRequest {
            requestBody: {
                /**
                 * Email
                 */
                email: string,
                /**
                 * Login ID
                 */
                login_id?: string,
                /**
                 * Password
                 */
                login_pwd: string,
                /**
                 * Nickname
                 */
                nickname: string,
                /**
                 * Family name
                 */
                name1?: string,
                /**
                 * Given name
                 */
                name2?: string,
                /**
                 * Sex
                 */
                sex?: ('m' | 'f' | 'e'),
                /**
                 * Date of birth
                 */
                birth?: string,
                /**
                 * Image1
                 */
                member_photo?: any,
                /**
                 * Text
                 */
                text: string,
                /**
                 * Textarea
                 */
                textarea?: string,
                /**
                 * Radio
                 * * 1 => radioOption1
                 * * 2 => radioOption2
                 * * 3 => radioOption3
                 */
                radio?: any,
                /**
                 * Selectbox
                 * * 1 => selectBoxOption1
                 * * 2 => selectBoxOption2
                 * * 3 => selectBoxOption3
                 */
                selectbox?: any,
                /**
                 * Checkbox
                 * * 1 => checkboxOption1
                 * * 2 => checkboxOption2
                 * * 3 => checkboxOption3
                 */
                checkbox?: Array<any>,
                /**
                 * Date
                 */
                date?: any,
                relation?: number,
                /**
                 * File
                 */
                file?: any,
                /**
                 * /label/open_flg
                 */
                open_flg?: (0 | 1),
                /**
                 * /label/login_ok_flg
                 */
                login_ok_flg?: (0 | 1),
                /**
                 * /label/send_validate
                 */
                validate_only?: boolean,
            },
            outputFormat?: string,
            lang?: string,
            charset?: string,
        };
        export type postMembersServiceRcmsApi1MembersInsertResponse = any;
        `,
    },
    {
        path: '/rcms-api/1/members/update',
        httpMethod: 'post',
        class: MembersService,
        className: 'MembersService',
        method: MembersService.postMembersServiceRcmsApi1MembersUpdate,
        methodName: 'postMembersServiceRcmsApi1MembersUpdate',
        auth: null,
        description: `
        export interface postMembersServiceRcmsApi1MembersUpdateRequest {
            requestBody: {
                /**
                 * /label/member_id
                 */
                member_id: number,
                /**
                 * Email
                 */
                email?: string,
                /**
                 * Login ID
                 */
                login_id?: string,
                /**
                 * Password
                 */
                login_pwd?: string,
                /**
                 * Nickname
                 */
                nickname?: string,
                /**
                 * Family name
                 */
                name1?: string,
                /**
                 * Given name
                 */
                name2?: string,
                /**
                 * Sex
                 */
                sex?: ('m' | 'f' | 'e'),
                /**
                 * Date of birth
                 */
                birth?: string,
                /**
                 * Image1
                 */
                member_photo?: any,
                /**
                 * Text
                 */
                text?: string,
                /**
                 * Textarea
                 */
                textarea?: string,
                /**
                 * Radio
                 * * 1 => radioOption1
                 * * 2 => radioOption2
                 * * 3 => radioOption3
                 */
                radio?: any,
                /**
                 * Selectbox
                 * * 1 => selectBoxOption1
                 * * 2 => selectBoxOption2
                 * * 3 => selectBoxOption3
                 */
                selectbox?: any,
                /**
                 * Checkbox
                 * * 1 => checkboxOption1
                 * * 2 => checkboxOption2
                 * * 3 => checkboxOption3
                 */
                checkbox?: Array<any>,
                /**
                 * Date
                 */
                date?: any,
                relation?: number,
                /**
                 * File
                 */
                file?: any,
                /**
                 * /label/group_id
                 */
                group_id?: (1),
                /**
                 * /label/open_flg
                 */
                open_flg?: (0 | 1),
                /**
                 * /label/login_ok_flg
                 */
                login_ok_flg?: (0 | 1),
                /**
                 * /label/send_validate
                 */
                validate_only?: boolean,
            },
            outputFormat?: string,
            lang?: string,
            charset?: string,
        };
        export type postMembersServiceRcmsApi1MembersUpdateResponse = any;
        `,
    },
    {
        path: '/rcms-api/1/members/delete',
        httpMethod: 'post',
        class: MembersService,
        className: 'MembersService',
        method: MembersService.postMembersServiceRcmsApi1MembersDelete,
        methodName: 'postMembersServiceRcmsApi1MembersDelete',
        auth: null,
        description: `
        export interface postMembersServiceRcmsApi1MembersDeleteRequest {
            requestBody: {
                /**
                 * /label/member_id
                 */
                member_id: number,
            },
            outputFormat?: string,
            lang?: string,
            charset?: string,
        };
        export type postMembersServiceRcmsApi1MembersDeleteResponse = any;
        `,
    },
    {
        path: '/rcms-api/1/me/update',
        httpMethod: 'post',
        class: MembersService,
        className: 'MembersService',
        method: MembersService.postMembersServiceRcmsApi1MeUpdate,
        methodName: 'postMembersServiceRcmsApi1MeUpdate',
        auth: null,
        description: `
        export interface postMembersServiceRcmsApi1MeUpdateRequest {
            requestBody: {
                /**
                 * Email
                 */
                email?: string,
                /**
                 * Login ID
                 */
                login_id?: string,
                /**
                 * Password
                 */
                login_pwd?: string,
                /**
                 * Nickname
                 */
                nickname?: string,
                /**
                 * Family name
                 */
                name1?: string,
                /**
                 * Given name
                 */
                name2?: string,
                /**
                 * Sex
                 */
                sex?: ('m' | 'f' | 'e'),
                /**
                 * Date of birth
                 */
                birth?: string,
                /**
                 * Image1
                 */
                member_photo?: any,
                /**
                 * Text
                 */
                text?: string,
                /**
                 * Textarea
                 */
                textarea?: string,
                /**
                 * Radio
                 * * 1 => radioOption1
                 * * 2 => radioOption2
                 * * 3 => radioOption3
                 */
                radio?: any,
                /**
                 * Selectbox
                 * * 1 => selectBoxOption1
                 * * 2 => selectBoxOption2
                 * * 3 => selectBoxOption3
                 */
                selectbox?: any,
                /**
                 * Checkbox
                 * * 1 => checkboxOption1
                 * * 2 => checkboxOption2
                 * * 3 => checkboxOption3
                 */
                checkbox?: Array<any>,
                /**
                 * Date
                 */
                date?: any,
                relation?: number,
                /**
                 * File
                 */
                file?: any,
                /**
                 * /label/group_id
                 */
                group_id?: Array<(1 | 2)>,
                /**
                 * /label/open_flg
                 */
                open_flg?: (0 | 1),
                /**
                 * /label/login_ok_flg
                 */
                login_ok_flg?: (0 | 1),
                /**
                 * /label/send_validate
                 */
                validate_only?: boolean,
            },
            outputFormat?: string,
            lang?: string,
            charset?: string,
        };
        export type postMembersServiceRcmsApi1MeUpdateResponse = any;
        `,
    },
    {
        path: '/rcms-api/1/me/delete',
        httpMethod: 'post',
        class: MembersService,
        className: 'MembersService',
        method: MembersService.postMembersServiceRcmsApi1MeDelete,
        methodName: 'postMembersServiceRcmsApi1MeDelete',
        auth: null,
        description: `
        export interface postMembersServiceRcmsApi1MeDeleteRequest {
            requestBody: any,
            outputFormat?: string,
            lang?: string,
            charset?: string,
        };
        export type postMembersServiceRcmsApi1MeDeleteResponse = any;
        `,
    },
];
