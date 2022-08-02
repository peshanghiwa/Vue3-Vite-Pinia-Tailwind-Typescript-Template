<script setup lang="ts">
/* --- Imports --- */
import { storeToRefs } from "pinia";
import { computed, reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import useAuthStore from "../../store/auth";
import useProfileStore from "../../store/profile";

/* --- Stores --- */
const { isLoggedIn } = storeToRefs(useAuthStore());
const { userName, userGender } = storeToRefs(useProfileStore());
const { logout } = useAuthStore();

/* --- States --- */
const router = useRouter();
const data = reactive({
  navbarDropdownVisible: false,
});
const { navbarDropdownVisible } = toRefs(data);
const honorific = computed(() => {
  if (userGender.value === "male") return "Mr.";
  if (userGender.value === "female") return "Mrs.";
  return;
});

/* --- Methods --- */
const onLogout = () => {
  logout();
  router.push("/register-name");
};
</script>

<template>
  <transition name="fadedown">
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
          <p>Hello {{ honorific }} {{ userName }}</p>
          <p-button
            class="hidden md:block w-[150px] h-[40px]"
            type="primary"
            @click="onLogout"
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
                >Country Profile
              </router-link>
            </li>
            <li>
              <router-link
                to="/university-list"
                class="block py-[15px] px-[70px] hover:bg-black-700 transiton-all duration-300 ease-in-out"
                >University List</router-link
              >
            </li>
            <li>
              <button
                @click="onLogout"
                class="block py-[15px] px-[100px] hover:bg-black-700 transiton-all duration-300 ease-in-out"
              >
                Logout
              </button>
            </li>
          </ul>
        </transition>
      </nav>
    </head>
  </transition>
</template>
