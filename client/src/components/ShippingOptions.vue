<template>
  <div>
    <p class="mt-8 text-lg font-medium">Shipping Methods</p>
    <form class="mt-5 grid gap-6">
      <div class="relative">
        <input id="radio_1" v-model="shippingOption" class="peer hidden" name="radio" type="radio" value="fedex" />
        <span
          class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
        <label
          class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
          for="radio_1">
          <img alt="" class="w-14 object-contain"
               src="https://freepngimg.com/thumb/logo/142375-logo-fedex-free-download-image.png" />
          <div class="ml-5">
            <span class="mt-2 font-semibold">Fedex Delivery</span>
            <p class="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p>
          </div>
        </label>
      </div>
      <div class="relative">
        <input id="radio_2" v-model="shippingOption" class="peer hidden" name="radio" type="radio" value="ekart" />
        <span
          class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
        <label
          class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
          for="radio_2">
          <img alt="" class="w-14 object-contain bg-[#0c243b]"
               src="https://ekartlogistics.com/assets/images/ekWhiteLogo.png" />
          <div class="ml-5">
            <span class="mt-2 font-semibold">Fedex Delivery</span>
            <p class="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p>
          </div>
        </label>
      </div>
    </form>
  </div>
</template>
<script setup>
import { computed } from "vue";

const props = defineProps(["shippingOption"]);
const emit = defineEmits(["update:shippingOption"]);

const shippingOption = computed({
  get() {
    return props.shippingOption;
  },
  set(value) {
    emit("update:shippingOption", value);
  }
});
</script>
