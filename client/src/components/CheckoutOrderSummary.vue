<template>
  <div>
    <p class="text-xl font-medium">Order Summary</p>
    <p class="text-gray-400">Check your items. And select a suitable shipping method.</p>
    <div class="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
      <div v-for="item in store.checkoutItems" class="flex flex-col rounded-lg bg-white sm:flex-row">
        <img alt=""
             class="m-2 h-24 w-28 rounded-md border object-cover object-center"
             :src="item.images[0]" />
        <div class="flex w-full flex-col px-4 py-4">
          <span class="font-semibold">{{ item.name }}</span>
          <span class="float-right text-gray-400">x {{item.count}}</span>
          <p class="text-lg font-bold">{{store.currencySymbol[item.price.currency]}}{{Number.parseFloat(item.price.value) * item.count}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useCatalogStore } from "../utils/store";
const store = useCatalogStore();
console.log(store)
</script>
