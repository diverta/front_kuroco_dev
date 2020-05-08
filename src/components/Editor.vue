<template>
  <div>
    <v-jsoneditor
      v-model="json"
      :plus="false"
      height="400px"
      @error="onError"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Editor',
  data() {
    return {
      json: { test: null },
    };
  },
  methods: {
    onError() {
      console.error('err');
    },
  },
});
</script>
