import { Ref, ref, computed } from "vue";
import { defineStore } from "pinia";
import { Name, Gender } from "../types/profile";

export default defineStore("profile", () => {
  // State Properties
  const name: Ref<Name> = ref(null);
  const gender: Ref<Gender> = ref(null);

  // Getters
  const userName = computed(() => name.value);
  const userGender = computed(() => gender.value);

  // Actions
  const setName = (value: Name) => (name.value = value);
  const setGender = (value: Gender) => (gender.value = value);

  return {
    userName,
    userGender,
    setName,
    setGender,
  };
});
