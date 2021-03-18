/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { request as __request } from '../core/request';

export class InquiriesService {

    /**
     * null
     *
     * ### **InquiryForm::list (v1)**
     *
     * null
     * @returns any
     * @throws ApiError
     */
    public static async getInquiriesService({
        outputFormat,
        lang,
        charset,
        cnt,
        pageId,
        filter,
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
        /** Filter query **/
        filter?: string,
    }): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/rcms-api/1/inquiry/forms`,
            query: {
                '_output_format': outputFormat,
                '_lang': lang,
                '_charset': charset,
                'cnt': cnt,
                'pageID': pageId,
                'filter': filter,
            },
        });
        return result.body;
    }

    /**
     * null
     *
     * ### **InquiryForm::details (v1)**
     *
     * null
     * @returns any
     * @throws ApiError
     */
    public static async getInquiriesService1({
        inquiryId,
        outputFormat,
        lang,
        charset,
        filter,
    }: {
        inquiryId: number,
        /** Format (json|xml|csv|zip) **/
        outputFormat?: string,
        /** Language **/
        lang?: string,
        /** Charset **/
        charset?: string,
        /** Filter query **/
        filter?: string,
    }): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/rcms-api/1/inquiry/forms/${inquiryId}`,
            query: {
                '_output_format': outputFormat,
                '_lang': lang,
                '_charset': charset,
                'filter': filter,
            },
        });
        return result.body;
    }

    /**
     *
     * ### **InquiryMessage::list (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **filter_request_allow_list** `member_id`
     *
     * @returns any
     * @throws ApiError
     */
    public static async getInquiriesService2({
        outputFormat,
        lang,
        charset,
        sCategory,
        sStatus,
        keyword,
        pageId,
        cnt,
        fromDt,
        toDt,
        filter,
        orderQuery,
        inquiryId,
    }: {
        /** Format (json|xml|csv|zip) **/
        outputFormat?: string,
        /** Language **/
        lang?: string,
        /** Charset **/
        charset?: string,
        /** Category **/
        sCategory?: number,
        /** Status **/
        sStatus?: number,
        /** Keyword **/
        keyword?: string,
        /** Page ID **/
        pageId?: number,
        /** Display number per page **/
        cnt?: number,
        /** Reception Date **/
        fromDt?: string,
        /** Reception Date **/
        toDt?: string,
        /** Filter query **/
        filter?: string,
        /** Order, format ex: foo=ASC,bar=DESC **/
        orderQuery?: string,
        /** Form form ID **/
        inquiryId?: Array<number>,
    }): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/rcms-api/1/inquiry1/messages`,
            query: {
                '_output_format': outputFormat,
                '_lang': lang,
                '_charset': charset,
                's_category': sCategory,
                's_status': sStatus,
                'keyword': keyword,
                'pageID': pageId,
                'cnt': cnt,
                'from_dt': fromDt,
                'to_dt': toDt,
                'filter': filter,
                'order_query': orderQuery,
                'inquiry_id[]': inquiryId,
            },
        });
        return result.body;
    }

    /**
     *
     * ### **InquiryMessage::send (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **id** `1`
     *
     * @returns any
     * @throws ApiError
     */
    public static async postInquiriesService({
        requestBody,
        outputFormat,
        lang,
        charset,
    }: {
        requestBody: {
            /**
             * Name
             */
            name: string,
            /**
             * E-mail
             */
            from_mail: string,
            /**
             * RequiredText
             */
            ext_01: string,
            /**
             * LongText
             */
            ext_02?: string,
            /**
             * Radio
             * * 1 => radio1
             * * 2 => radio2
             * * 3 => radio3
             */
            ext_03: ({
                key?: '1' | '2' | '3',
                label?: 'radio1' | 'radio2' | 'radio3',
            } | '1' | '2' | '3'),
            /**
             * RequiredSelect
             * * 1 => select1
             * * 2 => select2
             * * 3 => select3
             */
            ext_04: ({
                key?: '1' | '2' | '3',
                label?: 'select1' | 'select2' | 'select3',
            } | '1' | '2' | '3'),
            /**
             * Checkbox
             * * 1 => check1
             * * 2 => check2
             * * 3 => check3
             */
            ext_05: Array<({
                key?: '1' | '2' | '3',
                label?: 'check1' | 'check2' | 'check3',
            } | '1' | '2' | '3')>,
            /**
             * DateTime
             */
            ext_06?: (string | {
                'y'?: number,
                'm'?: number,
                'd'?: number,
                'h'?: number,
                mm?: number,
            }),
            ext_07?: {
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
             * Tdfk
             */
            ext_08?: {
                tdfk_cd?: '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '20' | '21' | '22' | '23' | '24' | '25' | '26' | '27' | '28' | '29' | '30' | '31' | '32' | '33' | '34' | '35' | '36' | '37' | '38' | '39' | '40' | '41' | '42' | '43' | '44' | '45' | '46' | '47' | '99',
                tdfk_nm?: '北海道' | '青森県' | '岩手県' | '宮城県' | '秋田県' | '山形県' | '福島県' | '茨城県' | '栃木県' | '群馬県' | '埼玉県' | '千葉県' | '東京都' | '神奈川県' | '新潟県' | '富山県' | '石川県' | '福井県' | '山梨県' | '長野県' | '岐阜県' | '静岡県' | '愛知県' | '三重県' | '滋賀県' | '京都府' | '大阪府' | '兵庫県' | '奈良県' | '和歌山県' | '鳥取県' | '島根県' | '岡山県' | '広島県' | '山口県' | '徳島県' | '香川県' | '愛媛県' | '高知県' | '福岡県' | '佐賀県' | '長崎県' | '熊本県' | '大分県' | '宮崎県' | '鹿児島県' | '沖縄県' | '海外',
            },
            ext_09?: any,
            /**
             * Date
             */
            ext_10?: (string | {
                'y'?: number,
                'm'?: number,
                'd'?: number,
            }),
            ext_11?: ({
                col1?: 'row1' | 'row2' | 'row3',
                col2?: 'row1' | 'row2' | 'row3',
                col3?: 'row1' | 'row2' | 'row3',
            }),
            ext_12?: ({
                col1?: Array<'row1' | 'row2' | 'row3'>,
                col2?: Array<'row1' | 'row2' | 'row3'>,
                col3?: Array<'row1' | 'row2' | 'row3'>,
            }),
            /**
             * Message
             */
            body: string,
            /**
             * * 1 => Category1
             * * 3 => Category2
             * * 4 => Category3
             */
            inquiry_category_id: 1 | 3 | 4,
            /**
             * Validate
             */
            validate_only: boolean,
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
            path: `/rcms-api/1/inquiry1/messages/send`,
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
     * ### **InquiryMessage::update (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **id** `1`
     *
     * @returns any
     * @throws ApiError
     */
    public static async postInquiriesService1({
        inquiryBnId,
        requestBody,
        outputFormat,
        lang,
        charset,
    }: {
        inquiryBnId: number,
        requestBody: {
            /**
             * Name
             */
            name: string,
            /**
             * E-mail
             */
            from_mail: string,
            /**
             * RequiredText
             */
            ext_01?: string,
            /**
             * LongText
             */
            ext_02?: string,
            /**
             * Radio
             * * 1 => radio1
             * * 2 => radio2
             * * 3 => radio3
             */
            ext_03: ({
                key?: '1' | '2' | '3',
                label?: 'radio1' | 'radio2' | 'radio3',
            } | '1' | '2' | '3'),
            /**
             * RequiredSelect
             * * 1 => select1
             * * 2 => select2
             * * 3 => select3
             */
            ext_04: ({
                key?: '1' | '2' | '3',
                label?: 'select1' | 'select2' | 'select3',
            } | '1' | '2' | '3'),
            /**
             * Checkbox
             * * 1 => check1
             * * 2 => check2
             * * 3 => check3
             */
            ext_05: Array<({
                key?: '1' | '2' | '3',
                label?: 'check1' | 'check2' | 'check3',
            } | '1' | '2' | '3')>,
            /**
             * DateTime
             */
            ext_06?: (string | {
                'y'?: number,
                'm'?: number,
                'd'?: number,
                'h'?: number,
                mm?: number,
            }),
            ext_07?: {
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
             * Tdfk
             */
            ext_08?: {
                tdfk_cd?: '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '20' | '21' | '22' | '23' | '24' | '25' | '26' | '27' | '28' | '29' | '30' | '31' | '32' | '33' | '34' | '35' | '36' | '37' | '38' | '39' | '40' | '41' | '42' | '43' | '44' | '45' | '46' | '47' | '99',
                tdfk_nm?: '北海道' | '青森県' | '岩手県' | '宮城県' | '秋田県' | '山形県' | '福島県' | '茨城県' | '栃木県' | '群馬県' | '埼玉県' | '千葉県' | '東京都' | '神奈川県' | '新潟県' | '富山県' | '石川県' | '福井県' | '山梨県' | '長野県' | '岐阜県' | '静岡県' | '愛知県' | '三重県' | '滋賀県' | '京都府' | '大阪府' | '兵庫県' | '奈良県' | '和歌山県' | '鳥取県' | '島根県' | '岡山県' | '広島県' | '山口県' | '徳島県' | '香川県' | '愛媛県' | '高知県' | '福岡県' | '佐賀県' | '長崎県' | '熊本県' | '大分県' | '宮崎県' | '鹿児島県' | '沖縄県' | '海外',
            },
            ext_09?: any,
            /**
             * Date
             */
            ext_10?: (string | {
                'y'?: number,
                'm'?: number,
                'd'?: number,
            }),
            ext_11?: ({
                col1?: 'row1' | 'row2' | 'row3',
                col2?: 'row1' | 'row2' | 'row3',
                col3?: 'row1' | 'row2' | 'row3',
            }),
            ext_12?: ({
                col1?: Array<'row1' | 'row2' | 'row3'>,
                col2?: Array<'row1' | 'row2' | 'row3'>,
                col3?: Array<'row1' | 'row2' | 'row3'>,
            }),
            /**
             * Message
             */
            body: string,
            /**
             * * 1 => Category1
             * * 3 => Category2
             * * 4 => Category3
             */
            inquiry_category_id?: 1 | 3 | 4,
            /**
             * Validate
             */
            validate_only: boolean,
            /**
             * * 0 => Not supported
             * * 5 => Supporting
             * * 10 => Support finished
             * * 20 => Replies
             */
            status: ({
                key?: '0' | '5' | '10' | '20',
                label?: 'Not supported' | 'Supporting' | 'Support finished' | 'Replies',
            } | '0' | '5' | '10' | '20'),
            /**
             * Admin's memo
             */
            comment?: string,
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
            path: `/rcms-api/1/inquiry1/messages/update/${inquiryBnId}`,
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
     * ### **InquiryForm::insert (v1)**
     *
     *
     * @returns any
     * @throws ApiError
     */
    public static async postInquiriesService2({
        requestBody,
        outputFormat,
        lang,
        charset,
    }: {
        requestBody: {
            /**
             * Title
             */
            inquiry_name: string,
            /**
             * Category ID
             */
            inquiry_order_no?: number,
            /**
             * Explanation
             */
            inquiry_info?: string,
            /**
             * Final text
             */
            thanks_text: string,
            /**
             * Tag for the complete inquiry
             */
            thanks_tag: string,
            /**
             * This is a thanks message to send to inquirers.
             */
            send_thanks_mail_flg: number,
            /**
             * Title
             */
            thanks_mail_subject: string,
            /**
             * Content
             */
            thanks_mail_body: string,
            /**
             * Title
             */
            contact_subject: string,
            /**
             * Destination email address
             */
            contact_address: string,
            /**
             * The notifications will be sent to this address.
             */
            contact_flg: number,
            /**
             * Combined with external system linkage
             */
            no_db_flg?: number,
            /**
             * Status list
             */
            status_list: any,
            /**
             * Status
             */
            status: number,
            /**
             * Aceess Limt for basic settings
             */
            can_access_basic_setting?: Array<number>,
            /**
             * Aceess limt for item settings
             */
            can_access_item_setting?: Array<number>,
            /**
             * Aceess limtation for Answres
             */
            can_access_mail_setting_kbn: number,
            /**
             * Aceess limtation for Answres
             */
            can_access_mail_setting?: Array<number>,
            /**
             * Access limit for downloads
             */
            can_access_download_setting_kbn: number,
            /**
             * Access limit for downloads
             */
            can_access_download_setting?: Array<number>,
            /**
             * Permission to edit answers
             */
            can_edit_inquiry_mail_content: number,
            /**
             * E-mail address
             */
            mail: string,
            /**
             * categoryCnt
             */
            categoryCnt?: number,
            inquiry_category_id?: Array<number>,
            /**
             * Category
             */
            inquiry_category_name?: Array<string>,
            /**
             * Destination email address
             */
            inquiry_category_email?: Array<string>,
            /**
             * Sort
             */
            order_no?: Array<number>,
            inquiry_category_del?: Array<number>,
            /**
             * Reading permissions
             */
            secure_level?: Array<number>,
            ext_01?: string,
            ext_02?: string,
            ext_03?: string,
            ext_04?: string,
            ext_05?: string,
            ext_06?: string,
            ext_07?: string,
            ext_08?: string,
            ext_09?: string,
            ext_10?: string,
            /**
             * Title
             */
            ext_11: string,
            /**
             * Title
             */
            ext_12: string,
            /**
             * Title
             */
            ext_13: string,
            /**
             * Title
             */
            ext_14: string,
            /**
             * Title
             */
            ext_15: string,
            /**
             * Title
             */
            ext_16: string,
            /**
             * Title
             */
            ext_17: string,
            /**
             * Title
             */
            ext_18: string,
            /**
             * Title
             */
            ext_19: string,
            /**
             * Title
             */
            ext_20: string,
            /**
             * Title
             */
            ext_21: string,
            /**
             * Title
             */
            ext_22: string,
            /**
             * Title
             */
            ext_23: string,
            /**
             * Title
             */
            ext_24: string,
            /**
             * Title
             */
            ext_25: string,
            /**
             * Title
             */
            ext_26: string,
            /**
             * Title
             */
            ext_27: string,
            /**
             * Title
             */
            ext_28: string,
            /**
             * Title
             */
            ext_29: string,
            /**
             * Title
             */
            ext_30: string,
            /**
             * Title
             */
            ext_31: string,
            /**
             * Title
             */
            ext_32: string,
            /**
             * Title
             */
            ext_33: string,
            /**
             * Title
             */
            ext_34: string,
            /**
             * Title
             */
            ext_35: string,
            /**
             * Title
             */
            ext_36: string,
            /**
             * Title
             */
            ext_37: string,
            /**
             * Title
             */
            ext_38: string,
            /**
             * Title
             */
            ext_39: string,
            /**
             * Title
             */
            ext_40: string,
            /**
             * Title
             */
            ext_41: string,
            /**
             * Title
             */
            ext_42: string,
            /**
             * Title
             */
            ext_43: string,
            /**
             * Title
             */
            ext_44: string,
            /**
             * Title
             */
            ext_45: string,
            /**
             * Title
             */
            ext_46: string,
            /**
             * Title
             */
            ext_47: string,
            /**
             * Title
             */
            ext_48: string,
            /**
             * Title
             */
            ext_49: string,
            /**
             * Title
             */
            ext_50: string,
            /**
             * Title
             */
            ext_51: string,
            /**
             * Title
             */
            ext_52: string,
            /**
             * Title
             */
            ext_53: string,
            /**
             * Title
             */
            ext_54: string,
            /**
             * Title
             */
            ext_55: string,
            /**
             * Title
             */
            ext_56: string,
            /**
             * Title
             */
            ext_57: string,
            /**
             * Title
             */
            ext_58: string,
            /**
             * Title
             */
            ext_59: string,
            /**
             * Title
             */
            ext_60: string,
            /**
             * Title
             */
            ext_61: string,
            /**
             * Title
             */
            ext_62: string,
            /**
             * Title
             */
            ext_63: string,
            /**
             * Title
             */
            ext_64: string,
            /**
             * Title
             */
            ext_65: string,
            /**
             * Title
             */
            ext_66: string,
            /**
             * Title
             */
            ext_67: string,
            /**
             * Title
             */
            ext_68: string,
            /**
             * Title
             */
            ext_69: string,
            /**
             * Title
             */
            ext_70: string,
            /**
             * Title
             */
            ext_71: string,
            /**
             * Title
             */
            ext_72: string,
            /**
             * Title
             */
            ext_73: string,
            /**
             * Title
             */
            ext_74: string,
            /**
             * Title
             */
            ext_75: string,
            /**
             * Title
             */
            ext_76: string,
            /**
             * Title
             */
            ext_77: string,
            /**
             * Title
             */
            ext_78: string,
            /**
             * Title
             */
            ext_79: string,
            /**
             * Title
             */
            ext_80: string,
            /**
             * Required attribute
             */
            user_profile?: {
                name: '1' | '2' | '0',
                email: '1' | '2' | '0',
                message: '1' | '2' | '0',
                ext_01: '1' | '2' | '0',
                ext_02: '1' | '2' | '0',
                ext_03: '1' | '2' | '0',
                ext_04: '1' | '2' | '0',
                ext_05: '1' | '2' | '0',
                ext_06: '1' | '2' | '0',
                ext_07: '1' | '2' | '0',
                ext_08: '1' | '2' | '0',
                ext_09: '1' | '2' | '0',
                ext_10: '1' | '2' | '0',
                ext_11: '1' | '2' | '0',
                ext_12: '1' | '2' | '0',
                ext_13: '1' | '2' | '0',
                ext_14: '1' | '2' | '0',
                ext_15: '1' | '2' | '0',
                ext_16: '1' | '2' | '0',
                ext_17: '1' | '2' | '0',
                ext_18: '1' | '2' | '0',
                ext_19: '1' | '2' | '0',
                ext_20: '1' | '2' | '0',
                ext_21: '1' | '2' | '0',
                ext_22: '1' | '2' | '0',
                ext_23: '1' | '2' | '0',
                ext_24: '1' | '2' | '0',
                ext_25: '1' | '2' | '0',
                ext_26: '1' | '2' | '0',
                ext_27: '1' | '2' | '0',
                ext_28: '1' | '2' | '0',
                ext_29: '1' | '2' | '0',
                ext_30: '1' | '2' | '0',
                ext_31: '1' | '2' | '0',
                ext_32: '1' | '2' | '0',
                ext_33: '1' | '2' | '0',
                ext_34: '1' | '2' | '0',
                ext_35: '1' | '2' | '0',
                ext_36: '1' | '2' | '0',
                ext_37: '1' | '2' | '0',
                ext_38: '1' | '2' | '0',
                ext_39: '1' | '2' | '0',
                ext_40: '1' | '2' | '0',
                ext_41: '1' | '2' | '0',
                ext_42: '1' | '2' | '0',
                ext_43: '1' | '2' | '0',
                ext_44: '1' | '2' | '0',
                ext_45: '1' | '2' | '0',
                ext_46: '1' | '2' | '0',
                ext_47: '1' | '2' | '0',
                ext_48: '1' | '2' | '0',
                ext_49: '1' | '2' | '0',
                ext_50: '1' | '2' | '0',
                ext_51: '1' | '2' | '0',
                ext_52: '1' | '2' | '0',
                ext_53: '1' | '2' | '0',
                ext_54: '1' | '2' | '0',
                ext_55: '1' | '2' | '0',
                ext_56: '1' | '2' | '0',
                ext_57: '1' | '2' | '0',
                ext_58: '1' | '2' | '0',
                ext_59: '1' | '2' | '0',
                ext_60: '1' | '2' | '0',
                ext_61: '1' | '2' | '0',
                ext_62: '1' | '2' | '0',
                ext_63: '1' | '2' | '0',
                ext_64: '1' | '2' | '0',
                ext_65: '1' | '2' | '0',
                ext_66: '1' | '2' | '0',
                ext_67: '1' | '2' | '0',
                ext_68: '1' | '2' | '0',
                ext_69: '1' | '2' | '0',
                ext_70: '1' | '2' | '0',
                ext_71: '1' | '2' | '0',
                ext_72: '1' | '2' | '0',
                ext_73: '1' | '2' | '0',
                ext_74: '1' | '2' | '0',
                ext_75: '1' | '2' | '0',
                ext_76: '1' | '2' | '0',
                ext_77: '1' | '2' | '0',
                ext_78: '1' | '2' | '0',
                ext_79: '1' | '2' | '0',
                ext_80: '1' | '2' | '0',
            },
            /**
             * Answer type
             */
            form_type?: {
                ext_01?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_02?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_03?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_04?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_05?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_06?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_07?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_08?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_09?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_10?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_11?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_12?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_13?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_14?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_15?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_16?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_17?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_18?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_19?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_20?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_21?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_22?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_23?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_24?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_25?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_26?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_27?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_28?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_29?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_30?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_31?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_32?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_33?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_34?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_35?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_36?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_37?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_38?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_39?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_40?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_41?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_42?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_43?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_44?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_45?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_46?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_47?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_48?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_49?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_50?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_51?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_52?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_53?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_54?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_55?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_56?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_57?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_58?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_59?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_60?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_61?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_62?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_63?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_64?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_65?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_66?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_67?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_68?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_69?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_70?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_71?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_72?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_73?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_74?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_75?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_76?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_77?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_78?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_79?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_80?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
            },
            /**
             * Form help message
             */
            form_help_msg?: {
                ext_03?: string,
                ext_01?: string,
                ext_02?: string,
                ext_04?: string,
                ext_05?: string,
                ext_06?: string,
                ext_07?: string,
                ext_08?: string,
                ext_09?: string,
                ext_10?: string,
                ext_11?: string,
                ext_12?: string,
                ext_13?: string,
                ext_14?: string,
                ext_15?: string,
                ext_16?: string,
                ext_17?: string,
                ext_18?: string,
                ext_19?: string,
                ext_20?: string,
                ext_21?: string,
                ext_22?: string,
                ext_23?: string,
                ext_24?: string,
                ext_25?: string,
                ext_26?: string,
                ext_27?: string,
                ext_28?: string,
                ext_29?: string,
                ext_30?: string,
                ext_31?: string,
                ext_32?: string,
                ext_33?: string,
                ext_34?: string,
                ext_35?: string,
                ext_36?: string,
                ext_37?: string,
                ext_38?: string,
                ext_39?: string,
                ext_40?: string,
                ext_41?: string,
                ext_42?: string,
                ext_43?: string,
                ext_44?: string,
                ext_45?: string,
                ext_46?: string,
                ext_47?: string,
                ext_48?: string,
                ext_49?: string,
                ext_50?: string,
                ext_51?: string,
                ext_52?: string,
                ext_53?: string,
                ext_54?: string,
                ext_55?: string,
                ext_56?: string,
                ext_57?: string,
                ext_58?: string,
                ext_59?: string,
                ext_60?: string,
                ext_61?: string,
                ext_62?: string,
                ext_63?: string,
                ext_64?: string,
                ext_65?: string,
                ext_66?: string,
                ext_67?: string,
                ext_68?: string,
                ext_69?: string,
                ext_70?: string,
                ext_71?: string,
                ext_72?: string,
                ext_73?: string,
                ext_74?: string,
                ext_75?: string,
                ext_76?: string,
                ext_77?: string,
                ext_78?: string,
                ext_79?: string,
                ext_80?: string,
            },
            /**
             * Answer type
             */
            form_type_option?: {
                ext_03?: any,
                ext_04?: any,
                ext_05?: any,
                ext_06?: any,
                ext_07?: any,
                ext_09?: any,
                ext_01?: any,
                ext_02?: any,
                ext_08?: any,
                ext_10?: any,
                ext_11?: any,
                ext_12?: any,
                ext_13?: any,
                ext_14?: any,
                ext_15?: any,
                ext_16?: any,
                ext_17?: any,
                ext_18?: any,
                ext_19?: any,
                ext_20?: any,
                ext_21?: any,
                ext_22?: any,
                ext_23?: any,
                ext_24?: any,
                ext_25?: any,
                ext_26?: any,
                ext_27?: any,
                ext_28?: any,
                ext_29?: any,
                ext_30?: any,
                ext_31?: any,
                ext_32?: any,
                ext_33?: any,
                ext_34?: any,
                ext_35?: any,
                ext_36?: any,
                ext_37?: any,
                ext_38?: any,
                ext_39?: any,
                ext_40?: any,
                ext_41?: any,
                ext_42?: any,
                ext_43?: any,
                ext_44?: any,
                ext_45?: any,
                ext_46?: any,
                ext_47?: any,
                ext_48?: any,
                ext_49?: any,
                ext_50?: any,
                ext_51?: any,
                ext_52?: any,
                ext_53?: any,
                ext_54?: any,
                ext_55?: any,
                ext_56?: any,
                ext_57?: any,
                ext_58?: any,
                ext_59?: any,
                ext_60?: any,
                ext_61?: any,
                ext_62?: any,
                ext_63?: any,
                ext_64?: any,
                ext_65?: any,
                ext_66?: any,
                ext_67?: any,
                ext_68?: any,
                ext_69?: any,
                ext_70?: any,
                ext_71?: any,
                ext_72?: any,
                ext_73?: any,
                ext_74?: any,
                ext_75?: any,
                ext_76?: any,
                ext_77?: any,
                ext_78?: any,
                ext_79?: any,
                ext_80?: any,
            },
            /**
             * Initial value
             */
            form_type_option_default?: {
                ext_03?: Array<string>,
                ext_04?: Array<string>,
                ext_05?: Array<string>,
                ext_01?: Array<string>,
                ext_02?: Array<string>,
                ext_06?: Array<string>,
                ext_07?: Array<string>,
                ext_08?: Array<string>,
                ext_09?: Array<string>,
                ext_10?: Array<string>,
                ext_11?: Array<string>,
                ext_12?: Array<string>,
                ext_13?: Array<string>,
                ext_14?: Array<string>,
                ext_15?: Array<string>,
                ext_16?: Array<string>,
                ext_17?: Array<string>,
                ext_18?: Array<string>,
                ext_19?: Array<string>,
                ext_20?: Array<string>,
                ext_21?: Array<string>,
                ext_22?: Array<string>,
                ext_23?: Array<string>,
                ext_24?: Array<string>,
                ext_25?: Array<string>,
                ext_26?: Array<string>,
                ext_27?: Array<string>,
                ext_28?: Array<string>,
                ext_29?: Array<string>,
                ext_30?: Array<string>,
                ext_31?: Array<string>,
                ext_32?: Array<string>,
                ext_33?: Array<string>,
                ext_34?: Array<string>,
                ext_35?: Array<string>,
                ext_36?: Array<string>,
                ext_37?: Array<string>,
                ext_38?: Array<string>,
                ext_39?: Array<string>,
                ext_40?: Array<string>,
                ext_41?: Array<string>,
                ext_42?: Array<string>,
                ext_43?: Array<string>,
                ext_44?: Array<string>,
                ext_45?: Array<string>,
                ext_46?: Array<string>,
                ext_47?: Array<string>,
                ext_48?: Array<string>,
                ext_49?: Array<string>,
                ext_50?: Array<string>,
                ext_51?: Array<string>,
                ext_52?: Array<string>,
                ext_53?: Array<string>,
                ext_54?: Array<string>,
                ext_55?: Array<string>,
                ext_56?: Array<string>,
                ext_57?: Array<string>,
                ext_58?: Array<string>,
                ext_59?: Array<string>,
                ext_60?: Array<string>,
                ext_61?: Array<string>,
                ext_62?: Array<string>,
                ext_63?: Array<string>,
                ext_64?: Array<string>,
                ext_65?: Array<string>,
                ext_66?: Array<string>,
                ext_67?: Array<string>,
                ext_68?: Array<string>,
                ext_69?: Array<string>,
                ext_70?: Array<string>,
                ext_71?: Array<string>,
                ext_72?: Array<string>,
                ext_73?: Array<string>,
                ext_74?: Array<string>,
                ext_75?: Array<string>,
                ext_76?: Array<string>,
                ext_77?: Array<string>,
                ext_78?: Array<string>,
                ext_79?: Array<string>,
                ext_80?: Array<string>,
            },
            /**
             * Options settings
             */
            limit_item?: {
                ext_01: any,
                ext_02: any,
                ext_03?: any,
                ext_04?: any,
                ext_05?: any,
                ext_06?: any,
                ext_07?: any,
                ext_08?: any,
                ext_09?: any,
                ext_10?: any,
                ext_11?: any,
                ext_12?: any,
                ext_13?: any,
                ext_14?: any,
                ext_15?: any,
                ext_16?: any,
                ext_17?: any,
                ext_18?: any,
                ext_19?: any,
                ext_20?: any,
                ext_21?: any,
                ext_22?: any,
                ext_23?: any,
                ext_24?: any,
                ext_25?: any,
                ext_26?: any,
                ext_27?: any,
                ext_28?: any,
                ext_29?: any,
                ext_30?: any,
                ext_31?: any,
                ext_32?: any,
                ext_33?: any,
                ext_34?: any,
                ext_35?: any,
                ext_36?: any,
                ext_37?: any,
                ext_38?: any,
                ext_39?: any,
                ext_40?: any,
                ext_41?: any,
                ext_42?: any,
                ext_43?: any,
                ext_44?: any,
                ext_45?: any,
                ext_46?: any,
                ext_47?: any,
                ext_48?: any,
                ext_49?: any,
                ext_50?: any,
                ext_51?: any,
                ext_52?: any,
                ext_53?: any,
                ext_54?: any,
                ext_55?: any,
                ext_56?: any,
                ext_57?: any,
                ext_58?: any,
                ext_59?: any,
                ext_60?: any,
                ext_61?: any,
                ext_62?: any,
                ext_63?: any,
                ext_64?: any,
                ext_65?: any,
                ext_66?: any,
                ext_67?: any,
                ext_68?: any,
                ext_69?: any,
                ext_70?: any,
                ext_71?: any,
                ext_72?: any,
                ext_73?: any,
                ext_74?: any,
                ext_75?: any,
                ext_76?: any,
                ext_77?: any,
                ext_78?: any,
                ext_79?: any,
                ext_80?: any,
            },
            /**
             * Sort Order(Descending)
             */
            order?: {
                name: number,
                email: number,
                message: number,
                ext_01: number,
                ext_02: number,
                ext_03: number,
                ext_04: number,
                ext_05: number,
                ext_06: number,
                ext_07: number,
                ext_08: number,
                ext_09: number,
                ext_10: number,
                ext_11: number,
                ext_12: number,
                ext_13: number,
                ext_14: number,
                ext_15: number,
                ext_16: number,
                ext_17: number,
                ext_18: number,
                ext_19: number,
                ext_20: number,
                ext_21: number,
                ext_22: number,
                ext_23: number,
                ext_24: number,
                ext_25: number,
                ext_26: number,
                ext_27: number,
                ext_28: number,
                ext_29: number,
                ext_30: number,
                ext_31: number,
                ext_32: number,
                ext_33: number,
                ext_34: number,
                ext_35: number,
                ext_36: number,
                ext_37: number,
                ext_38: number,
                ext_39: number,
                ext_40: number,
                ext_41: number,
                ext_42: number,
                ext_43: number,
                ext_44: number,
                ext_45: number,
                ext_46: number,
                ext_47: number,
                ext_48: number,
                ext_49: number,
                ext_50: number,
                ext_51: number,
                ext_52: number,
                ext_53: number,
                ext_54: number,
                ext_55: number,
                ext_56: number,
                ext_57: number,
                ext_58: number,
                ext_59: number,
                ext_60: number,
                ext_61: number,
                ext_62: number,
                ext_63: number,
                ext_64: number,
                ext_65: number,
                ext_66: number,
                ext_67: number,
                ext_68: number,
                ext_69: number,
                ext_70: number,
                ext_71: number,
                ext_72: number,
                ext_73: number,
                ext_74: number,
                ext_75: number,
                ext_76: number,
                ext_77: number,
                ext_78: number,
                ext_79: number,
                ext_80: number,
            },
            /**
             * Sort Order(Descending)
             */
            attribute?: {
                ext_03?: any,
                ext_01?: any,
                ext_02?: any,
                ext_04?: any,
                ext_05?: any,
                ext_06?: any,
                ext_07?: any,
                ext_08?: any,
                ext_09?: any,
                ext_10?: any,
                ext_11?: any,
                ext_12?: any,
                ext_13?: any,
                ext_14?: any,
                ext_15?: any,
                ext_16?: any,
                ext_17?: any,
                ext_18?: any,
                ext_19?: any,
                ext_20?: any,
                ext_21?: any,
                ext_22?: any,
                ext_23?: any,
                ext_24?: any,
                ext_25?: any,
                ext_26?: any,
                ext_27?: any,
                ext_28?: any,
                ext_29?: any,
                ext_30?: any,
                ext_31?: any,
                ext_32?: any,
                ext_33?: any,
                ext_34?: any,
                ext_35?: any,
                ext_36?: any,
                ext_37?: any,
                ext_38?: any,
                ext_39?: any,
                ext_40?: any,
                ext_41?: any,
                ext_42?: any,
                ext_43?: any,
                ext_44?: any,
                ext_45?: any,
                ext_46?: any,
                ext_47?: any,
                ext_48?: any,
                ext_49?: any,
                ext_50?: any,
                ext_51?: any,
                ext_52?: any,
                ext_53?: any,
                ext_54?: any,
                ext_55?: any,
                ext_56?: any,
                ext_57?: any,
                ext_58?: any,
                ext_59?: any,
                ext_60?: any,
                ext_61?: any,
                ext_62?: any,
                ext_63?: any,
                ext_64?: any,
                ext_65?: any,
                ext_66?: any,
                ext_67?: any,
                ext_68?: any,
                ext_69?: any,
                ext_70?: any,
                ext_71?: any,
                ext_72?: any,
                ext_73?: any,
                ext_74?: any,
                ext_75?: any,
                ext_76?: any,
                ext_77?: any,
                ext_78?: any,
                ext_79?: any,
                ext_80?: any,
            },
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
            path: `/rcms-api/1/inquiry/forms/insert`,
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
     * ### **InquiryForm::update (v1)**
     *
     *
     * @returns any
     * @throws ApiError
     */
    public static async postInquiriesService3({
        inquiryId,
        requestBody,
        outputFormat,
        lang,
        charset,
    }: {
        inquiryId: number,
        requestBody: {
            /**
             * Title
             */
            inquiry_name: string,
            /**
             * Category ID
             */
            inquiry_order_no?: number,
            /**
             * Explanation
             */
            inquiry_info?: string,
            /**
             * Final text
             */
            thanks_text: string,
            /**
             * Tag for the complete inquiry
             */
            thanks_tag: string,
            /**
             * This is a thanks message to send to inquirers.
             */
            send_thanks_mail_flg: number,
            /**
             * Title
             */
            thanks_mail_subject: string,
            /**
             * Content
             */
            thanks_mail_body: string,
            /**
             * Title
             */
            contact_subject: string,
            /**
             * Destination email address
             */
            contact_address: string,
            /**
             * The notifications will be sent to this address.
             */
            contact_flg: number,
            /**
             * Combined with external system linkage
             */
            no_db_flg?: number,
            /**
             * Status list
             */
            status_list: any,
            /**
             * Status
             */
            status: number,
            /**
             * Aceess Limt for basic settings
             */
            can_access_basic_setting?: Array<number>,
            /**
             * Aceess limt for item settings
             */
            can_access_item_setting?: Array<number>,
            /**
             * Aceess limtation for Answres
             */
            can_access_mail_setting_kbn: number,
            /**
             * Aceess limtation for Answres
             */
            can_access_mail_setting?: Array<number>,
            /**
             * Access limit for downloads
             */
            can_access_download_setting_kbn: number,
            /**
             * Access limit for downloads
             */
            can_access_download_setting?: Array<number>,
            /**
             * Permission to edit answers
             */
            can_edit_inquiry_mail_content: number,
            /**
             * E-mail address
             */
            mail: string,
            /**
             * categoryCnt
             */
            categoryCnt?: number,
            inquiry_category_id?: Array<number>,
            /**
             * Category
             */
            inquiry_category_name?: Array<string>,
            /**
             * Destination email address
             */
            inquiry_category_email?: Array<string>,
            /**
             * Sort
             */
            order_no?: Array<number>,
            inquiry_category_del?: Array<number>,
            /**
             * Reading permissions
             */
            secure_level?: Array<number>,
            ext_01?: string,
            ext_02?: string,
            ext_03?: string,
            ext_04?: string,
            ext_05?: string,
            ext_06?: string,
            ext_07?: string,
            ext_08?: string,
            ext_09?: string,
            ext_10?: string,
            /**
             * Title
             */
            ext_11: string,
            /**
             * Title
             */
            ext_12: string,
            /**
             * Title
             */
            ext_13: string,
            /**
             * Title
             */
            ext_14: string,
            /**
             * Title
             */
            ext_15: string,
            /**
             * Title
             */
            ext_16: string,
            /**
             * Title
             */
            ext_17: string,
            /**
             * Title
             */
            ext_18: string,
            /**
             * Title
             */
            ext_19: string,
            /**
             * Title
             */
            ext_20: string,
            /**
             * Title
             */
            ext_21: string,
            /**
             * Title
             */
            ext_22: string,
            /**
             * Title
             */
            ext_23: string,
            /**
             * Title
             */
            ext_24: string,
            /**
             * Title
             */
            ext_25: string,
            /**
             * Title
             */
            ext_26: string,
            /**
             * Title
             */
            ext_27: string,
            /**
             * Title
             */
            ext_28: string,
            /**
             * Title
             */
            ext_29: string,
            /**
             * Title
             */
            ext_30: string,
            /**
             * Title
             */
            ext_31: string,
            /**
             * Title
             */
            ext_32: string,
            /**
             * Title
             */
            ext_33: string,
            /**
             * Title
             */
            ext_34: string,
            /**
             * Title
             */
            ext_35: string,
            /**
             * Title
             */
            ext_36: string,
            /**
             * Title
             */
            ext_37: string,
            /**
             * Title
             */
            ext_38: string,
            /**
             * Title
             */
            ext_39: string,
            /**
             * Title
             */
            ext_40: string,
            /**
             * Title
             */
            ext_41: string,
            /**
             * Title
             */
            ext_42: string,
            /**
             * Title
             */
            ext_43: string,
            /**
             * Title
             */
            ext_44: string,
            /**
             * Title
             */
            ext_45: string,
            /**
             * Title
             */
            ext_46: string,
            /**
             * Title
             */
            ext_47: string,
            /**
             * Title
             */
            ext_48: string,
            /**
             * Title
             */
            ext_49: string,
            /**
             * Title
             */
            ext_50: string,
            /**
             * Title
             */
            ext_51: string,
            /**
             * Title
             */
            ext_52: string,
            /**
             * Title
             */
            ext_53: string,
            /**
             * Title
             */
            ext_54: string,
            /**
             * Title
             */
            ext_55: string,
            /**
             * Title
             */
            ext_56: string,
            /**
             * Title
             */
            ext_57: string,
            /**
             * Title
             */
            ext_58: string,
            /**
             * Title
             */
            ext_59: string,
            /**
             * Title
             */
            ext_60: string,
            /**
             * Title
             */
            ext_61: string,
            /**
             * Title
             */
            ext_62: string,
            /**
             * Title
             */
            ext_63: string,
            /**
             * Title
             */
            ext_64: string,
            /**
             * Title
             */
            ext_65: string,
            /**
             * Title
             */
            ext_66: string,
            /**
             * Title
             */
            ext_67: string,
            /**
             * Title
             */
            ext_68: string,
            /**
             * Title
             */
            ext_69: string,
            /**
             * Title
             */
            ext_70: string,
            /**
             * Title
             */
            ext_71: string,
            /**
             * Title
             */
            ext_72: string,
            /**
             * Title
             */
            ext_73: string,
            /**
             * Title
             */
            ext_74: string,
            /**
             * Title
             */
            ext_75: string,
            /**
             * Title
             */
            ext_76: string,
            /**
             * Title
             */
            ext_77: string,
            /**
             * Title
             */
            ext_78: string,
            /**
             * Title
             */
            ext_79: string,
            /**
             * Title
             */
            ext_80: string,
            /**
             * Required attribute
             */
            user_profile?: {
                name: '1' | '2' | '0',
                email: '1' | '2' | '0',
                message: '1' | '2' | '0',
                ext_01: '1' | '2' | '0',
                ext_02: '1' | '2' | '0',
                ext_03: '1' | '2' | '0',
                ext_04: '1' | '2' | '0',
                ext_05: '1' | '2' | '0',
                ext_06: '1' | '2' | '0',
                ext_07: '1' | '2' | '0',
                ext_08: '1' | '2' | '0',
                ext_09: '1' | '2' | '0',
                ext_10: '1' | '2' | '0',
                ext_11: '1' | '2' | '0',
                ext_12: '1' | '2' | '0',
                ext_13: '1' | '2' | '0',
                ext_14: '1' | '2' | '0',
                ext_15: '1' | '2' | '0',
                ext_16: '1' | '2' | '0',
                ext_17: '1' | '2' | '0',
                ext_18: '1' | '2' | '0',
                ext_19: '1' | '2' | '0',
                ext_20: '1' | '2' | '0',
                ext_21: '1' | '2' | '0',
                ext_22: '1' | '2' | '0',
                ext_23: '1' | '2' | '0',
                ext_24: '1' | '2' | '0',
                ext_25: '1' | '2' | '0',
                ext_26: '1' | '2' | '0',
                ext_27: '1' | '2' | '0',
                ext_28: '1' | '2' | '0',
                ext_29: '1' | '2' | '0',
                ext_30: '1' | '2' | '0',
                ext_31: '1' | '2' | '0',
                ext_32: '1' | '2' | '0',
                ext_33: '1' | '2' | '0',
                ext_34: '1' | '2' | '0',
                ext_35: '1' | '2' | '0',
                ext_36: '1' | '2' | '0',
                ext_37: '1' | '2' | '0',
                ext_38: '1' | '2' | '0',
                ext_39: '1' | '2' | '0',
                ext_40: '1' | '2' | '0',
                ext_41: '1' | '2' | '0',
                ext_42: '1' | '2' | '0',
                ext_43: '1' | '2' | '0',
                ext_44: '1' | '2' | '0',
                ext_45: '1' | '2' | '0',
                ext_46: '1' | '2' | '0',
                ext_47: '1' | '2' | '0',
                ext_48: '1' | '2' | '0',
                ext_49: '1' | '2' | '0',
                ext_50: '1' | '2' | '0',
                ext_51: '1' | '2' | '0',
                ext_52: '1' | '2' | '0',
                ext_53: '1' | '2' | '0',
                ext_54: '1' | '2' | '0',
                ext_55: '1' | '2' | '0',
                ext_56: '1' | '2' | '0',
                ext_57: '1' | '2' | '0',
                ext_58: '1' | '2' | '0',
                ext_59: '1' | '2' | '0',
                ext_60: '1' | '2' | '0',
                ext_61: '1' | '2' | '0',
                ext_62: '1' | '2' | '0',
                ext_63: '1' | '2' | '0',
                ext_64: '1' | '2' | '0',
                ext_65: '1' | '2' | '0',
                ext_66: '1' | '2' | '0',
                ext_67: '1' | '2' | '0',
                ext_68: '1' | '2' | '0',
                ext_69: '1' | '2' | '0',
                ext_70: '1' | '2' | '0',
                ext_71: '1' | '2' | '0',
                ext_72: '1' | '2' | '0',
                ext_73: '1' | '2' | '0',
                ext_74: '1' | '2' | '0',
                ext_75: '1' | '2' | '0',
                ext_76: '1' | '2' | '0',
                ext_77: '1' | '2' | '0',
                ext_78: '1' | '2' | '0',
                ext_79: '1' | '2' | '0',
                ext_80: '1' | '2' | '0',
            },
            /**
             * Answer type
             */
            form_type?: {
                ext_01?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_02?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_03?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_04?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_05?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_06?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_07?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_08?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_09?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_10?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_11?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_12?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_13?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_14?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_15?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_16?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_17?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_18?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_19?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_20?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_21?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_22?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_23?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_24?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_25?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_26?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_27?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_28?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_29?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_30?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_31?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_32?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_33?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_34?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_35?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_36?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_37?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_38?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_39?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_40?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_41?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_42?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_43?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_44?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_45?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_46?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_47?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_48?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_49?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_50?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_51?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_52?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_53?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_54?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_55?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_56?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_57?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_58?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_59?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_60?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_61?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_62?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_63?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_64?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_65?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_66?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_67?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_68?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_69?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_70?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_71?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_72?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_73?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_74?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_75?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_76?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_77?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_78?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_79?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
                ext_80?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
            },
            /**
             * Form help message
             */
            form_help_msg?: {
                ext_03?: string,
                ext_01?: string,
                ext_02?: string,
                ext_04?: string,
                ext_05?: string,
                ext_06?: string,
                ext_07?: string,
                ext_08?: string,
                ext_09?: string,
                ext_10?: string,
                ext_11?: string,
                ext_12?: string,
                ext_13?: string,
                ext_14?: string,
                ext_15?: string,
                ext_16?: string,
                ext_17?: string,
                ext_18?: string,
                ext_19?: string,
                ext_20?: string,
                ext_21?: string,
                ext_22?: string,
                ext_23?: string,
                ext_24?: string,
                ext_25?: string,
                ext_26?: string,
                ext_27?: string,
                ext_28?: string,
                ext_29?: string,
                ext_30?: string,
                ext_31?: string,
                ext_32?: string,
                ext_33?: string,
                ext_34?: string,
                ext_35?: string,
                ext_36?: string,
                ext_37?: string,
                ext_38?: string,
                ext_39?: string,
                ext_40?: string,
                ext_41?: string,
                ext_42?: string,
                ext_43?: string,
                ext_44?: string,
                ext_45?: string,
                ext_46?: string,
                ext_47?: string,
                ext_48?: string,
                ext_49?: string,
                ext_50?: string,
                ext_51?: string,
                ext_52?: string,
                ext_53?: string,
                ext_54?: string,
                ext_55?: string,
                ext_56?: string,
                ext_57?: string,
                ext_58?: string,
                ext_59?: string,
                ext_60?: string,
                ext_61?: string,
                ext_62?: string,
                ext_63?: string,
                ext_64?: string,
                ext_65?: string,
                ext_66?: string,
                ext_67?: string,
                ext_68?: string,
                ext_69?: string,
                ext_70?: string,
                ext_71?: string,
                ext_72?: string,
                ext_73?: string,
                ext_74?: string,
                ext_75?: string,
                ext_76?: string,
                ext_77?: string,
                ext_78?: string,
                ext_79?: string,
                ext_80?: string,
            },
            /**
             * Answer type
             */
            form_type_option?: {
                ext_03?: any,
                ext_04?: any,
                ext_05?: any,
                ext_06?: any,
                ext_07?: any,
                ext_09?: any,
                ext_01?: any,
                ext_02?: any,
                ext_08?: any,
                ext_10?: any,
                ext_11?: any,
                ext_12?: any,
                ext_13?: any,
                ext_14?: any,
                ext_15?: any,
                ext_16?: any,
                ext_17?: any,
                ext_18?: any,
                ext_19?: any,
                ext_20?: any,
                ext_21?: any,
                ext_22?: any,
                ext_23?: any,
                ext_24?: any,
                ext_25?: any,
                ext_26?: any,
                ext_27?: any,
                ext_28?: any,
                ext_29?: any,
                ext_30?: any,
                ext_31?: any,
                ext_32?: any,
                ext_33?: any,
                ext_34?: any,
                ext_35?: any,
                ext_36?: any,
                ext_37?: any,
                ext_38?: any,
                ext_39?: any,
                ext_40?: any,
                ext_41?: any,
                ext_42?: any,
                ext_43?: any,
                ext_44?: any,
                ext_45?: any,
                ext_46?: any,
                ext_47?: any,
                ext_48?: any,
                ext_49?: any,
                ext_50?: any,
                ext_51?: any,
                ext_52?: any,
                ext_53?: any,
                ext_54?: any,
                ext_55?: any,
                ext_56?: any,
                ext_57?: any,
                ext_58?: any,
                ext_59?: any,
                ext_60?: any,
                ext_61?: any,
                ext_62?: any,
                ext_63?: any,
                ext_64?: any,
                ext_65?: any,
                ext_66?: any,
                ext_67?: any,
                ext_68?: any,
                ext_69?: any,
                ext_70?: any,
                ext_71?: any,
                ext_72?: any,
                ext_73?: any,
                ext_74?: any,
                ext_75?: any,
                ext_76?: any,
                ext_77?: any,
                ext_78?: any,
                ext_79?: any,
                ext_80?: any,
            },
            /**
             * Initial value
             */
            form_type_option_default?: {
                ext_03?: Array<string>,
                ext_04?: Array<string>,
                ext_05?: Array<string>,
                ext_01?: Array<string>,
                ext_02?: Array<string>,
                ext_06?: Array<string>,
                ext_07?: Array<string>,
                ext_08?: Array<string>,
                ext_09?: Array<string>,
                ext_10?: Array<string>,
                ext_11?: Array<string>,
                ext_12?: Array<string>,
                ext_13?: Array<string>,
                ext_14?: Array<string>,
                ext_15?: Array<string>,
                ext_16?: Array<string>,
                ext_17?: Array<string>,
                ext_18?: Array<string>,
                ext_19?: Array<string>,
                ext_20?: Array<string>,
                ext_21?: Array<string>,
                ext_22?: Array<string>,
                ext_23?: Array<string>,
                ext_24?: Array<string>,
                ext_25?: Array<string>,
                ext_26?: Array<string>,
                ext_27?: Array<string>,
                ext_28?: Array<string>,
                ext_29?: Array<string>,
                ext_30?: Array<string>,
                ext_31?: Array<string>,
                ext_32?: Array<string>,
                ext_33?: Array<string>,
                ext_34?: Array<string>,
                ext_35?: Array<string>,
                ext_36?: Array<string>,
                ext_37?: Array<string>,
                ext_38?: Array<string>,
                ext_39?: Array<string>,
                ext_40?: Array<string>,
                ext_41?: Array<string>,
                ext_42?: Array<string>,
                ext_43?: Array<string>,
                ext_44?: Array<string>,
                ext_45?: Array<string>,
                ext_46?: Array<string>,
                ext_47?: Array<string>,
                ext_48?: Array<string>,
                ext_49?: Array<string>,
                ext_50?: Array<string>,
                ext_51?: Array<string>,
                ext_52?: Array<string>,
                ext_53?: Array<string>,
                ext_54?: Array<string>,
                ext_55?: Array<string>,
                ext_56?: Array<string>,
                ext_57?: Array<string>,
                ext_58?: Array<string>,
                ext_59?: Array<string>,
                ext_60?: Array<string>,
                ext_61?: Array<string>,
                ext_62?: Array<string>,
                ext_63?: Array<string>,
                ext_64?: Array<string>,
                ext_65?: Array<string>,
                ext_66?: Array<string>,
                ext_67?: Array<string>,
                ext_68?: Array<string>,
                ext_69?: Array<string>,
                ext_70?: Array<string>,
                ext_71?: Array<string>,
                ext_72?: Array<string>,
                ext_73?: Array<string>,
                ext_74?: Array<string>,
                ext_75?: Array<string>,
                ext_76?: Array<string>,
                ext_77?: Array<string>,
                ext_78?: Array<string>,
                ext_79?: Array<string>,
                ext_80?: Array<string>,
            },
            /**
             * Options settings
             */
            limit_item?: {
                ext_01: any,
                ext_02: any,
                ext_03?: any,
                ext_04?: any,
                ext_05?: any,
                ext_06?: any,
                ext_07?: any,
                ext_08?: any,
                ext_09?: any,
                ext_10?: any,
                ext_11?: any,
                ext_12?: any,
                ext_13?: any,
                ext_14?: any,
                ext_15?: any,
                ext_16?: any,
                ext_17?: any,
                ext_18?: any,
                ext_19?: any,
                ext_20?: any,
                ext_21?: any,
                ext_22?: any,
                ext_23?: any,
                ext_24?: any,
                ext_25?: any,
                ext_26?: any,
                ext_27?: any,
                ext_28?: any,
                ext_29?: any,
                ext_30?: any,
                ext_31?: any,
                ext_32?: any,
                ext_33?: any,
                ext_34?: any,
                ext_35?: any,
                ext_36?: any,
                ext_37?: any,
                ext_38?: any,
                ext_39?: any,
                ext_40?: any,
                ext_41?: any,
                ext_42?: any,
                ext_43?: any,
                ext_44?: any,
                ext_45?: any,
                ext_46?: any,
                ext_47?: any,
                ext_48?: any,
                ext_49?: any,
                ext_50?: any,
                ext_51?: any,
                ext_52?: any,
                ext_53?: any,
                ext_54?: any,
                ext_55?: any,
                ext_56?: any,
                ext_57?: any,
                ext_58?: any,
                ext_59?: any,
                ext_60?: any,
                ext_61?: any,
                ext_62?: any,
                ext_63?: any,
                ext_64?: any,
                ext_65?: any,
                ext_66?: any,
                ext_67?: any,
                ext_68?: any,
                ext_69?: any,
                ext_70?: any,
                ext_71?: any,
                ext_72?: any,
                ext_73?: any,
                ext_74?: any,
                ext_75?: any,
                ext_76?: any,
                ext_77?: any,
                ext_78?: any,
                ext_79?: any,
                ext_80?: any,
            },
            /**
             * Sort Order(Descending)
             */
            order?: {
                name: number,
                email: number,
                message: number,
                ext_01: number,
                ext_02: number,
                ext_03: number,
                ext_04: number,
                ext_05: number,
                ext_06: number,
                ext_07: number,
                ext_08: number,
                ext_09: number,
                ext_10: number,
                ext_11: number,
                ext_12: number,
                ext_13: number,
                ext_14: number,
                ext_15: number,
                ext_16: number,
                ext_17: number,
                ext_18: number,
                ext_19: number,
                ext_20: number,
                ext_21: number,
                ext_22: number,
                ext_23: number,
                ext_24: number,
                ext_25: number,
                ext_26: number,
                ext_27: number,
                ext_28: number,
                ext_29: number,
                ext_30: number,
                ext_31: number,
                ext_32: number,
                ext_33: number,
                ext_34: number,
                ext_35: number,
                ext_36: number,
                ext_37: number,
                ext_38: number,
                ext_39: number,
                ext_40: number,
                ext_41: number,
                ext_42: number,
                ext_43: number,
                ext_44: number,
                ext_45: number,
                ext_46: number,
                ext_47: number,
                ext_48: number,
                ext_49: number,
                ext_50: number,
                ext_51: number,
                ext_52: number,
                ext_53: number,
                ext_54: number,
                ext_55: number,
                ext_56: number,
                ext_57: number,
                ext_58: number,
                ext_59: number,
                ext_60: number,
                ext_61: number,
                ext_62: number,
                ext_63: number,
                ext_64: number,
                ext_65: number,
                ext_66: number,
                ext_67: number,
                ext_68: number,
                ext_69: number,
                ext_70: number,
                ext_71: number,
                ext_72: number,
                ext_73: number,
                ext_74: number,
                ext_75: number,
                ext_76: number,
                ext_77: number,
                ext_78: number,
                ext_79: number,
                ext_80: number,
            },
            /**
             * Sort Order(Descending)
             */
            attribute?: {
                ext_03?: any,
                ext_01?: any,
                ext_02?: any,
                ext_04?: any,
                ext_05?: any,
                ext_06?: any,
                ext_07?: any,
                ext_08?: any,
                ext_09?: any,
                ext_10?: any,
                ext_11?: any,
                ext_12?: any,
                ext_13?: any,
                ext_14?: any,
                ext_15?: any,
                ext_16?: any,
                ext_17?: any,
                ext_18?: any,
                ext_19?: any,
                ext_20?: any,
                ext_21?: any,
                ext_22?: any,
                ext_23?: any,
                ext_24?: any,
                ext_25?: any,
                ext_26?: any,
                ext_27?: any,
                ext_28?: any,
                ext_29?: any,
                ext_30?: any,
                ext_31?: any,
                ext_32?: any,
                ext_33?: any,
                ext_34?: any,
                ext_35?: any,
                ext_36?: any,
                ext_37?: any,
                ext_38?: any,
                ext_39?: any,
                ext_40?: any,
                ext_41?: any,
                ext_42?: any,
                ext_43?: any,
                ext_44?: any,
                ext_45?: any,
                ext_46?: any,
                ext_47?: any,
                ext_48?: any,
                ext_49?: any,
                ext_50?: any,
                ext_51?: any,
                ext_52?: any,
                ext_53?: any,
                ext_54?: any,
                ext_55?: any,
                ext_56?: any,
                ext_57?: any,
                ext_58?: any,
                ext_59?: any,
                ext_60?: any,
                ext_61?: any,
                ext_62?: any,
                ext_63?: any,
                ext_64?: any,
                ext_65?: any,
                ext_66?: any,
                ext_67?: any,
                ext_68?: any,
                ext_69?: any,
                ext_70?: any,
                ext_71?: any,
                ext_72?: any,
                ext_73?: any,
                ext_74?: any,
                ext_75?: any,
                ext_76?: any,
                ext_77?: any,
                ext_78?: any,
                ext_79?: any,
                ext_80?: any,
            },
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
            path: `/rcms-api/1/inquiry/forms/update/${inquiryId}`,
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
     * ### **InquiryMessage::send (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **id** `7`
     *
     * @returns any
     * @throws ApiError
     */
    public static async postInquiriesService4({
        requestBody,
        outputFormat,
        lang,
        charset,
    }: {
        requestBody: {
            /**
             * Name
             */
            name: string,
            /**
             * E-mail
             */
            from_mail: string,
            /**
             * Message
             */
            body: string,
            /**
             * RequiredText
             */
            ext_01: string,
            /**
             * LongText
             */
            ext_02?: string,
            /**
             * Radio
             * * 1 => radio1
             * * 2 => radio2
             * * 3 => radio3
             * * 4 => radio4
             */
            ext_03: ({
                key?: '1' | '2' | '3' | '4',
                label?: 'radio1' | 'radio2' | 'radio3' | 'radio4',
            } | '1' | '2' | '3' | '4'),
            /**
             * RequiredSelect
             * * 1 => select1
             * * 2 => select2
             * * 3 => select3
             */
            ext_04: ({
                key?: '1' | '2' | '3',
                label?: 'select1' | 'select2' | 'select3',
            } | '1' | '2' | '3'),
            /**
             * Checkbox
             * * 1 => check1
             * * 2 => check2
             * * 3 => check3
             * * 4 => check4
             */
            ext_05: Array<({
                key?: '1' | '2' | '3' | '4',
                label?: 'check1' | 'check2' | 'check3' | 'check4',
            } | '1' | '2' | '3' | '4')>,
            /**
             * Date
             */
            ext_06?: (string | {
                'y'?: number,
                'm'?: number,
                'd'?: number,
                'h'?: number,
                mm?: number,
            }),
            ext_07?: any,
            /**
             * Tdfk
             */
            ext_08?: {
                tdfk_cd?: '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '20' | '21' | '22' | '23' | '24' | '25' | '26' | '27' | '28' | '29' | '30' | '31' | '32' | '33' | '34' | '35' | '36' | '37' | '38' | '39' | '40' | '41' | '42' | '43' | '44' | '45' | '46' | '47' | '99',
                tdfk_nm?: '北海道' | '青森県' | '岩手県' | '宮城県' | '秋田県' | '山形県' | '福島県' | '茨城県' | '栃木県' | '群馬県' | '埼玉県' | '千葉県' | '東京都' | '神奈川県' | '新潟県' | '富山県' | '石川県' | '福井県' | '山梨県' | '長野県' | '岐阜県' | '静岡県' | '愛知県' | '三重県' | '滋賀県' | '京都府' | '大阪府' | '兵庫県' | '奈良県' | '和歌山県' | '鳥取県' | '島根県' | '岡山県' | '広島県' | '山口県' | '徳島県' | '香川県' | '愛媛県' | '高知県' | '福岡県' | '佐賀県' | '長崎県' | '熊本県' | '大分県' | '宮崎県' | '鹿児島県' | '沖縄県' | '海外',
            },
            ext_09?: {
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
             * Matrix
             */
            ext_10?: any,
            /**
             * ext_11
             */
            ext_11?: string,
            /**
             * ext_12
             */
            ext_12?: string,
            /**
             * ext_13
             */
            ext_13?: string,
            /**
             * ext_14
             */
            ext_14?: string,
            /**
             * ext_15
             */
            ext_15?: string,
            /**
             * ext_16
             */
            ext_16?: string,
            /**
             * ext_17
             */
            ext_17?: string,
            /**
             * ext_18
             */
            ext_18?: string,
            /**
             * ext_19
             */
            ext_19?: string,
            /**
             * ext_20
             */
            ext_20?: string,
            /**
             * ext_21
             */
            ext_21?: string,
            /**
             * ext_22
             */
            ext_22?: string,
            /**
             * ext_23
             */
            ext_23?: string,
            /**
             * ext_24
             */
            ext_24?: string,
            /**
             * ext_25
             */
            ext_25?: string,
            /**
             * ext_26
             */
            ext_26?: string,
            /**
             * ext_27
             */
            ext_27?: string,
            /**
             * ext_28
             */
            ext_28?: string,
            /**
             * ext_29
             */
            ext_29?: string,
            /**
             * ext_30
             */
            ext_30?: string,
            /**
             * ext_31
             */
            ext_31?: string,
            /**
             * ext_32
             */
            ext_32?: string,
            /**
             * ext_33
             */
            ext_33?: string,
            /**
             * ext_34
             */
            ext_34?: string,
            /**
             * ext_35
             */
            ext_35?: string,
            /**
             * ext_36
             */
            ext_36?: string,
            /**
             * ext_37
             */
            ext_37?: string,
            /**
             * ext_38
             */
            ext_38?: string,
            /**
             * ext_39
             */
            ext_39?: string,
            /**
             * ext_40
             */
            ext_40?: string,
            /**
             * ext_41
             */
            ext_41?: string,
            /**
             * ext_42
             */
            ext_42?: string,
            /**
             * ext_43
             */
            ext_43?: string,
            /**
             * ext_44
             */
            ext_44?: string,
            /**
             * ext_45
             */
            ext_45?: string,
            /**
             * ext_46
             */
            ext_46?: string,
            /**
             * ext_47
             */
            ext_47?: string,
            /**
             * ext_48
             */
            ext_48?: string,
            /**
             * ext_49
             */
            ext_49?: string,
            /**
             * ext_50
             */
            ext_50?: string,
            /**
             * ext_51
             */
            ext_51?: string,
            /**
             * ext_52
             */
            ext_52?: string,
            /**
             * ext_53
             */
            ext_53?: string,
            /**
             * ext_54
             */
            ext_54?: string,
            /**
             * ext_55
             */
            ext_55?: string,
            /**
             * ext_56
             */
            ext_56?: string,
            /**
             * ext_57
             */
            ext_57?: string,
            /**
             * ext_58
             */
            ext_58?: string,
            /**
             * ext_59
             */
            ext_59?: string,
            /**
             * ext_60
             */
            ext_60?: string,
            /**
             * ext_61
             */
            ext_61?: string,
            /**
             * ext_62
             */
            ext_62?: string,
            /**
             * ext_63
             */
            ext_63?: string,
            /**
             * ext_64
             */
            ext_64?: string,
            /**
             * ext_65
             */
            ext_65?: string,
            /**
             * ext_66
             */
            ext_66?: string,
            /**
             * ext_67
             */
            ext_67?: string,
            /**
             * ext_68
             */
            ext_68?: string,
            /**
             * ext_69
             */
            ext_69?: string,
            /**
             * ext_70
             */
            ext_70?: string,
            /**
             * ext_71
             */
            ext_71?: string,
            /**
             * ext_72
             */
            ext_72?: string,
            /**
             * ext_73
             */
            ext_73?: string,
            /**
             * ext_74
             */
            ext_74?: string,
            /**
             * ext_75
             */
            ext_75?: string,
            /**
             * ext_76
             */
            ext_76?: string,
            /**
             * ext_77
             */
            ext_77?: string,
            /**
             * ext_78
             */
            ext_78?: string,
            /**
             * ext_79
             */
            ext_79?: string,
            /**
             * ext_80
             */
            ext_80?: string,
            /**
             * Validate
             */
            validate_only: boolean,
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
            path: `/rcms-api/1/form/7/send`,
            query: {
                '_output_format': outputFormat,
                '_lang': lang,
                '_charset': charset,
            },
            body: requestBody,
        });
        return result.body;
    }

}