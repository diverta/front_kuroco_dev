import { Result } from '../core/Result';
export declare class MembersService {
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
    static getMembersServiceRcmsApi1Members(requestParam: MembersService.getMembersServiceRcmsApi1MembersRequest): Promise<Result<any>>;
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
    static getMembersServiceRcmsApi1MembersMemberId(requestParam: MembersService.getMembersServiceRcmsApi1MembersMemberIdRequest): Promise<Result<any>>;
    /**
     *
     * ### **Member::insert (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **default_group_id** `2`
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
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
     * > **allowed_group_ids** `2`
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
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
     * > **allowed_group_ids** `2`
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
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
     * > **allowed_group_ids** `2`
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
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
     * > **allowed_group_ids** `2`
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postMembersServiceRcmsApi1MeDelete(requestParam: MembersService.postMembersServiceRcmsApi1MeDeleteRequest): Promise<Result<any>>;
}
export declare namespace MembersService {
    interface getMembersServiceRcmsApi1MembersRequest {
        outputFormat?: string;
        lang?: string;
        charset?: string;
        id?: Array<number>;
        cnt?: number;
        pageId?: number;
        sName?: string;
        sEmail?: string;
        sTel?: string;
        sAddress?: string;
        sTdfkCd?: string;
        groupId?: number;
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
             * textarea
             */
            textarea?: string;
            /**
             * text
             */
            text?: string;
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
             * relation
             */
            relation?: {
                module_type: string;
                module_id: number;
            } | number;
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
             * date
             */
            date?: string | string;
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
             * /label/open_flg
             */
            open_flg?: (0 | 1);
            /**
             * /label/login_ok_flg
             */
            login_ok_flg?: (0 | 1);
            /**
             * Validate
             */
            validate_only?: boolean;
            auto_login?: number;
        };
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type postMembersServiceRcmsApi1MembersInsertResponse = any;
    interface postMembersServiceRcmsApi1MembersUpdateRequest {
        requestBody: {
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
             * textarea
             */
            textarea?: string;
            /**
             * text
             */
            text?: string;
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
             * relation
             */
            relation?: {
                module_type: string;
                module_id: number;
            } | number;
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
             * date
             */
            date?: string | string;
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
             * /label/group_id
             */
            group_id?: (2);
            /**
             * /label/open_flg
             */
            open_flg?: (0 | 1);
            /**
             * /label/login_ok_flg
             */
            login_ok_flg?: (0 | 1);
            /**
             * Validate
             */
            validate_only?: boolean;
            auto_login?: number;
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
             * textarea
             */
            textarea?: string;
            /**
             * text
             */
            text?: string;
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
             * relation
             */
            relation?: {
                module_type: string;
                module_id: number;
            } | number;
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
             * date
             */
            date?: string | string;
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
             * /label/group_id
             */
            group_id?: (2);
            /**
             * /label/open_flg
             */
            open_flg?: (0 | 1);
            /**
             * /label/login_ok_flg
             */
            login_ok_flg?: (0 | 1);
            /**
             * Validate
             */
            validate_only?: boolean;
            auto_login?: number;
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
})[];
//# sourceMappingURL=MembersService.d.ts.map