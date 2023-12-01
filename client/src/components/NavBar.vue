<template>
  <Popover class="relative bg-white z-10">
    <div class="mx-auto px-4 sm:px-6">
      <div class="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <span class="sr-only">ACME Digital</span>
          <router-link to="/">
            <img alt="" class="h-auto w-auto sm:h-12" src="../assets/logo.svg" />
          </router-link>
        </div>

        <div class="hidden items-center justify-end md:flex md:flex-1 lg:w-0">

          <li v-if="!isAuthenticated && !isLoading" class="nav-item">
            <button @click.prevent="login"
              id="signin"
              class="ml-8 whitespace-nowrap text-4xl font-medium text-gray-500 hover:text-gray-900">Sign in</button>
          </li>
          <div v-if="isAuthenticated" class="pl-2 flex items-center">
            <router-link class=" relative flex whitespace-nowrap text-4xl font-medium text-gray-500 hover:text-gray-900"
              to="/">
              <img class="w-10 h-10 rounded-full" :src="user.picture" alt="user photo">
            </router-link>
            <span class="pl-4 self-center text-2xl font-semibold whitespace-nowrap dark:text-gray-900"> Welcome {{ user.given_name ||user.nickname}}!</span>
            <li class="font-sans block mt-4 lg:inline-block lg:mt-0 lg:ml-6 align-middle text-black hover:text-gray-700">
            <router-link id="cart" class=" relative flex whitespace-nowrap text-4xl font-medium text-gray-500 hover:text-gray-900"
              to="/cart">
              <svg aria-hidden="true"
                class="h-10 p-1 hover:text-green-500 duration-200 svg-inline--fa fa-shopping-cart fa-w-18 fa-7x"
                data-icon="shopping-cart" data-prefix="far" focusable="false" role="img" viewBox="0 0 576 512"
                xmlns="http://www.w3.org/2000/svg">
                <path class=""
                  d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z"
                  fill="currentColor"></path>
              </svg>
              <span
                v-if="store.cart.length >= 0"
                class="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm leading-tight text-center"
              >{{ store.cart.length }}
              </span>
            </router-link>
          </li>
          </div>
          <ul id="mobileAuthNavBar" class="navbar-nav d-md-none d-flex" v-if="isAuthenticated">
            <button id="logout" @click.prevent="logout"
              class="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-4xl font-medium text-white shadow-sm hover:bg-indigo-700">Log Out</button>
          </ul>
        </div>
      </div>
    </div>
  </Popover>
</template>

<script>
import { Popover, } from "@headlessui/vue";
import { useCatalogStore } from "../utils/store.js";
import { useAuth0 } from "@auth0/auth0-vue";

export default {
  name: "NavBar",
  data: () => ({
    showCart: false,
    open: true
  }),
  components: {
    Popover,
  },
  setup: () => {
    const auth0 = useAuth0();

    const store = useCatalogStore();
    return {
      isAuthenticated: auth0.isAuthenticated,
      isLoading: auth0.isLoading,
      user: auth0.user,
      store,
      login() {
        auth0.loginWithRedirect();
      },
      logout() {
        auth0.logout({
          logoutParams: {
            returnTo: window.location.origin
          }
        });
      }
    };
  }
};
</script>
