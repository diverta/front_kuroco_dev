<template>
  <div class="sidenav" :style="{ width: `${width ? width : 0}px` }">
    <v-btn fab icon class="closebtn" @click="() => $emit('update:width', 0)" color="primary" dark>
      <v-icon>mdi-close</v-icon>
    </v-btn>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Result',
  props: ['width'],
});
</script>

<style scoped>
.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 3;
  top: 56px;
  right: 0;
  background-color: #111;
  overflow-x: scroll;
  transition: 0.1s;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 16px;
  font-size: 16px;
}

.main {
  transition: margin-left 0.5s;
  padding: 16px;
}

@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}
</style>