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
export var InlineObject17Description = "{\n    /**\n     * Name\n     * @type {string}\n     */\n    name?: string;\n    /**\n     * E-mail\n     * @type {string}\n     */\n    from_mail?: string;\n    /**\n     * Message\n     * @type {string}\n     */\n    body?: string;\n    /**\n     * * 1 => Category1 * 3 => Category2 * 4 => Category3\n     * @type {number}\n     */\n    inquiry_category_id?: InlineObject17InquiryCategoryIdEnum;\n    /**\n     * RequiredText\n     * @type {string}\n     */\n    ext_01?: string;\n    /**\n     * LongText\n     * @type {string}\n     */\n    ext_02?: string;\n    /**\n     * Radio * 1 => radio1 * 2 => radio2 * 3 => radio3\n     * @type {object | string}\n     */\n    ext_03?: object | string;\n    /**\n     * RequiredSelect * 1 => select1 * 2 => select2 * 3 => select3\n     * @type {object | string}\n     */\n    ext_04?: object | string;\n    /**\n     * Checkbox * 1 => check1 * 2 => check2 * 3 => check3\n     * @type {Array<object | string>}\n     */\n    ext_05?: Array<object | string>;\n    /**\n     * DateTime\n     * @type {string | object}\n     */\n    ext_06?: string | object;\n    /**\n     * \n     * @type {object}\n     */\n    ext_07?: object;\n    /**\n     * \n     * @type {RcmsApi1Topics1InsertExtCol05}\n     */\n    ext_08?: RcmsApi1Topics1InsertExtCol05;\n    /**\n     * \n     * @type {RcmsApi1Topics1InsertExtJsn12}\n     */\n    ext_09?: RcmsApi1Topics1InsertExtJsn12;\n    /**\n     * Date\n     * @type {Date | object}\n     */\n    ext_10?: Date | object;\n    /**\n     * /label/send_validate\n     * @type {boolean}\n     */\n    validate_only?: boolean;\n}";
export function InlineObject17FromJSON(json) {
    return InlineObject17FromJSONTyped(json, false);
}
export function InlineObject17FromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'name': !exists(json, 'name') ? undefined : json['name'],
        'from_mail': !exists(json, 'from_mail') ? undefined : json['from_mail'],
        'body': !exists(json, 'body') ? undefined : json['body'],
        'inquiry_category_id': !exists(json, 'inquiry_category_id') ? undefined : json['inquiry_category_id'],
        'ext_01': !exists(json, 'ext_01') ? undefined : json['ext_01'],
        'ext_02': !exists(json, 'ext_02') ? undefined : json['ext_02'],
        'ext_03': !exists(json, 'ext_03') ? undefined : json['ext_03'],
        'ext_04': !exists(json, 'ext_04') ? undefined : json['ext_04'],
        'ext_05': !exists(json, 'ext_05') ? undefined : json['ext_05'],
        'ext_06': !exists(json, 'ext_06') ? undefined : json['ext_06'],
        'ext_07': !exists(json, 'ext_07') ? undefined : json['ext_07'],
        'ext_08': !exists(json, 'ext_08') ? undefined : json['ext_08'],
        'ext_09': !exists(json, 'ext_09') ? undefined : json['ext_09'],
        'ext_10': !exists(json, 'ext_10') ? undefined : json['ext_10'],
        'validate_only': !exists(json, 'validate_only') ? undefined : json['validate_only'],
    };
}
export function InlineObject17ToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'name': value.name,
        'from_mail': value.from_mail,
        'body': value.body,
        'inquiry_category_id': value.inquiry_category_id,
        'ext_01': value.ext_01,
        'ext_02': value.ext_02,
        'ext_03': value.ext_03 === undefined ? undefined : (value.ext_03),
        'ext_04': value.ext_04 === undefined ? undefined : (value.ext_04),
        'ext_05': value.ext_05 === undefined ? undefined : value.ext_05,
        'ext_06': value.ext_06 === undefined ? undefined : (value.ext_06),
        'ext_07': value.ext_07,
        'ext_08': value.ext_08 === undefined ? undefined : (value.ext_08),
        'ext_09': value.ext_09 === undefined ? undefined : (value.ext_09),
        'ext_10': value.ext_10 === undefined ? undefined : (value.ext_10),
        'validate_only': value.validate_only,
    };
}
/**
* @export
* @enum {string}
*/
export var InlineObject17InquiryCategoryIdEnum;
(function (InlineObject17InquiryCategoryIdEnum) {
    InlineObject17InquiryCategoryIdEnum[InlineObject17InquiryCategoryIdEnum["_1"] = 1] = "_1";
    InlineObject17InquiryCategoryIdEnum[InlineObject17InquiryCategoryIdEnum["_3"] = 3] = "_3";
    InlineObject17InquiryCategoryIdEnum[InlineObject17InquiryCategoryIdEnum["_4"] = 4] = "_4";
})(InlineObject17InquiryCategoryIdEnum || (InlineObject17InquiryCategoryIdEnum = {}));
