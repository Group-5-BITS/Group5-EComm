import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductPage from "../views/ProductPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView
  },
  {
    path: "/product",
    name: "product",
    component: ProductPage
    // props: true
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: "/item",
    name: "item",
    component: () => import("../views/itemView.vue")
  },
  {
    name: "cart",
    path: "/cart",
    component: () => import("../views/CartView.vue")
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
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// router.beforeEach((to) => {
//   // ✅ This will work because the router starts its navigation after
//   // the router is installed and pinia will be installed too
//   const store = useCatalogStore(createPinia())
//
//   if (!store.messageId) return '/'
// })

export default router
