<template>
  <v-app>
    <Result
      :response="response"
      :isResponseErrorOccured="isResponseErrorOccured"
      @hide="clearResponse"
    />
    <Header>
      <Uploader />
      <Login />
      <FilterInput :query="query" @update:query="q => setQuery(q)" />
    </Header>

    <v-content>
      <ApiListTable
        :style="{
          height: `calc(${expandsEditor ? 10 : 50}vh - 56px)`,
          overflow: 'scroll',
          transition: 'height 0.1s ease-in',
        }"
        :apis="filteredApis"
        @clickOnApi="
          api => {
            setRenderApi(api);
            clearResponse();
          }
        "
      />
      <v-row class="d-flex align-end">
        <Editor
          :style="{
            height: `calc(${expandsEditor ? 90 : 50}vh)`,
            overflow: 'scroll',
            transition: 'height 0.1s ease-in',
          }"
          :apiInfo="renderApi"
          :expandsEditor.sync="expandsEditor"
          @onSubmit="request"
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
import FilterInput from './components/FilterInput.vue';
import Result from './components/Result.vue';
import Uploader from './components/Uploader.vue';
import { Auth } from '../generated/core/Auth';
import { mapActions, mapState, mapGetters } from 'vuex';
import { LocalStorage } from '../generated';

export default Vue.extend({
  name: 'App',
  components: {
    Header,
    Login,
    ApiListTable,
    Editor,
    FilterInput,
    Result,
    Uploader,
  },
  computed: {
    ...mapState([
      'query',
      'apis',
      'renderApi',
      'response',
      'isResponseErrorOccured',
    ]),
    ...mapGetters(['filteredApis']),
  },
  data() {
    return {
      expandsEditor: false,
    };
  },
  methods: {
    ...mapActions([
      'setQuery',
      'setApis',
      'setRenderApi',
      'request',
      'clearResponse',
    ]),
  },
  async mounted() {
    LocalStorage.deleteAccessToken();
    LocalStorage.deleteRefreshToken();
    Auth.onErrorHandler = async result => Promise.resolve();
  },
});
</script>
