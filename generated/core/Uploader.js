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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploaderFactory = void 0;
const firebase = __importStar(require("firebase"));
const AuthenticationService_1 = require("../services/AuthenticationService");
const firebaseConfig = {
    'apiKey': 'AIzaSyAoOPeU11WN8_LjVI1DS1MI4Aa2kZUY_Jg',
    'authDomain': 'kuroco-dev.firebaseapp.com',
    'databaseURL': 'https://kuroco-dev.firebaseio.com',
    'projectId': 'kuroco-dev',
    'storageBucket': 'kuroco-dev.appspot.com',
    'messagingSenderId': '234171414483',
    'appId': '1:234171414483:web:71ae2d6c90c27e3963e126',
    'measurementId': 'G-KLPKJ07DD9',
};
/**
 * Create Uploader.
 */
class UploaderFactory {
    static create(params) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.storage) {
                const { token } = yield AuthenticationService_1.AuthenticationService.postAuthenticationServiceRcmsApi1FirebaseToken(params);
                const app = firebase.initializeApp(firebaseConfig);
                yield app.auth().signInWithCustomToken(token);
                this.storage = firebase.storage();
            }
            return new FirebaseStorageUploader(this.storage);
        });
    }
}
exports.UploaderFactory = UploaderFactory;
/**
 * Uploader using firebase storage.
 */
class UploaderBase {
    constructor() {
        /** the path of the directory where to the uploading target. */
        this._dirPath = `/files/temp`; // default
    }
    set dirPath(dirPath) {
        this._dirPath = dirPath;
    }
    getMetas(file, index) {
        const fileName = this.generateUniqueIdentifier(file, index);
        const dirPath = this._dirPath;
        const path = `${dirPath}/${fileName}`.slice(1);
        return {
            fileName,
            dirPath,
            path,
            contentType: file.type,
        };
    }
    generateUniqueIdentifier(file, index) {
        let relativePath = file.relativePath || file.webkitRelativePath || file.fileName || file.name;
        let time = new Date().getTime();
        return `${time}_${relativePath.replace(/[^0-9a-zA-Z_-]/gim, '')}_${index}`;
    }
}
/**
 * Uploader using firebase storage.
 */
class FirebaseStorageUploader extends UploaderBase {
    constructor(firebaseStorage) {
        super();
        this.firebaseStorage = firebaseStorage;
    }
    upload(file, index = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const meta = this.getMetas(file, index);
                const ref = this.firebaseStorage.ref(meta.dirPath);
                const snapshot = yield ref.child(`/${meta.fileName}`).put(file, {
                    contentType: meta.contentType,
                });
                const url = yield snapshot.ref.getDownloadURL();
                return Object.assign({ url, file_id: meta.path }, meta);
            }
            catch (e) {
                console.error(e);
                throw e;
            }
        });
    }
}
