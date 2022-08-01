import { Ref, ref, computed } from "vue";
import { defineStore } from "pinia";
import { Name, Gender } from "../types/profile";

export const useProfileStore = defineStore("profile", () => {
  // State Properties
  const name = ref(null) as Ref<Name>;
  const gender = ref(null) as Ref<Gender>;

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
