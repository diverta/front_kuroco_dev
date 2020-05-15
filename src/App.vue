<template>
  <v-app>
    <Header>
      <Login />
      <FilterInput :query.sync="query" />
    </Header>
    <v-content>
      <ApiListTable
        :apiInfos="apiInfos"
        :query="query"
        @clickOnApi="v => {
              apiInfo = v;
              response = null;
            }"
      />
      <Editor :apiInfo="apiInfo" @onSubmit="executeRequest" />
      <Response :response="response" :isResponseErrorOccured="isResponseErrorOccured" />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from './components/Header.vue';
import Login from './components/Login.vue';
import ApiListTable from './components/ApiListTable.vue';
import Editor from './components/Editor.vue';
import Response from './components/Response.vue';
import FilterInput from './components/FilterInput.vue';
import { ApiInfos } from '../generated/core/ApiInfo';
import { Auth } from '../generated/core/Auth';

export default Vue.extend({
  name: 'App',
  components: {
    Header,
    Login,
    ApiListTable,
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
      this.response = null;
      this.isResponseErrorOccured = null;

      apiInfo
        .method(requestParam)
        .then((res: any) => {
          console.log('OK', res);
          this.response = res;
          this.isResponseErrorOccured = false;
        })
        .catch((err: any) => {
          console.log('NG', err);
          this.response = err;
          this.isResponseErrorOccured = true;
        });
    },
  },
  mounted() {
    Auth.onErrorHandler = result => {
      return result;
    };
  },
});
</script>
