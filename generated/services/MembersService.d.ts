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
    static getMembersServiceRcmsApi1Members(requestParam: MembersService.getMembersServiceRcmsApi1MembersRequest): Promise<any>;
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
    static getMembersServiceRcmsApi1MembersMemberId(requestParam: MembersService.getMembersServiceRcmsApi1MembersMemberIdRequest): Promise<any>;
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
    static postMembersServiceRcmsApi1MembersInsert(requestParam: MembersService.postMembersServiceRcmsApi1MembersInsertRequest): Promise<any>;
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
    static postMembersServiceRcmsApi1MembersUpdate(requestParam: MembersService.postMembersServiceRcmsApi1MembersUpdateRequest): Promise<any>;
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
    static postMembersServiceRcmsApi1MembersDelete(requestParam: MembersService.postMembersServiceRcmsApi1MembersDeleteRequest): Promise<any>;
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
    static postMembersServiceRcmsApi1MeUpdate(requestParam: MembersService.postMembersServiceRcmsApi1MeUpdateRequest): Promise<any>;
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
    static postMembersServiceRcmsApi1MeDelete(requestParam: MembersService.postMembersServiceRcmsApi1MeDeleteRequest): Promise<any>;
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
             * Email
             */
            email: string;
            /**
             * Login ID
             */
            login_id?: string;
            /**
             * Password
             */
            login_pwd: string;
            /**
             * Nickname
             */
            nickname: string;
            /**
             * Family name
             */
            name1?: string;
            /**
             * Given name
             */
            name2?: string;
            /**
             * Sex
             */
            sex?: ('m' | 'f' | 'e');
            /**
             * Date of birth
             */
            birth?: string;
            /**
             * Image1
             */
            member_photo?: {
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
                extension?: ('jpg' | 'gif' | 'png');
            };
            /**
             * Text
             */
            text: string;
            /**
             * Textarea
             */
            textarea?: string;
            /**
             * Radio
             * * 1 => radioOption1
             * * 2 => radioOption2
             * * 3 => radioOption3
             */
            radio?: {
                key: string;
                label: string;
            } | '' | '1' | '2' | '3';
            /**
             * Selectbox
             * * 1 => selectBoxOption1
             * * 2 => selectBoxOption2
             * * 3 => selectBoxOption3
             */
            selectbox?: {
                key: string;
                label: string;
            } | '' | '1' | '2' | '3';
            /**
             * Checkbox
             * * 1 => checkboxOption1
             * * 2 => checkboxOption2
             * * 3 => checkboxOption3
             */
            checkbox?: Array<{
                key: string;
                label: string;
            } | '1' | '2' | '3'>;
            /**
             * Date
             */
            date?: string;
            relation?: number;
            /**
             * File
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
             * Email
             */
            email?: string;
            /**
             * Login ID
             */
            login_id?: string;
            /**
             * Password
             */
            login_pwd?: string;
            /**
             * Nickname
             */
            nickname?: string;
            /**
             * Family name
             */
            name1?: string;
            /**
             * Given name
             */
            name2?: string;
            /**
             * Sex
             */
            sex?: ('m' | 'f' | 'e');
            /**
             * Date of birth
             */
            birth?: string;
            /**
             * Image1
             */
            member_photo?: {
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
                extension?: ('jpg' | 'gif' | 'png');
            };
            /**
             * Text
             */
            text?: string;
            /**
             * Textarea
             */
            textarea?: string;
            /**
             * Radio
             * * 1 => radioOption1
             * * 2 => radioOption2
             * * 3 => radioOption3
             */
            radio?: {
                key: string;
                label: string;
            } | '' | '1' | '2' | '3';
            /**
             * Selectbox
             * * 1 => selectBoxOption1
             * * 2 => selectBoxOption2
             * * 3 => selectBoxOption3
             */
            selectbox?: {
                key: string;
                label: string;
            } | '' | '1' | '2' | '3';
            /**
             * Checkbox
             * * 1 => checkboxOption1
             * * 2 => checkboxOption2
             * * 3 => checkboxOption3
             */
            checkbox?: Array<{
                key: string;
                label: string;
            } | '1' | '2' | '3'>;
            /**
             * Date
             */
            date?: string;
            relation?: number;
            /**
             * File
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
             * Email
             */
            email?: string;
            /**
             * Login ID
             */
            login_id?: string;
            /**
             * Password
             */
            login_pwd?: string;
            /**
             * Nickname
             */
            nickname?: string;
            /**
             * Family name
             */
            name1?: string;
            /**
             * Given name
             */
            name2?: string;
            /**
             * Sex
             */
            sex?: ('m' | 'f' | 'e');
            /**
             * Date of birth
             */
            birth?: string;
            /**
             * Image1
             */
            member_photo?: {
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
                extension?: ('jpg' | 'gif' | 'png');
            };
            /**
             * Text
             */
            text?: string;
            /**
             * Textarea
             */
            textarea?: string;
            /**
             * Radio
             * * 1 => radioOption1
             * * 2 => radioOption2
             * * 3 => radioOption3
             */
            radio?: {
                key: string;
                label: string;
            } | '' | '1' | '2' | '3';
            /**
             * Selectbox
             * * 1 => selectBoxOption1
             * * 2 => selectBoxOption2
             * * 3 => selectBoxOption3
             */
            selectbox?: {
                key: string;
                label: string;
            } | '' | '1' | '2' | '3';
            /**
             * Checkbox
             * * 1 => checkboxOption1
             * * 2 => checkboxOption2
             * * 3 => checkboxOption3
             */
            checkbox?: Array<{
                key: string;
                label: string;
            } | '1' | '2' | '3'>;
            /**
             * Date
             */
            date?: string;
            relation?: number;
            /**
             * File
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
} | {
    path: string;
    httpMethod: string;
    class: typeof MembersService;
    className: string;
    method: typeof MembersService.postMembersServiceRcmsApi1MembersUpdate;
    methodName: string;
    auth: null;
    description: string;
})[];
//# sourceMappingURL=MembersService.d.ts.map