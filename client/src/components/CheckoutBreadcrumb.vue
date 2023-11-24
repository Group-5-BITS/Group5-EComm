<template>
  <div>
    <div class="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
      <div class="relative">
        <ol class="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">

          <li
            v-for="(item, index) in store.breadcrumbItems"
          >
            <RouterLink
              :to="item.to"
              class="flex items-center space-x-3 text-left sm:space-x-4"
            >
              <svg
                v-if="index !== 0"
                class="h-4 w-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

              <div v-if="item.completed"
                   class="h-6 w-6 flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold text-white bg-emerald-200 text-emerald-700">
                <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2"
                     viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>

              <div
                v-else
                :class="{'bg-gray-600 ring ring-gray-600 ring-offset-2':item.active, 'bg-gray-400': !item.active}"
                class="flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold text-white"

              >
                {{ index + 1 }}
              </div>

              <span class="font-semibold text-gray-900">{{ item.text }}</span>
            </RouterLink>
          </li>

        </ol>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useCatalogStore } from "../utils/store.js";

const store = useCatalogStore();

</script>
