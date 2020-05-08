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
import { RcmsApi1Topics1InsertExtCol05, RcmsApi1Topics1InsertExtJsn12 } from './';
/**
 *
 * @export
 * @interface InlineObject17
 */
export interface InlineObject17 {
    /**
     * Name
     * @type {string}
     * @memberof InlineObject17
     */
    name?: string;
    /**
     * E-mail
     * @type {string}
     * @memberof InlineObject17
     */
    from_mail?: string;
    /**
     * Message
     * @type {string}
     * @memberof InlineObject17
     */
    body?: string;
    /**
     * * 1 => Category1 * 3 => Category2 * 4 => Category3
     * @type {number}
     * @memberof InlineObject17
     */
    inquiry_category_id?: InlineObject17InquiryCategoryIdEnum;
    /**
     * RequiredText
     * @type {string}
     * @memberof InlineObject17
     */
    ext_01?: string;
    /**
     * LongText
     * @type {string}
     * @memberof InlineObject17
     */
    ext_02?: string;
    /**
     * Radio * 1 => radio1 * 2 => radio2 * 3 => radio3
     * @type {object | string}
     * @memberof InlineObject17
     */
    ext_03?: object | string;
    /**
     * RequiredSelect * 1 => select1 * 2 => select2 * 3 => select3
     * @type {object | string}
     * @memberof InlineObject17
     */
    ext_04?: object | string;
    /**
     * Checkbox * 1 => check1 * 2 => check2 * 3 => check3
     * @type {Array<object | string>}
     * @memberof InlineObject17
     */
    ext_05?: Array<object | string>;
    /**
     * DateTime
     * @type {string | object}
     * @memberof InlineObject17
     */
    ext_06?: string | object;
    /**
     *
     * @type {object}
     * @memberof InlineObject17
     */
    ext_07?: object;
    /**
     *
     * @type {RcmsApi1Topics1InsertExtCol05}
     * @memberof InlineObject17
     */
    ext_08?: RcmsApi1Topics1InsertExtCol05;
    /**
     *
     * @type {RcmsApi1Topics1InsertExtJsn12}
     * @memberof InlineObject17
     */
    ext_09?: RcmsApi1Topics1InsertExtJsn12;
    /**
     * Date
     * @type {Date | object}
     * @memberof InlineObject17
     */
    ext_10?: Date | object;
    /**
     * /label/send_validate
     * @type {boolean}
     * @memberof InlineObject17
     */
    validate_only?: boolean;
}
export declare const InlineObject17Description = "{\n    /**\n     * Name\n     * @type {string}\n     */\n    name?: string;\n    /**\n     * E-mail\n     * @type {string}\n     */\n    from_mail?: string;\n    /**\n     * Message\n     * @type {string}\n     */\n    body?: string;\n    /**\n     * * 1 => Category1 * 3 => Category2 * 4 => Category3\n     * @type {number}\n     */\n    inquiry_category_id?: InlineObject17InquiryCategoryIdEnum;\n    /**\n     * RequiredText\n     * @type {string}\n     */\n    ext_01?: string;\n    /**\n     * LongText\n     * @type {string}\n     */\n    ext_02?: string;\n    /**\n     * Radio * 1 => radio1 * 2 => radio2 * 3 => radio3\n     * @type {object | string}\n     */\n    ext_03?: object | string;\n    /**\n     * RequiredSelect * 1 => select1 * 2 => select2 * 3 => select3\n     * @type {object | string}\n     */\n    ext_04?: object | string;\n    /**\n     * Checkbox * 1 => check1 * 2 => check2 * 3 => check3\n     * @type {Array<object | string>}\n     */\n    ext_05?: Array<object | string>;\n    /**\n     * DateTime\n     * @type {string | object}\n     */\n    ext_06?: string | object;\n    /**\n     * \n     * @type {object}\n     */\n    ext_07?: object;\n    /**\n     * \n     * @type {RcmsApi1Topics1InsertExtCol05}\n     */\n    ext_08?: RcmsApi1Topics1InsertExtCol05;\n    /**\n     * \n     * @type {RcmsApi1Topics1InsertExtJsn12}\n     */\n    ext_09?: RcmsApi1Topics1InsertExtJsn12;\n    /**\n     * Date\n     * @type {Date | object}\n     */\n    ext_10?: Date | object;\n    /**\n     * /label/send_validate\n     * @type {boolean}\n     */\n    validate_only?: boolean;\n}";
export declare function InlineObject17FromJSON(json: any): InlineObject17;
export declare function InlineObject17FromJSONTyped(json: any, ignoreDiscriminator: boolean): InlineObject17;
export declare function InlineObject17ToJSON(value?: InlineObject17 | null): any;
/**
* @export
* @enum {string}
*/
export declare enum InlineObject17InquiryCategoryIdEnum {
    _1 = 1,
    _3 = 3,
    _4 = 4
}
//# sourceMappingURL=InlineObject17.d.ts.map