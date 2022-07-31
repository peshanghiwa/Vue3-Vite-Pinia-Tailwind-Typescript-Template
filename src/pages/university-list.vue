<script setup lang="ts">
import { reactive, toRefs } from "vue";

const data = reactive({
  country: null,
});
const { country } = toRefs(data);
const options = ["Afghanistan", "Albania", "Algeria", "Andorra"];

const columns = [
  {
    name: "Country",
    id: "country",
  },
  {
    name: "Capital",
    id: "capital",
  },
];

const dataSource = [
  {
    country: "Afghanistan",
    capital: "Kabul",
  },
  {
    country: "Albania",
    capital: "Tirana",
  },
  {
    country: "Algeria",
    capital: "Algiers",
  },
  {
    country: "Andorra",
    capital: "Andorra la Vella",
  },
  {
    country: "Angola",
    capital: "Luanda",
  },
  {
    country: "Antigua and Barbuda",
    capital: "Saint John's",
  },
  {
    country: "Argentina",
    capital: "Buenos Aires",
  },
  {
    country: "Armenia",
    capital: "Yerevan",
  },
  {
    country: "Australia",
    capital: "Canberra",
  },
  {
    country: "Austria",
    capital: "Vienna",
  },
  {
    country: "Azerbaijan",
    capital: "Baku",
  },
  {
    country: "Bahamas",
    capital: "Nassau",
  },
  {
    country: "Bahrain",
    capital: "Manama",
  },
  {
    country: "Bangladesh",
    capital: "Dhaka",
  },
  {
    country: "Barbados",
    capital: "Bridgetown",
  },
  {
    country: "Belarus",
    capital: "Minsk",
  },
  {
    country: "Belgium",
    capital: "Brussels",
  },
  {
    country: "Belize",
    capital: "Belmopan",
  },
  {
    country: "Benin",
    capital: "Porto-Novo",
  },
  {
    country: "Bhutan",
    capital: "Thimphu",
  },
  {
    country: "Bolivia",
    capital: "Sucre",
  },
  {
    country: "Bosnia and Herzegovina",
    capital: "Sarajevo",
  },
  {
    country: "Botswana",
    capital: "Gaborone",
  },
  {
    country: "Brazil",
    capital: "Brasilia",
  },
  {
    country: "Brunei",
    capital: "Bandar Seri Begawan",
  },
];
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
        :options="options"
        v-model="country"
        class="h-[60px] w-full md:w-[35%]"
        placeholder="Select Country"
      />
    </div>
    <div class="w-[95%] md:w-[800px] xl:w-[1150px]">
      <p-table
        :columns="columns"
        :dataSource="dataSource"
        :loading="false"
        :itemsPerPage="5"
        :page="1"
      />
    </div>
  </main>
</template>
