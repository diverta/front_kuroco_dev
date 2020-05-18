<template>
  <div>
    <v-app-bar app dark fixed>
      <v-btn
        href="https://github.com/diverta/front_kuroco_dev/"
        target="_blank"
        class="text-capitalize px-2 pr-0"
        text
      >
        <span class="font-weight-bold">KurocoDev</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>

      <v-spacer></v-spacer>

      <slot />
      <v-btn
        href="https://picol.kuroco-mng.app/management/rcms_api/api_info/"
        target="_blank"
        class="text-capitalize px-2 pr-0"
        text
      >
        <span>SwaggerUI</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
      <v-btn
        href="https://picol.kuroco-mng.app/management/rcms_api/api_list/"
        target="_blank"
        class="text-capitalize px-2"
        text
      >
        <span>ApiList</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Header',
});
</script>
