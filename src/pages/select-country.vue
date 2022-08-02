<script setup lang="ts">
/* --- Imports --- */
import { onMounted, reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import useInfoStore from "../store/info";
import useProfileStore from "../store/profile";
import useAuthStore from "../store/auth";
import { getAllCountries } from "../api/countriesApi";

/* --- API requests --- */
const { fetch, error, data: countries, loading } = getAllCountries();

/* --- Stores --- */
const { setCountry } = useInfoStore();
const { userName } = useProfileStore();
const { login } = useAuthStore();

/* --- States --- */
const router = useRouter();
const data = reactive({
  country: null,
  inputInvalid: false,
});
const { country, inputInvalid } = toRefs(data);

/* --- Methods --- */
const proceed = () => {
  if (!country.value) {
    inputInvalid.value = true;
    return;
  }
  setCountry(country.value);
  if (!userName) return router.push("/register-name");
  login();
  router.push("/country-profile");
};

/* --- hooks --- */
onMounted(async () => await fetch());
</script>

<template>
  <main class="main-layout | flex justify-center items-center flex-col gap-8">
    <v-select
      :options="countries ? countries : []"
      v-model="country"
      class="w-[90%] h-[60px] sm:w-[300px]"
      :placeholder="error ? 'Error occured' : `Select Country`"
      :loading="loading"
      :invalid="inputInvalid"
    />
    <p-button
      @click="proceed"
      class="w-[90%] h-[60px] sm:w-[300px]"
      type="primary"
      >Proceed</p-button
    >
  </main>
</template>
