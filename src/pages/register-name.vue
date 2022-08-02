<script setup lang="ts">
import { reactive, toRefs } from "vue";
import router from "../router.js";
import useProfileStore from "../store/profile";
import useInfoStore from "../store/info";
import useAuthStore from "../store/auth";
const { setName, fetchAndSetGender, userName } = useProfileStore();
const { selectedCountry } = useInfoStore();
const { login } = useAuthStore();

const data = reactive({
  name: "",
  inputInvalid: false,
  loading: false,
});

const { name, inputInvalid, loading } = toRefs(data);

const onLogin = async () => {
  if (!name.value) {
    inputInvalid.value = true;
    return;
  }
  loading.value = true;
  setName(name.value);
  await fetchAndSetGender(name.value);

  if (!selectedCountry) return router.push("/select-country");

  login();
  router.push("/country-profile");
  inputInvalid.value = false;
  loading.value = false;
};
</script>

<template>
  <div class="main-layout | flex justify-center items-center flex-col gap-8">
    <input
      v-model="name"
      :invalid="inputInvalid"
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
  </div>
</template>
