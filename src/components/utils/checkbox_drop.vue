<template>
  <Listbox as="div" v-model="selected">
    <ListboxLabel class="block text-sm font-medium leading-6 text-gray-900">Crop</ListboxLabel>
    <div class="relative mt-2">
      <ListboxButton class="relative flex space-x-2 w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
        <div v-show="selected.length > 0" v-for="(crop,index) in selected" :key="crop" class=" flex flex-row truncate">
          <p>{{ crop }}</p>
          <span v-if="selected.length -1 !== index" >,</span>
        </div>
        <span v-show="selected.length == 0" class="block truncate">Select crop(s)</span>
        <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
        </span>
      </ListboxButton>

      <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
        <ListboxOptions class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
          <div class=" divide-y divide-gray-200 ">
            <div v-for="(person, personIdx) in people" :key="personIdx" class="relative flex items-start px-5 py-4">
              <div class="min-w-0 flex-1 text-sm leading-6">
                <label :for="`person-${person.id}`" class="select-none flex font-medium text-gray-900">{{ person.name }}</label>
              </div>
              <div  class="ml-3 flex h-6 items-center">
                <input v-model="selected" :id="`person-${person.id}`" :name="`person-${person.id}`" :value="person.name" placeholder="Select crop(s)" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
              </div>
            </div>
          </div>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { Listbox, ListboxButton, ListboxLabel, ListboxOptions } from '@headlessui/vue'
import {  ChevronUpDownIcon } from '@heroicons/vue/20/solid'

const people = [
  { id: 1, name: 'Maize' },
  { id: 2, name: 'Wheat' },
  { id: 3, name: 'Beans' },
  { id: 4, name: 'Peas' },
  { id: 5, name: 'avocado' },
  { id: 5, name: 'other' },
]

const emits = defineEmits(["select_crops"])

const selected = ref([] as string[])

watch(selected, (val) => {
  emits("select_crops", val)
})
</script>