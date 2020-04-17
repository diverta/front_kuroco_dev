export * from './APIApi';
export * from './AsynchronousProcessingApi';
export * from './AuthenticationApi';
export * from './CommentsApi';
export * from './FavoritesApi';
export * from './FilesApi';
export * from './InquiriesApi';
export * from './MembersApi';
export * from './TablesApi';
export * from './TagsApi';
export * from './TopicsApi';
import { APIApi } from './APIApi';
import { AsynchronousProcessingApi } from './AsynchronousProcessingApi';
import { AuthenticationApi } from './AuthenticationApi';
import { CommentsApi } from './CommentsApi';
import { FavoritesApi } from './FavoritesApi';
import { FilesApi } from './FilesApi';
import { InquiriesApi } from './InquiriesApi';
import { MembersApi } from './MembersApi';
import { TablesApi } from './TablesApi';
import { TagsApi } from './TagsApi';
import { TopicsApi } from './TopicsApi';
var infos = [
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
].map(function (Clzz) { return Clzz.infos; })
    .flat(1);
export function getApiRequestInfoByrequestMethodName(requestMethodName) {
    return infos.filter(function (info) { return info.requestMethodName === requestMethodName; })[0];
}
