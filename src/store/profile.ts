import { Ref, ref, computed } from "vue";
import { defineStore } from "pinia";
import { Name, Gender } from "../types/profile";
import fetchGender from "../api/fetchGender";

export default defineStore("profile", () => {
  // State Properties
  const name: Ref<Name> = ref(null);
  const gender: Ref<Gender> = ref(null);

  // Getters
  const userName = computed(() => name.value);
  const userGender = computed(() => gender.value);

  // Actions
  const setName = async (newName: Name) => {
    name.value = newName;
  };

  const setGender = (newGender: Gender) => {
    gender.value = newGender;
  };

  const fetchAndSetGender = async (newName: Name) => {
    const newGender = await fetchGender(newName);
    gender.value = newGender;
  };

  return {
    userName,
    userGender,
    setName,
    setGender,
    fetchAndSetGender,
  };
});
