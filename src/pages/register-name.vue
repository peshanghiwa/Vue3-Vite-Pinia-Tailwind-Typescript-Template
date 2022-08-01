<script setup lang="ts"></script>
import useProfileStore from "../store/profile";
import useInfoStore from "../store/info";
const { setName } = useProfileStore();
const { selectedCountry } = useInfoStore();

<template>
  <div class="main-layout | flex justify-center items-center flex-col gap-8">
    <input
      class="input-primary | w-[90%] h-[60px] sm:w-[300px]"
      type="text"
      placeholder="Enter your name"
    />
    <p-button class="w-[90%] h-[60px] sm:w-[300px]" type="primary"
      >Login</p-button
    >
  </div>
</template>
