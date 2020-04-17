import { __assign } from "tslib";
import { APIApi } from './apis/APIApi';
import { AsynchronousProcessingApi } from './apis/AsynchronousProcessingApi';
import { AuthenticationApi } from './apis/AuthenticationApi';
import { CommentsApi } from './apis/CommentsApi';
import { FavoritesApi } from './apis/FavoritesApi';
import { FilesApi } from './apis/FilesApi';
import { InquiriesApi } from './apis/InquiriesApi';
import { MembersApi } from './apis/MembersApi';
import { TablesApi } from './apis/TablesApi';
import { TagsApi } from './apis/TagsApi';
import { TopicsApi } from './apis/TopicsApi';
export var AUTH_INFO = {
    'LOGIN': { classFile: AuthenticationApi, requestFnName: 'rcmsApi1AuthLoginPost' },
    'LOGOUT': { classFile: AuthenticationApi, requestFnName: 'rcmsApi1AuthLogoutPost' },
    'TOKEN': { classFile: AuthenticationApi, requestFnName: 'rcmsApi1AuthTokenPost' },
};
export var API_INFOS = (function () { return [
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
]
    .map(function (Clzz) {
    return {
        infos: Clzz.infos,
        className: Clzz.className,
    };
})
    .flat(1); })();
export var checkUrlMatchesFns = (function () {
    var isIncludesUrl = function (inputUrl, apiInfo) {
        if (!apiInfo) {
            return false;
        }
        var matchApiInfos = API_INFOS.filter(function (_a) {
            var className = _a.className;
            return className === apiInfo.classFile.className;
        });
        if (matchApiInfos.length === 0) {
            return false;
        }
        return matchApiInfos
            .map(function (_a) {
            var infos = _a.infos;
            return infos;
        })
            .flat()
            .some(function (_a) {
            var url = _a.url;
            return inputUrl.includes(url);
        });
    };
    return {
        Login: function (inputUrl) { return isIncludesUrl(inputUrl, AUTH_INFO.LOGIN); },
        Logout: function (inputUrl) { return isIncludesUrl(inputUrl, AUTH_INFO.LOGOUT); },
        Token: function (inputUrl) { return isIncludesUrl(inputUrl, AUTH_INFO.TOKEN); },
        _All: function (inputUrl) {
            return API_INFOS.map(function (_a) {
                var infos = _a.infos;
                return infos;
            })
                .flat()
                .some(function (_a) {
                var url = _a.url;
                return inputUrl.includes(url);
            });
        },
    };
})();
export var getInjectedInlineObj = function (className, methodName, injectValue) {
    var requestRequiredParamSamples = API_INFOS.filter(function (info) { return info.className === className; })
        .map(function (info) { return info.infos; })
        .flat(1)
        .filter(function (_a) {
        var requestMethodName = _a.requestMethodName, requestRequiredParamSample = _a.requestRequiredParamSample;
        return requestMethodName === methodName;
    })
        .map(function (_a) {
        var requestRequiredParamSample = _a.requestRequiredParamSample;
        return requestRequiredParamSample;
    });
    if (requestRequiredParamSamples.length === 0) {
        throw Error('no matched class & mthod.');
    }
    var sample = requestRequiredParamSamples[0];
    return Object.entries(sample).reduce(function (prev, _a) {
        var _b;
        var k = _a[0], v = _a[1];
        return (__assign(__assign({}, prev), (_b = {}, _b[k] = injectValue, _b)));
    }, {});
};
