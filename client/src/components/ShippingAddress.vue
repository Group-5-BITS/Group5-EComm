<template>
  <div class="mt-10 sm:mt-5">
    <div class="md:grid md:grid-cols-2 md:gap-6">
      <div class="mt-5 md:col-span-2 md:mt-0">
        <form action="#" method="POST">
          <div class="overflow-hidden shadow sm:rounded-md">
            <div class="bg-white px-4 py-5 sm:p-6">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-3">
                  <label
                    class="block text-sm font-medium text-gray-700"
                    for="first-name"
                  >First name</label
                  >
                  <input
                    id="first-name"
                    v-model="userDetails.firstName"
                    autocomplete="given-name"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    name="first-name"
                    type="text"
                  />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label
                    class="block text-sm font-medium text-gray-700"
                    for="last-name"
                  >Last name</label
                  >
                  <input
                    id="last-name"
                    v-model.trim="userDetails.lastName"
                    autocomplete="family-name"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    name="last-name"
                    type="text"
                  />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label
                    class="block text-sm font-medium text-gray-700"
                    for="contact"
                  >Contact Number</label
                  >
                  <input
                    id="contact"
                    v-model.number="userDetails.contact"
                    autocomplete="tel"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    name="contact"
                    pattern="[0-9]{10}"
                    type="text"
                  />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label
                    class="block text-sm font-medium text-gray-700"
                    for="email-address"
                  >Email address</label
                  >
                  <input
                    id="email-address"
                    v-model.trim="userDetails.email"
                    autocomplete="email"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    name="email-address"
                    type="text"
                  />
                </div>

                <div class="col-span-6 sm:col-span-4">
                  <label
                    class="block text-sm font-medium text-gray-700"
                    for="street-address"
                  >Street address</label
                  >
                  <input
                    id="street-address"
                    v-model.trim="userDetails.street"
                    autocomplete="street-address"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    name="street-address"
                    type="text"
                  />
                </div>
                <div class="col-span-6 sm:col-span-2">
                  <label
                    class="block text-sm font-medium text-gray-700"
                    for="locality"
                  >Locality</label
                  >
                  <input
                    id="locality"
                    v-model.trim="userDetails.locality"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    name="Locality"
                    type="text"
                  />
                </div>

                <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                  <label
                    class="block text-sm font-medium text-gray-700"
                    for="city"
                  >City</label
                  >
                  <input
                    id="city"
                    v-model.trim="userDetails.city"
                    autocomplete="address-level2"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    name="city"
                    type="text"
                  />
                </div>

                <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label
                    class="block text-sm font-medium text-gray-700"
                    for="region"
                  >State / Province</label
                  >
                  <input
                    id="region"
                    v-model.trim="userDetails.state"
                    autocomplete="address-level1"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    name="region"
                    type="text"
                  />
                </div>

                <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label
                    class="block text-sm font-medium text-gray-700"
                    for="postal-code"
                  >ZIP / Postal code</label
                  >
                  <input
                    id="postal-code"
                    v-model.number="userDetails.pin"
                    autocomplete="postal-code"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    name="postal-code"
                    type="text"
                  />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label
                    class="block text-sm font-medium text-gray-700"
                    for="country"
                  >Country</label
                  >
                  <select
                    id="country"
                    v-model.lazy="userDetails.country"
                    autocomplete="country-name"
                    class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    name="country"
                  >
                    <option disabled value="">
                      Please Select one option
                    </option>
                    <option>India</option>
                    <option>United Kingdom</option>
                    <option>United States</option>
                  </select>
                </div>
              </div>
            </div>
            <ShippingOptions
              :shippingOption="userDetails.type"
              @update:shippingOption="
                  (newValue) => (userDetails.type = newValue)
                "
            />
            <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
              <button
                class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                type="button"
                @click="initiateCheckout()"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import ShippingOptions from "./ShippingOptions.vue";
import { useCatalogStore } from "../utils/store";
import axios from "redaxios";
import { useRouter } from "vue-router";

let userDetails = reactive({
  firstName: null,
  lastName: null,
  contact: null,
  email: null,
  street: null,
  locality: null,
  city: null,
  state: null,
  country: null,
  pin: null,
  type: null
});

const store = useCatalogStore();
const router = useRouter();

let items = store.orderItems;
let bppURI = store.BPP_URI;

async function initiateCheckout() {
  let request = {
    bppURI: bppURI,
    transactionId: store.transactionId,
    items: items,
    userDetails
  };
  let res = await axios.post(
    `${store.BAP_URI}/api/checkout/initiateCheckout`,
    request,
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      }
    }
  );

  await router.push('/checkout')
  console.log(res.data);
}
</script>

<style scoped></style>
