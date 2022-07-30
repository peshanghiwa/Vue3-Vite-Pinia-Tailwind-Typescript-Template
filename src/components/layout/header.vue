<script setup lang="ts"></script>

<template>
  <head class="h-[90px] block border-black-900 border-b-[1px] px-[60px]">
    <nav class="w-full h-full flex justify-between items-center">
      <ul class="flex gap-10 text-lg">
        <li>
          <router-link to="/register-name">Country Profile</router-link>
        </li>
        <li>
          <router-link to="/select-country">University List</router-link>
        </li>
      </ul>
      <section class="flex items-center gap-10 text-lg">
        <p>Hello Mr. Username</p>
        <p-button class="w-[150px] h-[40px]" type="primary">Logout</p-button>
      </section>
    </nav>
  </head>
</template>
