import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", () => {
  // State Properties
  const loggedIn = ref(false);

  // Getters
  const isLoggedIn = computed(() => loggedIn.value);

  // Actions
  const login = () => (loggedIn.value = true);
  const logout = () => (loggedIn.value = false);

  return { isLoggedIn, login, logout };
});
