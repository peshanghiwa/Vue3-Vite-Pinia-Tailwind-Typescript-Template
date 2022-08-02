<script setup lang="ts">
import { onMounted, reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import { getAllCountries } from "../api/countriesApi";
import useInfoStore from "../store/info";
import useProfileStore from "../store/profile";
import useAuthStore from "../store/auth";
const router = useRouter();

const {
  fetch: fetchCountries,
  error,
  data: countries,
  loading,
} = getAllCountries();

const { setCountry } = useInfoStore();
const { userName } = useProfileStore();
const { login } = useAuthStore();

const data = reactive({
  country: null,
  inputInvalid: false,
});
const { country, inputInvalid } = toRefs(data);

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

onMounted(async () => await fetchCountries());
</script>

<template>
  <div class="main-layout | flex justify-center items-center flex-col gap-8">
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
  </div>
</template>
