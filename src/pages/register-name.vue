<script setup lang="ts">
/* --- Imports --- */
import router from "../router.js";
import { reactive, toRefs } from "vue";
import useProfileStore from "../store/profile";
import useInfoStore from "../store/info";
import useAuthStore from "../store/auth";
import { requestGender } from "../api/profileApi";

/* --- API requests --- */
const { fetch: fetchGender, loading, error } = requestGender();

/* --- Stores --- */
const { setName } = useProfileStore();
const { selectedCountry } = useInfoStore();
const { login } = useAuthStore();

/* --- States --- */
const data = reactive({
  name: "",
  inputInvalid: false,
});
const { name, inputInvalid } = toRefs(data);

/* --- Methods --- */
const onLogin = async () => {
  if (!name.value) {
    inputInvalid.value = true;
    return;
  }
  loading.value = true;
  setName(name.value);
  await fetchGender(name.value);

  if (!selectedCountry) return router.push("/select-country");

  login();
  router.push("/country-profile");
  inputInvalid.value = false;
  loading.value = false;
};
</script>

<template>
  <main class="main-layout | flex justify-center items-center flex-col gap-8">
    <input
      v-model="name"
      :invalid="inputInvalid || error"
      @keyup.enter="onLogin"
      class="input-primary | w-[90%] h-[60px] sm:w-[300px]"
      type="text"
      placeholder="Enter your name"
    />
    <p-button
      @click="onLogin"
      class="w-[90%] h-[60px] sm:w-[300px]"
      :loading="loading"
      type="primary"
      >Login</p-button
    >
  </main>
</template>
