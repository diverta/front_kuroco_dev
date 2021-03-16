import * as AuthenticationService from '../services/AuthenticationService';
import * as ContentService from '../services/ContentService';
import * as MembersService from '../services/MembersService';
import * as ActivityService from '../services/ActivityService';
import * as FavoritesService from '../services/FavoritesService';
import * as InquiriesService from '../services/InquiriesService';
import * as EcService from '../services/EcService';
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
    class: typeof ContentService.ContentService;
    className: string;
    method: typeof ContentService.ContentService.getContentServiceRcmsApi1Topics1TopicsId;
    methodName: string;
    auth: null;
    description: string;
} | {
    path: string;
    httpMethod: string;
    class: typeof ContentService.ContentService;
    className: string;
    method: typeof ContentService.ContentService.getContentServiceRcmsApi1Topics1;
    methodName: string;
    auth: null;
    description: string;
} | {
    path: string;
    httpMethod: string;
    class: typeof ContentService.ContentService;
    className: string;
    method: typeof ContentService.ContentService.postContentServiceRcmsApi1Topics1Insert;
    methodName: string;
    auth: null;
    description: string;
} | {
    path: string;
    httpMethod: string;
    class: typeof ContentService.ContentService;
    className: string;
    method: typeof ContentService.ContentService.postContentServiceRcmsApi1TopicsMultipleInsert;
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
    method: typeof MembersService.MembersService.getMembersServiceRcmsApi1MemberCustomSearch;
    methodName: string;
    auth: null;
    description: string;
} | {
    path: string;
    httpMethod: string;
    class: typeof MembersService.MembersService;
    className: string;
    method: typeof MembersService.MembersService.getMembersServiceRcmsApi1MemberCustomSearchCustomSearchId;
    methodName: string;
    auth: null;
    description: string;
} | {
    path: string;
    httpMethod: string;
    class: typeof ActivityService.ActivityService;
    className: string;
    method: typeof ActivityService.ActivityService.getActivityServiceRcmsApi1TopicsComments;
    methodName: string;
    auth: null;
    description: string;
} | {
    path: string;
    httpMethod: string;
    class: typeof ActivityService.ActivityService;
    className: string;
    method: typeof ActivityService.ActivityService.postActivityServiceRcmsApi1TopicsCommentsInsert;
    methodName: string;
    auth: null;
    description: string;
} | {
    path: string;
    httpMethod: string;
    class: typeof ActivityService.ActivityService;
    className: string;
    method: typeof ActivityService.ActivityService.postActivityServiceRcmsApi1TopicsCommentsUpdateCommentId;
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
    class: typeof InquiriesService.InquiriesService;
    className: string;
    method: typeof InquiriesService.InquiriesService.getInquiriesServiceRcmsApi1InquiryFormsInquiryId;
    methodName: string;
    auth: null;
    description: string;
} | {
    path: string;
    httpMethod: string;
    class: typeof InquiriesService.InquiriesService;
    className: string;
    method: typeof InquiriesService.InquiriesService.postInquiriesServiceRcmsApi1Inquiry1MessagesSend;
    methodName: string;
    auth: null;
    description: string;
} | {
    path: string;
    httpMethod: string;
    class: typeof InquiriesService.InquiriesService;
    className: string;
    method: typeof InquiriesService.InquiriesService.postInquiriesServiceRcmsApi1Inquiry1MessagesUpdateInquiryBnId;
    methodName: string;
    auth: null;
    description: string;
} | {
    path: string;
    httpMethod: string;
    class: typeof InquiriesService.InquiriesService;
    className: string;
    method: typeof InquiriesService.InquiriesService.postInquiriesServiceRcmsApi1InquiryFormsInsert;
    methodName: string;
    auth: null;
    description: string;
} | {
    path: string;
    httpMethod: string;
    class: typeof InquiriesService.InquiriesService;
    className: string;
    method: typeof InquiriesService.InquiriesService.postInquiriesServiceRcmsApi1InquiryFormsUpdateInquiryId;
    methodName: string;
    auth: null;
    description: string;
} | {
    path: string;
    httpMethod: string;
    class: typeof InquiriesService.InquiriesService;
    className: string;
    method: typeof InquiriesService.InquiriesService.postInquiriesServiceRcmsApi1Form7Send;
    methodName: string;
    auth: null;
    description: string;
} | {
    path: string;
    httpMethod: string;
    class: typeof EcService.EcService;
    className: string;
    method: typeof EcService.EcService.getEcServiceRcmsApi1EcProducts;
    methodName: string;
    auth: null;
    description: string;
} | {
    path: string;
    httpMethod: string;
    class: typeof EcService.EcService;
    className: string;
    method: typeof EcService.EcService.getEcServiceRcmsApi1EcProductsProductId;
    methodName: string;
    auth: null;
    description: string;
} | {
    path: string;
    httpMethod: string;
    class: typeof EcService.EcService;
    className: string;
    method: typeof EcService.EcService.getEcServiceRcmsApi1EcCartEcCartId;
    methodName: string;
    auth: null;
    description: string;
} | {
    path: string;
    httpMethod: string;
    class: typeof EcService.EcService;
    className: string;
    method: typeof EcService.EcService.postEcServiceRcmsApi1EcCartAdd;
    methodName: string;
    auth: null;
    description: string;
} | {
    path: string;
    httpMethod: string;
    class: typeof EcService.EcService;
    className: string;
    method: typeof EcService.EcService.postEcServiceRcmsApi1EcOrderTotal;
    methodName: string;
    auth: null;
    description: string;
} | {
    path: string;
    httpMethod: string;
    class: typeof EcService.EcService;
    className: string;
    method: typeof EcService.EcService.getEcServiceRcmsApi1EcPayments;
    methodName: string;
    auth: null;
    description: string;
} | {
    path: string;
    httpMethod: string;
    class: typeof EcService.EcService;
    className: string;
    method: typeof EcService.EcService.getEcServiceRcmsApi1EcPaymentsEcPaymentId;
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
    method: typeof TablesService.TablesService.getTablesServiceRcmsApi1Tables1;
    methodName: string;
    auth: null;
    description: string;
} | {
    path: string;
    httpMethod: string;
    class: typeof AsynchronousProcessingService.AsynchronousProcessingService;
    className: string;
    method: typeof AsynchronousProcessingService.AsynchronousProcessingService.getAsynchronousProcessingServiceRcmsApi1CheckBatch;
    methodName: string;
    auth: null;
    description: string;
} | {
    path: string;
    httpMethod: string;
    class: typeof ApiService.ApiService;
    className: string;
    method: typeof ApiService.ApiService.postApiServiceRcmsApi1Bulk;
    methodName: string;
    auth: null;
    description: string;
})[];
//# sourceMappingURL=ApiInfo.d.ts.map