<script setup lang="ts">
import Header from "./components/layout/header.vue";
import Footer from "./components/layout/footer.vue";
</script>

<template>
  <div>
    <Header />
    <router-view v-slot="{ Component, route }">
      <transition :name="`${route.meta.transitionName}`" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <!-- <router-view /> -->
    <Footer />
  </div>
</template>
