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
  if (to.meta.requiresAuth && isLoggedIn) next();
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
  { path: "/", redirect: "/register-name", name: "home" },
  {
    path: "/register-name",
    component: RegisterName,
    beforeEnter: [nonAuthGuard],
    name: "register-name",
  },
  {
    path: "/select-country",
    component: SelectCountry,
    beforeEnter: [nonAuthGuard],
    name: "select-country",
  },
  {
    path: "/university-list",
    component: UniversityList,
    beforeEnter: [authGuard],
    meta: { requiresAuth: true },
    name: "university-list",
  },
  {
    path: "/country-profile",
    component: CountryProfile,
    beforeEnter: [authGuard],
    meta: { requiresAuth: true },
    name: "country-profile",
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
    name: "not-found",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {

// });

export default router;
