<script setup lang="ts">
import { reactive, toRefs } from "vue";

const data = reactive({
  country: null,
});
const { country } = toRefs(data);
const options = ["Afghanistan", "Albania", "Algeria", "Andorra"];
</script>

<template>
  <div class="main-layout | flex justify-center items-center flex-col gap-8">
    <v-select
      :options="options"
      v-model="country"
      class="w-[90%] h-[60px] sm:w-[300px]"
      placeholder="Enter your name"
    />
    <p-button class="w-[90%] h-[60px] sm:w-[300px]" type="primary"
      >Proceed</p-button
    >
  </div>
</template>
