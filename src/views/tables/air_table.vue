<template>
  <div class="px-4 sm:px-6 lg:px-8 max-w-9xl mx-auto">

    <div class="-mx-4 mt-4 mb-3 ring-1 ring-gray-300 sm:mx-0 sm:rounded-lg">
      <table class="min-w-full divide-y divide-gray-300">
        <thead>
        <tr class="mx-2">
          <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-2">Temperature</th>
          <th scope="col" class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell">Humidity</th>
          <th scope="col" class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell">Crop</th>
          <th scope="col" class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell">Date</th>
          <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Location</th>
        </tr>
        </thead>
        <tbody class="divide-y divide-gray-200 bg-white">
        <tr v-for="air in air_properties" :key="air.id">
          <td class="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-4">
            {{ air.temperature }}  °C

          </td>
          <td class="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">{{ air.humidity }} g/m3</td>
          <td class="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">{{ air.crop }}</td>
          <td class="px-3 py-4 text-sm text-gray-500">{{ formatDate(air.readingDate) }}</td>
          <td class="border-t border-transparent', 'relative py-3.5 pl-3 pr-4 text-left font-medium sm:pr-6">
            <button @click="go_to_maps()" type="button" class="inline-flex items-center rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white" >
              Go to map
            </button>
          </td>

        </tr>
        </tbody>
      </table>
    </div>

    <pagination :pagination-data="getPagination" @fetchTransaction="(p)=> changePagewithPagination(p)"  class="my-3" />
  </div>
</template>

<script setup lang="ts">

import { useAirStore } from '@/stores/air'
import { storeToRefs } from 'pinia'
import { onMounted, ref, watch } from 'vue'
import type { airT } from '@/types'
import Pagination from '@/components/navigation/pagination.vue'
import { useShambaStore } from '@/stores/shamba'

let airStore = useAirStore()

let shambaStore = useShambaStore()
const {get_shamba_current} = storeToRefs(shambaStore)
const {fetchAirByDeviceId,changePage} =  airStore
const {get_air,getPagination} =  storeToRefs(airStore)

const page_size = 2;
const air_properties = ref<airT[]>([] as airT[])

const go_to_maps = () => {
  window.open('https://maps.google.com/?q=-1.181423908681221, 36.935804866892255', '_blank');

}
const changePagewithPagination = (param: number) => {
  if(JSON.stringify(get_shamba_current.value) == "{}") {
    changePage(param,page_size);
  }else {
    changePage(param,page_size);
  }

};

watch(get_air,() =>{
  air_properties.value =get_air.value
})
onMounted(()=>{
  if(JSON.stringify(get_shamba_current.value) == "{}") {
    fetchAirByDeviceId(0, page_size)
  }else {
    fetchAirByDeviceId(0, page_size,get_shamba_current.value.id)
  }
})
const formatDate = (tarehe:string) => {
  let date = new Date(tarehe);


// Convert to local readable format with names
  return date.toLocaleString('en-US', {
    weekday: 'long',   // Day name
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })
}
</script>