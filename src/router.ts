import { createRouter, createWebHistory } from "vue-router";

import CountryProfile from "./pages/country-profile.vue";
import RegisterName from "./pages/register-name.vue";
import SelectCountry from "./pages/select-country.vue";
import universityList from "./pages/university-list.vue";

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
  {
    path: "/university-list",
    component: universityList,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
