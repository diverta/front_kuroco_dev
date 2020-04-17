export var Extension;
(function (Extension) {
    /**
     * picks extension typed value from extData.
     * note this function returns Array<ExtensionType> all the time,
     * 1, when the target value is null or undefined, this function returns empty Array mapped those elements inside of itself are ExtensionType even it is empty,
     * 2, when the target value is not Array type, this function returns an Array forcefully wrapped that value.
     * @param extData Extension Data.
     * @example ```
     * fetch('/topics')
     *  .then(res => re.json())
     *  .then(({ list }) => {
     *     list.forEach(topicData => {
     *       const textExtensions: Extension.Type.Text[] = Extension.pick<Extension.Type.Text>(topicData.extCol01);
     *       console.log(textExtensions); // [ 'textExtensionData01', 'textExtensionData02', ... ]
     *     })
     *   })
     * ```
     */
    function pick(extData) {
        var val = JSON.parse(JSON.stringify(extData));
        var rtn = [];
        if (val === null || val === undefined) {
            return rtn;
        }
        if (Array.isArray(val) && val.length === 0) {
            return rtn;
        }
        if (!Array.isArray(val) && Object.keys(val).length === 0) {
            return rtn;
        }
        if (!Array.isArray(val)) {
            rtn.push(val);
            return rtn;
        }
        return val;
    }
    Extension.pick = pick;
    /**
     * convert values to for requesting object.
     * @param extColKeyName extColName{n}
     * @param values
     * @param converter
     * @example ```
     *
     * ```
     */
    function convertToRequestObject(values, converter) {
        if (values === void 0) { values = []; }
        if (converter === void 0) { converter = function (value) { return value; }; }
        if (values.length === 0) {
            return {};
        }
        var converted = converter(values);
        return converted.length === 1 ? converted[0] : converted;
    }
    Extension.convertToRequestObject = convertToRequestObject;
})(Extension || (Extension = {}));
