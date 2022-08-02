import { Ref, ref, computed } from "vue";
import { defineStore } from "pinia";
import { CountryRef } from "../types/info";

export default defineStore("info", () => {
  // State Properties
  const country: Ref<CountryRef> = ref(null);
  const countries: Ref<CountryRef[]> = ref([]);

  // Getters
  const selectedCountry = computed(() => country.value);
  const countriesList = computed(() => countries.value);

  // Actions
  const setCountries = (value: CountryRef[]) => (countries.value = value);
  const setCountry = (newCountry: CountryRef) => {
    country.value = newCountry;
  };

  return {
    countriesList,
    selectedCountry,
    setCountries,
    setCountry,
  };
});
