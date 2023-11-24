<template>
  <section class="bg-white py-12 text-gray-700 sm:py-16 lg:py-20">
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-md text-center">
        <h2 class="font-serif text-2xl font-bold sm:text-3xl">
          Fresh Fruits & Vegetables
        </h2>
      </div>

      <div class="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4 lg:mt-16">
        <article v-for="(product, index) in products" :key="index"
          class="group/item relative flex flex-col overflow-hidden rounded-lg border">
          <div class="aspect-square overflow-hidden">
            <img class="h-full w-full object-cover transition-all duration-300 group-hover/item:scale-125"
              :src="product.images[0]" alt="" />
          </div>
          <div class="absolute top-0 m-2 rounded-full bg-white">
            <p
              class="rounded-full bg-emerald-500 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">
              Sale
            </p>
          </div>
          <div class="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
            <div class="mb-2 flex">
              <p class="mr-3 text-sm font-semibold">{{ product.price }}</p>
              <del class="text-xs text-gray-400">{{
                product.discountedPrice
              }}</del>
            </div>
            <h3 class="mb-2 text-sm text-gray-400">{{ product.title }}</h3>
          </div>
          <RouterLink @click="store.selectItem(index)" to="/product"
            class="group mt-auto mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
            <div
              class="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-emerald-600 group-hover:text-white">
              View
            </div>
            <div
              class="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-emerald-500 group-hover:text-white">
              →
            </div>
          </RouterLink>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useCatalogStore } from "../utils/store.js";

const store = useCatalogStore();

let products = store.catalog;
</script>
