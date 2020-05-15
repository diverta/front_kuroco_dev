/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */

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
import { Service } from '../services/Service';

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

export const ApiInfos = [
    ...AuthenticationServiceInfo,
    ...TopicsServiceInfo,
    ...MembersServiceInfo,
    ...CommentsServiceInfo,
    ...FavoritesServiceInfo,
    ...InquiriesServiceInfo,
    ...FilesServiceInfo,
    ...TagsServiceInfo,
    ...TablesServiceInfo,
    ...AsynchronousProcessingServiceInfo,
    ...ApiServiceInfo,
    ...ServiceInfo,
];

export const SpecialOperationInfo = {
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
}