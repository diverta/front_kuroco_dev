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
  data() {
    return {
      headers: [
        {
          text: 'Dessert (100g serving)',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Iron (%)', value: 'iron' },
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%',
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%',
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%',
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8%',
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: '16%',
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: '0%',
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: '2%',
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: '45%',
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: '22%',
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%',
        },
      ],
    };
  },
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
