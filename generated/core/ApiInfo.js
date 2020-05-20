/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */
import { __spreadArrays } from "tslib";
import { AuthenticationService } from '../services/AuthenticationService';
import { infos as AuthenticationServiceInfo } from '../services/AuthenticationService';
import { infos as TopicsServiceInfo } from '../services/TopicsService';
import { infos as MembersServiceInfo } from '../services/MembersService';
import { infos as CommentsServiceInfo } from '../services/CommentsService';
import { infos as FavoritesServiceInfo } from '../services/FavoritesService';
import { infos as InquiriesServiceInfo } from '../services/InquiriesService';
import { infos as FilesServiceInfo } from '../services/FilesService';
import { infos as TagsServiceInfo } from '../services/TagsService';
import { infos as TablesServiceInfo } from '../services/TablesService';
import { infos as AsynchronousProcessingServiceInfo } from '../services/AsynchronousProcessingService';
import { infos as ApiServiceInfo } from '../services/ApiService';
import { infos as ServiceInfo } from '../services/Service';
export var ApiInfos = __spreadArrays(AuthenticationServiceInfo, TopicsServiceInfo, MembersServiceInfo, CommentsServiceInfo, FavoritesServiceInfo, InquiriesServiceInfo, FilesServiceInfo, TagsServiceInfo, TablesServiceInfo, AsynchronousProcessingServiceInfo, ApiServiceInfo, ServiceInfo);
export var SpecialOperationInfo = {
    login: {
        path: '/rcms-api/1/auth/login',
        httpMethod: 'AuthenticationService.postAuthenticationServiceRcmsApi1AuthLogin',
        class: AuthenticationService,
        className: 'AuthenticationService',
        method: AuthenticationService.postAuthenticationServiceRcmsApi1AuthLogin,
        methodName: 'postAuthenticationServiceRcmsApi1AuthLogin',
        auth: 'LOGIN',
    },
    logout: {
        path: '/rcms-api/1/auth/logout',
        httpMethod: 'AuthenticationService.postAuthenticationServiceRcmsApi1AuthLogout',
        class: AuthenticationService,
        className: 'AuthenticationService',
        method: AuthenticationService.postAuthenticationServiceRcmsApi1AuthLogout,
        methodName: 'postAuthenticationServiceRcmsApi1AuthLogout',
        auth: 'LOGOUT',
    },
    token: {
        path: '/rcms-api/1/auth/token',
        httpMethod: 'AuthenticationService.postAuthenticationServiceRcmsApi1AuthToken',
        class: AuthenticationService,
        className: 'AuthenticationService',
        method: AuthenticationService.postAuthenticationServiceRcmsApi1AuthToken,
        methodName: 'postAuthenticationServiceRcmsApi1AuthToken',
        auth: 'TOKEN',
    },
};
