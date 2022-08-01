import {
  createRouter,
  createWebHistory,
  RouteLocationNormalized,
  NavigationGuardNext,
} from "vue-router";
import { useAuthStore } from "./store/auth";
import CountryProfile from "./pages/country-profile.vue";
import NotFound from "./pages/not-found.vue";
import RegisterName from "./pages/register-name.vue";
import SelectCountry from "./pages/select-country.vue";
import UniversityList from "./pages/university-list.vue";

const authGuard = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const { isLoggedIn } = useAuthStore();
  if (isLoggedIn) next();
  else next("/register-name");
};

const nonAuthGuard = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const { isLoggedIn } = useAuthStore();
  if (!isLoggedIn) {
    next();
  } else {
    next("/country-profile");
  }
};

const routes = [
  // We don't have a specific home page, so we always redirect home page to the register name page
  { path: "/", redirect: "/register-name" },
  {
    path: "/register-name",
    component: RegisterName,
    beforeEnter: nonAuthGuard,
  },
  {
    path: "/select-country",
    component: SelectCountry,
    beforeEnter: nonAuthGuard,
  },
  {
    path: "/university-list",
    component: UniversityList,
    beforeEnter: authGuard,
  },
  {
    path: "/country-profile",
    component: CountryProfile,
    beforeEnter: authGuard,
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {

// });

export default router;
