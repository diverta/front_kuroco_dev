<template>
  <div id="app">
    <Login />
    <ApiList :apiInfos="apiInfos" />
    <!-- <Editor /> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Login from './components/Login.vue';
import ApiList from './components/ApiList.vue';
import Editor from './components/Editor.vue';
import { API_METHOD_LIST } from './apilist';
import { getApiRequestInfoByrequestMethodName } from 'kuroco';
import { ApiInfo } from './type';

export default Vue.extend({
  name: 'App',
  components: {
    Login,
    ApiList,
    Editor,
  },
  data() {
    return {
      apiInfos: [] as any,
    };
  },
  methods: {
    getApiInfos(): ApiInfo[] {
      return Object.entries(API_METHOD_LIST).map(([infoKey, method]) => {
        const [className, methodName] = infoKey.split('_');
        const apiRequestInfo = getApiRequestInfoByrequestMethodName(methodName);
        return {
          className,
          methodName,
          method,
          apiRequestInfo,
        };
      });
    },
  },
  mounted() {
    this.apiInfos = this.getApiInfos();
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
