import { Result } from '../core/Result';
export declare class FavoritesService {
    /**
     *
     * ### **Favorite::list (v1)**
     *
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @param cnt Display number per page
     * @param pageId Page ID
     * @param moduleId
     * @param moduleType Module type
     * @param memberId Member ID
     * @param rcmsid rcmsid
     * @param groupBy Grouping List by (module_id)
     * @param groupAs Grouping List as (array or object)
     * @result any
     * @throws ApiError
     */
    static getFavoritesServiceRcmsApi1Favorites(requestParam: FavoritesService.getFavoritesServiceRcmsApi1FavoritesRequest): Promise<Result<any>>;
    /**
     *
     * ### **Favorite::insert (v1)**
     *
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postFavoritesServiceRcmsApi1FavoritesInsert(requestParam: FavoritesService.postFavoritesServiceRcmsApi1FavoritesInsertRequest): Promise<Result<any>>;
    /**
     *
     * ### **Favorite::delete (v1)**
     *
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    static postFavoritesServiceRcmsApi1FavoritesDelete(requestParam: FavoritesService.postFavoritesServiceRcmsApi1FavoritesDeleteRequest): Promise<Result<any>>;
}
export declare namespace FavoritesService {
    interface getFavoritesServiceRcmsApi1FavoritesRequest {
        outputFormat?: string;
        lang?: string;
        charset?: string;
        cnt?: number;
        pageId?: number;
        moduleId?: Array<number>;
        moduleType?: Array<string>;
        memberId?: Array<number>;
        rcmsid?: Array<string>;
        groupBy?: string;
        groupAs?: string;
    }
    type getFavoritesServiceRcmsApi1FavoritesResponse = any;
    interface postFavoritesServiceRcmsApi1FavoritesInsertRequest {
        requestBody: {
            /**
             * Module type
             */
            module_type: ('group' | 'menu' | 'comment' | 'inquiry' | 'login' | 'login_history' | 'member' | 'staticcontents' | 'site' | 'topics' | 'memberregist' | 'batch' | 'mailtemplateedit' | 'relation' | 'csvtable' | 'approvalflow' | 'api_googleanalytics' | 'onetime' | 'magazine' | 'tag' | 'api_webpush' | 'rcms_api' | 'firebase' | 'trigger' | 'ec' | 'rcms');
            /**
             * module_id
             */
            module_id: number;
            /**
             * ページシステム名
             */
            page_sysnm?: string;
        };
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type postFavoritesServiceRcmsApi1FavoritesInsertResponse = any;
    interface postFavoritesServiceRcmsApi1FavoritesDeleteRequest {
        requestBody: {
            /**
             * Module type
             */
            module_type: ('group' | 'menu' | 'comment' | 'inquiry' | 'login' | 'login_history' | 'member' | 'staticcontents' | 'site' | 'topics' | 'memberregist' | 'batch' | 'mailtemplateedit' | 'relation' | 'csvtable' | 'approvalflow' | 'api_googleanalytics' | 'onetime' | 'magazine' | 'tag' | 'api_webpush' | 'rcms_api' | 'firebase' | 'trigger' | 'ec' | 'rcms');
            /**
             * module_id
             */
            module_id: number;
            /**
             * ページシステム名
             */
            page_sysnm?: string;
        };
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    type postFavoritesServiceRcmsApi1FavoritesDeleteResponse = any;
}
export declare const infos: ({
    path: string;
    httpMethod: string;
    class: typeof FavoritesService;
    className: string;
    method: typeof FavoritesService.getFavoritesServiceRcmsApi1Favorites;
    methodName: string;
    auth: null;
    description: string;
} | {
    path: string;
    httpMethod: string;
    class: typeof FavoritesService;
    className: string;
    method: typeof FavoritesService.postFavoritesServiceRcmsApi1FavoritesInsert;
    methodName: string;
    auth: null;
    description: string;
})[];
//# sourceMappingURL=FavoritesService.d.ts.map