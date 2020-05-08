<template>
  <div>
    <p>
      filter:
      <input type="text" v-model="query" class="js-apilist-filter" />
    </p>
    <ul id="apilist" class="js-apilist">
      <li
        :class="`info-method js-info-method-methodname-${info.methodName}`"
        v-for="(info, idx) in filteredApiInfos"
        :key="idx"
        @click="() => handleClickSelectMethod(info)"
      >
        <span>{{ getHttpMethodByRequestMethodName(info.methodName) }}</span>
        <span>{{ info.apiRequestInfo.url }}</span>
        <span class="info-classname">{{ info.className }}</span>
        <span>{{ info.methodName }}</span>
      </li>
    </ul>
    <div v-if="selectedApiInfo" id="description-panel">
      <span class="info-classname">{{ selectedApiInfo.className }}</span
      >.
      <span class="info-methodname">{{ selectedApiInfo.methodName }}</span>
      <div>
        <codemirror v-model="selectedApiCode" :options="cmOptions" />
        <button @click="handleRequestSelectedApi" class="js-apilist-request">
          request
        </button>
      </div>
    </div>
    <div v-if="!!response" class="response">
      <div class="response-header">
        <h3>response</h3>
      </div>
      <div>
        <h3 class="js-response-isError">
          isError? : {{ isResponseErrorOccured }}
        </h3>
      </div>
      <div>
        <span class="rersponse-body js-apilist-response">{{ response }}</span>
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
      response: '',
      isResponseErrorOccured: '',
    };
  },
  computed: {
    filteredApiInfos() {
      return this.apiInfos.filter((info: any) => {
        const qs = ((this as any).query as string)
          .trim()
          .split(' ')
          .map(q => q.trim())
          .filter(q => q !== undefined && q !== '');

        const test = (testee: string = '') =>
          qs.every(q => testee.toUpperCase().includes(q.toUpperCase()));

        return (
          test(info.apiRequestInfo.url) ||
          test(info.className) ||
          test(info.methodName)
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
      this.response = '';
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
        .then((prms: any) => prms.value())
        .then((value: any) => {
          this.isResponseErrorOccured = 'false';
          this.response = JSON.stringify(value, null, '\t');
        })
        .catch(async (err: any) => {
          this.isResponseErrorOccured = 'true';
          this.response = `${JSON.stringify(await err.json(), null, '\t')}`;
        })
        .finally(() =>
          console.info(
            `${this.selectedApiInfo.apiRequestInfo.requestMethodName}\n${this.response}`
          )
        );
    },
  },
});
</script>

<style scoped>
#apilist {
  height: 30vh;
  overflow-y: scroll;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 0.5em;
}
#apilist > li {
  display: contents;
  cursor: pointer;
}
#apilist > li :hover {
  background: paleturquoise;
}

#description-panel {
  height: 240px;
}

.info-classname {
  color: green;
}

.response {
  position: absolute;
  z-index: 1;
  right: 1em;
  bottom: 1em;
  width: 50vw;
  background: azure;
}
.rersponse-header {
  font-weight: bold;
}
.rersponse-body {
  overflow-wrap: anywhere;
}
</style>
