"use strict";
// @ts-nocheck
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
const Flow = require('./flow.js');
function generateUploader(gcsHost, accessToken, chunkSize = 1024 * 1024 * 1024 * 5) {
    const target = getTarget(gcsHost);
    const headers = getHeaders(accessToken);
    const FlowClzz = window.Flow || Flow;
    const flow = new FlowClzz({
        chunkSize,
        target,
        headers,
        generateUniqueIdentifier,
        changeRawDataBeforeSend,
        flowAccessToken: accessToken,
        uploadMethod: 'PUT',
        testChunks: false,
        simultaneousUploads: 1,
        successStatuses: [200, 201, 202, 204],
    });
    flow.on('fileSuccess', handleOnSucceeded);
    function handleOnSucceeded(file) {
        console.log(file);
    }
    flow.uploadAsync = () => new Promise((res, rej) => {
        flow.on('fileSuccess', (file, message, chunk) => res(`files/temp/${file.uniqueIdentifier}__rcms_gcs_upload_chunk_number__${chunk.offset}`));
        flow.on('error', () => rej());
        flow.upload();
    });
    return flow;
}
exports.generateUploader = generateUploader;
function getTarget(uri) {
    return (flowFile, flowChunk) => `${uri}/files/temp/${flowFile.uniqueIdentifier}__rcms_gcs_upload_chunk_number__${flowChunk.offset}`;
}
exports.getTarget = getTarget;
function getHeaders(accessToken) {
    return (flowFile, flowChunk) => {
        let headers = {
            Authorization: 'Bearer ' + accessToken,
            'x-goog-meta-rcms_gcs_x_meta_chunk_number': flowChunk.offset,
            'x-goog-meta-rcms_gcs_x_meta_current_chunk_size': flowChunk.endByte - flowChunk.startByte,
            'x-goog-meta-rcms_gcs_x_meta_total_size': flowChunk.fileObj.size,
            'x-goog-meta-rcms_gcs_x_meta_identifier': flowChunk.fileObj.uniqueIdentifier,
            'x-goog-meta-rcms_gcs_x_meta_filename': encodeURI(flowChunk.fileObj.name),
            'x-goog-meta-rcms_gcs_x_meta_total_chunks': flowChunk.fileObj.chunks.length,
            'x-goog-acl': 'public-read',
            'Content-Type': flowChunk.bytes.type,
        };
        return headers;
    };
}
exports.getHeaders = getHeaders;
function generateUniqueIdentifier(file) {
    let relativePath = file.relativePath || file.webkitRelativePath || file.fileName || file.name;
    let time = new Date().getTime();
    return time + '_' + file.size + '_' + relativePath.replace(/[^0-9a-zA-Z_-]/gim, '');
}
exports.generateUniqueIdentifier = generateUniqueIdentifier;
function changeRawDataBeforeSend(flowChunk, data) {
    let chunkData = flowChunk.bytes;
    let blob = new Blob([chunkData], { type: chunkData.type });
    return blob;
}
exports.changeRawDataBeforeSend = changeRawDataBeforeSend;
