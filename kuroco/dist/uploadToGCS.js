var Flow = require('./flow.js');
export function generateUploader(gcsHost, accessToken, chunkSize) {
    if (chunkSize === void 0) { chunkSize = 1024 * 1024 * 1024 * 5; }
    var target = getTarget(gcsHost);
    var headers = getHeaders(accessToken);
    var FlowClzz = window.Flow || Flow;
    var flow = new FlowClzz({
        chunkSize: chunkSize,
        target: target,
        headers: headers,
        generateUniqueIdentifier: generateUniqueIdentifier,
        changeRawDataBeforeSend: changeRawDataBeforeSend,
        flowAccessToken: accessToken,
        uploadMethod: 'PUT',
        testChunks: false,
        simultaneousUploads: 1,
        successStatuses: [200, 201, 202, 204]
    });
    flow.on('fileSuccess', handleOnSucceeded);
    function handleOnSucceeded(file) {
        console.log(file);
    }
    flow.uploadAsync = function () {
        return new Promise(function (res, rej) {
            flow.on('fileSuccess', function (file, message, chunk) {
                return res("files/temp/" + file.uniqueIdentifier + "__rcms_gcs_upload_chunk_number__" + chunk.offset);
            });
            flow.on('error', function () { return rej(); });
            flow.upload();
        });
    };
    return flow;
}
export function getTarget(uri) {
    return function (flowFile, flowChunk) {
        return uri + "/files/temp/" + flowFile.uniqueIdentifier + "__rcms_gcs_upload_chunk_number__" + flowChunk.offset;
    };
}
export function getHeaders(accessToken) {
    return function (flowFile, flowChunk) {
        var headers = {
            Authorization: 'Bearer ' + accessToken,
            'x-goog-meta-rcms_gcs_x_meta_chunk_number': flowChunk.offset,
            'x-goog-meta-rcms_gcs_x_meta_current_chunk_size': flowChunk.endByte - flowChunk.startByte,
            'x-goog-meta-rcms_gcs_x_meta_total_size': flowChunk.fileObj.size,
            'x-goog-meta-rcms_gcs_x_meta_identifier': flowChunk.fileObj.uniqueIdentifier,
            'x-goog-meta-rcms_gcs_x_meta_filename': encodeURI(flowChunk.fileObj.name),
            'x-goog-meta-rcms_gcs_x_meta_total_chunks': flowChunk.fileObj.chunks.length,
            'x-goog-acl': 'public-read',
            'Content-Type': flowChunk.bytes.type
        };
        return headers;
    };
}
export function generateUniqueIdentifier(file) {
    var relativePath = file.relativePath || file.webkitRelativePath || file.fileName || file.name;
    var time = new Date().getTime();
    return time + '_' + file.size + '_' + relativePath.replace(/[^0-9a-zA-Z_-]/gim, '');
}
export function changeRawDataBeforeSend(flowChunk, data) {
    var chunkData = flowChunk.bytes;
    var blob = new Blob([chunkData], { type: chunkData.type });
    return blob;
}
