import { Result } from '../core/Result';
export declare class TopicsService {
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
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static getTopicsServiceRcmsApi1Topics1TopicsId(requestParam: TopicsService.getTopicsServiceRcmsApi1Topics1TopicsIdRequest): Promise<Result<any>>;
    /**
     *
     * ### **Topics::list (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **topics_group_id** `1`
     *
     * @param outputFormat Format (json|xml|csv)
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
     * @result any
     * @throws ApiError
     */
    static getTopicsServiceRcmsApi1Topics1(requestParam: TopicsService.getTopicsServiceRcmsApi1Topics1Request): Promise<Result<any>>;
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
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postTopicsServiceRcmsApi1Topics1Insert(requestParam: TopicsService.postTopicsServiceRcmsApi1Topics1InsertRequest): Promise<Result<any>>;
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
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postTopicsServiceRcmsApi1Topics1UpdateTopicsId(requestParam: TopicsService.postTopicsServiceRcmsApi1Topics1UpdateTopicsIdRequest): Promise<Result<any>>;
    /**
     *
     * ### **Topics::delete (v1)**
     *
     *
     * @param topicsId
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postTopicsServiceRcmsApi1Topics1DeleteTopicsId(requestParam: TopicsService.postTopicsServiceRcmsApi1Topics1DeleteTopicsIdRequest): Promise<Result<any>>;
    /**
     *
     * ### **Topics::list (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **topics_group_id** `2`
     *
     * @param outputFormat Format (json|xml|csv)
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
     * @result any
     * @throws ApiError
     */
    static getTopicsServiceRcmsApi1TopicsMultiple(requestParam: TopicsService.getTopicsServiceRcmsApi1TopicsMultipleRequest): Promise<Result<any>>;
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
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static getTopicsServiceRcmsApi1TopicsMultipleTopicsId(requestParam: TopicsService.getTopicsServiceRcmsApi1TopicsMultipleTopicsIdRequest): Promise<Result<any>>;
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
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postTopicsServiceRcmsApi1TopicsMultipleInsert(requestParam: TopicsService.postTopicsServiceRcmsApi1TopicsMultipleInsertRequest): Promise<Result<any>>;
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
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postTopicsServiceRcmsApi1TopicsMultipleUpdateTopicsId(requestParam: TopicsService.postTopicsServiceRcmsApi1TopicsMultipleUpdateTopicsIdRequest): Promise<Result<any>>;
    /**
     *
     * ### **Topics::list (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **topics_group_id** `3`
     *
     * @param outputFormat Format (json|xml|csv)
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
     * @result any
     * @throws ApiError
     */
    static getTopicsServiceRcmsApi1TopicsStatic(requestParam: TopicsService.getTopicsServiceRcmsApi1TopicsStaticRequest): Promise<Result<any>>;
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
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static getTopicsServiceRcmsApi1TopicsStaticTopicsId(requestParam: TopicsService.getTopicsServiceRcmsApi1TopicsStaticTopicsIdRequest): Promise<Result<any>>;
    /**
     *
     * ### **Topics::delete (v1)**
     *
     *
     * @param topicsId
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postTopicsServiceRcmsApi1TopicsMultipleDeleteTopicsId(requestParam: TopicsService.postTopicsServiceRcmsApi1TopicsMultipleDeleteTopicsIdRequest): Promise<Result<any>>;
    /**
     *
     * ### **Topics::list (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **topics_group_id** `1`
     *
     * @param outputFormat Format (json|xml|csv)
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
     * @result any
     * @throws ApiError
     */
    static getTopicsServiceRcmsApi1TopicsPostprocess(requestParam: TopicsService.getTopicsServiceRcmsApi1TopicsPostprocessRequest): Promise<Result<any>>;
}
export declare namespace TopicsService {
    interface getTopicsServiceRcmsApi1Topics1TopicsIdRequest {
        topicsId: number;
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type getTopicsServiceRcmsApi1Topics1TopicsIdResponse = any;
    interface getTopicsServiceRcmsApi1Topics1Request {
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
    }
    type getTopicsServiceRcmsApi1Topics1Response = any;
    interface postTopicsServiceRcmsApi1Topics1InsertRequest {
        requestBody: {
            subject: string;
            contents_type: string;
            ymd: string;
            open_type: string;
            topics_flg: string;
            contents: string;
            regular_flg: number;
            tag_id: string;
            ext_col_01: string;
            ext_col_02: string;
            ext_col_03: {
                key: string;
                label: string;
            } | '' | '1' | '2' | '3';
            ext_col_04: {
                key: string;
                label: string;
            } | '1' | '2' | '3';
            ext_col_07: string | string | {
                ymd: string;
            };
            ext_col_08: string | string | {
                ymd: string;
                h: number;
                i: number;
            };
            ext_col_05: any;
            ext_col_15: any;
            ext_col_06: {
                key: string;
                label: string;
            } | '' | '1' | '2' | '3' | '4' | '5';
            ext_col_09: {
                module_type: string;
                module_id: number;
            } | number;
            ext_col_11: any;
            ext_col_17: any;
            ext_jsn_12: any;
            ext_col_13: string;
            ext_col_14: string;
            ext_col_16: any;
            ext_col_18: string;
            validate_only: boolean;
        } | any;
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type postTopicsServiceRcmsApi1Topics1InsertResponse = any;
    interface postTopicsServiceRcmsApi1Topics1UpdateTopicsIdRequest {
        topicsId: number;
        requestBody: {
            subject: string;
            contents_type: string;
            ymd: string;
            open_type: string;
            topics_flg: string;
            contents: string;
            regular_flg: number;
            tag_id: string;
            ext_col_01: string;
            ext_col_02: string;
            ext_col_03: {
                key: string;
                label: string;
            } | '' | '1' | '2' | '3';
            ext_col_04: {
                key: string;
                label: string;
            } | '1' | '2' | '3';
            ext_col_07: string | string | {
                ymd: string;
            };
            ext_col_08: string | string | {
                ymd: string;
                h: number;
                i: number;
            };
            ext_col_05: any;
            ext_col_15: any;
            ext_col_06: {
                key: string;
                label: string;
            } | '' | '1' | '2' | '3' | '4' | '5';
            ext_col_09: {
                module_type: string;
                module_id: number;
            } | number;
            ext_col_11: any;
            ext_col_17: any;
            ext_jsn_12: any;
            ext_col_13: string;
            ext_col_14: string;
            ext_col_16: any;
            ext_col_18: string;
            validate_only: boolean;
        } | any;
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type postTopicsServiceRcmsApi1Topics1UpdateTopicsIdResponse = any;
    interface postTopicsServiceRcmsApi1Topics1DeleteTopicsIdRequest {
        topicsId: number;
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type postTopicsServiceRcmsApi1Topics1DeleteTopicsIdResponse = any;
    interface getTopicsServiceRcmsApi1TopicsMultipleRequest {
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
    }
    type getTopicsServiceRcmsApi1TopicsMultipleResponse = any;
    interface getTopicsServiceRcmsApi1TopicsMultipleTopicsIdRequest {
        topicsId: number;
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type getTopicsServiceRcmsApi1TopicsMultipleTopicsIdResponse = any;
    interface postTopicsServiceRcmsApi1TopicsMultipleInsertRequest {
        requestBody: {
            subject: string;
            contents_type: string;
            ymd: string;
            open_type: string;
            topics_flg: string;
            contents: string;
            regular_flg: number;
            tag_id: string;
            ext_col_01: string;
            ext_col_02: string;
            ext_col_03: {
                key: string;
                label: string;
            } | '' | '1' | '2' | '3';
            ext_col_04: {
                key: string;
                label: string;
            } | '1' | '2' | '3';
            ext_col_07: string | string | {
                ymd: string;
            };
            ext_col_08: string | string | {
                ymd: string;
                h: number;
                i: number;
            };
            ext_col_05: any;
            ext_col_15: any;
            ext_col_06: {
                key: string;
                label: string;
            } | '' | '1' | '2' | '3' | '4' | '5';
            ext_col_09: {
                module_type: string;
                module_id: number;
            } | number;
            ext_col_11: any;
            ext_col_17: any;
            ext_jsn_12: any;
            ext_col_13: string;
            ext_col_14: string;
            ext_col_16: any;
            ext_col_18: string;
            validate_only: boolean;
        } | any;
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type postTopicsServiceRcmsApi1TopicsMultipleInsertResponse = any;
    interface postTopicsServiceRcmsApi1TopicsMultipleUpdateTopicsIdRequest {
        topicsId: number;
        requestBody: {
            subject: string;
            contents_type: string;
            ymd: string;
            open_type: string;
            topics_flg: string;
            contents: string;
            regular_flg: number;
            tag_id: string;
            ext_col_01: string;
            ext_col_02: string;
            ext_col_03: {
                key: string;
                label: string;
            } | '' | '1' | '2' | '3';
            ext_col_04: {
                key: string;
                label: string;
            } | '1' | '2' | '3';
            ext_col_07: string | string | {
                ymd: string;
            };
            ext_col_08: string | string | {
                ymd: string;
                h: number;
                i: number;
            };
            ext_col_05: any;
            ext_col_15: any;
            ext_col_06: {
                key: string;
                label: string;
            } | '' | '1' | '2' | '3' | '4' | '5';
            ext_col_09: {
                module_type: string;
                module_id: number;
            } | number;
            ext_col_11: any;
            ext_col_17: any;
            ext_jsn_12: any;
            ext_col_13: string;
            ext_col_14: string;
            ext_col_16: any;
            ext_col_18: string;
            validate_only: boolean;
        } | any;
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type postTopicsServiceRcmsApi1TopicsMultipleUpdateTopicsIdResponse = any;
    interface getTopicsServiceRcmsApi1TopicsStaticRequest {
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
    }
    type getTopicsServiceRcmsApi1TopicsStaticResponse = any;
    interface getTopicsServiceRcmsApi1TopicsStaticTopicsIdRequest {
        topicsId: number;
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type getTopicsServiceRcmsApi1TopicsStaticTopicsIdResponse = any;
    interface postTopicsServiceRcmsApi1TopicsMultipleDeleteTopicsIdRequest {
        topicsId: number;
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type postTopicsServiceRcmsApi1TopicsMultipleDeleteTopicsIdResponse = any;
    interface getTopicsServiceRcmsApi1TopicsPostprocessRequest {
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
    }
    type getTopicsServiceRcmsApi1TopicsPostprocessResponse = any;
}
export declare const infos: ({
    path: string;
    httpMethod: string;
    class: typeof TopicsService;
    className: string;
    method: typeof TopicsService.getTopicsServiceRcmsApi1Topics1TopicsId;
    methodName: string;
    auth: null;
    description: string;
} | {
    path: string;
    httpMethod: string;
    class: typeof TopicsService;
    className: string;
    method: typeof TopicsService.getTopicsServiceRcmsApi1Topics1;
    methodName: string;
    auth: null;
    description: string;
} | {
    path: string;
    httpMethod: string;
    class: typeof TopicsService;
    className: string;
    method: typeof TopicsService.postTopicsServiceRcmsApi1Topics1Insert;
    methodName: string;
    auth: null;
    description: string;
})[];
//# sourceMappingURL=TopicsService.d.ts.map