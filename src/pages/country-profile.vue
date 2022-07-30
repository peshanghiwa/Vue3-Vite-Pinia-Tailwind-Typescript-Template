<script setup lang="ts">
import { reactive, toRefs } from "vue";

const data = reactive({
  country: null,
});
const { country } = toRefs(data);
const options = ["Afghanistan", "Albania", "Algeria", "Andorra"];
</script>

<template>
  <main
    class="main-layout | flex items-center flex-col gap-[20px] md:gap-[70px] mt-[20px] md:mt-[100px]"
  >
    <div
      class="w-[95%] md:w-[800px] xl:w-[1050px] flex flex-col md:flex-row justify-between items-center text-[35px] gap-6"
    >
      <h1>Country Profile</h1>
      <v-select
        :options="options"
        v-model="country"
        class="h-[60px] w-full md:w-[35%]"
        placeholder="Select Country"
      />
    </div>
    <div
      class="w-[95%] md:w-[800px] xl:w-[1050px] flex flex-col md:flex-row justify-between gap-[20px] md:gap-[100px]"
    >
      <div
        class="w-[100%] md:w-[50%] h-[350px] rounded-lg border-[1px] border-black-900 flex justify-center items-center"
      >
        test
      </div>
      <div class="w-[100%] md:w-[50%] flex flex-col gap-6">
        <h2 class="font-bold text-[25px]">United Kingdom</h2>
        <div class="flex flex-col gap-5">
          <div class="w-full flex justify-between items-center">
            <h3 class="w-[50%] font-bold">Country Code</h3>
            <p class="w-[50%]">UK</p>
          </div>
          <div class="w-full flex justify-between items-center">
            <h3 class="w-[50%] font-bold">Country Code</h3>
            <p class="w-[50%]">UK</p>
          </div>
          <div class="w-full flex justify-between items-center">
            <h3 class="w-[50%] font-bold">Country Code</h3>
            <p class="w-[50%]">UK</p>
          </div>
          <div class="w-full flex justify-between items-center">
            <h3 class="w-[50%] font-bold">Country Code</h3>
            <p class="w-[50%]">UK</p>
          </div>
          <div class="w-full flex justify-between items-center">
            <h3 class="w-[50%] font-bold">Country Code</h3>
            <p class="w-[50%]">UK</p>
          </div>
          <div class="w-full flex justify-between items-center">
            <h3 class="w-[50%] font-bold">Country Code</h3>
            <p class="w-[50%]">UK</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
