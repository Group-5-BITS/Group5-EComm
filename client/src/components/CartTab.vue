<template>
  <div>
    <!--    For Mobile-->
    <div class="sm:hidden">
      <label class="sr-only" for="tabs">Select a tab</label>
      <select
        id="tabs"
        class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        name="tabs"
      >
        <option id="provider" v-for="tab in tabs" :key="tab.name" :selected="tab.current">
          {{ tab.name }}
        </option>
      </select>
    </div>

    <!--    For Desktop-->
    <div class="hidden sm:block">
      <div class="border-b border-gray-200">
        <nav
          aria-label="Tabs"
          class="-mb-px flex align-middle justify-evenly space-x-8"
        >

          <a
            id="provider-tab"
            v-for="(tab, index) in tabs"
            :key="tab.name"
            class="'border-indigo-500 text-indigo-600 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200 whitespace-nowrap flex py-4 px-1 border-b-2 font-medium text-sm cursor-pointer"
            @click="updateCartView(tab, index)"
          >
            <span id="provider-tab-name">
              {{ tab.name }}
            </span>
            <span
              v-if="tab.count"
              :class="[
                            tab.current
                              ? 'bg-indigo-100 text-indigo-600'
                              : 'bg-gray-100 text-gray-900',
                            'hidden ml-3 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block',
                          ]"
            >{{ store.getFilteredCart(tab.name).length }}</span
            >
          </a>
        </nav>
      </div>
    </div>
  </div>

  <slot></slot>
</template>

<script>
import { useCatalogStore } from "../utils/store.js";

export default {
  name: "CartTab",
  setup() {
    const store = useCatalogStore();
    const tabs = store.getProviders(store.cart).map((provider) => {
      return { name: provider.label, current: false, count: store.getFilteredCart(provider.label).length };
    });
    console.log(store);
    return {
      store,
      tabs
    };
  },
  methods: {
    updateCartView(tab, index) {
      this.store.currentProvider = tab.name;
      this.store.currency = this.store.getFilteredCart(tab.name)[0].price.currency
      this.tabs[index].current = true;
      console.log(this.store);
    }
  }
};
</script>
