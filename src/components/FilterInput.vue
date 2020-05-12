<template>
  <div>
    <p>
      filter:
      <input
        type="text"
        :value="query"
        @input="$emit('update:query', $event.target.value)"
        class="js-apilist-filter"
      />
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'FilterInput',
  props: ['query'],
});
</script>
