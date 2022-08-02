<script setup lang="ts">
/* --- Imports --- */
import { reactive, toRefs, computed, onMounted } from "vue";
import { storeToRefs } from "pinia";
import useInfoStore from "../store/info";
import { getUniversities } from "../api/countriesApi";

/* --- API requests --- */
const {
  fetch: fetchUniversities,
  data: dataSource,
  error,
  loading,
} = getUniversities();

/* --- Stores --- */
const { setCountry } = useInfoStore();
const { countriesList, selectedCountry } = storeToRefs(useInfoStore());
const selectedCountryClone = selectedCountry.value;

/* --- States --- */
const data = reactive({
  columns: [
    {
      name: "University Name",
      id: "universityName",
    },
    {
      name: "Website",
      id: "website",
    },
  ],
});
const { columns } = toRefs(data);

/* --- Methods --- */
const onSetCountry = async (newCountry: string) => {
  await fetchUniversities(newCountry);
  setCountry(newCountry);
};

/* --- hooks --- */
onMounted(async () => {
  if (selectedCountry.value) {
    await fetchUniversities(selectedCountry.value);
  }
});
</script>

<template>
  <main
    class="main-layout | flex items-center flex-col gap-[20px] md:gap-[70px] mt-[20px] md:mt-[100px]"
  >
    <div
      class="w-[95%] md:w-[800px] xl:w-[1150px] flex flex-col md:flex-row justify-between items-center text-[35px] gap-6 text-center"
    >
      <h1>Universities in {{ selectedCountry }}</h1>
      <v-select
        :options="countriesList"
        @option:selected="onSetCountry"
        v-model="selectedCountryClone"
        class="h-[60px] w-full md:w-[35%]"
        placeholder="Select Country"
      />
    </div>
    <div class="w-[95%] md:w-[800px] xl:w-[1150px]">
      <p-table
        :columns="columns"
        :dataSource="dataSource ? dataSource : []"
        :loading="loading"
        :itemsPerPage="10"
        :currentPage="1"
        :error="error ? true : false"
      />
    </div>
  </main>
</template>
