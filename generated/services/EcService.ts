/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { request as __request } from '../core/request';

export class EcService {

    /**
     *
     * ### **ECProduct::list (v1)**
     *
     *
     * @returns any
     * @throws ApiError
     */
    public static async getEcService({
        outputFormat,
        lang,
        charset,
        cnt,
        pageId,
        filter,
        topicsId,
        topicsGroupId,
        productId,
        myOrderFlg,
        ymdSortChange,
        topicsKeyword,
        topicsKeywordCond,
        ecExtOptionsSearch,
        searchEcExtCol,
        order,
    }: {
        /** Format (json|xml|csv|zip) **/
        outputFormat?: string,
        /** Language **/
        lang?: string,
        /** Charset **/
        charset?: string,
        /** Number of products per page **/
        cnt?: number,
        /** Page ID **/
        pageId?: number,
        /** Filter query **/
        filter?: string,
        /** Topic ID **/
        topicsId?: number,
        /** Topics group ID **/
        topicsGroupId?: number,
        /** Product ID to be displayed, all of the items of interest if there is no setting **/
        productId?: Array<number>,
        myOrderFlg?: number,
        ymdSortChange?: string,
        /** Keyword **/
        topicsKeyword?: string,
        /** Change the way of narrowing down by keyword (Default: AND) **/
        topicsKeywordCond?: string,
        /** narrowed by the value of the extend item option.  yes:1 no:0 **/
        ecExtOptionsSearch?: number,
        searchEcExtCol?: Array<string>,
        /** Set the sort order. Available param {0} **/
        order?: Array<string>,
    }): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/rcms-api/1/ec/products`,
            query: {
                '_output_format': outputFormat,
                '_lang': lang,
                '_charset': charset,
                'cnt': cnt,
                'pageID': pageId,
                'filter': filter,
                'topics_id': topicsId,
                'topics_group_id': topicsGroupId,
                'product_id[]': productId,
                'my_order_flg': myOrderFlg,
                'ymd_sort_change': ymdSortChange,
                'topics_keyword': topicsKeyword,
                'topics_keyword_cond': topicsKeywordCond,
                'ec_ext_options_search': ecExtOptionsSearch,
                'search_ec_ext_col[]': searchEcExtCol,
                'order[]': order,
            },
        });
        return result.body;
    }

    /**
     *
     * ### **ECProduct::details (v1)**
     *
     *
     * @returns any
     * @throws ApiError
     */
    public static async getEcService1({
        productId,
        outputFormat,
        lang,
        charset,
    }: {
        productId: number,
        /** Format (json|xml|csv|zip) **/
        outputFormat?: string,
        /** Language **/
        lang?: string,
        /** Charset **/
        charset?: string,
    }): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/rcms-api/1/ec/products/${productId}`,
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
     * ### **ECCart::details (v1)**
     *
     *
     * @returns any
     * @throws ApiError
     */
    public static async getEcService2({
        ecCartId,
        outputFormat,
        lang,
        charset,
        zipCode,
        tdfkCd,
    }: {
        ecCartId: number,
        /** Format (json|xml|csv|zip) **/
        outputFormat?: string,
        /** Language **/
        lang?: string,
        /** Charset **/
        charset?: string,
        zipCode?: string,
        tdfkCd?: string,
    }): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/rcms-api/1/ec/cart/${ecCartId}`,
            query: {
                '_output_format': outputFormat,
                '_lang': lang,
                '_charset': charset,
                'zip_code': zipCode,
                'tdfk_cd': tdfkCd,
            },
        });
        return result.body;
    }

    /**
     *
     * ### **ECCart::add (v1)**
     *
     *
     * @returns any
     * @throws ApiError
     */
    public static async postEcService({
        requestBody,
        outputFormat,
        lang,
        charset,
    }: {
        requestBody: {
            /**
             * カートID
             */
            ec_cart_id?: number,
            /**
             * Product
             */
            item?: {
                /**
                 * Product ID
                 */
                product_id: number,
                /**
                 * Quantity
                 */
                quantity: number,
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
            path: `/rcms-api/1/ec/cart/add`,
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
     * ### **ECCart::update (v1)**
     *
     *
     * @returns any
     * @throws ApiError
     */
    public static async postEcService1({
        requestBody,
        outputFormat,
        lang,
        charset,
    }: {
        requestBody: {
            /**
             * カートID
             */
            ec_cart_id?: number,
            /**
             * Product
             */
            item?: {
                /**
                 * Product ID
                 */
                product_id: number,
                /**
                 * Quantity
                 */
                quantity: number,
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
            path: `/rcms-api/1/ec/cart/update`,
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
     * ### **ECOrder::total (v1)**
     *
     *
     * @returns any
     * @throws ApiError
     */
    public static async postEcService2({
        requestBody,
        outputFormat,
        lang,
        charset,
    }: {
        requestBody: {
            /**
             * カートID
             */
            ec_cart_id?: number,
            order_products: any,
            /**
             * Product ID
             */
            product_id?: number,
            /**
             * Quantity
             */
            quantity?: number,
            /**
             * 支払方法ID
             */
            ec_payment_id?: number,
            /**
             * Use discount price
             */
            discount?: {
                /**
                 * Use point
                 */
                point?: number,
                /**
                 * Coupon Code
                 */
                serial_code?: string,
            },
            /**
             * 配送先住所
             */
            shipping_address?: ('default' | {
                /**
                 * Family name
                 */
                name1?: string,
                /**
                 * Given name
                 */
                name2?: string,
                zip_code?: string,
                /**
                 * * 01 => 北海道
                 * * 02 => 青森県
                 * * 03 => 岩手県
                 * * 04 => 宮城県
                 * * 05 => 秋田県
                 * * 06 => 山形県
                 * * 07 => 福島県
                 * * 08 => 茨城県
                 * * 09 => 栃木県
                 * * 10 => 群馬県
                 * * 11 => 埼玉県
                 * * 12 => 千葉県
                 * * 13 => 東京都
                 * * 14 => 神奈川県
                 * * 15 => 新潟県
                 * * 16 => 富山県
                 * * 17 => 石川県
                 * * 18 => 福井県
                 * * 19 => 山梨県
                 * * 20 => 長野県
                 * * 21 => 岐阜県
                 * * 22 => 静岡県
                 * * 23 => 愛知県
                 * * 24 => 三重県
                 * * 25 => 滋賀県
                 * * 26 => 京都府
                 * * 27 => 大阪府
                 * * 28 => 兵庫県
                 * * 29 => 奈良県
                 * * 30 => 和歌山県
                 * * 31 => 鳥取県
                 * * 32 => 島根県
                 * * 33 => 岡山県
                 * * 34 => 広島県
                 * * 35 => 山口県
                 * * 36 => 徳島県
                 * * 37 => 香川県
                 * * 38 => 愛媛県
                 * * 39 => 高知県
                 * * 40 => 福岡県
                 * * 41 => 佐賀県
                 * * 42 => 長崎県
                 * * 43 => 熊本県
                 * * 44 => 大分県
                 * * 45 => 宮崎県
                 * * 46 => 鹿児島県
                 * * 47 => 沖縄県
                 * * 99 => 海外
                 */
                tdfk_cd?: '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '20' | '21' | '22' | '23' | '24' | '25' | '26' | '27' | '28' | '29' | '30' | '31' | '32' | '33' | '34' | '35' | '36' | '37' | '38' | '39' | '40' | '41' | '42' | '43' | '44' | '45' | '46' | '47' | '99',
                /**
                 * Address1
                 */
                address1?: string,
                /**
                 * Address2
                 */
                address2?: string,
                /**
                 * Address3
                 */
                address3?: string,
                /**
                 * TEL
                 */
                tel?: string,
            }),
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
            path: `/rcms-api/1/ec/order/total`,
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
     * ### **ECPayment::list (v1)**
     *
     *
     * @returns any
     * @throws ApiError
     */
    public static async getEcService3({
        outputFormat,
        lang,
        charset,
        ecCartId,
        serialCode,
        usePoint,
    }: {
        /** Format (json|xml|csv|zip) **/
        outputFormat?: string,
        /** Language **/
        lang?: string,
        /** Charset **/
        charset?: string,
        ecCartId?: number,
        /** Coupon Code **/
        serialCode?: string,
        usePoint?: number,
    }): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/rcms-api/1/ec/payments`,
            query: {
                '_output_format': outputFormat,
                '_lang': lang,
                '_charset': charset,
                'ec_cart_id': ecCartId,
                'serial_code': serialCode,
                'use_point': usePoint,
            },
        });
        return result.body;
    }

    /**
     *
     * ### **ECPayment::details (v1)**
     *
     *
     * @returns any
     * @throws ApiError
     */
    public static async getEcService4({
        ecPaymentId,
        outputFormat,
        lang,
        charset,
    }: {
        ecPaymentId: number,
        /** Format (json|xml|csv|zip) **/
        outputFormat?: string,
        /** Language **/
        lang?: string,
        /** Charset **/
        charset?: string,
    }): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/rcms-api/1/ec/payments/${ecPaymentId}`,
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
     * ### **ECOrder::purchase (v1)**
     *
     *
     * @returns any
     * @throws ApiError
     */
    public static async postEcService3({
        requestBody,
        outputFormat,
        lang,
        charset,
    }: {
        requestBody: {
            /**
             * カートID
             */
            ec_cart_id?: number,
            order_products: any,
            /**
             * Product ID
             */
            product_id?: number,
            /**
             * Quantity
             */
            quantity?: number,
            /**
             * 支払方法ID
             */
            ec_payment_id: number,
            /**
             * Use discount price
             */
            discount?: {
                /**
                 * Use point
                 */
                point?: number,
                /**
                 * Coupon Code
                 */
                serial_code?: string,
            },
            /**
             * 配送先住所
             */
            shipping_address?: ('default' | {
                /**
                 * Family name
                 */
                name1?: string,
                /**
                 * Given name
                 */
                name2?: string,
                zip_code?: string,
                /**
                 * * 01 => 北海道
                 * * 02 => 青森県
                 * * 03 => 岩手県
                 * * 04 => 宮城県
                 * * 05 => 秋田県
                 * * 06 => 山形県
                 * * 07 => 福島県
                 * * 08 => 茨城県
                 * * 09 => 栃木県
                 * * 10 => 群馬県
                 * * 11 => 埼玉県
                 * * 12 => 千葉県
                 * * 13 => 東京都
                 * * 14 => 神奈川県
                 * * 15 => 新潟県
                 * * 16 => 富山県
                 * * 17 => 石川県
                 * * 18 => 福井県
                 * * 19 => 山梨県
                 * * 20 => 長野県
                 * * 21 => 岐阜県
                 * * 22 => 静岡県
                 * * 23 => 愛知県
                 * * 24 => 三重県
                 * * 25 => 滋賀県
                 * * 26 => 京都府
                 * * 27 => 大阪府
                 * * 28 => 兵庫県
                 * * 29 => 奈良県
                 * * 30 => 和歌山県
                 * * 31 => 鳥取県
                 * * 32 => 島根県
                 * * 33 => 岡山県
                 * * 34 => 広島県
                 * * 35 => 山口県
                 * * 36 => 徳島県
                 * * 37 => 香川県
                 * * 38 => 愛媛県
                 * * 39 => 高知県
                 * * 40 => 福岡県
                 * * 41 => 佐賀県
                 * * 42 => 長崎県
                 * * 43 => 熊本県
                 * * 44 => 大分県
                 * * 45 => 宮崎県
                 * * 46 => 鹿児島県
                 * * 47 => 沖縄県
                 * * 99 => 海外
                 */
                tdfk_cd?: '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '20' | '21' | '22' | '23' | '24' | '25' | '26' | '27' | '28' | '29' | '30' | '31' | '32' | '33' | '34' | '35' | '36' | '37' | '38' | '39' | '40' | '41' | '42' | '43' | '44' | '45' | '46' | '47' | '99',
                /**
                 * Address1
                 */
                address1?: string,
                /**
                 * Address2
                 */
                address2?: string,
                /**
                 * Address3
                 */
                address3?: string,
                /**
                 * TEL
                 */
                tel?: string,
            }),
            /**
             * Orderer information
             */
            orderer?: {
                /**
                 * Family name
                 */
                name1?: string,
                /**
                 * Given name
                 */
                name2?: string,
                zip_code?: string,
                /**
                 * * 01 => 北海道
                 * * 02 => 青森県
                 * * 03 => 岩手県
                 * * 04 => 宮城県
                 * * 05 => 秋田県
                 * * 06 => 山形県
                 * * 07 => 福島県
                 * * 08 => 茨城県
                 * * 09 => 栃木県
                 * * 10 => 群馬県
                 * * 11 => 埼玉県
                 * * 12 => 千葉県
                 * * 13 => 東京都
                 * * 14 => 神奈川県
                 * * 15 => 新潟県
                 * * 16 => 富山県
                 * * 17 => 石川県
                 * * 18 => 福井県
                 * * 19 => 山梨県
                 * * 20 => 長野県
                 * * 21 => 岐阜県
                 * * 22 => 静岡県
                 * * 23 => 愛知県
                 * * 24 => 三重県
                 * * 25 => 滋賀県
                 * * 26 => 京都府
                 * * 27 => 大阪府
                 * * 28 => 兵庫県
                 * * 29 => 奈良県
                 * * 30 => 和歌山県
                 * * 31 => 鳥取県
                 * * 32 => 島根県
                 * * 33 => 岡山県
                 * * 34 => 広島県
                 * * 35 => 山口県
                 * * 36 => 徳島県
                 * * 37 => 香川県
                 * * 38 => 愛媛県
                 * * 39 => 高知県
                 * * 40 => 福岡県
                 * * 41 => 佐賀県
                 * * 42 => 長崎県
                 * * 43 => 熊本県
                 * * 44 => 大分県
                 * * 45 => 宮崎県
                 * * 46 => 鹿児島県
                 * * 47 => 沖縄県
                 * * 99 => 海外
                 */
                tdfk_cd?: '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '20' | '21' | '22' | '23' | '24' | '25' | '26' | '27' | '28' | '29' | '30' | '31' | '32' | '33' | '34' | '35' | '36' | '37' | '38' | '39' | '40' | '41' | '42' | '43' | '44' | '45' | '46' | '47' | '99',
                /**
                 * Address1
                 */
                address1?: string,
                /**
                 * Address2
                 */
                address2?: string,
                /**
                 * Address3
                 */
                address3?: string,
                /**
                 * TEL
                 */
                tel?: string,
                /**
                 * [Only for guest] E-mail
                 */
                email?: string,
            },
            /**
             * Token
             */
            card_token?: string,
            order_note?: string,
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
            path: `/rcms-api/1/ec/purchase`,
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