import { Ref, ref, computed } from "vue";
import { defineStore } from "pinia";
import { CountryRef, University } from "../types/info";

export default defineStore("info", () => {
  // State Properties
  const country: Ref<CountryRef> = ref(null);
  const countries: Ref<CountryRef[]> = ref([]);
  const universities: Ref<University[]> = ref([]);

  // Getters
  const selectedCountry = computed(() => country.value);
  const countriesList = computed(() => countries.value);
  const universitiesList = computed(() => universities.value);

  // Actions
  const setCountries = (value: CountryRef[]) => (countries.value = value);
  const setCountry = (newCountry: CountryRef) => {
    country.value = newCountry;
  };
  const setUniversities = (value: University[]) => (universities.value = value);

  return {
    countriesList,
    selectedCountry,
    setCountries,
    setCountry,
    universitiesList,
    setUniversities,
  };
});
