<script setup lang="ts">
import LineChart from '@/views/Analytics/lineChart.vue'

import { onBeforeMount, onMounted, ref, watch } from 'vue'
import Tabs from '@/components/navigation/tabs.vue'
import { useChartsStore } from '@/stores/analytics'
import { storeToRefs } from 'pinia'
import type { rangeT, seriesT, shambaDropDownT } from '@/types'
import Drop_down from '@/components/utils/drop_down.vue'
import Date_picker from '@/components/utils/date_picker.vue'
import Semi_circle_chart from '@/views/Analytics/semi_circle_chart.vue'
import { useRealTimeStore } from '@/stores/real-time'
import { useShambaStore } from '@/stores/shamba'
import Farm_drop_down from '@/components/utils/farm_drop_down.vue'
import { ListboxLabel } from '@headlessui/vue'

let chartsStore = useChartsStore()
let realTimeStore = useRealTimeStore()

let shambaStore = useShambaStore()
const {fetchShamba} = shambaStore
const {get_shamba_drop_down, get_shamba_current} = storeToRefs(shambaStore)
const {fetch_charts} = chartsStore
const {fetchLatestData} = realTimeStore
const {get_soil_charts,get_air_charts} = storeToRefs(chartsStore)
const {getLatestSoil,getLatestAir} = storeToRefs(realTimeStore)

const npk_categories = ref<seriesT[]>([] as seriesT[])
const conductivity_categories = ref<seriesT[]>([] as seriesT[])
const moisture_categories = ref<seriesT[]>([] as seriesT[])
const temp_categories = ref<seriesT[]>([] as seriesT[])
const pH_categories = ref<seriesT[]>([] as seriesT[])
const air_temp_series = ref<seriesT[]>([] as seriesT[])
const air_humidity_series =ref<seriesT[]>([] as seriesT[])

const air_categories = ref(['Sep', 'Oct', 'Nov', 'Dec'],)
const soil_categories = ref(['Sep', 'Oct', 'Nov', 'Dec'],)
const current_tab = ref(0)
const changed_tab_event = (idx:number) =>{
  current_tab.value = idx
}

onBeforeMount(()=>{
 fetch_charts("5");
 fetchLatestData()
  fetchShamba()
})
watch(get_soil_charts,()=>{
  // data must be an array
  npk_categories.value = [get_soil_charts.value.nitrogen,get_soil_charts.value.potassium,get_soil_charts.value.phosphorus]
  moisture_categories.value =[ get_soil_charts.value.moisture]
  pH_categories.value = [get_soil_charts.value.ph]
  conductivity_categories.value = [get_soil_charts.value.conductivity]
  temp_categories.value = [get_soil_charts.value.temperature]
  soil_categories.value = get_soil_charts.value.categories
})
watch(get_air_charts,()=>{
  // data must be an array
  air_temp_series.value = [get_air_charts.value.temp]
  air_humidity_series.value = [get_air_charts.value.humidity]
})

const frequency = ref(["5","10","15","20","25","30","35"])
const page_size = ref("5")
const select_item_event = (item:string) =>{
  page_size.value = item
  fetch_charts(item)
}
const range_date = (item:rangeT)=>{
  console.log(item)
}
const tabz = ref([
  { name: 'Soil', href: '#', count: '52', current: true },
  { name: 'Air', href: '#', count: '6', current: false },
  { name: 'Realtime', href: '#', count: '4', current: false },
])

watch(get_shamba_current,()=>{
  let farmId = get_shamba_current.value.id
  fetch_charts(page_size.value,farmId)
  fetchLatestData(farmId)
})

</script>

<template>
  <div class="flex flex-col my-4 md:my-0 md:flex-row max-w-9xl mx-auto md:justify-center md:items-center">
    <tabs class="mr-auto ml-4" :tabw="tabz" @current_tab=" args => changed_tab_event(args)"></tabs>
    <div class="flex flex-col  md:flex-row  md:space-x-2 ml-4 md:">
      <div v-for="(crop,idx) in getLatestSoil.shamba.crop" :key="crop.id" v-show="current_tab == 2"
           class="block mt-auto capitalize text-normal  font-medium leading-6 text-gray-900" >
        <span class="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">{{ crop.name }}</span>
      </div>

      <drop_down v-if="current_tab !== 2" @select_item="args => select_item_event(args)" :items="frequency" :title="`Frequency`" class=" md:ml-auto"/>
<!--      <farm_drop_down @select_item="args => changed_farm_event(args)  " :items="get_shamba_drop_down" :title="`Farm`" class="md:ml-auto"/>-->
      <date_picker v-if="current_tab !== 2" @range=" (args) => range_date(args)" class="md:mt-auto   my-2 md:my-0"/>
    </div>
  </div>

  <div v-if="current_tab === 0">
    <line-chart :x_axis_unit="`mg/kg`" :title="`Nitrogen, Phosphorus , Potassium (N/P/K)`" :series="npk_categories" :categories="soil_categories"/>
    <line-chart :x_axis_unit="`µS/cm`" :title="`Electrical Conductivity`" :series="conductivity_categories" :categories="soil_categories"/>
    <line-chart  :x_axis_unit="`Percentage (%)`" :title="`Moisture`" :series="moisture_categories" :categories="soil_categories"/>
    <line-chart :x_axis_unit="`Degree celsius`" :title="`Soil temperature`" :series="temp_categories" :categories="soil_categories"/>
    <line-chart  :x_axis_unit="`pH amount`" :title="`pH`" :series="pH_categories" :categories="soil_categories"/>
  </div>
  <div v-else-if="current_tab== 1">
    <line-chart :x_axis_unit="`Percentage (%)`" :title="`Humidity`" :series="air_humidity_series" :categories="air_categories" />
    <line-chart  :x_axis_unit="`Degree celsius`" :title="`Temperature`" :series="air_temp_series" :categories="air_categories"  />
  </div>
  <div class="max-w-9xl mx-auto" v-else>
    <h2 class="max-w-2xl text-xl font-bold tracking-tight text-center sm:text-2xl xl:max-w-none xl:flex-auto mt-2">Soil properties.</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
      <semi_circle_chart :title_data="getLatestSoil.nitrogen + ' mg/kg' " :series="['Nitrogen', Number(getLatestSoil.nitrogen)]" />
      <semi_circle_chart :title_data="getLatestSoil.potassium + ' mg/kg' " :series="['Potassium', Number(getLatestSoil.potassium)]" />
      <semi_circle_chart :title_data="getLatestSoil.phosphorous + ' mg/kg' " :series="['Phosphorus', Number(getLatestSoil.phosphorous)]" />
      <semi_circle_chart :title_data="getLatestSoil.conductivity + ' µS/cm'" :series="['Electrical Conductivity', Number(getLatestSoil.conductivity)]" />
      <semi_circle_chart :title_data="getLatestSoil.moisture + ' %'" :series="['Moisture', Number(getLatestSoil.moisture)]" />
      <semi_circle_chart :title_data="getLatestSoil.temperature + '  °C'" :series="['temperature', Number(getLatestSoil.temperature)]" />
      <semi_circle_chart :title_data="getLatestSoil.ph" :series="['pH', Number(getLatestSoil.ph)]" />
    </div>
    <div class="">
      <h2 class="max-w-2xl text-xl font-bold tracking-tight text-center sm:text-2xl xl:max-w-none xl:flex-auto mt-2">Air properties.</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
        <semi_circle_chart :title_data="getLatestAir.temperature + '  °C'" :series="['Temperature', Number(getLatestAir.temperature)]" />
        <semi_circle_chart :title_data="getLatestAir.humidity + ' %'" :series="['Humidity', Number(getLatestAir.humidity)]" />
      </div>
    </div>
  </div>

</template>