<template>
  <div class="bg-white" v-if="store.catalog?.length">
    <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 class="sr-only">Products</h2>

      <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        <a v-for="(product, index) in catalog" :key="product.name" @click="openItem(index)" class="group">
          <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
            <img :src="product.images[0]" :alt="product.name" v-if="product.images?.length>0" class="h-full w-full object-cover object-center group-hover:opacity-75" />
            <img :src="`https://picsum.photos/420/327?random=${index}`" v-else height="420"  class="h-full w-full object-cover object-center group-hover:opacity-75"  alt="">
          </div>
          <h3 class="mt-4 text-sm text-gray-700">{{ product.name }}</h3>
          <p class="mt-1 text-lg font-medium text-gray-900">{{ product.price.value }}</p>
        </a>
      </div>
    </div>
  </div>
  <h1 v-else>No Product Found</h1>
</template>

<script>

// import axios from "axios";
import { useCatalogStore } from "../utils/store.js";

export default {
  components: {   },
  data: () => ({
    catalog: [],
    errors: []
  }),
  props: {
    messageId: String,
    searchText: String
  },
  setup () {
    const store = useCatalogStore();
    return {store};
  },
  async created() {
    this.interval = setInterval(this.refreshData, 500)
    setTimeout(()=> clearInterval(this.interval), 25000)
    this.catalog = this.store.catalog;
  },


// in methods property
  methods: {
    refreshData() {
      // fetch data
      this.store.updateCatalog().then(()=>{
        this.catalog = this.store.catalog;


      })

    },
    openItem(index) {
      console.log(index)
      this.store.selectItem(index);
      this.$router.push({name: "item" });
    }
  }


}

</script>
