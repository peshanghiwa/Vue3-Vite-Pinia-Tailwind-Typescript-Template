import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home.vue";
import RegisterName from "./pages/register-name.vue";
import SelectCountry from "./pages/select-country.vue";

const routes = [
  { path: "/", component: Home },
  {
    path: "/register-name",
    component: RegisterName,
  },
  {
    path: "/select-country",
    component: SelectCountry,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
