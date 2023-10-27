import { ref } from "vue";
import { defineStore } from "pinia";
import axios from "redaxios";
import { useStorage } from "@vueuse/core";

export const useCatalogStore = defineStore("catalog", {
  state: () => ({
    messageId: useStorage("messageId", null),
    catalog: useStorage("catalog", null),
    item: useStorage("item", null),
    cart: useStorage("cart", []),
    BAP_URI: "http://localhost:3001", //"http://100.25.229.14",
    BPP_URI: "",
    transactionId: "",
    gps: null,
    currencySymbol: {
      USD: '$',
      INR: '₹'
    },
    currency: 'INR',
    currentSortOption: useStorage("currentSortOption", 0),
    providers: useStorage("providers", []),
    searchText: useStorage("searchText", ""),
    currentProvider: useStorage("currentProvider", []),
    orderItems: {},
    catalogItems: [],
    breadcrumbItems: ref([
      {
        text: "Shop",
        to: "/",
        active: true,
        completed: false
      },
      {
        text: "Summary",
        to: "/summary",
        active: true,
        completed: false
      },
      {
        text: "Shipping",
        to: "/shipping",
        active: false,
        completed: false
      },
      {
        text: "Payment",
        to: "/checkout",
        active: false,
        completed: false
      }
    ])
  }),
  getters: {
    async getItem(index) {
      return this.catalog[index];
    },
    getTotalPrice() {
      return this.getFilteredCart(this.currentProvider).reduce((total, item) => {
        return total + item.price.value * item.count;
      }, 0);
    },
    getFilteredCatalog() {
      let providers = this.providers
        ?.map((p) => (p.checked ? p.label : null))
        .filter((item) => item);

      if (providers?.length) {
        return this.catalog
          ?.map((item) =>
            providers.includes(item.provider_name) ? item : null,
          )
          .filter((item) => item);
      }
      return this.catalog;
    },
  },
  actions: {
    async updateCatalog() {
      let res = await axios.get(
        `${this.BAP_URI}/api/on_search/${this.messageId}`,
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          },
        },
      );
      this.catalog = res.data[0]?.catalog;
      await this.updateProviders();
      this.sortCatalog(this.currentSortOption);
    },
    sortCatalog(id) {
      this.currentSortOption = id;

      if (this.catalog) {
        switch (id) {
          case 0:
            this.catalog.sort((a, b) => {
              let x = a.name.toLowerCase();
              let y = b.name.toLowerCase();

              if (x < y) {
                return -1;
              }
              if (x > y) {
                return 1;
              }
              return 0;
            });
            break;

          case 1:
            this.catalog.sort((a, b) => {
              let x = a.name.toLowerCase();
              let y = b.name.toLowerCase();

              if (x < y) {
                return 1;
              }
              if (x > y) {
                return -1;
              }
              return 0;
            });
            break;

          case 2:
            this.catalog.sort((a, b) => {
              return a.price.value - b.price.value;
            });
            break;

          case 3:
            this.catalog.sort((a, b) => {
              return b.price.value - a.price.value;
            });
            break;
        }
      }
    },
    updateProviders: async function() {
      this.providers = this.getProviders();
    },
    getProviders(itemCatalog) {
      let providers = [];
      if (!itemCatalog) {
        itemCatalog = this.catalog;
      }
      if (itemCatalog) {
        providers = itemCatalog?.map((elm) => {
          return {
            value: elm.provider_id,
            label: elm.provider_name,
            checked: false,
            count: this.getFilteredCart(elm.provider_name).length
          };
        });
        return providers
          ?.filter(
            (value, index, array) =>
              array.findLastIndex((value2) => value2.label === value.label) ===
              index
          )
          .sort((a, b) => {
            return a.label.toLowerCase() - b.label.toLowerCase();
          });
      }
    },
    async selectItem(item) {
      this.item = item;
    },
    getFilteredCart(currentProvider) {
      if (!currentProvider) {
        currentProvider = this.currentProvider;
      }
      if (!this.providers) {
        return [];
      }

      if (!currentProvider) {
        currentProvider = this.providers[0];
      }

      return this.cart.filter((item) => item.provider_name === currentProvider);
    }
  },
});
