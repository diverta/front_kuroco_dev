<template>
  <div v-if="!!response" class="response">
    <div class="response-header">
      <h3>response</h3>
    </div>
    <div>
      <h3 class="js-response-isError">isError? : {{ isResponseErrorOccured }}</h3>
    </div>
    <div>
      <span class="rersponse-body js-apilist-response">{{ response }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { transpile } from 'typescript';
import Vue from 'vue';
import { ApiInfo } from '../type';
import 'codemirror/mode/javascript/javascript.js';

export default Vue.extend({
  name: 'Response',
  props: ['response', 'isResponseErrorOccured'],
});
</script>

<style scoped>
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
