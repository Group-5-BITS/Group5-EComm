<template>
  <div class="flex flex-col align-baseline">
    <div
      v-for="item in response.data"
      :key="items.id"
      class="flex flex-row rounded-lg bg-white sm:flex-row"
      v-if="response.data?.length"
    >
      <img
        :src="item.images[0]"
        alt=""
        class="m-2 h-24 w-28 rounded-md border object-cover object-center"
      />
      <div
        class="flex w-full flex-row justify-between items-center px-4 py-4 text-2xl"
      >
        <span class="font-semibold"
          >{{ item.name }}
          <span class="mx-8 float-right text-gray-400"> x {{ item.count }} </span>
        </span>
        <p class="text-lg font-bold">
          {{ store.currencySymbol[item.price.currency]
          }}{{ Number.parseFloat(item.price.value) * item.count }}
        </p>
      </div>
    </div>
    <div v-else>
      <div>
        <div
          v-for="i in 3"
          class="flex flex-row rounded-lg bg-white sm:flex-row animate-pulse"
        >
          <div
            class="m-2 h-24 w-28 rounded-md border object-cover object-center bg-gray-300"
          />
          <div
            class="flex w-full flex-row justify-between items-center px-4 py-4 text-2xl"
          >
            <div
              class="font-semibold bg-gray-300 w-[15rem] h-8 rounded-md"
            ></div>
            <span
              class="float-right text-gray-400 bg-gray-300 h-8 w-[8rem] rounded-md"
            >
            </span>
            <p
              class="text-lg font-bold bg-gray-300 h-8 w-[4rem] rounded-md"
            ></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed, reactive, ref, watch } from 'vue';
import { useCatalogStore } from '../utils/store';
import axios from 'redaxios';
import { useFetch } from '@vueuse/core';
import 'animate.css';

const store = useCatalogStore();

let items = store.getFilteredCart(store.currentProvider);
store.BPP_URI = items[0].bppURI;
console.log(store.BPP_URI);
let requestItems = items.map((item) => {
  return {
    id: item.id,
    quantity: {
      count: item.count,
    },
  };
});

store.orderItems = requestItems;

let request = {
  bppURI: store.BPP_URI,
  items: requestItems,
};
console.log(request);
let res = await axios.post(
  `${store.BAP_URI}/api/checkout/getQuotation`,
  request,
  {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  },
);

store.transactionId = res.data.transactionId;

const url = `${store.BAP_URI}/api/on_select/${res.data.messageId}`;
const refetch = ref(true);

const { data, error, abort, isFinished, execute } = useFetch(url, { refetch })
  .get()
  .json();

const response = reactive({
  isFinished,
  error,
  data: computed(() => {
    try {
      if (!data.value.length) {
        return data.value;
      }

      items.map((item) => {
        // Using the item id in quotation to map the quoted price to items
        let qItem = data.value[0].order.items.find(
          (quoteItem) => quoteItem.id === item.id,
        );
        item.price = qItem.price;
        console.log(qItem.price);
        return item;
      });
      console.log(items);
      store.checkoutItems = items;
      return items;
    } catch (e) {
      return null;
    }
  }),
});

watch(isFinished, async () => {
  if (response.isFinished && !response.error) {
    if (!response.data.length) {
      execute();
    }
  }
});
</script>
<style scoped></style>
