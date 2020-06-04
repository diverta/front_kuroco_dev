/**
 * Get FormData from object. This method is needed to upload
 * multipart form data to the REST API.
 * @param params Key value based object.
 */
export declare function getFormData(params: {
    [key: string]: any;
}): FormData;
