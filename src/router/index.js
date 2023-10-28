import { createRouter as createVueRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Checkout from "../views/CheckoutPage.vue"
import ProductGrid from "../views/ProductGrid.vue"
import ProductPage from "../views/ProductPage.vue"
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
        path: "/checkout",
        name: "checkout",
        component: Checkout,
        beforeEnter: createAuthGuard(app),
      },
      {
        path: "/productGrid",
        name: "productGrid",
        component: ProductGrid,
        beforeEnter: createAuthGuard(app),
      },
      {
        path: "/product",
        name: "product",
        component: ProductPage,
        beforeEnter: createAuthGuard(app),
      },
    ],
    history: createWebHistory(process.env.BASE_URL),
  });
}
