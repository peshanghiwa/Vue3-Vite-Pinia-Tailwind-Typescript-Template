import { ref, computed } from "vue";
import { defineStore } from "pinia";
import useProfileStore from "./profile";
import useInfoStore from "./info";

export default defineStore("auth", () => {
  const { setName, setGender } = useProfileStore();
  const { setCountry } = useInfoStore();

  // State Properties
  const loggedIn = ref(false);

  // Getters
  const isLoggedIn = computed(() => loggedIn.value);

  // Actions
  const setLoggedIn = (value: boolean) => (loggedIn.value = value);
  const login = async () => {
    loggedIn.value = true;
  };
  const logout = () => {
    loggedIn.value = false;
    setName(null);
    setCountry(null);
    setGender(null);
  };

  return { isLoggedIn, login, logout, setLoggedIn };
});
