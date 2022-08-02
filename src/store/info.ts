import { Ref, ref, computed } from "vue";
import { defineStore } from "pinia";
import { Country } from "../types/info";

export default defineStore("info", () => {
  // State Properties
  const country: Ref<Country> = ref(null);
  const countries: Ref<Country[]> = ref([]);

  // Getters
  const selectedCountry = computed(() => country.value);
  const countriesList = computed(() => countries.value);

  // Actions
  const setCountries = (value: Country[]) => (countries.value = value);
  const setCountry = (newCountry: Country) => {
    console.log("value inside action", newCountry);
    country.value = newCountry;
  };

  return {
    countriesList,
    selectedCountry,
    setCountries,
    setCountry,
  };
});
