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
import { exists } from '../runtime';
export var RcmsApi1Inquiry1MessagesSendExt09Description = "{\n    /**\n     * * 1 => opt1 * 2 => opt2\n     * @type {string}\n     */\n    options?: RcmsApi1Inquiry1MessagesSendExt09OptionsEnum;\n    /**\n     * \n     * @type {string}\n     */\n    text?: string;\n}";
export function RcmsApi1Inquiry1MessagesSendExt09FromJSON(json) {
    return RcmsApi1Inquiry1MessagesSendExt09FromJSONTyped(json, false);
}
export function RcmsApi1Inquiry1MessagesSendExt09FromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'options': !exists(json, 'options') ? undefined : json['options'],
        'text': !exists(json, 'text') ? undefined : json['text'],
    };
}
export function RcmsApi1Inquiry1MessagesSendExt09ToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'options': value.options,
        'text': value.text,
    };
}
/**
* @export
* @enum {string}
*/
export var RcmsApi1Inquiry1MessagesSendExt09OptionsEnum;
(function (RcmsApi1Inquiry1MessagesSendExt09OptionsEnum) {
    RcmsApi1Inquiry1MessagesSendExt09OptionsEnum["_1"] = "1";
    RcmsApi1Inquiry1MessagesSendExt09OptionsEnum["_2"] = "2";
})(RcmsApi1Inquiry1MessagesSendExt09OptionsEnum || (RcmsApi1Inquiry1MessagesSendExt09OptionsEnum = {}));
