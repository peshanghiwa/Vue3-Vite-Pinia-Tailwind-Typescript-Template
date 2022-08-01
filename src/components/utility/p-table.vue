<script setup lang="ts">
import { toRefs, PropType } from "vue";
import { Columns, DataSource } from "../../types/p-table";
import pTable from "../../composables/p-table";

const props = defineProps({
  columns: {
    type: Array as PropType<Columns>,
    default: () => [],
  },
  dataSource: {
    type: Array as PropType<DataSource>,
    default: () => [],
  },
  loading: {
    type: Boolean,
    default: false,
  },
  itemsPerPage: {
    type: Number,
    default: 10,
  },
  page: {
    type: Number,
    default: 1,
  },
});
const {
  tableColumnValues,
  backButtonDisabled,
  nextButtonDisabled,
  incrementPage,
  decrementPage,
  currentPage,
  totalPages,
} = pTable(props.columns, props.dataSource, props.itemsPerPage, props.page);
</script>

<template>
  <div class="flex flex-col items-center">
    <table
      class="bg-black-100 w-full rounded border-[1px] border-black-900 flex flex-col"
    >
      <tr class="bg-black-900 text-white h-[60px] w-full flex items-center">
        <th
          v-for="column in columns"
          :key="column.id"
          class="font-normal block w-full"
        >
          {{ column.name }}
        </th>
      </tr>
      <tr
        v-if="!loading"
        v-for="(columns, index) in tableColumnValues"
        :key="index"
        class="text-center h-[60px] border-b-[1px] border-b-black-900 hover:bg-black-200 w-full flex items-center"
      >
        <td
          v-for="(column, index) in columns"
          :key="index"
          class="block w-full"
        >
          {{ column }}
        </td>
      </tr>
      <tr
        v-else
        class="text-center h-[60px] border-b-[1px] border-b-black-900 hover:bg-black-200 w-full flex items-center"
      >
        <td class="block w-full">
          <p-spinner size="lg" type="secondary" />
        </td>
      </tr>
    </table>
    <div class="mt-[60px] flex gap-10">
      <p-button
        class="w-[200px] h-[50px]"
        type="secondary"
        :disabled="backButtonDisabled"
        @click="decrementPage"
        >Previous</p-button
      >
      <p-button
        class="w-[200px] h-[50px]"
        type="secondary"
        :disabled="nextButtonDisabled"
        @click="incrementPage"
        >Next</p-button
      >
    </div>
    <div class="mt-2">page: {{ currentPage }} / {{ totalPages }}</div>
  </div>
</template>
