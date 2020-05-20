export declare class InquiriesService {
    /**
     * null
     *
     * ### **InquiryForm::list (v1)**
     *
     * null
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static getInquiriesServiceRcmsApi1InquiryForms(requestParam: InquiriesService.getInquiriesServiceRcmsApi1InquiryFormsRequest): Promise<any>;
    /**
     * null
     *
     * ### **InquiryForm::details (v1)**
     *
     * null
     * @param inquiryId
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static getInquiriesServiceRcmsApi1InquiryFormsInquiryId(requestParam: InquiriesService.getInquiriesServiceRcmsApi1InquiryFormsInquiryIdRequest): Promise<any>;
    /**
     *
     * ### **InquiryMessage::list (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **id** `1`
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @param order Set the sort order. Available param {0}
     * @result any
     * @throws ApiError
     */
    static getInquiriesServiceRcmsApi1Inquiry1Messages(requestParam: InquiriesService.getInquiriesServiceRcmsApi1Inquiry1MessagesRequest): Promise<any>;
    /**
     *
     * ### **InquiryMessage::send (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **id** `1`
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postInquiriesServiceRcmsApi1Inquiry1MessagesSend(requestParam: InquiriesService.postInquiriesServiceRcmsApi1Inquiry1MessagesSendRequest): Promise<any>;
    /**
     *
     * ### **InquiryMessage::update (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **id** `1`
     *
     * @param inquiryBnId Message ID
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postInquiriesServiceRcmsApi1Inquiry1MessagesUpdate(requestParam: InquiriesService.postInquiriesServiceRcmsApi1Inquiry1MessagesUpdateRequest): Promise<any>;
}
export declare namespace InquiriesService {
    interface getInquiriesServiceRcmsApi1InquiryFormsRequest {
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type getInquiriesServiceRcmsApi1InquiryFormsResponse = any;
    interface getInquiriesServiceRcmsApi1InquiryFormsInquiryIdRequest {
        inquiryId: number;
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type getInquiriesServiceRcmsApi1InquiryFormsInquiryIdResponse = any;
    interface getInquiriesServiceRcmsApi1Inquiry1MessagesRequest {
        outputFormat?: string;
        lang?: string;
        charset?: string;
        order?: string;
    }
    type getInquiriesServiceRcmsApi1Inquiry1MessagesResponse = any;
    interface postInquiriesServiceRcmsApi1Inquiry1MessagesSendRequest {
        requestBody: {
            /**
             * Name
             */
            name?: string;
            /**
             * E-mail
             */
            from_mail?: string;
            /**
             * Message
             */
            body?: string;
            /**
             * * 1 => Category1
             * * 3 => Category2
             * * 4 => Category3
             */
            inquiry_category_id: (1 | 3 | 4);
            /**
             * RequiredText
             */
            ext_01: string;
            /**
             * LongText
             */
            ext_02?: string;
            /**
             * Radio
             * * 1 => radio1
             * * 2 => radio2
             * * 3 => radio3
             */
            ext_03?: {
                key: string;
                label: string;
            } | '' | '1' | '2' | '3';
            /**
             * RequiredSelect
             * * 1 => select1
             * * 2 => select2
             * * 3 => select3
             */
            ext_04: {
                key: string;
                label: string;
            } | '' | '1' | '2' | '3';
            /**
             * Checkbox
             * * 1 => check1
             * * 2 => check2
             * * 3 => check3
             */
            ext_05?: Array<{
                key: string;
                label: string;
            } | '1' | '2' | '3'>;
            /**
             * DateTime
             */
            ext_06?: string | {
                y: number;
                m: number;
                d: number;
                h: number;
                mm: number;
            };
            ext_07?: {
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
             * Tdfk
             */
            ext_08?: {
                tdfk_cd?: ('01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '20' | '21' | '22' | '23' | '24' | '25' | '26' | '27' | '28' | '29' | '30' | '31' | '32' | '33' | '34' | '35' | '36' | '37' | '38' | '39' | '40' | '41' | '42' | '43' | '44' | '45' | '46' | '47' | '99');
                tdfk_nm?: ('北海道' | '青森県' | '岩手県' | '宮城県' | '秋田県' | '山形県' | '福島県' | '茨城県' | '栃木県' | '群馬県' | '埼玉県' | '千葉県' | '東京都' | '神奈川県' | '新潟県' | '富山県' | '石川県' | '福井県' | '山梨県' | '長野県' | '岐阜県' | '静岡県' | '愛知県' | '三重県' | '滋賀県' | '京都府' | '大阪府' | '兵庫県' | '奈良県' | '和歌山県' | '鳥取県' | '島根県' | '岡山県' | '広島県' | '山口県' | '徳島県' | '香川県' | '愛媛県' | '高知県' | '福岡県' | '佐賀県' | '長崎県' | '熊本県' | '大分県' | '宮崎県' | '鹿児島県' | '沖縄県' | '海外');
            };
            /**
             * JSON
             */
            ext_09?: {
                /**
                 * * 1 => opt1
                 * * 2 => opt2
                 */
                options?: ('1' | '2');
                text?: string;
            };
            /**
             * Date
             */
            ext_10?: string | {
                y: number;
                m: number;
                d: number;
            };
            /**
             * Validate
             */
            validate_only?: boolean;
        };
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type postInquiriesServiceRcmsApi1Inquiry1MessagesSendResponse = any;
    interface postInquiriesServiceRcmsApi1Inquiry1MessagesUpdateRequest {
        inquiryBnId: string;
        requestBody: {
            /**
             * Name
             */
            name?: string;
            /**
             * E-mail
             */
            from_mail?: string;
            /**
             * Message
             */
            body?: string;
            /**
             * * 1 => Category1
             * * 3 => Category2
             * * 4 => Category3
             */
            inquiry_category_id?: (1 | 3 | 4);
            /**
             * RequiredText
             */
            ext_01?: string;
            /**
             * LongText
             */
            ext_02?: string;
            /**
             * Radio
             * * 1 => radio1
             * * 2 => radio2
             * * 3 => radio3
             */
            ext_03?: {
                key: string;
                label: string;
            } | '' | '1' | '2' | '3';
            /**
             * RequiredSelect
             * * 1 => select1
             * * 2 => select2
             * * 3 => select3
             */
            ext_04?: {
                key: string;
                label: string;
            } | '' | '1' | '2' | '3';
            /**
             * Checkbox
             * * 1 => check1
             * * 2 => check2
             * * 3 => check3
             */
            ext_05?: Array<{
                key: string;
                label: string;
            } | '1' | '2' | '3'>;
            /**
             * DateTime
             */
            ext_06?: string | {
                y: number;
                m: number;
                d: number;
                h: number;
                mm: number;
            };
            ext_07?: {
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
             * Tdfk
             */
            ext_08?: {
                tdfk_cd?: ('01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '20' | '21' | '22' | '23' | '24' | '25' | '26' | '27' | '28' | '29' | '30' | '31' | '32' | '33' | '34' | '35' | '36' | '37' | '38' | '39' | '40' | '41' | '42' | '43' | '44' | '45' | '46' | '47' | '99');
                tdfk_nm?: ('北海道' | '青森県' | '岩手県' | '宮城県' | '秋田県' | '山形県' | '福島県' | '茨城県' | '栃木県' | '群馬県' | '埼玉県' | '千葉県' | '東京都' | '神奈川県' | '新潟県' | '富山県' | '石川県' | '福井県' | '山梨県' | '長野県' | '岐阜県' | '静岡県' | '愛知県' | '三重県' | '滋賀県' | '京都府' | '大阪府' | '兵庫県' | '奈良県' | '和歌山県' | '鳥取県' | '島根県' | '岡山県' | '広島県' | '山口県' | '徳島県' | '香川県' | '愛媛県' | '高知県' | '福岡県' | '佐賀県' | '長崎県' | '熊本県' | '大分県' | '宮崎県' | '鹿児島県' | '沖縄県' | '海外');
            };
            /**
             * JSON
             */
            ext_09?: {
                /**
                 * * 1 => opt1
                 * * 2 => opt2
                 */
                options?: ('1' | '2');
                text?: string;
            };
            /**
             * Date
             */
            ext_10?: string | {
                y: number;
                m: number;
                d: number;
            };
            /**
             * Validate
             */
            validate_only?: boolean;
        };
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type postInquiriesServiceRcmsApi1Inquiry1MessagesUpdateResponse = any;
}
export declare const infos: {
    path: string;
    httpMethod: string;
    class: typeof InquiriesService;
    className: string;
    method: typeof InquiriesService.getInquiriesServiceRcmsApi1InquiryForms;
    methodName: string;
    auth: null;
    description: string;
}[];
//# sourceMappingURL=InquiriesService.d.ts.map