<template>
  <div id="app">
    <Login />
    <FilterInput :query.sync="query" />
    <ApiList :apiInfos="apiInfos" :query="query" @clickOnApi="(v) => apiInfo = v" />
    <Editor :apiInfo="apiInfo" @onSubmit="executeRequest" />
    <Response :response="response" :isResponseErrorOccured="isResponseErrorOccured" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Login from './components/Login.vue';
import ApiList from './components/ApiList.vue';
import Editor from './components/Editor.vue';
import Response from './components/Response.vue';
import FilterInput from './components/FilterInput.vue';
import { ApiInfos } from '../generated/core/ApiInfo';

export default Vue.extend({
  name: 'App',
  components: {
    Login,
    ApiList,
    Editor,
    Response,
    FilterInput,
  },
  data() {
    return {
      apiInfos: ApiInfos,
      apiInfo: null as any,
      query: '' as string,

      response: null as any,
      isResponseErrorOccured: null as any,
    };
  },
  methods: {
    executeRequest({ apiInfo, requestParam }: any) {
      console.log(apiInfo);
      this.response = null;
      this.isResponseErrorOccured = null;

      apiInfo
        .method(requestParam)
        .then((res: any) => {
          this.response = res;
          this.isResponseErrorOccured = false;
        })
        .catch((err: any) => {
          this.response = err;
          this.isResponseErrorOccured = true;
        });
    },
  },
});
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-flow: column;
}
</style>
