import { Ref, ref, computed } from "vue";
import { defineStore } from "pinia";
import { Country } from "../types/info";

export default defineStore("info", () => {
  // State Properties
  const countries: Ref<Country[]> = ref([]);
  const country: Ref<Country> = ref(null);

  // Getters
  const countriesList = computed(() => countries.value);
  const selectedCountry = computed(() => country.value);

  // Actions
  const setCountries = (value: Country[]) => (countries.value = value);
  const setCountry = (value: Country) => (country.value = value);

  return { countriesList, selectedCountry, setCountries, setCountry };
});
