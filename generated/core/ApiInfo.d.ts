import { AuthenticationService } from '../services/AuthenticationService';
import { TopicsService } from '../services/TopicsService';
import { MembersService } from '../services/MembersService';
import { CommentsService } from '../services/CommentsService';
import { FavoritesService } from '../services/FavoritesService';
import { InquiriesService } from '../services/InquiriesService';
import { FilesService } from '../services/FilesService';
import { TagsService } from '../services/TagsService';
import { TablesService } from '../services/TablesService';
import { AsynchronousProcessingService } from '../services/AsynchronousProcessingService';
import { ApiService } from '../services/ApiService';
export declare const ApiInfos: ({
    path: string;
    httpMethod: string;
    class: typeof AuthenticationService;
    className: string;
    method: typeof AuthenticationService.postAuthenticationServiceRcmsApi1AuthLogin;
    methodName: string;
    auth: string;
    description: string;
} | {
    path: string;
    httpMethod: string;
    class: typeof AuthenticationService;
    className: string;
    method: typeof AuthenticationService.postAuthenticationServiceRcmsApi1MePwReminder;
    methodName: string;
    auth: null;
    description: string;
} | {
    path: string;
    httpMethod: string;
    class: typeof AuthenticationService;
    className: string;
    method: typeof AuthenticationService.postAuthenticationServiceRcmsApi1MePwReset;
    methodName: string;
    auth: null;
    description: string;
} | {
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
} | {
    path: string;
    httpMethod: string;
    class: typeof TopicsService;
    className: string;
    method: typeof TopicsService.postTopicsServiceRcmsApi1TopicsMultipleInsert;
    methodName: string;
    auth: null;
    description: string;
} | {
    path: string;
    httpMethod: string;
    class: typeof MembersService;
    className: string;
    method: typeof MembersService.getMembersServiceRcmsApi1Members;
    methodName: string;
    auth: null;
    description: string;
} | {
    path: string;
    httpMethod: string;
    class: typeof MembersService;
    className: string;
    method: typeof MembersService.getMembersServiceRcmsApi1MembersMemberId;
    methodName: string;
    auth: null;
    description: string;
} | {
    path: string;
    httpMethod: string;
    class: typeof MembersService;
    className: string;
    method: typeof MembersService.postMembersServiceRcmsApi1MembersInsert;
    methodName: string;
    auth: null;
    description: string;
} | {
    path: string;
    httpMethod: string;
    class: typeof MembersService;
    className: string;
    method: typeof MembersService.postMembersServiceRcmsApi1MembersUpdate;
    methodName: string;
    auth: null;
    description: string;
} | {
    path: string;
    httpMethod: string;
    class: typeof MembersService;
    className: string;
    method: typeof MembersService.postMembersServiceRcmsApi1MeUpdate;
    methodName: string;
    auth: null;
    description: string;
} | {
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
} | {
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
} | {
    path: string;
    httpMethod: string;
    class: typeof InquiriesService;
    className: string;
    method: typeof InquiriesService.getInquiriesServiceRcmsApi1InquiryForms;
    methodName: string;
    auth: null;
    description: string;
} | {
    path: string;
    httpMethod: string;
    class: typeof FilesService;
    className: string;
    method: typeof FilesService.postFilesServiceRcmsApi1FilesUpload;
    methodName: string;
    auth: null;
    description: string;
} | {
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
} | {
    path: string;
    httpMethod: string;
    class: typeof TablesService;
    className: string;
    method: typeof TablesService.getTablesServiceRcmsApi1TablesSimple;
    methodName: string;
    auth: null;
    description: string;
} | {
    path: string;
    httpMethod: string;
    class: typeof AsynchronousProcessingService;
    className: string;
    method: typeof AsynchronousProcessingService.postAsynchronousProcessingServiceRcmsApi1Batch;
    methodName: string;
    auth: null;
    description: string;
} | {
    path: string;
    httpMethod: string;
    class: typeof ApiService;
    className: string;
    method: typeof ApiService.getApiServiceRcmsApi1Apis;
    methodName: string;
    auth: null;
    description: string;
})[];
export declare const SpecialOperationInfo: {
    login: {
        path: string;
        httpMethod: string;
        class: typeof AuthenticationService;
        className: string;
        method: typeof AuthenticationService.postAuthenticationServiceRcmsApi1AuthLogin;
        methodName: string;
        auth: string;
    };
    logout: {
        path: string;
        httpMethod: string;
        class: typeof AuthenticationService;
        className: string;
        method: typeof AuthenticationService.postAuthenticationServiceRcmsApi1AuthLogout;
        methodName: string;
        auth: string;
    };
    token: {
        path: string;
        httpMethod: string;
        class: typeof AuthenticationService;
        className: string;
        method: typeof AuthenticationService.postAuthenticationServiceRcmsApi1AuthToken;
        methodName: string;
        auth: string;
    };
};
