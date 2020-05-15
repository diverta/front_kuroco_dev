<template>
  <div v-if="apiInfo" id="description-panel">
    <span class="info-classname">{{ apiInfo.className }}</span>.
    <span class="info-methodname">{{ apiInfo.methodName }}</span>
    <div>
      <codemirror
        :value="codeDescription"
        @input="handleOnChangeEditorInput"
        height="400px"
        :options="option"
      />
      <p>{{ error }}</p>
      <v-btn
        :disabled="error !== null || evaluatedObject === null"
        @click="
          () => $emit('onSubmit', { apiInfo, requestParam: evaluatedObject })
        "
        class="js-apilist-request"
        primary
      >request</v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { transpile } from 'typescript';

export default Vue.extend({
  name: 'Editor',
  props: ['apiInfo'],
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

<style scoped>
#description-panel {
  position: fixed;
  bottom: 0;
  left: 0;
  background: white;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
}
</style>