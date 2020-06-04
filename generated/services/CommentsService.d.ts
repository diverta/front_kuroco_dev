export declare class CommentsService {
    /**
     *
     * ### **Comment::list (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **module_type** `topics`
     *
     * @param moduleId モジュールID
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @param newOrderFlg To the display the newest use 1. Default: 0
     * @param cnt Display number per page
     * @param pageId Page ID
     * @param fromDate Posted Date
     * @param toDate Posted Date
     * @param groupBy Grouping List by (module_id)
     * @param groupAs Grouping List as (array or object)
     * @result any
     * @throws ApiError
     */
    static getCommentsServiceRcmsApi1TopicsComments(requestParam: CommentsService.getCommentsServiceRcmsApi1TopicsCommentsRequest): Promise<any>;
    /**
     *
     * ### **Comment::insert (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **use_module_type** `topics`
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postCommentsServiceRcmsApi1TopicsCommentsInsert(requestParam: CommentsService.postCommentsServiceRcmsApi1TopicsCommentsInsertRequest): Promise<any>;
    /**
     *
     * ### **Comment::update (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **use_module_type** `topics`
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postCommentsServiceRcmsApi1TopicsCommentsUpdate(requestParam: CommentsService.postCommentsServiceRcmsApi1TopicsCommentsUpdateRequest): Promise<any>;
    /**
     *
     * ### **Comment::delete (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **use_module_type** `topics`
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postCommentsServiceRcmsApi1TopicsCommentsDelete(requestParam: CommentsService.postCommentsServiceRcmsApi1TopicsCommentsDeleteRequest): Promise<any>;
}
export declare namespace CommentsService {
    interface getCommentsServiceRcmsApi1TopicsCommentsRequest {
        moduleId: Array<number>;
        outputFormat?: string;
        lang?: string;
        charset?: string;
        newOrderFlg?: number;
        cnt?: number;
        pageId?: number;
        fromDate?: string;
        toDate?: string;
        groupBy?: string;
        groupAs?: string;
    }
    type getCommentsServiceRcmsApi1TopicsCommentsResponse = any;
    interface postCommentsServiceRcmsApi1TopicsCommentsInsertRequest {
        requestBody: {
            /**
             * モジュールID
             */
            module_id: number;
            /**
             * Name
             */
            name: string;
            /**
             * Mail
             */
            mail?: string;
            /**
             * URL
             */
            url?: string;
            /**
             * Comments
             */
            note: string;
            /**
             * Rating
             */
            rating?: number;
            /**
             * 削除キー
             */
            delkey?: string;
        };
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type postCommentsServiceRcmsApi1TopicsCommentsInsertResponse = any;
    interface postCommentsServiceRcmsApi1TopicsCommentsUpdateRequest {
        requestBody: {
            /**
             * コメントID
             */
            comment_id: number;
            /**
             * モジュールID
             */
            module_id: number;
            /**
             * Name
             */
            name: string;
            /**
             * Mail
             */
            mail?: string;
            /**
             * URL
             */
            url?: string;
            /**
             * Comments
             */
            note: string;
            /**
             * Rating
             */
            rating?: number;
            /**
             * 削除キー
             */
            delkey?: string;
        };
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type postCommentsServiceRcmsApi1TopicsCommentsUpdateResponse = any;
    interface postCommentsServiceRcmsApi1TopicsCommentsDeleteRequest {
        requestBody: {
            /**
             * コメントID
             */
            comment_id: number;
            /**
             * 削除キー
             */
            delkey?: string;
        };
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type postCommentsServiceRcmsApi1TopicsCommentsDeleteResponse = any;
}
export declare const infos: ({
    path: string;
    httpMethod: string;
    class: typeof CommentsService;
    className: string;
    method: typeof CommentsService.getCommentsServiceRcmsApi1TopicsComments;
    methodName: string;
    auth: null;
    description: string;
} | {
    path: string;
    httpMethod: string;
    class: typeof CommentsService;
    className: string;
    method: typeof CommentsService.postCommentsServiceRcmsApi1TopicsCommentsInsert;
    methodName: string;
    auth: null;
    description: string;
})[];
