<template>
  <div class="mx-auto h-3/4 my-auto max-w-7xl py-10">
    <div class="border p-4 rounded-md border-gray-900/10 pb-12">
      <h2 class="text-base font-semibold leading-7 text-gray-900">Add a farm</h2>
      <p class="mt-1 text-sm leading-6 text-gray-600">Use accurate information, the name will be used during data upload from the device.</p>

      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="sm:col-span-3">
          <label for="farm_name" class="block text-sm font-medium leading-6 text-gray-900">Farm name</label>
          <div class="mt-2">
            <input type="text" name="farm_name" id="farm_name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>


        <div class="sm:col-span-3">
          <combos :title="`Type of farming`" :items_prop="types_of_farming"/>
        </div>


        <div class="sm:col-span-3">
          <checkbox_drop/>
        </div>
        <div class="sm:col-span-3">
          <label for="location" class="block text-sm font-medium leading-6 text-gray-900">Location (County, Subcounty, location or Nearest town, village)</label>
          <div class="mt-2">
            <input type="text" name="location" id="location" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

<!--        <div class="sm:col-span-3">
          <combos :title="`Country`" :items_prop="countries"/>
        </div>-->


      </div>
      <div class="mt-6 flex items-center justify-end gap-x-6">
        <router-link to="/profile" class="text-sm font-semibold leading-6 text-gray-900">Cancel</router-link>
        <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
      </div>
    </div>

  </div>
</template>

<script setup>
import { PhotoIcon, UserCircleIcon } from '@heroicons/vue/24/solid'
import Combos from '@/components/utils/combos.vue'
import Checkbox_drop from '@/components/utils/checkbox_drop.vue'

const types_of_farming = [
  { id: 1, name: 'Mono cropping' },
  { id: 2, name: 'Mixed cropping' }
]
const countries = [
  { id: 1, name: 'kenya' },
  { id: 3, name: 'Tanzania' },
  { id: 2, name: 'Uganda' }
]
</script>