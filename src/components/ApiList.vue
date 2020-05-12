<template>
  <ul id="apilist" class="js-apilist">
    <li
      :class="`info-method js-info-method-methodname-${info.methodName}`"
      v-for="(info, idx) in infos"
      :key="idx"
      @click="() => $emit('clickOnApi', info)"
    >
      <span>{{ info.httpMethod.toUpperCase() }}</span>
      <span>{{ info.path }}</span>
      <span class="info-classname">{{ info.className }}</span>
      <span>{{ info.methodName }}</span>
    </li>
  </ul>
</template>

<script lang="ts">
import { transpile } from 'typescript';
import Vue from 'vue';
import { ApiInfo } from '../type';
import 'codemirror/mode/javascript/javascript.js';

export default Vue.extend({
  name: 'ApiList',
  props: ['apiInfos', 'query'],
  computed: {
    queries() {
      return (((this as any).query as string) || '')
        .trim()
        .split(' ')
        .map(q => q.trim())
        .filter(q => q !== undefined && q !== '');
    },
    infos() {
      return this.apiInfos.filter((info: any) => {
        return (
          this.filter(this.queries, info.path) ||
          this.filter(this.queries, info.className) ||
          this.filter(this.queries, info.methodName)
        );
      });
    },
  },
  methods: {
    filter(queries: string[] = [], testee: string = '') {
      return this.queries.every((q: string) =>
        testee.toUpperCase().includes(q.toUpperCase())
      );
    },
  },
});
</script>

<style scoped>
ul {
  height: 30vh;
  overflow-y: scroll;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 0.5em;
}
li {
  display: contents;
  cursor: pointer;
}
li :hover {
  background: paleturquoise;
}

.info-classname {
  color: green;
}
</style>
