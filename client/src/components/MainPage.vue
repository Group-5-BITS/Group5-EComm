<template>
  <div class="flex justify-center">
    <div class="mb-3 inline-flex xl:w-6/12">
      <Listbox as="div" v-model="selected" class="px-3">
        <ListboxLabel class="sr-only"> Change Search Method</ListboxLabel>
        <div class="relative">
          <div
            class="inline-flex shadow-sm rounded-md divide-x divide-indigo-600"
          >
            <div
              class="relative z-0 inline-flex shadow-sm rounded-md divide-x divide-indigo-600"
            >
              <div
                class="relative inline-flex items-center bg-indigo-500 py-2 pl-3 pr-4 border border-transparent rounded-l-md shadow-sm text-white"
              >
                <CheckIcon class="h-5 w-5" aria-hidden="true" />
                <p
                  class="ml-2.5 py-1.5 text-3xl whitespace-nowrap overflow-hidden font-medium"
                >
                  {{ selected.title }}
                </p>
              </div>
              <ListboxButton
                class="relative inline-flex items-center bg-indigo-500 p-2 rounded-l-none rounded-r-md text-2xl font-medium text-white hover:bg-indigo-600 focus:outline-none focus:z-10 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
              >
                <span class="sr-only">Change Search Method</span>
                <ChevronDownIcon
                  class="h-5 w-5 text-white"
                  aria-hidden="true"
                />
              </ListboxButton>
          </div>
            </div>

          <transition
            leave-active-class="transition ease-in duration-100"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <ListboxOptions
              class="origin-top-right absolute right-0 mt-2 w-72 rounded-md shadow-lg overflow-hidden bg-white divide-y divide-gray-200 ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <ListboxOption
                as="template"
                v-for="option in publishingOptions"
                :key="option.title"
                :value="option"
                v-slot="{ active, selected }"
              >
                <li
                  :class="[
                    active ? 'text-white bg-indigo-500' : 'text-gray-900',
                    'cursor-default select-none relative p-4 text-sm',
                  ]"
                >
                  <div class="flex flex-col">
                    <div class="flex justify-between">
                      <p :class="selected ? 'font-semibold' : 'font-normal'">
                        {{ option.title }}
                      </p>
                      <span
                        v-if="selected"
                        :class="active ? 'text-white' : 'text-indigo-500'"
                      >
                        <CheckIcon class="h-5 w-5" aria-hidden="true" />
                      </span>
                    </div>
                    <p
                      :class="[
                        active ? 'text-indigo-200' : 'text-gray-500',
                        'mt-2',
                      ]"
                    >
                      {{ option.description }}
                    </p>
                  </div>
                </li>
              </ListboxOption>
            </ListboxOptions>
          </transition>
        </div>
      </Listbox>


      <input
        type="search"
        class="form-control block w-full px-6 py-1.5 text-3xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        id="exampleSearch"
        placeholder="Type query"
        v-model="searchText"
        v-if="selected.id !== 2"
        v-on:keyup.enter="$emit('search', searchText, selected.id)"
      >

      <div v-else class="flex flex-nowrap px-3">
        <div class="grid grid-cols-2 mr-1.5">
          <label for="min" class="text-base text-center">Min</label>
          <label for="max">Max</label>
          <input
            type="text"
            maxlength="5"
            v-model="min"
            id="min"
            class="px-3 py-1.5 text-center mr-1.5 form-control text-3xl border border-gray-200 rounded-lg bg-gray-50 focus:border-yellow-400 focus:outline-none"
          />

          <input
            type="text"
            maxlength="5"
            v-model="max"
            id="max"
            class="px-3 py-2 text-center text-3xl border border-gray-200 rounded-lg bg-gray-50 focus:border-yellow-400 focus:outline-none"
          />
        </div>
      </div>
      <button
        id="search-submit"
        type="button"
        @click="$emit('search', searchText, selected.id, min, max)"
        class="flex whitespace-nowrap items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Search
      </button>
    </div>
  </div>
</template>

<script>
import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from "@headlessui/vue";
import { CheckIcon, ChevronDownIcon } from "@heroicons/vue/24/solid";

const publishingOptions = [
  {
    id: 0,
    title: "Product Name",
    description: "Search by Product Name",
    current: true
  },
  {
    id: 1,
    title: "Provider Name",
    description: "Search by Store Name",
    current: false
  },
  {
    id: 2,
    title: "Price",
    description: "Search by Price Range",
    current: false
  }
];
export default {
  name: "MainPage",
  components: {
    Listbox,
    ListboxButton,
    ListboxLabel,
    ListboxOption,
    ListboxOptions,
    CheckIcon,
    ChevronDownIcon
  },
  data: () => ({
    publishingOptions: publishingOptions,
    selected: publishingOptions[0],
    searchText: "",
    selectText: "",
    min: 0,
    max: 10000
  }),
  props: {
    // state: Boolean
  },
  methods: {}
};
</script>
