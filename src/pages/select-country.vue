<script setup lang="ts">
import { onMounted, reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import { getAllCountries } from "../api/countriesApi";
import useInfoStore from "../store/info";
import useProfileStore from "../store/profile";
import useAuthStore from "../store/auth";
import { Country } from "../types/info";

const router = useRouter();
const { setCountry, selectedCountry } = useInfoStore();
const { userName } = useProfileStore();
const { login } = useAuthStore();

const data = reactive({
  placeholder: "Select country",
  country: null,
  inputInvalid: false,
  options: [] as Country[],
  loading: false,
});
const { country, options, loading, placeholder, inputInvalid } = toRefs(data);

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

onMounted(async () => {
  try {
    loading.value = true;
    const countries = await getAllCountries();
    options.value = countries;
    loading.value = false;
  } catch (error) {
    console.error(error);
    placeholder.value = "An Error Occurred";
    loading.value = false;
  }
});
</script>

<template>
  <div class="main-layout | flex justify-center items-center flex-col gap-8">
    <v-select
      :options="options"
      v-model="country"
      class="w-[90%] h-[60px] sm:w-[300px]"
      :placeholder="placeholder"
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
