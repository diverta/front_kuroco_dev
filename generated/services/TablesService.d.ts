import { Result } from '../core/Result';
export declare class TablesService {
    /**
     *
     * ### **Master::list (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **csvtable_id** `1`
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @param keyIdx Key index (0|1|2|3|4)
     * @param valueIdx Value index (0|1|2|3|4)
     * @param multiple Multiple(0|1)
     * @param outputAs Output List As (array|object)
     * @param groupBy Grouping List By (id|parentValue|parentLabel|childValue|childLabel)
     * @param groupAs Grouping List As (array|object)
     * @result any
     * @throws ApiError
     */
    static getTablesServiceRcmsApi1Tables1(requestParam: TablesService.getTablesServiceRcmsApi1Tables1Request): Promise<Result<any>>;
    /**
     *
     * ### **Master::list (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **csvtable_id** `5`
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @param keyIdx Key index (0|1|2|3)
     * @param valueIdx Value index (0|1|2|3)
     * @param multiple Multiple(0|1)
     * @param outputAs Output List As (array|object)
     * @param groupBy Grouping List By (|||)
     * @param groupAs Grouping List As (array|object)
     * @result any
     * @throws ApiError
     */
    static getTablesServiceRcmsApi1TablesInvalid(requestParam: TablesService.getTablesServiceRcmsApi1TablesInvalidRequest): Promise<Result<any>>;
    /**
     *
     * ### **Master::list (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **csvtable_id** `1`
     *
     * > **key_idx** `1`
     *
     * > **value_idx** `2`
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @param multiple Multiple(0|1)
     * @param outputAs Output List As (array|object)
     * @param groupBy Grouping List By (id|parentValue|parentLabel|childValue|childLabel)
     * @param groupAs Grouping List As (array|object)
     * @result any
     * @throws ApiError
     */
    static getTablesServiceRcmsApi1Tables1Key1Value2(requestParam: TablesService.getTablesServiceRcmsApi1Tables1Key1Value2Request): Promise<Result<any>>;
}
export declare namespace TablesService {
    interface getTablesServiceRcmsApi1Tables1Request {
        outputFormat?: string;
        lang?: string;
        charset?: string;
        keyIdx?: Array<number>;
        valueIdx?: Array<number>;
        multiple?: number;
        outputAs?: string;
        groupBy?: string;
        groupAs?: string;
    }
    type getTablesServiceRcmsApi1Tables1Response = any;
    interface getTablesServiceRcmsApi1TablesInvalidRequest {
        outputFormat?: string;
        lang?: string;
        charset?: string;
        keyIdx?: Array<number>;
        valueIdx?: Array<number>;
        multiple?: number;
        outputAs?: string;
        groupBy?: string;
        groupAs?: string;
    }
    type getTablesServiceRcmsApi1TablesInvalidResponse = any;
    interface getTablesServiceRcmsApi1Tables1Key1Value2Request {
        outputFormat?: string;
        lang?: string;
        charset?: string;
        multiple?: number;
        outputAs?: string;
        groupBy?: string;
        groupAs?: string;
    }
    type getTablesServiceRcmsApi1Tables1Key1Value2Response = any;
}
export declare const infos: {
    path: string;
    httpMethod: string;
    class: typeof TablesService;
    className: string;
    method: typeof TablesService.getTablesServiceRcmsApi1Tables1;
    methodName: string;
    auth: null;
    description: string;
}[];
//# sourceMappingURL=TablesService.d.ts.map