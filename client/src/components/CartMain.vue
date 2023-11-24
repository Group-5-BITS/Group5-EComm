<template>
  <!--    Container for Shopping Cart and Order Summary-->
  <div class="md:flex shadow-md my-3">
    <!--       Shopping Cart Starts Here -->
    <div class="w-full bg-white px-10 py-10">
      <div class="flex justify-between border-b pb-8">
        <h1 class="font-semibold text-4xl">Shopping Cart</h1>
        <h2 class="font-semibold text-4xl">
          {{ store.getFilteredCart(store.currentProvider).length }} Items
        </h2>
      </div>
      <div class="flex mt-10 mb-5">
        <h3 class="font-semibold text-gray-600 text-lg uppercase w-2/5">
          Product Details
        </h3>
        <h3
          class="font-semibold text-center text-gray-600 text-lg uppercase w-1/5 text-center"
        >
          Quantity
        </h3>
        <h3
          class="font-semibold text-center text-gray-600 text-lg uppercase w-1/5 text-center"
        >
          Price
        </h3>
        <h3
          class="font-semibold text-center text-gray-600 text-lg uppercase w-1/5 text-center"
        >
          Total
        </h3>
      </div>

      <TransitionGroup
        name="fade"
        tag="ol"
      >

      <li
        v-for="(item, index) of store.getFilteredCart(store.currentProvider)"
        :key="item.name"
        class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"
      >
        <div class="flex w-2/5">
          <!-- product -->
          <div class="w-20">
            <img :src="item.images[0]" alt="" class="h-24" />
          </div>
          <div class="flex flex-col justify-between ml-4 flex-grow">
            <span class="font-bold text-2xl" @click="openItem(index, item)">{{
                item.name
              }}</span>
            <span class="text-red-500 text-lg">{{ item.provider_name }}</span>
            <a
              class="font-semibold hover:text-red-500 text-gray-500 text-lg z-10"
              href="#"
              @click="removeFromCart(item)"
            >Remove</a
            >
          </div>
        </div>
        <div class="flex justify-center w-1/5">
          <svg
            class="fill-current text-gray-600 sm:w-3 w-24"
            viewBox="0 0 448 512"
            @click="itemRemove(item)"
          >
            <path
              d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
            />
          </svg>

          <input
            v-model="item.count"
            class="mx-2 border text-center w-14"
            type="text"
          />

          <svg
            class="fill-current text-gray-600 sm:w-3 w-24"
            viewBox="0 0 448 512"
            @click="itemAdd(item)"
          >
            <path
              d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
            />
          </svg>
        </div>
        <span class="text-center w-1/5 font-semibold text-2xl"
        >{{ store.currencySymbol[item.price.currency] }}{{ item.price.value }}</span
        >
        <span class="text-center w-1/5 font-semibold text-2xl"
        >{{ store.currencySymbol[item.price.currency] }}{{ item.price.value * item.count }}</span
        >
      </li>
      </TransitionGroup>
      <router-link
        class="flex font-semibold text-indigo-600 text-2xl mt-10"
        to="/"
      >
        <svg
          class="fill-current mr-2 text-indigo-600 w-4"
          viewBox="0 0 448 512"
        >
          <path
            d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"
          />
        </svg>
        Continue Shopping
      </router-link>
      <div class="flex flex-col border-t mt-8">
        <div class="flex font-semibold justify-between py-6 text-2xl uppercase">
          <span>Total cost</span>
          <span>{{store.currencySymbol[store.currency]}}{{ store.getTotalPrice }}</span>
        </div>
        <router-link
          class="flex justify-center bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-2xl text-white uppercase w-full"
          to="/summary"
        >
          Checkout
        </router-link>
      </div>

    </div>
    <!--       Shopping Cart Ends Here-->

  </div>
</template>

<script>
import { useCatalogStore } from "../utils/store.js";


export default {
  name: "CartMain",
  data: () => ({
    showCart: false
  }),
  setup: () => {
    const store = useCatalogStore();
    return {
      store
    };
  },
  methods: {
    toggleCart() {
      this.showCart = !this.showCart;
      console.log(this.showCart, this.store.cart);
    },
    removeFromCart(item) {
      let index = this.store.cart.indexOf(item);
      if (Number.isInteger(index)) {
        this.store.cart.splice(index, 1);
      }
    },
    itemAdd(item) {
      let index = this.store.cart.indexOf(item);
      if (Number.isInteger(index)) {
        this.store.cart[index].count++;
      }
    },
    itemRemove(item) {
      let index = this.store.cart.indexOf(item);
      if (Number.isInteger(index)) {
        this.store.cart[index].count <= 1
          ? (this.store.cart[index].count = 1)
          : this.store.cart[index].count--;
      }
    },
    openItem(index, item) {
      console.log(index);
      console.log();
      this.store.selectItem(item);
      this.$router.push({ name: "item" });
    }
  },
};
</script>

<style scoped></style>
