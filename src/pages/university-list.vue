<script setup lang="ts">
import { reactive, toRefs, computed, onMounted } from "vue";
import { storeToRefs } from "pinia";
import useInfoStore from "../store/info";
import { getUniversity } from "../api/countriesApi";
import { University } from "../types/info";
const { setCountry } = useInfoStore();
const { countriesList, selectedCountry } = storeToRefs(useInfoStore());
const selectedCountryClone = selectedCountry.value;

const data = reactive({
  universities: null as University[] | null,
  loading: false,
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
  dataSource: [] as { universityName: string; website: string }[],
});
const { universities, loading, columns, dataSource } = toRefs(data);

const onSetCountry = async (newCountry: string) => {
  loading.value = true;
  universities.value = await getUniversity(newCountry);
  if (universities.value) dataSource.value = setDataSource(universities.value);
  setCountry(newCountry);
  loading.value = false;
};

const setDataSource = (universities: University[]) => {
  return universities.map((university) => {
    return {
      universityName: university.name,
      website: university.web_pages[0],
    };
  });
};

onMounted(async () => {
  if (selectedCountry.value) {
    loading.value = true;
    universities.value = await getUniversity(selectedCountry.value);
    if (universities.value)
      dataSource.value = setDataSource(universities.value);
    loading.value = false;
  }
});
</script>

<template>
  <main
    class="main-layout | flex items-center flex-col gap-[20px] md:gap-[70px] mt-[20px] md:mt-[100px]"
  >
    <div
      class="w-[95%] md:w-[800px] xl:w-[1150px] flex flex-col md:flex-row justify-between items-center text-[35px] gap-6"
    >
      <h1>Universities in {Country}</h1>
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
        :dataSource="dataSource"
        :loading="loading"
        :itemsPerPage="10"
        :currentPage="1"
      />
    </div>
  </main>
</template>
