<template>
  <section class="py-12 sm:py-16">
    <div class="container mx-auto px-4">
      <nav class="flex">
        <ol role="list" class="flex items-center">
          <li class="text-left">
            <div class="-m-1">
              <a href="#" class="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800">{{ menuItems.home.text }}</a>
            </div>
          </li>

          <li class="text-left">
            <div class="flex items-center">
              <span class="mx-2 text-gray-400">/</span>
              <div class="-m-1">
                <a href="#" class="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800">{{ menuItems.products.text }}</a>
              </div>
            </div>
          </li>

          <li class="text-left">
            <div class="flex items-center">
              <span class="mx-2 text-gray-400">/</span>
              <div class="-m-1">
                <a href="#" class="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800" aria-current="page">{{ menuItems.product.text }}</a>
              </div>
            </div>
          </li>
        </ol>
      </nav>

      <div class="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
        <div class="lg:col-span-3 lg:row-end-1">
          <div class="lg:flex lg:items-start">
            <div class="lg:order-2 lg:ml-5">
              <div class="max-w-xl overflow-hidden rounded-lg">
                <img class="h-full w-full max-w-full object-cover" :src="product.images[imageIndex]" alt="" />
              </div>
            </div>

            <div class="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
              <div class="flex flex-row items-start lg:flex-col">
                <button v-for="(image, index) in product.images" v-bind:key="image" type="button"  @click="imageIndex = index" class="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-900 text-center">
                  <img class="h-full w-full object-cover" :src="image" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-2 lg:row-span-2 lg:row-end-2">
          <h1 class="text-2xl font-bold text-gray-900">{{ product.title }}</h1>

          <div class="mt-5 flex items-center">
            <div class="flex items-center">
              <StarIcon v-for="rating in product.ratings.starCount" v-bind:key="rating" class="block h-4 w-4 align-middle text-yellow-500"/>
            </div>
            <p class="ml-2 text-sm font-medium text-gray-500">{{ product.ratings.reviews }} Reviews</p>
          </div>

          <h2 class="mt-8 text-base text-gray-900">Product Type</h2>
          <div class="mt-3 flex select-none flex-wrap items-center gap-1">
            <label>
              <input type="radio" :name="product.typeRadioName" :value="product.selectedProductType" class="peer sr-only"/>
              <p class="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">{{ product.selectedProductType }}</p>
            </label>
          </div>

          <h2 class="mt-8 text-base text-gray-900">Choose subscription</h2>
          <div class="mt-3 flex select-none flex-wrap items-center gap-1">
            <label v-for="(subscription, index) in product.subscriptions" :key="index">
              <input type="radio" @click="product.selectedSubscription = subscription.name" :name="product.subscriptionRadioName" :value="subscription.name" class="peer sr-only" :checked="subscription.name === product.selectedSubscription" />
              <p class="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">{{ subscription.name }}</p>
              <span class="mt-1 block text-center text-xs">{{ subscription.pricePerKilo }}</span>
            </label>
          </div>

          <div class="mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
            <div class="flex items-end">
              <h1 class="text-3xl font-bold">{{ product.subscriptions.find(sub  => sub.name == product.selectedSubscription).pricePerKilo }}</h1>
              <span class="text-base">/KG</span>
            </div>
            <RouterLink to="/checkout">
            <button type="button" class="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" class="shrink-0 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" class=""></path>
              </svg>
              Add to cart
            </button>
          </RouterLink>
          </div>

          <ul class="mt-8 space-y-2">
            <li v-for="(feature, index) in product.features" :key="index" class="flex items-center text-left text-sm font-medium text-gray-600">
              <svg class="mr-2 block h-5 w-5 align-middle text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" class=""></path>
              </svg>
              {{ feature }}
            </li>
          </ul>
        </div>

        <div class="lg:col-span-3">
          <div class="border-b border-gray-300">
            <nav class="flex gap-4">
              <a href="#" title="" class="border-b-2 border-gray-900 py-4 text-sm font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800">Description</a>
              <a href="#" title="" class="inline-flex items-center border-b-2 border-transparent py-4 text-sm font-medium text-gray-600">
                Reviews
                <span class="ml-2 block rounded-full bg-gray-500 px-2 py-px text-xs font-bold text-gray-100"> {{ product.ratings.reviews }}</span>
              </a>
            </nav>
          </div>

          <div class="mt-8 flow-root sm:mt-12">
            <h1 class="text-3xl font-bold">{{ product.delivery.title }}</h1>
            <p class="mt-4">{{ product.delivery.text }}</p>
            <h1 class="mt-8 text-3xl font-bold">{{ product.farms.title }}</h1>
            <p class="mt-4">{{ product.farms.text }}</p>
            <p class="mt-4">{{ product.farms.additionaltext }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useCatalogStore } from "../utils/store.js";
import { StarIcon } from "@heroicons/vue/24/solid";


const store = useCatalogStore();
let imageIndex = ref(0);
let product = store.getItem;

      let menuItems = {
        home: {
          text: "Home",
        },
        products: {
          text: "Products",
        },
        product: {
          text: product.selectedProductType,
        },
      }
console.log(product)
</script>
