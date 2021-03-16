import { Result } from '../core/Result';
export declare class MembersService {
    /**
     *
     * ### **Member::list (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **filter_request_allow_list** `:ALL`
     *
     * @param outputFormat Format (json|xml|csv|zip)
     * @param lang Language
     * @param charset Charset
     * @param id Member ID
     * @param cnt Number of topics per page
     * @param pageId Page ID
     * @param groupId Member search
     * @param filter Filter query
     * @result any
     * @throws ApiError
     */
    static getMembersServiceRcmsApi1Members(requestParam: MembersService.getMembersServiceRcmsApi1MembersRequest): Promise<Result<any>>;
    /**
     *
     * ### **Member::details (v1)**
     *
     *
     * @param memberId
     * @param outputFormat Format (json|xml|csv|zip)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static getMembersServiceRcmsApi1MembersMemberId(requestParam: MembersService.getMembersServiceRcmsApi1MembersMemberIdRequest): Promise<Result<any>>;
    /**
     *
     * ### **Member::insert (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **default_group_id** `101`
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv|zip)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postMembersServiceRcmsApi1MembersInsert(requestParam: MembersService.postMembersServiceRcmsApi1MembersInsertRequest): Promise<Result<any>>;
    /**
     *
     * ### **Member::update (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **allowed_group_ids** `101`
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv|zip)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postMembersServiceRcmsApi1MembersUpdate(requestParam: MembersService.postMembersServiceRcmsApi1MembersUpdateRequest): Promise<Result<any>>;
    /**
     *
     * ### **Member::delete (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **allowed_group_ids** `101`
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv|zip)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postMembersServiceRcmsApi1MembersDelete(requestParam: MembersService.postMembersServiceRcmsApi1MembersDeleteRequest): Promise<Result<any>>;
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
     * @param requestBody
     * @param outputFormat Format (json|xml|csv|zip)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postMembersServiceRcmsApi1MeUpdate(requestParam: MembersService.postMembersServiceRcmsApi1MeUpdateRequest): Promise<Result<any>>;
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
     * @param requestBody
     * @param outputFormat Format (json|xml|csv|zip)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postMembersServiceRcmsApi1MeDelete(requestParam: MembersService.postMembersServiceRcmsApi1MeDeleteRequest): Promise<Result<any>>;
    /**
     *
     * ### **MemberCustomSearch::list (v1)**
     *
     *
     * @param outputFormat Format (json|xml|csv|zip)
     * @param lang Language
     * @param charset Charset
     * @param cnt Number of topics per page
     * @param pageId Page ID
     * @param shareType Shared
     * @param customSearchId メンバー検索条件ID
     * @result any
     * @throws ApiError
     */
    static getMembersServiceRcmsApi1MemberCustomSearch(requestParam: MembersService.getMembersServiceRcmsApi1MemberCustomSearchRequest): Promise<Result<any>>;
    /**
     *
     * ### **MemberCustomSearch::details (v1)**
     *
     *
     * @param customSearchId
     * @param outputFormat Format (json|xml|csv|zip)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static getMembersServiceRcmsApi1MemberCustomSearchCustomSearchId(requestParam: MembersService.getMembersServiceRcmsApi1MemberCustomSearchCustomSearchIdRequest): Promise<Result<any>>;
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
     * @param requestBody
     * @param outputFormat Format (json|xml|csv|zip)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postMembersServiceRcmsApi1MemberCustomSearchInsert(requestParam: MembersService.postMembersServiceRcmsApi1MemberCustomSearchInsertRequest): Promise<Result<any>>;
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
     * @param customSearchId
     * @param requestBody
     * @param outputFormat Format (json|xml|csv|zip)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postMembersServiceRcmsApi1MemberCustomSearchUpdateCustomSearchId(requestParam: MembersService.postMembersServiceRcmsApi1MemberCustomSearchUpdateCustomSearchIdRequest): Promise<Result<any>>;
    /**
     *
     * ### **MemberCustomSearch::delete (v1)**
     *
     *
     * @param customSearchId
     * @param outputFormat Format (json|xml|csv|zip)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postMembersServiceRcmsApi1MemberCustomSearchDeleteCustomSearchId(requestParam: MembersService.postMembersServiceRcmsApi1MemberCustomSearchDeleteCustomSearchIdRequest): Promise<Result<any>>;
}
export declare namespace MembersService {
    interface getMembersServiceRcmsApi1MembersRequest {
        outputFormat?: string;
        lang?: string;
        charset?: string;
        id?: Array<number>;
        cnt?: number;
        pageId?: number;
        groupId?: Array<number>;
        filter?: string;
    }
    type getMembersServiceRcmsApi1MembersResponse = any;
    interface getMembersServiceRcmsApi1MembersMemberIdRequest {
        memberId: number;
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type getMembersServiceRcmsApi1MembersMemberIdResponse = any;
    interface postMembersServiceRcmsApi1MembersInsertRequest {
        requestBody: {
            /**
             * name1
             */
            name1?: string;
            /**
             * name2
             */
            name2?: string;
            /**
             * nickname
             */
            nickname?: string;
            /**
             * email
             */
            email?: string;
            /**
             * zip_code
             */
            zip_code?: string;
            /**
             * tdfk_cd
             */
            tdfk_cd?: ('01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '20' | '21' | '22' | '23' | '24' | '25' | '26' | '27' | '28' | '29' | '30' | '31' | '32' | '33' | '34' | '35' | '36' | '37' | '38' | '39' | '40' | '41' | '42' | '43' | '44' | '45' | '46' | '47' | '99');
            /**
             * address1
             */
            address1?: string;
            /**
             * address2
             */
            address2?: string;
            /**
             * address3
             */
            address3?: string;
            /**
             * tel
             */
            tel?: string;
            /**
             * email_send_ng_flg
             */
            email_send_ng_flg?: (0 | 1);
            /**
             * tel_send_ng_flg
             */
            tel_send_ng_flg?: (0 | 1);
            /**
             * login_pwd
             */
            login_pwd?: string;
            /**
             * login_id
             */
            login_id?: string;
            /**
             * text
             */
            text?: string;
            /**
             * textarea
             */
            textarea?: string;
            /**
             * selectbox
             * * 1 => selectBoxOption1
             * * 2 => selectBoxOption2
             * * 3 => selectBoxOption3
             */
            selectbox?: {
                key: string;
                label: string;
            } | '' | '1' | '2' | '3';
            /**
             * radio
             * * 1 => radioOption1
             * * 2 => radioOption2
             * * 3 => radioOption3
             */
            radio?: {
                key: string;
                label: string;
            } | '' | '1' | '2' | '3';
            /**
             * checkbox
             * * 1 => checkboxOption1
             * * 2 => checkboxOption2
             * * 3 => checkboxOption3
             */
            checkbox?: Array<{
                key: string;
                label: string;
            } | '1' | '2' | '3'>;
            /**
             * date
             */
            date?: string | string;
            /**
             * relation
             */
            relation?: {
                module_type: string;
                module_id: number;
            } | number;
            /**
             * file
             */
            file?: {
                /**
                 * File ID returned by File Upload API
                 */
                file_id?: string;
                /**
                 * File name
                 */
                file_nm?: string;
                /**
                 * Description
                 */
                desc?: string;
            };
            /**
             * /label/login_ok_flg
             */
            login_ok_flg?: (0 | 1);
            /**
             * Validate
             */
            validate_only?: boolean;
            auto_login?: number;
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
            tag_id?: Array<(2 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15)>;
        };
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type postMembersServiceRcmsApi1MembersInsertResponse = any;
    interface postMembersServiceRcmsApi1MembersUpdateRequest {
        requestBody: {
            /**
             * /label/current_password
             */
            current_password?: string;
            /**
             * /label/member_id
             */
            member_id: number;
            /**
             * name1
             */
            name1?: string;
            /**
             * name2
             */
            name2?: string;
            /**
             * nickname
             */
            nickname?: string;
            /**
             * email
             */
            email?: string;
            /**
             * zip_code
             */
            zip_code?: string;
            /**
             * tdfk_cd
             */
            tdfk_cd?: ('01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '20' | '21' | '22' | '23' | '24' | '25' | '26' | '27' | '28' | '29' | '30' | '31' | '32' | '33' | '34' | '35' | '36' | '37' | '38' | '39' | '40' | '41' | '42' | '43' | '44' | '45' | '46' | '47' | '99');
            /**
             * address1
             */
            address1?: string;
            /**
             * address2
             */
            address2?: string;
            /**
             * address3
             */
            address3?: string;
            /**
             * tel
             */
            tel?: string;
            /**
             * email_send_ng_flg
             */
            email_send_ng_flg?: (0 | 1);
            /**
             * tel_send_ng_flg
             */
            tel_send_ng_flg?: (0 | 1);
            /**
             * login_pwd
             */
            login_pwd?: string;
            /**
             * login_id
             */
            login_id?: string;
            /**
             * text
             */
            text?: string;
            /**
             * textarea
             */
            textarea?: string;
            /**
             * selectbox
             * * 1 => selectBoxOption1
             * * 2 => selectBoxOption2
             * * 3 => selectBoxOption3
             */
            selectbox?: {
                key: string;
                label: string;
            } | '' | '1' | '2' | '3';
            /**
             * radio
             * * 1 => radioOption1
             * * 2 => radioOption2
             * * 3 => radioOption3
             */
            radio?: {
                key: string;
                label: string;
            } | '' | '1' | '2' | '3';
            /**
             * checkbox
             * * 1 => checkboxOption1
             * * 2 => checkboxOption2
             * * 3 => checkboxOption3
             */
            checkbox?: Array<{
                key: string;
                label: string;
            } | '1' | '2' | '3'>;
            /**
             * date
             */
            date?: string | string;
            /**
             * relation
             */
            relation?: {
                module_type: string;
                module_id: number;
            } | number;
            /**
             * file
             */
            file?: {
                /**
                 * File ID returned by File Upload API
                 */
                file_id?: string;
                /**
                 * File name
                 */
                file_nm?: string;
                /**
                 * Description
                 */
                desc?: string;
            };
            /**
             * /label/group_id
             */
            group_id?: (101);
            /**
             * /label/login_ok_flg
             */
            login_ok_flg?: (0 | 1);
            /**
             * Validate
             */
            validate_only?: boolean;
            auto_login?: number;
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
            tag_id?: Array<(2 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15)>;
        };
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type postMembersServiceRcmsApi1MembersUpdateResponse = any;
    interface postMembersServiceRcmsApi1MembersDeleteRequest {
        requestBody: {
            /**
             * /label/member_id
             */
            member_id: number;
        };
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type postMembersServiceRcmsApi1MembersDeleteResponse = any;
    interface postMembersServiceRcmsApi1MeUpdateRequest {
        requestBody: {
            /**
             * /label/current_password
             */
            current_password?: string;
            /**
             * name1
             */
            name1?: string;
            /**
             * name2
             */
            name2?: string;
            /**
             * nickname
             */
            nickname?: string;
            /**
             * email
             */
            email?: string;
            /**
             * zip_code
             */
            zip_code?: string;
            /**
             * tdfk_cd
             */
            tdfk_cd?: ('01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '20' | '21' | '22' | '23' | '24' | '25' | '26' | '27' | '28' | '29' | '30' | '31' | '32' | '33' | '34' | '35' | '36' | '37' | '38' | '39' | '40' | '41' | '42' | '43' | '44' | '45' | '46' | '47' | '99');
            /**
             * address1
             */
            address1?: string;
            /**
             * address2
             */
            address2?: string;
            /**
             * address3
             */
            address3?: string;
            /**
             * tel
             */
            tel?: string;
            /**
             * email_send_ng_flg
             */
            email_send_ng_flg?: (0 | 1);
            /**
             * tel_send_ng_flg
             */
            tel_send_ng_flg?: (0 | 1);
            /**
             * login_pwd
             */
            login_pwd?: string;
            /**
             * login_id
             */
            login_id?: string;
            /**
             * text
             */
            text?: string;
            /**
             * textarea
             */
            textarea?: string;
            /**
             * selectbox
             * * 1 => selectBoxOption1
             * * 2 => selectBoxOption2
             * * 3 => selectBoxOption3
             */
            selectbox?: {
                key: string;
                label: string;
            } | '' | '1' | '2' | '3';
            /**
             * radio
             * * 1 => radioOption1
             * * 2 => radioOption2
             * * 3 => radioOption3
             */
            radio?: {
                key: string;
                label: string;
            } | '' | '1' | '2' | '3';
            /**
             * checkbox
             * * 1 => checkboxOption1
             * * 2 => checkboxOption2
             * * 3 => checkboxOption3
             */
            checkbox?: Array<{
                key: string;
                label: string;
            } | '1' | '2' | '3'>;
            /**
             * date
             */
            date?: string | string;
            /**
             * relation
             */
            relation?: {
                module_type: string;
                module_id: number;
            } | number;
            /**
             * file
             */
            file?: {
                /**
                 * File ID returned by File Upload API
                 */
                file_id?: string;
                /**
                 * File name
                 */
                file_nm?: string;
                /**
                 * Description
                 */
                desc?: string;
            };
            /**
             * /label/group_id
             */
            group_id?: (3);
            /**
             * /label/login_ok_flg
             */
            login_ok_flg?: (0 | 1);
            /**
             * Validate
             */
            validate_only?: boolean;
            auto_login?: number;
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
            tag_id?: Array<(2 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15)>;
        };
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type postMembersServiceRcmsApi1MeUpdateResponse = any;
    interface postMembersServiceRcmsApi1MeDeleteRequest {
        requestBody: any;
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type postMembersServiceRcmsApi1MeDeleteResponse = any;
    interface getMembersServiceRcmsApi1MemberCustomSearchRequest {
        outputFormat?: string;
        lang?: string;
        charset?: string;
        cnt?: number;
        pageId?: number;
        shareType?: number;
        customSearchId?: Array<number>;
    }
    type getMembersServiceRcmsApi1MemberCustomSearchResponse = any;
    interface getMembersServiceRcmsApi1MemberCustomSearchCustomSearchIdRequest {
        customSearchId: number;
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type getMembersServiceRcmsApi1MemberCustomSearchCustomSearchIdResponse = any;
    interface postMembersServiceRcmsApi1MemberCustomSearchInsertRequest {
        requestBody: {
            search_nm: string;
            share_type: string;
            auth_flg: string;
            memo: string;
            search_conditions: any;
            staticcontents_search_params: any;
            member_search_condition: string | {
                name: string;
                node: any;
            } | {
                filter: string;
                filter_node: any;
            };
            inquiry_search_condition: string | {
                name: string;
                node: any;
            } | {
                filter: string;
                filter_node: any;
            };
            ec_search_condition: string | {
                name: string;
                node: any;
            } | {
                filter: string;
                filter_node: any;
            };
        } | {
            search_nm: string;
            share_type: string;
            group_ids: string;
            auth_flg: string;
            memo: string;
            search_conditions: any;
            staticcontents_search_params: any;
            member_search_condition: string | {
                name: string;
                node: any;
            } | {
                filter: string;
                filter_node: any;
            };
            inquiry_search_condition: string | {
                name: string;
                node: any;
            } | {
                filter: string;
                filter_node: any;
            };
            ec_search_condition: string | {
                name: string;
                node: any;
            } | {
                filter: string;
                filter_node: any;
            };
        };
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type postMembersServiceRcmsApi1MemberCustomSearchInsertResponse = any;
    interface postMembersServiceRcmsApi1MemberCustomSearchUpdateCustomSearchIdRequest {
        customSearchId: number;
        requestBody: {
            search_nm: string;
            share_type: string;
            auth_flg: string;
            memo: string;
            search_conditions: any;
            staticcontents_search_params: any;
            member_search_condition: string | {
                name: string;
                node: any;
            } | {
                filter: string;
                filter_node: any;
            };
            inquiry_search_condition: string | {
                name: string;
                node: any;
            } | {
                filter: string;
                filter_node: any;
            };
            ec_search_condition: string | {
                name: string;
                node: any;
            } | {
                filter: string;
                filter_node: any;
            };
        } | {
            search_nm: string;
            share_type: string;
            group_ids: string;
            auth_flg: string;
            memo: string;
            search_conditions: any;
            staticcontents_search_params: any;
            member_search_condition: string | {
                name: string;
                node: any;
            } | {
                filter: string;
                filter_node: any;
            };
            inquiry_search_condition: string | {
                name: string;
                node: any;
            } | {
                filter: string;
                filter_node: any;
            };
            ec_search_condition: string | {
                name: string;
                node: any;
            } | {
                filter: string;
                filter_node: any;
            };
        };
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type postMembersServiceRcmsApi1MemberCustomSearchUpdateCustomSearchIdResponse = any;
    interface postMembersServiceRcmsApi1MemberCustomSearchDeleteCustomSearchIdRequest {
        customSearchId: number;
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type postMembersServiceRcmsApi1MemberCustomSearchDeleteCustomSearchIdResponse = any;
}
export declare const infos: ({
    path: string;
    httpMethod: string;
    class: typeof MembersService;
    className: string;
    method: typeof MembersService.getMembersServiceRcmsApi1Members;
    methodName: string;
    auth: null;
    description: string;
} | {
    path: string;
    httpMethod: string;
    class: typeof MembersService;
    className: string;
    method: typeof MembersService.getMembersServiceRcmsApi1MembersMemberId;
    methodName: string;
    auth: null;
    description: string;
} | {
    path: string;
    httpMethod: string;
    class: typeof MembersService;
    className: string;
    method: typeof MembersService.postMembersServiceRcmsApi1MembersInsert;
    methodName: string;
    auth: null;
    description: string;
} | {
    path: string;
    httpMethod: string;
    class: typeof MembersService;
    className: string;
    method: typeof MembersService.getMembersServiceRcmsApi1MemberCustomSearch;
    methodName: string;
    auth: null;
    description: string;
} | {
    path: string;
    httpMethod: string;
    class: typeof MembersService;
    className: string;
    method: typeof MembersService.getMembersServiceRcmsApi1MemberCustomSearchCustomSearchId;
    methodName: string;
    auth: null;
    description: string;
})[];
//# sourceMappingURL=MembersService.d.ts.map