import {
  APIApi,
  AsynchronousProcessingApi,
  AuthenticationApi,
  CommentsApi,
  FavoritesApi,
  FilesApi,
  InquiriesApi,
  MembersApi,
  TablesApi,
  TagsApi,
  TopicsApi,
} from 'kuroco';

const aPIApi = new APIApi();
const asynchronousProcessingApi = new AsynchronousProcessingApi();
const authenticationApi = new AuthenticationApi();
const commentsApi = new CommentsApi();
const favoritesApi = new FavoritesApi();
const filesApi = new FilesApi();
const inquiriesApi = new InquiriesApi();
const membersApi = new MembersApi();
const tablesApi = new TablesApi();
const tagsApi = new TagsApi();
const topicsApi = new TopicsApi();

export const API_METHOD_LIST = {
  APIApi_rcmsApi1ApisGet: aPIApi.rcmsApi1ApisGet,
  APIApi_rcmsApi1OpenapiGet: aPIApi.rcmsApi1OpenapiGet,
  APIApi_rcmsApi1RequestGet: aPIApi.rcmsApi1RequestGet,
  AsynchronousProcessingApi_rcmsApi1BatchPost:
    asynchronousProcessingApi.rcmsApi1BatchPost,
  AuthenticationApi_rcmsApi1AuthLoginPost:
    authenticationApi.rcmsApi1AuthLoginPost,
  AuthenticationApi_rcmsApi1AuthLogoutPost:
    authenticationApi.rcmsApi1AuthLogoutPost,
  AuthenticationApi_rcmsApi1AuthTokenPost:
    authenticationApi.rcmsApi1AuthTokenPost,
  AuthenticationApi_rcmsApi1MeProfileGet:
    authenticationApi.rcmsApi1MeProfileGet,
  AuthenticationApi_rcmsApi1MePwReminderPost:
    authenticationApi.rcmsApi1MePwReminderPost,
  AuthenticationApi_rcmsApi1MePwResetPost:
    authenticationApi.rcmsApi1MePwResetPost,
  CommentsApi_rcmsApi1TopicsCommentsDeletePost:
    commentsApi.rcmsApi1TopicsCommentsDeletePost,
  CommentsApi_rcmsApi1TopicsCommentsGet: commentsApi.rcmsApi1TopicsCommentsGet,
  CommentsApi_rcmsApi1TopicsCommentsInsertPost:
    commentsApi.rcmsApi1TopicsCommentsInsertPost,
  CommentsApi_rcmsApi1TopicsCommentsUpdatePost:
    commentsApi.rcmsApi1TopicsCommentsUpdatePost,
  FavoritesApi_rcmsApi1FavoritesDeletePost:
    favoritesApi.rcmsApi1FavoritesDeletePost,
  FavoritesApi_rcmsApi1FavoritesGet: favoritesApi.rcmsApi1FavoritesGet,
  FavoritesApi_rcmsApi1FavoritesInsertPost:
    favoritesApi.rcmsApi1FavoritesInsertPost,
  FilesApi_rcmsApi1FilesUploadPost: filesApi.rcmsApi1FilesUploadPost,
  InquiriesApi_rcmsApi1Inquiry1MessagesGet:
    inquiriesApi.rcmsApi1Inquiry1MessagesGet,
  InquiriesApi_rcmsApi1Inquiry1MessagesSendPost:
    inquiriesApi.rcmsApi1Inquiry1MessagesSendPost,
  InquiriesApi_rcmsApi1Inquiry1MessagesUpdatePost:
    inquiriesApi.rcmsApi1Inquiry1MessagesUpdatePost,
  InquiriesApi_rcmsApi1InquiryFormsGet: inquiriesApi.rcmsApi1InquiryFormsGet,
  InquiriesApi_rcmsApi1InquiryFormsInquiryIdGet:
    inquiriesApi.rcmsApi1InquiryFormsInquiryIdGet,
  MembersApi_rcmsApi1MeDeletePost: membersApi.rcmsApi1MeDeletePost,
  MembersApi_rcmsApi1MeUpdatePost: membersApi.rcmsApi1MeUpdatePost,
  MembersApi_rcmsApi1MembersDeletePost: membersApi.rcmsApi1MembersDeletePost,
  MembersApi_rcmsApi1MembersGet: membersApi.rcmsApi1MembersGet,
  MembersApi_rcmsApi1MembersInsertPost: membersApi.rcmsApi1MembersInsertPost,
  MembersApi_rcmsApi1MembersMemberIdGet: membersApi.rcmsApi1MembersMemberIdGet,
  MembersApi_rcmsApi1MembersUpdatePost: membersApi.rcmsApi1MembersUpdatePost,
  TablesApi_rcmsApi1FirebaseMetaGet: tablesApi.rcmsApi1FirebaseMetaGet,
  TablesApi_rcmsApi1TablesChecksheetGet: tablesApi.rcmsApi1TablesChecksheetGet,
  TablesApi_rcmsApi1TablesDateGet: tablesApi.rcmsApi1TablesDateGet,
  TablesApi_rcmsApi1TablesInvalidGet: tablesApi.rcmsApi1TablesInvalidGet,
  TablesApi_rcmsApi1TablesMatrixGet: tablesApi.rcmsApi1TablesMatrixGet,
  TablesApi_rcmsApi1TablesSimpleGet: tablesApi.rcmsApi1TablesSimpleGet,
  TagsApi_rcmsApi1TagsDeleteTagIdPost: tagsApi.rcmsApi1TagsDeleteTagIdPost,
  TagsApi_rcmsApi1TagsGet: tagsApi.rcmsApi1TagsGet,
  TagsApi_rcmsApi1TagsInsertPost: tagsApi.rcmsApi1TagsInsertPost,
  TopicsApi_rcmsApi1Topics1DeleteTopicsIdPost:
    topicsApi.rcmsApi1Topics1DeleteTopicsIdPost,
  TopicsApi_rcmsApi1Topics1Get: topicsApi.rcmsApi1Topics1Get,
  TopicsApi_rcmsApi1Topics1InsertPost: topicsApi.rcmsApi1Topics1InsertPost,
  TopicsApi_rcmsApi1Topics1TopicsIdGet: topicsApi.rcmsApi1Topics1TopicsIdGet,
  TopicsApi_rcmsApi1Topics1UpdateTopicsIdPost:
    topicsApi.rcmsApi1Topics1UpdateTopicsIdPost,
};
