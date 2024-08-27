<template>
  <div class="flex flex-col   md:flex-row max-w-9xl mx-auto md:justify-center md:items-center">
    <tabs class="mr-auto" @current_tab=" args => changed_tab_event(args)"></tabs>
    <div class="mt-4 sm:mt-0 sm:flex-none">
      <router-link  to="/charts?deviceId=SL00000001" class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Data analytics</router-link>
    </div>
  </div>
  <div class="px-4 sm:px-6 lg:px-8  max-w-9xl mx-auto">
    <div class="-mx-4 mt-4 ring-1 ring-gray-300 sm:mx-0 sm:rounded-lg">
      <table class="min-w-full divide-y divide-gray-300">
        <thead>
        <tr>
          <th scope="col" class="md:hidden py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 ">Soil properties</th>
          <th scope="col" class="md:table-cell lg:hidden hidden py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 ">N/P/K</th>
          <th scope="col" class="md:table-cell lg:hidden hidden py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 ">Other properties</th>
          <th scope="col" class="hidden py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 lg:table-cell">Nitrogen</th>
          <th scope="col" class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell">Phosphorus</th>
          <th scope="col" class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell">Potassium</th>
          <th scope="col" class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell">Conductivity</th>
          <th scope="col" class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell">Moisture</th>
          <th scope="col" class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell">Temperature</th>
          <th scope="col" class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell">pH</th>
          <th scope="col" class="hidden px-3 py-3.5 text-center text-sm font-semibold text-gray-900 lg:table-cell">Crop</th>
          <th scope="col" class="hidden px-3 py-3.5 text-center text-sm font-semibold text-gray-900 lg:table-cell">Date</th>
          <th scope="col" class="px-3 py-3.5 text-center text-sm font-semibold text-gray-900">Location</th>

        </tr>
        </thead>
        <tbody>
        <tr v-for="(soil, planIdx) in soil_properties" :key="soil.id">
          <td :class="[planIdx === 0 ? '' : 'border-t border-transparent', 'relative py-4 pl-4 pr-3 text-sm sm:pl-6']">
            <div class="font-medium text-gray-500 hidden lg:inline-block">
              {{ soil.nitrogen }} mg/kg
            </div>
            <div class="mt-1 flex flex-col text-gray-500 sm:block md:hidden">
              <span>N/P/K - {{ soil.nitrogen }} / {{ soil.phosphorous }} / {{ soil.potassium }} mg/kg</span>
              <div>Conductivity - {{ soil.conductivity }} µS/cm</div>
              <div>Moisture - {{ soil.moisture }} %</div>
              <div>Temperature - {{ soil.temperature }} °C</div>
              <div>pH - {{ soil.ph }} </div>
              <div class="font-medium">Crop - {{ soil.crop }} </div>
              <div class="font-semibold"> {{ soil.reading_date }} </div>
            </div>
            <div class="mt-1 flex flex-col text-gray-500 sm:hidden md:block lg:hidden">
              <div>Nitrogen - {{ soil.conductivity }} µS/cm</div>
              <div>Phosphorus - {{ soil.moisture }} %</div>
              <div>Potassium - {{ soil.temperature }} °C</div>
              <div>Conductivity - {{ soil.conductivity }} µS/cm</div>
              <div>Moisture - {{ soil.moisture }} %</div>
            </div>
            <div v-if="planIdx !== 0" class="absolute -top-px left-6 right-0 h-px bg-gray-200" />
          </td>
          <td :class="[planIdx === 0 ? '' : 'border-t border-gray-200', 'hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell']">{{ soil.phosphorous }} mg/kg</td>
          <td :class="[planIdx === 0 ? '' : 'border-t border-gray-200', 'hidden px-3 py-3.5 text-sm text-gray-500 md:table-cell lg:hidden']">
            <div>Temperature - {{ soil.temperature }} °C</div>
            <div>pH - {{ soil.ph }} </div>
            <div class="font-medium">Crop - {{ soil.crop }} </div>
            <div class="font-semibold"> {{ soil.reading_date }} </div>
          </td>
          <td :class="[planIdx === 0 ? '' : 'border-t border-gray-200', 'hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell']">{{ soil.potassium }} mg/kg</td>
          <td :class="[planIdx === 0 ? '' : 'border-t border-gray-200', 'hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell']">{{ soil.conductivity }} µS/cm</td>
          <td :class="[planIdx === 0 ? '' : 'border-t border-gray-200', 'hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell']">{{ soil.moisture }} %</td>
          <td :class="[planIdx === 0 ? '' : 'border-t border-gray-200', 'hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell']">{{ soil.temperature }} °C</td>
          <td :class="[planIdx === 0 ? '' : 'border-t border-gray-200', 'hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell']">{{ soil.ph }}</td>
          <td :class="[planIdx === 0 ? '' : 'border-t border-gray-200', 'hidden px-3 py-3.5 text-center text-sm text-gray-500 lg:table-cell']">{{ soil.crop }}</td>
          <td :class="[planIdx === 0 ? '' : 'border-t border-gray-200', 'hidden px-3 py-3.5 text-center text-sm text-gray-500 lg:table-cell']">{{ soil.reading_date }}</td>

          <td :class="[planIdx === 0 ? '' : 'border-t border-transparent', 'relative py-3.5 pl-3 pr-4 text-center font-medium sm:pr-6']">
            <button @click="go_to_maps()" type="button" class="inline-flex items-center rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white" :disabled="soil.isCurrent">
              Go to map
            </button>
            <div v-if="planIdx !== 0" class="absolute -top-px left-0 right-6 h-px bg-gray-200" />
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <pagination :pagination-data="getPagination" @fetchTransaction="(p)=> changePagewithPagination(p)"  class="my-2" />

  </div>
</template>

<script setup lang="ts">
import Pagination from '@/components/navigation/pagination.vue'
import { useSoilStore } from '@/stores/soil/index'
import { onMounted, ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import type { soilT } from '@/types'
import Date_picker from '@/components/utils/date_picker.vue'
import Drop_down from '@/components/utils/drop_down.vue'
import Tabs from '@/components/navigation/tabs.vue'
const page_size = 10;

const soil_store = useSoilStore();
const {fetchSoilByDeviceId,changePage} = soil_store
const {get_soil,getPagination} = storeToRefs(soil_store)
const soil_properties = ref<soilT[]>([] as soilT[])
const go_to_maps = () => {
  window.open('https://maps.google.com/?q=-1.181423908681221, 36.935804866892255', '_blank');

}

onMounted(()=>{
  fetchSoilByDeviceId(0,page_size)
})

watch(get_soil,()=>{
  soil_properties.value = get_soil.value
})
const changePagewithPagination = (param: number) => {
  changePage(param,page_size);
};

const changed_tab_event = (idx:number) =>{
  current_tab.value = idx
}
</script>