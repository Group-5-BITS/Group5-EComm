import { createRouter as createVueRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Profile from "../views/Profile.vue";
import AuthCallback from "../components/AuthCallback.vue";
import { createAuthGuard } from "@auth0/auth0-vue";

export function createRouter(app) {
  return createVueRouter({
    routes: [
      {
        path: "/",
        name: "home",
        component: HomeView,
      },
      {
        path: "/callback",
        name: "callback",
        component: AuthCallback,
      },
      {
        path: "/profile",
        name: "profile",
        component: Profile,
        beforeEnter: createAuthGuard(app),
      },
    ],
    history: createWebHistory(process.env.BASE_URL),
  });
}
