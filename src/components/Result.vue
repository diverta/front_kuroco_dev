<template>
  <div class="response-panel js-response" :style="{ height: `${response ? 70 : 0}vh` }">
    <v-btn
      fab
      icon
      class="response-panel-button-close ma-4"
      @click="() => $emit('update:response', null)"
      color="primary"
      dark
    >
      <v-icon>mdi-close-circle</v-icon>
    </v-btn>

    <v-container class="ma-4">
      <v-row>
        <span class="font-weight-bold js-response-isError">isError? : {{ isResponseErrorOccured }}</span>
      </v-row>
      <v-row>
        <span class="rersponse-body response-result js-apilist-response" v-html="responseText"></span>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Result',
  props: ['response', 'isResponseErrorOccured', 'shows'],
  computed: {
    responseText() {
      if (this.response === null) {
        return '';
      }
      try {
        return JSON.stringify(this.response, undefined, 4);
      } catch (e) {
        return this.response;
      }
    },
  },
});
</script>

<style scoped>
.response-panel {
  color: white;
  width: 100vw;
  position: fixed;
  z-index: 10;
  bottom: 0;
  background-color: #111;
  overflow-x: scroll;
  transition: 0.1s;
}

.response-panel .response-panel-button-close {
  position: absolute;
  top: 0;
  right: 16px;
  font-size: 16px;
}

.response-result {
  white-space: pre;
}

@media screen and (max-height: 450px) {
  .response-panel {
    padding-top: 15px;
  }
  .response-panel a {
    font-size: 18px;
  }
}
</style>