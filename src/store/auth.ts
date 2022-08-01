import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", () => {
  /**
   * Corresponding pinia components to composition api properties
   * @param {*} ref - becomes state properties
   * @param {*} computed - becomes getter
   * @param {*} function - becomes action
   */

  const loggedIn = ref(true);
  const isLoggedIn = computed(() => loggedIn.value);

  const login = () => (loggedIn.value = true);
  const logout = () => (loggedIn.value = false);

  return { isLoggedIn, login, logout };
});
