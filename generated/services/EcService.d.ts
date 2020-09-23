import { Result } from '../core/Result';
export declare class EcService {
    /**
     *
     * ### **ECProduct::list (v1)**
     *
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @param cnt Number of products per page
     * @param pageId Page ID
     * @param topicsId Topic ID
     * @param topicsGroupId Topics group ID
     * @param productId Product ID to be displayed, all of the items of interest if there is no setting
     * @param ymdSortChange
     * @param topicsKeyword Keyword
     * @param topicsKeywordCond Change the way of narrowing down by keyword (Default: AND)
     * @param ecExtOptionsSearch narrowed by the value of the extend item option.  yes:1 no:0
     * @param searchEcExtCol
     * @param order Set the sort order. Available param {0}
     * @result any
     * @throws ApiError
     */
    static getEcServiceRcmsApi1EcProducts(requestParam: EcService.getEcServiceRcmsApi1EcProductsRequest): Promise<Result<any>>;
    /**
     *
     * ### **ECProduct::details (v1)**
     *
     *
     * @param productId
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static getEcServiceRcmsApi1EcProductsProductId(requestParam: EcService.getEcServiceRcmsApi1EcProductsProductIdRequest): Promise<Result<any>>;
    /**
     *
     * ### **ECCart::details (v1)**
     *
     *
     * @param ecCartId
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static getEcServiceRcmsApi1EcCartEcCartId(requestParam: EcService.getEcServiceRcmsApi1EcCartEcCartIdRequest): Promise<Result<any>>;
    /**
     *
     * ### **ECCart::add (v1)**
     *
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postEcServiceRcmsApi1EcCartAdd(requestParam: EcService.postEcServiceRcmsApi1EcCartAddRequest): Promise<Result<any>>;
    /**
     *
     * ### **ECCart::update (v1)**
     *
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postEcServiceRcmsApi1EcCartUpdate(requestParam: EcService.postEcServiceRcmsApi1EcCartUpdateRequest): Promise<Result<any>>;
    /**
     *
     * ### **ECOrder::total (v1)**
     *
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postEcServiceRcmsApi1EcOrderTotal(requestParam: EcService.postEcServiceRcmsApi1EcOrderTotalRequest): Promise<Result<any>>;
    /**
     *
     * ### **ECPayment::list (v1)**
     *
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @param ecCartId
     * @param serialCode Serial Code
     * @param usePoint
     * @result any
     * @throws ApiError
     */
    static getEcServiceRcmsApi1EcPayments(requestParam: EcService.getEcServiceRcmsApi1EcPaymentsRequest): Promise<Result<any>>;
    /**
     *
     * ### **ECPayment::details (v1)**
     *
     *
     * @param ecPaymentId
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static getEcServiceRcmsApi1EcPaymentsEcPaymentId(requestParam: EcService.getEcServiceRcmsApi1EcPaymentsEcPaymentIdRequest): Promise<Result<any>>;
    /**
     *
     * ### **ECOrder::purchase (v1)**
     *
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postEcServiceRcmsApi1EcPurchase(requestParam: EcService.postEcServiceRcmsApi1EcPurchaseRequest): Promise<Result<any>>;
}
export declare namespace EcService {
    interface getEcServiceRcmsApi1EcProductsRequest {
        outputFormat?: string;
        lang?: string;
        charset?: string;
        cnt?: number;
        pageId?: number;
        topicsId?: number;
        topicsGroupId?: number;
        productId?: Array<number>;
        ymdSortChange?: string;
        topicsKeyword?: string;
        topicsKeywordCond?: string;
        ecExtOptionsSearch?: number;
        searchEcExtCol?: Array<string>;
        order?: Array<string>;
    }
    type getEcServiceRcmsApi1EcProductsResponse = any;
    interface getEcServiceRcmsApi1EcProductsProductIdRequest {
        productId: number;
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type getEcServiceRcmsApi1EcProductsProductIdResponse = any;
    interface getEcServiceRcmsApi1EcCartEcCartIdRequest {
        ecCartId: number;
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type getEcServiceRcmsApi1EcCartEcCartIdResponse = any;
    interface postEcServiceRcmsApi1EcCartAddRequest {
        requestBody: {
            /**
             * カートID
             */
            ec_cart_id?: number;
            /**
             * Product
             */
            item?: {
                /**
                 * Product ID
                 */
                product_id: number;
                /**
                 * Quantity
                 */
                quantity: number;
            };
        };
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type postEcServiceRcmsApi1EcCartAddResponse = any;
    interface postEcServiceRcmsApi1EcCartUpdateRequest {
        requestBody: {
            /**
             * カートID
             */
            ec_cart_id?: number;
            /**
             * Product
             */
            item?: {
                /**
                 * Product ID
                 */
                product_id: number;
                /**
                 * Quantity
                 */
                quantity: number;
            };
        };
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type postEcServiceRcmsApi1EcCartUpdateResponse = any;
    interface postEcServiceRcmsApi1EcOrderTotalRequest {
        requestBody: {
            /**
             * カートID
             */
            ec_cart_id?: number;
            /**
             * Product ID
             */
            product_id?: number;
            /**
             * Quantity
             */
            quantity?: number;
            /**
             * 支払方法ID
             */
            ec_payment_id?: number;
            /**
             * Use discount price
             */
            discount?: {
                /**
                 * Use point
                 */
                point?: number;
                /**
                 * Serial Code
                 */
                serial_code?: string;
            };
            /**
             * 配送先住所
             */
            shipping_address?: 'default' | {
                name1: string;
                name2: string;
                zip_code: string;
                tdfk_cd: string;
                address1: string;
                address2: string;
                address3: string;
                tel: string;
            };
        };
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type postEcServiceRcmsApi1EcOrderTotalResponse = any;
    interface getEcServiceRcmsApi1EcPaymentsRequest {
        outputFormat?: string;
        lang?: string;
        charset?: string;
        ecCartId?: number;
        serialCode?: string;
        usePoint?: number;
    }
    type getEcServiceRcmsApi1EcPaymentsResponse = any;
    interface getEcServiceRcmsApi1EcPaymentsEcPaymentIdRequest {
        ecPaymentId: number;
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type getEcServiceRcmsApi1EcPaymentsEcPaymentIdResponse = any;
    interface postEcServiceRcmsApi1EcPurchaseRequest {
        requestBody: {
            /**
             * カートID
             */
            ec_cart_id?: number;
            /**
             * Product ID
             */
            product_id?: number;
            /**
             * Quantity
             */
            quantity?: number;
            /**
             * 支払方法ID
             */
            ec_payment_id: number;
            /**
             * Use discount price
             */
            discount?: {
                /**
                 * Use point
                 */
                point?: number;
                /**
                 * Serial Code
                 */
                serial_code?: string;
            };
            /**
             * 配送先住所
             */
            shipping_address?: 'default' | {
                name1: string;
                name2: string;
                zip_code: string;
                tdfk_cd: string;
                address1: string;
                address2: string;
                address3: string;
                tel: string;
            };
            /**
             * Orderer information
             */
            orderer?: {
                /**
                 * Family name
                 */
                name1?: string;
                /**
                 * Given name
                 */
                name2?: string;
                zip_code?: string;
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
                tdfk_cd?: ('01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '20' | '21' | '22' | '23' | '24' | '25' | '26' | '27' | '28' | '29' | '30' | '31' | '32' | '33' | '34' | '35' | '36' | '37' | '38' | '39' | '40' | '41' | '42' | '43' | '44' | '45' | '46' | '47' | '99');
                /**
                 * Address1
                 */
                address1?: string;
                /**
                 * Address2
                 */
                address2?: string;
                /**
                 * Address3
                 */
                address3?: string;
                /**
                 * TEL
                 */
                tel?: string;
                /**
                 * [Only for guest] E-mail
                 */
                email?: string;
            };
            /**
             * Token
             */
            card_token?: string;
            /**
             * Validate
             */
            validate_only?: boolean;
        };
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type postEcServiceRcmsApi1EcPurchaseResponse = any;
}
export declare const infos: ({
    path: string;
    httpMethod: string;
    class: typeof EcService;
    className: string;
    method: typeof EcService.getEcServiceRcmsApi1EcProducts;
    methodName: string;
    auth: null;
    description: string;
} | {
    path: string;
    httpMethod: string;
    class: typeof EcService;
    className: string;
    method: typeof EcService.getEcServiceRcmsApi1EcProductsProductId;
    methodName: string;
    auth: null;
    description: string;
} | {
    path: string;
    httpMethod: string;
    class: typeof EcService;
    className: string;
    method: typeof EcService.getEcServiceRcmsApi1EcCartEcCartId;
    methodName: string;
    auth: null;
    description: string;
} | {
    path: string;
    httpMethod: string;
    class: typeof EcService;
    className: string;
    method: typeof EcService.postEcServiceRcmsApi1EcCartAdd;
    methodName: string;
    auth: null;
    description: string;
} | {
    path: string;
    httpMethod: string;
    class: typeof EcService;
    className: string;
    method: typeof EcService.postEcServiceRcmsApi1EcOrderTotal;
    methodName: string;
    auth: null;
    description: string;
} | {
    path: string;
    httpMethod: string;
    class: typeof EcService;
    className: string;
    method: typeof EcService.getEcServiceRcmsApi1EcPayments;
    methodName: string;
    auth: null;
    description: string;
} | {
    path: string;
    httpMethod: string;
    class: typeof EcService;
    className: string;
    method: typeof EcService.getEcServiceRcmsApi1EcPaymentsEcPaymentId;
    methodName: string;
    auth: null;
    description: string;
})[];
//# sourceMappingURL=EcService.d.ts.map