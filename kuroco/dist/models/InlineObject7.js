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
export var InlineObject7Description = "{\n    /**\n     * Email\n     * @type {string}\n     */\n    email: string;\n    /**\n     * Password\n     * @type {string}\n     */\n    login_pwd: string;\n    /**\n     * Nickname\n     * @type {string}\n     */\n    nickname: string;\n    /**\n     * Family name\n     * @type {string}\n     */\n    name1?: string;\n    /**\n     * Given name\n     * @type {string}\n     */\n    name2?: string;\n    /**\n     * Text\n     * @type {string}\n     */\n    text: string;\n    /**\n     * Textarea\n     * @type {string}\n     */\n    textarea?: string;\n    /**\n     * Selectbox * 1 => selectBoxOption1 * 2 => selectBoxOption2 * 3 => selectBoxOption3\n     * @type {object | string}\n     */\n    selectbox?: object | string;\n    /**\n     * Radio * 1 => radioOption1 * 2 => radioOption2 * 3 => radioOption3\n     * @type {object | string}\n     */\n    radio?: object | string;\n    /**\n     * Checkbox * 1 => checkboxOption1 * 2 => checkboxOption2 * 3 => checkboxOption3\n     * @type {Array<object | string>}\n     */\n    checkbox?: Array<object | string>;\n    /**\n     * Date\n     * @type {Date}\n     */\n    date?: Date;\n    /**\n     * \n     * @type {number}\n     */\n    relation?: number;\n    /**\n     * File\n     * @type {object}\n     */\n    file?: object;\n    /**\n     * /label/open_flg\n     * @type {number}\n     */\n    open_flg?: InlineObject7OpenFlgEnum;\n    /**\n     * /label/login_ok_flg\n     * @type {number}\n     */\n    login_ok_flg?: InlineObject7LoginOkFlgEnum;\n    /**\n     * /label/send_validate\n     * @type {boolean}\n     */\n    validate_only?: boolean;\n}";
export function InlineObject7FromJSON(json) {
    return InlineObject7FromJSONTyped(json, false);
}
export function InlineObject7FromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'email': json['email'],
        'login_pwd': json['login_pwd'],
        'nickname': json['nickname'],
        'name1': !exists(json, 'name1') ? undefined : json['name1'],
        'name2': !exists(json, 'name2') ? undefined : json['name2'],
        'text': json['text'],
        'textarea': !exists(json, 'textarea') ? undefined : json['textarea'],
        'selectbox': !exists(json, 'selectbox') ? undefined : json['selectbox'],
        'radio': !exists(json, 'radio') ? undefined : json['radio'],
        'checkbox': !exists(json, 'checkbox') ? undefined : json['checkbox'],
        'date': !exists(json, 'date') ? undefined : json['date'],
        'relation': !exists(json, 'relation') ? undefined : json['relation'],
        'file': !exists(json, 'file') ? undefined : json['file'],
        'open_flg': !exists(json, 'open_flg') ? undefined : json['open_flg'],
        'login_ok_flg': !exists(json, 'login_ok_flg') ? undefined : json['login_ok_flg'],
        'validate_only': !exists(json, 'validate_only') ? undefined : json['validate_only'],
    };
}
export function InlineObject7ToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'email': value.email,
        'login_pwd': value.login_pwd,
        'nickname': value.nickname,
        'name1': value.name1,
        'name2': value.name2,
        'text': value.text,
        'textarea': value.textarea,
        'selectbox': value.selectbox === undefined ? undefined : (value.selectbox),
        'radio': value.radio === undefined ? undefined : (value.radio),
        'checkbox': value.checkbox === undefined ? undefined : value.checkbox,
        'date': value.date,
        'relation': value.relation,
        'file': value.file,
        'open_flg': value.open_flg,
        'login_ok_flg': value.login_ok_flg,
        'validate_only': value.validate_only,
    };
}
/**
* @export
* @enum {string}
*/
export var InlineObject7OpenFlgEnum;
(function (InlineObject7OpenFlgEnum) {
    InlineObject7OpenFlgEnum[InlineObject7OpenFlgEnum["_0"] = 0] = "_0";
    InlineObject7OpenFlgEnum[InlineObject7OpenFlgEnum["_1"] = 1] = "_1";
})(InlineObject7OpenFlgEnum || (InlineObject7OpenFlgEnum = {}));
/**
* @export
* @enum {string}
*/
export var InlineObject7LoginOkFlgEnum;
(function (InlineObject7LoginOkFlgEnum) {
    InlineObject7LoginOkFlgEnum[InlineObject7LoginOkFlgEnum["_0"] = 0] = "_0";
    InlineObject7LoginOkFlgEnum[InlineObject7LoginOkFlgEnum["_1"] = 1] = "_1";
})(InlineObject7LoginOkFlgEnum || (InlineObject7LoginOkFlgEnum = {}));
