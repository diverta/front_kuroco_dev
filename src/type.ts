export interface ApiInfo {
  className: string;
  methodName: string;
  method: (param: any) => Promise<any>;
  apiRequestInfo: ApiRequestInfo;
}

export interface ApiRequestInfo {
  class: any;
  url: string;
  requestMethodName: string;
  requestRequiredParamSample: any;
  requestParamInterfaceDescription: string;
}
