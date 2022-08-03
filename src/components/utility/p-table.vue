<script setup lang="ts">
/* --- Imports --- */
import { toRefs, PropType, watch, ref } from "vue";
import { Columns, DataSource } from "../../types/p-table";
import { computed } from "@vue/reactivity";

/* --- Props --- */
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
  currentPage: {
    type: Number,
    default: 1,
  },
  noDataMessage: {
    type: String,
    default: "No data exits",
  },
  error: {
    type: Boolean,
    default: false,
  },
  errorMessage: {
    type: String,
    default: "Error occurred",
  },
});

/* --- States --- */
const { currentPage, columns, dataSource, itemsPerPage } = toRefs(props);
const mutableCurrentPage = ref(currentPage.value);
const backButtonDisabled = computed(() => mutableCurrentPage.value === 1);
const nextButtonDisabled = computed(
  () => mutableCurrentPage.value * itemsPerPage.value >= dataSource.value.length
);
const totalPages = computed(() =>
  Math.ceil(dataSource.value.length / itemsPerPage.value)
);
const tableColumnValues = computed(() => {
  // Remove all the extra data from the dataSource that is not in the columns
  dataSource.value.forEach((row) => {
    Object.keys(row).forEach((key) => {
      if (!columns.value.find((column) => column.id === key)) {
        delete row[key];
      }
    });
  });

  // Sort the dataSource by the column id and return only their values
  const allTableColumnValues = dataSource.value.map((row) => {
    return Object.entries(row)
      .sort((a, b) => {
        return (
          columns.value.findIndex((column) => column.id === a[0]) -
          columns.value.findIndex((column) => column.id === b[0])
        );
      })
      .map(([_, value]) => value);
  });

  // Determine the number of columns in the table
  const start = (mutableCurrentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return allTableColumnValues.slice(start, end);
});

/* --- Methods --- */
const incrementPage = () => mutableCurrentPage.value++;
const decrementPage = () => mutableCurrentPage.value--;
</script>

<template>
  <div class="table-component | flex flex-col items-center">
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
        v-if="loading"
        class="table-lodaing | text-center h-[60px] border-b-[1px] border-b-black-900 hover:bg-black-200 w-full flex items-center"
      >
        <td class="block w-full">
          <p-spinner size="lg" type="secondary" />
        </td>
      </tr>
      <tr
        v-else-if="error"
        class="text-center h-[60px] border-b-[1px] border-b-black-900 hover:bg-black-200 w-full flex items-center"
      >
        <td class="block w-full">
          {{ errorMessage }}
        </td>
      </tr>
      <tr
        v-else-if="tableColumnValues.length > 0"
        v-for="(columns, index) in tableColumnValues"
        :key="index"
        class="data-columns | text-center h-[60px] border-b-[1px] border-b-black-900 hover:bg-black-200 w-full flex items-center"
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
        v-else-if="dataSource.length === 0"
        class="text-center h-[60px] border-b-[1px] border-b-black-900 hover:bg-black-200 w-full flex items-center"
      >
        <td class="block w-full">
          {{ noDataMessage }}
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
    <div class="mt-2">page: {{ mutableCurrentPage }} / {{ totalPages }}</div>
  </div>
</template>
