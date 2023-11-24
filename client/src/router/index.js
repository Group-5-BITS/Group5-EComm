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
      {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue'),
        beforeEnter: createAuthGuard(app),

      },
      {
        path: "/item",
        name: "item",
        component: () => import("../views/itemView.vue"),
        beforeEnter: createAuthGuard(app),

      },
      {
        name: 'cart',
        path: '/cart',
        component: () => import("../views/CartView.vue"),
        beforeEnter: createAuthGuard(app),
      },
        {
        name: "summary",
        path: "/summary",
        component: () => import("../views/SummaryPage.vue")
      },
      {
        name: "shipping",
        path: "/shipping",
        component: () => import("../views/ShippingPage.vue")
      },
      {
        name: "checkout",
        path: "/checkout",
        component: () => import("../views/CheckOut.vue")
      },
      {
        name: "orderConformation",
        path: "/OrderConformation",
        component: () => import("../views/OrderConformationPage.vue")
      }
    ],
    history: createWebHistory(process.env.BASE_URL),
  });
}
