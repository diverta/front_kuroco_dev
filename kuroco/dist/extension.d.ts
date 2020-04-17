export declare namespace Extension {
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
    function pick<ExtensionType>(extData: any): ExtensionType[];
    /**
     * convert values to for requesting object.
     * @param extColKeyName extColName{n}
     * @param values
     * @param converter
     * @example ```
     *
     * ```
     */
    function convertToRequestObject<ExtensionType>(values?: ExtensionType[], converter?: (values: ExtensionType[]) => ExtensionType[]): {};
    namespace Type {
        type CheckBox = {
            key: string;
            label: string;
        };
        type CsvMaster = string;
        type Date = string;
        type FileManager = string;
        type GcsFile = {
            id: string;
            url: string;
            desc: string;
            file_nm?: string;
        };
        type Html = string;
        type JsonObj = string;
        type Location = {
            gmap_x: string;
            gmap_y: string;
            gmap_place_id: string;
            gmap_zoom: string;
            gmap_type: string;
            height: string;
            width: string;
            gmap_url: string;
        };
        type Railway = {
            tdfk_cd: string;
            tdfk_nm: string;
            line_cd: string;
            line_nm: string;
            station_nm: string;
            station_cd: string;
        };
        type Relation = {
            module_type: string;
            module_id: number;
        };
        type SelectBox = {
            key: string;
            label: string;
        };
        type Tdfk = {
            tdfk_cd: string;
            tdfk_nm: string;
            sub_area_cd?: string;
            sub_area_nm?: string;
        };
        type Text = string;
        type TextArea = string;
        type Wyswig = string;
    }
}
//# sourceMappingURL=extension.d.ts.map