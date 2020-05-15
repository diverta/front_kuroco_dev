<template>
  <v-text-field
    :value="query"
    @input="q => $emit('update:query', q)"
    label="Search API"
    class="js-apilist-filter"
    hide-details
  ></v-text-field>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'FilterInput',
  props: ['query'],
});
</script>
