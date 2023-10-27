import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Callback from "../components/Callback.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/callback",
    name: "callback",
    component: Callback,
  },
  // Add any other routes you need
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
