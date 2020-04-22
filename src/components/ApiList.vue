<template>
  <div>
    <p>
      filter:
      <input type="text" v-model="query" />
    </p>
    <ul id="apilist">
      <li
        class="info-method"
        v-for="(info, idx) in filteredApiInfos"
        :key="idx"
        @click="() => handleClickSelectMethod(info)"
      >
        <span>{{ getHttpMethodByRequestMethodName(info.methodName) }}</span> :
        <span>{{ info.apiRequestInfo.url }}</span> :
        <span class="info-classname">{{ info.className }}</span>
      </li>
    </ul>
    <div v-if="selectedApiInfo" id="description-panel">
      <span class="info-classname">{{ selectedApiInfo.className }}</span>.
      <span class="info-methodname">{{ selectedApiInfo.methodName }}</span>
      <div>
        <codemirror v-model="selectedApiCode" :options="cmOptions" />
        <button @click="handleRequestSelectedApi">request</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { transpile } from 'typescript';
import Vue from 'vue';
import { API_METHOD_LIST } from '@/apilist';
import { getApiRequestInfoByrequestMethodName } from 'kuroco';
import { ApiInfo } from '../type';
import 'codemirror/mode/javascript/javascript.js';

export default Vue.extend({
  name: 'ApiList',
  props: {
    apiInfos: Array,
  },
  data() {
    return {
      idx: -1,
      cmOptions: {
        tabSize: 2,
        mode: 'text/javascript',
        lineNumbers: true,
        line: true,
      },
      selectedApiInfo: {} as any,
      selectedApiCode: '',
      selectedExecutableRequest: null as any,
      query: '',
    };
  },
  computed: {
    filteredApiInfos() {
      return this.apiInfos.filter((info: any) => {
        const regExp = new RegExp((this as any).query, 'ig');
        return (
          regExp.test(info.apiRequestInfo.url) || regExp.test(info.className)
        );
      });
    },
  },
  methods: {
    getHttpMethodByRequestMethodName(requestMethodName: string) {
      if (/Get$/.test(requestMethodName)) {
        return 'GET';
      }
      if (/Post$/.test(requestMethodName)) {
        return 'POST';
      }
      if (/Put$/.test(requestMethodName)) {
        return 'PUT';
      }
      if (/Delete$/.test(requestMethodName)) {
        return 'DELETE';
      }
      return 'UNKNOWN';
    },
    handleClickSelectMethod(apiInfo: ApiInfo) {
      this.selectedApiInfo = apiInfo;
      this.selectedApiCode = this.selectedApiInfoToExecutableCode(apiInfo);
    },
    selectedApiInfoToExecutableCode(apiInfo: ApiInfo) {
      const description =
        apiInfo.apiRequestInfo.requestParamInterfaceDescription;
      const commentoutDescription = description
        .split('\n')
        .map(str => `// ${str}`)
        .join('\n');
      const executableRequestParamObj = description
        .split('\n')
        // remove comments
        .filter(str => !/^ +(\/\*\*|\*).*$/.test(str))
        // remove not requred params
        .filter(str => !/^ +\w+\?:.*/.test(str))
        // replace syntax from used for definitions to executable
        .map(str => str.replace(';', ','))
        // inject dummy value to params
        .map(str => {
          if (/{|}/.test(str)) {
            return str; // this is not the section expressing parameter type (just a code block etc)
          }

          const paramType = str.replace(/^.*: /, '').replace(',', '');
          let dummyValue: string;
          switch (paramType) {
            case 'boolean':
              dummyValue = 'false';
              break;
            case 'string':
              dummyValue = "'string'";
              break;
            case 'number':
              dummyValue = '1';
              break;
            case 'object':
              dummyValue = '{}';
              break;
            case 'Array<boolean>':
              dummyValue = '[false]';
              break;
            case 'Array<string>':
              dummyValue = "['string']";
              break;
            case 'Array<number>':
              dummyValue = '[1]';
              break;
            case 'Array<object>':
              dummyValue = '[{}]';
              break;
            default:
              dummyValue = `${paramType} // can not inject dummy value, please set value by yourself.`;
              break;
          }
          return str.replace(paramType, dummyValue);
        })
        .join('\n');

      const executableCode = `const requestParam = ${executableRequestParamObj};\nnew ${apiInfo.className}().${apiInfo.methodName}(requestParam)`;
      return `// Type Definition\n${commentoutDescription}\n\n${executableRequestParamObj}`;
    },
    handleRequestSelectedApi() {
      const requestParam = this.selectedApiCode
        .split('\n')
        .map(str => str.replace(/\/\/.*$/, ''))
        .join('\n');
      const code = `({
        requestParam: ${requestParam}
      })`;
      let result = transpile(code);
      const prm = eval(result).requestParam;

      new this.selectedApiInfo.apiRequestInfo.class()
        [this.selectedApiInfo.apiRequestInfo.requestMethodName](prm)
        .then((prms: any) => prms.value());
    },
  },
});
</script>

<style scoped>
#apilist {
  height: 240px;
  overflow-y: scroll;
}
#description-panel {
  height: 240px;
}

.info-method {
  cursor: pointer;
}
.info-method:hover {
  background: paleturquoise;
}
.info-classname {
  color: green;
}
</style>
