<script setup lang="ts">
import { onMounted, reactive, toRefs } from "vue";
import useInfoStore from "../store/info";
import { storeToRefs } from "pinia";
import { getCountry } from "../api/countriesApi";
import { Country } from "../types/info";
const { setCountry } = useInfoStore();
const { countriesList, selectedCountry } = storeToRefs(useInfoStore());
const selectedCountryClone = selectedCountry.value;

const data = reactive({
  country: null as Country,
});
const { country } = toRefs(data);

const onSetCountry = async (newCountry: string) => {
  country.value = null;
  country.value = await getCountry(newCountry);
  setCountry(newCountry);
};

onMounted(async () => {
  if (selectedCountry.value)
    country.value = await getCountry(selectedCountry.value);
});
</script>

<template>
  <main
    class="main-layout | flex items-center flex-col gap-[20px] md:gap-[70px] mt-[20px] md:mt-[100px]"
  >
    <div
      class="w-[95%] md:w-[800px] xl:w-[1050px] flex flex-col md:flex-row justify-between items-center text-[35px] gap-6"
    >
      <h1>Country Profile</h1>
      <v-select
        :options="countriesList"
        @option:selected="onSetCountry"
        v-model="selectedCountryClone"
        class="h-[60px] w-full md:w-[35%]"
        placeholder="Select Country"
      />
    </div>
    <div
      class="w-[95%] md:w-[800px] xl:w-[1050px] flex flex-col md:flex-row justify-between gap-[20px] md:gap-[100px]"
    >
      <div
        class="w-[100%] md:w-[50%] h-[350px] rounded-lg border-[1px] border-black-900 flex justify-center items-center"
      >
        <template v-if="country">
          <span class="text-[100px]">
            {{ country.flag }}
          </span>
        </template>
        <template v-else>
          <p-spinner size="lg" type="secondary" />
        </template>
      </div>
      <div class="w-[100%] md:w-[50%] flex flex-col gap-6">
        <template v-if="country">
          <h2 class="font-bold text-[25px]">{{ selectedCountry }}</h2>
          <div class="flex flex-col gap-5">
            <div class="w-full flex justify-between items-center">
              <h3 class="w-[50%] font-bold">Country Code</h3>
              <p class="w-[50%]">{{ country.countryCode }}</p>
            </div>
            <div class="w-full flex justify-between items-center">
              <h3 class="w-[50%] font-bold">Capital City</h3>
              <p class="w-[50%]">{{ country.capitalCity }}</p>
            </div>
            <div class="w-full flex justify-between items-center">
              <h3 class="w-[50%] font-bold">Population</h3>
              <p class="w-[50%]">{{ country.population }}</p>
            </div>
            <div class="w-full flex justify-between items-center">
              <h3 class="w-[50%] font-bold">Area</h3>
              <p class="w-[50%]">{{ country.area }}</p>
            </div>
            <div class="w-full flex justify-between items-center">
              <h3 class="w-[50%] font-bold">Currency</h3>
              <p class="w-[50%]">{{ country.currency }}</p>
            </div>
            <div class="w-full flex justify-between items-center">
              <h3 class="w-[50%] font-bold">Languages</h3>
              <p class="w-[50%]">{{ country.currency }}</p>
            </div>
          </div>
        </template>
        <template v-else>
          <p-spinner
            size="lg"
            type="secondary"
            class="transform translate-y-[150px]"
          />
        </template>
      </div>
    </div>
  </main>
</template>
