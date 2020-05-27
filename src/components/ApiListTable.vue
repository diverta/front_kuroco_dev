<template>
  <div>
    <v-simple-table fixed-header dense>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Method</th>
            <th class="text-left">Path</th>
            <th class="text-left">Class Name</th>
            <th class="text-left">Method Name</th>
          </tr>
        </thead>
        <tbody>
          <tr
            :class="`js-info-method-methodname-${info.methodName}`"
            v-for="(info, idx) in apis"
            :key="idx"
            @click="() => $emit('clickOnApi', info)"
          >
            <td>{{ info.httpMethod.toUpperCase() }}</td>
            <td>{{ info.path }}</td>
            <td class="info-classname">{{ info.className }}</td>
            <td>{{ info.methodName }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';

export default Vue.extend({
  name: 'ApiList',
  props: ['apis'],
});
</script>
