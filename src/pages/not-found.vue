<script setup lang="ts"></script>
import useAuthStore from "../store/auth";
const { isLoggedIn } = useAuthStore();

<template>
  <main
    class="main-layout | flex items-center flex-col mt-[20px] md:mt-[100px] text-center"
  >
    <h1 class="text-[40px] font-bold">404, Page not found.</h1>
    <router-link to="/" class="underline"> Go to home page </router-link>
  </main>
</template>
