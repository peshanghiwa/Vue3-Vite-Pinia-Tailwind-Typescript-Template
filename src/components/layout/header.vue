<script setup lang="ts">
import { storeToRefs } from "pinia";
import { computed, reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import useAuthStore from "../../store/auth";
const { isLoggedIn } = useAuthStore();
const { isLoggedIn } = storeToRefs(useAuthStore());
const router = useRouter();

const navbarDropdownVisible = ref(false);
</script>

<template>
  <head
    v-if="isLoggedIn"
    class="h-[90px] block border-black-900 border-b-[1px] px-[15px] md:px-[60px]"
  >
    <nav class="w-full h-full flex justify-between items-center">
      <ul class="hidden md:flex gap-10 text-lg">
        <li>
          <router-link
            to="/country-profile"
            :class="[
              router.currentRoute.value.name === 'country-profile'
                ? 'font-bold'
                : 'font-normal',
            ]"
          >
            Country Profile</router-link
          >
        </li>
        <li>
          <router-link
            to="/university-list"
            :class="[
              router.currentRoute.value.name === 'university-list'
                ? 'font-bold'
                : 'font-normal',
            ]"
            >University List</router-link
          >
        </li>
      </ul>
      <section class="flex items-center gap-10 text-lg">
        <p>Hello Mr. Username</p>
        <p-button class="hidden md:block w-[150px] h-[40px]" type="primary"
          >Logout</p-button
        >
      </section>
      <button
        class="md:hidden"
        v-if="!navbarDropdownVisible"
        @click="navbarDropdownVisible = true"
      >
        <img
          src="../../assets/SVGs/burger-menu.svg"
          class="h-[20px]"
          alt="Burger Menu"
        />
      </button>
      <button
        class="md:hidden"
        v-if="navbarDropdownVisible"
        @click="navbarDropdownVisible = false"
      >
        <img
          src="../../assets/SVGs/close.svg"
          class="h-[20px]"
          alt="Burger Menu"
        />
      </button>
      <transition name="fadedown">
        <ul
          v-if="navbarDropdownVisible"
          class="flex items-center flex-col absolute top-[70px] right-[15px] bg-black-900 text-white rounded z-50"
        >
          <li>
            <router-link
              to="/country-profile"
              class="block py-[15px] px-[70px] hover:bg-black-700 transiton-all duration-300 ease-in-out"
              >Country Profile</router-link
            >
          </li>
          <li>
            <router-link
              to="/select-country"
              class="block py-[15px] px-[70px] hover:bg-black-700 transiton-all duration-300 ease-in-out"
              >University List</router-link
            >
          </li>
          <li>
            <button
              class="block py-[15px] px-[100px] hover:bg-black-700 transiton-all duration-300 ease-in-out"
            >
              Logout
            </button>
          </li>
        </ul>
      </transition>
    </nav>
  </head>
</template>
