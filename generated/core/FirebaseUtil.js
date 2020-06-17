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
Object.defineProperty(exports, "__esModule", { value: true });
const firebase = __importStar(require("firebase/app"));
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
exports.default = firebase.initializeApp(firebaseConfig);
