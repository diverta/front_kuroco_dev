"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */
Object.defineProperty(exports, "__esModule", { value: true });
const AuthenticationService_1 = require("../services/AuthenticationService");
const AuthenticationService_2 = require("../services/AuthenticationService");
const TopicsService_1 = require("../services/TopicsService");
const MembersService_1 = require("../services/MembersService");
const CommentsService_1 = require("../services/CommentsService");
const FavoritesService_1 = require("../services/FavoritesService");
const InquiriesService_1 = require("../services/InquiriesService");
const FilesService_1 = require("../services/FilesService");
const TagsService_1 = require("../services/TagsService");
const TablesService_1 = require("../services/TablesService");
const AsynchronousProcessingService_1 = require("../services/AsynchronousProcessingService");
const ApiService_1 = require("../services/ApiService");
exports.ApiInfos = [
    ...AuthenticationService_2.infos,
    ...TopicsService_1.infos,
    ...MembersService_1.infos,
    ...CommentsService_1.infos,
    ...FavoritesService_1.infos,
    ...InquiriesService_1.infos,
    ...FilesService_1.infos,
    ...TagsService_1.infos,
    ...TablesService_1.infos,
    ...AsynchronousProcessingService_1.infos,
    ...ApiService_1.infos,
];
exports.SpecialOperationInfo = {
    login: {
        path: '/rcms-api/1/auth/login',
        httpMethod: 'AuthenticationService.postAuthenticationServiceRcmsApi1AuthLogin',
        class: AuthenticationService_1.AuthenticationService,
        className: 'AuthenticationService',
        method: AuthenticationService_1.AuthenticationService.postAuthenticationServiceRcmsApi1AuthLogin,
        methodName: 'postAuthenticationServiceRcmsApi1AuthLogin',
        auth: 'LOGIN',
    },
    logout: {
        path: '/rcms-api/1/auth/logout',
        httpMethod: 'AuthenticationService.postAuthenticationServiceRcmsApi1AuthLogout',
        class: AuthenticationService_1.AuthenticationService,
        className: 'AuthenticationService',
        method: AuthenticationService_1.AuthenticationService.postAuthenticationServiceRcmsApi1AuthLogout,
        methodName: 'postAuthenticationServiceRcmsApi1AuthLogout',
        auth: 'LOGOUT',
    },
    token: {
        path: '/rcms-api/1/auth/token',
        httpMethod: 'AuthenticationService.postAuthenticationServiceRcmsApi1AuthToken',
        class: AuthenticationService_1.AuthenticationService,
        className: 'AuthenticationService',
        method: AuthenticationService_1.AuthenticationService.postAuthenticationServiceRcmsApi1AuthToken,
        methodName: 'postAuthenticationServiceRcmsApi1AuthToken',
        auth: 'TOKEN',
    },
};
