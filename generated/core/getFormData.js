/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */
/**
 * Get FormData from object. This method is needed to upload
 * multipart form data to the REST API.
 * @param params Key value based object.
 */
export function getFormData(params) {
    var formData = new FormData();
    for (var key in params) {
        if (typeof params[key] !== 'undefined') {
            var value = params[key];
            if (value !== undefined && value !== null) {
                formData.append(key, value);
            }
        }
    }
    return formData;
}
