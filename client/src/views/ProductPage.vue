<template>

  <Suspense>
    <ProductFilter>
      <template #fallback>
        <SummaryOrders />
      </template>
      <ProductGrid />
    </ProductFilter>


  </Suspense>


</template>

<script setup>
import ProductFilter from "../components/ProductFilter.vue";
import ProductGrid from "../components/ProductGrid.vue";
import SummaryOrders from "../components/SummaryOrders.vue";</script>

<style scoped>

</style>
