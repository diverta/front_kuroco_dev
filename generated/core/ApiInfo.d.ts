import * as AuthenticationService from '../services/AuthenticationService';
import * as TopicsService from '../services/TopicsService';
import * as MembersService from '../services/MembersService';
import * as CommentsService from '../services/CommentsService';
import * as FavoritesService from '../services/FavoritesService';
import * as InquiriesService from '../services/InquiriesService';
import * as FilesService from '../services/FilesService';
import * as TagsService from '../services/TagsService';
import * as TablesService from '../services/TablesService';
import * as AsynchronousProcessingService from '../services/AsynchronousProcessingService';
import * as ApiService from '../services/ApiService';
export declare const ApiInfos: ({
    path: string;
    httpMethod: string;
    class: typeof AuthenticationService.AuthenticationService;
    className: string;
    method: typeof AuthenticationService.AuthenticationService.postAuthenticationServiceRcmsApi1AuthLogin;
    methodName: string;
    auth: string;
    description: string;
} | {
    path: string;
    httpMethod: string;
    class: typeof AuthenticationService.AuthenticationService;
    className: string;
    method: typeof AuthenticationService.AuthenticationService.postAuthenticationServiceRcmsApi1MePwReminder;
    methodName: string;
    auth: null;
    description: string;
} | {
    path: string;
    httpMethod: string;
    class: typeof AuthenticationService.AuthenticationService;
    className: string;
    method: typeof AuthenticationService.AuthenticationService.postAuthenticationServiceRcmsApi1MePwReset;
    methodName: string;
    auth: null;
    description: string;
} | {
    path: string;
    httpMethod: string;
    class: typeof TopicsService.TopicsService;
    className: string;
    method: typeof TopicsService.TopicsService.getTopicsServiceRcmsApi1Topics1TopicsId;
    methodName: string;
    auth: null;
    description: string;
} | {
    path: string;
    httpMethod: string;
    class: typeof TopicsService.TopicsService;
    className: string;
    method: typeof TopicsService.TopicsService.getTopicsServiceRcmsApi1Topics1;
    methodName: string;
    auth: null;
    description: string;
} | {
    path: string;
    httpMethod: string;
    class: typeof TopicsService.TopicsService;
    className: string;
    method: typeof TopicsService.TopicsService.postTopicsServiceRcmsApi1Topics1Insert;
    methodName: string;
    auth: null;
    description: string;
} | {
    path: string;
    httpMethod: string;
    class: typeof TopicsService.TopicsService;
    className: string;
    method: typeof TopicsService.TopicsService.postTopicsServiceRcmsApi1TopicsMultipleInsert;
    methodName: string;
    auth: null;
    description: string;
} | {
    path: string;
    httpMethod: string;
    class: typeof MembersService.MembersService;
    className: string;
    method: typeof MembersService.MembersService.getMembersServiceRcmsApi1Members;
    methodName: string;
    auth: null;
    description: string;
} | {
    path: string;
    httpMethod: string;
    class: typeof MembersService.MembersService;
    className: string;
    method: typeof MembersService.MembersService.getMembersServiceRcmsApi1MembersMemberId;
    methodName: string;
    auth: null;
    description: string;
} | {
    path: string;
    httpMethod: string;
    class: typeof MembersService.MembersService;
    className: string;
    method: typeof MembersService.MembersService.postMembersServiceRcmsApi1MembersInsert;
    methodName: string;
    auth: null;
    description: string;
} | {
    path: string;
    httpMethod: string;
    class: typeof MembersService.MembersService;
    className: string;
    method: typeof MembersService.MembersService.postMembersServiceRcmsApi1MembersUpdate;
    methodName: string;
    auth: null;
    description: string;
} | {
    path: string;
    httpMethod: string;
    class: typeof CommentsService.CommentsService;
    className: string;
    method: typeof CommentsService.CommentsService.getCommentsServiceRcmsApi1TopicsComments;
    methodName: string;
    auth: null;
    description: string;
} | {
    path: string;
    httpMethod: string;
    class: typeof CommentsService.CommentsService;
    className: string;
    method: typeof CommentsService.CommentsService.postCommentsServiceRcmsApi1TopicsCommentsInsert;
    methodName: string;
    auth: null;
    description: string;
} | {
    path: string;
    httpMethod: string;
    class: typeof FavoritesService.FavoritesService;
    className: string;
    method: typeof FavoritesService.FavoritesService.getFavoritesServiceRcmsApi1Favorites;
    methodName: string;
    auth: null;
    description: string;
} | {
    path: string;
    httpMethod: string;
    class: typeof FavoritesService.FavoritesService;
    className: string;
    method: typeof FavoritesService.FavoritesService.postFavoritesServiceRcmsApi1FavoritesInsert;
    methodName: string;
    auth: null;
    description: string;
} | {
    path: string;
    httpMethod: string;
    class: typeof InquiriesService.InquiriesService;
    className: string;
    method: typeof InquiriesService.InquiriesService.getInquiriesServiceRcmsApi1InquiryForms;
    methodName: string;
    auth: null;
    description: string;
} | {
    path: string;
    httpMethod: string;
    class: typeof FilesService.FilesService;
    className: string;
    method: typeof FilesService.FilesService.postFilesServiceRcmsApi1FilesUpload;
    methodName: string;
    auth: null;
    description: string;
} | {
    path: string;
    httpMethod: string;
    class: typeof TagsService.TagsService;
    className: string;
    method: typeof TagsService.TagsService.getTagsServiceRcmsApi1Tags;
    methodName: string;
    auth: null;
    description: string;
} | {
    path: string;
    httpMethod: string;
    class: typeof TagsService.TagsService;
    className: string;
    method: typeof TagsService.TagsService.postTagsServiceRcmsApi1TagsInsert;
    methodName: string;
    auth: null;
    description: string;
} | {
    path: string;
    httpMethod: string;
    class: typeof TagsService.TagsService;
    className: string;
    method: typeof TagsService.TagsService.postTagsServiceRcmsApi1TagsDeleteTagId;
    methodName: string;
    auth: null;
    description: string;
} | {
    path: string;
    httpMethod: string;
    class: typeof TablesService.TablesService;
    className: string;
    method: typeof TablesService.TablesService.getTablesServiceRcmsApi1TablesSimple;
    methodName: string;
    auth: null;
    description: string;
} | {
    path: string;
    httpMethod: string;
    class: typeof AsynchronousProcessingService.AsynchronousProcessingService;
    className: string;
    method: typeof AsynchronousProcessingService.AsynchronousProcessingService.postAsynchronousProcessingServiceRcmsApi1Batch;
    methodName: string;
    auth: null;
    description: string;
} | {
    path: string;
    httpMethod: string;
    class: typeof ApiService.ApiService;
    className: string;
    method: typeof ApiService.ApiService.getApiServiceRcmsApi1Apis;
    methodName: string;
    auth: null;
    description: string;
})[];
//# sourceMappingURL=ApiInfo.d.ts.map