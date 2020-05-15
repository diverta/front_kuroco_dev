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
            v-for="(info, idx) in infos"
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

export default Vue.extend({
  name: 'ApiList',
  props: ['apiInfos', 'query'],
  computed: {
    queries() {
      return (((this as any).query as string) || '')
        .trim()
        .split(' ')
        .map(q => q.trim())
        .filter(q => q !== undefined && q !== '');
    },
    infos() {
      return this.apiInfos.filter((info: any) => {
        return (
          this.filter(this.queries, info.path) ||
          this.filter(this.queries, info.className) ||
          this.filter(this.queries, info.methodName)
        );
      });
    },
  },
  methods: {
    filter(queries: string[] = [], testee: string = '') {
      return this.queries.every((q: string) =>
        testee.toUpperCase().includes(q.toUpperCase())
      );
    },
  },
});
</script>
