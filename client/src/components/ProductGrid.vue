<template>
  <!-- ✅ Grid Section - Starts Here 👇 -->

    <!--   ✅ Product card 1 - Starts Here 👇 -->
    <TransitionGroup
      name="fade"
      tag="ol"
      class="w-fit mx-auto grid grid-cols-1 4xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
    >

    <li
        id="product"
        class="w-72 bg-white shadow-md rounded-xl hover:scale-105 hover:shadow-xl cursor-pointer place-content-around"
        v-for="(product, index) in store.getFilteredCatalog"
        :key="index"
        @click="openItem(index, product)"
      >
        <img
          :src="product.images[0]"
          :alt="product.name"
          v-if="product.images?.length > 0"
          class="h-80 w-72 object-cover rounded-t-xl aspect-square"
        />
        <img
          :src="`https://picsum.photos/420/327?random=${index}`"
          v-else
          height="420"
          class="h-80 w-72 object-cover rounded-t-xl"
          alt=""
        />

        <div class="px-4 py-3 w-72">
          <span
            id="provider-name"
            class="text-gray-400 mr-3 uppercase text-sm font-semibold text-orange-500"
            >{{ product.provider_name }}</span
          >
          <p id="product-name" class="text-lg font-bold text-black truncate block capitalize">
            {{ product.name }}
          </p>
          <div class="flex items-center">
            <p class="text-lg font-semibold text-black cursor-auto my-3">
              {{ store.currencySymbol[product.price.currency]
              }}{{ product.price?.value }}
            </p>
            <!--            <del v-if="product.price.oldValue">-->
            <!--              <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>-->
            <!--            </del>-->
            <div class="ml-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-bag-plus"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                />
                <path
                  d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"
                />
              </svg>
            </div>
          </div>
      </div>
        </li>
    </TransitionGroup>

    <!--   🛑 Product card 1 - Ends Here  -->

  <!-- 🛑 Grid Section - Ends Here -->
</template>

<script>
import { useCatalogStore } from '../utils/store.js';

export default {
  name: 'ProductGrid',
  data: () => ({
    catalog: [],
    errors: [],
  }),
  props: {
    messageId: String,
    searchText: String,
    providers: [],
  },
  async setup() {
    const store = useCatalogStore();
    return { store };
  },
  async created() {
    this.interval = setInterval(this.refreshData, 1000);
    setTimeout(() => clearInterval(this.interval), 5000);
  },

  // in methods property
  methods: {
    refreshData() {
      // fetch data
      this.store.updateCatalog();
    },
    openItem(index, item) {
      console.log(index);
      this.store.selectItem(item);
      this.$router.push({ name: 'item' });
    },
  },
};
</script>


