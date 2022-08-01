import { Ref, ref, computed } from "vue";
import { defineStore } from "pinia";
import { Country } from "../types/info";

export default defineStore("info", () => {
  // State Properties
  const country = ref(null) as Ref<Country>;

  // Getters
  const selectedCountry = computed(() => country.value);

  // Actions
  const setCountry = (value: Country) => (country.value = value);

  return { selectedCountry, setCountry };
});
