import { createRouter, createWebHistory } from "vue-router";

import CountryProfile from "./pages/country-profile.vue";
import NotFound from "./pages/not-found.vue";
import RegisterName from "./pages/register-name.vue";
import SelectCountry from "./pages/select-country.vue";
import UniversityList from "./pages/university-list.vue";

const routes = [
  // We don't have a specific home page, so we redirect home page to the register name page
  { path: "/", redirect: "/register-name" },
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
    component: UniversityList,
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
