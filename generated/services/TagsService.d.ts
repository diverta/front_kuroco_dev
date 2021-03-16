import { Result } from '../core/Result';
export declare class TagsService {
    /**
     *
     * ### **Tag::list (v1)**
     *
     *
     * @param outputFormat Format (json|xml|csv|zip)
     * @param lang Language
     * @param charset Charset
     * @param order Set the sort order. Available param {0}
     * @param pageId Page ID
     * @param id Tag IDs that you would like to display
     * @param categoryId ID of the tag category to be displayed. (Default: All)
     * @param groupBy Grouping List by (module_id|category)
     * @param type Grouping List as (array|object)
     * @result any
     * @throws ApiError
     */
    static getTagsServiceRcmsApi1Tags(requestParam: TagsService.getTagsServiceRcmsApi1TagsRequest): Promise<Result<any>>;
    /**
     *
     * ### **Tag::insert (v1)**
     *
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv|zip)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postTagsServiceRcmsApi1TagsInsert(requestParam: TagsService.postTagsServiceRcmsApi1TagsInsertRequest): Promise<Result<any>>;
    /**
     *
     * ### **Tag::delete (v1)**
     *
     *
     * @param tagId
     * @param outputFormat Format (json|xml|csv|zip)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postTagsServiceRcmsApi1TagsDeleteTagId(requestParam: TagsService.postTagsServiceRcmsApi1TagsDeleteTagIdRequest): Promise<Result<any>>;
}
export declare namespace TagsService {
    interface getTagsServiceRcmsApi1TagsRequest {
        outputFormat?: string;
        lang?: string;
        charset?: string;
        order?: Array<string>;
        pageId?: number;
        id?: Array<number>;
        categoryId?: Array<number>;
        groupBy?: string;
        type?: string;
    }
    type getTagsServiceRcmsApi1TagsResponse = any;
    interface postTagsServiceRcmsApi1TagsInsertRequest {
        requestBody: {
            /**
             * Title
             */
            tag_nm: string;
            /**
             * Category ID
             * * 0 => Uncategorized
             * * 1 => Category1
             * * 2 => Category2
             * * 3 => Category3
             * * 4 => Category1__Child1
             * * 5 => Category1__Child2
             */
            tag_category_id?: (0 | 1 | 2 | 3 | 4 | 5);
            /**
             * Published / Not published
             */
            open_type?: ('open' | 'close' | 'default');
            /**
             * Sort
             */
            weight?: number;
            /**
             * ext_col_01
             */
            ext_col_01?: string;
            /**
             * ext_col_02
             */
            ext_col_02?: string;
            /**
             * ext_col_03
             */
            ext_col_03?: string;
            /**
             * ext_col_04
             */
            ext_col_04?: string;
            /**
             * ext_col_05
             */
            ext_col_05?: string;
            /**
             * ext_col_06
             */
            ext_col_06?: string;
            /**
             * ext_col_07
             */
            ext_col_07?: string;
            /**
             * ext_col_08
             */
            ext_col_08?: string;
            /**
             * ext_col_09
             */
            ext_col_09?: string;
            /**
             * ext_col_10
             */
            ext_col_10?: string;
        };
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type postTagsServiceRcmsApi1TagsInsertResponse = any;
    interface postTagsServiceRcmsApi1TagsDeleteTagIdRequest {
        tagId: number;
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type postTagsServiceRcmsApi1TagsDeleteTagIdResponse = any;
}
export declare const infos: ({
    path: string;
    httpMethod: string;
    class: typeof TagsService;
    className: string;
    method: typeof TagsService.getTagsServiceRcmsApi1Tags;
    methodName: string;
    auth: null;
    description: string;
} | {
    path: string;
    httpMethod: string;
    class: typeof TagsService;
    className: string;
    method: typeof TagsService.postTagsServiceRcmsApi1TagsInsert;
    methodName: string;
    auth: null;
    description: string;
} | {
    path: string;
    httpMethod: string;
    class: typeof TagsService;
    className: string;
    method: typeof TagsService.postTagsServiceRcmsApi1TagsDeleteTagId;
    methodName: string;
    auth: null;
    description: string;
})[];
//# sourceMappingURL=TagsService.d.ts.map