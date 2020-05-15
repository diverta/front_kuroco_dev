<template>
  <div class="panel">
    <div class="panel-header mx-2 d-flex justify-space-between">
      <div class="mx-4 d-flex align-center">
        <span class="ml-2 info-anchor font-weight-bold">#</span>
        <span
          class="ml-2 info-classname pink--text text--darken-4"
        >{{ apiInfo ? apiInfo.className : 'className' }}</span>
        <span>.</span>
        <span
          class="ml-0 info-methodname purple--text text--darken-4"
        >{{ apiInfo ? apiInfo.methodName : 'methodName' }}</span>
      </div>
      <div class="mx-4 d-flex align-center">
        <v-btn
          x-small
          fab
          icon
          color="primary"
          :style="{
            transform: `rotate( ${expandsEditor ? '-180deg' : '0deg'} )`,
            transition: 'transform 0.25s ease'
          }"
          @click="() => $emit('update:expandsEditor', !expandsEditor)"
        >
          <v-icon>mdi-arrow-up-bold</v-icon>
        </v-btn>
      </div>
    </div>

    <codemirror
      class="codemirror"
      v-if="apiInfo"
      :value="codeDescription"
      @input="handleOnChangeEditorInput"
      :height="'1000px'"
      :options="option"
    />
    <p class="parse-error-message">{{ error }}</p>
    <v-btn
      class="button-request js-apilist-request"
      :disabled="error !== null || evaluatedObject === null"
      primary
      @click="
          () => $emit('onSubmit', { apiInfo, requestParam: evaluatedObject })
        "
    >request</v-btn>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { transpile } from 'typescript';
import 'codemirror/mode/css/css.js';
import 'codemirror/theme/rubyblue.css';

export default Vue.extend({
  name: 'Editor',
  props: ['apiInfo', 'expandsEditor'],
  watch: {
    apiInfo: {
      handler(val) {
        this.codeDescription = this.convertComments(val.description, 'apply');
      },
      deep: true,
    },
  },
  computed: {},
  data() {
    return {
      option: {
        tabSize: 2,
        mode: 'text/javascript',
        styleActiveLine: true,
        theme: 'rubyblue',
        lineNumbers: true,
        line: true,
      },
      codeDescription: '',

      error: '' as any,
      evaluatedObject: null,
    };
  },
  methods: {
    convertComments(str: string, type: 'apply' | 'clear') {
      const editor =
        type === 'apply'
          ? (line: string = '') => `//  ${line}`
          : (str: string) => str.replace(/^\/\/ .*$/, '');
      return str
        .split('\n')
        .map(editor)
        .filter(str => str !== '')
        .join('\n');
    },
    evaluateOnJS(requestParam: string) {
      let result = transpile(`({ ...${requestParam} })`);
      let prm = eval(result);
      // extract Date Object from string type date value ('YYYY-MM-DD') in prm
      return (JSON as any).parseWithDate(JSON.stringify(prm));
    },
    handleOnChangeEditorInput(code: string) {
      try {
        const requestParamCode = this.convertComments(code, 'clear');
        this.evaluatedObject = this.evaluateOnJS(requestParamCode);
        this.error = null;
      } catch (e) {
        this.error = `${e}`;
      }
    },
  },
});
</script>

<style>
.panel {
  height: 100%;
  width: 100%;
  background: white;
  border-top: 1px solid rgba(119, 119, 119, 0.2);
}
.panel-header {
  position: sticky;
  height: 40px;
  background: white;
  left: 0;
  top: 0;
  z-index: 5;
}
.parse-error-message {
  position: fixed;
  font-weight: bold;
  color: red;
  right: 16px;
  bottom: 16px;
  z-index: 6;
}
.button-request {
  position: fixed;
  background: white;
  right: 16px;
  bottom: 16px;
  z-index: 5;
}
.CodeMirror {
  height: calc(50vh - 40px) !important;
  font-size: 14px;
}

@keyframes rotation {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(180deg);
  }
}
</style>