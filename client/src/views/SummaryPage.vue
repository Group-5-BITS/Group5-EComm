<script setup>
import SummaryOrders from "../components/SummaryOrders.vue";
import { useCatalogStore } from "../utils/store";

const store = useCatalogStore();

console.log(store.currentProvider);

</script>

<template>
  <SummaryOrders class="m-4 p-2" />
</template>

<style scoped>

</style>
