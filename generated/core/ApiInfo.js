"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiInfos = void 0;
const AuthenticationService = __importStar(require("../services/AuthenticationService"));
const TopicsService = __importStar(require("../services/TopicsService"));
const MembersService = __importStar(require("../services/MembersService"));
const CommentsService = __importStar(require("../services/CommentsService"));
const FavoritesService = __importStar(require("../services/FavoritesService"));
const InquiriesService = __importStar(require("../services/InquiriesService"));
const EcService = __importStar(require("../services/EcService"));
const FilesService = __importStar(require("../services/FilesService"));
const TagsService = __importStar(require("../services/TagsService"));
const TablesService = __importStar(require("../services/TablesService"));
const ApiService = __importStar(require("../services/ApiService"));
exports.ApiInfos = [
    ...AuthenticationService.infos,
    ...TopicsService.infos,
    ...MembersService.infos,
    ...CommentsService.infos,
    ...FavoritesService.infos,
    ...InquiriesService.infos,
    ...EcService.infos,
    ...FilesService.infos,
    ...TagsService.infos,
    ...TablesService.infos,
    ...ApiService.infos,
];
