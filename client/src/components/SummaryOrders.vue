<script setup>
import SummaryItemView from "./SummaryItemView.vue";</script>

<template>
  <div>
    <p class="text-xl font-medium">Order Summary</p>
    <p class="text-gray-400">Check your items. And select a suitable shipping method.</p>
    <div class="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
      <Suspense>
        <template #default>
          <SummaryItemView />
        </template>

        <template #fallback>
          <div>
            <div v-for="i in 3" class="flex flex-row  rounded-lg bg-white sm:flex-row animate-pulse">
              <div class="m-2 h-24 w-28 rounded-md border object-cover object-center bg-gray-300" />
              <div class="flex w-full flex-row justify-between  items-center px-4 py-4 text-2xl">
                <div class="font-semibold bg-gray-300 w-[15rem] h-8 rounded-md"></div>
                <span class="float-right text-gray-400 bg-gray-300 h-8 w-[8rem] rounded-md"> </span>
                <p class="text-lg font-bold bg-gray-300 h-8 w-[4rem] rounded-md"></p>
              </div>
            </div>

          </div>
        </template>
      </Suspense>
    </div>
<!--    <p class="flex justify-end">Add Total Cost here</p>-->
    <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
      <RouterLink
        class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        type="button"
        to="/shipping"
      >
        Save
      </RouterLink>
    </div>

  </div>
</template>
