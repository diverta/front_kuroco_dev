import { Result } from '../core/Result';
export declare class ActivityService {
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
     * @param outputFormat Format (json|xml|csv|zip)
     * @param lang Language
     * @param charset Charset
     * @param newOrderFlg To the display the newest use 1. Default: 0
     * @param cnt Display number per page
     * @param pageId Page ID
     * @param fromDate Posted Date
     * @param toDate Posted Date
     * @param groupBy Grouping List by (module_id)
     * @param type Grouping List as (array or object)
     * @param memberId Member ID
     * @result any
     * @throws ApiError
     */
    static getActivityServiceRcmsApi1TopicsComments(requestParam: ActivityService.getActivityServiceRcmsApi1TopicsCommentsRequest): Promise<Result<any>>;
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
     * @param outputFormat Format (json|xml|csv|zip)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postActivityServiceRcmsApi1TopicsCommentsInsert(requestParam: ActivityService.postActivityServiceRcmsApi1TopicsCommentsInsertRequest): Promise<Result<any>>;
    /**
     *
     * ### **Comment::update (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **use_module_type** `topics`
     *
     * @param commentId
     * @param requestBody
     * @param outputFormat Format (json|xml|csv|zip)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postActivityServiceRcmsApi1TopicsCommentsUpdateCommentId(requestParam: ActivityService.postActivityServiceRcmsApi1TopicsCommentsUpdateCommentIdRequest): Promise<Result<any>>;
    /**
     *
     * ### **Comment::delete (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **use_module_type** `topics`
     *
     * @param commentId
     * @param requestBody
     * @param outputFormat Format (json|xml|csv|zip)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postActivityServiceRcmsApi1TopicsCommentsDeleteCommentId(requestParam: ActivityService.postActivityServiceRcmsApi1TopicsCommentsDeleteCommentIdRequest): Promise<Result<any>>;
}
export declare namespace ActivityService {
    interface getActivityServiceRcmsApi1TopicsCommentsRequest {
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
        type?: string;
        memberId?: Array<number>;
    }
    type getActivityServiceRcmsApi1TopicsCommentsResponse = any;
    interface postActivityServiceRcmsApi1TopicsCommentsInsertRequest {
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
             * Activity
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
    type postActivityServiceRcmsApi1TopicsCommentsInsertResponse = any;
    interface postActivityServiceRcmsApi1TopicsCommentsUpdateCommentIdRequest {
        commentId: number;
        requestBody: {
            /**
             * モジュールID
             */
            module_id?: number;
            /**
             * Name
             */
            name?: string;
            /**
             * Mail
             */
            mail?: string;
            /**
             * URL
             */
            url?: string;
            /**
             * Activity
             */
            note?: string;
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
    type postActivityServiceRcmsApi1TopicsCommentsUpdateCommentIdResponse = any;
    interface postActivityServiceRcmsApi1TopicsCommentsDeleteCommentIdRequest {
        commentId: number;
        requestBody: {
            /**
             * 削除キー
             */
            delkey?: string;
        };
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type postActivityServiceRcmsApi1TopicsCommentsDeleteCommentIdResponse = any;
}
export declare const infos: ({
    path: string;
    httpMethod: string;
    class: typeof ActivityService;
    className: string;
    method: typeof ActivityService.getActivityServiceRcmsApi1TopicsComments;
    methodName: string;
    auth: null;
    description: string;
} | {
    path: string;
    httpMethod: string;
    class: typeof ActivityService;
    className: string;
    method: typeof ActivityService.postActivityServiceRcmsApi1TopicsCommentsInsert;
    methodName: string;
    auth: null;
    description: string;
} | {
    path: string;
    httpMethod: string;
    class: typeof ActivityService;
    className: string;
    method: typeof ActivityService.postActivityServiceRcmsApi1TopicsCommentsUpdateCommentId;
    methodName: string;
    auth: null;
    description: string;
})[];
//# sourceMappingURL=ActivityService.d.ts.map