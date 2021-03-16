import { Result } from '../core/Result';
export declare class ContentService {
    /**
     *
     * ### **Topics::details (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **topics_group_id** `1`
     *
     * @param topicsId
     * @param outputFormat Format (json|xml|csv|zip)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static getContentServiceRcmsApi1Topics1TopicsId(requestParam: ContentService.getContentServiceRcmsApi1Topics1TopicsIdRequest): Promise<Result<any>>;
    /**
     *
     * ### **Topics::list (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **topics_group_id** `1`
     *
     * @param outputFormat Format (json|xml|csv|zip)
     * @param lang Language
     * @param charset Charset
     * @param cnt Number of topics per page
     * @param pageId Page ID
     * @param filter Filter query
     * @param customSearchId search contdition
     * @param topicsKeyword Keyword
     * @param topicsKeywordCond Change the way of narrowing down by keyword (Default: AND)
     * @param contentsType The ID from the displayed category. All data will be displayed when this is not set.
     * @param contentsTypeCond Change the way of narrowing down by category ID (Default: OR)
     * @param date Date
     * @param usingSeason Use season (Yes: 1 | No: 0)
     * @param season Season
     * @param extColumnCond ext_column condition type (Default:OR)<br>
     * To specify an ext_col number set: 'ext_column_{no}_cond'
     * @param excludeTopicsId IDs of the excluded topics
     * @param tagCategoryId ID of the tag category to be displayed. (Default: All)
     * @param tagSearch narrowed by the value of the tag id.  yes:1 no:0
     * @param tagId Tag IDs that you would like to display
     * @param tagCond Change the way to narrow down tags (Default: OR)
     * @param excludeTagId Tag IDs that you would like to hide
     * @param myFavoriteList
     * @param myCommentList
     * @param myOwnList
     * @param order Set the sort order. Available param {0}
     * @param orderById
     * @param id IDs of the displayed topics
     * @param type List type as (array or object)
     * @param groupBy Grouping List by (category)
     * @param groupByCategoryId Category id list (using with groupBy category)
     * @param showEmptyCategories Show empty category info (using with groupBy category)
     * @param orderByCategoryCount Order by category contents count (using with groupBy category)
     * @result any
     * @throws ApiError
     */
    static getContentServiceRcmsApi1Topics1(requestParam: ContentService.getContentServiceRcmsApi1Topics1Request): Promise<Result<any>>;
    /**
     *
     * ### **Topics::insert (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **topics_group_id** `1`
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv|zip)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postContentServiceRcmsApi1Topics1Insert(requestParam: ContentService.postContentServiceRcmsApi1Topics1InsertRequest): Promise<Result<any>>;
    /**
     *
     * ### **Topics::update (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **topics_group_id** `1`
     *
     * @param topicsId
     * @param requestBody
     * @param outputFormat Format (json|xml|csv|zip)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postContentServiceRcmsApi1Topics1UpdateTopicsId(requestParam: ContentService.postContentServiceRcmsApi1Topics1UpdateTopicsIdRequest): Promise<Result<any>>;
    /**
     *
     * ### **Topics::delete (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **topics_group_id** `1`
     *
     * @param topicsId
     * @param outputFormat Format (json|xml|csv|zip)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postContentServiceRcmsApi1Topics1DeleteTopicsId(requestParam: ContentService.postContentServiceRcmsApi1Topics1DeleteTopicsIdRequest): Promise<Result<any>>;
    /**
     *
     * ### **Topics::list (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **topics_group_id** `2`
     *
     * @param outputFormat Format (json|xml|csv|zip)
     * @param lang Language
     * @param charset Charset
     * @param cnt Number of topics per page
     * @param pageId Page ID
     * @param filter Filter query
     * @param customSearchId search contdition
     * @param topicsKeyword Keyword
     * @param topicsKeywordCond Change the way of narrowing down by keyword (Default: AND)
     * @param contentsType The ID from the displayed category. All data will be displayed when this is not set.
     * @param contentsTypeCond Change the way of narrowing down by category ID (Default: OR)
     * @param date Date
     * @param usingSeason Use season (Yes: 1 | No: 0)
     * @param season Season
     * @param extColumnCond ext_column condition type (Default:OR)<br>
     * To specify an ext_col number set: 'ext_column_{no}_cond'
     * @param excludeTopicsId IDs of the excluded topics
     * @param tagCategoryId ID of the tag category to be displayed. (Default: All)
     * @param tagSearch narrowed by the value of the tag id.  yes:1 no:0
     * @param tagId Tag IDs that you would like to display
     * @param tagCond Change the way to narrow down tags (Default: OR)
     * @param excludeTagId Tag IDs that you would like to hide
     * @param myFavoriteList
     * @param myCommentList
     * @param myOwnList
     * @param order Set the sort order. Available param {0}
     * @param orderById
     * @param id IDs of the displayed topics
     * @param type List type as (array or object)
     * @param groupBy Grouping List by (category)
     * @param groupByCategoryId Category id list (using with groupBy category)
     * @param showEmptyCategories Show empty category info (using with groupBy category)
     * @param orderByCategoryCount Order by category contents count (using with groupBy category)
     * @result any
     * @throws ApiError
     */
    static getContentServiceRcmsApi1TopicsMultiple(requestParam: ContentService.getContentServiceRcmsApi1TopicsMultipleRequest): Promise<Result<any>>;
    /**
     *
     * ### **Topics::details (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **topics_group_id** `2`
     *
     * @param topicsId
     * @param outputFormat Format (json|xml|csv|zip)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static getContentServiceRcmsApi1TopicsMultipleTopicsId(requestParam: ContentService.getContentServiceRcmsApi1TopicsMultipleTopicsIdRequest): Promise<Result<any>>;
    /**
     *
     * ### **Topics::insert (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **topics_group_id** `2`
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv|zip)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postContentServiceRcmsApi1TopicsMultipleInsert(requestParam: ContentService.postContentServiceRcmsApi1TopicsMultipleInsertRequest): Promise<Result<any>>;
    /**
     *
     * ### **Topics::update (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **topics_group_id** `2`
     *
     * @param topicsId
     * @param requestBody
     * @param outputFormat Format (json|xml|csv|zip)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postContentServiceRcmsApi1TopicsMultipleUpdateTopicsId(requestParam: ContentService.postContentServiceRcmsApi1TopicsMultipleUpdateTopicsIdRequest): Promise<Result<any>>;
    /**
     *
     * ### **Topics::list (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **topics_group_id** `3`
     *
     * @param outputFormat Format (json|xml|csv|zip)
     * @param lang Language
     * @param charset Charset
     * @param cnt Number of topics per page
     * @param pageId Page ID
     * @param filter Filter query
     * @param customSearchId search contdition
     * @param topicsKeyword Keyword
     * @param topicsKeywordCond Change the way of narrowing down by keyword (Default: AND)
     * @param contentsType The ID from the displayed category. All data will be displayed when this is not set.
     * @param contentsTypeCond Change the way of narrowing down by category ID (Default: OR)
     * @param date Date
     * @param usingSeason Use season (Yes: 1 | No: 0)
     * @param season Season
     * @param extColumnCond ext_column condition type (Default:OR)<br>
     * To specify an ext_col number set: 'ext_column_{no}_cond'
     * @param excludeTopicsId IDs of the excluded topics
     * @param tagCategoryId ID of the tag category to be displayed. (Default: All)
     * @param tagSearch narrowed by the value of the tag id.  yes:1 no:0
     * @param tagId Tag IDs that you would like to display
     * @param tagCond Change the way to narrow down tags (Default: OR)
     * @param excludeTagId Tag IDs that you would like to hide
     * @param myFavoriteList
     * @param myCommentList
     * @param myOwnList
     * @param order Set the sort order. Available param {0}
     * @param orderById
     * @param id IDs of the displayed topics
     * @param type List type as (array or object)
     * @param groupBy Grouping List by (category)
     * @param groupByCategoryId Category id list (using with groupBy category)
     * @param showEmptyCategories Show empty category info (using with groupBy category)
     * @param orderByCategoryCount Order by category contents count (using with groupBy category)
     * @result any
     * @throws ApiError
     */
    static getContentServiceRcmsApi1TopicsStatic(requestParam: ContentService.getContentServiceRcmsApi1TopicsStaticRequest): Promise<Result<any>>;
    /**
     *
     * ### **Topics::details (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **topics_group_id** `3`
     *
     * @param topicsId
     * @param outputFormat Format (json|xml|csv|zip)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static getContentServiceRcmsApi1TopicsStaticTopicsId(requestParam: ContentService.getContentServiceRcmsApi1TopicsStaticTopicsIdRequest): Promise<Result<any>>;
    /**
     *
     * ### **Topics::delete (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **topics_group_id** `2`
     *
     * @param topicsId
     * @param outputFormat Format (json|xml|csv|zip)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postContentServiceRcmsApi1TopicsMultipleDeleteTopicsId(requestParam: ContentService.postContentServiceRcmsApi1TopicsMultipleDeleteTopicsIdRequest): Promise<Result<any>>;
    /**
     *
     * ### **Topics::list (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **topics_group_id** `1`
     *
     * @param outputFormat Format (json|xml|csv|zip)
     * @param lang Language
     * @param charset Charset
     * @param cnt Number of topics per page
     * @param pageId Page ID
     * @param filter Filter query
     * @param customSearchId search contdition
     * @param topicsKeyword Keyword
     * @param topicsKeywordCond Change the way of narrowing down by keyword (Default: AND)
     * @param contentsType The ID from the displayed category. All data will be displayed when this is not set.
     * @param contentsTypeCond Change the way of narrowing down by category ID (Default: OR)
     * @param date Date
     * @param usingSeason Use season (Yes: 1 | No: 0)
     * @param season Season
     * @param extColumnCond ext_column condition type (Default:OR)<br>
     * To specify an ext_col number set: 'ext_column_{no}_cond'
     * @param excludeTopicsId IDs of the excluded topics
     * @param tagCategoryId ID of the tag category to be displayed. (Default: All)
     * @param tagSearch narrowed by the value of the tag id.  yes:1 no:0
     * @param tagId Tag IDs that you would like to display
     * @param tagCond Change the way to narrow down tags (Default: OR)
     * @param excludeTagId Tag IDs that you would like to hide
     * @param myFavoriteList
     * @param myCommentList
     * @param myOwnList
     * @param order Set the sort order. Available param {0}
     * @param orderById
     * @param id IDs of the displayed topics
     * @param type List type as (array or object)
     * @param groupBy Grouping List by (category)
     * @param groupByCategoryId Category id list (using with groupBy category)
     * @param showEmptyCategories Show empty category info (using with groupBy category)
     * @param orderByCategoryCount Order by category contents count (using with groupBy category)
     * @result any
     * @throws ApiError
     */
    static getContentServiceRcmsApi1TopicsPostprocess(requestParam: ContentService.getContentServiceRcmsApi1TopicsPostprocessRequest): Promise<Result<any>>;
    /**
     *
     * ### **TopicsGroup::list (v1)**
     *
     *
     * @param outputFormat Format (json|xml|csv|zip)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static getContentServiceRcmsApi1TopicsGroups(requestParam: ContentService.getContentServiceRcmsApi1TopicsGroupsRequest): Promise<Result<any>>;
    /**
     *
     * ### **TopicsCategory::list (v1)**
     *
     *
     * @param outputFormat Format (json|xml|csv|zip)
     * @param lang Language
     * @param charset Charset
     * @param cnt Number of topics per page
     * @param topicsGroupId Topics group ID
     * @result any
     * @throws ApiError
     */
    static getContentServiceRcmsApi1TopicsCategories(requestParam: ContentService.getContentServiceRcmsApi1TopicsCategoriesRequest): Promise<Result<any>>;
    /**
     *
     * ### **Topics::preview (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **topics_group_id** `1`
     *
     * @param previewToken Preview token
     * @param outputFormat Format (json|xml|csv|zip)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static getContentServiceRcmsApi1TopicsPreview(requestParam: ContentService.getContentServiceRcmsApi1TopicsPreviewRequest): Promise<Result<any>>;
}
export declare namespace ContentService {
    interface getContentServiceRcmsApi1Topics1TopicsIdRequest {
        topicsId: string;
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type getContentServiceRcmsApi1Topics1TopicsIdResponse = any;
    interface getContentServiceRcmsApi1Topics1Request {
        outputFormat?: string;
        lang?: string;
        charset?: string;
        cnt?: number;
        pageId?: number;
        filter?: string;
        customSearchId?: string;
        topicsKeyword?: string;
        topicsKeywordCond?: string;
        contentsType?: Array<number>;
        contentsTypeCond?: string;
        date?: string;
        usingSeason?: string;
        season?: number;
        extColumnCond?: string;
        excludeTopicsId?: string;
        tagCategoryId?: number;
        tagSearch?: string;
        tagId?: Array<number>;
        tagCond?: string;
        excludeTagId?: string;
        myFavoriteList?: number;
        myCommentList?: number;
        myOwnList?: string;
        order?: string;
        orderById?: string;
        id?: Array<number>;
        type?: string;
        groupBy?: string;
        groupByCategoryId?: Array<number>;
        showEmptyCategories?: boolean;
        orderByCategoryCount?: boolean;
    }
    type getContentServiceRcmsApi1Topics1Response = any;
    interface postContentServiceRcmsApi1Topics1InsertRequest {
        requestBody: {
            /**
             * Topic title
             */
            subject: string;
            /**
             * Slug
             */
            slug?: string;
            /**
             * Category ID
             * * 1 => CategoryForSingle1
             * * 4 => CategoryForSingle2
             */
            contents_type?: (1 | 4);
            /**
             * Published / Not published
             */
            open_type?: ('open' | 'close' | 'default');
            /**
             * Display all topics to logged in members, regardless ther public/hidden status
             */
            topics_flg?: (0 | 1);
            /**
             * Contents
             */
            contents?: string;
            /**
             * display up
             */
            regular_flg?: number;
            /**
             * Date
             */
            ymd?: string;
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
            /**
             * Text
             */
            ext_col_01?: string;
            /**
             * TextArea
             */
            ext_col_02?: string;
            /**
             * Select
             * * 1 => Option1
             * * 2 => Option2
             * * 3 => Option3
             */
            ext_col_03?: {
                key: string;
                label: string;
            } | '' | '1' | '2' | '3';
            /**
             * Checkbox
             * * 1 => Option1
             * * 2 => Option2
             * * 3 => Option3
             */
            ext_col_04?: Array<{
                key: string;
                label: string;
            } | '1' | '2' | '3'>;
            /**
             * Date
             */
            ext_col_07?: string | string | {
                ymd: string;
            };
            /**
             * DateTime
             */
            ext_col_08?: string | string | {
                ymd: string;
                h: number;
                i: number;
            };
            /**
             * Tdfk
             */
            ext_col_05?: {
                tdfk_cd?: ('01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '20' | '21' | '22' | '23' | '24' | '25' | '26' | '27' | '28' | '29' | '30' | '31' | '32' | '33' | '34' | '35' | '36' | '37' | '38' | '39' | '40' | '41' | '42' | '43' | '44' | '45' | '46' | '47' | '99');
                tdfk_nm?: ('北海道' | '青森県' | '岩手県' | '宮城県' | '秋田県' | '山形県' | '福島県' | '茨城県' | '栃木県' | '群馬県' | '埼玉県' | '千葉県' | '東京都' | '神奈川県' | '新潟県' | '富山県' | '石川県' | '福井県' | '山梨県' | '長野県' | '岐阜県' | '静岡県' | '愛知県' | '三重県' | '滋賀県' | '京都府' | '大阪府' | '兵庫県' | '奈良県' | '和歌山県' | '鳥取県' | '島根県' | '岡山県' | '広島県' | '山口県' | '徳島県' | '香川県' | '愛媛県' | '高知県' | '福岡県' | '佐賀県' | '長崎県' | '熊本県' | '大分県' | '宮崎県' | '鹿児島県' | '沖縄県' | '海外');
            };
            /**
             * TdfkAndCity
             */
            ext_col_15?: {
                tdfk_cd?: ('01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '20' | '21' | '22' | '23' | '24' | '25' | '26' | '27' | '28' | '29' | '30' | '31' | '32' | '33' | '34' | '35' | '36' | '37' | '38' | '39' | '40' | '41' | '42' | '43' | '44' | '45' | '46' | '47' | '99');
                tdfk_nm?: ('北海道' | '青森県' | '岩手県' | '宮城県' | '秋田県' | '山形県' | '福島県' | '茨城県' | '栃木県' | '群馬県' | '埼玉県' | '千葉県' | '東京都' | '神奈川県' | '新潟県' | '富山県' | '石川県' | '福井県' | '山梨県' | '長野県' | '岐阜県' | '静岡県' | '愛知県' | '三重県' | '滋賀県' | '京都府' | '大阪府' | '兵庫県' | '奈良県' | '和歌山県' | '鳥取県' | '島根県' | '岡山県' | '広島県' | '山口県' | '徳島県' | '香川県' | '愛媛県' | '高知県' | '福岡県' | '佐賀県' | '長崎県' | '熊本県' | '大分県' | '宮崎県' | '鹿児島県' | '沖縄県' | '海外');
                sub_area_cd?: ('01100' | '01101' | '01102' | '01103' | '01104' | '01105' | '01106' | '01107' | '01108' | '01109' | '01110' | '01202' | '01203' | '01204' | '01205' | '01206' | '01207' | '01208' | '01209' | '01210' | '01211' | '01212' | '01213' | '01214' | '01215' | '01216' | '01217' | '01218' | '01219' | '01220' | '01221' | '01222' | '01223' | '01224' | '01225' | '01226' | '01227' | '01228' | '01229' | '01230' | '01231' | '01233' | '01234' | '01235' | '01236' | '01303' | '01304' | '01331' | '01332' | '01333' | '01334' | '01337' | '01343' | '01345' | '01346' | '01347' | '01361' | '01362' | '01363' | '01364' | '01367' | '01370' | '01371' | '01391' | '01392' | '01393' | '01394' | '01395' | '01396' | '01397' | '01398' | '01399' | '01400' | '01401' | '01402' | '01403' | '01404' | '01405' | '01406' | '01407' | '01408' | '01409' | '01423' | '01424' | '01425' | '01427' | '01428' | '01429' | '01430' | '01431' | '01432' | '01433' | '01434' | '01436' | '01437' | '01438' | '01452' | '01453' | '01454' | '01455' | '01456' | '01457' | '01458' | '01459' | '01460' | '01461' | '01462' | '01463' | '01464' | '01465' | '01468' | '01469' | '01470' | '01471' | '01472' | '01481' | '01482' | '01483' | '01484' | '01485' | '01486' | '01487' | '01511' | '01512' | '01513' | '01514' | '01516' | '01517' | '01518' | '01519' | '01520' | '01543' | '01544' | '01545' | '01546' | '01547' | '01549' | '01550' | '01552' | '01555' | '01559' | '01560' | '01561' | '01562' | '01563' | '01564' | '01571' | '01575' | '01578' | '01581' | '01584' | '01585' | '01586' | '01601' | '01602' | '01604' | '01607' | '01608' | '01609' | '01610' | '01631' | '01632' | '01633' | '01634' | '01635' | '01636' | '01637' | '01638' | '01639' | '01641' | '01642' | '01643' | '01644' | '01645' | '01646' | '01647' | '01648' | '01649' | '01661' | '01662' | '01663' | '01664' | '01665' | '01667' | '01668' | '01691' | '01692' | '01693' | '01694' | '02201' | '02202' | '02203' | '02204' | '02205' | '02206' | '02207' | '02208' | '02209' | '02210' | '02301' | '02303' | '02304' | '02307' | '02321' | '02323' | '02343' | '02361' | '02362' | '02367' | '02381' | '02384' | '02387' | '02401' | '02402' | '02405' | '02406' | '02408' | '02411' | '02412' | '02423' | '02424' | '02425' | '02426' | '02441' | '02442' | '02443' | '02445' | '02446' | '02450' | '03201' | '03202' | '03203' | '03205' | '03206' | '03207' | '03208' | '03209' | '03210' | '03211' | '03213' | '03214' | '03215' | '03216' | '03301' | '03302' | '03303' | '03321' | '03322' | '03366' | '03381' | '03402' | '03441' | '03461' | '03482' | '03483' | '03484' | '03485' | '03501' | '03503' | '03506' | '03507' | '03524' | '04100' | '04101' | '04102' | '04103' | '04104' | '04105' | '04202' | '04203' | '04205' | '04206' | '04207' | '04208' | '04209' | '04211' | '04212' | '04213' | '04214' | '04215' | '04216' | '04301' | '04302' | '04321' | '04322' | '04323' | '04324' | '04341' | '04361' | '04362' | '04401' | '04404' | '04406' | '04421' | '04422' | '04424' | '04444' | '04445' | '04501' | '04505' | '04581' | '04606' | '05201' | '05202' | '05203' | '05204' | '05206' | '05207' | '05209' | '05210' | '05211' | '05212' | '05213' | '05214' | '05215' | '05303' | '05327' | '05346' | '05348' | '05349' | '05361' | '05363' | '05366' | '05368' | '05434' | '05463' | '05464' | '06201' | '06202' | '06203' | '06204' | '06205' | '06206' | '06207' | '06208' | '06209' | '06210' | '06211' | '06212' | '06213' | '06301' | '06302' | '06321' | '06322' | '06323' | '06324' | '06341' | '06361' | '06362' | '06363' | '06364' | '06365' | '06366' | '06367' | '06381' | '06382' | '06401' | '06402' | '06403' | '06426' | '06428' | '06461' | '07201' | '07202' | '07203' | '07204' | '07205' | '07207' | '07208' | '07209' | '07210' | '07211' | '07212' | '07213' | '07214' | '07301' | '07303' | '07308' | '07322' | '07342' | '07344' | '07362' | '07364' | '07367' | '07368' | '07402' | '07405' | '07407' | '07408' | '07421' | '07422' | '07423' | '07444' | '07445' | '07446' | '07447' | '07461' | '07464' | '07465' | '07466' | '07481' | '07482' | '07483' | '07484' | '07501' | '07502' | '07503' | '07504' | '07505' | '07521' | '07522' | '07541' | '07542' | '07543' | '07544' | '07545' | '07546' | '07547' | '07548' | '07561' | '07564' | '08201' | '08202' | '08203' | '08204' | '08205' | '08207' | '08208' | '08210' | '08211' | '08212' | '08214' | '08215' | '08216' | '08217' | '08219' | '08220' | '08221' | '08222' | '08223' | '08224' | '08225' | '08226' | '08227' | '08228' | '08229' | '08230' | '08231' | '08232' | '08233' | '08234' | '08235' | '08236' | '08302' | '08309' | '08310' | '08341' | '08364' | '08442' | '08443' | '08447' | '08521' | '08542' | '08546' | '08564' | '09201' | '09202' | '09203' | '09204' | '09205' | '09206' | '09208' | '09209' | '09210' | '09211' | '09213' | '09214' | '09215' | '09216' | '09301' | '09342' | '09343' | '09344' | '09345' | '09361' | '09364' | '09384' | '09386' | '09407' | '09411' | '10201' | '10202' | '10203' | '10204' | '10205' | '10206' | '10207' | '10208' | '10209' | '10210' | '10211' | '10212' | '10344' | '10345' | '10366' | '10367' | '10382' | '10383' | '10384' | '10421' | '10424' | '10425' | '10426' | '10428' | '10429' | '10443' | '10444' | '10448' | '10449' | '10464' | '10521' | '10522' | '10523' | '10524' | '10525' | '11100' | '11101' | '11102' | '11103' | '11104' | '11105' | '11106' | '11107' | '11108' | '11109' | '11110' | '11201' | '11202' | '11203' | '11206' | '11207' | '11208' | '11209' | '11210' | '11211' | '11212' | '11214' | '11215' | '11216' | '11217' | '11218' | '11219' | '11221' | '11222' | '11223' | '11224' | '11225' | '11227' | '11228' | '11229' | '11230' | '11231' | '11232' | '11233' | '11234' | '11235' | '11237' | '11238' | '11239' | '11240' | '11241' | '11242' | '11243' | '11245' | '11246' | '11301' | '11324' | '11326' | '11327' | '11341' | '11342' | '11343' | '11346' | '11347' | '11348' | '11349' | '11361' | '11362' | '11363' | '11365' | '11369' | '11381' | '11383' | '11385' | '11408' | '11442' | '11464' | '11465' | '12100' | '12101' | '12102' | '12103' | '12104' | '12105' | '12106' | '12202' | '12203' | '12204' | '12205' | '12206' | '12207' | '12208' | '12210' | '12211' | '12212' | '12213' | '12215' | '12216' | '12217' | '12218' | '12219' | '12220' | '12221' | '12222' | '12223' | '12224' | '12225' | '12226' | '12227' | '12228' | '12229' | '12230' | '12231' | '12232' | '12233' | '12234' | '12235' | '12236' | '12237' | '12238' | '12239' | '12322' | '12329' | '12342' | '12347' | '12349' | '12403' | '12409' | '12410' | '12421' | '12422' | '12423' | '12424' | '12426' | '12427' | '12441' | '12443' | '12463' | '13101' | '13102' | '13103' | '13104' | '13105' | '13106' | '13107' | '13108' | '13109' | '13110' | '13111' | '13112' | '13113' | '13114' | '13115' | '13116' | '13117' | '13118' | '13119' | '13120' | '13121' | '13122' | '13123' | '13201' | '13202' | '13203' | '13204' | '13205' | '13206' | '13207' | '13208' | '13209' | '13210' | '13211' | '13212' | '13213' | '13214' | '13215' | '13218' | '13219' | '13220' | '13221' | '13222' | '13223' | '13224' | '13225' | '13227' | '13228' | '13229' | '13303' | '13305' | '13307' | '13308' | '13361' | '13362' | '13363' | '13364' | '13381' | '13382' | '13401' | '13402' | '13421' | '14100' | '14101' | '14102' | '14103' | '14104' | '14105' | '14106' | '14107' | '14108' | '14109' | '14110' | '14111' | '14112' | '14113' | '14114' | '14115' | '14116' | '14117' | '14118' | '14130' | '14131' | '14132' | '14133' | '14134' | '14135' | '14136' | '14137' | '14150' | '14151' | '14152' | '14153' | '14201' | '14203' | '14204' | '14205' | '14206' | '14207' | '14208' | '14210' | '14211' | '14212' | '14213' | '14214' | '14215' | '14216' | '14217' | '14218' | '14301' | '14321' | '14341' | '14342' | '14361' | '14362' | '14363' | '14364' | '14366' | '14382' | '14383' | '14384' | '14401' | '14402' | '15100' | '15101' | '15102' | '15103' | '15104' | '15105' | '15106' | '15107' | '15108' | '15202' | '15204' | '15205' | '15206' | '15208' | '15209' | '15210' | '15211' | '15212' | '15213' | '15216' | '15217' | '15218' | '15222' | '15223' | '15224' | '15225' | '15226' | '15227' | '15307' | '15342' | '15361' | '15385' | '15405' | '15461' | '15482' | '15504' | '15581' | '15586' | '16201' | '16202' | '16204' | '16205' | '16206' | '16207' | '16208' | '16209' | '16210' | '16211' | '16321' | '16322' | '16323' | '16342' | '16343' | '17201' | '17202' | '17203' | '17204' | '17205' | '17206' | '17207' | '17209' | '17210' | '17211' | '17212' | '17324' | '17361' | '17365' | '17384' | '17386' | '17407' | '17461' | '17463' | '18201' | '18202' | '18204' | '18205' | '18206' | '18207' | '18208' | '18209' | '18210' | '18322' | '18382' | '18404' | '18423' | '18442' | '18481' | '18483' | '18501' | '19201' | '19202' | '19204' | '19205' | '19206' | '19207' | '19208' | '19209' | '19210' | '19211' | '19212' | '19213' | '19214' | '19346' | '19364' | '19365' | '19366' | '19368' | '19384' | '19422' | '19423' | '19424' | '19425' | '19429' | '19430' | '19442' | '19443' | '20201' | '20202' | '20203' | '20204' | '20205' | '20206' | '20207' | '20208' | '20209' | '20210' | '20211' | '20212' | '20213' | '20214' | '20215' | '20217' | '20218' | '20219' | '20220' | '20303' | '20304' | '20305' | '20306' | '20307' | '20309' | '20321' | '20323' | '20324' | '20349' | '20350' | '20361' | '20362' | '20363' | '20382' | '20383' | '20384' | '20385' | '20386' | '20388' | '20402' | '20403' | '20404' | '20407' | '20409' | '20410' | '20411' | '20412' | '20413' | '20414' | '20415' | '20416' | '20417' | '20422' | '20423' | '20425' | '20429' | '20430' | '20432' | '20446' | '20448' | '20450' | '20451' | '20452' | '20481' | '20482' | '20485' | '20486' | '20521' | '20541' | '20543' | '20561' | '20562' | '20563' | '20583' | '20588' | '20590' | '20602' | '21201' | '21202' | '21203' | '21204' | '21205' | '21206' | '21207' | '21208' | '21209' | '21210' | '21211' | '21212' | '21213' | '21214' | '21215' | '21216' | '21217' | '21218' | '21219' | '21220' | '21221' | '21302' | '21303' | '21341' | '21361' | '21362' | '21381' | '21382' | '21383' | '21401' | '21403' | '21404' | '21421' | '21501' | '21502' | '21503' | '21504' | '21505' | '21506' | '21507' | '21521' | '21604' | '22100' | '22101' | '22102' | '22103' | '22130' | '22131' | '22132' | '22133' | '22134' | '22135' | '22136' | '22137' | '22203' | '22205' | '22206' | '22207' | '22208' | '22209' | '22210' | '22211' | '22212' | '22213' | '22214' | '22215' | '22216' | '22219' | '22220' | '22221' | '22222' | '22223' | '22224' | '22225' | '22226' | '22301' | '22302' | '22304' | '22305' | '22306' | '22325' | '22341' | '22342' | '22344' | '22424' | '22429' | '22461' | '23100' | '23101' | '23102' | '23103' | '23104' | '23105' | '23106' | '23107' | '23108' | '23109' | '23110' | '23111' | '23112' | '23113' | '23114' | '23115' | '23116' | '23201' | '23202' | '23203' | '23204' | '23205' | '23206' | '23207' | '23208' | '23209' | '23210' | '23211' | '23212' | '23213' | '23214' | '23215' | '23216' | '23217' | '23219' | '23220' | '23221' | '23222' | '23223' | '23224' | '23225' | '23226' | '23227' | '23228' | '23229' | '23230' | '23231' | '23232' | '23233' | '23234' | '23235' | '23236' | '23237' | '23238' | '23302' | '23342' | '23361' | '23362' | '23424' | '23425' | '23427' | '23441' | '23442' | '23445' | '23446' | '23447' | '23501' | '23561' | '23562' | '23563' | '24201' | '24202' | '24203' | '24204' | '24205' | '24207' | '24208' | '24209' | '24210' | '24211' | '24212' | '24214' | '24215' | '24216' | '24303' | '24324' | '24341' | '24343' | '24344' | '24441' | '24442' | '24443' | '24461' | '24470' | '24471' | '24472' | '24543' | '24561' | '24562' | '25201' | '25202' | '25203' | '25204' | '25206' | '25207' | '25208' | '25209' | '25210' | '25211' | '25212' | '25213' | '25214' | '25383' | '25384' | '25425' | '25441' | '25442' | '25443' | '26100' | '26101' | '26102' | '26103' | '26104' | '26105' | '26106' | '26107' | '26108' | '26109' | '26110' | '26111' | '26201' | '26202' | '26203' | '26204' | '26205' | '26206' | '26207' | '26208' | '26209' | '26210' | '26211' | '26212' | '26213' | '26214' | '26303' | '26322' | '26343' | '26344' | '26364' | '26365' | '26366' | '26367' | '26407' | '26463' | '26465' | '27100' | '27102' | '27103' | '27104' | '27106' | '27107' | '27108' | '27109' | '27111' | '27113' | '27114' | '27115' | '27116' | '27117' | '27118' | '27119' | '27120' | '27121' | '27122' | '27123' | '27124' | '27125' | '27126' | '27127' | '27128' | '27140' | '27141' | '27142' | '27143' | '27144' | '27145' | '27146' | '27147' | '27202' | '27203' | '27204' | '27205' | '27206' | '27207' | '27208' | '27209' | '27210' | '27211' | '27212' | '27213' | '27214' | '27215' | '27216' | '27217' | '27218' | '27219' | '27220' | '27221' | '27222' | '27223' | '27224' | '27225' | '27226' | '27227' | '27228' | '27229' | '27230' | '27231' | '27232' | '27301' | '27321' | '27322' | '27341' | '27361' | '27362' | '27366' | '27381' | '27382' | '27383' | '28100' | '28101' | '28102' | '28105' | '28106' | '28107' | '28108' | '28109' | '28110' | '28111' | '28201' | '28202' | '28203' | '28204' | '28205' | '28206' | '28207' | '28208' | '28209' | '28210' | '28212' | '28213' | '28214' | '28215' | '28216' | '28217' | '28218' | '28219' | '28220' | '28221' | '28222' | '28223' | '28224' | '28225' | '28226' | '28227' | '28228' | '28229' | '28301' | '28365' | '28381' | '28382' | '28442' | '28443' | '28446' | '28464' | '28481' | '28501' | '28585' | '28586' | '29201' | '29202' | '29203' | '29204' | '29205' | '29206' | '29207' | '29208' | '29209' | '29210' | '29211' | '29212' | '29322' | '29342' | '29343' | '29344' | '29345' | '29361' | '29362' | '29363' | '29385' | '29386' | '29401' | '29402' | '29424' | '29425' | '29426' | '29427' | '29441' | '29442' | '29443' | '29444' | '29446' | '29447' | '29449' | '29450' | '29451' | '29452' | '29453' | '30201' | '30202' | '30203' | '30204' | '30205' | '30206' | '30207' | '30208' | '30209' | '30304' | '30341' | '30343' | '30344' | '30361' | '30362' | '30366' | '30381' | '30382' | '30383' | '30390' | '30391' | '30392' | '30401' | '30404' | '30406' | '30421' | '30422' | '30424' | '30427' | '30428' | '31201' | '31202' | '31203' | '31204' | '31302' | '31325' | '31328' | '31329' | '31364' | '31370' | '31371' | '31372' | '31384' | '31386' | '31389' | '31390' | '31401' | '31402' | '31403' | '32201' | '32202' | '32203' | '32204' | '32205' | '32206' | '32207' | '32209' | '32343' | '32386' | '32441' | '32448' | '32449' | '32501' | '32505' | '32525' | '32526' | '32527' | '32528' | '33100' | '33101' | '33102' | '33103' | '33104' | '33202' | '33203' | '33204' | '33205' | '33207' | '33208' | '33209' | '33210' | '33211' | '33212' | '33213' | '33214' | '33215' | '33216' | '33346' | '33423' | '33445' | '33461' | '33586' | '33606' | '33622' | '33623' | '33643' | '33663' | '33666' | '33681' | '34100' | '34101' | '34102' | '34103' | '34104' | '34105' | '34106' | '34107' | '34108' | '34202' | '34203' | '34204' | '34205' | '34207' | '34208' | '34209' | '34210' | '34211' | '34212' | '34213' | '34214' | '34215' | '34302' | '34304' | '34307' | '34309' | '34368' | '34369' | '34431' | '34462' | '34545' | '35201' | '35202' | '35203' | '35204' | '35206' | '35207' | '35208' | '35210' | '35211' | '35212' | '35213' | '35215' | '35216' | '35305' | '35321' | '35341' | '35343' | '35344' | '35502' | '36201' | '36202' | '36203' | '36204' | '36205' | '36206' | '36207' | '36208' | '36301' | '36302' | '36321' | '36341' | '36342' | '36368' | '36383' | '36387' | '36388' | '36401' | '36402' | '36403' | '36404' | '36405' | '36468' | '36489' | '37201' | '37202' | '37203' | '37204' | '37205' | '37206' | '37207' | '37208' | '37322' | '37324' | '37341' | '37364' | '37386' | '37387' | '37403' | '37404' | '37406' | '38201' | '38202' | '38203' | '38204' | '38205' | '38206' | '38207' | '38210' | '38213' | '38214' | '38215' | '38356' | '38386' | '38401' | '38402' | '38422' | '38442' | '38484' | '38488' | '38506' | '39201' | '39202' | '39203' | '39204' | '39205' | '39206' | '39208' | '39209' | '39210' | '39211' | '39212' | '39301' | '39302' | '39303' | '39304' | '39305' | '39306' | '39307' | '39341' | '39344' | '39363' | '39364' | '39386' | '39387' | '39401' | '39402' | '39403' | '39405' | '39410' | '39411' | '39412' | '39424' | '39427' | '39428' | '40100' | '40101' | '40103' | '40105' | '40106' | '40107' | '40108' | '40109' | '40130' | '40131' | '40132' | '40133' | '40134' | '40135' | '40136' | '40137' | '40202' | '40203' | '40204' | '40205' | '40206' | '40207' | '40210' | '40211' | '40212' | '40213' | '40214' | '40215' | '40216' | '40217' | '40218' | '40219' | '40220' | '40221' | '40223' | '40224' | '40225' | '40226' | '40227' | '40228' | '40229' | '40230' | '40231' | '40341' | '40342' | '40343' | '40344' | '40345' | '40348' | '40349' | '40381' | '40382' | '40383' | '40384' | '40401' | '40402' | '40421' | '40447' | '40448' | '40503' | '40522' | '40544' | '40601' | '40602' | '40604' | '40605' | '40608' | '40609' | '40610' | '40621' | '40625' | '40642' | '40646' | '40647' | '41201' | '41202' | '41203' | '41204' | '41205' | '41206' | '41207' | '41208' | '41209' | '41210' | '41327' | '41341' | '41345' | '41346' | '41387' | '41401' | '41423' | '41424' | '41425' | '41441' | '42201' | '42202' | '42203' | '42204' | '42205' | '42207' | '42208' | '42209' | '42210' | '42211' | '42212' | '42213' | '42214' | '42307' | '42308' | '42321' | '42322' | '42323' | '42383' | '42391' | '42411' | '43100' | '43101' | '43102' | '43103' | '43104' | '43105' | '43202' | '43203' | '43204' | '43205' | '43206' | '43208' | '43210' | '43211' | '43212' | '43213' | '43214' | '43215' | '43216' | '43348' | '43364' | '43367' | '43368' | '43369' | '43403' | '43404' | '43423' | '43424' | '43425' | '43428' | '43432' | '43433' | '43441' | '43442' | '43443' | '43444' | '43447' | '43468' | '43482' | '43484' | '43501' | '43505' | '43506' | '43507' | '43510' | '43511' | '43512' | '43513' | '43514' | '43531' | '44201' | '44202' | '44203' | '44204' | '44205' | '44206' | '44207' | '44208' | '44209' | '44210' | '44211' | '44212' | '44213' | '44214' | '44322' | '44341' | '44461' | '44462' | '45201' | '45202' | '45203' | '45204' | '45205' | '45206' | '45207' | '45208' | '45209' | '45341' | '45361' | '45382' | '45383' | '45401' | '45402' | '45403' | '45404' | '45405' | '45406' | '45421' | '45429' | '45430' | '45431' | '45441' | '45442' | '45443' | '46201' | '46203' | '46204' | '46206' | '46208' | '46210' | '46213' | '46214' | '46215' | '46216' | '46217' | '46218' | '46219' | '46220' | '46221' | '46222' | '46223' | '46224' | '46225' | '46303' | '46304' | '46392' | '46404' | '46452' | '46468' | '46482' | '46490' | '46491' | '46492' | '46501' | '46502' | '46505' | '46523' | '46524' | '46525' | '46527' | '46529' | '46530' | '46531' | '46532' | '46533' | '46534' | '46535' | '47201' | '47205' | '47207' | '47208' | '47209' | '47210' | '47211' | '47212' | '47213' | '47214' | '47215' | '47301' | '47302' | '47303' | '47306' | '47308' | '47311' | '47313' | '47314' | '47315' | '47324' | '47325' | '47326' | '47327' | '47328' | '47329' | '47348' | '47350' | '47353' | '47354' | '47355' | '47356' | '47357' | '47358' | '47359' | '47360' | '47361' | '47362' | '47375' | '47381' | '47382');
                sub_area_nm?: ('札幌市' | '札幌市中央区' | '札幌市北区' | '札幌市東区' | '札幌市白石区' | '札幌市豊平区' | '札幌市南区' | '札幌市西区' | '札幌市厚別区' | '札幌市手稲区' | '札幌市清田区' | '函館市' | '小樽市' | '旭川市' | '室蘭市' | '釧路市' | '帯広市' | '北見市' | '夕張市' | '岩見沢市' | '網走市' | '留萌市' | '苫小牧市' | '稚内市' | '美唄市' | '芦別市' | '江別市' | '赤平市' | '紋別市' | '士別市' | '名寄市' | '三笠市' | '根室市' | '千歳市' | '滝川市' | '砂川市' | '歌志内市' | '深川市' | '富良野市' | '登別市' | '恵庭市' | '伊達市' | '北広島市' | '石狩市' | '北斗市' | '石狩郡当別町' | '石狩郡新篠津村' | '松前郡松前町' | '松前郡福島町' | '上磯郡知内町' | '上磯郡木古内町' | '亀田郡七飯町' | '茅部郡鹿部町' | '茅部郡森町' | '二海郡八雲町' | '山越郡長万部町' | '檜山郡江差町' | '檜山郡上ノ国町' | '檜山郡厚沢部町' | '爾志郡乙部町' | '奥尻郡奥尻町' | '瀬棚郡今金町' | '久遠郡せたな町' | '島牧郡島牧村' | '寿都郡寿都町' | '寿都郡黒松内町' | '磯谷郡蘭越町' | '虻田郡ニセコ町' | '虻田郡真狩村' | '虻田郡留寿都村' | '虻田郡喜茂別町' | '虻田郡京極町' | '虻田郡倶知安町' | '岩内郡共和町' | '岩内郡岩内町' | '古宇郡泊村' | '古宇郡神恵内村' | '積丹郡積丹町' | '古平郡古平町' | '余市郡仁木町' | '余市郡余市町' | '余市郡赤井川村' | '空知郡南幌町' | '空知郡奈井江町' | '空知郡上砂川町' | '夕張郡由仁町' | '夕張郡長沼町' | '夕張郡栗山町' | '樺戸郡月形町' | '樺戸郡浦臼町' | '樺戸郡新十津川町' | '雨竜郡妹背牛町' | '雨竜郡秩父別町' | '雨竜郡雨竜町' | '雨竜郡北竜町' | '雨竜郡沼田町' | '上川郡鷹栖町' | '上川郡東神楽町' | '上川郡当麻町' | '上川郡比布町' | '上川郡愛別町' | '上川郡上川町' | '上川郡東川町' | '上川郡美瑛町' | '空知郡上富良野町' | '空知郡中富良野町' | '空知郡南富良野町' | '勇払郡占冠村' | '上川郡和寒町' | '上川郡剣淵町' | '上川郡下川町' | '中川郡美深町' | '中川郡音威子府村' | '中川郡中川町' | '雨竜郡幌加内町' | '増毛郡増毛町' | '留萌郡小平町' | '苫前郡苫前町' | '苫前郡羽幌町' | '苫前郡初山別村' | '天塩郡遠別町' | '天塩郡天塩町' | '宗谷郡猿払村' | '枝幸郡浜頓別町' | '枝幸郡中頓別町' | '枝幸郡枝幸町' | '天塩郡豊富町' | '礼文郡礼文町' | '利尻郡利尻町' | '利尻郡利尻富士町' | '天塩郡幌延町' | '網走郡美幌町' | '網走郡津別町' | '斜里郡斜里町' | '斜里郡清里町' | '斜里郡小清水町' | '常呂郡訓子府町' | '常呂郡置戸町' | '常呂郡佐呂間町' | '紋別郡遠軽町' | '紋別郡湧別町' | '紋別郡滝上町' | '紋別郡興部町' | '紋別郡西興部村' | '紋別郡雄武町' | '網走郡大空町' | '虻田郡豊浦町' | '有珠郡壮瞥町' | '白老郡白老町' | '勇払郡厚真町' | '虻田郡洞爺湖町' | '勇払郡安平町' | '勇払郡むかわ町' | '沙流郡日高町' | '沙流郡平取町' | '新冠郡新冠町' | '浦河郡浦河町' | '様似郡様似町' | '幌泉郡えりも町' | '日高郡新ひだか町' | '河東郡音更町' | '河東郡士幌町' | '河東郡上士幌町' | '河東郡鹿追町' | '上川郡新得町' | '上川郡清水町' | '河西郡芽室町' | '河西郡中札内村' | '河西郡更別村' | '広尾郡大樹町' | '広尾郡広尾町' | '中川郡幕別町' | '中川郡池田町' | '中川郡豊頃町' | '中川郡本別町' | '足寄郡足寄町' | '足寄郡陸別町' | '十勝郡浦幌町' | '釧路郡釧路町' | '厚岸郡厚岸町' | '厚岸郡浜中町' | '川上郡標茶町' | '川上郡弟子屈町' | '阿寒郡鶴居村' | '白糠郡白糠町' | '野付郡別海町' | '標津郡中標津町' | '標津郡標津町' | '目梨郡羅臼町' | '青森市' | '弘前市' | '八戸市' | '黒石市' | '五所川原市' | '十和田市' | '三沢市' | 'むつ市' | 'つがる市' | '平川市' | '東津軽郡平内町' | '東津軽郡今別町' | '東津軽郡蓬田村' | '東津軽郡外ヶ浜町' | '西津軽郡鰺ヶ沢町' | '西津軽郡深浦町' | '中津軽郡西目屋村' | '南津軽郡藤崎町' | '南津軽郡大鰐町' | '南津軽郡田舎館村' | '北津軽郡板柳町' | '北津軽郡鶴田町' | '北津軽郡中泊町' | '上北郡野辺地町' | '上北郡七戸町' | '上北郡六戸町' | '上北郡横浜町' | '上北郡東北町' | '上北郡六ヶ所村' | '上北郡おいらせ町' | '下北郡大間町' | '下北郡東通村' | '下北郡風間浦村' | '下北郡佐井村' | '三戸郡三戸町' | '三戸郡五戸町' | '三戸郡田子町' | '三戸郡南部町' | '三戸郡階上町' | '三戸郡新郷村' | '盛岡市' | '宮古市' | '大船渡市' | '花巻市' | '北上市' | '久慈市' | '遠野市' | '一関市' | '陸前高田市' | '釜石市' | '二戸市' | '八幡平市' | '奥州市' | '滝沢市' | '岩手郡雫石町' | '岩手郡葛巻町' | '岩手郡岩手町' | '紫波郡紫波町' | '紫波郡矢巾町' | '和賀郡西和賀町' | '胆沢郡金ケ崎町' | '西磐井郡平泉町' | '気仙郡住田町' | '上閉伊郡大槌町' | '下閉伊郡山田町' | '下閉伊郡岩泉町' | '下閉伊郡田野畑村' | '下閉伊郡普代村' | '九戸郡軽米町' | '九戸郡野田村' | '九戸郡九戸村' | '九戸郡洋野町' | '二戸郡一戸町' | '仙台市' | '仙台市青葉区' | '仙台市宮城野区' | '仙台市若林区' | '仙台市太白区' | '仙台市泉区' | '石巻市' | '塩竈市' | '気仙沼市' | '白石市' | '名取市' | '角田市' | '多賀城市' | '岩沼市' | '登米市' | '栗原市' | '東松島市' | '大崎市' | '富谷市' | '刈田郡蔵王町' | '刈田郡七ヶ宿町' | '柴田郡大河原町' | '柴田郡村田町' | '柴田郡柴田町' | '柴田郡川崎町' | '伊具郡丸森町' | '亘理郡亘理町' | '亘理郡山元町' | '宮城郡松島町' | '宮城郡七ヶ浜町' | '宮城郡利府町' | '黒川郡大和町' | '黒川郡大郷町' | '黒川郡大衡村' | '加美郡色麻町' | '加美郡加美町' | '遠田郡涌谷町' | '遠田郡美里町' | '牡鹿郡女川町' | '本吉郡南三陸町' | '秋田市' | '能代市' | '横手市' | '大館市' | '男鹿市' | '湯沢市' | '鹿角市' | '由利本荘市' | '潟上市' | '大仙市' | '北秋田市' | 'にかほ市' | '仙北市' | '鹿角郡小坂町' | '北秋田郡上小阿仁村' | '山本郡藤里町' | '山本郡三種町' | '山本郡八峰町' | '南秋田郡五城目町' | '南秋田郡八郎潟町' | '南秋田郡井川町' | '南秋田郡大潟村' | '仙北郡美郷町' | '雄勝郡羽後町' | '雄勝郡東成瀬村' | '山形市' | '米沢市' | '鶴岡市' | '酒田市' | '新庄市' | '寒河江市' | '上山市' | '村山市' | '長井市' | '天童市' | '東根市' | '尾花沢市' | '南陽市' | '東村山郡山辺町' | '東村山郡中山町' | '西村山郡河北町' | '西村山郡西川町' | '西村山郡朝日町' | '西村山郡大江町' | '北村山郡大石田町' | '最上郡金山町' | '最上郡最上町' | '最上郡舟形町' | '最上郡真室川町' | '最上郡大蔵村' | '最上郡鮭川村' | '最上郡戸沢村' | '東置賜郡高畠町' | '東置賜郡川西町' | '西置賜郡小国町' | '西置賜郡白鷹町' | '西置賜郡飯豊町' | '東田川郡三川町' | '東田川郡庄内町' | '飽海郡遊佐町' | '福島市' | '会津若松市' | '郡山市' | 'いわき市' | '白河市' | '須賀川市' | '喜多方市' | '相馬市' | '二本松市' | '田村市' | '南相馬市' | '本宮市' | '伊達郡桑折町' | '伊達郡国見町' | '伊達郡川俣町' | '安達郡大玉村' | '岩瀬郡鏡石町' | '岩瀬郡天栄村' | '南会津郡下郷町' | '南会津郡檜枝岐村' | '南会津郡只見町' | '南会津郡南会津町' | '耶麻郡北塩原村' | '耶麻郡西会津町' | '耶麻郡磐梯町' | '耶麻郡猪苗代町' | '河沼郡会津坂下町' | '河沼郡湯川村' | '河沼郡柳津町' | '大沼郡三島町' | '大沼郡金山町' | '大沼郡昭和村' | '大沼郡会津美里町' | '西白河郡西郷村' | '西白河郡泉崎村' | '西白河郡中島村' | '西白河郡矢吹町' | '東白川郡棚倉町' | '東白川郡矢祭町' | '東白川郡塙町' | '東白川郡鮫川村' | '石川郡石川町' | '石川郡玉川村' | '石川郡平田村' | '石川郡浅川町' | '石川郡古殿町' | '田村郡三春町' | '田村郡小野町' | '双葉郡広野町' | '双葉郡楢葉町' | '双葉郡富岡町' | '双葉郡川内村' | '双葉郡大熊町' | '双葉郡双葉町' | '双葉郡浪江町' | '双葉郡葛尾村' | '相馬郡新地町' | '相馬郡飯舘村' | '水戸市' | '日立市' | '土浦市' | '古河市' | '石岡市' | '結城市' | '龍ケ崎市' | '下妻市' | '常総市' | '常陸太田市' | '高萩市' | '北茨城市' | '笠間市' | '取手市' | '牛久市' | 'つくば市' | 'ひたちなか市' | '鹿嶋市' | '潮来市' | '守谷市' | '常陸大宮市' | '那珂市' | '筑西市' | '坂東市' | '稲敷市' | 'かすみがうら市' | '桜川市' | '神栖市' | '行方市' | '鉾田市' | 'つくばみらい市' | '小美玉市' | '東茨城郡茨城町' | '東茨城郡大洗町' | '東茨城郡城里町' | '那珂郡東海村' | '久慈郡大子町' | '稲敷郡美浦村' | '稲敷郡阿見町' | '稲敷郡河内町' | '結城郡八千代町' | '猿島郡五霞町' | '猿島郡境町' | '北相馬郡利根町' | '宇都宮市' | '足利市' | '栃木市' | '佐野市' | '鹿沼市' | '日光市' | '小山市' | '真岡市' | '大田原市' | '矢板市' | '那須塩原市' | 'さくら市' | '那須烏山市' | '下野市' | '河内郡上三川町' | '芳賀郡益子町' | '芳賀郡茂木町' | '芳賀郡市貝町' | '芳賀郡芳賀町' | '下都賀郡壬生町' | '下都賀郡野木町' | '塩谷郡塩谷町' | '塩谷郡高根沢町' | '那須郡那須町' | '那須郡那珂川町' | '前橋市' | '高崎市' | '桐生市' | '伊勢崎市' | '太田市' | '沼田市' | '館林市' | '渋川市' | '藤岡市' | '富岡市' | '安中市' | 'みどり市' | '北群馬郡榛東村' | '北群馬郡吉岡町' | '多野郡上野村' | '多野郡神流町' | '甘楽郡下仁田町' | '甘楽郡南牧村' | '甘楽郡甘楽町' | '吾妻郡中之条町' | '吾妻郡長野原町' | '吾妻郡嬬恋村' | '吾妻郡草津町' | '吾妻郡高山村' | '吾妻郡東吾妻町' | '利根郡片品村' | '利根郡川場村' | '利根郡昭和村' | '利根郡みなかみ町' | '佐波郡玉村町' | '邑楽郡板倉町' | '邑楽郡明和町' | '邑楽郡千代田町' | '邑楽郡大泉町' | '邑楽郡邑楽町' | 'さいたま市' | 'さいたま市西区' | 'さいたま市北区' | 'さいたま市大宮区' | 'さいたま市見沼区' | 'さいたま市中央区' | 'さいたま市桜区' | 'さいたま市浦和区' | 'さいたま市南区' | 'さいたま市緑区' | 'さいたま市岩槻区' | '川越市' | '熊谷市' | '川口市' | '行田市' | '秩父市' | '所沢市' | '飯能市' | '加須市' | '本庄市' | '東松山市' | '春日部市' | '狭山市' | '羽生市' | '鴻巣市' | '深谷市' | '上尾市' | '草加市' | '越谷市' | '蕨市' | '戸田市' | '入間市' | '朝霞市' | '志木市' | '和光市' | '新座市' | '桶川市' | '久喜市' | '北本市' | '八潮市' | '富士見市' | '三郷市' | '蓮田市' | '坂戸市' | '幸手市' | '鶴ヶ島市' | '日高市' | '吉川市' | 'ふじみ野市' | '白岡市' | '北足立郡伊奈町' | '入間郡三芳町' | '入間郡毛呂山町' | '入間郡越生町' | '比企郡滑川町' | '比企郡嵐山町' | '比企郡小川町' | '比企郡川島町' | '比企郡吉見町' | '比企郡鳩山町' | '比企郡ときがわ町' | '秩父郡横瀬町' | '秩父郡皆野町' | '秩父郡長瀞町' | '秩父郡小鹿野町' | '秩父郡東秩父村' | '児玉郡美里町' | '児玉郡神川町' | '児玉郡上里町' | '大里郡寄居町' | '南埼玉郡宮代町' | '北葛飾郡杉戸町' | '北葛飾郡松伏町' | '千葉市' | '千葉市中央区' | '千葉市花見川区' | '千葉市稲毛区' | '千葉市若葉区' | '千葉市緑区' | '千葉市美浜区' | '銚子市' | '市川市' | '船橋市' | '館山市' | '木更津市' | '松戸市' | '野田市' | '茂原市' | '成田市' | '佐倉市' | '東金市' | '旭市' | '習志野市' | '柏市' | '勝浦市' | '市原市' | '流山市' | '八千代市' | '我孫子市' | '鴨川市' | '鎌ケ谷市' | '君津市' | '富津市' | '浦安市' | '四街道市' | '袖ケ浦市' | '八街市' | '印西市' | '白井市' | '富里市' | '南房総市' | '匝瑳市' | '香取市' | '山武市' | 'いすみ市' | '大網白里市' | '印旛郡酒々井町' | '印旛郡栄町' | '香取郡神崎町' | '香取郡多古町' | '香取郡東庄町' | '山武郡九十九里町' | '山武郡芝山町' | '山武郡横芝光町' | '長生郡一宮町' | '長生郡睦沢町' | '長生郡長生村' | '長生郡白子町' | '長生郡長柄町' | '長生郡長南町' | '夷隅郡大多喜町' | '夷隅郡御宿町' | '安房郡鋸南町' | '千代田区' | '中央区' | '港区' | '新宿区' | '文京区' | '台東区' | '墨田区' | '江東区' | '品川区' | '目黒区' | '大田区' | '世田谷区' | '渋谷区' | '中野区' | '杉並区' | '豊島区' | '北区' | '荒川区' | '板橋区' | '練馬区' | '足立区' | '葛飾区' | '江戸川区' | '八王子市' | '立川市' | '武蔵野市' | '三鷹市' | '青梅市' | '府中市' | '昭島市' | '調布市' | '町田市' | '小金井市' | '小平市' | '日野市' | '東村山市' | '国分寺市' | '国立市' | '福生市' | '狛江市' | '東大和市' | '清瀬市' | '東久留米市' | '武蔵村山市' | '多摩市' | '稲城市' | '羽村市' | 'あきる野市' | '西東京市' | '西多摩郡瑞穂町' | '西多摩郡日の出町' | '西多摩郡檜原村' | '西多摩郡奥多摩町' | '大島町' | '利島村' | '新島村' | '神津島村' | '三宅島三宅村' | '御蔵島村' | '八丈島八丈町' | '青ヶ島村' | '小笠原諸島小笠原村' | '横浜市' | '横浜市鶴見区' | '横浜市神奈川区' | '横浜市西区' | '横浜市中区' | '横浜市南区' | '横浜市保土ケ谷区' | '横浜市磯子区' | '横浜市金沢区' | '横浜市港北区' | '横浜市戸塚区' | '横浜市港南区' | '横浜市旭区' | '横浜市緑区' | '横浜市瀬谷区' | '横浜市栄区' | '横浜市泉区' | '横浜市青葉区' | '横浜市都筑区' | '川崎市' | '川崎市川崎区' | '川崎市幸区' | '川崎市中原区' | '川崎市高津区' | '川崎市多摩区' | '川崎市宮前区' | '川崎市麻生区' | '相模原市' | '相模原市緑区' | '相模原市中央区' | '相模原市南区' | '横須賀市' | '平塚市' | '鎌倉市' | '藤沢市' | '小田原市' | '茅ヶ崎市' | '逗子市' | '三浦市' | '秦野市' | '厚木市' | '大和市' | '伊勢原市' | '海老名市' | '座間市' | '南足柄市' | '綾瀬市' | '三浦郡葉山町' | '高座郡寒川町' | '中郡大磯町' | '中郡二宮町' | '足柄上郡中井町' | '足柄上郡大井町' | '足柄上郡松田町' | '足柄上郡山北町' | '足柄上郡開成町' | '足柄下郡箱根町' | '足柄下郡真鶴町' | '足柄下郡湯河原町' | '愛甲郡愛川町' | '愛甲郡清川村' | '新潟市' | '新潟市北区' | '新潟市東区' | '新潟市中央区' | '新潟市江南区' | '新潟市秋葉区' | '新潟市南区' | '新潟市西区' | '新潟市西蒲区' | '長岡市' | '三条市' | '柏崎市' | '新発田市' | '小千谷市' | '加茂市' | '十日町市' | '見附市' | '村上市' | '燕市' | '糸魚川市' | '妙高市' | '五泉市' | '上越市' | '阿賀野市' | '佐渡市' | '魚沼市' | '南魚沼市' | '胎内市' | '北蒲原郡聖籠町' | '西蒲原郡弥彦村' | '南蒲原郡田上町' | '東蒲原郡阿賀町' | '三島郡出雲崎町' | '南魚沼郡湯沢町' | '中魚沼郡津南町' | '刈羽郡刈羽村' | '岩船郡関川村' | '岩船郡粟島浦村' | '富山市' | '高岡市' | '魚津市' | '氷見市' | '滑川市' | '黒部市' | '砺波市' | '小矢部市' | '南砺市' | '射水市' | '中新川郡舟橋村' | '中新川郡上市町' | '中新川郡立山町' | '下新川郡入善町' | '下新川郡朝日町' | '金沢市' | '七尾市' | '小松市' | '輪島市' | '珠洲市' | '加賀市' | '羽咋市' | 'かほく市' | '白山市' | '能美市' | '野々市市' | '能美郡川北町' | '河北郡津幡町' | '河北郡内灘町' | '羽咋郡志賀町' | '羽咋郡宝達志水町' | '鹿島郡中能登町' | '鳳珠郡穴水町' | '鳳珠郡能登町' | '福井市' | '敦賀市' | '小浜市' | '大野市' | '勝山市' | '鯖江市' | 'あわら市' | '越前市' | '坂井市' | '吉田郡永平寺町' | '今立郡池田町' | '南条郡南越前町' | '丹生郡越前町' | '三方郡美浜町' | '大飯郡高浜町' | '大飯郡おおい町' | '三方上中郡若狭町' | '甲府市' | '富士吉田市' | '都留市' | '山梨市' | '大月市' | '韮崎市' | '南アルプス市' | '北杜市' | '甲斐市' | '笛吹市' | '上野原市' | '甲州市' | '中央市' | '西八代郡市川三郷町' | '南巨摩郡早川町' | '南巨摩郡身延町' | '南巨摩郡南部町' | '南巨摩郡富士川町' | '中巨摩郡昭和町' | '南都留郡道志村' | '南都留郡西桂町' | '南都留郡忍野村' | '南都留郡山中湖村' | '南都留郡鳴沢村' | '南都留郡富士河口湖町' | '北都留郡小菅村' | '北都留郡丹波山村' | '長野市' | '松本市' | '上田市' | '岡谷市' | '飯田市' | '諏訪市' | '須坂市' | '小諸市' | '伊那市' | '駒ヶ根市' | '中野市' | '大町市' | '飯山市' | '茅野市' | '塩尻市' | '佐久市' | '千曲市' | '東御市' | '安曇野市' | '南佐久郡小海町' | '南佐久郡川上村' | '南佐久郡南牧村' | '南佐久郡南相木村' | '南佐久郡北相木村' | '南佐久郡佐久穂町' | '北佐久郡軽井沢町' | '北佐久郡御代田町' | '北佐久郡立科町' | '小県郡青木村' | '小県郡長和町' | '諏訪郡下諏訪町' | '諏訪郡富士見町' | '諏訪郡原村' | '上伊那郡辰野町' | '上伊那郡箕輪町' | '上伊那郡飯島町' | '上伊那郡南箕輪村' | '上伊那郡中川村' | '上伊那郡宮田村' | '下伊那郡松川町' | '下伊那郡高森町' | '下伊那郡阿南町' | '下伊那郡阿智村' | '下伊那郡平谷村' | '下伊那郡根羽村' | '下伊那郡下條村' | '下伊那郡売木村' | '下伊那郡天龍村' | '下伊那郡泰阜村' | '下伊那郡喬木村' | '下伊那郡豊丘村' | '下伊那郡大鹿村' | '木曽郡上松町' | '木曽郡南木曽町' | '木曽郡木祖村' | '木曽郡王滝村' | '木曽郡大桑村' | '木曽郡木曽町' | '東筑摩郡麻績村' | '東筑摩郡生坂村' | '東筑摩郡山形村' | '東筑摩郡朝日村' | '東筑摩郡筑北村' | '北安曇郡池田町' | '北安曇郡松川村' | '北安曇郡白馬村' | '北安曇郡小谷村' | '埴科郡坂城町' | '上高井郡小布施町' | '上高井郡高山村' | '下高井郡山ノ内町' | '下高井郡木島平村' | '下高井郡野沢温泉村' | '上水内郡信濃町' | '上水内郡小川村' | '上水内郡飯綱町' | '下水内郡栄村' | '岐阜市' | '大垣市' | '高山市' | '多治見市' | '関市' | '中津川市' | '美濃市' | '瑞浪市' | '羽島市' | '恵那市' | '美濃加茂市' | '土岐市' | '各務原市' | '可児市' | '山県市' | '瑞穂市' | '飛騨市' | '本巣市' | '郡上市' | '下呂市' | '海津市' | '羽島郡岐南町' | '羽島郡笠松町' | '養老郡養老町' | '不破郡垂井町' | '不破郡関ケ原町' | '安八郡神戸町' | '安八郡輪之内町' | '安八郡安八町' | '揖斐郡揖斐川町' | '揖斐郡大野町' | '揖斐郡池田町' | '本巣郡北方町' | '加茂郡坂祝町' | '加茂郡富加町' | '加茂郡川辺町' | '加茂郡七宗町' | '加茂郡八百津町' | '加茂郡白川町' | '加茂郡東白川村' | '可児郡御嵩町' | '大野郡白川村' | '静岡市' | '静岡市葵区' | '静岡市駿河区' | '静岡市清水区' | '浜松市' | '浜松市中区' | '浜松市東区' | '浜松市西区' | '浜松市南区' | '浜松市北区' | '浜松市浜北区' | '浜松市天竜区' | '沼津市' | '熱海市' | '三島市' | '富士宮市' | '伊東市' | '島田市' | '富士市' | '磐田市' | '焼津市' | '掛川市' | '藤枝市' | '御殿場市' | '袋井市' | '下田市' | '裾野市' | '湖西市' | '伊豆市' | '御前崎市' | '菊川市' | '伊豆の国市' | '牧之原市' | '賀茂郡東伊豆町' | '賀茂郡河津町' | '賀茂郡南伊豆町' | '賀茂郡松崎町' | '賀茂郡西伊豆町' | '田方郡函南町' | '駿東郡清水町' | '駿東郡長泉町' | '駿東郡小山町' | '榛原郡吉田町' | '榛原郡川根本町' | '周智郡森町' | '名古屋市' | '名古屋市千種区' | '名古屋市東区' | '名古屋市北区' | '名古屋市西区' | '名古屋市中村区' | '名古屋市中区' | '名古屋市昭和区' | '名古屋市瑞穂区' | '名古屋市熱田区' | '名古屋市中川区' | '名古屋市港区' | '名古屋市南区' | '名古屋市守山区' | '名古屋市緑区' | '名古屋市名東区' | '名古屋市天白区' | '豊橋市' | '岡崎市' | '一宮市' | '瀬戸市' | '半田市' | '春日井市' | '豊川市' | '津島市' | '碧南市' | '刈谷市' | '豊田市' | '安城市' | '西尾市' | '蒲郡市' | '犬山市' | '常滑市' | '江南市' | '小牧市' | '稲沢市' | '新城市' | '東海市' | '大府市' | '知多市' | '知立市' | '尾張旭市' | '高浜市' | '岩倉市' | '豊明市' | '日進市' | '田原市' | '愛西市' | '清須市' | '北名古屋市' | '弥富市' | 'みよし市' | 'あま市' | '長久手市' | '愛知郡東郷町' | '西春日井郡豊山町' | '丹羽郡大口町' | '丹羽郡扶桑町' | '海部郡大治町' | '海部郡蟹江町' | '海部郡飛島村' | '知多郡阿久比町' | '知多郡東浦町' | '知多郡南知多町' | '知多郡美浜町' | '知多郡武豊町' | '額田郡幸田町' | '北設楽郡設楽町' | '北設楽郡東栄町' | '北設楽郡豊根村' | '津市' | '四日市市' | '伊勢市' | '松阪市' | '桑名市' | '鈴鹿市' | '名張市' | '尾鷲市' | '亀山市' | '鳥羽市' | '熊野市' | 'いなべ市' | '志摩市' | '伊賀市' | '桑名郡木曽岬町' | '員弁郡東員町' | '三重郡菰野町' | '三重郡朝日町' | '三重郡川越町' | '多気郡多気町' | '多気郡明和町' | '多気郡大台町' | '度会郡玉城町' | '度会郡度会町' | '度会郡大紀町' | '度会郡南伊勢町' | '北牟婁郡紀北町' | '南牟婁郡御浜町' | '南牟婁郡紀宝町' | '大津市' | '彦根市' | '長浜市' | '近江八幡市' | '草津市' | '守山市' | '栗東市' | '甲賀市' | '野洲市' | '湖南市' | '高島市' | '東近江市' | '米原市' | '蒲生郡日野町' | '蒲生郡竜王町' | '愛知郡愛荘町' | '犬上郡豊郷町' | '犬上郡甲良町' | '犬上郡多賀町' | '京都市' | '京都市北区' | '京都市上京区' | '京都市左京区' | '京都市中京区' | '京都市東山区' | '京都市下京区' | '京都市南区' | '京都市右京区' | '京都市伏見区' | '京都市山科区' | '京都市西京区' | '福知山市' | '舞鶴市' | '綾部市' | '宇治市' | '宮津市' | '亀岡市' | '城陽市' | '向日市' | '長岡京市' | '八幡市' | '京田辺市' | '京丹後市' | '南丹市' | '木津川市' | '乙訓郡大山崎町' | '久世郡久御山町' | '綴喜郡井手町' | '綴喜郡宇治田原町' | '相楽郡笠置町' | '相楽郡和束町' | '相楽郡精華町' | '相楽郡南山城村' | '船井郡京丹波町' | '与謝郡伊根町' | '与謝郡与謝野町' | '大阪市' | '大阪市都島区' | '大阪市福島区' | '大阪市此花区' | '大阪市西区' | '大阪市港区' | '大阪市大正区' | '大阪市天王寺区' | '大阪市浪速区' | '大阪市西淀川区' | '大阪市東淀川区' | '大阪市東成区' | '大阪市生野区' | '大阪市旭区' | '大阪市城東区' | '大阪市阿倍野区' | '大阪市住吉区' | '大阪市東住吉区' | '大阪市西成区' | '大阪市淀川区' | '大阪市鶴見区' | '大阪市住之江区' | '大阪市平野区' | '大阪市北区' | '大阪市中央区' | '堺市' | '堺市堺区' | '堺市中区' | '堺市東区' | '堺市西区' | '堺市南区' | '堺市北区' | '堺市美原区' | '岸和田市' | '豊中市' | '池田市' | '吹田市' | '泉大津市' | '高槻市' | '貝塚市' | '守口市' | '枚方市' | '茨木市' | '八尾市' | '泉佐野市' | '富田林市' | '寝屋川市' | '河内長野市' | '松原市' | '大東市' | '和泉市' | '箕面市' | '柏原市' | '羽曳野市' | '門真市' | '摂津市' | '高石市' | '藤井寺市' | '東大阪市' | '泉南市' | '四條畷市' | '交野市' | '大阪狭山市' | '阪南市' | '三島郡島本町' | '豊能郡豊能町' | '豊能郡能勢町' | '泉北郡忠岡町' | '泉南郡熊取町' | '泉南郡田尻町' | '泉南郡岬町' | '南河内郡太子町' | '南河内郡河南町' | '南河内郡千早赤阪村' | '神戸市' | '神戸市東灘区' | '神戸市灘区' | '神戸市兵庫区' | '神戸市長田区' | '神戸市須磨区' | '神戸市垂水区' | '神戸市北区' | '神戸市中央区' | '神戸市西区' | '姫路市' | '尼崎市' | '明石市' | '西宮市' | '洲本市' | '芦屋市' | '伊丹市' | '相生市' | '豊岡市' | '加古川市' | '赤穂市' | '西脇市' | '宝塚市' | '三木市' | '高砂市' | '川西市' | '小野市' | '三田市' | '加西市' | '丹波篠山市' | '養父市' | '丹波市' | '南あわじ市' | '朝来市' | '淡路市' | '宍粟市' | '加東市' | 'たつの市' | '川辺郡猪名川町' | '多可郡多可町' | '加古郡稲美町' | '加古郡播磨町' | '神崎郡市川町' | '神崎郡福崎町' | '神崎郡神河町' | '揖保郡太子町' | '赤穂郡上郡町' | '佐用郡佐用町' | '美方郡香美町' | '美方郡新温泉町' | '奈良市' | '大和高田市' | '大和郡山市' | '天理市' | '橿原市' | '桜井市' | '五條市' | '御所市' | '生駒市' | '香芝市' | '葛城市' | '宇陀市' | '山辺郡山添村' | '生駒郡平群町' | '生駒郡三郷町' | '生駒郡斑鳩町' | '生駒郡安堵町' | '磯城郡川西町' | '磯城郡三宅町' | '磯城郡田原本町' | '宇陀郡曽爾村' | '宇陀郡御杖村' | '高市郡高取町' | '高市郡明日香村' | '北葛城郡上牧町' | '北葛城郡王寺町' | '北葛城郡広陵町' | '北葛城郡河合町' | '吉野郡吉野町' | '吉野郡大淀町' | '吉野郡下市町' | '吉野郡黒滝村' | '吉野郡天川村' | '吉野郡野迫川村' | '吉野郡十津川村' | '吉野郡下北山村' | '吉野郡上北山村' | '吉野郡川上村' | '吉野郡東吉野村' | '和歌山市' | '海南市' | '橋本市' | '有田市' | '御坊市' | '田辺市' | '新宮市' | '紀の川市' | '岩出市' | '海草郡紀美野町' | '伊都郡かつらぎ町' | '伊都郡九度山町' | '伊都郡高野町' | '有田郡湯浅町' | '有田郡広川町' | '有田郡有田川町' | '日高郡美浜町' | '日高郡日高町' | '日高郡由良町' | '日高郡印南町' | '日高郡みなべ町' | '日高郡日高川町' | '西牟婁郡白浜町' | '西牟婁郡上富田町' | '西牟婁郡すさみ町' | '東牟婁郡那智勝浦町' | '東牟婁郡太地町' | '東牟婁郡古座川町' | '東牟婁郡北山村' | '東牟婁郡串本町' | '鳥取市' | '米子市' | '倉吉市' | '境港市' | '岩美郡岩美町' | '八頭郡若桜町' | '八頭郡智頭町' | '八頭郡八頭町' | '東伯郡三朝町' | '東伯郡湯梨浜町' | '東伯郡琴浦町' | '東伯郡北栄町' | '西伯郡日吉津村' | '西伯郡大山町' | '西伯郡南部町' | '西伯郡伯耆町' | '日野郡日南町' | '日野郡日野町' | '日野郡江府町' | '松江市' | '浜田市' | '出雲市' | '益田市' | '大田市' | '安来市' | '江津市' | '雲南市' | '仁多郡奥出雲町' | '飯石郡飯南町' | '邑智郡川本町' | '邑智郡美郷町' | '邑智郡邑南町' | '鹿足郡津和野町' | '鹿足郡吉賀町' | '隠岐郡海士町' | '隠岐郡西ノ島町' | '隠岐郡知夫村' | '隠岐郡隠岐の島町' | '岡山市' | '岡山市北区' | '岡山市中区' | '岡山市東区' | '岡山市南区' | '倉敷市' | '津山市' | '玉野市' | '笠岡市' | '井原市' | '総社市' | '高梁市' | '新見市' | '備前市' | '瀬戸内市' | '赤磐市' | '真庭市' | '美作市' | '浅口市' | '和気郡和気町' | '都窪郡早島町' | '浅口郡里庄町' | '小田郡矢掛町' | '真庭郡新庄村' | '苫田郡鏡野町' | '勝田郡勝央町' | '勝田郡奈義町' | '英田郡西粟倉村' | '久米郡久米南町' | '久米郡美咲町' | '加賀郡吉備中央町' | '広島市' | '広島市中区' | '広島市東区' | '広島市南区' | '広島市西区' | '広島市安佐南区' | '広島市安佐北区' | '広島市安芸区' | '広島市佐伯区' | '呉市' | '竹原市' | '三原市' | '尾道市' | '福山市' | '三次市' | '庄原市' | '大竹市' | '東広島市' | '廿日市市' | '安芸高田市' | '江田島市' | '安芸郡府中町' | '安芸郡海田町' | '安芸郡熊野町' | '安芸郡坂町' | '山県郡安芸太田町' | '山県郡北広島町' | '豊田郡大崎上島町' | '世羅郡世羅町' | '神石郡神石高原町' | '下関市' | '宇部市' | '山口市' | '萩市' | '防府市' | '下松市' | '岩国市' | '光市' | '長門市' | '柳井市' | '美祢市' | '周南市' | '山陽小野田市' | '大島郡周防大島町' | '玖珂郡和木町' | '熊毛郡上関町' | '熊毛郡田布施町' | '熊毛郡平生町' | '阿武郡阿武町' | '徳島市' | '鳴門市' | '小松島市' | '阿南市' | '吉野川市' | '阿波市' | '美馬市' | '三好市' | '勝浦郡勝浦町' | '勝浦郡上勝町' | '名東郡佐那河内村' | '名西郡石井町' | '名西郡神山町' | '那賀郡那賀町' | '海部郡牟岐町' | '海部郡美波町' | '海部郡海陽町' | '板野郡松茂町' | '板野郡北島町' | '板野郡藍住町' | '板野郡板野町' | '板野郡上板町' | '美馬郡つるぎ町' | '三好郡東みよし町' | '高松市' | '丸亀市' | '坂出市' | '善通寺市' | '観音寺市' | 'さぬき市' | '東かがわ市' | '三豊市' | '小豆郡土庄町' | '小豆郡小豆島町' | '木田郡三木町' | '香川郡直島町' | '綾歌郡宇多津町' | '綾歌郡綾川町' | '仲多度郡琴平町' | '仲多度郡多度津町' | '仲多度郡まんのう町' | '松山市' | '今治市' | '宇和島市' | '八幡浜市' | '新居浜市' | '西条市' | '大洲市' | '伊予市' | '四国中央市' | '西予市' | '東温市' | '越智郡上島町' | '上浮穴郡久万高原町' | '伊予郡松前町' | '伊予郡砥部町' | '喜多郡内子町' | '西宇和郡伊方町' | '北宇和郡松野町' | '北宇和郡鬼北町' | '南宇和郡愛南町' | '高知市' | '室戸市' | '安芸市' | '南国市' | '土佐市' | '須崎市' | '宿毛市' | '土佐清水市' | '四万十市' | '香南市' | '香美市' | '安芸郡東洋町' | '安芸郡奈半利町' | '安芸郡田野町' | '安芸郡安田町' | '安芸郡北川村' | '安芸郡馬路村' | '安芸郡芸西村' | '長岡郡本山町' | '長岡郡大豊町' | '土佐郡土佐町' | '土佐郡大川村' | '吾川郡いの町' | '吾川郡仁淀川町' | '高岡郡中土佐町' | '高岡郡佐川町' | '高岡郡越知町' | '高岡郡梼原町' | '高岡郡日高村' | '高岡郡津野町' | '高岡郡四万十町' | '幡多郡大月町' | '幡多郡三原村' | '幡多郡黒潮町' | '北九州市' | '北九州市門司区' | '北九州市若松区' | '北九州市戸畑区' | '北九州市小倉北区' | '北九州市小倉南区' | '北九州市八幡東区' | '北九州市八幡西区' | '福岡市' | '福岡市東区' | '福岡市博多区' | '福岡市中央区' | '福岡市南区' | '福岡市西区' | '福岡市城南区' | '福岡市早良区' | '大牟田市' | '久留米市' | '直方市' | '飯塚市' | '田川市' | '柳川市' | '八女市' | '筑後市' | '大川市' | '行橋市' | '豊前市' | '中間市' | '小郡市' | '筑紫野市' | '春日市' | '大野城市' | '宗像市' | '太宰府市' | '古賀市' | '福津市' | 'うきは市' | '宮若市' | '嘉麻市' | '朝倉市' | 'みやま市' | '糸島市' | '那珂川市' | '糟屋郡宇美町' | '糟屋郡篠栗町' | '糟屋郡志免町' | '糟屋郡須恵町' | '糟屋郡新宮町' | '糟屋郡久山町' | '糟屋郡粕屋町' | '遠賀郡芦屋町' | '遠賀郡水巻町' | '遠賀郡岡垣町' | '遠賀郡遠賀町' | '鞍手郡小竹町' | '鞍手郡鞍手町' | '嘉穂郡桂川町' | '朝倉郡筑前町' | '朝倉郡東峰村' | '三井郡大刀洗町' | '三潴郡大木町' | '八女郡広川町' | '田川郡香春町' | '田川郡添田町' | '田川郡糸田町' | '田川郡川崎町' | '田川郡大任町' | '田川郡赤村' | '田川郡福智町' | '京都郡苅田町' | '京都郡みやこ町' | '築上郡吉富町' | '築上郡上毛町' | '築上郡築上町' | '佐賀市' | '唐津市' | '鳥栖市' | '多久市' | '伊万里市' | '武雄市' | '鹿島市' | '小城市' | '嬉野市' | '神埼市' | '神埼郡吉野ヶ里町' | '三養基郡基山町' | '三養基郡上峰町' | '三養基郡みやき町' | '東松浦郡玄海町' | '西松浦郡有田町' | '杵島郡大町町' | '杵島郡江北町' | '杵島郡白石町' | '藤津郡太良町' | '長崎市' | '佐世保市' | '島原市' | '諫早市' | '大村市' | '平戸市' | '松浦市' | '対馬市' | '壱岐市' | '五島市' | '西海市' | '雲仙市' | '南島原市' | '西彼杵郡長与町' | '西彼杵郡時津町' | '東彼杵郡東彼杵町' | '東彼杵郡川棚町' | '東彼杵郡波佐見町' | '北松浦郡小値賀町' | '北松浦郡佐々町' | '南松浦郡新上五島町' | '熊本市' | '熊本市中央区' | '熊本市東区' | '熊本市西区' | '熊本市南区' | '熊本市北区' | '八代市' | '人吉市' | '荒尾市' | '水俣市' | '玉名市' | '山鹿市' | '菊池市' | '宇土市' | '上天草市' | '宇城市' | '阿蘇市' | '天草市' | '合志市' | '下益城郡美里町' | '玉名郡玉東町' | '玉名郡南関町' | '玉名郡長洲町' | '玉名郡和水町' | '菊池郡大津町' | '菊池郡菊陽町' | '阿蘇郡南小国町' | '阿蘇郡小国町' | '阿蘇郡産山村' | '阿蘇郡高森町' | '阿蘇郡西原村' | '阿蘇郡南阿蘇村' | '上益城郡御船町' | '上益城郡嘉島町' | '上益城郡益城町' | '上益城郡甲佐町' | '上益城郡山都町' | '八代郡氷川町' | '葦北郡芦北町' | '葦北郡津奈木町' | '球磨郡錦町' | '球磨郡多良木町' | '球磨郡湯前町' | '球磨郡水上村' | '球磨郡相良村' | '球磨郡五木村' | '球磨郡山江村' | '球磨郡球磨村' | '球磨郡あさぎり町' | '天草郡苓北町' | '大分市' | '別府市' | '中津市' | '日田市' | '佐伯市' | '臼杵市' | '津久見市' | '竹田市' | '豊後高田市' | '杵築市' | '宇佐市' | '豊後大野市' | '由布市' | '国東市' | '東国東郡姫島村' | '速見郡日出町' | '玖珠郡九重町' | '玖珠郡玖珠町' | '宮崎市' | '都城市' | '延岡市' | '日南市' | '小林市' | '日向市' | '串間市' | '西都市' | 'えびの市' | '北諸県郡三股町' | '西諸県郡高原町' | '東諸県郡国富町' | '東諸県郡綾町' | '児湯郡高鍋町' | '児湯郡新富町' | '児湯郡西米良村' | '児湯郡木城町' | '児湯郡川南町' | '児湯郡都農町' | '東臼杵郡門川町' | '東臼杵郡諸塚村' | '東臼杵郡椎葉村' | '東臼杵郡美郷町' | '西臼杵郡高千穂町' | '西臼杵郡日之影町' | '西臼杵郡五ヶ瀬町' | '鹿児島市' | '鹿屋市' | '枕崎市' | '阿久根市' | '出水市' | '指宿市' | '西之表市' | '垂水市' | '薩摩川内市' | '日置市' | '曽於市' | '霧島市' | 'いちき串木野市' | '南さつま市' | '志布志市' | '奄美市' | '南九州市' | '伊佐市' | '姶良市' | '鹿児島郡三島村' | '鹿児島郡十島村' | '薩摩郡さつま町' | '出水郡長島町' | '姶良郡湧水町' | '曽於郡大崎町' | '肝属郡東串良町' | '肝属郡錦江町' | '肝属郡南大隅町' | '肝属郡肝付町' | '熊毛郡中種子町' | '熊毛郡南種子町' | '熊毛郡屋久島町' | '大島郡大和村' | '大島郡宇検村' | '大島郡瀬戸内町' | '大島郡龍郷町' | '大島郡喜界町' | '大島郡徳之島町' | '大島郡天城町' | '大島郡伊仙町' | '大島郡和泊町' | '大島郡知名町' | '大島郡与論町' | '那覇市' | '宜野湾市' | '石垣市' | '浦添市' | '名護市' | '糸満市' | '沖縄市' | '豊見城市' | 'うるま市' | '宮古島市' | '南城市' | '国頭郡国頭村' | '国頭郡大宜味村' | '国頭郡東村' | '国頭郡今帰仁村' | '国頭郡本部町' | '国頭郡恩納村' | '国頭郡宜野座村' | '国頭郡金武町' | '国頭郡伊江村' | '中頭郡読谷村' | '中頭郡嘉手納町' | '中頭郡北谷町' | '中頭郡北中城村' | '中頭郡中城村' | '中頭郡西原町' | '島尻郡与那原町' | '島尻郡南風原町' | '島尻郡渡嘉敷村' | '島尻郡座間味村' | '島尻郡粟国村' | '島尻郡渡名喜村' | '島尻郡南大東村' | '島尻郡北大東村' | '島尻郡伊平屋村' | '島尻郡伊是名村' | '島尻郡久米島町' | '島尻郡八重瀬町' | '宮古郡多良間村' | '八重山郡竹富町' | '八重山郡与那国町');
            };
            /**
             * Table
             * * 1 => Parent1
             * * 2 => Parent2
             * * 3 => Parent3
             * * 4 => Parent4
             * * 5 => Parent5
             */
            ext_col_06?: {
                key: string;
                label: string;
            } | '' | '1' | '2' | '3' | '4' | '5';
            /**
             * Relation
             */
            ext_col_09?: {
                module_type: string;
                module_id: number;
            } | number;
            /**
             * Private File
             */
            ext_col_11?: {
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
             * Private Image File
             */
            ext_col_17?: {
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
             * JSON
             */
            ext_jsn_12?: {
                /**
                 * * 1 => opt1
                 * * 2 => opt2
                 */
                options?: ('' | '1' | '2');
                text?: string;
            };
            /**
             * HTML
             */
            ext_col_13?: string;
            /**
             * Wysiwyg
             */
            ext_col_14?: string;
            /**
             * Vimeo
             */
            ext_col_16?: string;
            /**
             * Number
             */
            ext_col_18?: string;
            /**
             * Validate
             */
            validate_only?: boolean;
        };
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type postContentServiceRcmsApi1Topics1InsertResponse = any;
    interface postContentServiceRcmsApi1Topics1UpdateTopicsIdRequest {
        topicsId: string;
        requestBody: {
            /**
             * Topic title
             */
            subject?: string;
            /**
             * Slug
             */
            slug?: string;
            /**
             * Category ID
             * * 1 => CategoryForSingle1
             * * 4 => CategoryForSingle2
             */
            contents_type?: (1 | 4);
            /**
             * Published / Not published
             */
            open_type?: ('open' | 'close' | 'default');
            /**
             * Display all topics to logged in members, regardless ther public/hidden status
             */
            topics_flg?: (0 | 1);
            /**
             * Contents
             */
            contents?: string;
            /**
             * display up
             */
            regular_flg?: number;
            /**
             * Date
             */
            ymd?: string;
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
            /**
             * Text
             */
            ext_col_01?: string;
            /**
             * TextArea
             */
            ext_col_02?: string;
            /**
             * Select
             * * 1 => Option1
             * * 2 => Option2
             * * 3 => Option3
             */
            ext_col_03?: {
                key: string;
                label: string;
            } | '' | '1' | '2' | '3';
            /**
             * Checkbox
             * * 1 => Option1
             * * 2 => Option2
             * * 3 => Option3
             */
            ext_col_04?: Array<{
                key: string;
                label: string;
            } | '1' | '2' | '3'>;
            /**
             * Date
             */
            ext_col_07?: string | string | {
                ymd: string;
            };
            /**
             * DateTime
             */
            ext_col_08?: string | string | {
                ymd: string;
                h: number;
                i: number;
            };
            /**
             * Tdfk
             */
            ext_col_05?: {
                tdfk_cd?: ('01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '20' | '21' | '22' | '23' | '24' | '25' | '26' | '27' | '28' | '29' | '30' | '31' | '32' | '33' | '34' | '35' | '36' | '37' | '38' | '39' | '40' | '41' | '42' | '43' | '44' | '45' | '46' | '47' | '99');
                tdfk_nm?: ('北海道' | '青森県' | '岩手県' | '宮城県' | '秋田県' | '山形県' | '福島県' | '茨城県' | '栃木県' | '群馬県' | '埼玉県' | '千葉県' | '東京都' | '神奈川県' | '新潟県' | '富山県' | '石川県' | '福井県' | '山梨県' | '長野県' | '岐阜県' | '静岡県' | '愛知県' | '三重県' | '滋賀県' | '京都府' | '大阪府' | '兵庫県' | '奈良県' | '和歌山県' | '鳥取県' | '島根県' | '岡山県' | '広島県' | '山口県' | '徳島県' | '香川県' | '愛媛県' | '高知県' | '福岡県' | '佐賀県' | '長崎県' | '熊本県' | '大分県' | '宮崎県' | '鹿児島県' | '沖縄県' | '海外');
            };
            /**
             * TdfkAndCity
             */
            ext_col_15?: {
                tdfk_cd?: ('01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '20' | '21' | '22' | '23' | '24' | '25' | '26' | '27' | '28' | '29' | '30' | '31' | '32' | '33' | '34' | '35' | '36' | '37' | '38' | '39' | '40' | '41' | '42' | '43' | '44' | '45' | '46' | '47' | '99');
                tdfk_nm?: ('北海道' | '青森県' | '岩手県' | '宮城県' | '秋田県' | '山形県' | '福島県' | '茨城県' | '栃木県' | '群馬県' | '埼玉県' | '千葉県' | '東京都' | '神奈川県' | '新潟県' | '富山県' | '石川県' | '福井県' | '山梨県' | '長野県' | '岐阜県' | '静岡県' | '愛知県' | '三重県' | '滋賀県' | '京都府' | '大阪府' | '兵庫県' | '奈良県' | '和歌山県' | '鳥取県' | '島根県' | '岡山県' | '広島県' | '山口県' | '徳島県' | '香川県' | '愛媛県' | '高知県' | '福岡県' | '佐賀県' | '長崎県' | '熊本県' | '大分県' | '宮崎県' | '鹿児島県' | '沖縄県' | '海外');
                sub_area_cd?: ('01100' | '01101' | '01102' | '01103' | '01104' | '01105' | '01106' | '01107' | '01108' | '01109' | '01110' | '01202' | '01203' | '01204' | '01205' | '01206' | '01207' | '01208' | '01209' | '01210' | '01211' | '01212' | '01213' | '01214' | '01215' | '01216' | '01217' | '01218' | '01219' | '01220' | '01221' | '01222' | '01223' | '01224' | '01225' | '01226' | '01227' | '01228' | '01229' | '01230' | '01231' | '01233' | '01234' | '01235' | '01236' | '01303' | '01304' | '01331' | '01332' | '01333' | '01334' | '01337' | '01343' | '01345' | '01346' | '01347' | '01361' | '01362' | '01363' | '01364' | '01367' | '01370' | '01371' | '01391' | '01392' | '01393' | '01394' | '01395' | '01396' | '01397' | '01398' | '01399' | '01400' | '01401' | '01402' | '01403' | '01404' | '01405' | '01406' | '01407' | '01408' | '01409' | '01423' | '01424' | '01425' | '01427' | '01428' | '01429' | '01430' | '01431' | '01432' | '01433' | '01434' | '01436' | '01437' | '01438' | '01452' | '01453' | '01454' | '01455' | '01456' | '01457' | '01458' | '01459' | '01460' | '01461' | '01462' | '01463' | '01464' | '01465' | '01468' | '01469' | '01470' | '01471' | '01472' | '01481' | '01482' | '01483' | '01484' | '01485' | '01486' | '01487' | '01511' | '01512' | '01513' | '01514' | '01516' | '01517' | '01518' | '01519' | '01520' | '01543' | '01544' | '01545' | '01546' | '01547' | '01549' | '01550' | '01552' | '01555' | '01559' | '01560' | '01561' | '01562' | '01563' | '01564' | '01571' | '01575' | '01578' | '01581' | '01584' | '01585' | '01586' | '01601' | '01602' | '01604' | '01607' | '01608' | '01609' | '01610' | '01631' | '01632' | '01633' | '01634' | '01635' | '01636' | '01637' | '01638' | '01639' | '01641' | '01642' | '01643' | '01644' | '01645' | '01646' | '01647' | '01648' | '01649' | '01661' | '01662' | '01663' | '01664' | '01665' | '01667' | '01668' | '01691' | '01692' | '01693' | '01694' | '02201' | '02202' | '02203' | '02204' | '02205' | '02206' | '02207' | '02208' | '02209' | '02210' | '02301' | '02303' | '02304' | '02307' | '02321' | '02323' | '02343' | '02361' | '02362' | '02367' | '02381' | '02384' | '02387' | '02401' | '02402' | '02405' | '02406' | '02408' | '02411' | '02412' | '02423' | '02424' | '02425' | '02426' | '02441' | '02442' | '02443' | '02445' | '02446' | '02450' | '03201' | '03202' | '03203' | '03205' | '03206' | '03207' | '03208' | '03209' | '03210' | '03211' | '03213' | '03214' | '03215' | '03216' | '03301' | '03302' | '03303' | '03321' | '03322' | '03366' | '03381' | '03402' | '03441' | '03461' | '03482' | '03483' | '03484' | '03485' | '03501' | '03503' | '03506' | '03507' | '03524' | '04100' | '04101' | '04102' | '04103' | '04104' | '04105' | '04202' | '04203' | '04205' | '04206' | '04207' | '04208' | '04209' | '04211' | '04212' | '04213' | '04214' | '04215' | '04216' | '04301' | '04302' | '04321' | '04322' | '04323' | '04324' | '04341' | '04361' | '04362' | '04401' | '04404' | '04406' | '04421' | '04422' | '04424' | '04444' | '04445' | '04501' | '04505' | '04581' | '04606' | '05201' | '05202' | '05203' | '05204' | '05206' | '05207' | '05209' | '05210' | '05211' | '05212' | '05213' | '05214' | '05215' | '05303' | '05327' | '05346' | '05348' | '05349' | '05361' | '05363' | '05366' | '05368' | '05434' | '05463' | '05464' | '06201' | '06202' | '06203' | '06204' | '06205' | '06206' | '06207' | '06208' | '06209' | '06210' | '06211' | '06212' | '06213' | '06301' | '06302' | '06321' | '06322' | '06323' | '06324' | '06341' | '06361' | '06362' | '06363' | '06364' | '06365' | '06366' | '06367' | '06381' | '06382' | '06401' | '06402' | '06403' | '06426' | '06428' | '06461' | '07201' | '07202' | '07203' | '07204' | '07205' | '07207' | '07208' | '07209' | '07210' | '07211' | '07212' | '07213' | '07214' | '07301' | '07303' | '07308' | '07322' | '07342' | '07344' | '07362' | '07364' | '07367' | '07368' | '07402' | '07405' | '07407' | '07408' | '07421' | '07422' | '07423' | '07444' | '07445' | '07446' | '07447' | '07461' | '07464' | '07465' | '07466' | '07481' | '07482' | '07483' | '07484' | '07501' | '07502' | '07503' | '07504' | '07505' | '07521' | '07522' | '07541' | '07542' | '07543' | '07544' | '07545' | '07546' | '07547' | '07548' | '07561' | '07564' | '08201' | '08202' | '08203' | '08204' | '08205' | '08207' | '08208' | '08210' | '08211' | '08212' | '08214' | '08215' | '08216' | '08217' | '08219' | '08220' | '08221' | '08222' | '08223' | '08224' | '08225' | '08226' | '08227' | '08228' | '08229' | '08230' | '08231' | '08232' | '08233' | '08234' | '08235' | '08236' | '08302' | '08309' | '08310' | '08341' | '08364' | '08442' | '08443' | '08447' | '08521' | '08542' | '08546' | '08564' | '09201' | '09202' | '09203' | '09204' | '09205' | '09206' | '09208' | '09209' | '09210' | '09211' | '09213' | '09214' | '09215' | '09216' | '09301' | '09342' | '09343' | '09344' | '09345' | '09361' | '09364' | '09384' | '09386' | '09407' | '09411' | '10201' | '10202' | '10203' | '10204' | '10205' | '10206' | '10207' | '10208' | '10209' | '10210' | '10211' | '10212' | '10344' | '10345' | '10366' | '10367' | '10382' | '10383' | '10384' | '10421' | '10424' | '10425' | '10426' | '10428' | '10429' | '10443' | '10444' | '10448' | '10449' | '10464' | '10521' | '10522' | '10523' | '10524' | '10525' | '11100' | '11101' | '11102' | '11103' | '11104' | '11105' | '11106' | '11107' | '11108' | '11109' | '11110' | '11201' | '11202' | '11203' | '11206' | '11207' | '11208' | '11209' | '11210' | '11211' | '11212' | '11214' | '11215' | '11216' | '11217' | '11218' | '11219' | '11221' | '11222' | '11223' | '11224' | '11225' | '11227' | '11228' | '11229' | '11230' | '11231' | '11232' | '11233' | '11234' | '11235' | '11237' | '11238' | '11239' | '11240' | '11241' | '11242' | '11243' | '11245' | '11246' | '11301' | '11324' | '11326' | '11327' | '11341' | '11342' | '11343' | '11346' | '11347' | '11348' | '11349' | '11361' | '11362' | '11363' | '11365' | '11369' | '11381' | '11383' | '11385' | '11408' | '11442' | '11464' | '11465' | '12100' | '12101' | '12102' | '12103' | '12104' | '12105' | '12106' | '12202' | '12203' | '12204' | '12205' | '12206' | '12207' | '12208' | '12210' | '12211' | '12212' | '12213' | '12215' | '12216' | '12217' | '12218' | '12219' | '12220' | '12221' | '12222' | '12223' | '12224' | '12225' | '12226' | '12227' | '12228' | '12229' | '12230' | '12231' | '12232' | '12233' | '12234' | '12235' | '12236' | '12237' | '12238' | '12239' | '12322' | '12329' | '12342' | '12347' | '12349' | '12403' | '12409' | '12410' | '12421' | '12422' | '12423' | '12424' | '12426' | '12427' | '12441' | '12443' | '12463' | '13101' | '13102' | '13103' | '13104' | '13105' | '13106' | '13107' | '13108' | '13109' | '13110' | '13111' | '13112' | '13113' | '13114' | '13115' | '13116' | '13117' | '13118' | '13119' | '13120' | '13121' | '13122' | '13123' | '13201' | '13202' | '13203' | '13204' | '13205' | '13206' | '13207' | '13208' | '13209' | '13210' | '13211' | '13212' | '13213' | '13214' | '13215' | '13218' | '13219' | '13220' | '13221' | '13222' | '13223' | '13224' | '13225' | '13227' | '13228' | '13229' | '13303' | '13305' | '13307' | '13308' | '13361' | '13362' | '13363' | '13364' | '13381' | '13382' | '13401' | '13402' | '13421' | '14100' | '14101' | '14102' | '14103' | '14104' | '14105' | '14106' | '14107' | '14108' | '14109' | '14110' | '14111' | '14112' | '14113' | '14114' | '14115' | '14116' | '14117' | '14118' | '14130' | '14131' | '14132' | '14133' | '14134' | '14135' | '14136' | '14137' | '14150' | '14151' | '14152' | '14153' | '14201' | '14203' | '14204' | '14205' | '14206' | '14207' | '14208' | '14210' | '14211' | '14212' | '14213' | '14214' | '14215' | '14216' | '14217' | '14218' | '14301' | '14321' | '14341' | '14342' | '14361' | '14362' | '14363' | '14364' | '14366' | '14382' | '14383' | '14384' | '14401' | '14402' | '15100' | '15101' | '15102' | '15103' | '15104' | '15105' | '15106' | '15107' | '15108' | '15202' | '15204' | '15205' | '15206' | '15208' | '15209' | '15210' | '15211' | '15212' | '15213' | '15216' | '15217' | '15218' | '15222' | '15223' | '15224' | '15225' | '15226' | '15227' | '15307' | '15342' | '15361' | '15385' | '15405' | '15461' | '15482' | '15504' | '15581' | '15586' | '16201' | '16202' | '16204' | '16205' | '16206' | '16207' | '16208' | '16209' | '16210' | '16211' | '16321' | '16322' | '16323' | '16342' | '16343' | '17201' | '17202' | '17203' | '17204' | '17205' | '17206' | '17207' | '17209' | '17210' | '17211' | '17212' | '17324' | '17361' | '17365' | '17384' | '17386' | '17407' | '17461' | '17463' | '18201' | '18202' | '18204' | '18205' | '18206' | '18207' | '18208' | '18209' | '18210' | '18322' | '18382' | '18404' | '18423' | '18442' | '18481' | '18483' | '18501' | '19201' | '19202' | '19204' | '19205' | '19206' | '19207' | '19208' | '19209' | '19210' | '19211' | '19212' | '19213' | '19214' | '19346' | '19364' | '19365' | '19366' | '19368' | '19384' | '19422' | '19423' | '19424' | '19425' | '19429' | '19430' | '19442' | '19443' | '20201' | '20202' | '20203' | '20204' | '20205' | '20206' | '20207' | '20208' | '20209' | '20210' | '20211' | '20212' | '20213' | '20214' | '20215' | '20217' | '20218' | '20219' | '20220' | '20303' | '20304' | '20305' | '20306' | '20307' | '20309' | '20321' | '20323' | '20324' | '20349' | '20350' | '20361' | '20362' | '20363' | '20382' | '20383' | '20384' | '20385' | '20386' | '20388' | '20402' | '20403' | '20404' | '20407' | '20409' | '20410' | '20411' | '20412' | '20413' | '20414' | '20415' | '20416' | '20417' | '20422' | '20423' | '20425' | '20429' | '20430' | '20432' | '20446' | '20448' | '20450' | '20451' | '20452' | '20481' | '20482' | '20485' | '20486' | '20521' | '20541' | '20543' | '20561' | '20562' | '20563' | '20583' | '20588' | '20590' | '20602' | '21201' | '21202' | '21203' | '21204' | '21205' | '21206' | '21207' | '21208' | '21209' | '21210' | '21211' | '21212' | '21213' | '21214' | '21215' | '21216' | '21217' | '21218' | '21219' | '21220' | '21221' | '21302' | '21303' | '21341' | '21361' | '21362' | '21381' | '21382' | '21383' | '21401' | '21403' | '21404' | '21421' | '21501' | '21502' | '21503' | '21504' | '21505' | '21506' | '21507' | '21521' | '21604' | '22100' | '22101' | '22102' | '22103' | '22130' | '22131' | '22132' | '22133' | '22134' | '22135' | '22136' | '22137' | '22203' | '22205' | '22206' | '22207' | '22208' | '22209' | '22210' | '22211' | '22212' | '22213' | '22214' | '22215' | '22216' | '22219' | '22220' | '22221' | '22222' | '22223' | '22224' | '22225' | '22226' | '22301' | '22302' | '22304' | '22305' | '22306' | '22325' | '22341' | '22342' | '22344' | '22424' | '22429' | '22461' | '23100' | '23101' | '23102' | '23103' | '23104' | '23105' | '23106' | '23107' | '23108' | '23109' | '23110' | '23111' | '23112' | '23113' | '23114' | '23115' | '23116' | '23201' | '23202' | '23203' | '23204' | '23205' | '23206' | '23207' | '23208' | '23209' | '23210' | '23211' | '23212' | '23213' | '23214' | '23215' | '23216' | '23217' | '23219' | '23220' | '23221' | '23222' | '23223' | '23224' | '23225' | '23226' | '23227' | '23228' | '23229' | '23230' | '23231' | '23232' | '23233' | '23234' | '23235' | '23236' | '23237' | '23238' | '23302' | '23342' | '23361' | '23362' | '23424' | '23425' | '23427' | '23441' | '23442' | '23445' | '23446' | '23447' | '23501' | '23561' | '23562' | '23563' | '24201' | '24202' | '24203' | '24204' | '24205' | '24207' | '24208' | '24209' | '24210' | '24211' | '24212' | '24214' | '24215' | '24216' | '24303' | '24324' | '24341' | '24343' | '24344' | '24441' | '24442' | '24443' | '24461' | '24470' | '24471' | '24472' | '24543' | '24561' | '24562' | '25201' | '25202' | '25203' | '25204' | '25206' | '25207' | '25208' | '25209' | '25210' | '25211' | '25212' | '25213' | '25214' | '25383' | '25384' | '25425' | '25441' | '25442' | '25443' | '26100' | '26101' | '26102' | '26103' | '26104' | '26105' | '26106' | '26107' | '26108' | '26109' | '26110' | '26111' | '26201' | '26202' | '26203' | '26204' | '26205' | '26206' | '26207' | '26208' | '26209' | '26210' | '26211' | '26212' | '26213' | '26214' | '26303' | '26322' | '26343' | '26344' | '26364' | '26365' | '26366' | '26367' | '26407' | '26463' | '26465' | '27100' | '27102' | '27103' | '27104' | '27106' | '27107' | '27108' | '27109' | '27111' | '27113' | '27114' | '27115' | '27116' | '27117' | '27118' | '27119' | '27120' | '27121' | '27122' | '27123' | '27124' | '27125' | '27126' | '27127' | '27128' | '27140' | '27141' | '27142' | '27143' | '27144' | '27145' | '27146' | '27147' | '27202' | '27203' | '27204' | '27205' | '27206' | '27207' | '27208' | '27209' | '27210' | '27211' | '27212' | '27213' | '27214' | '27215' | '27216' | '27217' | '27218' | '27219' | '27220' | '27221' | '27222' | '27223' | '27224' | '27225' | '27226' | '27227' | '27228' | '27229' | '27230' | '27231' | '27232' | '27301' | '27321' | '27322' | '27341' | '27361' | '27362' | '27366' | '27381' | '27382' | '27383' | '28100' | '28101' | '28102' | '28105' | '28106' | '28107' | '28108' | '28109' | '28110' | '28111' | '28201' | '28202' | '28203' | '28204' | '28205' | '28206' | '28207' | '28208' | '28209' | '28210' | '28212' | '28213' | '28214' | '28215' | '28216' | '28217' | '28218' | '28219' | '28220' | '28221' | '28222' | '28223' | '28224' | '28225' | '28226' | '28227' | '28228' | '28229' | '28301' | '28365' | '28381' | '28382' | '28442' | '28443' | '28446' | '28464' | '28481' | '28501' | '28585' | '28586' | '29201' | '29202' | '29203' | '29204' | '29205' | '29206' | '29207' | '29208' | '29209' | '29210' | '29211' | '29212' | '29322' | '29342' | '29343' | '29344' | '29345' | '29361' | '29362' | '29363' | '29385' | '29386' | '29401' | '29402' | '29424' | '29425' | '29426' | '29427' | '29441' | '29442' | '29443' | '29444' | '29446' | '29447' | '29449' | '29450' | '29451' | '29452' | '29453' | '30201' | '30202' | '30203' | '30204' | '30205' | '30206' | '30207' | '30208' | '30209' | '30304' | '30341' | '30343' | '30344' | '30361' | '30362' | '30366' | '30381' | '30382' | '30383' | '30390' | '30391' | '30392' | '30401' | '30404' | '30406' | '30421' | '30422' | '30424' | '30427' | '30428' | '31201' | '31202' | '31203' | '31204' | '31302' | '31325' | '31328' | '31329' | '31364' | '31370' | '31371' | '31372' | '31384' | '31386' | '31389' | '31390' | '31401' | '31402' | '31403' | '32201' | '32202' | '32203' | '32204' | '32205' | '32206' | '32207' | '32209' | '32343' | '32386' | '32441' | '32448' | '32449' | '32501' | '32505' | '32525' | '32526' | '32527' | '32528' | '33100' | '33101' | '33102' | '33103' | '33104' | '33202' | '33203' | '33204' | '33205' | '33207' | '33208' | '33209' | '33210' | '33211' | '33212' | '33213' | '33214' | '33215' | '33216' | '33346' | '33423' | '33445' | '33461' | '33586' | '33606' | '33622' | '33623' | '33643' | '33663' | '33666' | '33681' | '34100' | '34101' | '34102' | '34103' | '34104' | '34105' | '34106' | '34107' | '34108' | '34202' | '34203' | '34204' | '34205' | '34207' | '34208' | '34209' | '34210' | '34211' | '34212' | '34213' | '34214' | '34215' | '34302' | '34304' | '34307' | '34309' | '34368' | '34369' | '34431' | '34462' | '34545' | '35201' | '35202' | '35203' | '35204' | '35206' | '35207' | '35208' | '35210' | '35211' | '35212' | '35213' | '35215' | '35216' | '35305' | '35321' | '35341' | '35343' | '35344' | '35502' | '36201' | '36202' | '36203' | '36204' | '36205' | '36206' | '36207' | '36208' | '36301' | '36302' | '36321' | '36341' | '36342' | '36368' | '36383' | '36387' | '36388' | '36401' | '36402' | '36403' | '36404' | '36405' | '36468' | '36489' | '37201' | '37202' | '37203' | '37204' | '37205' | '37206' | '37207' | '37208' | '37322' | '37324' | '37341' | '37364' | '37386' | '37387' | '37403' | '37404' | '37406' | '38201' | '38202' | '38203' | '38204' | '38205' | '38206' | '38207' | '38210' | '38213' | '38214' | '38215' | '38356' | '38386' | '38401' | '38402' | '38422' | '38442' | '38484' | '38488' | '38506' | '39201' | '39202' | '39203' | '39204' | '39205' | '39206' | '39208' | '39209' | '39210' | '39211' | '39212' | '39301' | '39302' | '39303' | '39304' | '39305' | '39306' | '39307' | '39341' | '39344' | '39363' | '39364' | '39386' | '39387' | '39401' | '39402' | '39403' | '39405' | '39410' | '39411' | '39412' | '39424' | '39427' | '39428' | '40100' | '40101' | '40103' | '40105' | '40106' | '40107' | '40108' | '40109' | '40130' | '40131' | '40132' | '40133' | '40134' | '40135' | '40136' | '40137' | '40202' | '40203' | '40204' | '40205' | '40206' | '40207' | '40210' | '40211' | '40212' | '40213' | '40214' | '40215' | '40216' | '40217' | '40218' | '40219' | '40220' | '40221' | '40223' | '40224' | '40225' | '40226' | '40227' | '40228' | '40229' | '40230' | '40231' | '40341' | '40342' | '40343' | '40344' | '40345' | '40348' | '40349' | '40381' | '40382' | '40383' | '40384' | '40401' | '40402' | '40421' | '40447' | '40448' | '40503' | '40522' | '40544' | '40601' | '40602' | '40604' | '40605' | '40608' | '40609' | '40610' | '40621' | '40625' | '40642' | '40646' | '40647' | '41201' | '41202' | '41203' | '41204' | '41205' | '41206' | '41207' | '41208' | '41209' | '41210' | '41327' | '41341' | '41345' | '41346' | '41387' | '41401' | '41423' | '41424' | '41425' | '41441' | '42201' | '42202' | '42203' | '42204' | '42205' | '42207' | '42208' | '42209' | '42210' | '42211' | '42212' | '42213' | '42214' | '42307' | '42308' | '42321' | '42322' | '42323' | '42383' | '42391' | '42411' | '43100' | '43101' | '43102' | '43103' | '43104' | '43105' | '43202' | '43203' | '43204' | '43205' | '43206' | '43208' | '43210' | '43211' | '43212' | '43213' | '43214' | '43215' | '43216' | '43348' | '43364' | '43367' | '43368' | '43369' | '43403' | '43404' | '43423' | '43424' | '43425' | '43428' | '43432' | '43433' | '43441' | '43442' | '43443' | '43444' | '43447' | '43468' | '43482' | '43484' | '43501' | '43505' | '43506' | '43507' | '43510' | '43511' | '43512' | '43513' | '43514' | '43531' | '44201' | '44202' | '44203' | '44204' | '44205' | '44206' | '44207' | '44208' | '44209' | '44210' | '44211' | '44212' | '44213' | '44214' | '44322' | '44341' | '44461' | '44462' | '45201' | '45202' | '45203' | '45204' | '45205' | '45206' | '45207' | '45208' | '45209' | '45341' | '45361' | '45382' | '45383' | '45401' | '45402' | '45403' | '45404' | '45405' | '45406' | '45421' | '45429' | '45430' | '45431' | '45441' | '45442' | '45443' | '46201' | '46203' | '46204' | '46206' | '46208' | '46210' | '46213' | '46214' | '46215' | '46216' | '46217' | '46218' | '46219' | '46220' | '46221' | '46222' | '46223' | '46224' | '46225' | '46303' | '46304' | '46392' | '46404' | '46452' | '46468' | '46482' | '46490' | '46491' | '46492' | '46501' | '46502' | '46505' | '46523' | '46524' | '46525' | '46527' | '46529' | '46530' | '46531' | '46532' | '46533' | '46534' | '46535' | '47201' | '47205' | '47207' | '47208' | '47209' | '47210' | '47211' | '47212' | '47213' | '47214' | '47215' | '47301' | '47302' | '47303' | '47306' | '47308' | '47311' | '47313' | '47314' | '47315' | '47324' | '47325' | '47326' | '47327' | '47328' | '47329' | '47348' | '47350' | '47353' | '47354' | '47355' | '47356' | '47357' | '47358' | '47359' | '47360' | '47361' | '47362' | '47375' | '47381' | '47382');
                sub_area_nm?: ('札幌市' | '札幌市中央区' | '札幌市北区' | '札幌市東区' | '札幌市白石区' | '札幌市豊平区' | '札幌市南区' | '札幌市西区' | '札幌市厚別区' | '札幌市手稲区' | '札幌市清田区' | '函館市' | '小樽市' | '旭川市' | '室蘭市' | '釧路市' | '帯広市' | '北見市' | '夕張市' | '岩見沢市' | '網走市' | '留萌市' | '苫小牧市' | '稚内市' | '美唄市' | '芦別市' | '江別市' | '赤平市' | '紋別市' | '士別市' | '名寄市' | '三笠市' | '根室市' | '千歳市' | '滝川市' | '砂川市' | '歌志内市' | '深川市' | '富良野市' | '登別市' | '恵庭市' | '伊達市' | '北広島市' | '石狩市' | '北斗市' | '石狩郡当別町' | '石狩郡新篠津村' | '松前郡松前町' | '松前郡福島町' | '上磯郡知内町' | '上磯郡木古内町' | '亀田郡七飯町' | '茅部郡鹿部町' | '茅部郡森町' | '二海郡八雲町' | '山越郡長万部町' | '檜山郡江差町' | '檜山郡上ノ国町' | '檜山郡厚沢部町' | '爾志郡乙部町' | '奥尻郡奥尻町' | '瀬棚郡今金町' | '久遠郡せたな町' | '島牧郡島牧村' | '寿都郡寿都町' | '寿都郡黒松内町' | '磯谷郡蘭越町' | '虻田郡ニセコ町' | '虻田郡真狩村' | '虻田郡留寿都村' | '虻田郡喜茂別町' | '虻田郡京極町' | '虻田郡倶知安町' | '岩内郡共和町' | '岩内郡岩内町' | '古宇郡泊村' | '古宇郡神恵内村' | '積丹郡積丹町' | '古平郡古平町' | '余市郡仁木町' | '余市郡余市町' | '余市郡赤井川村' | '空知郡南幌町' | '空知郡奈井江町' | '空知郡上砂川町' | '夕張郡由仁町' | '夕張郡長沼町' | '夕張郡栗山町' | '樺戸郡月形町' | '樺戸郡浦臼町' | '樺戸郡新十津川町' | '雨竜郡妹背牛町' | '雨竜郡秩父別町' | '雨竜郡雨竜町' | '雨竜郡北竜町' | '雨竜郡沼田町' | '上川郡鷹栖町' | '上川郡東神楽町' | '上川郡当麻町' | '上川郡比布町' | '上川郡愛別町' | '上川郡上川町' | '上川郡東川町' | '上川郡美瑛町' | '空知郡上富良野町' | '空知郡中富良野町' | '空知郡南富良野町' | '勇払郡占冠村' | '上川郡和寒町' | '上川郡剣淵町' | '上川郡下川町' | '中川郡美深町' | '中川郡音威子府村' | '中川郡中川町' | '雨竜郡幌加内町' | '増毛郡増毛町' | '留萌郡小平町' | '苫前郡苫前町' | '苫前郡羽幌町' | '苫前郡初山別村' | '天塩郡遠別町' | '天塩郡天塩町' | '宗谷郡猿払村' | '枝幸郡浜頓別町' | '枝幸郡中頓別町' | '枝幸郡枝幸町' | '天塩郡豊富町' | '礼文郡礼文町' | '利尻郡利尻町' | '利尻郡利尻富士町' | '天塩郡幌延町' | '網走郡美幌町' | '網走郡津別町' | '斜里郡斜里町' | '斜里郡清里町' | '斜里郡小清水町' | '常呂郡訓子府町' | '常呂郡置戸町' | '常呂郡佐呂間町' | '紋別郡遠軽町' | '紋別郡湧別町' | '紋別郡滝上町' | '紋別郡興部町' | '紋別郡西興部村' | '紋別郡雄武町' | '網走郡大空町' | '虻田郡豊浦町' | '有珠郡壮瞥町' | '白老郡白老町' | '勇払郡厚真町' | '虻田郡洞爺湖町' | '勇払郡安平町' | '勇払郡むかわ町' | '沙流郡日高町' | '沙流郡平取町' | '新冠郡新冠町' | '浦河郡浦河町' | '様似郡様似町' | '幌泉郡えりも町' | '日高郡新ひだか町' | '河東郡音更町' | '河東郡士幌町' | '河東郡上士幌町' | '河東郡鹿追町' | '上川郡新得町' | '上川郡清水町' | '河西郡芽室町' | '河西郡中札内村' | '河西郡更別村' | '広尾郡大樹町' | '広尾郡広尾町' | '中川郡幕別町' | '中川郡池田町' | '中川郡豊頃町' | '中川郡本別町' | '足寄郡足寄町' | '足寄郡陸別町' | '十勝郡浦幌町' | '釧路郡釧路町' | '厚岸郡厚岸町' | '厚岸郡浜中町' | '川上郡標茶町' | '川上郡弟子屈町' | '阿寒郡鶴居村' | '白糠郡白糠町' | '野付郡別海町' | '標津郡中標津町' | '標津郡標津町' | '目梨郡羅臼町' | '青森市' | '弘前市' | '八戸市' | '黒石市' | '五所川原市' | '十和田市' | '三沢市' | 'むつ市' | 'つがる市' | '平川市' | '東津軽郡平内町' | '東津軽郡今別町' | '東津軽郡蓬田村' | '東津軽郡外ヶ浜町' | '西津軽郡鰺ヶ沢町' | '西津軽郡深浦町' | '中津軽郡西目屋村' | '南津軽郡藤崎町' | '南津軽郡大鰐町' | '南津軽郡田舎館村' | '北津軽郡板柳町' | '北津軽郡鶴田町' | '北津軽郡中泊町' | '上北郡野辺地町' | '上北郡七戸町' | '上北郡六戸町' | '上北郡横浜町' | '上北郡東北町' | '上北郡六ヶ所村' | '上北郡おいらせ町' | '下北郡大間町' | '下北郡東通村' | '下北郡風間浦村' | '下北郡佐井村' | '三戸郡三戸町' | '三戸郡五戸町' | '三戸郡田子町' | '三戸郡南部町' | '三戸郡階上町' | '三戸郡新郷村' | '盛岡市' | '宮古市' | '大船渡市' | '花巻市' | '北上市' | '久慈市' | '遠野市' | '一関市' | '陸前高田市' | '釜石市' | '二戸市' | '八幡平市' | '奥州市' | '滝沢市' | '岩手郡雫石町' | '岩手郡葛巻町' | '岩手郡岩手町' | '紫波郡紫波町' | '紫波郡矢巾町' | '和賀郡西和賀町' | '胆沢郡金ケ崎町' | '西磐井郡平泉町' | '気仙郡住田町' | '上閉伊郡大槌町' | '下閉伊郡山田町' | '下閉伊郡岩泉町' | '下閉伊郡田野畑村' | '下閉伊郡普代村' | '九戸郡軽米町' | '九戸郡野田村' | '九戸郡九戸村' | '九戸郡洋野町' | '二戸郡一戸町' | '仙台市' | '仙台市青葉区' | '仙台市宮城野区' | '仙台市若林区' | '仙台市太白区' | '仙台市泉区' | '石巻市' | '塩竈市' | '気仙沼市' | '白石市' | '名取市' | '角田市' | '多賀城市' | '岩沼市' | '登米市' | '栗原市' | '東松島市' | '大崎市' | '富谷市' | '刈田郡蔵王町' | '刈田郡七ヶ宿町' | '柴田郡大河原町' | '柴田郡村田町' | '柴田郡柴田町' | '柴田郡川崎町' | '伊具郡丸森町' | '亘理郡亘理町' | '亘理郡山元町' | '宮城郡松島町' | '宮城郡七ヶ浜町' | '宮城郡利府町' | '黒川郡大和町' | '黒川郡大郷町' | '黒川郡大衡村' | '加美郡色麻町' | '加美郡加美町' | '遠田郡涌谷町' | '遠田郡美里町' | '牡鹿郡女川町' | '本吉郡南三陸町' | '秋田市' | '能代市' | '横手市' | '大館市' | '男鹿市' | '湯沢市' | '鹿角市' | '由利本荘市' | '潟上市' | '大仙市' | '北秋田市' | 'にかほ市' | '仙北市' | '鹿角郡小坂町' | '北秋田郡上小阿仁村' | '山本郡藤里町' | '山本郡三種町' | '山本郡八峰町' | '南秋田郡五城目町' | '南秋田郡八郎潟町' | '南秋田郡井川町' | '南秋田郡大潟村' | '仙北郡美郷町' | '雄勝郡羽後町' | '雄勝郡東成瀬村' | '山形市' | '米沢市' | '鶴岡市' | '酒田市' | '新庄市' | '寒河江市' | '上山市' | '村山市' | '長井市' | '天童市' | '東根市' | '尾花沢市' | '南陽市' | '東村山郡山辺町' | '東村山郡中山町' | '西村山郡河北町' | '西村山郡西川町' | '西村山郡朝日町' | '西村山郡大江町' | '北村山郡大石田町' | '最上郡金山町' | '最上郡最上町' | '最上郡舟形町' | '最上郡真室川町' | '最上郡大蔵村' | '最上郡鮭川村' | '最上郡戸沢村' | '東置賜郡高畠町' | '東置賜郡川西町' | '西置賜郡小国町' | '西置賜郡白鷹町' | '西置賜郡飯豊町' | '東田川郡三川町' | '東田川郡庄内町' | '飽海郡遊佐町' | '福島市' | '会津若松市' | '郡山市' | 'いわき市' | '白河市' | '須賀川市' | '喜多方市' | '相馬市' | '二本松市' | '田村市' | '南相馬市' | '本宮市' | '伊達郡桑折町' | '伊達郡国見町' | '伊達郡川俣町' | '安達郡大玉村' | '岩瀬郡鏡石町' | '岩瀬郡天栄村' | '南会津郡下郷町' | '南会津郡檜枝岐村' | '南会津郡只見町' | '南会津郡南会津町' | '耶麻郡北塩原村' | '耶麻郡西会津町' | '耶麻郡磐梯町' | '耶麻郡猪苗代町' | '河沼郡会津坂下町' | '河沼郡湯川村' | '河沼郡柳津町' | '大沼郡三島町' | '大沼郡金山町' | '大沼郡昭和村' | '大沼郡会津美里町' | '西白河郡西郷村' | '西白河郡泉崎村' | '西白河郡中島村' | '西白河郡矢吹町' | '東白川郡棚倉町' | '東白川郡矢祭町' | '東白川郡塙町' | '東白川郡鮫川村' | '石川郡石川町' | '石川郡玉川村' | '石川郡平田村' | '石川郡浅川町' | '石川郡古殿町' | '田村郡三春町' | '田村郡小野町' | '双葉郡広野町' | '双葉郡楢葉町' | '双葉郡富岡町' | '双葉郡川内村' | '双葉郡大熊町' | '双葉郡双葉町' | '双葉郡浪江町' | '双葉郡葛尾村' | '相馬郡新地町' | '相馬郡飯舘村' | '水戸市' | '日立市' | '土浦市' | '古河市' | '石岡市' | '結城市' | '龍ケ崎市' | '下妻市' | '常総市' | '常陸太田市' | '高萩市' | '北茨城市' | '笠間市' | '取手市' | '牛久市' | 'つくば市' | 'ひたちなか市' | '鹿嶋市' | '潮来市' | '守谷市' | '常陸大宮市' | '那珂市' | '筑西市' | '坂東市' | '稲敷市' | 'かすみがうら市' | '桜川市' | '神栖市' | '行方市' | '鉾田市' | 'つくばみらい市' | '小美玉市' | '東茨城郡茨城町' | '東茨城郡大洗町' | '東茨城郡城里町' | '那珂郡東海村' | '久慈郡大子町' | '稲敷郡美浦村' | '稲敷郡阿見町' | '稲敷郡河内町' | '結城郡八千代町' | '猿島郡五霞町' | '猿島郡境町' | '北相馬郡利根町' | '宇都宮市' | '足利市' | '栃木市' | '佐野市' | '鹿沼市' | '日光市' | '小山市' | '真岡市' | '大田原市' | '矢板市' | '那須塩原市' | 'さくら市' | '那須烏山市' | '下野市' | '河内郡上三川町' | '芳賀郡益子町' | '芳賀郡茂木町' | '芳賀郡市貝町' | '芳賀郡芳賀町' | '下都賀郡壬生町' | '下都賀郡野木町' | '塩谷郡塩谷町' | '塩谷郡高根沢町' | '那須郡那須町' | '那須郡那珂川町' | '前橋市' | '高崎市' | '桐生市' | '伊勢崎市' | '太田市' | '沼田市' | '館林市' | '渋川市' | '藤岡市' | '富岡市' | '安中市' | 'みどり市' | '北群馬郡榛東村' | '北群馬郡吉岡町' | '多野郡上野村' | '多野郡神流町' | '甘楽郡下仁田町' | '甘楽郡南牧村' | '甘楽郡甘楽町' | '吾妻郡中之条町' | '吾妻郡長野原町' | '吾妻郡嬬恋村' | '吾妻郡草津町' | '吾妻郡高山村' | '吾妻郡東吾妻町' | '利根郡片品村' | '利根郡川場村' | '利根郡昭和村' | '利根郡みなかみ町' | '佐波郡玉村町' | '邑楽郡板倉町' | '邑楽郡明和町' | '邑楽郡千代田町' | '邑楽郡大泉町' | '邑楽郡邑楽町' | 'さいたま市' | 'さいたま市西区' | 'さいたま市北区' | 'さいたま市大宮区' | 'さいたま市見沼区' | 'さいたま市中央区' | 'さいたま市桜区' | 'さいたま市浦和区' | 'さいたま市南区' | 'さいたま市緑区' | 'さいたま市岩槻区' | '川越市' | '熊谷市' | '川口市' | '行田市' | '秩父市' | '所沢市' | '飯能市' | '加須市' | '本庄市' | '東松山市' | '春日部市' | '狭山市' | '羽生市' | '鴻巣市' | '深谷市' | '上尾市' | '草加市' | '越谷市' | '蕨市' | '戸田市' | '入間市' | '朝霞市' | '志木市' | '和光市' | '新座市' | '桶川市' | '久喜市' | '北本市' | '八潮市' | '富士見市' | '三郷市' | '蓮田市' | '坂戸市' | '幸手市' | '鶴ヶ島市' | '日高市' | '吉川市' | 'ふじみ野市' | '白岡市' | '北足立郡伊奈町' | '入間郡三芳町' | '入間郡毛呂山町' | '入間郡越生町' | '比企郡滑川町' | '比企郡嵐山町' | '比企郡小川町' | '比企郡川島町' | '比企郡吉見町' | '比企郡鳩山町' | '比企郡ときがわ町' | '秩父郡横瀬町' | '秩父郡皆野町' | '秩父郡長瀞町' | '秩父郡小鹿野町' | '秩父郡東秩父村' | '児玉郡美里町' | '児玉郡神川町' | '児玉郡上里町' | '大里郡寄居町' | '南埼玉郡宮代町' | '北葛飾郡杉戸町' | '北葛飾郡松伏町' | '千葉市' | '千葉市中央区' | '千葉市花見川区' | '千葉市稲毛区' | '千葉市若葉区' | '千葉市緑区' | '千葉市美浜区' | '銚子市' | '市川市' | '船橋市' | '館山市' | '木更津市' | '松戸市' | '野田市' | '茂原市' | '成田市' | '佐倉市' | '東金市' | '旭市' | '習志野市' | '柏市' | '勝浦市' | '市原市' | '流山市' | '八千代市' | '我孫子市' | '鴨川市' | '鎌ケ谷市' | '君津市' | '富津市' | '浦安市' | '四街道市' | '袖ケ浦市' | '八街市' | '印西市' | '白井市' | '富里市' | '南房総市' | '匝瑳市' | '香取市' | '山武市' | 'いすみ市' | '大網白里市' | '印旛郡酒々井町' | '印旛郡栄町' | '香取郡神崎町' | '香取郡多古町' | '香取郡東庄町' | '山武郡九十九里町' | '山武郡芝山町' | '山武郡横芝光町' | '長生郡一宮町' | '長生郡睦沢町' | '長生郡長生村' | '長生郡白子町' | '長生郡長柄町' | '長生郡長南町' | '夷隅郡大多喜町' | '夷隅郡御宿町' | '安房郡鋸南町' | '千代田区' | '中央区' | '港区' | '新宿区' | '文京区' | '台東区' | '墨田区' | '江東区' | '品川区' | '目黒区' | '大田区' | '世田谷区' | '渋谷区' | '中野区' | '杉並区' | '豊島区' | '北区' | '荒川区' | '板橋区' | '練馬区' | '足立区' | '葛飾区' | '江戸川区' | '八王子市' | '立川市' | '武蔵野市' | '三鷹市' | '青梅市' | '府中市' | '昭島市' | '調布市' | '町田市' | '小金井市' | '小平市' | '日野市' | '東村山市' | '国分寺市' | '国立市' | '福生市' | '狛江市' | '東大和市' | '清瀬市' | '東久留米市' | '武蔵村山市' | '多摩市' | '稲城市' | '羽村市' | 'あきる野市' | '西東京市' | '西多摩郡瑞穂町' | '西多摩郡日の出町' | '西多摩郡檜原村' | '西多摩郡奥多摩町' | '大島町' | '利島村' | '新島村' | '神津島村' | '三宅島三宅村' | '御蔵島村' | '八丈島八丈町' | '青ヶ島村' | '小笠原諸島小笠原村' | '横浜市' | '横浜市鶴見区' | '横浜市神奈川区' | '横浜市西区' | '横浜市中区' | '横浜市南区' | '横浜市保土ケ谷区' | '横浜市磯子区' | '横浜市金沢区' | '横浜市港北区' | '横浜市戸塚区' | '横浜市港南区' | '横浜市旭区' | '横浜市緑区' | '横浜市瀬谷区' | '横浜市栄区' | '横浜市泉区' | '横浜市青葉区' | '横浜市都筑区' | '川崎市' | '川崎市川崎区' | '川崎市幸区' | '川崎市中原区' | '川崎市高津区' | '川崎市多摩区' | '川崎市宮前区' | '川崎市麻生区' | '相模原市' | '相模原市緑区' | '相模原市中央区' | '相模原市南区' | '横須賀市' | '平塚市' | '鎌倉市' | '藤沢市' | '小田原市' | '茅ヶ崎市' | '逗子市' | '三浦市' | '秦野市' | '厚木市' | '大和市' | '伊勢原市' | '海老名市' | '座間市' | '南足柄市' | '綾瀬市' | '三浦郡葉山町' | '高座郡寒川町' | '中郡大磯町' | '中郡二宮町' | '足柄上郡中井町' | '足柄上郡大井町' | '足柄上郡松田町' | '足柄上郡山北町' | '足柄上郡開成町' | '足柄下郡箱根町' | '足柄下郡真鶴町' | '足柄下郡湯河原町' | '愛甲郡愛川町' | '愛甲郡清川村' | '新潟市' | '新潟市北区' | '新潟市東区' | '新潟市中央区' | '新潟市江南区' | '新潟市秋葉区' | '新潟市南区' | '新潟市西区' | '新潟市西蒲区' | '長岡市' | '三条市' | '柏崎市' | '新発田市' | '小千谷市' | '加茂市' | '十日町市' | '見附市' | '村上市' | '燕市' | '糸魚川市' | '妙高市' | '五泉市' | '上越市' | '阿賀野市' | '佐渡市' | '魚沼市' | '南魚沼市' | '胎内市' | '北蒲原郡聖籠町' | '西蒲原郡弥彦村' | '南蒲原郡田上町' | '東蒲原郡阿賀町' | '三島郡出雲崎町' | '南魚沼郡湯沢町' | '中魚沼郡津南町' | '刈羽郡刈羽村' | '岩船郡関川村' | '岩船郡粟島浦村' | '富山市' | '高岡市' | '魚津市' | '氷見市' | '滑川市' | '黒部市' | '砺波市' | '小矢部市' | '南砺市' | '射水市' | '中新川郡舟橋村' | '中新川郡上市町' | '中新川郡立山町' | '下新川郡入善町' | '下新川郡朝日町' | '金沢市' | '七尾市' | '小松市' | '輪島市' | '珠洲市' | '加賀市' | '羽咋市' | 'かほく市' | '白山市' | '能美市' | '野々市市' | '能美郡川北町' | '河北郡津幡町' | '河北郡内灘町' | '羽咋郡志賀町' | '羽咋郡宝達志水町' | '鹿島郡中能登町' | '鳳珠郡穴水町' | '鳳珠郡能登町' | '福井市' | '敦賀市' | '小浜市' | '大野市' | '勝山市' | '鯖江市' | 'あわら市' | '越前市' | '坂井市' | '吉田郡永平寺町' | '今立郡池田町' | '南条郡南越前町' | '丹生郡越前町' | '三方郡美浜町' | '大飯郡高浜町' | '大飯郡おおい町' | '三方上中郡若狭町' | '甲府市' | '富士吉田市' | '都留市' | '山梨市' | '大月市' | '韮崎市' | '南アルプス市' | '北杜市' | '甲斐市' | '笛吹市' | '上野原市' | '甲州市' | '中央市' | '西八代郡市川三郷町' | '南巨摩郡早川町' | '南巨摩郡身延町' | '南巨摩郡南部町' | '南巨摩郡富士川町' | '中巨摩郡昭和町' | '南都留郡道志村' | '南都留郡西桂町' | '南都留郡忍野村' | '南都留郡山中湖村' | '南都留郡鳴沢村' | '南都留郡富士河口湖町' | '北都留郡小菅村' | '北都留郡丹波山村' | '長野市' | '松本市' | '上田市' | '岡谷市' | '飯田市' | '諏訪市' | '須坂市' | '小諸市' | '伊那市' | '駒ヶ根市' | '中野市' | '大町市' | '飯山市' | '茅野市' | '塩尻市' | '佐久市' | '千曲市' | '東御市' | '安曇野市' | '南佐久郡小海町' | '南佐久郡川上村' | '南佐久郡南牧村' | '南佐久郡南相木村' | '南佐久郡北相木村' | '南佐久郡佐久穂町' | '北佐久郡軽井沢町' | '北佐久郡御代田町' | '北佐久郡立科町' | '小県郡青木村' | '小県郡長和町' | '諏訪郡下諏訪町' | '諏訪郡富士見町' | '諏訪郡原村' | '上伊那郡辰野町' | '上伊那郡箕輪町' | '上伊那郡飯島町' | '上伊那郡南箕輪村' | '上伊那郡中川村' | '上伊那郡宮田村' | '下伊那郡松川町' | '下伊那郡高森町' | '下伊那郡阿南町' | '下伊那郡阿智村' | '下伊那郡平谷村' | '下伊那郡根羽村' | '下伊那郡下條村' | '下伊那郡売木村' | '下伊那郡天龍村' | '下伊那郡泰阜村' | '下伊那郡喬木村' | '下伊那郡豊丘村' | '下伊那郡大鹿村' | '木曽郡上松町' | '木曽郡南木曽町' | '木曽郡木祖村' | '木曽郡王滝村' | '木曽郡大桑村' | '木曽郡木曽町' | '東筑摩郡麻績村' | '東筑摩郡生坂村' | '東筑摩郡山形村' | '東筑摩郡朝日村' | '東筑摩郡筑北村' | '北安曇郡池田町' | '北安曇郡松川村' | '北安曇郡白馬村' | '北安曇郡小谷村' | '埴科郡坂城町' | '上高井郡小布施町' | '上高井郡高山村' | '下高井郡山ノ内町' | '下高井郡木島平村' | '下高井郡野沢温泉村' | '上水内郡信濃町' | '上水内郡小川村' | '上水内郡飯綱町' | '下水内郡栄村' | '岐阜市' | '大垣市' | '高山市' | '多治見市' | '関市' | '中津川市' | '美濃市' | '瑞浪市' | '羽島市' | '恵那市' | '美濃加茂市' | '土岐市' | '各務原市' | '可児市' | '山県市' | '瑞穂市' | '飛騨市' | '本巣市' | '郡上市' | '下呂市' | '海津市' | '羽島郡岐南町' | '羽島郡笠松町' | '養老郡養老町' | '不破郡垂井町' | '不破郡関ケ原町' | '安八郡神戸町' | '安八郡輪之内町' | '安八郡安八町' | '揖斐郡揖斐川町' | '揖斐郡大野町' | '揖斐郡池田町' | '本巣郡北方町' | '加茂郡坂祝町' | '加茂郡富加町' | '加茂郡川辺町' | '加茂郡七宗町' | '加茂郡八百津町' | '加茂郡白川町' | '加茂郡東白川村' | '可児郡御嵩町' | '大野郡白川村' | '静岡市' | '静岡市葵区' | '静岡市駿河区' | '静岡市清水区' | '浜松市' | '浜松市中区' | '浜松市東区' | '浜松市西区' | '浜松市南区' | '浜松市北区' | '浜松市浜北区' | '浜松市天竜区' | '沼津市' | '熱海市' | '三島市' | '富士宮市' | '伊東市' | '島田市' | '富士市' | '磐田市' | '焼津市' | '掛川市' | '藤枝市' | '御殿場市' | '袋井市' | '下田市' | '裾野市' | '湖西市' | '伊豆市' | '御前崎市' | '菊川市' | '伊豆の国市' | '牧之原市' | '賀茂郡東伊豆町' | '賀茂郡河津町' | '賀茂郡南伊豆町' | '賀茂郡松崎町' | '賀茂郡西伊豆町' | '田方郡函南町' | '駿東郡清水町' | '駿東郡長泉町' | '駿東郡小山町' | '榛原郡吉田町' | '榛原郡川根本町' | '周智郡森町' | '名古屋市' | '名古屋市千種区' | '名古屋市東区' | '名古屋市北区' | '名古屋市西区' | '名古屋市中村区' | '名古屋市中区' | '名古屋市昭和区' | '名古屋市瑞穂区' | '名古屋市熱田区' | '名古屋市中川区' | '名古屋市港区' | '名古屋市南区' | '名古屋市守山区' | '名古屋市緑区' | '名古屋市名東区' | '名古屋市天白区' | '豊橋市' | '岡崎市' | '一宮市' | '瀬戸市' | '半田市' | '春日井市' | '豊川市' | '津島市' | '碧南市' | '刈谷市' | '豊田市' | '安城市' | '西尾市' | '蒲郡市' | '犬山市' | '常滑市' | '江南市' | '小牧市' | '稲沢市' | '新城市' | '東海市' | '大府市' | '知多市' | '知立市' | '尾張旭市' | '高浜市' | '岩倉市' | '豊明市' | '日進市' | '田原市' | '愛西市' | '清須市' | '北名古屋市' | '弥富市' | 'みよし市' | 'あま市' | '長久手市' | '愛知郡東郷町' | '西春日井郡豊山町' | '丹羽郡大口町' | '丹羽郡扶桑町' | '海部郡大治町' | '海部郡蟹江町' | '海部郡飛島村' | '知多郡阿久比町' | '知多郡東浦町' | '知多郡南知多町' | '知多郡美浜町' | '知多郡武豊町' | '額田郡幸田町' | '北設楽郡設楽町' | '北設楽郡東栄町' | '北設楽郡豊根村' | '津市' | '四日市市' | '伊勢市' | '松阪市' | '桑名市' | '鈴鹿市' | '名張市' | '尾鷲市' | '亀山市' | '鳥羽市' | '熊野市' | 'いなべ市' | '志摩市' | '伊賀市' | '桑名郡木曽岬町' | '員弁郡東員町' | '三重郡菰野町' | '三重郡朝日町' | '三重郡川越町' | '多気郡多気町' | '多気郡明和町' | '多気郡大台町' | '度会郡玉城町' | '度会郡度会町' | '度会郡大紀町' | '度会郡南伊勢町' | '北牟婁郡紀北町' | '南牟婁郡御浜町' | '南牟婁郡紀宝町' | '大津市' | '彦根市' | '長浜市' | '近江八幡市' | '草津市' | '守山市' | '栗東市' | '甲賀市' | '野洲市' | '湖南市' | '高島市' | '東近江市' | '米原市' | '蒲生郡日野町' | '蒲生郡竜王町' | '愛知郡愛荘町' | '犬上郡豊郷町' | '犬上郡甲良町' | '犬上郡多賀町' | '京都市' | '京都市北区' | '京都市上京区' | '京都市左京区' | '京都市中京区' | '京都市東山区' | '京都市下京区' | '京都市南区' | '京都市右京区' | '京都市伏見区' | '京都市山科区' | '京都市西京区' | '福知山市' | '舞鶴市' | '綾部市' | '宇治市' | '宮津市' | '亀岡市' | '城陽市' | '向日市' | '長岡京市' | '八幡市' | '京田辺市' | '京丹後市' | '南丹市' | '木津川市' | '乙訓郡大山崎町' | '久世郡久御山町' | '綴喜郡井手町' | '綴喜郡宇治田原町' | '相楽郡笠置町' | '相楽郡和束町' | '相楽郡精華町' | '相楽郡南山城村' | '船井郡京丹波町' | '与謝郡伊根町' | '与謝郡与謝野町' | '大阪市' | '大阪市都島区' | '大阪市福島区' | '大阪市此花区' | '大阪市西区' | '大阪市港区' | '大阪市大正区' | '大阪市天王寺区' | '大阪市浪速区' | '大阪市西淀川区' | '大阪市東淀川区' | '大阪市東成区' | '大阪市生野区' | '大阪市旭区' | '大阪市城東区' | '大阪市阿倍野区' | '大阪市住吉区' | '大阪市東住吉区' | '大阪市西成区' | '大阪市淀川区' | '大阪市鶴見区' | '大阪市住之江区' | '大阪市平野区' | '大阪市北区' | '大阪市中央区' | '堺市' | '堺市堺区' | '堺市中区' | '堺市東区' | '堺市西区' | '堺市南区' | '堺市北区' | '堺市美原区' | '岸和田市' | '豊中市' | '池田市' | '吹田市' | '泉大津市' | '高槻市' | '貝塚市' | '守口市' | '枚方市' | '茨木市' | '八尾市' | '泉佐野市' | '富田林市' | '寝屋川市' | '河内長野市' | '松原市' | '大東市' | '和泉市' | '箕面市' | '柏原市' | '羽曳野市' | '門真市' | '摂津市' | '高石市' | '藤井寺市' | '東大阪市' | '泉南市' | '四條畷市' | '交野市' | '大阪狭山市' | '阪南市' | '三島郡島本町' | '豊能郡豊能町' | '豊能郡能勢町' | '泉北郡忠岡町' | '泉南郡熊取町' | '泉南郡田尻町' | '泉南郡岬町' | '南河内郡太子町' | '南河内郡河南町' | '南河内郡千早赤阪村' | '神戸市' | '神戸市東灘区' | '神戸市灘区' | '神戸市兵庫区' | '神戸市長田区' | '神戸市須磨区' | '神戸市垂水区' | '神戸市北区' | '神戸市中央区' | '神戸市西区' | '姫路市' | '尼崎市' | '明石市' | '西宮市' | '洲本市' | '芦屋市' | '伊丹市' | '相生市' | '豊岡市' | '加古川市' | '赤穂市' | '西脇市' | '宝塚市' | '三木市' | '高砂市' | '川西市' | '小野市' | '三田市' | '加西市' | '丹波篠山市' | '養父市' | '丹波市' | '南あわじ市' | '朝来市' | '淡路市' | '宍粟市' | '加東市' | 'たつの市' | '川辺郡猪名川町' | '多可郡多可町' | '加古郡稲美町' | '加古郡播磨町' | '神崎郡市川町' | '神崎郡福崎町' | '神崎郡神河町' | '揖保郡太子町' | '赤穂郡上郡町' | '佐用郡佐用町' | '美方郡香美町' | '美方郡新温泉町' | '奈良市' | '大和高田市' | '大和郡山市' | '天理市' | '橿原市' | '桜井市' | '五條市' | '御所市' | '生駒市' | '香芝市' | '葛城市' | '宇陀市' | '山辺郡山添村' | '生駒郡平群町' | '生駒郡三郷町' | '生駒郡斑鳩町' | '生駒郡安堵町' | '磯城郡川西町' | '磯城郡三宅町' | '磯城郡田原本町' | '宇陀郡曽爾村' | '宇陀郡御杖村' | '高市郡高取町' | '高市郡明日香村' | '北葛城郡上牧町' | '北葛城郡王寺町' | '北葛城郡広陵町' | '北葛城郡河合町' | '吉野郡吉野町' | '吉野郡大淀町' | '吉野郡下市町' | '吉野郡黒滝村' | '吉野郡天川村' | '吉野郡野迫川村' | '吉野郡十津川村' | '吉野郡下北山村' | '吉野郡上北山村' | '吉野郡川上村' | '吉野郡東吉野村' | '和歌山市' | '海南市' | '橋本市' | '有田市' | '御坊市' | '田辺市' | '新宮市' | '紀の川市' | '岩出市' | '海草郡紀美野町' | '伊都郡かつらぎ町' | '伊都郡九度山町' | '伊都郡高野町' | '有田郡湯浅町' | '有田郡広川町' | '有田郡有田川町' | '日高郡美浜町' | '日高郡日高町' | '日高郡由良町' | '日高郡印南町' | '日高郡みなべ町' | '日高郡日高川町' | '西牟婁郡白浜町' | '西牟婁郡上富田町' | '西牟婁郡すさみ町' | '東牟婁郡那智勝浦町' | '東牟婁郡太地町' | '東牟婁郡古座川町' | '東牟婁郡北山村' | '東牟婁郡串本町' | '鳥取市' | '米子市' | '倉吉市' | '境港市' | '岩美郡岩美町' | '八頭郡若桜町' | '八頭郡智頭町' | '八頭郡八頭町' | '東伯郡三朝町' | '東伯郡湯梨浜町' | '東伯郡琴浦町' | '東伯郡北栄町' | '西伯郡日吉津村' | '西伯郡大山町' | '西伯郡南部町' | '西伯郡伯耆町' | '日野郡日南町' | '日野郡日野町' | '日野郡江府町' | '松江市' | '浜田市' | '出雲市' | '益田市' | '大田市' | '安来市' | '江津市' | '雲南市' | '仁多郡奥出雲町' | '飯石郡飯南町' | '邑智郡川本町' | '邑智郡美郷町' | '邑智郡邑南町' | '鹿足郡津和野町' | '鹿足郡吉賀町' | '隠岐郡海士町' | '隠岐郡西ノ島町' | '隠岐郡知夫村' | '隠岐郡隠岐の島町' | '岡山市' | '岡山市北区' | '岡山市中区' | '岡山市東区' | '岡山市南区' | '倉敷市' | '津山市' | '玉野市' | '笠岡市' | '井原市' | '総社市' | '高梁市' | '新見市' | '備前市' | '瀬戸内市' | '赤磐市' | '真庭市' | '美作市' | '浅口市' | '和気郡和気町' | '都窪郡早島町' | '浅口郡里庄町' | '小田郡矢掛町' | '真庭郡新庄村' | '苫田郡鏡野町' | '勝田郡勝央町' | '勝田郡奈義町' | '英田郡西粟倉村' | '久米郡久米南町' | '久米郡美咲町' | '加賀郡吉備中央町' | '広島市' | '広島市中区' | '広島市東区' | '広島市南区' | '広島市西区' | '広島市安佐南区' | '広島市安佐北区' | '広島市安芸区' | '広島市佐伯区' | '呉市' | '竹原市' | '三原市' | '尾道市' | '福山市' | '三次市' | '庄原市' | '大竹市' | '東広島市' | '廿日市市' | '安芸高田市' | '江田島市' | '安芸郡府中町' | '安芸郡海田町' | '安芸郡熊野町' | '安芸郡坂町' | '山県郡安芸太田町' | '山県郡北広島町' | '豊田郡大崎上島町' | '世羅郡世羅町' | '神石郡神石高原町' | '下関市' | '宇部市' | '山口市' | '萩市' | '防府市' | '下松市' | '岩国市' | '光市' | '長門市' | '柳井市' | '美祢市' | '周南市' | '山陽小野田市' | '大島郡周防大島町' | '玖珂郡和木町' | '熊毛郡上関町' | '熊毛郡田布施町' | '熊毛郡平生町' | '阿武郡阿武町' | '徳島市' | '鳴門市' | '小松島市' | '阿南市' | '吉野川市' | '阿波市' | '美馬市' | '三好市' | '勝浦郡勝浦町' | '勝浦郡上勝町' | '名東郡佐那河内村' | '名西郡石井町' | '名西郡神山町' | '那賀郡那賀町' | '海部郡牟岐町' | '海部郡美波町' | '海部郡海陽町' | '板野郡松茂町' | '板野郡北島町' | '板野郡藍住町' | '板野郡板野町' | '板野郡上板町' | '美馬郡つるぎ町' | '三好郡東みよし町' | '高松市' | '丸亀市' | '坂出市' | '善通寺市' | '観音寺市' | 'さぬき市' | '東かがわ市' | '三豊市' | '小豆郡土庄町' | '小豆郡小豆島町' | '木田郡三木町' | '香川郡直島町' | '綾歌郡宇多津町' | '綾歌郡綾川町' | '仲多度郡琴平町' | '仲多度郡多度津町' | '仲多度郡まんのう町' | '松山市' | '今治市' | '宇和島市' | '八幡浜市' | '新居浜市' | '西条市' | '大洲市' | '伊予市' | '四国中央市' | '西予市' | '東温市' | '越智郡上島町' | '上浮穴郡久万高原町' | '伊予郡松前町' | '伊予郡砥部町' | '喜多郡内子町' | '西宇和郡伊方町' | '北宇和郡松野町' | '北宇和郡鬼北町' | '南宇和郡愛南町' | '高知市' | '室戸市' | '安芸市' | '南国市' | '土佐市' | '須崎市' | '宿毛市' | '土佐清水市' | '四万十市' | '香南市' | '香美市' | '安芸郡東洋町' | '安芸郡奈半利町' | '安芸郡田野町' | '安芸郡安田町' | '安芸郡北川村' | '安芸郡馬路村' | '安芸郡芸西村' | '長岡郡本山町' | '長岡郡大豊町' | '土佐郡土佐町' | '土佐郡大川村' | '吾川郡いの町' | '吾川郡仁淀川町' | '高岡郡中土佐町' | '高岡郡佐川町' | '高岡郡越知町' | '高岡郡梼原町' | '高岡郡日高村' | '高岡郡津野町' | '高岡郡四万十町' | '幡多郡大月町' | '幡多郡三原村' | '幡多郡黒潮町' | '北九州市' | '北九州市門司区' | '北九州市若松区' | '北九州市戸畑区' | '北九州市小倉北区' | '北九州市小倉南区' | '北九州市八幡東区' | '北九州市八幡西区' | '福岡市' | '福岡市東区' | '福岡市博多区' | '福岡市中央区' | '福岡市南区' | '福岡市西区' | '福岡市城南区' | '福岡市早良区' | '大牟田市' | '久留米市' | '直方市' | '飯塚市' | '田川市' | '柳川市' | '八女市' | '筑後市' | '大川市' | '行橋市' | '豊前市' | '中間市' | '小郡市' | '筑紫野市' | '春日市' | '大野城市' | '宗像市' | '太宰府市' | '古賀市' | '福津市' | 'うきは市' | '宮若市' | '嘉麻市' | '朝倉市' | 'みやま市' | '糸島市' | '那珂川市' | '糟屋郡宇美町' | '糟屋郡篠栗町' | '糟屋郡志免町' | '糟屋郡須恵町' | '糟屋郡新宮町' | '糟屋郡久山町' | '糟屋郡粕屋町' | '遠賀郡芦屋町' | '遠賀郡水巻町' | '遠賀郡岡垣町' | '遠賀郡遠賀町' | '鞍手郡小竹町' | '鞍手郡鞍手町' | '嘉穂郡桂川町' | '朝倉郡筑前町' | '朝倉郡東峰村' | '三井郡大刀洗町' | '三潴郡大木町' | '八女郡広川町' | '田川郡香春町' | '田川郡添田町' | '田川郡糸田町' | '田川郡川崎町' | '田川郡大任町' | '田川郡赤村' | '田川郡福智町' | '京都郡苅田町' | '京都郡みやこ町' | '築上郡吉富町' | '築上郡上毛町' | '築上郡築上町' | '佐賀市' | '唐津市' | '鳥栖市' | '多久市' | '伊万里市' | '武雄市' | '鹿島市' | '小城市' | '嬉野市' | '神埼市' | '神埼郡吉野ヶ里町' | '三養基郡基山町' | '三養基郡上峰町' | '三養基郡みやき町' | '東松浦郡玄海町' | '西松浦郡有田町' | '杵島郡大町町' | '杵島郡江北町' | '杵島郡白石町' | '藤津郡太良町' | '長崎市' | '佐世保市' | '島原市' | '諫早市' | '大村市' | '平戸市' | '松浦市' | '対馬市' | '壱岐市' | '五島市' | '西海市' | '雲仙市' | '南島原市' | '西彼杵郡長与町' | '西彼杵郡時津町' | '東彼杵郡東彼杵町' | '東彼杵郡川棚町' | '東彼杵郡波佐見町' | '北松浦郡小値賀町' | '北松浦郡佐々町' | '南松浦郡新上五島町' | '熊本市' | '熊本市中央区' | '熊本市東区' | '熊本市西区' | '熊本市南区' | '熊本市北区' | '八代市' | '人吉市' | '荒尾市' | '水俣市' | '玉名市' | '山鹿市' | '菊池市' | '宇土市' | '上天草市' | '宇城市' | '阿蘇市' | '天草市' | '合志市' | '下益城郡美里町' | '玉名郡玉東町' | '玉名郡南関町' | '玉名郡長洲町' | '玉名郡和水町' | '菊池郡大津町' | '菊池郡菊陽町' | '阿蘇郡南小国町' | '阿蘇郡小国町' | '阿蘇郡産山村' | '阿蘇郡高森町' | '阿蘇郡西原村' | '阿蘇郡南阿蘇村' | '上益城郡御船町' | '上益城郡嘉島町' | '上益城郡益城町' | '上益城郡甲佐町' | '上益城郡山都町' | '八代郡氷川町' | '葦北郡芦北町' | '葦北郡津奈木町' | '球磨郡錦町' | '球磨郡多良木町' | '球磨郡湯前町' | '球磨郡水上村' | '球磨郡相良村' | '球磨郡五木村' | '球磨郡山江村' | '球磨郡球磨村' | '球磨郡あさぎり町' | '天草郡苓北町' | '大分市' | '別府市' | '中津市' | '日田市' | '佐伯市' | '臼杵市' | '津久見市' | '竹田市' | '豊後高田市' | '杵築市' | '宇佐市' | '豊後大野市' | '由布市' | '国東市' | '東国東郡姫島村' | '速見郡日出町' | '玖珠郡九重町' | '玖珠郡玖珠町' | '宮崎市' | '都城市' | '延岡市' | '日南市' | '小林市' | '日向市' | '串間市' | '西都市' | 'えびの市' | '北諸県郡三股町' | '西諸県郡高原町' | '東諸県郡国富町' | '東諸県郡綾町' | '児湯郡高鍋町' | '児湯郡新富町' | '児湯郡西米良村' | '児湯郡木城町' | '児湯郡川南町' | '児湯郡都農町' | '東臼杵郡門川町' | '東臼杵郡諸塚村' | '東臼杵郡椎葉村' | '東臼杵郡美郷町' | '西臼杵郡高千穂町' | '西臼杵郡日之影町' | '西臼杵郡五ヶ瀬町' | '鹿児島市' | '鹿屋市' | '枕崎市' | '阿久根市' | '出水市' | '指宿市' | '西之表市' | '垂水市' | '薩摩川内市' | '日置市' | '曽於市' | '霧島市' | 'いちき串木野市' | '南さつま市' | '志布志市' | '奄美市' | '南九州市' | '伊佐市' | '姶良市' | '鹿児島郡三島村' | '鹿児島郡十島村' | '薩摩郡さつま町' | '出水郡長島町' | '姶良郡湧水町' | '曽於郡大崎町' | '肝属郡東串良町' | '肝属郡錦江町' | '肝属郡南大隅町' | '肝属郡肝付町' | '熊毛郡中種子町' | '熊毛郡南種子町' | '熊毛郡屋久島町' | '大島郡大和村' | '大島郡宇検村' | '大島郡瀬戸内町' | '大島郡龍郷町' | '大島郡喜界町' | '大島郡徳之島町' | '大島郡天城町' | '大島郡伊仙町' | '大島郡和泊町' | '大島郡知名町' | '大島郡与論町' | '那覇市' | '宜野湾市' | '石垣市' | '浦添市' | '名護市' | '糸満市' | '沖縄市' | '豊見城市' | 'うるま市' | '宮古島市' | '南城市' | '国頭郡国頭村' | '国頭郡大宜味村' | '国頭郡東村' | '国頭郡今帰仁村' | '国頭郡本部町' | '国頭郡恩納村' | '国頭郡宜野座村' | '国頭郡金武町' | '国頭郡伊江村' | '中頭郡読谷村' | '中頭郡嘉手納町' | '中頭郡北谷町' | '中頭郡北中城村' | '中頭郡中城村' | '中頭郡西原町' | '島尻郡与那原町' | '島尻郡南風原町' | '島尻郡渡嘉敷村' | '島尻郡座間味村' | '島尻郡粟国村' | '島尻郡渡名喜村' | '島尻郡南大東村' | '島尻郡北大東村' | '島尻郡伊平屋村' | '島尻郡伊是名村' | '島尻郡久米島町' | '島尻郡八重瀬町' | '宮古郡多良間村' | '八重山郡竹富町' | '八重山郡与那国町');
            };
            /**
             * Table
             * * 1 => Parent1
             * * 2 => Parent2
             * * 3 => Parent3
             * * 4 => Parent4
             * * 5 => Parent5
             */
            ext_col_06?: {
                key: string;
                label: string;
            } | '' | '1' | '2' | '3' | '4' | '5';
            /**
             * Relation
             */
            ext_col_09?: {
                module_type: string;
                module_id: number;
            } | number;
            /**
             * Private File
             */
            ext_col_11?: {
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
             * Private Image File
             */
            ext_col_17?: {
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
             * JSON
             */
            ext_jsn_12?: {
                /**
                 * * 1 => opt1
                 * * 2 => opt2
                 */
                options?: ('' | '1' | '2');
                text?: string;
            };
            /**
             * HTML
             */
            ext_col_13?: string;
            /**
             * Wysiwyg
             */
            ext_col_14?: string;
            /**
             * Vimeo
             */
            ext_col_16?: string;
            /**
             * Number
             */
            ext_col_18?: string;
            /**
             * Validate
             */
            validate_only?: boolean;
        };
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type postContentServiceRcmsApi1Topics1UpdateTopicsIdResponse = any;
    interface postContentServiceRcmsApi1Topics1DeleteTopicsIdRequest {
        topicsId: string;
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type postContentServiceRcmsApi1Topics1DeleteTopicsIdResponse = any;
    interface getContentServiceRcmsApi1TopicsMultipleRequest {
        outputFormat?: string;
        lang?: string;
        charset?: string;
        cnt?: number;
        pageId?: number;
        filter?: string;
        customSearchId?: string;
        topicsKeyword?: string;
        topicsKeywordCond?: string;
        contentsType?: Array<number>;
        contentsTypeCond?: string;
        date?: string;
        usingSeason?: string;
        season?: number;
        extColumnCond?: string;
        excludeTopicsId?: string;
        tagCategoryId?: number;
        tagSearch?: string;
        tagId?: Array<number>;
        tagCond?: string;
        excludeTagId?: string;
        myFavoriteList?: number;
        myCommentList?: number;
        myOwnList?: string;
        order?: string;
        orderById?: string;
        id?: Array<number>;
        type?: string;
        groupBy?: string;
        groupByCategoryId?: Array<number>;
        showEmptyCategories?: boolean;
        orderByCategoryCount?: boolean;
    }
    type getContentServiceRcmsApi1TopicsMultipleResponse = any;
    interface getContentServiceRcmsApi1TopicsMultipleTopicsIdRequest {
        topicsId: string;
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type getContentServiceRcmsApi1TopicsMultipleTopicsIdResponse = any;
    interface postContentServiceRcmsApi1TopicsMultipleInsertRequest {
        requestBody: {
            /**
             * Topic title
             */
            subject: string;
            /**
             * Slug
             */
            slug?: string;
            /**
             * Category ID
             * * 2 => CategoryForMultiple1
             * * 9 => CategoryForMultiple2
             */
            contents_type?: (2 | 9);
            /**
             * Published / Not published
             */
            open_type?: ('open' | 'close' | 'default');
            /**
             * Display all topics to logged in members, regardless ther public/hidden status
             */
            topics_flg?: (0 | 1);
            /**
             * Contents
             */
            contents?: string;
            /**
             * display up
             */
            regular_flg?: number;
            /**
             * Date
             */
            ymd?: string;
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
            /**
             * Text
             */
            ext_col_01?: Array<string>;
            /**
             * TextArea
             */
            ext_col_02?: Array<string>;
            /**
             * Select
             */
            ext_col_03?: Array<{
                key: string;
                label: string;
            } | '' | '1' | '2' | '3'>;
            /**
             * Checkbox
             */
            ext_col_04?: Array<Array<{
                key: string;
                label: string;
            } | '1' | '2' | '3'>>;
            /**
             * Date
             */
            ext_col_07?: Array<string | string | {
                ymd: string;
            }>;
            /**
             * DateTime
             */
            ext_col_08?: Array<string | string | {
                ymd: string;
                h: number;
                i: number;
            }>;
            /**
             * Tdfk
             */
            ext_col_05?: Array<{
                tdfk_cd?: ('01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '20' | '21' | '22' | '23' | '24' | '25' | '26' | '27' | '28' | '29' | '30' | '31' | '32' | '33' | '34' | '35' | '36' | '37' | '38' | '39' | '40' | '41' | '42' | '43' | '44' | '45' | '46' | '47' | '99');
                tdfk_nm?: ('北海道' | '青森県' | '岩手県' | '宮城県' | '秋田県' | '山形県' | '福島県' | '茨城県' | '栃木県' | '群馬県' | '埼玉県' | '千葉県' | '東京都' | '神奈川県' | '新潟県' | '富山県' | '石川県' | '福井県' | '山梨県' | '長野県' | '岐阜県' | '静岡県' | '愛知県' | '三重県' | '滋賀県' | '京都府' | '大阪府' | '兵庫県' | '奈良県' | '和歌山県' | '鳥取県' | '島根県' | '岡山県' | '広島県' | '山口県' | '徳島県' | '香川県' | '愛媛県' | '高知県' | '福岡県' | '佐賀県' | '長崎県' | '熊本県' | '大分県' | '宮崎県' | '鹿児島県' | '沖縄県' | '海外');
            }>;
            /**
             * TdfkAndCity
             */
            ext_col_15?: Array<{
                tdfk_cd?: ('01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '20' | '21' | '22' | '23' | '24' | '25' | '26' | '27' | '28' | '29' | '30' | '31' | '32' | '33' | '34' | '35' | '36' | '37' | '38' | '39' | '40' | '41' | '42' | '43' | '44' | '45' | '46' | '47' | '99');
                tdfk_nm?: ('北海道' | '青森県' | '岩手県' | '宮城県' | '秋田県' | '山形県' | '福島県' | '茨城県' | '栃木県' | '群馬県' | '埼玉県' | '千葉県' | '東京都' | '神奈川県' | '新潟県' | '富山県' | '石川県' | '福井県' | '山梨県' | '長野県' | '岐阜県' | '静岡県' | '愛知県' | '三重県' | '滋賀県' | '京都府' | '大阪府' | '兵庫県' | '奈良県' | '和歌山県' | '鳥取県' | '島根県' | '岡山県' | '広島県' | '山口県' | '徳島県' | '香川県' | '愛媛県' | '高知県' | '福岡県' | '佐賀県' | '長崎県' | '熊本県' | '大分県' | '宮崎県' | '鹿児島県' | '沖縄県' | '海外');
                sub_area_cd?: ('01100' | '01101' | '01102' | '01103' | '01104' | '01105' | '01106' | '01107' | '01108' | '01109' | '01110' | '01202' | '01203' | '01204' | '01205' | '01206' | '01207' | '01208' | '01209' | '01210' | '01211' | '01212' | '01213' | '01214' | '01215' | '01216' | '01217' | '01218' | '01219' | '01220' | '01221' | '01222' | '01223' | '01224' | '01225' | '01226' | '01227' | '01228' | '01229' | '01230' | '01231' | '01233' | '01234' | '01235' | '01236' | '01303' | '01304' | '01331' | '01332' | '01333' | '01334' | '01337' | '01343' | '01345' | '01346' | '01347' | '01361' | '01362' | '01363' | '01364' | '01367' | '01370' | '01371' | '01391' | '01392' | '01393' | '01394' | '01395' | '01396' | '01397' | '01398' | '01399' | '01400' | '01401' | '01402' | '01403' | '01404' | '01405' | '01406' | '01407' | '01408' | '01409' | '01423' | '01424' | '01425' | '01427' | '01428' | '01429' | '01430' | '01431' | '01432' | '01433' | '01434' | '01436' | '01437' | '01438' | '01452' | '01453' | '01454' | '01455' | '01456' | '01457' | '01458' | '01459' | '01460' | '01461' | '01462' | '01463' | '01464' | '01465' | '01468' | '01469' | '01470' | '01471' | '01472' | '01481' | '01482' | '01483' | '01484' | '01485' | '01486' | '01487' | '01511' | '01512' | '01513' | '01514' | '01516' | '01517' | '01518' | '01519' | '01520' | '01543' | '01544' | '01545' | '01546' | '01547' | '01549' | '01550' | '01552' | '01555' | '01559' | '01560' | '01561' | '01562' | '01563' | '01564' | '01571' | '01575' | '01578' | '01581' | '01584' | '01585' | '01586' | '01601' | '01602' | '01604' | '01607' | '01608' | '01609' | '01610' | '01631' | '01632' | '01633' | '01634' | '01635' | '01636' | '01637' | '01638' | '01639' | '01641' | '01642' | '01643' | '01644' | '01645' | '01646' | '01647' | '01648' | '01649' | '01661' | '01662' | '01663' | '01664' | '01665' | '01667' | '01668' | '01691' | '01692' | '01693' | '01694' | '02201' | '02202' | '02203' | '02204' | '02205' | '02206' | '02207' | '02208' | '02209' | '02210' | '02301' | '02303' | '02304' | '02307' | '02321' | '02323' | '02343' | '02361' | '02362' | '02367' | '02381' | '02384' | '02387' | '02401' | '02402' | '02405' | '02406' | '02408' | '02411' | '02412' | '02423' | '02424' | '02425' | '02426' | '02441' | '02442' | '02443' | '02445' | '02446' | '02450' | '03201' | '03202' | '03203' | '03205' | '03206' | '03207' | '03208' | '03209' | '03210' | '03211' | '03213' | '03214' | '03215' | '03216' | '03301' | '03302' | '03303' | '03321' | '03322' | '03366' | '03381' | '03402' | '03441' | '03461' | '03482' | '03483' | '03484' | '03485' | '03501' | '03503' | '03506' | '03507' | '03524' | '04100' | '04101' | '04102' | '04103' | '04104' | '04105' | '04202' | '04203' | '04205' | '04206' | '04207' | '04208' | '04209' | '04211' | '04212' | '04213' | '04214' | '04215' | '04216' | '04301' | '04302' | '04321' | '04322' | '04323' | '04324' | '04341' | '04361' | '04362' | '04401' | '04404' | '04406' | '04421' | '04422' | '04424' | '04444' | '04445' | '04501' | '04505' | '04581' | '04606' | '05201' | '05202' | '05203' | '05204' | '05206' | '05207' | '05209' | '05210' | '05211' | '05212' | '05213' | '05214' | '05215' | '05303' | '05327' | '05346' | '05348' | '05349' | '05361' | '05363' | '05366' | '05368' | '05434' | '05463' | '05464' | '06201' | '06202' | '06203' | '06204' | '06205' | '06206' | '06207' | '06208' | '06209' | '06210' | '06211' | '06212' | '06213' | '06301' | '06302' | '06321' | '06322' | '06323' | '06324' | '06341' | '06361' | '06362' | '06363' | '06364' | '06365' | '06366' | '06367' | '06381' | '06382' | '06401' | '06402' | '06403' | '06426' | '06428' | '06461' | '07201' | '07202' | '07203' | '07204' | '07205' | '07207' | '07208' | '07209' | '07210' | '07211' | '07212' | '07213' | '07214' | '07301' | '07303' | '07308' | '07322' | '07342' | '07344' | '07362' | '07364' | '07367' | '07368' | '07402' | '07405' | '07407' | '07408' | '07421' | '07422' | '07423' | '07444' | '07445' | '07446' | '07447' | '07461' | '07464' | '07465' | '07466' | '07481' | '07482' | '07483' | '07484' | '07501' | '07502' | '07503' | '07504' | '07505' | '07521' | '07522' | '07541' | '07542' | '07543' | '07544' | '07545' | '07546' | '07547' | '07548' | '07561' | '07564' | '08201' | '08202' | '08203' | '08204' | '08205' | '08207' | '08208' | '08210' | '08211' | '08212' | '08214' | '08215' | '08216' | '08217' | '08219' | '08220' | '08221' | '08222' | '08223' | '08224' | '08225' | '08226' | '08227' | '08228' | '08229' | '08230' | '08231' | '08232' | '08233' | '08234' | '08235' | '08236' | '08302' | '08309' | '08310' | '08341' | '08364' | '08442' | '08443' | '08447' | '08521' | '08542' | '08546' | '08564' | '09201' | '09202' | '09203' | '09204' | '09205' | '09206' | '09208' | '09209' | '09210' | '09211' | '09213' | '09214' | '09215' | '09216' | '09301' | '09342' | '09343' | '09344' | '09345' | '09361' | '09364' | '09384' | '09386' | '09407' | '09411' | '10201' | '10202' | '10203' | '10204' | '10205' | '10206' | '10207' | '10208' | '10209' | '10210' | '10211' | '10212' | '10344' | '10345' | '10366' | '10367' | '10382' | '10383' | '10384' | '10421' | '10424' | '10425' | '10426' | '10428' | '10429' | '10443' | '10444' | '10448' | '10449' | '10464' | '10521' | '10522' | '10523' | '10524' | '10525' | '11100' | '11101' | '11102' | '11103' | '11104' | '11105' | '11106' | '11107' | '11108' | '11109' | '11110' | '11201' | '11202' | '11203' | '11206' | '11207' | '11208' | '11209' | '11210' | '11211' | '11212' | '11214' | '11215' | '11216' | '11217' | '11218' | '11219' | '11221' | '11222' | '11223' | '11224' | '11225' | '11227' | '11228' | '11229' | '11230' | '11231' | '11232' | '11233' | '11234' | '11235' | '11237' | '11238' | '11239' | '11240' | '11241' | '11242' | '11243' | '11245' | '11246' | '11301' | '11324' | '11326' | '11327' | '11341' | '11342' | '11343' | '11346' | '11347' | '11348' | '11349' | '11361' | '11362' | '11363' | '11365' | '11369' | '11381' | '11383' | '11385' | '11408' | '11442' | '11464' | '11465' | '12100' | '12101' | '12102' | '12103' | '12104' | '12105' | '12106' | '12202' | '12203' | '12204' | '12205' | '12206' | '12207' | '12208' | '12210' | '12211' | '12212' | '12213' | '12215' | '12216' | '12217' | '12218' | '12219' | '12220' | '12221' | '12222' | '12223' | '12224' | '12225' | '12226' | '12227' | '12228' | '12229' | '12230' | '12231' | '12232' | '12233' | '12234' | '12235' | '12236' | '12237' | '12238' | '12239' | '12322' | '12329' | '12342' | '12347' | '12349' | '12403' | '12409' | '12410' | '12421' | '12422' | '12423' | '12424' | '12426' | '12427' | '12441' | '12443' | '12463' | '13101' | '13102' | '13103' | '13104' | '13105' | '13106' | '13107' | '13108' | '13109' | '13110' | '13111' | '13112' | '13113' | '13114' | '13115' | '13116' | '13117' | '13118' | '13119' | '13120' | '13121' | '13122' | '13123' | '13201' | '13202' | '13203' | '13204' | '13205' | '13206' | '13207' | '13208' | '13209' | '13210' | '13211' | '13212' | '13213' | '13214' | '13215' | '13218' | '13219' | '13220' | '13221' | '13222' | '13223' | '13224' | '13225' | '13227' | '13228' | '13229' | '13303' | '13305' | '13307' | '13308' | '13361' | '13362' | '13363' | '13364' | '13381' | '13382' | '13401' | '13402' | '13421' | '14100' | '14101' | '14102' | '14103' | '14104' | '14105' | '14106' | '14107' | '14108' | '14109' | '14110' | '14111' | '14112' | '14113' | '14114' | '14115' | '14116' | '14117' | '14118' | '14130' | '14131' | '14132' | '14133' | '14134' | '14135' | '14136' | '14137' | '14150' | '14151' | '14152' | '14153' | '14201' | '14203' | '14204' | '14205' | '14206' | '14207' | '14208' | '14210' | '14211' | '14212' | '14213' | '14214' | '14215' | '14216' | '14217' | '14218' | '14301' | '14321' | '14341' | '14342' | '14361' | '14362' | '14363' | '14364' | '14366' | '14382' | '14383' | '14384' | '14401' | '14402' | '15100' | '15101' | '15102' | '15103' | '15104' | '15105' | '15106' | '15107' | '15108' | '15202' | '15204' | '15205' | '15206' | '15208' | '15209' | '15210' | '15211' | '15212' | '15213' | '15216' | '15217' | '15218' | '15222' | '15223' | '15224' | '15225' | '15226' | '15227' | '15307' | '15342' | '15361' | '15385' | '15405' | '15461' | '15482' | '15504' | '15581' | '15586' | '16201' | '16202' | '16204' | '16205' | '16206' | '16207' | '16208' | '16209' | '16210' | '16211' | '16321' | '16322' | '16323' | '16342' | '16343' | '17201' | '17202' | '17203' | '17204' | '17205' | '17206' | '17207' | '17209' | '17210' | '17211' | '17212' | '17324' | '17361' | '17365' | '17384' | '17386' | '17407' | '17461' | '17463' | '18201' | '18202' | '18204' | '18205' | '18206' | '18207' | '18208' | '18209' | '18210' | '18322' | '18382' | '18404' | '18423' | '18442' | '18481' | '18483' | '18501' | '19201' | '19202' | '19204' | '19205' | '19206' | '19207' | '19208' | '19209' | '19210' | '19211' | '19212' | '19213' | '19214' | '19346' | '19364' | '19365' | '19366' | '19368' | '19384' | '19422' | '19423' | '19424' | '19425' | '19429' | '19430' | '19442' | '19443' | '20201' | '20202' | '20203' | '20204' | '20205' | '20206' | '20207' | '20208' | '20209' | '20210' | '20211' | '20212' | '20213' | '20214' | '20215' | '20217' | '20218' | '20219' | '20220' | '20303' | '20304' | '20305' | '20306' | '20307' | '20309' | '20321' | '20323' | '20324' | '20349' | '20350' | '20361' | '20362' | '20363' | '20382' | '20383' | '20384' | '20385' | '20386' | '20388' | '20402' | '20403' | '20404' | '20407' | '20409' | '20410' | '20411' | '20412' | '20413' | '20414' | '20415' | '20416' | '20417' | '20422' | '20423' | '20425' | '20429' | '20430' | '20432' | '20446' | '20448' | '20450' | '20451' | '20452' | '20481' | '20482' | '20485' | '20486' | '20521' | '20541' | '20543' | '20561' | '20562' | '20563' | '20583' | '20588' | '20590' | '20602' | '21201' | '21202' | '21203' | '21204' | '21205' | '21206' | '21207' | '21208' | '21209' | '21210' | '21211' | '21212' | '21213' | '21214' | '21215' | '21216' | '21217' | '21218' | '21219' | '21220' | '21221' | '21302' | '21303' | '21341' | '21361' | '21362' | '21381' | '21382' | '21383' | '21401' | '21403' | '21404' | '21421' | '21501' | '21502' | '21503' | '21504' | '21505' | '21506' | '21507' | '21521' | '21604' | '22100' | '22101' | '22102' | '22103' | '22130' | '22131' | '22132' | '22133' | '22134' | '22135' | '22136' | '22137' | '22203' | '22205' | '22206' | '22207' | '22208' | '22209' | '22210' | '22211' | '22212' | '22213' | '22214' | '22215' | '22216' | '22219' | '22220' | '22221' | '22222' | '22223' | '22224' | '22225' | '22226' | '22301' | '22302' | '22304' | '22305' | '22306' | '22325' | '22341' | '22342' | '22344' | '22424' | '22429' | '22461' | '23100' | '23101' | '23102' | '23103' | '23104' | '23105' | '23106' | '23107' | '23108' | '23109' | '23110' | '23111' | '23112' | '23113' | '23114' | '23115' | '23116' | '23201' | '23202' | '23203' | '23204' | '23205' | '23206' | '23207' | '23208' | '23209' | '23210' | '23211' | '23212' | '23213' | '23214' | '23215' | '23216' | '23217' | '23219' | '23220' | '23221' | '23222' | '23223' | '23224' | '23225' | '23226' | '23227' | '23228' | '23229' | '23230' | '23231' | '23232' | '23233' | '23234' | '23235' | '23236' | '23237' | '23238' | '23302' | '23342' | '23361' | '23362' | '23424' | '23425' | '23427' | '23441' | '23442' | '23445' | '23446' | '23447' | '23501' | '23561' | '23562' | '23563' | '24201' | '24202' | '24203' | '24204' | '24205' | '24207' | '24208' | '24209' | '24210' | '24211' | '24212' | '24214' | '24215' | '24216' | '24303' | '24324' | '24341' | '24343' | '24344' | '24441' | '24442' | '24443' | '24461' | '24470' | '24471' | '24472' | '24543' | '24561' | '24562' | '25201' | '25202' | '25203' | '25204' | '25206' | '25207' | '25208' | '25209' | '25210' | '25211' | '25212' | '25213' | '25214' | '25383' | '25384' | '25425' | '25441' | '25442' | '25443' | '26100' | '26101' | '26102' | '26103' | '26104' | '26105' | '26106' | '26107' | '26108' | '26109' | '26110' | '26111' | '26201' | '26202' | '26203' | '26204' | '26205' | '26206' | '26207' | '26208' | '26209' | '26210' | '26211' | '26212' | '26213' | '26214' | '26303' | '26322' | '26343' | '26344' | '26364' | '26365' | '26366' | '26367' | '26407' | '26463' | '26465' | '27100' | '27102' | '27103' | '27104' | '27106' | '27107' | '27108' | '27109' | '27111' | '27113' | '27114' | '27115' | '27116' | '27117' | '27118' | '27119' | '27120' | '27121' | '27122' | '27123' | '27124' | '27125' | '27126' | '27127' | '27128' | '27140' | '27141' | '27142' | '27143' | '27144' | '27145' | '27146' | '27147' | '27202' | '27203' | '27204' | '27205' | '27206' | '27207' | '27208' | '27209' | '27210' | '27211' | '27212' | '27213' | '27214' | '27215' | '27216' | '27217' | '27218' | '27219' | '27220' | '27221' | '27222' | '27223' | '27224' | '27225' | '27226' | '27227' | '27228' | '27229' | '27230' | '27231' | '27232' | '27301' | '27321' | '27322' | '27341' | '27361' | '27362' | '27366' | '27381' | '27382' | '27383' | '28100' | '28101' | '28102' | '28105' | '28106' | '28107' | '28108' | '28109' | '28110' | '28111' | '28201' | '28202' | '28203' | '28204' | '28205' | '28206' | '28207' | '28208' | '28209' | '28210' | '28212' | '28213' | '28214' | '28215' | '28216' | '28217' | '28218' | '28219' | '28220' | '28221' | '28222' | '28223' | '28224' | '28225' | '28226' | '28227' | '28228' | '28229' | '28301' | '28365' | '28381' | '28382' | '28442' | '28443' | '28446' | '28464' | '28481' | '28501' | '28585' | '28586' | '29201' | '29202' | '29203' | '29204' | '29205' | '29206' | '29207' | '29208' | '29209' | '29210' | '29211' | '29212' | '29322' | '29342' | '29343' | '29344' | '29345' | '29361' | '29362' | '29363' | '29385' | '29386' | '29401' | '29402' | '29424' | '29425' | '29426' | '29427' | '29441' | '29442' | '29443' | '29444' | '29446' | '29447' | '29449' | '29450' | '29451' | '29452' | '29453' | '30201' | '30202' | '30203' | '30204' | '30205' | '30206' | '30207' | '30208' | '30209' | '30304' | '30341' | '30343' | '30344' | '30361' | '30362' | '30366' | '30381' | '30382' | '30383' | '30390' | '30391' | '30392' | '30401' | '30404' | '30406' | '30421' | '30422' | '30424' | '30427' | '30428' | '31201' | '31202' | '31203' | '31204' | '31302' | '31325' | '31328' | '31329' | '31364' | '31370' | '31371' | '31372' | '31384' | '31386' | '31389' | '31390' | '31401' | '31402' | '31403' | '32201' | '32202' | '32203' | '32204' | '32205' | '32206' | '32207' | '32209' | '32343' | '32386' | '32441' | '32448' | '32449' | '32501' | '32505' | '32525' | '32526' | '32527' | '32528' | '33100' | '33101' | '33102' | '33103' | '33104' | '33202' | '33203' | '33204' | '33205' | '33207' | '33208' | '33209' | '33210' | '33211' | '33212' | '33213' | '33214' | '33215' | '33216' | '33346' | '33423' | '33445' | '33461' | '33586' | '33606' | '33622' | '33623' | '33643' | '33663' | '33666' | '33681' | '34100' | '34101' | '34102' | '34103' | '34104' | '34105' | '34106' | '34107' | '34108' | '34202' | '34203' | '34204' | '34205' | '34207' | '34208' | '34209' | '34210' | '34211' | '34212' | '34213' | '34214' | '34215' | '34302' | '34304' | '34307' | '34309' | '34368' | '34369' | '34431' | '34462' | '34545' | '35201' | '35202' | '35203' | '35204' | '35206' | '35207' | '35208' | '35210' | '35211' | '35212' | '35213' | '35215' | '35216' | '35305' | '35321' | '35341' | '35343' | '35344' | '35502' | '36201' | '36202' | '36203' | '36204' | '36205' | '36206' | '36207' | '36208' | '36301' | '36302' | '36321' | '36341' | '36342' | '36368' | '36383' | '36387' | '36388' | '36401' | '36402' | '36403' | '36404' | '36405' | '36468' | '36489' | '37201' | '37202' | '37203' | '37204' | '37205' | '37206' | '37207' | '37208' | '37322' | '37324' | '37341' | '37364' | '37386' | '37387' | '37403' | '37404' | '37406' | '38201' | '38202' | '38203' | '38204' | '38205' | '38206' | '38207' | '38210' | '38213' | '38214' | '38215' | '38356' | '38386' | '38401' | '38402' | '38422' | '38442' | '38484' | '38488' | '38506' | '39201' | '39202' | '39203' | '39204' | '39205' | '39206' | '39208' | '39209' | '39210' | '39211' | '39212' | '39301' | '39302' | '39303' | '39304' | '39305' | '39306' | '39307' | '39341' | '39344' | '39363' | '39364' | '39386' | '39387' | '39401' | '39402' | '39403' | '39405' | '39410' | '39411' | '39412' | '39424' | '39427' | '39428' | '40100' | '40101' | '40103' | '40105' | '40106' | '40107' | '40108' | '40109' | '40130' | '40131' | '40132' | '40133' | '40134' | '40135' | '40136' | '40137' | '40202' | '40203' | '40204' | '40205' | '40206' | '40207' | '40210' | '40211' | '40212' | '40213' | '40214' | '40215' | '40216' | '40217' | '40218' | '40219' | '40220' | '40221' | '40223' | '40224' | '40225' | '40226' | '40227' | '40228' | '40229' | '40230' | '40231' | '40341' | '40342' | '40343' | '40344' | '40345' | '40348' | '40349' | '40381' | '40382' | '40383' | '40384' | '40401' | '40402' | '40421' | '40447' | '40448' | '40503' | '40522' | '40544' | '40601' | '40602' | '40604' | '40605' | '40608' | '40609' | '40610' | '40621' | '40625' | '40642' | '40646' | '40647' | '41201' | '41202' | '41203' | '41204' | '41205' | '41206' | '41207' | '41208' | '41209' | '41210' | '41327' | '41341' | '41345' | '41346' | '41387' | '41401' | '41423' | '41424' | '41425' | '41441' | '42201' | '42202' | '42203' | '42204' | '42205' | '42207' | '42208' | '42209' | '42210' | '42211' | '42212' | '42213' | '42214' | '42307' | '42308' | '42321' | '42322' | '42323' | '42383' | '42391' | '42411' | '43100' | '43101' | '43102' | '43103' | '43104' | '43105' | '43202' | '43203' | '43204' | '43205' | '43206' | '43208' | '43210' | '43211' | '43212' | '43213' | '43214' | '43215' | '43216' | '43348' | '43364' | '43367' | '43368' | '43369' | '43403' | '43404' | '43423' | '43424' | '43425' | '43428' | '43432' | '43433' | '43441' | '43442' | '43443' | '43444' | '43447' | '43468' | '43482' | '43484' | '43501' | '43505' | '43506' | '43507' | '43510' | '43511' | '43512' | '43513' | '43514' | '43531' | '44201' | '44202' | '44203' | '44204' | '44205' | '44206' | '44207' | '44208' | '44209' | '44210' | '44211' | '44212' | '44213' | '44214' | '44322' | '44341' | '44461' | '44462' | '45201' | '45202' | '45203' | '45204' | '45205' | '45206' | '45207' | '45208' | '45209' | '45341' | '45361' | '45382' | '45383' | '45401' | '45402' | '45403' | '45404' | '45405' | '45406' | '45421' | '45429' | '45430' | '45431' | '45441' | '45442' | '45443' | '46201' | '46203' | '46204' | '46206' | '46208' | '46210' | '46213' | '46214' | '46215' | '46216' | '46217' | '46218' | '46219' | '46220' | '46221' | '46222' | '46223' | '46224' | '46225' | '46303' | '46304' | '46392' | '46404' | '46452' | '46468' | '46482' | '46490' | '46491' | '46492' | '46501' | '46502' | '46505' | '46523' | '46524' | '46525' | '46527' | '46529' | '46530' | '46531' | '46532' | '46533' | '46534' | '46535' | '47201' | '47205' | '47207' | '47208' | '47209' | '47210' | '47211' | '47212' | '47213' | '47214' | '47215' | '47301' | '47302' | '47303' | '47306' | '47308' | '47311' | '47313' | '47314' | '47315' | '47324' | '47325' | '47326' | '47327' | '47328' | '47329' | '47348' | '47350' | '47353' | '47354' | '47355' | '47356' | '47357' | '47358' | '47359' | '47360' | '47361' | '47362' | '47375' | '47381' | '47382');
                sub_area_nm?: ('札幌市' | '札幌市中央区' | '札幌市北区' | '札幌市東区' | '札幌市白石区' | '札幌市豊平区' | '札幌市南区' | '札幌市西区' | '札幌市厚別区' | '札幌市手稲区' | '札幌市清田区' | '函館市' | '小樽市' | '旭川市' | '室蘭市' | '釧路市' | '帯広市' | '北見市' | '夕張市' | '岩見沢市' | '網走市' | '留萌市' | '苫小牧市' | '稚内市' | '美唄市' | '芦別市' | '江別市' | '赤平市' | '紋別市' | '士別市' | '名寄市' | '三笠市' | '根室市' | '千歳市' | '滝川市' | '砂川市' | '歌志内市' | '深川市' | '富良野市' | '登別市' | '恵庭市' | '伊達市' | '北広島市' | '石狩市' | '北斗市' | '石狩郡当別町' | '石狩郡新篠津村' | '松前郡松前町' | '松前郡福島町' | '上磯郡知内町' | '上磯郡木古内町' | '亀田郡七飯町' | '茅部郡鹿部町' | '茅部郡森町' | '二海郡八雲町' | '山越郡長万部町' | '檜山郡江差町' | '檜山郡上ノ国町' | '檜山郡厚沢部町' | '爾志郡乙部町' | '奥尻郡奥尻町' | '瀬棚郡今金町' | '久遠郡せたな町' | '島牧郡島牧村' | '寿都郡寿都町' | '寿都郡黒松内町' | '磯谷郡蘭越町' | '虻田郡ニセコ町' | '虻田郡真狩村' | '虻田郡留寿都村' | '虻田郡喜茂別町' | '虻田郡京極町' | '虻田郡倶知安町' | '岩内郡共和町' | '岩内郡岩内町' | '古宇郡泊村' | '古宇郡神恵内村' | '積丹郡積丹町' | '古平郡古平町' | '余市郡仁木町' | '余市郡余市町' | '余市郡赤井川村' | '空知郡南幌町' | '空知郡奈井江町' | '空知郡上砂川町' | '夕張郡由仁町' | '夕張郡長沼町' | '夕張郡栗山町' | '樺戸郡月形町' | '樺戸郡浦臼町' | '樺戸郡新十津川町' | '雨竜郡妹背牛町' | '雨竜郡秩父別町' | '雨竜郡雨竜町' | '雨竜郡北竜町' | '雨竜郡沼田町' | '上川郡鷹栖町' | '上川郡東神楽町' | '上川郡当麻町' | '上川郡比布町' | '上川郡愛別町' | '上川郡上川町' | '上川郡東川町' | '上川郡美瑛町' | '空知郡上富良野町' | '空知郡中富良野町' | '空知郡南富良野町' | '勇払郡占冠村' | '上川郡和寒町' | '上川郡剣淵町' | '上川郡下川町' | '中川郡美深町' | '中川郡音威子府村' | '中川郡中川町' | '雨竜郡幌加内町' | '増毛郡増毛町' | '留萌郡小平町' | '苫前郡苫前町' | '苫前郡羽幌町' | '苫前郡初山別村' | '天塩郡遠別町' | '天塩郡天塩町' | '宗谷郡猿払村' | '枝幸郡浜頓別町' | '枝幸郡中頓別町' | '枝幸郡枝幸町' | '天塩郡豊富町' | '礼文郡礼文町' | '利尻郡利尻町' | '利尻郡利尻富士町' | '天塩郡幌延町' | '網走郡美幌町' | '網走郡津別町' | '斜里郡斜里町' | '斜里郡清里町' | '斜里郡小清水町' | '常呂郡訓子府町' | '常呂郡置戸町' | '常呂郡佐呂間町' | '紋別郡遠軽町' | '紋別郡湧別町' | '紋別郡滝上町' | '紋別郡興部町' | '紋別郡西興部村' | '紋別郡雄武町' | '網走郡大空町' | '虻田郡豊浦町' | '有珠郡壮瞥町' | '白老郡白老町' | '勇払郡厚真町' | '虻田郡洞爺湖町' | '勇払郡安平町' | '勇払郡むかわ町' | '沙流郡日高町' | '沙流郡平取町' | '新冠郡新冠町' | '浦河郡浦河町' | '様似郡様似町' | '幌泉郡えりも町' | '日高郡新ひだか町' | '河東郡音更町' | '河東郡士幌町' | '河東郡上士幌町' | '河東郡鹿追町' | '上川郡新得町' | '上川郡清水町' | '河西郡芽室町' | '河西郡中札内村' | '河西郡更別村' | '広尾郡大樹町' | '広尾郡広尾町' | '中川郡幕別町' | '中川郡池田町' | '中川郡豊頃町' | '中川郡本別町' | '足寄郡足寄町' | '足寄郡陸別町' | '十勝郡浦幌町' | '釧路郡釧路町' | '厚岸郡厚岸町' | '厚岸郡浜中町' | '川上郡標茶町' | '川上郡弟子屈町' | '阿寒郡鶴居村' | '白糠郡白糠町' | '野付郡別海町' | '標津郡中標津町' | '標津郡標津町' | '目梨郡羅臼町' | '青森市' | '弘前市' | '八戸市' | '黒石市' | '五所川原市' | '十和田市' | '三沢市' | 'むつ市' | 'つがる市' | '平川市' | '東津軽郡平内町' | '東津軽郡今別町' | '東津軽郡蓬田村' | '東津軽郡外ヶ浜町' | '西津軽郡鰺ヶ沢町' | '西津軽郡深浦町' | '中津軽郡西目屋村' | '南津軽郡藤崎町' | '南津軽郡大鰐町' | '南津軽郡田舎館村' | '北津軽郡板柳町' | '北津軽郡鶴田町' | '北津軽郡中泊町' | '上北郡野辺地町' | '上北郡七戸町' | '上北郡六戸町' | '上北郡横浜町' | '上北郡東北町' | '上北郡六ヶ所村' | '上北郡おいらせ町' | '下北郡大間町' | '下北郡東通村' | '下北郡風間浦村' | '下北郡佐井村' | '三戸郡三戸町' | '三戸郡五戸町' | '三戸郡田子町' | '三戸郡南部町' | '三戸郡階上町' | '三戸郡新郷村' | '盛岡市' | '宮古市' | '大船渡市' | '花巻市' | '北上市' | '久慈市' | '遠野市' | '一関市' | '陸前高田市' | '釜石市' | '二戸市' | '八幡平市' | '奥州市' | '滝沢市' | '岩手郡雫石町' | '岩手郡葛巻町' | '岩手郡岩手町' | '紫波郡紫波町' | '紫波郡矢巾町' | '和賀郡西和賀町' | '胆沢郡金ケ崎町' | '西磐井郡平泉町' | '気仙郡住田町' | '上閉伊郡大槌町' | '下閉伊郡山田町' | '下閉伊郡岩泉町' | '下閉伊郡田野畑村' | '下閉伊郡普代村' | '九戸郡軽米町' | '九戸郡野田村' | '九戸郡九戸村' | '九戸郡洋野町' | '二戸郡一戸町' | '仙台市' | '仙台市青葉区' | '仙台市宮城野区' | '仙台市若林区' | '仙台市太白区' | '仙台市泉区' | '石巻市' | '塩竈市' | '気仙沼市' | '白石市' | '名取市' | '角田市' | '多賀城市' | '岩沼市' | '登米市' | '栗原市' | '東松島市' | '大崎市' | '富谷市' | '刈田郡蔵王町' | '刈田郡七ヶ宿町' | '柴田郡大河原町' | '柴田郡村田町' | '柴田郡柴田町' | '柴田郡川崎町' | '伊具郡丸森町' | '亘理郡亘理町' | '亘理郡山元町' | '宮城郡松島町' | '宮城郡七ヶ浜町' | '宮城郡利府町' | '黒川郡大和町' | '黒川郡大郷町' | '黒川郡大衡村' | '加美郡色麻町' | '加美郡加美町' | '遠田郡涌谷町' | '遠田郡美里町' | '牡鹿郡女川町' | '本吉郡南三陸町' | '秋田市' | '能代市' | '横手市' | '大館市' | '男鹿市' | '湯沢市' | '鹿角市' | '由利本荘市' | '潟上市' | '大仙市' | '北秋田市' | 'にかほ市' | '仙北市' | '鹿角郡小坂町' | '北秋田郡上小阿仁村' | '山本郡藤里町' | '山本郡三種町' | '山本郡八峰町' | '南秋田郡五城目町' | '南秋田郡八郎潟町' | '南秋田郡井川町' | '南秋田郡大潟村' | '仙北郡美郷町' | '雄勝郡羽後町' | '雄勝郡東成瀬村' | '山形市' | '米沢市' | '鶴岡市' | '酒田市' | '新庄市' | '寒河江市' | '上山市' | '村山市' | '長井市' | '天童市' | '東根市' | '尾花沢市' | '南陽市' | '東村山郡山辺町' | '東村山郡中山町' | '西村山郡河北町' | '西村山郡西川町' | '西村山郡朝日町' | '西村山郡大江町' | '北村山郡大石田町' | '最上郡金山町' | '最上郡最上町' | '最上郡舟形町' | '最上郡真室川町' | '最上郡大蔵村' | '最上郡鮭川村' | '最上郡戸沢村' | '東置賜郡高畠町' | '東置賜郡川西町' | '西置賜郡小国町' | '西置賜郡白鷹町' | '西置賜郡飯豊町' | '東田川郡三川町' | '東田川郡庄内町' | '飽海郡遊佐町' | '福島市' | '会津若松市' | '郡山市' | 'いわき市' | '白河市' | '須賀川市' | '喜多方市' | '相馬市' | '二本松市' | '田村市' | '南相馬市' | '本宮市' | '伊達郡桑折町' | '伊達郡国見町' | '伊達郡川俣町' | '安達郡大玉村' | '岩瀬郡鏡石町' | '岩瀬郡天栄村' | '南会津郡下郷町' | '南会津郡檜枝岐村' | '南会津郡只見町' | '南会津郡南会津町' | '耶麻郡北塩原村' | '耶麻郡西会津町' | '耶麻郡磐梯町' | '耶麻郡猪苗代町' | '河沼郡会津坂下町' | '河沼郡湯川村' | '河沼郡柳津町' | '大沼郡三島町' | '大沼郡金山町' | '大沼郡昭和村' | '大沼郡会津美里町' | '西白河郡西郷村' | '西白河郡泉崎村' | '西白河郡中島村' | '西白河郡矢吹町' | '東白川郡棚倉町' | '東白川郡矢祭町' | '東白川郡塙町' | '東白川郡鮫川村' | '石川郡石川町' | '石川郡玉川村' | '石川郡平田村' | '石川郡浅川町' | '石川郡古殿町' | '田村郡三春町' | '田村郡小野町' | '双葉郡広野町' | '双葉郡楢葉町' | '双葉郡富岡町' | '双葉郡川内村' | '双葉郡大熊町' | '双葉郡双葉町' | '双葉郡浪江町' | '双葉郡葛尾村' | '相馬郡新地町' | '相馬郡飯舘村' | '水戸市' | '日立市' | '土浦市' | '古河市' | '石岡市' | '結城市' | '龍ケ崎市' | '下妻市' | '常総市' | '常陸太田市' | '高萩市' | '北茨城市' | '笠間市' | '取手市' | '牛久市' | 'つくば市' | 'ひたちなか市' | '鹿嶋市' | '潮来市' | '守谷市' | '常陸大宮市' | '那珂市' | '筑西市' | '坂東市' | '稲敷市' | 'かすみがうら市' | '桜川市' | '神栖市' | '行方市' | '鉾田市' | 'つくばみらい市' | '小美玉市' | '東茨城郡茨城町' | '東茨城郡大洗町' | '東茨城郡城里町' | '那珂郡東海村' | '久慈郡大子町' | '稲敷郡美浦村' | '稲敷郡阿見町' | '稲敷郡河内町' | '結城郡八千代町' | '猿島郡五霞町' | '猿島郡境町' | '北相馬郡利根町' | '宇都宮市' | '足利市' | '栃木市' | '佐野市' | '鹿沼市' | '日光市' | '小山市' | '真岡市' | '大田原市' | '矢板市' | '那須塩原市' | 'さくら市' | '那須烏山市' | '下野市' | '河内郡上三川町' | '芳賀郡益子町' | '芳賀郡茂木町' | '芳賀郡市貝町' | '芳賀郡芳賀町' | '下都賀郡壬生町' | '下都賀郡野木町' | '塩谷郡塩谷町' | '塩谷郡高根沢町' | '那須郡那須町' | '那須郡那珂川町' | '前橋市' | '高崎市' | '桐生市' | '伊勢崎市' | '太田市' | '沼田市' | '館林市' | '渋川市' | '藤岡市' | '富岡市' | '安中市' | 'みどり市' | '北群馬郡榛東村' | '北群馬郡吉岡町' | '多野郡上野村' | '多野郡神流町' | '甘楽郡下仁田町' | '甘楽郡南牧村' | '甘楽郡甘楽町' | '吾妻郡中之条町' | '吾妻郡長野原町' | '吾妻郡嬬恋村' | '吾妻郡草津町' | '吾妻郡高山村' | '吾妻郡東吾妻町' | '利根郡片品村' | '利根郡川場村' | '利根郡昭和村' | '利根郡みなかみ町' | '佐波郡玉村町' | '邑楽郡板倉町' | '邑楽郡明和町' | '邑楽郡千代田町' | '邑楽郡大泉町' | '邑楽郡邑楽町' | 'さいたま市' | 'さいたま市西区' | 'さいたま市北区' | 'さいたま市大宮区' | 'さいたま市見沼区' | 'さいたま市中央区' | 'さいたま市桜区' | 'さいたま市浦和区' | 'さいたま市南区' | 'さいたま市緑区' | 'さいたま市岩槻区' | '川越市' | '熊谷市' | '川口市' | '行田市' | '秩父市' | '所沢市' | '飯能市' | '加須市' | '本庄市' | '東松山市' | '春日部市' | '狭山市' | '羽生市' | '鴻巣市' | '深谷市' | '上尾市' | '草加市' | '越谷市' | '蕨市' | '戸田市' | '入間市' | '朝霞市' | '志木市' | '和光市' | '新座市' | '桶川市' | '久喜市' | '北本市' | '八潮市' | '富士見市' | '三郷市' | '蓮田市' | '坂戸市' | '幸手市' | '鶴ヶ島市' | '日高市' | '吉川市' | 'ふじみ野市' | '白岡市' | '北足立郡伊奈町' | '入間郡三芳町' | '入間郡毛呂山町' | '入間郡越生町' | '比企郡滑川町' | '比企郡嵐山町' | '比企郡小川町' | '比企郡川島町' | '比企郡吉見町' | '比企郡鳩山町' | '比企郡ときがわ町' | '秩父郡横瀬町' | '秩父郡皆野町' | '秩父郡長瀞町' | '秩父郡小鹿野町' | '秩父郡東秩父村' | '児玉郡美里町' | '児玉郡神川町' | '児玉郡上里町' | '大里郡寄居町' | '南埼玉郡宮代町' | '北葛飾郡杉戸町' | '北葛飾郡松伏町' | '千葉市' | '千葉市中央区' | '千葉市花見川区' | '千葉市稲毛区' | '千葉市若葉区' | '千葉市緑区' | '千葉市美浜区' | '銚子市' | '市川市' | '船橋市' | '館山市' | '木更津市' | '松戸市' | '野田市' | '茂原市' | '成田市' | '佐倉市' | '東金市' | '旭市' | '習志野市' | '柏市' | '勝浦市' | '市原市' | '流山市' | '八千代市' | '我孫子市' | '鴨川市' | '鎌ケ谷市' | '君津市' | '富津市' | '浦安市' | '四街道市' | '袖ケ浦市' | '八街市' | '印西市' | '白井市' | '富里市' | '南房総市' | '匝瑳市' | '香取市' | '山武市' | 'いすみ市' | '大網白里市' | '印旛郡酒々井町' | '印旛郡栄町' | '香取郡神崎町' | '香取郡多古町' | '香取郡東庄町' | '山武郡九十九里町' | '山武郡芝山町' | '山武郡横芝光町' | '長生郡一宮町' | '長生郡睦沢町' | '長生郡長生村' | '長生郡白子町' | '長生郡長柄町' | '長生郡長南町' | '夷隅郡大多喜町' | '夷隅郡御宿町' | '安房郡鋸南町' | '千代田区' | '中央区' | '港区' | '新宿区' | '文京区' | '台東区' | '墨田区' | '江東区' | '品川区' | '目黒区' | '大田区' | '世田谷区' | '渋谷区' | '中野区' | '杉並区' | '豊島区' | '北区' | '荒川区' | '板橋区' | '練馬区' | '足立区' | '葛飾区' | '江戸川区' | '八王子市' | '立川市' | '武蔵野市' | '三鷹市' | '青梅市' | '府中市' | '昭島市' | '調布市' | '町田市' | '小金井市' | '小平市' | '日野市' | '東村山市' | '国分寺市' | '国立市' | '福生市' | '狛江市' | '東大和市' | '清瀬市' | '東久留米市' | '武蔵村山市' | '多摩市' | '稲城市' | '羽村市' | 'あきる野市' | '西東京市' | '西多摩郡瑞穂町' | '西多摩郡日の出町' | '西多摩郡檜原村' | '西多摩郡奥多摩町' | '大島町' | '利島村' | '新島村' | '神津島村' | '三宅島三宅村' | '御蔵島村' | '八丈島八丈町' | '青ヶ島村' | '小笠原諸島小笠原村' | '横浜市' | '横浜市鶴見区' | '横浜市神奈川区' | '横浜市西区' | '横浜市中区' | '横浜市南区' | '横浜市保土ケ谷区' | '横浜市磯子区' | '横浜市金沢区' | '横浜市港北区' | '横浜市戸塚区' | '横浜市港南区' | '横浜市旭区' | '横浜市緑区' | '横浜市瀬谷区' | '横浜市栄区' | '横浜市泉区' | '横浜市青葉区' | '横浜市都筑区' | '川崎市' | '川崎市川崎区' | '川崎市幸区' | '川崎市中原区' | '川崎市高津区' | '川崎市多摩区' | '川崎市宮前区' | '川崎市麻生区' | '相模原市' | '相模原市緑区' | '相模原市中央区' | '相模原市南区' | '横須賀市' | '平塚市' | '鎌倉市' | '藤沢市' | '小田原市' | '茅ヶ崎市' | '逗子市' | '三浦市' | '秦野市' | '厚木市' | '大和市' | '伊勢原市' | '海老名市' | '座間市' | '南足柄市' | '綾瀬市' | '三浦郡葉山町' | '高座郡寒川町' | '中郡大磯町' | '中郡二宮町' | '足柄上郡中井町' | '足柄上郡大井町' | '足柄上郡松田町' | '足柄上郡山北町' | '足柄上郡開成町' | '足柄下郡箱根町' | '足柄下郡真鶴町' | '足柄下郡湯河原町' | '愛甲郡愛川町' | '愛甲郡清川村' | '新潟市' | '新潟市北区' | '新潟市東区' | '新潟市中央区' | '新潟市江南区' | '新潟市秋葉区' | '新潟市南区' | '新潟市西区' | '新潟市西蒲区' | '長岡市' | '三条市' | '柏崎市' | '新発田市' | '小千谷市' | '加茂市' | '十日町市' | '見附市' | '村上市' | '燕市' | '糸魚川市' | '妙高市' | '五泉市' | '上越市' | '阿賀野市' | '佐渡市' | '魚沼市' | '南魚沼市' | '胎内市' | '北蒲原郡聖籠町' | '西蒲原郡弥彦村' | '南蒲原郡田上町' | '東蒲原郡阿賀町' | '三島郡出雲崎町' | '南魚沼郡湯沢町' | '中魚沼郡津南町' | '刈羽郡刈羽村' | '岩船郡関川村' | '岩船郡粟島浦村' | '富山市' | '高岡市' | '魚津市' | '氷見市' | '滑川市' | '黒部市' | '砺波市' | '小矢部市' | '南砺市' | '射水市' | '中新川郡舟橋村' | '中新川郡上市町' | '中新川郡立山町' | '下新川郡入善町' | '下新川郡朝日町' | '金沢市' | '七尾市' | '小松市' | '輪島市' | '珠洲市' | '加賀市' | '羽咋市' | 'かほく市' | '白山市' | '能美市' | '野々市市' | '能美郡川北町' | '河北郡津幡町' | '河北郡内灘町' | '羽咋郡志賀町' | '羽咋郡宝達志水町' | '鹿島郡中能登町' | '鳳珠郡穴水町' | '鳳珠郡能登町' | '福井市' | '敦賀市' | '小浜市' | '大野市' | '勝山市' | '鯖江市' | 'あわら市' | '越前市' | '坂井市' | '吉田郡永平寺町' | '今立郡池田町' | '南条郡南越前町' | '丹生郡越前町' | '三方郡美浜町' | '大飯郡高浜町' | '大飯郡おおい町' | '三方上中郡若狭町' | '甲府市' | '富士吉田市' | '都留市' | '山梨市' | '大月市' | '韮崎市' | '南アルプス市' | '北杜市' | '甲斐市' | '笛吹市' | '上野原市' | '甲州市' | '中央市' | '西八代郡市川三郷町' | '南巨摩郡早川町' | '南巨摩郡身延町' | '南巨摩郡南部町' | '南巨摩郡富士川町' | '中巨摩郡昭和町' | '南都留郡道志村' | '南都留郡西桂町' | '南都留郡忍野村' | '南都留郡山中湖村' | '南都留郡鳴沢村' | '南都留郡富士河口湖町' | '北都留郡小菅村' | '北都留郡丹波山村' | '長野市' | '松本市' | '上田市' | '岡谷市' | '飯田市' | '諏訪市' | '須坂市' | '小諸市' | '伊那市' | '駒ヶ根市' | '中野市' | '大町市' | '飯山市' | '茅野市' | '塩尻市' | '佐久市' | '千曲市' | '東御市' | '安曇野市' | '南佐久郡小海町' | '南佐久郡川上村' | '南佐久郡南牧村' | '南佐久郡南相木村' | '南佐久郡北相木村' | '南佐久郡佐久穂町' | '北佐久郡軽井沢町' | '北佐久郡御代田町' | '北佐久郡立科町' | '小県郡青木村' | '小県郡長和町' | '諏訪郡下諏訪町' | '諏訪郡富士見町' | '諏訪郡原村' | '上伊那郡辰野町' | '上伊那郡箕輪町' | '上伊那郡飯島町' | '上伊那郡南箕輪村' | '上伊那郡中川村' | '上伊那郡宮田村' | '下伊那郡松川町' | '下伊那郡高森町' | '下伊那郡阿南町' | '下伊那郡阿智村' | '下伊那郡平谷村' | '下伊那郡根羽村' | '下伊那郡下條村' | '下伊那郡売木村' | '下伊那郡天龍村' | '下伊那郡泰阜村' | '下伊那郡喬木村' | '下伊那郡豊丘村' | '下伊那郡大鹿村' | '木曽郡上松町' | '木曽郡南木曽町' | '木曽郡木祖村' | '木曽郡王滝村' | '木曽郡大桑村' | '木曽郡木曽町' | '東筑摩郡麻績村' | '東筑摩郡生坂村' | '東筑摩郡山形村' | '東筑摩郡朝日村' | '東筑摩郡筑北村' | '北安曇郡池田町' | '北安曇郡松川村' | '北安曇郡白馬村' | '北安曇郡小谷村' | '埴科郡坂城町' | '上高井郡小布施町' | '上高井郡高山村' | '下高井郡山ノ内町' | '下高井郡木島平村' | '下高井郡野沢温泉村' | '上水内郡信濃町' | '上水内郡小川村' | '上水内郡飯綱町' | '下水内郡栄村' | '岐阜市' | '大垣市' | '高山市' | '多治見市' | '関市' | '中津川市' | '美濃市' | '瑞浪市' | '羽島市' | '恵那市' | '美濃加茂市' | '土岐市' | '各務原市' | '可児市' | '山県市' | '瑞穂市' | '飛騨市' | '本巣市' | '郡上市' | '下呂市' | '海津市' | '羽島郡岐南町' | '羽島郡笠松町' | '養老郡養老町' | '不破郡垂井町' | '不破郡関ケ原町' | '安八郡神戸町' | '安八郡輪之内町' | '安八郡安八町' | '揖斐郡揖斐川町' | '揖斐郡大野町' | '揖斐郡池田町' | '本巣郡北方町' | '加茂郡坂祝町' | '加茂郡富加町' | '加茂郡川辺町' | '加茂郡七宗町' | '加茂郡八百津町' | '加茂郡白川町' | '加茂郡東白川村' | '可児郡御嵩町' | '大野郡白川村' | '静岡市' | '静岡市葵区' | '静岡市駿河区' | '静岡市清水区' | '浜松市' | '浜松市中区' | '浜松市東区' | '浜松市西区' | '浜松市南区' | '浜松市北区' | '浜松市浜北区' | '浜松市天竜区' | '沼津市' | '熱海市' | '三島市' | '富士宮市' | '伊東市' | '島田市' | '富士市' | '磐田市' | '焼津市' | '掛川市' | '藤枝市' | '御殿場市' | '袋井市' | '下田市' | '裾野市' | '湖西市' | '伊豆市' | '御前崎市' | '菊川市' | '伊豆の国市' | '牧之原市' | '賀茂郡東伊豆町' | '賀茂郡河津町' | '賀茂郡南伊豆町' | '賀茂郡松崎町' | '賀茂郡西伊豆町' | '田方郡函南町' | '駿東郡清水町' | '駿東郡長泉町' | '駿東郡小山町' | '榛原郡吉田町' | '榛原郡川根本町' | '周智郡森町' | '名古屋市' | '名古屋市千種区' | '名古屋市東区' | '名古屋市北区' | '名古屋市西区' | '名古屋市中村区' | '名古屋市中区' | '名古屋市昭和区' | '名古屋市瑞穂区' | '名古屋市熱田区' | '名古屋市中川区' | '名古屋市港区' | '名古屋市南区' | '名古屋市守山区' | '名古屋市緑区' | '名古屋市名東区' | '名古屋市天白区' | '豊橋市' | '岡崎市' | '一宮市' | '瀬戸市' | '半田市' | '春日井市' | '豊川市' | '津島市' | '碧南市' | '刈谷市' | '豊田市' | '安城市' | '西尾市' | '蒲郡市' | '犬山市' | '常滑市' | '江南市' | '小牧市' | '稲沢市' | '新城市' | '東海市' | '大府市' | '知多市' | '知立市' | '尾張旭市' | '高浜市' | '岩倉市' | '豊明市' | '日進市' | '田原市' | '愛西市' | '清須市' | '北名古屋市' | '弥富市' | 'みよし市' | 'あま市' | '長久手市' | '愛知郡東郷町' | '西春日井郡豊山町' | '丹羽郡大口町' | '丹羽郡扶桑町' | '海部郡大治町' | '海部郡蟹江町' | '海部郡飛島村' | '知多郡阿久比町' | '知多郡東浦町' | '知多郡南知多町' | '知多郡美浜町' | '知多郡武豊町' | '額田郡幸田町' | '北設楽郡設楽町' | '北設楽郡東栄町' | '北設楽郡豊根村' | '津市' | '四日市市' | '伊勢市' | '松阪市' | '桑名市' | '鈴鹿市' | '名張市' | '尾鷲市' | '亀山市' | '鳥羽市' | '熊野市' | 'いなべ市' | '志摩市' | '伊賀市' | '桑名郡木曽岬町' | '員弁郡東員町' | '三重郡菰野町' | '三重郡朝日町' | '三重郡川越町' | '多気郡多気町' | '多気郡明和町' | '多気郡大台町' | '度会郡玉城町' | '度会郡度会町' | '度会郡大紀町' | '度会郡南伊勢町' | '北牟婁郡紀北町' | '南牟婁郡御浜町' | '南牟婁郡紀宝町' | '大津市' | '彦根市' | '長浜市' | '近江八幡市' | '草津市' | '守山市' | '栗東市' | '甲賀市' | '野洲市' | '湖南市' | '高島市' | '東近江市' | '米原市' | '蒲生郡日野町' | '蒲生郡竜王町' | '愛知郡愛荘町' | '犬上郡豊郷町' | '犬上郡甲良町' | '犬上郡多賀町' | '京都市' | '京都市北区' | '京都市上京区' | '京都市左京区' | '京都市中京区' | '京都市東山区' | '京都市下京区' | '京都市南区' | '京都市右京区' | '京都市伏見区' | '京都市山科区' | '京都市西京区' | '福知山市' | '舞鶴市' | '綾部市' | '宇治市' | '宮津市' | '亀岡市' | '城陽市' | '向日市' | '長岡京市' | '八幡市' | '京田辺市' | '京丹後市' | '南丹市' | '木津川市' | '乙訓郡大山崎町' | '久世郡久御山町' | '綴喜郡井手町' | '綴喜郡宇治田原町' | '相楽郡笠置町' | '相楽郡和束町' | '相楽郡精華町' | '相楽郡南山城村' | '船井郡京丹波町' | '与謝郡伊根町' | '与謝郡与謝野町' | '大阪市' | '大阪市都島区' | '大阪市福島区' | '大阪市此花区' | '大阪市西区' | '大阪市港区' | '大阪市大正区' | '大阪市天王寺区' | '大阪市浪速区' | '大阪市西淀川区' | '大阪市東淀川区' | '大阪市東成区' | '大阪市生野区' | '大阪市旭区' | '大阪市城東区' | '大阪市阿倍野区' | '大阪市住吉区' | '大阪市東住吉区' | '大阪市西成区' | '大阪市淀川区' | '大阪市鶴見区' | '大阪市住之江区' | '大阪市平野区' | '大阪市北区' | '大阪市中央区' | '堺市' | '堺市堺区' | '堺市中区' | '堺市東区' | '堺市西区' | '堺市南区' | '堺市北区' | '堺市美原区' | '岸和田市' | '豊中市' | '池田市' | '吹田市' | '泉大津市' | '高槻市' | '貝塚市' | '守口市' | '枚方市' | '茨木市' | '八尾市' | '泉佐野市' | '富田林市' | '寝屋川市' | '河内長野市' | '松原市' | '大東市' | '和泉市' | '箕面市' | '柏原市' | '羽曳野市' | '門真市' | '摂津市' | '高石市' | '藤井寺市' | '東大阪市' | '泉南市' | '四條畷市' | '交野市' | '大阪狭山市' | '阪南市' | '三島郡島本町' | '豊能郡豊能町' | '豊能郡能勢町' | '泉北郡忠岡町' | '泉南郡熊取町' | '泉南郡田尻町' | '泉南郡岬町' | '南河内郡太子町' | '南河内郡河南町' | '南河内郡千早赤阪村' | '神戸市' | '神戸市東灘区' | '神戸市灘区' | '神戸市兵庫区' | '神戸市長田区' | '神戸市須磨区' | '神戸市垂水区' | '神戸市北区' | '神戸市中央区' | '神戸市西区' | '姫路市' | '尼崎市' | '明石市' | '西宮市' | '洲本市' | '芦屋市' | '伊丹市' | '相生市' | '豊岡市' | '加古川市' | '赤穂市' | '西脇市' | '宝塚市' | '三木市' | '高砂市' | '川西市' | '小野市' | '三田市' | '加西市' | '丹波篠山市' | '養父市' | '丹波市' | '南あわじ市' | '朝来市' | '淡路市' | '宍粟市' | '加東市' | 'たつの市' | '川辺郡猪名川町' | '多可郡多可町' | '加古郡稲美町' | '加古郡播磨町' | '神崎郡市川町' | '神崎郡福崎町' | '神崎郡神河町' | '揖保郡太子町' | '赤穂郡上郡町' | '佐用郡佐用町' | '美方郡香美町' | '美方郡新温泉町' | '奈良市' | '大和高田市' | '大和郡山市' | '天理市' | '橿原市' | '桜井市' | '五條市' | '御所市' | '生駒市' | '香芝市' | '葛城市' | '宇陀市' | '山辺郡山添村' | '生駒郡平群町' | '生駒郡三郷町' | '生駒郡斑鳩町' | '生駒郡安堵町' | '磯城郡川西町' | '磯城郡三宅町' | '磯城郡田原本町' | '宇陀郡曽爾村' | '宇陀郡御杖村' | '高市郡高取町' | '高市郡明日香村' | '北葛城郡上牧町' | '北葛城郡王寺町' | '北葛城郡広陵町' | '北葛城郡河合町' | '吉野郡吉野町' | '吉野郡大淀町' | '吉野郡下市町' | '吉野郡黒滝村' | '吉野郡天川村' | '吉野郡野迫川村' | '吉野郡十津川村' | '吉野郡下北山村' | '吉野郡上北山村' | '吉野郡川上村' | '吉野郡東吉野村' | '和歌山市' | '海南市' | '橋本市' | '有田市' | '御坊市' | '田辺市' | '新宮市' | '紀の川市' | '岩出市' | '海草郡紀美野町' | '伊都郡かつらぎ町' | '伊都郡九度山町' | '伊都郡高野町' | '有田郡湯浅町' | '有田郡広川町' | '有田郡有田川町' | '日高郡美浜町' | '日高郡日高町' | '日高郡由良町' | '日高郡印南町' | '日高郡みなべ町' | '日高郡日高川町' | '西牟婁郡白浜町' | '西牟婁郡上富田町' | '西牟婁郡すさみ町' | '東牟婁郡那智勝浦町' | '東牟婁郡太地町' | '東牟婁郡古座川町' | '東牟婁郡北山村' | '東牟婁郡串本町' | '鳥取市' | '米子市' | '倉吉市' | '境港市' | '岩美郡岩美町' | '八頭郡若桜町' | '八頭郡智頭町' | '八頭郡八頭町' | '東伯郡三朝町' | '東伯郡湯梨浜町' | '東伯郡琴浦町' | '東伯郡北栄町' | '西伯郡日吉津村' | '西伯郡大山町' | '西伯郡南部町' | '西伯郡伯耆町' | '日野郡日南町' | '日野郡日野町' | '日野郡江府町' | '松江市' | '浜田市' | '出雲市' | '益田市' | '大田市' | '安来市' | '江津市' | '雲南市' | '仁多郡奥出雲町' | '飯石郡飯南町' | '邑智郡川本町' | '邑智郡美郷町' | '邑智郡邑南町' | '鹿足郡津和野町' | '鹿足郡吉賀町' | '隠岐郡海士町' | '隠岐郡西ノ島町' | '隠岐郡知夫村' | '隠岐郡隠岐の島町' | '岡山市' | '岡山市北区' | '岡山市中区' | '岡山市東区' | '岡山市南区' | '倉敷市' | '津山市' | '玉野市' | '笠岡市' | '井原市' | '総社市' | '高梁市' | '新見市' | '備前市' | '瀬戸内市' | '赤磐市' | '真庭市' | '美作市' | '浅口市' | '和気郡和気町' | '都窪郡早島町' | '浅口郡里庄町' | '小田郡矢掛町' | '真庭郡新庄村' | '苫田郡鏡野町' | '勝田郡勝央町' | '勝田郡奈義町' | '英田郡西粟倉村' | '久米郡久米南町' | '久米郡美咲町' | '加賀郡吉備中央町' | '広島市' | '広島市中区' | '広島市東区' | '広島市南区' | '広島市西区' | '広島市安佐南区' | '広島市安佐北区' | '広島市安芸区' | '広島市佐伯区' | '呉市' | '竹原市' | '三原市' | '尾道市' | '福山市' | '三次市' | '庄原市' | '大竹市' | '東広島市' | '廿日市市' | '安芸高田市' | '江田島市' | '安芸郡府中町' | '安芸郡海田町' | '安芸郡熊野町' | '安芸郡坂町' | '山県郡安芸太田町' | '山県郡北広島町' | '豊田郡大崎上島町' | '世羅郡世羅町' | '神石郡神石高原町' | '下関市' | '宇部市' | '山口市' | '萩市' | '防府市' | '下松市' | '岩国市' | '光市' | '長門市' | '柳井市' | '美祢市' | '周南市' | '山陽小野田市' | '大島郡周防大島町' | '玖珂郡和木町' | '熊毛郡上関町' | '熊毛郡田布施町' | '熊毛郡平生町' | '阿武郡阿武町' | '徳島市' | '鳴門市' | '小松島市' | '阿南市' | '吉野川市' | '阿波市' | '美馬市' | '三好市' | '勝浦郡勝浦町' | '勝浦郡上勝町' | '名東郡佐那河内村' | '名西郡石井町' | '名西郡神山町' | '那賀郡那賀町' | '海部郡牟岐町' | '海部郡美波町' | '海部郡海陽町' | '板野郡松茂町' | '板野郡北島町' | '板野郡藍住町' | '板野郡板野町' | '板野郡上板町' | '美馬郡つるぎ町' | '三好郡東みよし町' | '高松市' | '丸亀市' | '坂出市' | '善通寺市' | '観音寺市' | 'さぬき市' | '東かがわ市' | '三豊市' | '小豆郡土庄町' | '小豆郡小豆島町' | '木田郡三木町' | '香川郡直島町' | '綾歌郡宇多津町' | '綾歌郡綾川町' | '仲多度郡琴平町' | '仲多度郡多度津町' | '仲多度郡まんのう町' | '松山市' | '今治市' | '宇和島市' | '八幡浜市' | '新居浜市' | '西条市' | '大洲市' | '伊予市' | '四国中央市' | '西予市' | '東温市' | '越智郡上島町' | '上浮穴郡久万高原町' | '伊予郡松前町' | '伊予郡砥部町' | '喜多郡内子町' | '西宇和郡伊方町' | '北宇和郡松野町' | '北宇和郡鬼北町' | '南宇和郡愛南町' | '高知市' | '室戸市' | '安芸市' | '南国市' | '土佐市' | '須崎市' | '宿毛市' | '土佐清水市' | '四万十市' | '香南市' | '香美市' | '安芸郡東洋町' | '安芸郡奈半利町' | '安芸郡田野町' | '安芸郡安田町' | '安芸郡北川村' | '安芸郡馬路村' | '安芸郡芸西村' | '長岡郡本山町' | '長岡郡大豊町' | '土佐郡土佐町' | '土佐郡大川村' | '吾川郡いの町' | '吾川郡仁淀川町' | '高岡郡中土佐町' | '高岡郡佐川町' | '高岡郡越知町' | '高岡郡梼原町' | '高岡郡日高村' | '高岡郡津野町' | '高岡郡四万十町' | '幡多郡大月町' | '幡多郡三原村' | '幡多郡黒潮町' | '北九州市' | '北九州市門司区' | '北九州市若松区' | '北九州市戸畑区' | '北九州市小倉北区' | '北九州市小倉南区' | '北九州市八幡東区' | '北九州市八幡西区' | '福岡市' | '福岡市東区' | '福岡市博多区' | '福岡市中央区' | '福岡市南区' | '福岡市西区' | '福岡市城南区' | '福岡市早良区' | '大牟田市' | '久留米市' | '直方市' | '飯塚市' | '田川市' | '柳川市' | '八女市' | '筑後市' | '大川市' | '行橋市' | '豊前市' | '中間市' | '小郡市' | '筑紫野市' | '春日市' | '大野城市' | '宗像市' | '太宰府市' | '古賀市' | '福津市' | 'うきは市' | '宮若市' | '嘉麻市' | '朝倉市' | 'みやま市' | '糸島市' | '那珂川市' | '糟屋郡宇美町' | '糟屋郡篠栗町' | '糟屋郡志免町' | '糟屋郡須恵町' | '糟屋郡新宮町' | '糟屋郡久山町' | '糟屋郡粕屋町' | '遠賀郡芦屋町' | '遠賀郡水巻町' | '遠賀郡岡垣町' | '遠賀郡遠賀町' | '鞍手郡小竹町' | '鞍手郡鞍手町' | '嘉穂郡桂川町' | '朝倉郡筑前町' | '朝倉郡東峰村' | '三井郡大刀洗町' | '三潴郡大木町' | '八女郡広川町' | '田川郡香春町' | '田川郡添田町' | '田川郡糸田町' | '田川郡川崎町' | '田川郡大任町' | '田川郡赤村' | '田川郡福智町' | '京都郡苅田町' | '京都郡みやこ町' | '築上郡吉富町' | '築上郡上毛町' | '築上郡築上町' | '佐賀市' | '唐津市' | '鳥栖市' | '多久市' | '伊万里市' | '武雄市' | '鹿島市' | '小城市' | '嬉野市' | '神埼市' | '神埼郡吉野ヶ里町' | '三養基郡基山町' | '三養基郡上峰町' | '三養基郡みやき町' | '東松浦郡玄海町' | '西松浦郡有田町' | '杵島郡大町町' | '杵島郡江北町' | '杵島郡白石町' | '藤津郡太良町' | '長崎市' | '佐世保市' | '島原市' | '諫早市' | '大村市' | '平戸市' | '松浦市' | '対馬市' | '壱岐市' | '五島市' | '西海市' | '雲仙市' | '南島原市' | '西彼杵郡長与町' | '西彼杵郡時津町' | '東彼杵郡東彼杵町' | '東彼杵郡川棚町' | '東彼杵郡波佐見町' | '北松浦郡小値賀町' | '北松浦郡佐々町' | '南松浦郡新上五島町' | '熊本市' | '熊本市中央区' | '熊本市東区' | '熊本市西区' | '熊本市南区' | '熊本市北区' | '八代市' | '人吉市' | '荒尾市' | '水俣市' | '玉名市' | '山鹿市' | '菊池市' | '宇土市' | '上天草市' | '宇城市' | '阿蘇市' | '天草市' | '合志市' | '下益城郡美里町' | '玉名郡玉東町' | '玉名郡南関町' | '玉名郡長洲町' | '玉名郡和水町' | '菊池郡大津町' | '菊池郡菊陽町' | '阿蘇郡南小国町' | '阿蘇郡小国町' | '阿蘇郡産山村' | '阿蘇郡高森町' | '阿蘇郡西原村' | '阿蘇郡南阿蘇村' | '上益城郡御船町' | '上益城郡嘉島町' | '上益城郡益城町' | '上益城郡甲佐町' | '上益城郡山都町' | '八代郡氷川町' | '葦北郡芦北町' | '葦北郡津奈木町' | '球磨郡錦町' | '球磨郡多良木町' | '球磨郡湯前町' | '球磨郡水上村' | '球磨郡相良村' | '球磨郡五木村' | '球磨郡山江村' | '球磨郡球磨村' | '球磨郡あさぎり町' | '天草郡苓北町' | '大分市' | '別府市' | '中津市' | '日田市' | '佐伯市' | '臼杵市' | '津久見市' | '竹田市' | '豊後高田市' | '杵築市' | '宇佐市' | '豊後大野市' | '由布市' | '国東市' | '東国東郡姫島村' | '速見郡日出町' | '玖珠郡九重町' | '玖珠郡玖珠町' | '宮崎市' | '都城市' | '延岡市' | '日南市' | '小林市' | '日向市' | '串間市' | '西都市' | 'えびの市' | '北諸県郡三股町' | '西諸県郡高原町' | '東諸県郡国富町' | '東諸県郡綾町' | '児湯郡高鍋町' | '児湯郡新富町' | '児湯郡西米良村' | '児湯郡木城町' | '児湯郡川南町' | '児湯郡都農町' | '東臼杵郡門川町' | '東臼杵郡諸塚村' | '東臼杵郡椎葉村' | '東臼杵郡美郷町' | '西臼杵郡高千穂町' | '西臼杵郡日之影町' | '西臼杵郡五ヶ瀬町' | '鹿児島市' | '鹿屋市' | '枕崎市' | '阿久根市' | '出水市' | '指宿市' | '西之表市' | '垂水市' | '薩摩川内市' | '日置市' | '曽於市' | '霧島市' | 'いちき串木野市' | '南さつま市' | '志布志市' | '奄美市' | '南九州市' | '伊佐市' | '姶良市' | '鹿児島郡三島村' | '鹿児島郡十島村' | '薩摩郡さつま町' | '出水郡長島町' | '姶良郡湧水町' | '曽於郡大崎町' | '肝属郡東串良町' | '肝属郡錦江町' | '肝属郡南大隅町' | '肝属郡肝付町' | '熊毛郡中種子町' | '熊毛郡南種子町' | '熊毛郡屋久島町' | '大島郡大和村' | '大島郡宇検村' | '大島郡瀬戸内町' | '大島郡龍郷町' | '大島郡喜界町' | '大島郡徳之島町' | '大島郡天城町' | '大島郡伊仙町' | '大島郡和泊町' | '大島郡知名町' | '大島郡与論町' | '那覇市' | '宜野湾市' | '石垣市' | '浦添市' | '名護市' | '糸満市' | '沖縄市' | '豊見城市' | 'うるま市' | '宮古島市' | '南城市' | '国頭郡国頭村' | '国頭郡大宜味村' | '国頭郡東村' | '国頭郡今帰仁村' | '国頭郡本部町' | '国頭郡恩納村' | '国頭郡宜野座村' | '国頭郡金武町' | '国頭郡伊江村' | '中頭郡読谷村' | '中頭郡嘉手納町' | '中頭郡北谷町' | '中頭郡北中城村' | '中頭郡中城村' | '中頭郡西原町' | '島尻郡与那原町' | '島尻郡南風原町' | '島尻郡渡嘉敷村' | '島尻郡座間味村' | '島尻郡粟国村' | '島尻郡渡名喜村' | '島尻郡南大東村' | '島尻郡北大東村' | '島尻郡伊平屋村' | '島尻郡伊是名村' | '島尻郡久米島町' | '島尻郡八重瀬町' | '宮古郡多良間村' | '八重山郡竹富町' | '八重山郡与那国町');
            }>;
            /**
             * Table
             */
            ext_col_06?: Array<{
                key: string;
                label: string;
            } | '' | '1' | '2' | '3' | '4' | '5'>;
            /**
             * Relation
             */
            ext_col_09?: Array<{
                module_type: string;
                module_id: number;
            } | number>;
            /**
             * Private File
             */
            ext_col_11?: Array<{
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
                /**
                 * File ID. Whether the item should be updated or inserted depends on this ID being set or not.
                 */
                id?: string;
            }>;
            /**
             * Private Image File
             */
            ext_col_17?: Array<{
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
                /**
                 * File ID. Whether the item should be updated or inserted depends on this ID being set or not.
                 */
                id?: string;
            }>;
            /**
             * JSON
             */
            ext_jsn_12?: Array<{
                /**
                 * * 1 => opt1
                 * * 2 => opt2
                 */
                options?: ('' | '1' | '2');
                text?: string;
            }>;
            /**
             * HTML
             */
            ext_col_13?: Array<string>;
            /**
             * Wysiwyg
             */
            ext_col_14?: Array<string>;
            /**
             * Vimeo
             */
            ext_col_16?: Array<{
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
                /**
                 * File ID. Whether the item should be updated or inserted depends on this ID being set or not.
                 */
                id?: string;
            }>;
            /**
             * Number
             */
            ext_col_18?: Array<string>;
            /**
             * Validate
             */
            validate_only?: boolean;
        };
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type postContentServiceRcmsApi1TopicsMultipleInsertResponse = any;
    interface postContentServiceRcmsApi1TopicsMultipleUpdateTopicsIdRequest {
        topicsId: string;
        requestBody: {
            /**
             * Topic title
             */
            subject?: string;
            /**
             * Slug
             */
            slug?: string;
            /**
             * Category ID
             * * 2 => CategoryForMultiple1
             * * 9 => CategoryForMultiple2
             */
            contents_type?: (2 | 9);
            /**
             * Published / Not published
             */
            open_type?: ('open' | 'close' | 'default');
            /**
             * Display all topics to logged in members, regardless ther public/hidden status
             */
            topics_flg?: (0 | 1);
            /**
             * Contents
             */
            contents?: string;
            /**
             * display up
             */
            regular_flg?: number;
            /**
             * Date
             */
            ymd?: string;
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
            /**
             * Text
             */
            ext_col_01?: Array<string>;
            /**
             * TextArea
             */
            ext_col_02?: Array<string>;
            /**
             * Select
             */
            ext_col_03?: Array<{
                key: string;
                label: string;
            } | '' | '1' | '2' | '3'>;
            /**
             * Checkbox
             */
            ext_col_04?: Array<Array<{
                key: string;
                label: string;
            } | '1' | '2' | '3'>>;
            /**
             * Date
             */
            ext_col_07?: Array<string | string | {
                ymd: string;
            }>;
            /**
             * DateTime
             */
            ext_col_08?: Array<string | string | {
                ymd: string;
                h: number;
                i: number;
            }>;
            /**
             * Tdfk
             */
            ext_col_05?: Array<{
                tdfk_cd?: ('01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '20' | '21' | '22' | '23' | '24' | '25' | '26' | '27' | '28' | '29' | '30' | '31' | '32' | '33' | '34' | '35' | '36' | '37' | '38' | '39' | '40' | '41' | '42' | '43' | '44' | '45' | '46' | '47' | '99');
                tdfk_nm?: ('北海道' | '青森県' | '岩手県' | '宮城県' | '秋田県' | '山形県' | '福島県' | '茨城県' | '栃木県' | '群馬県' | '埼玉県' | '千葉県' | '東京都' | '神奈川県' | '新潟県' | '富山県' | '石川県' | '福井県' | '山梨県' | '長野県' | '岐阜県' | '静岡県' | '愛知県' | '三重県' | '滋賀県' | '京都府' | '大阪府' | '兵庫県' | '奈良県' | '和歌山県' | '鳥取県' | '島根県' | '岡山県' | '広島県' | '山口県' | '徳島県' | '香川県' | '愛媛県' | '高知県' | '福岡県' | '佐賀県' | '長崎県' | '熊本県' | '大分県' | '宮崎県' | '鹿児島県' | '沖縄県' | '海外');
            }>;
            /**
             * TdfkAndCity
             */
            ext_col_15?: Array<{
                tdfk_cd?: ('01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '20' | '21' | '22' | '23' | '24' | '25' | '26' | '27' | '28' | '29' | '30' | '31' | '32' | '33' | '34' | '35' | '36' | '37' | '38' | '39' | '40' | '41' | '42' | '43' | '44' | '45' | '46' | '47' | '99');
                tdfk_nm?: ('北海道' | '青森県' | '岩手県' | '宮城県' | '秋田県' | '山形県' | '福島県' | '茨城県' | '栃木県' | '群馬県' | '埼玉県' | '千葉県' | '東京都' | '神奈川県' | '新潟県' | '富山県' | '石川県' | '福井県' | '山梨県' | '長野県' | '岐阜県' | '静岡県' | '愛知県' | '三重県' | '滋賀県' | '京都府' | '大阪府' | '兵庫県' | '奈良県' | '和歌山県' | '鳥取県' | '島根県' | '岡山県' | '広島県' | '山口県' | '徳島県' | '香川県' | '愛媛県' | '高知県' | '福岡県' | '佐賀県' | '長崎県' | '熊本県' | '大分県' | '宮崎県' | '鹿児島県' | '沖縄県' | '海外');
                sub_area_cd?: ('01100' | '01101' | '01102' | '01103' | '01104' | '01105' | '01106' | '01107' | '01108' | '01109' | '01110' | '01202' | '01203' | '01204' | '01205' | '01206' | '01207' | '01208' | '01209' | '01210' | '01211' | '01212' | '01213' | '01214' | '01215' | '01216' | '01217' | '01218' | '01219' | '01220' | '01221' | '01222' | '01223' | '01224' | '01225' | '01226' | '01227' | '01228' | '01229' | '01230' | '01231' | '01233' | '01234' | '01235' | '01236' | '01303' | '01304' | '01331' | '01332' | '01333' | '01334' | '01337' | '01343' | '01345' | '01346' | '01347' | '01361' | '01362' | '01363' | '01364' | '01367' | '01370' | '01371' | '01391' | '01392' | '01393' | '01394' | '01395' | '01396' | '01397' | '01398' | '01399' | '01400' | '01401' | '01402' | '01403' | '01404' | '01405' | '01406' | '01407' | '01408' | '01409' | '01423' | '01424' | '01425' | '01427' | '01428' | '01429' | '01430' | '01431' | '01432' | '01433' | '01434' | '01436' | '01437' | '01438' | '01452' | '01453' | '01454' | '01455' | '01456' | '01457' | '01458' | '01459' | '01460' | '01461' | '01462' | '01463' | '01464' | '01465' | '01468' | '01469' | '01470' | '01471' | '01472' | '01481' | '01482' | '01483' | '01484' | '01485' | '01486' | '01487' | '01511' | '01512' | '01513' | '01514' | '01516' | '01517' | '01518' | '01519' | '01520' | '01543' | '01544' | '01545' | '01546' | '01547' | '01549' | '01550' | '01552' | '01555' | '01559' | '01560' | '01561' | '01562' | '01563' | '01564' | '01571' | '01575' | '01578' | '01581' | '01584' | '01585' | '01586' | '01601' | '01602' | '01604' | '01607' | '01608' | '01609' | '01610' | '01631' | '01632' | '01633' | '01634' | '01635' | '01636' | '01637' | '01638' | '01639' | '01641' | '01642' | '01643' | '01644' | '01645' | '01646' | '01647' | '01648' | '01649' | '01661' | '01662' | '01663' | '01664' | '01665' | '01667' | '01668' | '01691' | '01692' | '01693' | '01694' | '02201' | '02202' | '02203' | '02204' | '02205' | '02206' | '02207' | '02208' | '02209' | '02210' | '02301' | '02303' | '02304' | '02307' | '02321' | '02323' | '02343' | '02361' | '02362' | '02367' | '02381' | '02384' | '02387' | '02401' | '02402' | '02405' | '02406' | '02408' | '02411' | '02412' | '02423' | '02424' | '02425' | '02426' | '02441' | '02442' | '02443' | '02445' | '02446' | '02450' | '03201' | '03202' | '03203' | '03205' | '03206' | '03207' | '03208' | '03209' | '03210' | '03211' | '03213' | '03214' | '03215' | '03216' | '03301' | '03302' | '03303' | '03321' | '03322' | '03366' | '03381' | '03402' | '03441' | '03461' | '03482' | '03483' | '03484' | '03485' | '03501' | '03503' | '03506' | '03507' | '03524' | '04100' | '04101' | '04102' | '04103' | '04104' | '04105' | '04202' | '04203' | '04205' | '04206' | '04207' | '04208' | '04209' | '04211' | '04212' | '04213' | '04214' | '04215' | '04216' | '04301' | '04302' | '04321' | '04322' | '04323' | '04324' | '04341' | '04361' | '04362' | '04401' | '04404' | '04406' | '04421' | '04422' | '04424' | '04444' | '04445' | '04501' | '04505' | '04581' | '04606' | '05201' | '05202' | '05203' | '05204' | '05206' | '05207' | '05209' | '05210' | '05211' | '05212' | '05213' | '05214' | '05215' | '05303' | '05327' | '05346' | '05348' | '05349' | '05361' | '05363' | '05366' | '05368' | '05434' | '05463' | '05464' | '06201' | '06202' | '06203' | '06204' | '06205' | '06206' | '06207' | '06208' | '06209' | '06210' | '06211' | '06212' | '06213' | '06301' | '06302' | '06321' | '06322' | '06323' | '06324' | '06341' | '06361' | '06362' | '06363' | '06364' | '06365' | '06366' | '06367' | '06381' | '06382' | '06401' | '06402' | '06403' | '06426' | '06428' | '06461' | '07201' | '07202' | '07203' | '07204' | '07205' | '07207' | '07208' | '07209' | '07210' | '07211' | '07212' | '07213' | '07214' | '07301' | '07303' | '07308' | '07322' | '07342' | '07344' | '07362' | '07364' | '07367' | '07368' | '07402' | '07405' | '07407' | '07408' | '07421' | '07422' | '07423' | '07444' | '07445' | '07446' | '07447' | '07461' | '07464' | '07465' | '07466' | '07481' | '07482' | '07483' | '07484' | '07501' | '07502' | '07503' | '07504' | '07505' | '07521' | '07522' | '07541' | '07542' | '07543' | '07544' | '07545' | '07546' | '07547' | '07548' | '07561' | '07564' | '08201' | '08202' | '08203' | '08204' | '08205' | '08207' | '08208' | '08210' | '08211' | '08212' | '08214' | '08215' | '08216' | '08217' | '08219' | '08220' | '08221' | '08222' | '08223' | '08224' | '08225' | '08226' | '08227' | '08228' | '08229' | '08230' | '08231' | '08232' | '08233' | '08234' | '08235' | '08236' | '08302' | '08309' | '08310' | '08341' | '08364' | '08442' | '08443' | '08447' | '08521' | '08542' | '08546' | '08564' | '09201' | '09202' | '09203' | '09204' | '09205' | '09206' | '09208' | '09209' | '09210' | '09211' | '09213' | '09214' | '09215' | '09216' | '09301' | '09342' | '09343' | '09344' | '09345' | '09361' | '09364' | '09384' | '09386' | '09407' | '09411' | '10201' | '10202' | '10203' | '10204' | '10205' | '10206' | '10207' | '10208' | '10209' | '10210' | '10211' | '10212' | '10344' | '10345' | '10366' | '10367' | '10382' | '10383' | '10384' | '10421' | '10424' | '10425' | '10426' | '10428' | '10429' | '10443' | '10444' | '10448' | '10449' | '10464' | '10521' | '10522' | '10523' | '10524' | '10525' | '11100' | '11101' | '11102' | '11103' | '11104' | '11105' | '11106' | '11107' | '11108' | '11109' | '11110' | '11201' | '11202' | '11203' | '11206' | '11207' | '11208' | '11209' | '11210' | '11211' | '11212' | '11214' | '11215' | '11216' | '11217' | '11218' | '11219' | '11221' | '11222' | '11223' | '11224' | '11225' | '11227' | '11228' | '11229' | '11230' | '11231' | '11232' | '11233' | '11234' | '11235' | '11237' | '11238' | '11239' | '11240' | '11241' | '11242' | '11243' | '11245' | '11246' | '11301' | '11324' | '11326' | '11327' | '11341' | '11342' | '11343' | '11346' | '11347' | '11348' | '11349' | '11361' | '11362' | '11363' | '11365' | '11369' | '11381' | '11383' | '11385' | '11408' | '11442' | '11464' | '11465' | '12100' | '12101' | '12102' | '12103' | '12104' | '12105' | '12106' | '12202' | '12203' | '12204' | '12205' | '12206' | '12207' | '12208' | '12210' | '12211' | '12212' | '12213' | '12215' | '12216' | '12217' | '12218' | '12219' | '12220' | '12221' | '12222' | '12223' | '12224' | '12225' | '12226' | '12227' | '12228' | '12229' | '12230' | '12231' | '12232' | '12233' | '12234' | '12235' | '12236' | '12237' | '12238' | '12239' | '12322' | '12329' | '12342' | '12347' | '12349' | '12403' | '12409' | '12410' | '12421' | '12422' | '12423' | '12424' | '12426' | '12427' | '12441' | '12443' | '12463' | '13101' | '13102' | '13103' | '13104' | '13105' | '13106' | '13107' | '13108' | '13109' | '13110' | '13111' | '13112' | '13113' | '13114' | '13115' | '13116' | '13117' | '13118' | '13119' | '13120' | '13121' | '13122' | '13123' | '13201' | '13202' | '13203' | '13204' | '13205' | '13206' | '13207' | '13208' | '13209' | '13210' | '13211' | '13212' | '13213' | '13214' | '13215' | '13218' | '13219' | '13220' | '13221' | '13222' | '13223' | '13224' | '13225' | '13227' | '13228' | '13229' | '13303' | '13305' | '13307' | '13308' | '13361' | '13362' | '13363' | '13364' | '13381' | '13382' | '13401' | '13402' | '13421' | '14100' | '14101' | '14102' | '14103' | '14104' | '14105' | '14106' | '14107' | '14108' | '14109' | '14110' | '14111' | '14112' | '14113' | '14114' | '14115' | '14116' | '14117' | '14118' | '14130' | '14131' | '14132' | '14133' | '14134' | '14135' | '14136' | '14137' | '14150' | '14151' | '14152' | '14153' | '14201' | '14203' | '14204' | '14205' | '14206' | '14207' | '14208' | '14210' | '14211' | '14212' | '14213' | '14214' | '14215' | '14216' | '14217' | '14218' | '14301' | '14321' | '14341' | '14342' | '14361' | '14362' | '14363' | '14364' | '14366' | '14382' | '14383' | '14384' | '14401' | '14402' | '15100' | '15101' | '15102' | '15103' | '15104' | '15105' | '15106' | '15107' | '15108' | '15202' | '15204' | '15205' | '15206' | '15208' | '15209' | '15210' | '15211' | '15212' | '15213' | '15216' | '15217' | '15218' | '15222' | '15223' | '15224' | '15225' | '15226' | '15227' | '15307' | '15342' | '15361' | '15385' | '15405' | '15461' | '15482' | '15504' | '15581' | '15586' | '16201' | '16202' | '16204' | '16205' | '16206' | '16207' | '16208' | '16209' | '16210' | '16211' | '16321' | '16322' | '16323' | '16342' | '16343' | '17201' | '17202' | '17203' | '17204' | '17205' | '17206' | '17207' | '17209' | '17210' | '17211' | '17212' | '17324' | '17361' | '17365' | '17384' | '17386' | '17407' | '17461' | '17463' | '18201' | '18202' | '18204' | '18205' | '18206' | '18207' | '18208' | '18209' | '18210' | '18322' | '18382' | '18404' | '18423' | '18442' | '18481' | '18483' | '18501' | '19201' | '19202' | '19204' | '19205' | '19206' | '19207' | '19208' | '19209' | '19210' | '19211' | '19212' | '19213' | '19214' | '19346' | '19364' | '19365' | '19366' | '19368' | '19384' | '19422' | '19423' | '19424' | '19425' | '19429' | '19430' | '19442' | '19443' | '20201' | '20202' | '20203' | '20204' | '20205' | '20206' | '20207' | '20208' | '20209' | '20210' | '20211' | '20212' | '20213' | '20214' | '20215' | '20217' | '20218' | '20219' | '20220' | '20303' | '20304' | '20305' | '20306' | '20307' | '20309' | '20321' | '20323' | '20324' | '20349' | '20350' | '20361' | '20362' | '20363' | '20382' | '20383' | '20384' | '20385' | '20386' | '20388' | '20402' | '20403' | '20404' | '20407' | '20409' | '20410' | '20411' | '20412' | '20413' | '20414' | '20415' | '20416' | '20417' | '20422' | '20423' | '20425' | '20429' | '20430' | '20432' | '20446' | '20448' | '20450' | '20451' | '20452' | '20481' | '20482' | '20485' | '20486' | '20521' | '20541' | '20543' | '20561' | '20562' | '20563' | '20583' | '20588' | '20590' | '20602' | '21201' | '21202' | '21203' | '21204' | '21205' | '21206' | '21207' | '21208' | '21209' | '21210' | '21211' | '21212' | '21213' | '21214' | '21215' | '21216' | '21217' | '21218' | '21219' | '21220' | '21221' | '21302' | '21303' | '21341' | '21361' | '21362' | '21381' | '21382' | '21383' | '21401' | '21403' | '21404' | '21421' | '21501' | '21502' | '21503' | '21504' | '21505' | '21506' | '21507' | '21521' | '21604' | '22100' | '22101' | '22102' | '22103' | '22130' | '22131' | '22132' | '22133' | '22134' | '22135' | '22136' | '22137' | '22203' | '22205' | '22206' | '22207' | '22208' | '22209' | '22210' | '22211' | '22212' | '22213' | '22214' | '22215' | '22216' | '22219' | '22220' | '22221' | '22222' | '22223' | '22224' | '22225' | '22226' | '22301' | '22302' | '22304' | '22305' | '22306' | '22325' | '22341' | '22342' | '22344' | '22424' | '22429' | '22461' | '23100' | '23101' | '23102' | '23103' | '23104' | '23105' | '23106' | '23107' | '23108' | '23109' | '23110' | '23111' | '23112' | '23113' | '23114' | '23115' | '23116' | '23201' | '23202' | '23203' | '23204' | '23205' | '23206' | '23207' | '23208' | '23209' | '23210' | '23211' | '23212' | '23213' | '23214' | '23215' | '23216' | '23217' | '23219' | '23220' | '23221' | '23222' | '23223' | '23224' | '23225' | '23226' | '23227' | '23228' | '23229' | '23230' | '23231' | '23232' | '23233' | '23234' | '23235' | '23236' | '23237' | '23238' | '23302' | '23342' | '23361' | '23362' | '23424' | '23425' | '23427' | '23441' | '23442' | '23445' | '23446' | '23447' | '23501' | '23561' | '23562' | '23563' | '24201' | '24202' | '24203' | '24204' | '24205' | '24207' | '24208' | '24209' | '24210' | '24211' | '24212' | '24214' | '24215' | '24216' | '24303' | '24324' | '24341' | '24343' | '24344' | '24441' | '24442' | '24443' | '24461' | '24470' | '24471' | '24472' | '24543' | '24561' | '24562' | '25201' | '25202' | '25203' | '25204' | '25206' | '25207' | '25208' | '25209' | '25210' | '25211' | '25212' | '25213' | '25214' | '25383' | '25384' | '25425' | '25441' | '25442' | '25443' | '26100' | '26101' | '26102' | '26103' | '26104' | '26105' | '26106' | '26107' | '26108' | '26109' | '26110' | '26111' | '26201' | '26202' | '26203' | '26204' | '26205' | '26206' | '26207' | '26208' | '26209' | '26210' | '26211' | '26212' | '26213' | '26214' | '26303' | '26322' | '26343' | '26344' | '26364' | '26365' | '26366' | '26367' | '26407' | '26463' | '26465' | '27100' | '27102' | '27103' | '27104' | '27106' | '27107' | '27108' | '27109' | '27111' | '27113' | '27114' | '27115' | '27116' | '27117' | '27118' | '27119' | '27120' | '27121' | '27122' | '27123' | '27124' | '27125' | '27126' | '27127' | '27128' | '27140' | '27141' | '27142' | '27143' | '27144' | '27145' | '27146' | '27147' | '27202' | '27203' | '27204' | '27205' | '27206' | '27207' | '27208' | '27209' | '27210' | '27211' | '27212' | '27213' | '27214' | '27215' | '27216' | '27217' | '27218' | '27219' | '27220' | '27221' | '27222' | '27223' | '27224' | '27225' | '27226' | '27227' | '27228' | '27229' | '27230' | '27231' | '27232' | '27301' | '27321' | '27322' | '27341' | '27361' | '27362' | '27366' | '27381' | '27382' | '27383' | '28100' | '28101' | '28102' | '28105' | '28106' | '28107' | '28108' | '28109' | '28110' | '28111' | '28201' | '28202' | '28203' | '28204' | '28205' | '28206' | '28207' | '28208' | '28209' | '28210' | '28212' | '28213' | '28214' | '28215' | '28216' | '28217' | '28218' | '28219' | '28220' | '28221' | '28222' | '28223' | '28224' | '28225' | '28226' | '28227' | '28228' | '28229' | '28301' | '28365' | '28381' | '28382' | '28442' | '28443' | '28446' | '28464' | '28481' | '28501' | '28585' | '28586' | '29201' | '29202' | '29203' | '29204' | '29205' | '29206' | '29207' | '29208' | '29209' | '29210' | '29211' | '29212' | '29322' | '29342' | '29343' | '29344' | '29345' | '29361' | '29362' | '29363' | '29385' | '29386' | '29401' | '29402' | '29424' | '29425' | '29426' | '29427' | '29441' | '29442' | '29443' | '29444' | '29446' | '29447' | '29449' | '29450' | '29451' | '29452' | '29453' | '30201' | '30202' | '30203' | '30204' | '30205' | '30206' | '30207' | '30208' | '30209' | '30304' | '30341' | '30343' | '30344' | '30361' | '30362' | '30366' | '30381' | '30382' | '30383' | '30390' | '30391' | '30392' | '30401' | '30404' | '30406' | '30421' | '30422' | '30424' | '30427' | '30428' | '31201' | '31202' | '31203' | '31204' | '31302' | '31325' | '31328' | '31329' | '31364' | '31370' | '31371' | '31372' | '31384' | '31386' | '31389' | '31390' | '31401' | '31402' | '31403' | '32201' | '32202' | '32203' | '32204' | '32205' | '32206' | '32207' | '32209' | '32343' | '32386' | '32441' | '32448' | '32449' | '32501' | '32505' | '32525' | '32526' | '32527' | '32528' | '33100' | '33101' | '33102' | '33103' | '33104' | '33202' | '33203' | '33204' | '33205' | '33207' | '33208' | '33209' | '33210' | '33211' | '33212' | '33213' | '33214' | '33215' | '33216' | '33346' | '33423' | '33445' | '33461' | '33586' | '33606' | '33622' | '33623' | '33643' | '33663' | '33666' | '33681' | '34100' | '34101' | '34102' | '34103' | '34104' | '34105' | '34106' | '34107' | '34108' | '34202' | '34203' | '34204' | '34205' | '34207' | '34208' | '34209' | '34210' | '34211' | '34212' | '34213' | '34214' | '34215' | '34302' | '34304' | '34307' | '34309' | '34368' | '34369' | '34431' | '34462' | '34545' | '35201' | '35202' | '35203' | '35204' | '35206' | '35207' | '35208' | '35210' | '35211' | '35212' | '35213' | '35215' | '35216' | '35305' | '35321' | '35341' | '35343' | '35344' | '35502' | '36201' | '36202' | '36203' | '36204' | '36205' | '36206' | '36207' | '36208' | '36301' | '36302' | '36321' | '36341' | '36342' | '36368' | '36383' | '36387' | '36388' | '36401' | '36402' | '36403' | '36404' | '36405' | '36468' | '36489' | '37201' | '37202' | '37203' | '37204' | '37205' | '37206' | '37207' | '37208' | '37322' | '37324' | '37341' | '37364' | '37386' | '37387' | '37403' | '37404' | '37406' | '38201' | '38202' | '38203' | '38204' | '38205' | '38206' | '38207' | '38210' | '38213' | '38214' | '38215' | '38356' | '38386' | '38401' | '38402' | '38422' | '38442' | '38484' | '38488' | '38506' | '39201' | '39202' | '39203' | '39204' | '39205' | '39206' | '39208' | '39209' | '39210' | '39211' | '39212' | '39301' | '39302' | '39303' | '39304' | '39305' | '39306' | '39307' | '39341' | '39344' | '39363' | '39364' | '39386' | '39387' | '39401' | '39402' | '39403' | '39405' | '39410' | '39411' | '39412' | '39424' | '39427' | '39428' | '40100' | '40101' | '40103' | '40105' | '40106' | '40107' | '40108' | '40109' | '40130' | '40131' | '40132' | '40133' | '40134' | '40135' | '40136' | '40137' | '40202' | '40203' | '40204' | '40205' | '40206' | '40207' | '40210' | '40211' | '40212' | '40213' | '40214' | '40215' | '40216' | '40217' | '40218' | '40219' | '40220' | '40221' | '40223' | '40224' | '40225' | '40226' | '40227' | '40228' | '40229' | '40230' | '40231' | '40341' | '40342' | '40343' | '40344' | '40345' | '40348' | '40349' | '40381' | '40382' | '40383' | '40384' | '40401' | '40402' | '40421' | '40447' | '40448' | '40503' | '40522' | '40544' | '40601' | '40602' | '40604' | '40605' | '40608' | '40609' | '40610' | '40621' | '40625' | '40642' | '40646' | '40647' | '41201' | '41202' | '41203' | '41204' | '41205' | '41206' | '41207' | '41208' | '41209' | '41210' | '41327' | '41341' | '41345' | '41346' | '41387' | '41401' | '41423' | '41424' | '41425' | '41441' | '42201' | '42202' | '42203' | '42204' | '42205' | '42207' | '42208' | '42209' | '42210' | '42211' | '42212' | '42213' | '42214' | '42307' | '42308' | '42321' | '42322' | '42323' | '42383' | '42391' | '42411' | '43100' | '43101' | '43102' | '43103' | '43104' | '43105' | '43202' | '43203' | '43204' | '43205' | '43206' | '43208' | '43210' | '43211' | '43212' | '43213' | '43214' | '43215' | '43216' | '43348' | '43364' | '43367' | '43368' | '43369' | '43403' | '43404' | '43423' | '43424' | '43425' | '43428' | '43432' | '43433' | '43441' | '43442' | '43443' | '43444' | '43447' | '43468' | '43482' | '43484' | '43501' | '43505' | '43506' | '43507' | '43510' | '43511' | '43512' | '43513' | '43514' | '43531' | '44201' | '44202' | '44203' | '44204' | '44205' | '44206' | '44207' | '44208' | '44209' | '44210' | '44211' | '44212' | '44213' | '44214' | '44322' | '44341' | '44461' | '44462' | '45201' | '45202' | '45203' | '45204' | '45205' | '45206' | '45207' | '45208' | '45209' | '45341' | '45361' | '45382' | '45383' | '45401' | '45402' | '45403' | '45404' | '45405' | '45406' | '45421' | '45429' | '45430' | '45431' | '45441' | '45442' | '45443' | '46201' | '46203' | '46204' | '46206' | '46208' | '46210' | '46213' | '46214' | '46215' | '46216' | '46217' | '46218' | '46219' | '46220' | '46221' | '46222' | '46223' | '46224' | '46225' | '46303' | '46304' | '46392' | '46404' | '46452' | '46468' | '46482' | '46490' | '46491' | '46492' | '46501' | '46502' | '46505' | '46523' | '46524' | '46525' | '46527' | '46529' | '46530' | '46531' | '46532' | '46533' | '46534' | '46535' | '47201' | '47205' | '47207' | '47208' | '47209' | '47210' | '47211' | '47212' | '47213' | '47214' | '47215' | '47301' | '47302' | '47303' | '47306' | '47308' | '47311' | '47313' | '47314' | '47315' | '47324' | '47325' | '47326' | '47327' | '47328' | '47329' | '47348' | '47350' | '47353' | '47354' | '47355' | '47356' | '47357' | '47358' | '47359' | '47360' | '47361' | '47362' | '47375' | '47381' | '47382');
                sub_area_nm?: ('札幌市' | '札幌市中央区' | '札幌市北区' | '札幌市東区' | '札幌市白石区' | '札幌市豊平区' | '札幌市南区' | '札幌市西区' | '札幌市厚別区' | '札幌市手稲区' | '札幌市清田区' | '函館市' | '小樽市' | '旭川市' | '室蘭市' | '釧路市' | '帯広市' | '北見市' | '夕張市' | '岩見沢市' | '網走市' | '留萌市' | '苫小牧市' | '稚内市' | '美唄市' | '芦別市' | '江別市' | '赤平市' | '紋別市' | '士別市' | '名寄市' | '三笠市' | '根室市' | '千歳市' | '滝川市' | '砂川市' | '歌志内市' | '深川市' | '富良野市' | '登別市' | '恵庭市' | '伊達市' | '北広島市' | '石狩市' | '北斗市' | '石狩郡当別町' | '石狩郡新篠津村' | '松前郡松前町' | '松前郡福島町' | '上磯郡知内町' | '上磯郡木古内町' | '亀田郡七飯町' | '茅部郡鹿部町' | '茅部郡森町' | '二海郡八雲町' | '山越郡長万部町' | '檜山郡江差町' | '檜山郡上ノ国町' | '檜山郡厚沢部町' | '爾志郡乙部町' | '奥尻郡奥尻町' | '瀬棚郡今金町' | '久遠郡せたな町' | '島牧郡島牧村' | '寿都郡寿都町' | '寿都郡黒松内町' | '磯谷郡蘭越町' | '虻田郡ニセコ町' | '虻田郡真狩村' | '虻田郡留寿都村' | '虻田郡喜茂別町' | '虻田郡京極町' | '虻田郡倶知安町' | '岩内郡共和町' | '岩内郡岩内町' | '古宇郡泊村' | '古宇郡神恵内村' | '積丹郡積丹町' | '古平郡古平町' | '余市郡仁木町' | '余市郡余市町' | '余市郡赤井川村' | '空知郡南幌町' | '空知郡奈井江町' | '空知郡上砂川町' | '夕張郡由仁町' | '夕張郡長沼町' | '夕張郡栗山町' | '樺戸郡月形町' | '樺戸郡浦臼町' | '樺戸郡新十津川町' | '雨竜郡妹背牛町' | '雨竜郡秩父別町' | '雨竜郡雨竜町' | '雨竜郡北竜町' | '雨竜郡沼田町' | '上川郡鷹栖町' | '上川郡東神楽町' | '上川郡当麻町' | '上川郡比布町' | '上川郡愛別町' | '上川郡上川町' | '上川郡東川町' | '上川郡美瑛町' | '空知郡上富良野町' | '空知郡中富良野町' | '空知郡南富良野町' | '勇払郡占冠村' | '上川郡和寒町' | '上川郡剣淵町' | '上川郡下川町' | '中川郡美深町' | '中川郡音威子府村' | '中川郡中川町' | '雨竜郡幌加内町' | '増毛郡増毛町' | '留萌郡小平町' | '苫前郡苫前町' | '苫前郡羽幌町' | '苫前郡初山別村' | '天塩郡遠別町' | '天塩郡天塩町' | '宗谷郡猿払村' | '枝幸郡浜頓別町' | '枝幸郡中頓別町' | '枝幸郡枝幸町' | '天塩郡豊富町' | '礼文郡礼文町' | '利尻郡利尻町' | '利尻郡利尻富士町' | '天塩郡幌延町' | '網走郡美幌町' | '網走郡津別町' | '斜里郡斜里町' | '斜里郡清里町' | '斜里郡小清水町' | '常呂郡訓子府町' | '常呂郡置戸町' | '常呂郡佐呂間町' | '紋別郡遠軽町' | '紋別郡湧別町' | '紋別郡滝上町' | '紋別郡興部町' | '紋別郡西興部村' | '紋別郡雄武町' | '網走郡大空町' | '虻田郡豊浦町' | '有珠郡壮瞥町' | '白老郡白老町' | '勇払郡厚真町' | '虻田郡洞爺湖町' | '勇払郡安平町' | '勇払郡むかわ町' | '沙流郡日高町' | '沙流郡平取町' | '新冠郡新冠町' | '浦河郡浦河町' | '様似郡様似町' | '幌泉郡えりも町' | '日高郡新ひだか町' | '河東郡音更町' | '河東郡士幌町' | '河東郡上士幌町' | '河東郡鹿追町' | '上川郡新得町' | '上川郡清水町' | '河西郡芽室町' | '河西郡中札内村' | '河西郡更別村' | '広尾郡大樹町' | '広尾郡広尾町' | '中川郡幕別町' | '中川郡池田町' | '中川郡豊頃町' | '中川郡本別町' | '足寄郡足寄町' | '足寄郡陸別町' | '十勝郡浦幌町' | '釧路郡釧路町' | '厚岸郡厚岸町' | '厚岸郡浜中町' | '川上郡標茶町' | '川上郡弟子屈町' | '阿寒郡鶴居村' | '白糠郡白糠町' | '野付郡別海町' | '標津郡中標津町' | '標津郡標津町' | '目梨郡羅臼町' | '青森市' | '弘前市' | '八戸市' | '黒石市' | '五所川原市' | '十和田市' | '三沢市' | 'むつ市' | 'つがる市' | '平川市' | '東津軽郡平内町' | '東津軽郡今別町' | '東津軽郡蓬田村' | '東津軽郡外ヶ浜町' | '西津軽郡鰺ヶ沢町' | '西津軽郡深浦町' | '中津軽郡西目屋村' | '南津軽郡藤崎町' | '南津軽郡大鰐町' | '南津軽郡田舎館村' | '北津軽郡板柳町' | '北津軽郡鶴田町' | '北津軽郡中泊町' | '上北郡野辺地町' | '上北郡七戸町' | '上北郡六戸町' | '上北郡横浜町' | '上北郡東北町' | '上北郡六ヶ所村' | '上北郡おいらせ町' | '下北郡大間町' | '下北郡東通村' | '下北郡風間浦村' | '下北郡佐井村' | '三戸郡三戸町' | '三戸郡五戸町' | '三戸郡田子町' | '三戸郡南部町' | '三戸郡階上町' | '三戸郡新郷村' | '盛岡市' | '宮古市' | '大船渡市' | '花巻市' | '北上市' | '久慈市' | '遠野市' | '一関市' | '陸前高田市' | '釜石市' | '二戸市' | '八幡平市' | '奥州市' | '滝沢市' | '岩手郡雫石町' | '岩手郡葛巻町' | '岩手郡岩手町' | '紫波郡紫波町' | '紫波郡矢巾町' | '和賀郡西和賀町' | '胆沢郡金ケ崎町' | '西磐井郡平泉町' | '気仙郡住田町' | '上閉伊郡大槌町' | '下閉伊郡山田町' | '下閉伊郡岩泉町' | '下閉伊郡田野畑村' | '下閉伊郡普代村' | '九戸郡軽米町' | '九戸郡野田村' | '九戸郡九戸村' | '九戸郡洋野町' | '二戸郡一戸町' | '仙台市' | '仙台市青葉区' | '仙台市宮城野区' | '仙台市若林区' | '仙台市太白区' | '仙台市泉区' | '石巻市' | '塩竈市' | '気仙沼市' | '白石市' | '名取市' | '角田市' | '多賀城市' | '岩沼市' | '登米市' | '栗原市' | '東松島市' | '大崎市' | '富谷市' | '刈田郡蔵王町' | '刈田郡七ヶ宿町' | '柴田郡大河原町' | '柴田郡村田町' | '柴田郡柴田町' | '柴田郡川崎町' | '伊具郡丸森町' | '亘理郡亘理町' | '亘理郡山元町' | '宮城郡松島町' | '宮城郡七ヶ浜町' | '宮城郡利府町' | '黒川郡大和町' | '黒川郡大郷町' | '黒川郡大衡村' | '加美郡色麻町' | '加美郡加美町' | '遠田郡涌谷町' | '遠田郡美里町' | '牡鹿郡女川町' | '本吉郡南三陸町' | '秋田市' | '能代市' | '横手市' | '大館市' | '男鹿市' | '湯沢市' | '鹿角市' | '由利本荘市' | '潟上市' | '大仙市' | '北秋田市' | 'にかほ市' | '仙北市' | '鹿角郡小坂町' | '北秋田郡上小阿仁村' | '山本郡藤里町' | '山本郡三種町' | '山本郡八峰町' | '南秋田郡五城目町' | '南秋田郡八郎潟町' | '南秋田郡井川町' | '南秋田郡大潟村' | '仙北郡美郷町' | '雄勝郡羽後町' | '雄勝郡東成瀬村' | '山形市' | '米沢市' | '鶴岡市' | '酒田市' | '新庄市' | '寒河江市' | '上山市' | '村山市' | '長井市' | '天童市' | '東根市' | '尾花沢市' | '南陽市' | '東村山郡山辺町' | '東村山郡中山町' | '西村山郡河北町' | '西村山郡西川町' | '西村山郡朝日町' | '西村山郡大江町' | '北村山郡大石田町' | '最上郡金山町' | '最上郡最上町' | '最上郡舟形町' | '最上郡真室川町' | '最上郡大蔵村' | '最上郡鮭川村' | '最上郡戸沢村' | '東置賜郡高畠町' | '東置賜郡川西町' | '西置賜郡小国町' | '西置賜郡白鷹町' | '西置賜郡飯豊町' | '東田川郡三川町' | '東田川郡庄内町' | '飽海郡遊佐町' | '福島市' | '会津若松市' | '郡山市' | 'いわき市' | '白河市' | '須賀川市' | '喜多方市' | '相馬市' | '二本松市' | '田村市' | '南相馬市' | '本宮市' | '伊達郡桑折町' | '伊達郡国見町' | '伊達郡川俣町' | '安達郡大玉村' | '岩瀬郡鏡石町' | '岩瀬郡天栄村' | '南会津郡下郷町' | '南会津郡檜枝岐村' | '南会津郡只見町' | '南会津郡南会津町' | '耶麻郡北塩原村' | '耶麻郡西会津町' | '耶麻郡磐梯町' | '耶麻郡猪苗代町' | '河沼郡会津坂下町' | '河沼郡湯川村' | '河沼郡柳津町' | '大沼郡三島町' | '大沼郡金山町' | '大沼郡昭和村' | '大沼郡会津美里町' | '西白河郡西郷村' | '西白河郡泉崎村' | '西白河郡中島村' | '西白河郡矢吹町' | '東白川郡棚倉町' | '東白川郡矢祭町' | '東白川郡塙町' | '東白川郡鮫川村' | '石川郡石川町' | '石川郡玉川村' | '石川郡平田村' | '石川郡浅川町' | '石川郡古殿町' | '田村郡三春町' | '田村郡小野町' | '双葉郡広野町' | '双葉郡楢葉町' | '双葉郡富岡町' | '双葉郡川内村' | '双葉郡大熊町' | '双葉郡双葉町' | '双葉郡浪江町' | '双葉郡葛尾村' | '相馬郡新地町' | '相馬郡飯舘村' | '水戸市' | '日立市' | '土浦市' | '古河市' | '石岡市' | '結城市' | '龍ケ崎市' | '下妻市' | '常総市' | '常陸太田市' | '高萩市' | '北茨城市' | '笠間市' | '取手市' | '牛久市' | 'つくば市' | 'ひたちなか市' | '鹿嶋市' | '潮来市' | '守谷市' | '常陸大宮市' | '那珂市' | '筑西市' | '坂東市' | '稲敷市' | 'かすみがうら市' | '桜川市' | '神栖市' | '行方市' | '鉾田市' | 'つくばみらい市' | '小美玉市' | '東茨城郡茨城町' | '東茨城郡大洗町' | '東茨城郡城里町' | '那珂郡東海村' | '久慈郡大子町' | '稲敷郡美浦村' | '稲敷郡阿見町' | '稲敷郡河内町' | '結城郡八千代町' | '猿島郡五霞町' | '猿島郡境町' | '北相馬郡利根町' | '宇都宮市' | '足利市' | '栃木市' | '佐野市' | '鹿沼市' | '日光市' | '小山市' | '真岡市' | '大田原市' | '矢板市' | '那須塩原市' | 'さくら市' | '那須烏山市' | '下野市' | '河内郡上三川町' | '芳賀郡益子町' | '芳賀郡茂木町' | '芳賀郡市貝町' | '芳賀郡芳賀町' | '下都賀郡壬生町' | '下都賀郡野木町' | '塩谷郡塩谷町' | '塩谷郡高根沢町' | '那須郡那須町' | '那須郡那珂川町' | '前橋市' | '高崎市' | '桐生市' | '伊勢崎市' | '太田市' | '沼田市' | '館林市' | '渋川市' | '藤岡市' | '富岡市' | '安中市' | 'みどり市' | '北群馬郡榛東村' | '北群馬郡吉岡町' | '多野郡上野村' | '多野郡神流町' | '甘楽郡下仁田町' | '甘楽郡南牧村' | '甘楽郡甘楽町' | '吾妻郡中之条町' | '吾妻郡長野原町' | '吾妻郡嬬恋村' | '吾妻郡草津町' | '吾妻郡高山村' | '吾妻郡東吾妻町' | '利根郡片品村' | '利根郡川場村' | '利根郡昭和村' | '利根郡みなかみ町' | '佐波郡玉村町' | '邑楽郡板倉町' | '邑楽郡明和町' | '邑楽郡千代田町' | '邑楽郡大泉町' | '邑楽郡邑楽町' | 'さいたま市' | 'さいたま市西区' | 'さいたま市北区' | 'さいたま市大宮区' | 'さいたま市見沼区' | 'さいたま市中央区' | 'さいたま市桜区' | 'さいたま市浦和区' | 'さいたま市南区' | 'さいたま市緑区' | 'さいたま市岩槻区' | '川越市' | '熊谷市' | '川口市' | '行田市' | '秩父市' | '所沢市' | '飯能市' | '加須市' | '本庄市' | '東松山市' | '春日部市' | '狭山市' | '羽生市' | '鴻巣市' | '深谷市' | '上尾市' | '草加市' | '越谷市' | '蕨市' | '戸田市' | '入間市' | '朝霞市' | '志木市' | '和光市' | '新座市' | '桶川市' | '久喜市' | '北本市' | '八潮市' | '富士見市' | '三郷市' | '蓮田市' | '坂戸市' | '幸手市' | '鶴ヶ島市' | '日高市' | '吉川市' | 'ふじみ野市' | '白岡市' | '北足立郡伊奈町' | '入間郡三芳町' | '入間郡毛呂山町' | '入間郡越生町' | '比企郡滑川町' | '比企郡嵐山町' | '比企郡小川町' | '比企郡川島町' | '比企郡吉見町' | '比企郡鳩山町' | '比企郡ときがわ町' | '秩父郡横瀬町' | '秩父郡皆野町' | '秩父郡長瀞町' | '秩父郡小鹿野町' | '秩父郡東秩父村' | '児玉郡美里町' | '児玉郡神川町' | '児玉郡上里町' | '大里郡寄居町' | '南埼玉郡宮代町' | '北葛飾郡杉戸町' | '北葛飾郡松伏町' | '千葉市' | '千葉市中央区' | '千葉市花見川区' | '千葉市稲毛区' | '千葉市若葉区' | '千葉市緑区' | '千葉市美浜区' | '銚子市' | '市川市' | '船橋市' | '館山市' | '木更津市' | '松戸市' | '野田市' | '茂原市' | '成田市' | '佐倉市' | '東金市' | '旭市' | '習志野市' | '柏市' | '勝浦市' | '市原市' | '流山市' | '八千代市' | '我孫子市' | '鴨川市' | '鎌ケ谷市' | '君津市' | '富津市' | '浦安市' | '四街道市' | '袖ケ浦市' | '八街市' | '印西市' | '白井市' | '富里市' | '南房総市' | '匝瑳市' | '香取市' | '山武市' | 'いすみ市' | '大網白里市' | '印旛郡酒々井町' | '印旛郡栄町' | '香取郡神崎町' | '香取郡多古町' | '香取郡東庄町' | '山武郡九十九里町' | '山武郡芝山町' | '山武郡横芝光町' | '長生郡一宮町' | '長生郡睦沢町' | '長生郡長生村' | '長生郡白子町' | '長生郡長柄町' | '長生郡長南町' | '夷隅郡大多喜町' | '夷隅郡御宿町' | '安房郡鋸南町' | '千代田区' | '中央区' | '港区' | '新宿区' | '文京区' | '台東区' | '墨田区' | '江東区' | '品川区' | '目黒区' | '大田区' | '世田谷区' | '渋谷区' | '中野区' | '杉並区' | '豊島区' | '北区' | '荒川区' | '板橋区' | '練馬区' | '足立区' | '葛飾区' | '江戸川区' | '八王子市' | '立川市' | '武蔵野市' | '三鷹市' | '青梅市' | '府中市' | '昭島市' | '調布市' | '町田市' | '小金井市' | '小平市' | '日野市' | '東村山市' | '国分寺市' | '国立市' | '福生市' | '狛江市' | '東大和市' | '清瀬市' | '東久留米市' | '武蔵村山市' | '多摩市' | '稲城市' | '羽村市' | 'あきる野市' | '西東京市' | '西多摩郡瑞穂町' | '西多摩郡日の出町' | '西多摩郡檜原村' | '西多摩郡奥多摩町' | '大島町' | '利島村' | '新島村' | '神津島村' | '三宅島三宅村' | '御蔵島村' | '八丈島八丈町' | '青ヶ島村' | '小笠原諸島小笠原村' | '横浜市' | '横浜市鶴見区' | '横浜市神奈川区' | '横浜市西区' | '横浜市中区' | '横浜市南区' | '横浜市保土ケ谷区' | '横浜市磯子区' | '横浜市金沢区' | '横浜市港北区' | '横浜市戸塚区' | '横浜市港南区' | '横浜市旭区' | '横浜市緑区' | '横浜市瀬谷区' | '横浜市栄区' | '横浜市泉区' | '横浜市青葉区' | '横浜市都筑区' | '川崎市' | '川崎市川崎区' | '川崎市幸区' | '川崎市中原区' | '川崎市高津区' | '川崎市多摩区' | '川崎市宮前区' | '川崎市麻生区' | '相模原市' | '相模原市緑区' | '相模原市中央区' | '相模原市南区' | '横須賀市' | '平塚市' | '鎌倉市' | '藤沢市' | '小田原市' | '茅ヶ崎市' | '逗子市' | '三浦市' | '秦野市' | '厚木市' | '大和市' | '伊勢原市' | '海老名市' | '座間市' | '南足柄市' | '綾瀬市' | '三浦郡葉山町' | '高座郡寒川町' | '中郡大磯町' | '中郡二宮町' | '足柄上郡中井町' | '足柄上郡大井町' | '足柄上郡松田町' | '足柄上郡山北町' | '足柄上郡開成町' | '足柄下郡箱根町' | '足柄下郡真鶴町' | '足柄下郡湯河原町' | '愛甲郡愛川町' | '愛甲郡清川村' | '新潟市' | '新潟市北区' | '新潟市東区' | '新潟市中央区' | '新潟市江南区' | '新潟市秋葉区' | '新潟市南区' | '新潟市西区' | '新潟市西蒲区' | '長岡市' | '三条市' | '柏崎市' | '新発田市' | '小千谷市' | '加茂市' | '十日町市' | '見附市' | '村上市' | '燕市' | '糸魚川市' | '妙高市' | '五泉市' | '上越市' | '阿賀野市' | '佐渡市' | '魚沼市' | '南魚沼市' | '胎内市' | '北蒲原郡聖籠町' | '西蒲原郡弥彦村' | '南蒲原郡田上町' | '東蒲原郡阿賀町' | '三島郡出雲崎町' | '南魚沼郡湯沢町' | '中魚沼郡津南町' | '刈羽郡刈羽村' | '岩船郡関川村' | '岩船郡粟島浦村' | '富山市' | '高岡市' | '魚津市' | '氷見市' | '滑川市' | '黒部市' | '砺波市' | '小矢部市' | '南砺市' | '射水市' | '中新川郡舟橋村' | '中新川郡上市町' | '中新川郡立山町' | '下新川郡入善町' | '下新川郡朝日町' | '金沢市' | '七尾市' | '小松市' | '輪島市' | '珠洲市' | '加賀市' | '羽咋市' | 'かほく市' | '白山市' | '能美市' | '野々市市' | '能美郡川北町' | '河北郡津幡町' | '河北郡内灘町' | '羽咋郡志賀町' | '羽咋郡宝達志水町' | '鹿島郡中能登町' | '鳳珠郡穴水町' | '鳳珠郡能登町' | '福井市' | '敦賀市' | '小浜市' | '大野市' | '勝山市' | '鯖江市' | 'あわら市' | '越前市' | '坂井市' | '吉田郡永平寺町' | '今立郡池田町' | '南条郡南越前町' | '丹生郡越前町' | '三方郡美浜町' | '大飯郡高浜町' | '大飯郡おおい町' | '三方上中郡若狭町' | '甲府市' | '富士吉田市' | '都留市' | '山梨市' | '大月市' | '韮崎市' | '南アルプス市' | '北杜市' | '甲斐市' | '笛吹市' | '上野原市' | '甲州市' | '中央市' | '西八代郡市川三郷町' | '南巨摩郡早川町' | '南巨摩郡身延町' | '南巨摩郡南部町' | '南巨摩郡富士川町' | '中巨摩郡昭和町' | '南都留郡道志村' | '南都留郡西桂町' | '南都留郡忍野村' | '南都留郡山中湖村' | '南都留郡鳴沢村' | '南都留郡富士河口湖町' | '北都留郡小菅村' | '北都留郡丹波山村' | '長野市' | '松本市' | '上田市' | '岡谷市' | '飯田市' | '諏訪市' | '須坂市' | '小諸市' | '伊那市' | '駒ヶ根市' | '中野市' | '大町市' | '飯山市' | '茅野市' | '塩尻市' | '佐久市' | '千曲市' | '東御市' | '安曇野市' | '南佐久郡小海町' | '南佐久郡川上村' | '南佐久郡南牧村' | '南佐久郡南相木村' | '南佐久郡北相木村' | '南佐久郡佐久穂町' | '北佐久郡軽井沢町' | '北佐久郡御代田町' | '北佐久郡立科町' | '小県郡青木村' | '小県郡長和町' | '諏訪郡下諏訪町' | '諏訪郡富士見町' | '諏訪郡原村' | '上伊那郡辰野町' | '上伊那郡箕輪町' | '上伊那郡飯島町' | '上伊那郡南箕輪村' | '上伊那郡中川村' | '上伊那郡宮田村' | '下伊那郡松川町' | '下伊那郡高森町' | '下伊那郡阿南町' | '下伊那郡阿智村' | '下伊那郡平谷村' | '下伊那郡根羽村' | '下伊那郡下條村' | '下伊那郡売木村' | '下伊那郡天龍村' | '下伊那郡泰阜村' | '下伊那郡喬木村' | '下伊那郡豊丘村' | '下伊那郡大鹿村' | '木曽郡上松町' | '木曽郡南木曽町' | '木曽郡木祖村' | '木曽郡王滝村' | '木曽郡大桑村' | '木曽郡木曽町' | '東筑摩郡麻績村' | '東筑摩郡生坂村' | '東筑摩郡山形村' | '東筑摩郡朝日村' | '東筑摩郡筑北村' | '北安曇郡池田町' | '北安曇郡松川村' | '北安曇郡白馬村' | '北安曇郡小谷村' | '埴科郡坂城町' | '上高井郡小布施町' | '上高井郡高山村' | '下高井郡山ノ内町' | '下高井郡木島平村' | '下高井郡野沢温泉村' | '上水内郡信濃町' | '上水内郡小川村' | '上水内郡飯綱町' | '下水内郡栄村' | '岐阜市' | '大垣市' | '高山市' | '多治見市' | '関市' | '中津川市' | '美濃市' | '瑞浪市' | '羽島市' | '恵那市' | '美濃加茂市' | '土岐市' | '各務原市' | '可児市' | '山県市' | '瑞穂市' | '飛騨市' | '本巣市' | '郡上市' | '下呂市' | '海津市' | '羽島郡岐南町' | '羽島郡笠松町' | '養老郡養老町' | '不破郡垂井町' | '不破郡関ケ原町' | '安八郡神戸町' | '安八郡輪之内町' | '安八郡安八町' | '揖斐郡揖斐川町' | '揖斐郡大野町' | '揖斐郡池田町' | '本巣郡北方町' | '加茂郡坂祝町' | '加茂郡富加町' | '加茂郡川辺町' | '加茂郡七宗町' | '加茂郡八百津町' | '加茂郡白川町' | '加茂郡東白川村' | '可児郡御嵩町' | '大野郡白川村' | '静岡市' | '静岡市葵区' | '静岡市駿河区' | '静岡市清水区' | '浜松市' | '浜松市中区' | '浜松市東区' | '浜松市西区' | '浜松市南区' | '浜松市北区' | '浜松市浜北区' | '浜松市天竜区' | '沼津市' | '熱海市' | '三島市' | '富士宮市' | '伊東市' | '島田市' | '富士市' | '磐田市' | '焼津市' | '掛川市' | '藤枝市' | '御殿場市' | '袋井市' | '下田市' | '裾野市' | '湖西市' | '伊豆市' | '御前崎市' | '菊川市' | '伊豆の国市' | '牧之原市' | '賀茂郡東伊豆町' | '賀茂郡河津町' | '賀茂郡南伊豆町' | '賀茂郡松崎町' | '賀茂郡西伊豆町' | '田方郡函南町' | '駿東郡清水町' | '駿東郡長泉町' | '駿東郡小山町' | '榛原郡吉田町' | '榛原郡川根本町' | '周智郡森町' | '名古屋市' | '名古屋市千種区' | '名古屋市東区' | '名古屋市北区' | '名古屋市西区' | '名古屋市中村区' | '名古屋市中区' | '名古屋市昭和区' | '名古屋市瑞穂区' | '名古屋市熱田区' | '名古屋市中川区' | '名古屋市港区' | '名古屋市南区' | '名古屋市守山区' | '名古屋市緑区' | '名古屋市名東区' | '名古屋市天白区' | '豊橋市' | '岡崎市' | '一宮市' | '瀬戸市' | '半田市' | '春日井市' | '豊川市' | '津島市' | '碧南市' | '刈谷市' | '豊田市' | '安城市' | '西尾市' | '蒲郡市' | '犬山市' | '常滑市' | '江南市' | '小牧市' | '稲沢市' | '新城市' | '東海市' | '大府市' | '知多市' | '知立市' | '尾張旭市' | '高浜市' | '岩倉市' | '豊明市' | '日進市' | '田原市' | '愛西市' | '清須市' | '北名古屋市' | '弥富市' | 'みよし市' | 'あま市' | '長久手市' | '愛知郡東郷町' | '西春日井郡豊山町' | '丹羽郡大口町' | '丹羽郡扶桑町' | '海部郡大治町' | '海部郡蟹江町' | '海部郡飛島村' | '知多郡阿久比町' | '知多郡東浦町' | '知多郡南知多町' | '知多郡美浜町' | '知多郡武豊町' | '額田郡幸田町' | '北設楽郡設楽町' | '北設楽郡東栄町' | '北設楽郡豊根村' | '津市' | '四日市市' | '伊勢市' | '松阪市' | '桑名市' | '鈴鹿市' | '名張市' | '尾鷲市' | '亀山市' | '鳥羽市' | '熊野市' | 'いなべ市' | '志摩市' | '伊賀市' | '桑名郡木曽岬町' | '員弁郡東員町' | '三重郡菰野町' | '三重郡朝日町' | '三重郡川越町' | '多気郡多気町' | '多気郡明和町' | '多気郡大台町' | '度会郡玉城町' | '度会郡度会町' | '度会郡大紀町' | '度会郡南伊勢町' | '北牟婁郡紀北町' | '南牟婁郡御浜町' | '南牟婁郡紀宝町' | '大津市' | '彦根市' | '長浜市' | '近江八幡市' | '草津市' | '守山市' | '栗東市' | '甲賀市' | '野洲市' | '湖南市' | '高島市' | '東近江市' | '米原市' | '蒲生郡日野町' | '蒲生郡竜王町' | '愛知郡愛荘町' | '犬上郡豊郷町' | '犬上郡甲良町' | '犬上郡多賀町' | '京都市' | '京都市北区' | '京都市上京区' | '京都市左京区' | '京都市中京区' | '京都市東山区' | '京都市下京区' | '京都市南区' | '京都市右京区' | '京都市伏見区' | '京都市山科区' | '京都市西京区' | '福知山市' | '舞鶴市' | '綾部市' | '宇治市' | '宮津市' | '亀岡市' | '城陽市' | '向日市' | '長岡京市' | '八幡市' | '京田辺市' | '京丹後市' | '南丹市' | '木津川市' | '乙訓郡大山崎町' | '久世郡久御山町' | '綴喜郡井手町' | '綴喜郡宇治田原町' | '相楽郡笠置町' | '相楽郡和束町' | '相楽郡精華町' | '相楽郡南山城村' | '船井郡京丹波町' | '与謝郡伊根町' | '与謝郡与謝野町' | '大阪市' | '大阪市都島区' | '大阪市福島区' | '大阪市此花区' | '大阪市西区' | '大阪市港区' | '大阪市大正区' | '大阪市天王寺区' | '大阪市浪速区' | '大阪市西淀川区' | '大阪市東淀川区' | '大阪市東成区' | '大阪市生野区' | '大阪市旭区' | '大阪市城東区' | '大阪市阿倍野区' | '大阪市住吉区' | '大阪市東住吉区' | '大阪市西成区' | '大阪市淀川区' | '大阪市鶴見区' | '大阪市住之江区' | '大阪市平野区' | '大阪市北区' | '大阪市中央区' | '堺市' | '堺市堺区' | '堺市中区' | '堺市東区' | '堺市西区' | '堺市南区' | '堺市北区' | '堺市美原区' | '岸和田市' | '豊中市' | '池田市' | '吹田市' | '泉大津市' | '高槻市' | '貝塚市' | '守口市' | '枚方市' | '茨木市' | '八尾市' | '泉佐野市' | '富田林市' | '寝屋川市' | '河内長野市' | '松原市' | '大東市' | '和泉市' | '箕面市' | '柏原市' | '羽曳野市' | '門真市' | '摂津市' | '高石市' | '藤井寺市' | '東大阪市' | '泉南市' | '四條畷市' | '交野市' | '大阪狭山市' | '阪南市' | '三島郡島本町' | '豊能郡豊能町' | '豊能郡能勢町' | '泉北郡忠岡町' | '泉南郡熊取町' | '泉南郡田尻町' | '泉南郡岬町' | '南河内郡太子町' | '南河内郡河南町' | '南河内郡千早赤阪村' | '神戸市' | '神戸市東灘区' | '神戸市灘区' | '神戸市兵庫区' | '神戸市長田区' | '神戸市須磨区' | '神戸市垂水区' | '神戸市北区' | '神戸市中央区' | '神戸市西区' | '姫路市' | '尼崎市' | '明石市' | '西宮市' | '洲本市' | '芦屋市' | '伊丹市' | '相生市' | '豊岡市' | '加古川市' | '赤穂市' | '西脇市' | '宝塚市' | '三木市' | '高砂市' | '川西市' | '小野市' | '三田市' | '加西市' | '丹波篠山市' | '養父市' | '丹波市' | '南あわじ市' | '朝来市' | '淡路市' | '宍粟市' | '加東市' | 'たつの市' | '川辺郡猪名川町' | '多可郡多可町' | '加古郡稲美町' | '加古郡播磨町' | '神崎郡市川町' | '神崎郡福崎町' | '神崎郡神河町' | '揖保郡太子町' | '赤穂郡上郡町' | '佐用郡佐用町' | '美方郡香美町' | '美方郡新温泉町' | '奈良市' | '大和高田市' | '大和郡山市' | '天理市' | '橿原市' | '桜井市' | '五條市' | '御所市' | '生駒市' | '香芝市' | '葛城市' | '宇陀市' | '山辺郡山添村' | '生駒郡平群町' | '生駒郡三郷町' | '生駒郡斑鳩町' | '生駒郡安堵町' | '磯城郡川西町' | '磯城郡三宅町' | '磯城郡田原本町' | '宇陀郡曽爾村' | '宇陀郡御杖村' | '高市郡高取町' | '高市郡明日香村' | '北葛城郡上牧町' | '北葛城郡王寺町' | '北葛城郡広陵町' | '北葛城郡河合町' | '吉野郡吉野町' | '吉野郡大淀町' | '吉野郡下市町' | '吉野郡黒滝村' | '吉野郡天川村' | '吉野郡野迫川村' | '吉野郡十津川村' | '吉野郡下北山村' | '吉野郡上北山村' | '吉野郡川上村' | '吉野郡東吉野村' | '和歌山市' | '海南市' | '橋本市' | '有田市' | '御坊市' | '田辺市' | '新宮市' | '紀の川市' | '岩出市' | '海草郡紀美野町' | '伊都郡かつらぎ町' | '伊都郡九度山町' | '伊都郡高野町' | '有田郡湯浅町' | '有田郡広川町' | '有田郡有田川町' | '日高郡美浜町' | '日高郡日高町' | '日高郡由良町' | '日高郡印南町' | '日高郡みなべ町' | '日高郡日高川町' | '西牟婁郡白浜町' | '西牟婁郡上富田町' | '西牟婁郡すさみ町' | '東牟婁郡那智勝浦町' | '東牟婁郡太地町' | '東牟婁郡古座川町' | '東牟婁郡北山村' | '東牟婁郡串本町' | '鳥取市' | '米子市' | '倉吉市' | '境港市' | '岩美郡岩美町' | '八頭郡若桜町' | '八頭郡智頭町' | '八頭郡八頭町' | '東伯郡三朝町' | '東伯郡湯梨浜町' | '東伯郡琴浦町' | '東伯郡北栄町' | '西伯郡日吉津村' | '西伯郡大山町' | '西伯郡南部町' | '西伯郡伯耆町' | '日野郡日南町' | '日野郡日野町' | '日野郡江府町' | '松江市' | '浜田市' | '出雲市' | '益田市' | '大田市' | '安来市' | '江津市' | '雲南市' | '仁多郡奥出雲町' | '飯石郡飯南町' | '邑智郡川本町' | '邑智郡美郷町' | '邑智郡邑南町' | '鹿足郡津和野町' | '鹿足郡吉賀町' | '隠岐郡海士町' | '隠岐郡西ノ島町' | '隠岐郡知夫村' | '隠岐郡隠岐の島町' | '岡山市' | '岡山市北区' | '岡山市中区' | '岡山市東区' | '岡山市南区' | '倉敷市' | '津山市' | '玉野市' | '笠岡市' | '井原市' | '総社市' | '高梁市' | '新見市' | '備前市' | '瀬戸内市' | '赤磐市' | '真庭市' | '美作市' | '浅口市' | '和気郡和気町' | '都窪郡早島町' | '浅口郡里庄町' | '小田郡矢掛町' | '真庭郡新庄村' | '苫田郡鏡野町' | '勝田郡勝央町' | '勝田郡奈義町' | '英田郡西粟倉村' | '久米郡久米南町' | '久米郡美咲町' | '加賀郡吉備中央町' | '広島市' | '広島市中区' | '広島市東区' | '広島市南区' | '広島市西区' | '広島市安佐南区' | '広島市安佐北区' | '広島市安芸区' | '広島市佐伯区' | '呉市' | '竹原市' | '三原市' | '尾道市' | '福山市' | '三次市' | '庄原市' | '大竹市' | '東広島市' | '廿日市市' | '安芸高田市' | '江田島市' | '安芸郡府中町' | '安芸郡海田町' | '安芸郡熊野町' | '安芸郡坂町' | '山県郡安芸太田町' | '山県郡北広島町' | '豊田郡大崎上島町' | '世羅郡世羅町' | '神石郡神石高原町' | '下関市' | '宇部市' | '山口市' | '萩市' | '防府市' | '下松市' | '岩国市' | '光市' | '長門市' | '柳井市' | '美祢市' | '周南市' | '山陽小野田市' | '大島郡周防大島町' | '玖珂郡和木町' | '熊毛郡上関町' | '熊毛郡田布施町' | '熊毛郡平生町' | '阿武郡阿武町' | '徳島市' | '鳴門市' | '小松島市' | '阿南市' | '吉野川市' | '阿波市' | '美馬市' | '三好市' | '勝浦郡勝浦町' | '勝浦郡上勝町' | '名東郡佐那河内村' | '名西郡石井町' | '名西郡神山町' | '那賀郡那賀町' | '海部郡牟岐町' | '海部郡美波町' | '海部郡海陽町' | '板野郡松茂町' | '板野郡北島町' | '板野郡藍住町' | '板野郡板野町' | '板野郡上板町' | '美馬郡つるぎ町' | '三好郡東みよし町' | '高松市' | '丸亀市' | '坂出市' | '善通寺市' | '観音寺市' | 'さぬき市' | '東かがわ市' | '三豊市' | '小豆郡土庄町' | '小豆郡小豆島町' | '木田郡三木町' | '香川郡直島町' | '綾歌郡宇多津町' | '綾歌郡綾川町' | '仲多度郡琴平町' | '仲多度郡多度津町' | '仲多度郡まんのう町' | '松山市' | '今治市' | '宇和島市' | '八幡浜市' | '新居浜市' | '西条市' | '大洲市' | '伊予市' | '四国中央市' | '西予市' | '東温市' | '越智郡上島町' | '上浮穴郡久万高原町' | '伊予郡松前町' | '伊予郡砥部町' | '喜多郡内子町' | '西宇和郡伊方町' | '北宇和郡松野町' | '北宇和郡鬼北町' | '南宇和郡愛南町' | '高知市' | '室戸市' | '安芸市' | '南国市' | '土佐市' | '須崎市' | '宿毛市' | '土佐清水市' | '四万十市' | '香南市' | '香美市' | '安芸郡東洋町' | '安芸郡奈半利町' | '安芸郡田野町' | '安芸郡安田町' | '安芸郡北川村' | '安芸郡馬路村' | '安芸郡芸西村' | '長岡郡本山町' | '長岡郡大豊町' | '土佐郡土佐町' | '土佐郡大川村' | '吾川郡いの町' | '吾川郡仁淀川町' | '高岡郡中土佐町' | '高岡郡佐川町' | '高岡郡越知町' | '高岡郡梼原町' | '高岡郡日高村' | '高岡郡津野町' | '高岡郡四万十町' | '幡多郡大月町' | '幡多郡三原村' | '幡多郡黒潮町' | '北九州市' | '北九州市門司区' | '北九州市若松区' | '北九州市戸畑区' | '北九州市小倉北区' | '北九州市小倉南区' | '北九州市八幡東区' | '北九州市八幡西区' | '福岡市' | '福岡市東区' | '福岡市博多区' | '福岡市中央区' | '福岡市南区' | '福岡市西区' | '福岡市城南区' | '福岡市早良区' | '大牟田市' | '久留米市' | '直方市' | '飯塚市' | '田川市' | '柳川市' | '八女市' | '筑後市' | '大川市' | '行橋市' | '豊前市' | '中間市' | '小郡市' | '筑紫野市' | '春日市' | '大野城市' | '宗像市' | '太宰府市' | '古賀市' | '福津市' | 'うきは市' | '宮若市' | '嘉麻市' | '朝倉市' | 'みやま市' | '糸島市' | '那珂川市' | '糟屋郡宇美町' | '糟屋郡篠栗町' | '糟屋郡志免町' | '糟屋郡須恵町' | '糟屋郡新宮町' | '糟屋郡久山町' | '糟屋郡粕屋町' | '遠賀郡芦屋町' | '遠賀郡水巻町' | '遠賀郡岡垣町' | '遠賀郡遠賀町' | '鞍手郡小竹町' | '鞍手郡鞍手町' | '嘉穂郡桂川町' | '朝倉郡筑前町' | '朝倉郡東峰村' | '三井郡大刀洗町' | '三潴郡大木町' | '八女郡広川町' | '田川郡香春町' | '田川郡添田町' | '田川郡糸田町' | '田川郡川崎町' | '田川郡大任町' | '田川郡赤村' | '田川郡福智町' | '京都郡苅田町' | '京都郡みやこ町' | '築上郡吉富町' | '築上郡上毛町' | '築上郡築上町' | '佐賀市' | '唐津市' | '鳥栖市' | '多久市' | '伊万里市' | '武雄市' | '鹿島市' | '小城市' | '嬉野市' | '神埼市' | '神埼郡吉野ヶ里町' | '三養基郡基山町' | '三養基郡上峰町' | '三養基郡みやき町' | '東松浦郡玄海町' | '西松浦郡有田町' | '杵島郡大町町' | '杵島郡江北町' | '杵島郡白石町' | '藤津郡太良町' | '長崎市' | '佐世保市' | '島原市' | '諫早市' | '大村市' | '平戸市' | '松浦市' | '対馬市' | '壱岐市' | '五島市' | '西海市' | '雲仙市' | '南島原市' | '西彼杵郡長与町' | '西彼杵郡時津町' | '東彼杵郡東彼杵町' | '東彼杵郡川棚町' | '東彼杵郡波佐見町' | '北松浦郡小値賀町' | '北松浦郡佐々町' | '南松浦郡新上五島町' | '熊本市' | '熊本市中央区' | '熊本市東区' | '熊本市西区' | '熊本市南区' | '熊本市北区' | '八代市' | '人吉市' | '荒尾市' | '水俣市' | '玉名市' | '山鹿市' | '菊池市' | '宇土市' | '上天草市' | '宇城市' | '阿蘇市' | '天草市' | '合志市' | '下益城郡美里町' | '玉名郡玉東町' | '玉名郡南関町' | '玉名郡長洲町' | '玉名郡和水町' | '菊池郡大津町' | '菊池郡菊陽町' | '阿蘇郡南小国町' | '阿蘇郡小国町' | '阿蘇郡産山村' | '阿蘇郡高森町' | '阿蘇郡西原村' | '阿蘇郡南阿蘇村' | '上益城郡御船町' | '上益城郡嘉島町' | '上益城郡益城町' | '上益城郡甲佐町' | '上益城郡山都町' | '八代郡氷川町' | '葦北郡芦北町' | '葦北郡津奈木町' | '球磨郡錦町' | '球磨郡多良木町' | '球磨郡湯前町' | '球磨郡水上村' | '球磨郡相良村' | '球磨郡五木村' | '球磨郡山江村' | '球磨郡球磨村' | '球磨郡あさぎり町' | '天草郡苓北町' | '大分市' | '別府市' | '中津市' | '日田市' | '佐伯市' | '臼杵市' | '津久見市' | '竹田市' | '豊後高田市' | '杵築市' | '宇佐市' | '豊後大野市' | '由布市' | '国東市' | '東国東郡姫島村' | '速見郡日出町' | '玖珠郡九重町' | '玖珠郡玖珠町' | '宮崎市' | '都城市' | '延岡市' | '日南市' | '小林市' | '日向市' | '串間市' | '西都市' | 'えびの市' | '北諸県郡三股町' | '西諸県郡高原町' | '東諸県郡国富町' | '東諸県郡綾町' | '児湯郡高鍋町' | '児湯郡新富町' | '児湯郡西米良村' | '児湯郡木城町' | '児湯郡川南町' | '児湯郡都農町' | '東臼杵郡門川町' | '東臼杵郡諸塚村' | '東臼杵郡椎葉村' | '東臼杵郡美郷町' | '西臼杵郡高千穂町' | '西臼杵郡日之影町' | '西臼杵郡五ヶ瀬町' | '鹿児島市' | '鹿屋市' | '枕崎市' | '阿久根市' | '出水市' | '指宿市' | '西之表市' | '垂水市' | '薩摩川内市' | '日置市' | '曽於市' | '霧島市' | 'いちき串木野市' | '南さつま市' | '志布志市' | '奄美市' | '南九州市' | '伊佐市' | '姶良市' | '鹿児島郡三島村' | '鹿児島郡十島村' | '薩摩郡さつま町' | '出水郡長島町' | '姶良郡湧水町' | '曽於郡大崎町' | '肝属郡東串良町' | '肝属郡錦江町' | '肝属郡南大隅町' | '肝属郡肝付町' | '熊毛郡中種子町' | '熊毛郡南種子町' | '熊毛郡屋久島町' | '大島郡大和村' | '大島郡宇検村' | '大島郡瀬戸内町' | '大島郡龍郷町' | '大島郡喜界町' | '大島郡徳之島町' | '大島郡天城町' | '大島郡伊仙町' | '大島郡和泊町' | '大島郡知名町' | '大島郡与論町' | '那覇市' | '宜野湾市' | '石垣市' | '浦添市' | '名護市' | '糸満市' | '沖縄市' | '豊見城市' | 'うるま市' | '宮古島市' | '南城市' | '国頭郡国頭村' | '国頭郡大宜味村' | '国頭郡東村' | '国頭郡今帰仁村' | '国頭郡本部町' | '国頭郡恩納村' | '国頭郡宜野座村' | '国頭郡金武町' | '国頭郡伊江村' | '中頭郡読谷村' | '中頭郡嘉手納町' | '中頭郡北谷町' | '中頭郡北中城村' | '中頭郡中城村' | '中頭郡西原町' | '島尻郡与那原町' | '島尻郡南風原町' | '島尻郡渡嘉敷村' | '島尻郡座間味村' | '島尻郡粟国村' | '島尻郡渡名喜村' | '島尻郡南大東村' | '島尻郡北大東村' | '島尻郡伊平屋村' | '島尻郡伊是名村' | '島尻郡久米島町' | '島尻郡八重瀬町' | '宮古郡多良間村' | '八重山郡竹富町' | '八重山郡与那国町');
            }>;
            /**
             * Table
             */
            ext_col_06?: Array<{
                key: string;
                label: string;
            } | '' | '1' | '2' | '3' | '4' | '5'>;
            /**
             * Relation
             */
            ext_col_09?: Array<{
                module_type: string;
                module_id: number;
            } | number>;
            /**
             * Private File
             */
            ext_col_11?: Array<{
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
                /**
                 * File ID. Whether the item should be updated or inserted depends on this ID being set or not.
                 */
                id?: string;
            }>;
            /**
             * Private Image File
             */
            ext_col_17?: Array<{
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
                /**
                 * File ID. Whether the item should be updated or inserted depends on this ID being set or not.
                 */
                id?: string;
            }>;
            /**
             * JSON
             */
            ext_jsn_12?: Array<{
                /**
                 * * 1 => opt1
                 * * 2 => opt2
                 */
                options?: ('' | '1' | '2');
                text?: string;
            }>;
            /**
             * HTML
             */
            ext_col_13?: Array<string>;
            /**
             * Wysiwyg
             */
            ext_col_14?: Array<string>;
            /**
             * Vimeo
             */
            ext_col_16?: Array<{
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
                /**
                 * File ID. Whether the item should be updated or inserted depends on this ID being set or not.
                 */
                id?: string;
            }>;
            /**
             * Number
             */
            ext_col_18?: Array<string>;
            /**
             * Validate
             */
            validate_only?: boolean;
        };
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type postContentServiceRcmsApi1TopicsMultipleUpdateTopicsIdResponse = any;
    interface getContentServiceRcmsApi1TopicsStaticRequest {
        outputFormat?: string;
        lang?: string;
        charset?: string;
        cnt?: number;
        pageId?: number;
        filter?: string;
        customSearchId?: string;
        topicsKeyword?: string;
        topicsKeywordCond?: string;
        contentsType?: Array<number>;
        contentsTypeCond?: string;
        date?: string;
        usingSeason?: string;
        season?: number;
        extColumnCond?: string;
        excludeTopicsId?: string;
        tagCategoryId?: number;
        tagSearch?: string;
        tagId?: Array<number>;
        tagCond?: string;
        excludeTagId?: string;
        myFavoriteList?: number;
        myCommentList?: number;
        myOwnList?: string;
        order?: string;
        orderById?: string;
        id?: Array<number>;
        type?: string;
        groupBy?: string;
        groupByCategoryId?: Array<number>;
        showEmptyCategories?: boolean;
        orderByCategoryCount?: boolean;
    }
    type getContentServiceRcmsApi1TopicsStaticResponse = any;
    interface getContentServiceRcmsApi1TopicsStaticTopicsIdRequest {
        topicsId: string;
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type getContentServiceRcmsApi1TopicsStaticTopicsIdResponse = any;
    interface postContentServiceRcmsApi1TopicsMultipleDeleteTopicsIdRequest {
        topicsId: string;
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type postContentServiceRcmsApi1TopicsMultipleDeleteTopicsIdResponse = any;
    interface getContentServiceRcmsApi1TopicsPostprocessRequest {
        outputFormat?: string;
        lang?: string;
        charset?: string;
        cnt?: number;
        pageId?: number;
        filter?: string;
        customSearchId?: string;
        topicsKeyword?: string;
        topicsKeywordCond?: string;
        contentsType?: Array<number>;
        contentsTypeCond?: string;
        date?: string;
        usingSeason?: string;
        season?: number;
        extColumnCond?: string;
        excludeTopicsId?: string;
        tagCategoryId?: number;
        tagSearch?: string;
        tagId?: Array<number>;
        tagCond?: string;
        excludeTagId?: string;
        myFavoriteList?: number;
        myCommentList?: number;
        myOwnList?: string;
        order?: string;
        orderById?: string;
        id?: Array<number>;
        type?: string;
        groupBy?: string;
        groupByCategoryId?: Array<number>;
        showEmptyCategories?: boolean;
        orderByCategoryCount?: boolean;
    }
    type getContentServiceRcmsApi1TopicsPostprocessResponse = any;
    interface getContentServiceRcmsApi1TopicsGroupsRequest {
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type getContentServiceRcmsApi1TopicsGroupsResponse = any;
    interface getContentServiceRcmsApi1TopicsCategoriesRequest {
        outputFormat?: string;
        lang?: string;
        charset?: string;
        cnt?: number;
        topicsGroupId?: number;
    }
    type getContentServiceRcmsApi1TopicsCategoriesResponse = any;
    interface getContentServiceRcmsApi1TopicsPreviewRequest {
        previewToken: string;
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type getContentServiceRcmsApi1TopicsPreviewResponse = any;
}
export declare const infos: ({
    path: string;
    httpMethod: string;
    class: typeof ContentService;
    className: string;
    method: typeof ContentService.getContentServiceRcmsApi1Topics1TopicsId;
    methodName: string;
    auth: null;
    description: string;
} | {
    path: string;
    httpMethod: string;
    class: typeof ContentService;
    className: string;
    method: typeof ContentService.getContentServiceRcmsApi1Topics1;
    methodName: string;
    auth: null;
    description: string;
} | {
    path: string;
    httpMethod: string;
    class: typeof ContentService;
    className: string;
    method: typeof ContentService.postContentServiceRcmsApi1Topics1Insert;
    methodName: string;
    auth: null;
    description: string;
} | {
    path: string;
    httpMethod: string;
    class: typeof ContentService;
    className: string;
    method: typeof ContentService.postContentServiceRcmsApi1TopicsMultipleInsert;
    methodName: string;
    auth: null;
    description: string;
})[];
//# sourceMappingURL=ContentService.d.ts.map