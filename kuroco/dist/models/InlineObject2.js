/* tslint:disable */
/* eslint-disable */
/**
 * Test
 * test
 *
 * The version of the OpenAPI document: 1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
export var InlineObject2Description = "{\n    /**\n     * Token\n     * @type {string}\n     */\n    loginId: string;\n    /**\n     * Current Login Password\n     * @type {string}\n     */\n    currentPassword: string;\n    /**\n     * New Password\n     * @type {string}\n     */\n    newPassword: string;\n}";
export function InlineObject2FromJSON(json) {
    return InlineObject2FromJSONTyped(json, false);
}
export function InlineObject2FromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'loginId': json['login_id'],
        'currentPassword': json['current_password'],
        'newPassword': json['new_password'],
    };
}
export function InlineObject2ToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'login_id': value.loginId,
        'current_password': value.currentPassword,
        'new_password': value.newPassword,
    };
}
