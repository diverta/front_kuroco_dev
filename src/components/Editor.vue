<template>
  <div class="panel">
    <div class="panel-header mx-2 d-flex justify-space-between">
      <div class="mx-4 d-flex align-center">
        <span class="ml-2 info-anchor font-weight-bold">#</span>
        <span class="ml-2 info-classname pink--text text--darken-4">
          {{ apiInfo ? apiInfo.className : 'className' }}
        </span>
        <span>.</span>
        <span class="ml-0 info-methodname purple--text text--darken-4">
          {{ apiInfo ? apiInfo.methodName : 'methodName' }}
        </span>
      </div>
      <div class="mx-4 d-flex align-center">
        <v-btn
          x-small
          fab
          icon
          color="primary"
          :style="{
            transform: `rotate( ${expandsEditor ? '-180deg' : '0deg'} )`,
            transition: 'transform 0.25s ease',
          }"
          @click="() => $emit('update:expandsEditor', !expandsEditor)"
        >
          <v-icon>mdi-arrow-up-bold</v-icon>
        </v-btn>
      </div>
    </div>
    <div class="button-panel-tools">
      <div class="d-flex justify-end">
        <v-btn
          class="my-2 mr-2"
          small
          icon
          color="white"
          :disabled="codeDescription === ''"
          @click="handleOnClickMagicWand"
        >
          <v-icon>mdi-auto-fix</v-icon>
        </v-btn>
        <v-btn
          class="my-2 mr-2"
          small
          icon
          color="white"
          :disabled="codeDescription === ''"
          @click="handleOnClickDeleteComment"
        >
          <v-icon>mdi-comment-remove-outline</v-icon>
        </v-btn>
        <v-btn
          class="my-2 mr-2"
          small
          icon
          color="white"
          :disabled="codeDescription === ''"
          @click="handleOnClickNeedle"
        >
          <v-icon>mdi-needle</v-icon>
        </v-btn>
        <v-btn
          class="my-2 mr-2"
          small
          icon
          color="white"
          :disabled="codeDescription === '' || editHistory.length === 0"
          @click="handleOnClickUndo"
        >
          <v-icon>mdi-undo</v-icon>
        </v-btn>
        <v-btn
          class="my-2 mr-2"
          small
          icon
          color="white"
          @click="handleOnClickDelete"
          data-cy="button-clear-all"
        >
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </div>
      <div class="d-flex justify-end">
        <v-btn
          class="my-2 mr-2"
          small
          icon
          color="white"
          :disabled="codeDescription === ''"
          @click="handleOnClickDownload"
        >
          <v-icon>mdi-download</v-icon>
        </v-btn>
        <v-btn
          class="my-2 mr-2"
          small
          icon
          color="white"
          :disabled="codeDescription === ''"
          @click="() => $refs.file.click()"
        >
          <input
            type="file"
            ref="file"
            v-on:change="handleOnClickUpload"
            hidden
          />
          <v-icon>mdi-upload</v-icon>
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
      >request</v-btn
    >
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import 'codemirror/mode/css/css.js';
import 'codemirror/theme/rubyblue.css';

export default Vue.extend({
  name: 'Editor',
  props: ['apiInfo', 'expandsEditor'],
  watch: {
    apiInfo: {
      handler(val) {
        this.codeDescription = this.convertComments(val.description, 'apply');
        this.editHistory = [];
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
      editHistory: [] as string[],
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
      const p = requestParam.replace(/;/g, '');
      const d = eval(`(${p})`);
      // extract Date Object from string type date value ('YYYY-MM-DD') in prm
      return (JSON as any).parseWithDate(JSON.stringify(d));
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
    handleOnClickMagicWand() {
      this.editHistory.push(this.codeDescription);
      this.codeDescription = this.codeDescription
        .split('\n')
        .filter(str => !/\/\*\*/.test(str))
        .filter(str => !/ \* /.test(str))
        .filter(str => !/\*\//.test(str))
        .map(str => str.replace(/^.*export type.*/, ''))
        .map(str => str.replace(/(^.*)export interface.*/, '$1{'))
        .filter(str => !!str && str !== '')
        .join('\n');
    },
    handleOnClickDeleteComment() {
      this.editHistory.push(this.codeDescription);
      this.codeDescription = this.codeDescription
        .split('\n')
        .filter(str => !/\/\*\*/.test(str))
        .filter(str => !/ \* /.test(str))
        .filter(str => !/\*\//.test(str))
        .map(str => str.replace(/^\/\/ +/, ''))
        .filter(str => !!str && str !== '')
        .join('\n');
    },
    handleOnClickNeedle() {
      this.editHistory.push(this.codeDescription);
      this.codeDescription = this.codeDescription
        .split('\n')
        .map(str => {
          // checks this line is either a definiton for minimum value or not.
          // e.g. `test_key?: string,` shuold be matched (and then replace value to a dummy value)
          const match = /^.*\w+(\?:|:) +(.*)/.exec(str);
          if (match === null || match.length < 2) {
            return str;
          }

          const type = match[2].replace(',', '');
          let replacedLine: string = str;
          switch (type) {
            case 'string':
              return str.replace('?:', ':').replace(type, '"SampleValue"');
              break;
            case 'number':
              return str.replace('?:', ':').replace(type, '1');
              break;
            case 'boolean':
              return str.replace('?:', ':').replace(type, 'true');
              break;
            case 'Array<string>':
              return str.replace('?:', ':').replace(type, '["SampleValue"]');
              break;
            case 'Array<number>':
              return str.replace('?:', ':').replace(type, '[1]');
              break;
            case 'Array<boolean>':
              return str.replace('?:', ':').replace(type, '[true]');
              break;
            default:
              return str;
          }
        })
        .filter(str => !!str && str !== '')
        .join('\n');
    },
    handleOnClickUndo() {
      this.codeDescription = this.editHistory.pop() || '';
    },
    handleOnClickDelete() {
      this.editHistory.push('');
      this.codeDescription = '';
    },
    handleOnClickDownload() {
      let anchor = document.createElement('a');
      anchor.href =
        'data:text;charset=utf-8,' + encodeURI(this.codeDescription);
      anchor.target = '_blank';
      anchor.download = `${this.apiInfo.className}_${this.apiInfo.methodName}.js`;
      anchor.click();
    },
    handleOnClickUpload(e: Event) {
      const input = e.target as any;
      if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = (e: ProgressEvent) =>
          (this.codeDescription = reader.result as string);
        reader.onerror = (e: ProgressEvent) =>
          window.alert('failed to upload.');
        reader.readAsText(input.files[0]);
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
.button-panel-tools {
  position: fixed;
  right: 0;
  background-color: rgba(255, 0, 0, 0);
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
  min-height: calc(100vh) !important;
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
