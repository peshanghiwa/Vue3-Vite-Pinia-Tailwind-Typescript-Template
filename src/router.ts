import { createRouter, createWebHistory } from "vue-router";

import CountryProfile from "./pages/country-profile.vue";
import RegisterName from "./pages/register-name.vue";
import SelectCountry from "./pages/select-country.vue";

const routes = [
  { path: "/country-profile", component: CountryProfile },
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
