/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { request as __request } from '../core/request';

export class MembersService {

    /**
     *
     * ### **Member::list (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **filter_request_allow_list** `:ALL`
     *
     * @returns any
     * @throws ApiError
     */
    public static async getMembersService({
        outputFormat,
        lang,
        charset,
        id,
        cnt,
        pageId,
        groupId,
        filter,
    }: {
        /** Format (json|xml|csv|zip) **/
        outputFormat?: string,
        /** Language **/
        lang?: string,
        /** Charset **/
        charset?: string,
        /** Member ID **/
        id?: Array<number>,
        /** Number of topics per page **/
        cnt?: number,
        /** Page ID **/
        pageId?: number,
        /** Member search **/
        groupId?: Array<number>,
        /** Filter query **/
        filter?: string,
    }): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/rcms-api/1/members`,
            query: {
                '_output_format': outputFormat,
                '_lang': lang,
                '_charset': charset,
                'id[]': id,
                'cnt': cnt,
                'pageID': pageId,
                'group_id[]': groupId,
                'filter': filter,
            },
        });
        return result.body;
    }

    /**
     *
     * ### **Member::details (v1)**
     *
     *
     * @returns any
     * @throws ApiError
     */
    public static async getMembersService1({
        memberId,
        outputFormat,
        lang,
        charset,
    }: {
        memberId: number,
        /** Format (json|xml|csv|zip) **/
        outputFormat?: string,
        /** Language **/
        lang?: string,
        /** Charset **/
        charset?: string,
    }): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/rcms-api/1/members/${memberId}`,
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
     * ### **Member::insert (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **default_group_id** `101`
     *
     * @returns any
     * @throws ApiError
     */
    public static async postMembersService({
        requestBody,
        outputFormat,
        lang,
        charset,
    }: {
        requestBody: {
            /**
             * name1
             */
            name1?: string,
            /**
             * name2
             */
            name2?: string,
            /**
             * nickname
             */
            nickname?: string,
            /**
             * email
             */
            email?: string,
            /**
             * zip_code
             */
            zip_code?: string,
            /**
             * tdfk_cd
             */
            tdfk_cd?: '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '20' | '21' | '22' | '23' | '24' | '25' | '26' | '27' | '28' | '29' | '30' | '31' | '32' | '33' | '34' | '35' | '36' | '37' | '38' | '39' | '40' | '41' | '42' | '43' | '44' | '45' | '46' | '47' | '99',
            /**
             * address1
             */
            address1?: string,
            /**
             * address2
             */
            address2?: string,
            /**
             * address3
             */
            address3?: string,
            /**
             * tel
             */
            tel?: string,
            /**
             * email_send_ng_flg
             */
            email_send_ng_flg?: 0 | 1,
            /**
             * tel_send_ng_flg
             */
            tel_send_ng_flg?: 0 | 1,
            /**
             * login_pwd
             */
            login_pwd?: string,
            /**
             * login_id
             */
            login_id?: string,
            /**
             * text
             */
            text?: string,
            /**
             * textarea
             */
            textarea?: string,
            /**
             * selectbox
             * * 1 => selectBoxOption1
             * * 2 => selectBoxOption2
             * * 3 => selectBoxOption3
             */
            selectbox: ({
                key?: '1' | '2' | '3',
                label?: 'selectBoxOption1' | 'selectBoxOption2' | 'selectBoxOption3',
            } | '1' | '2' | '3'),
            /**
             * radio
             * * 1 => radioOption1
             * * 2 => radioOption2
             * * 3 => radioOption3
             */
            radio: ({
                key?: '1' | '2' | '3',
                label?: 'radioOption1' | 'radioOption2' | 'radioOption3',
            } | '1' | '2' | '3'),
            /**
             * checkbox
             * * 1 => checkboxOption1
             * * 2 => checkboxOption2
             * * 3 => checkboxOption3
             */
            checkbox: Array<({
                key?: '1' | '2' | '3',
                label?: 'checkboxOption1' | 'checkboxOption2' | 'checkboxOption3',
            } | '1' | '2' | '3')>,
            /**
             * date
             */
            date?: (string),
            /**
             * relation
             */
            relation?: ({
                module_type?: string,
                module_id?: number,
            } | number),
            /**
             * file
             */
            file?: {
                /**
                 * File ID returned by File Upload API
                 */
                file_id: string,
                /**
                 * File name
                 */
                file_nm: string,
                /**
                 * Description
                 */
                desc: string,
            },
            /**
             * /label/login_ok_flg
             */
            login_ok_flg: 0 | 1,
            /**
             * Validate
             */
            validate_only: boolean,
            auto_login?: number,
            /**
             * タグID
             * * 2 => Test Tag
             * * 5 => TestTag1591861768981
             * * 6 => TestTag1591861909598
             * * 7 => TestTag1591863012273
             * * 8 => TestTag1591865519222
             * * 9 => TestTag1591865750748
             * * 10 => TestTag1591867928030
             * * 11 => TestTag1591868223421
             * * 12 => TestTag1591869955411
             * * 13 => TestTag1591871407217
             * * 14 => TestTag1591871878143
             * * 15 => Ja
             */
            tag_id?: Array<2 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>,
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
            path: `/rcms-api/1/members/insert`,
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
     * ### **Member::update (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **allowed_group_ids** `101`
     *
     * @returns any
     * @throws ApiError
     */
    public static async postMembersService1({
        requestBody,
        outputFormat,
        lang,
        charset,
    }: {
        requestBody: {
            /**
             * /label/current_password
             */
            current_password: string,
            /**
             * /label/member_id
             */
            member_id: number,
            /**
             * name1
             */
            name1?: string,
            /**
             * name2
             */
            name2?: string,
            /**
             * nickname
             */
            nickname?: string,
            /**
             * email
             */
            email?: string,
            /**
             * zip_code
             */
            zip_code?: string,
            /**
             * tdfk_cd
             */
            tdfk_cd?: '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '20' | '21' | '22' | '23' | '24' | '25' | '26' | '27' | '28' | '29' | '30' | '31' | '32' | '33' | '34' | '35' | '36' | '37' | '38' | '39' | '40' | '41' | '42' | '43' | '44' | '45' | '46' | '47' | '99',
            /**
             * address1
             */
            address1?: string,
            /**
             * address2
             */
            address2?: string,
            /**
             * address3
             */
            address3?: string,
            /**
             * tel
             */
            tel?: string,
            /**
             * email_send_ng_flg
             */
            email_send_ng_flg?: 0 | 1,
            /**
             * tel_send_ng_flg
             */
            tel_send_ng_flg?: 0 | 1,
            /**
             * login_pwd
             */
            login_pwd?: string,
            /**
             * login_id
             */
            login_id?: string,
            /**
             * text
             */
            text?: string,
            /**
             * textarea
             */
            textarea?: string,
            /**
             * selectbox
             * * 1 => selectBoxOption1
             * * 2 => selectBoxOption2
             * * 3 => selectBoxOption3
             */
            selectbox: ({
                key?: '1' | '2' | '3',
                label?: 'selectBoxOption1' | 'selectBoxOption2' | 'selectBoxOption3',
            } | '1' | '2' | '3'),
            /**
             * radio
             * * 1 => radioOption1
             * * 2 => radioOption2
             * * 3 => radioOption3
             */
            radio: ({
                key?: '1' | '2' | '3',
                label?: 'radioOption1' | 'radioOption2' | 'radioOption3',
            } | '1' | '2' | '3'),
            /**
             * checkbox
             * * 1 => checkboxOption1
             * * 2 => checkboxOption2
             * * 3 => checkboxOption3
             */
            checkbox: Array<({
                key?: '1' | '2' | '3',
                label?: 'checkboxOption1' | 'checkboxOption2' | 'checkboxOption3',
            } | '1' | '2' | '3')>,
            /**
             * date
             */
            date?: (string),
            /**
             * relation
             */
            relation?: ({
                module_type?: string,
                module_id?: number,
            } | number),
            /**
             * file
             */
            file?: {
                /**
                 * File ID returned by File Upload API
                 */
                file_id: string,
                /**
                 * File name
                 */
                file_nm: string,
                /**
                 * Description
                 */
                desc: string,
            },
            /**
             * /label/group_id
             */
            group_id: 101,
            /**
             * /label/login_ok_flg
             */
            login_ok_flg: 0 | 1,
            /**
             * Validate
             */
            validate_only: boolean,
            auto_login?: number,
            /**
             * タグID
             * * 2 => Test Tag
             * * 5 => TestTag1591861768981
             * * 6 => TestTag1591861909598
             * * 7 => TestTag1591863012273
             * * 8 => TestTag1591865519222
             * * 9 => TestTag1591865750748
             * * 10 => TestTag1591867928030
             * * 11 => TestTag1591868223421
             * * 12 => TestTag1591869955411
             * * 13 => TestTag1591871407217
             * * 14 => TestTag1591871878143
             * * 15 => Ja
             */
            tag_id?: Array<2 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>,
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
            path: `/rcms-api/1/members/update`,
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
     * ### **Member::delete (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **allowed_group_ids** `101`
     *
     * @returns any
     * @throws ApiError
     */
    public static async postMembersService2({
        requestBody,
        outputFormat,
        lang,
        charset,
    }: {
        requestBody: {
            /**
             * /label/member_id
             */
            member_id: number,
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
            path: `/rcms-api/1/members/delete`,
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
     * ### **Member::update (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **self_only** `true`
     *
     * > **allowed_group_ids** `3`
     *
     * @returns any
     * @throws ApiError
     */
    public static async postMembersService3({
        requestBody,
        outputFormat,
        lang,
        charset,
    }: {
        requestBody: {
            /**
             * /label/current_password
             */
            current_password: string,
            /**
             * name1
             */
            name1?: string,
            /**
             * name2
             */
            name2?: string,
            /**
             * nickname
             */
            nickname?: string,
            /**
             * email
             */
            email?: string,
            /**
             * zip_code
             */
            zip_code?: string,
            /**
             * tdfk_cd
             */
            tdfk_cd?: '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '20' | '21' | '22' | '23' | '24' | '25' | '26' | '27' | '28' | '29' | '30' | '31' | '32' | '33' | '34' | '35' | '36' | '37' | '38' | '39' | '40' | '41' | '42' | '43' | '44' | '45' | '46' | '47' | '99',
            /**
             * address1
             */
            address1?: string,
            /**
             * address2
             */
            address2?: string,
            /**
             * address3
             */
            address3?: string,
            /**
             * tel
             */
            tel?: string,
            /**
             * email_send_ng_flg
             */
            email_send_ng_flg?: 0 | 1,
            /**
             * tel_send_ng_flg
             */
            tel_send_ng_flg?: 0 | 1,
            /**
             * login_pwd
             */
            login_pwd?: string,
            /**
             * login_id
             */
            login_id?: string,
            /**
             * text
             */
            text?: string,
            /**
             * textarea
             */
            textarea?: string,
            /**
             * selectbox
             * * 1 => selectBoxOption1
             * * 2 => selectBoxOption2
             * * 3 => selectBoxOption3
             */
            selectbox: ({
                key?: '1' | '2' | '3',
                label?: 'selectBoxOption1' | 'selectBoxOption2' | 'selectBoxOption3',
            } | '1' | '2' | '3'),
            /**
             * radio
             * * 1 => radioOption1
             * * 2 => radioOption2
             * * 3 => radioOption3
             */
            radio: ({
                key?: '1' | '2' | '3',
                label?: 'radioOption1' | 'radioOption2' | 'radioOption3',
            } | '1' | '2' | '3'),
            /**
             * checkbox
             * * 1 => checkboxOption1
             * * 2 => checkboxOption2
             * * 3 => checkboxOption3
             */
            checkbox: Array<({
                key?: '1' | '2' | '3',
                label?: 'checkboxOption1' | 'checkboxOption2' | 'checkboxOption3',
            } | '1' | '2' | '3')>,
            /**
             * date
             */
            date?: (string),
            /**
             * relation
             */
            relation?: ({
                module_type?: string,
                module_id?: number,
            } | number),
            /**
             * file
             */
            file?: {
                /**
                 * File ID returned by File Upload API
                 */
                file_id: string,
                /**
                 * File name
                 */
                file_nm: string,
                /**
                 * Description
                 */
                desc: string,
            },
            /**
             * /label/group_id
             */
            group_id: 3,
            /**
             * /label/login_ok_flg
             */
            login_ok_flg: 0 | 1,
            /**
             * Validate
             */
            validate_only: boolean,
            auto_login?: number,
            /**
             * タグID
             * * 2 => Test Tag
             * * 5 => TestTag1591861768981
             * * 6 => TestTag1591861909598
             * * 7 => TestTag1591863012273
             * * 8 => TestTag1591865519222
             * * 9 => TestTag1591865750748
             * * 10 => TestTag1591867928030
             * * 11 => TestTag1591868223421
             * * 12 => TestTag1591869955411
             * * 13 => TestTag1591871407217
             * * 14 => TestTag1591871878143
             * * 15 => Ja
             */
            tag_id?: Array<2 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>,
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
            path: `/rcms-api/1/me/update`,
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
     * ### **Member::delete (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **self_only** `true`
     *
     * > **allowed_group_ids** `101`
     *
     * @returns any
     * @throws ApiError
     */
    public static async postMembersService4({
        requestBody,
        outputFormat,
        lang,
        charset,
    }: {
        requestBody: any,
        /** Format (json|xml|csv|zip) **/
        outputFormat?: string,
        /** Language **/
        lang?: string,
        /** Charset **/
        charset?: string,
    }): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/rcms-api/1/me/delete`,
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
     * ### **MemberCustomSearch::list (v1)**
     *
     *
     * @returns any
     * @throws ApiError
     */
    public static async getMembersService2({
        outputFormat,
        lang,
        charset,
        cnt,
        pageId,
        shareType,
        customSearchId,
    }: {
        /** Format (json|xml|csv|zip) **/
        outputFormat?: string,
        /** Language **/
        lang?: string,
        /** Charset **/
        charset?: string,
        /** Number of topics per page **/
        cnt?: number,
        /** Page ID **/
        pageId?: number,
        /** Shared **/
        shareType?: number,
        /** メンバー検索条件ID **/
        customSearchId?: Array<number>,
    }): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/rcms-api/1/member/custom_search`,
            query: {
                '_output_format': outputFormat,
                '_lang': lang,
                '_charset': charset,
                'cnt': cnt,
                'pageID': pageId,
                'share_type': shareType,
                'custom_search_id[]': customSearchId,
            },
        });
        return result.body;
    }

    /**
     *
     * ### **MemberCustomSearch::details (v1)**
     *
     *
     * @returns any
     * @throws ApiError
     */
    public static async getMembersService3({
        customSearchId,
        outputFormat,
        lang,
        charset,
    }: {
        customSearchId: number,
        /** Format (json|xml|csv|zip) **/
        outputFormat?: string,
        /** Language **/
        lang?: string,
        /** Charset **/
        charset?: string,
    }): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/rcms-api/1/member/custom_search/${customSearchId}`,
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
     * ### **MemberCustomSearch::insert (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **member_allow_list** `:ALL`
     *
     * > **inquiry_allow_list** `:ALL`
     *
     * > **ec_allow_list** `:ALL`
     *
     * @returns any
     * @throws ApiError
     */
    public static async postMembersService5({
        requestBody,
        outputFormat,
        lang,
        charset,
    }: {
        requestBody: ({
            /**
             * Search name
             */
            search_nm: string,
            /**
             * Shared(1:All members/2:Custom)
             */
            share_type: 1 | 2,
            /**
             * Use for authority settings
             */
            auth_flg?: 0 | 1,
            /**
             * Memo
             */
            memo?: string,
            /**
             * 検索条件
             */
            search_conditions?: {
                /**
                 * Module search conditions
                 */
                modules_condition: 'AND' | 'OR',
            },
            /**
             * Parameters
             */
            staticcontents_search_params?: any,
            member_search_condition?: (string | {
                name?: 'query_node_tree',
                /**
                 * Child node
                 */
                node?: any,
            } | {
                /**
                 * [Member] Filter query
                 */
                filter?: string,
                /**
                 * [Member] Filter node object
                 */
                filter_node?: {
                    name?: 'query_node_tree',
                    /**
                     * Child node
                     */
                    node?: any,
                },
            }),
            inquiry_search_condition?: (string | {
                name?: 'query_node_tree',
                /**
                 * Child node
                 */
                node?: any,
            } | {
                /**
                 * [Form] Filter query
                 */
                filter?: string,
                /**
                 * [Form] Filter node object
                 */
                filter_node?: {
                    name?: 'query_node_tree',
                    /**
                     * Child node
                     */
                    node?: any,
                },
            }),
            ec_search_condition?: (string | {
                name?: 'query_node_tree',
                /**
                 * Child node
                 */
                node?: any,
            } | {
                /**
                 * [EC] Filter query
                 */
                filter?: string,
                /**
                 * [EC] Filter node object
                 */
                filter_node?: {
                    name?: 'query_node_tree',
                    /**
                     * Child node
                     */
                    node?: any,
                },
            }),
        } | {
            /**
             * Search name
             */
            search_nm: string,
            /**
             * Shared(3:Specified groups)
             */
            share_type: 3,
            group_ids: Array<1 | 2 | 101 | 102 | 103 | 104>,
            /**
             * Use for authority settings
             */
            auth_flg?: 0 | 1,
            /**
             * Memo
             */
            memo?: string,
            /**
             * 検索条件
             */
            search_conditions?: {
                /**
                 * Module search conditions
                 */
                modules_condition: 'AND' | 'OR',
            },
            /**
             * Parameters
             */
            staticcontents_search_params?: any,
            member_search_condition?: (string | {
                name?: 'query_node_tree',
                /**
                 * Child node
                 */
                node?: any,
            } | {
                /**
                 * [Member] Filter query
                 */
                filter?: string,
                /**
                 * [Member] Filter node object
                 */
                filter_node?: {
                    name?: 'query_node_tree',
                    /**
                     * Child node
                     */
                    node?: any,
                },
            }),
            inquiry_search_condition?: (string | {
                name?: 'query_node_tree',
                /**
                 * Child node
                 */
                node?: any,
            } | {
                /**
                 * [Form] Filter query
                 */
                filter?: string,
                /**
                 * [Form] Filter node object
                 */
                filter_node?: {
                    name?: 'query_node_tree',
                    /**
                     * Child node
                     */
                    node?: any,
                },
            }),
            ec_search_condition?: (string | {
                name?: 'query_node_tree',
                /**
                 * Child node
                 */
                node?: any,
            } | {
                /**
                 * [EC] Filter query
                 */
                filter?: string,
                /**
                 * [EC] Filter node object
                 */
                filter_node?: {
                    name?: 'query_node_tree',
                    /**
                     * Child node
                     */
                    node?: any,
                },
            }),
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
            path: `/rcms-api/1/member/custom_search/insert`,
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
     * ### **MemberCustomSearch::update (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **member_allow_list** `:ALL`
     *
     * > **inquiry_allow_list** `:ALL`
     *
     * > **ec_allow_list** `:ALL`
     *
     * @returns any
     * @throws ApiError
     */
    public static async postMembersService6({
        customSearchId,
        requestBody,
        outputFormat,
        lang,
        charset,
    }: {
        customSearchId: number,
        requestBody: ({
            /**
             * Search name
             */
            search_nm?: string,
            /**
             * Shared(1:All members/2:Custom)
             */
            share_type?: 1 | 2,
            /**
             * Use for authority settings
             */
            auth_flg?: 0 | 1,
            /**
             * Memo
             */
            memo?: string,
            /**
             * 検索条件
             */
            search_conditions?: {
                /**
                 * Module search conditions
                 */
                modules_condition: 'AND' | 'OR',
            },
            /**
             * Parameters
             */
            staticcontents_search_params?: any,
            member_search_condition?: (string | {
                name?: 'query_node_tree',
                /**
                 * Child node
                 */
                node?: any,
            } | {
                /**
                 * [Member] Filter query
                 */
                filter?: string,
                /**
                 * [Member] Filter node object
                 */
                filter_node?: {
                    name?: 'query_node_tree',
                    /**
                     * Child node
                     */
                    node?: any,
                },
            }),
            inquiry_search_condition?: (string | {
                name?: 'query_node_tree',
                /**
                 * Child node
                 */
                node?: any,
            } | {
                /**
                 * [Form] Filter query
                 */
                filter?: string,
                /**
                 * [Form] Filter node object
                 */
                filter_node?: {
                    name?: 'query_node_tree',
                    /**
                     * Child node
                     */
                    node?: any,
                },
            }),
            ec_search_condition?: (string | {
                name?: 'query_node_tree',
                /**
                 * Child node
                 */
                node?: any,
            } | {
                /**
                 * [EC] Filter query
                 */
                filter?: string,
                /**
                 * [EC] Filter node object
                 */
                filter_node?: {
                    name?: 'query_node_tree',
                    /**
                     * Child node
                     */
                    node?: any,
                },
            }),
        } | {
            /**
             * Search name
             */
            search_nm?: string,
            /**
             * Shared(3:Specified groups)
             */
            share_type?: 3,
            group_ids?: Array<1 | 2 | 101 | 102 | 103 | 104>,
            /**
             * Use for authority settings
             */
            auth_flg?: 0 | 1,
            /**
             * Memo
             */
            memo?: string,
            /**
             * 検索条件
             */
            search_conditions?: {
                /**
                 * Module search conditions
                 */
                modules_condition: 'AND' | 'OR',
            },
            /**
             * Parameters
             */
            staticcontents_search_params?: any,
            member_search_condition?: (string | {
                name?: 'query_node_tree',
                /**
                 * Child node
                 */
                node?: any,
            } | {
                /**
                 * [Member] Filter query
                 */
                filter?: string,
                /**
                 * [Member] Filter node object
                 */
                filter_node?: {
                    name?: 'query_node_tree',
                    /**
                     * Child node
                     */
                    node?: any,
                },
            }),
            inquiry_search_condition?: (string | {
                name?: 'query_node_tree',
                /**
                 * Child node
                 */
                node?: any,
            } | {
                /**
                 * [Form] Filter query
                 */
                filter?: string,
                /**
                 * [Form] Filter node object
                 */
                filter_node?: {
                    name?: 'query_node_tree',
                    /**
                     * Child node
                     */
                    node?: any,
                },
            }),
            ec_search_condition?: (string | {
                name?: 'query_node_tree',
                /**
                 * Child node
                 */
                node?: any,
            } | {
                /**
                 * [EC] Filter query
                 */
                filter?: string,
                /**
                 * [EC] Filter node object
                 */
                filter_node?: {
                    name?: 'query_node_tree',
                    /**
                     * Child node
                     */
                    node?: any,
                },
            }),
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
            path: `/rcms-api/1/member/custom_search/update/${customSearchId}`,
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
     * ### **MemberCustomSearch::delete (v1)**
     *
     *
     * @returns any
     * @throws ApiError
     */
    public static async postMembersService7({
        customSearchId,
        outputFormat,
        lang,
        charset,
    }: {
        customSearchId: number,
        /** Format (json|xml|csv|zip) **/
        outputFormat?: string,
        /** Language **/
        lang?: string,
        /** Charset **/
        charset?: string,
    }): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/rcms-api/1/member/custom_search/delete/${customSearchId}`,
            query: {
                '_output_format': outputFormat,
                '_lang': lang,
                '_charset': charset,
            },
        });
        return result.body;
    }

}