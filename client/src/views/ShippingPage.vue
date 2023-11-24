<template>
  <KeepAlive>

    <component :is="ShippingAddress" class="p-4 mx-4 ring ring-lime-500" />
  </KeepAlive>
</template>

<script setup>
import ShippingAddress from "../components/ShippingAddress.vue";</script>

<style scoped>

</style>
