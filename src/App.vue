<template>
  <v-app>
    <!-- <Result :width.sync="width" /> -->
    <Header>
      <Login />
      <FilterInput :query.sync="query" />
    </Header>

    <v-content>
      <ApiListTable
        :style="{ height: `calc(${ expandsEditor ? 10 : 50}vh - 56px)`, overflow: 'scroll', transition: 'height 0.1s ease-in' }"
        :apiInfos="apiInfos"
        :query="query"
        @clickOnApi="v => {
                  apiInfo = v;
                  response = null;
                }"
      />
      <v-row class="d-flex align-end">
        <Editor
          :style="{ height: `calc(${ expandsEditor ? 90 : 50}vh)`, overflow: 'scroll', transition: 'height 0.1s ease-in' }"
          :apiInfo="apiInfo"
          :expandsEditor.sync="expandsEditor"
          @onSubmit="executeRequest"
        />
      </v-row>
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
import Result from './components/Result.vue';
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
    Result,
  },
  data() {
    return {
      width: 0,
      expandsEditor: false,

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
        })
        .finally(() => (this.width = 250));
    },
  },
  mounted() {
    Auth.onErrorHandler = result => {
      return result;
    };
  },
});
</script>
