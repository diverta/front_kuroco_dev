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
export var InlineObject17Description = "{\n    /**\n     * Title\n     * @type {string}\n     */\n    tagNm: string;\n    /**\n     * Category ID\n     * @type {number}\n     */\n    tagCategoryId?: number;\n    /**\n     * Published / Not published\n     * @type {string}\n     */\n    openType?: InlineObject17OpenTypeEnum;\n    /**\n     * Sort\n     * @type {number}\n     */\n    weight?: number;\n    /**\n     * ext_col_01\n     * @type {string}\n     */\n    extCol01?: string;\n    /**\n     * ext_col_02\n     * @type {string}\n     */\n    extCol02?: string;\n    /**\n     * ext_col_03\n     * @type {string}\n     */\n    extCol03?: string;\n    /**\n     * ext_col_04\n     * @type {string}\n     */\n    extCol04?: string;\n    /**\n     * ext_col_05\n     * @type {string}\n     */\n    extCol05?: string;\n    /**\n     * ext_col_06\n     * @type {string}\n     */\n    extCol06?: string;\n    /**\n     * ext_col_07\n     * @type {string}\n     */\n    extCol07?: string;\n    /**\n     * ext_col_08\n     * @type {string}\n     */\n    extCol08?: string;\n    /**\n     * ext_col_09\n     * @type {string}\n     */\n    extCol09?: string;\n    /**\n     * ext_col_10\n     * @type {string}\n     */\n    extCol10?: string;\n}";
export function InlineObject17FromJSON(json) {
    return InlineObject17FromJSONTyped(json, false);
}
export function InlineObject17FromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'tagNm': json['tag_nm'],
        'tagCategoryId': !exists(json, 'tag_category_id') ? undefined : json['tag_category_id'],
        'openType': !exists(json, 'open_type') ? undefined : json['open_type'],
        'weight': !exists(json, 'weight') ? undefined : json['weight'],
        'extCol01': !exists(json, 'ext_col_01') ? undefined : json['ext_col_01'],
        'extCol02': !exists(json, 'ext_col_02') ? undefined : json['ext_col_02'],
        'extCol03': !exists(json, 'ext_col_03') ? undefined : json['ext_col_03'],
        'extCol04': !exists(json, 'ext_col_04') ? undefined : json['ext_col_04'],
        'extCol05': !exists(json, 'ext_col_05') ? undefined : json['ext_col_05'],
        'extCol06': !exists(json, 'ext_col_06') ? undefined : json['ext_col_06'],
        'extCol07': !exists(json, 'ext_col_07') ? undefined : json['ext_col_07'],
        'extCol08': !exists(json, 'ext_col_08') ? undefined : json['ext_col_08'],
        'extCol09': !exists(json, 'ext_col_09') ? undefined : json['ext_col_09'],
        'extCol10': !exists(json, 'ext_col_10') ? undefined : json['ext_col_10'],
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
        'tag_nm': value.tagNm,
        'tag_category_id': value.tagCategoryId,
        'open_type': value.openType,
        'weight': value.weight,
        'ext_col_01': value.extCol01,
        'ext_col_02': value.extCol02,
        'ext_col_03': value.extCol03,
        'ext_col_04': value.extCol04,
        'ext_col_05': value.extCol05,
        'ext_col_06': value.extCol06,
        'ext_col_07': value.extCol07,
        'ext_col_08': value.extCol08,
        'ext_col_09': value.extCol09,
        'ext_col_10': value.extCol10,
    };
}
/**
* @export
* @enum {string}
*/
export var InlineObject17OpenTypeEnum;
(function (InlineObject17OpenTypeEnum) {
    InlineObject17OpenTypeEnum["_open"] = "open";
    InlineObject17OpenTypeEnum["_close"] = "close";
    InlineObject17OpenTypeEnum["_default"] = "default";
})(InlineObject17OpenTypeEnum || (InlineObject17OpenTypeEnum = {}));
