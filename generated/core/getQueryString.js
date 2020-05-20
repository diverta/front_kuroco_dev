/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */
/**
 * Get query string from query parameters object. This method also
 * supports multi-value items by creating a key for each item.
 * @param params Key value based object.
 */
export function getQueryString(params) {
    var qs = [];
    var _loop_1 = function (key) {
        if (typeof params[key] !== 'undefined') {
            var value = params[key];
            if (value !== undefined && value !== null) {
                if (Array.isArray(value)) {
                    value.forEach(function (value) {
                        qs.push(encodeURIComponent(key) + "=" + encodeURIComponent(String(value)));
                    });
                }
                else {
                    qs.push(encodeURIComponent(key) + "=" + encodeURIComponent(String(value)));
                }
            }
        }
    };
    for (var key in params) {
        _loop_1(key);
    }
    if (qs.length > 0) {
        return "?" + qs.join('&');
    }
    return '';
}
