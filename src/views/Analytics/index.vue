<script setup lang="ts">
import LineChart from '@/views/Analytics/lineChart.vue'

import { onBeforeMount, onMounted, ref, watch } from 'vue'
import Tabs from '@/components/navigation/tabs.vue'
import { useChartsStore } from '@/stores/analytics'
import { storeToRefs } from 'pinia'
import type { rangeT, seriesT } from '@/types'
import Drop_down from '@/components/utils/drop_down.vue'
import Date_picker from '@/components/utils/date_picker.vue'
import Semi_circle_chart from '@/views/Analytics/semi_circle_chart.vue'

let chartsStore = useChartsStore()

const {fetch_charts} = chartsStore
const {get_soil_charts,get_air_charts} = storeToRefs(chartsStore)

const npk_categories = ref<seriesT[]>([] as seriesT[])
const conductivity_categories = ref<seriesT[]>([] as seriesT[])
const moisture_categories = ref<seriesT[]>([] as seriesT[])
const temp_categories = ref<seriesT[]>([] as seriesT[])
const pH_categories = ref<seriesT[]>([] as seriesT[])
const air_temp_series = ref<seriesT[]>([] as seriesT[])
const air_humidity_series =ref<seriesT[]>([] as seriesT[])

const air_categories = ref(['Sep', 'Oct', 'Nov', 'Dec'],)
const current_tab = ref(0)
const changed_tab_event = (idx:number) =>{
  current_tab.value = idx
}

onBeforeMount(()=>{
 fetch_charts("5")
})
watch(get_soil_charts,()=>{
  // data must be an array
  npk_categories.value = [get_soil_charts.value.nitrogen,get_soil_charts.value.potassium,get_soil_charts.value.phosphorus]
  moisture_categories.value =[ get_soil_charts.value.moisture]
  pH_categories.value = [get_soil_charts.value.ph]
  conductivity_categories.value = [get_soil_charts.value.conductivity]
  temp_categories.value = [get_soil_charts.value.temperature]
})
watch(get_air_charts,()=>{
  // data must be an array
  air_temp_series.value = [get_air_charts.value.temp]
  air_humidity_series.value = [get_air_charts.value.humidity]
})

const farms = ref(["Farm1","Farm2","Farm3","Farm3","Farm5","Farm6","Farm7","Farm8","Farm9"])
const frequency = ref(["5","10","15","20","25","30","35"])

const select_item_event = (item:string) =>{
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

</script>

<template>
  <div class="flex flex-col md:flex-row max-w-9xl mx-auto md:justify-center md:items-center">
    <tabs class="mr-auto" :tabw="tabz" @current_tab=" args => changed_tab_event(args)"></tabs>
    <div class="flex flex-col  md:flex-row  md:space-x-2">
      <drop_down @select_item="args => select_item_event(args)" :items="frequency" :title="`Frequency`" class="md:ml-auto"/>
      <drop_down :items="farms" :title="`Farm`" class="md:ml-auto"/>
      <date_picker @range=" (args) => range_date(args)" class="md:mt-auto my-2 md:my-0"/>
    </div>
  </div>

  <div v-if="current_tab === 0">
    <line-chart :x_axis_unit="`mg/kg`" :title="`Nitrogen, Phosphorus , Potassium (N/P/K)`" :series="npk_categories" :categories="get_soil_charts.categories"/>
    <line-chart :x_axis_unit="`µS/cm`" :title="`Electrical Conductivity`" :series="conductivity_categories" :categories="get_soil_charts.categories"/>
    <line-chart  :x_axis_unit="`Percentage (%)`" :title="`Moisture`" :series="moisture_categories" :categories="get_soil_charts.categories"/>
    <line-chart :x_axis_unit="`Degree celsius`" :title="`Soil temperature`" :series="temp_categories" :categories="get_soil_charts.categories"/>
    <line-chart  :x_axis_unit="`pH amount`" :title="`pH`" :series="pH_categories" :categories="get_soil_charts.categories"/>
  </div>
  <div v-else-if="current_tab== 1">
    <line-chart :x_axis_unit="`Percentage (%)`" :title="`Humidity`" :series="air_humidity_series" :categories="air_categories" />
    <line-chart  :x_axis_unit="`Degree celsius`" :title="`Temperature`" :series="air_temp_series" :categories="air_categories"  />
  </div>
  <div class="max-w-9xl mx-auto" v-else>
    <h2 class="max-w-2xl text-xl font-bold tracking-tight text-center sm:text-2xl xl:max-w-none xl:flex-auto mt-2">Soil properties.</h2>
    <div class="grid grid-cols-1 md:grid-cols-4 ">
      <semi_circle_chart :title_data="221" :series="['Nitrogen', 221.9]" />
      <semi_circle_chart :title_data="400" :series="['Potassium', 1558.9]" />
      <semi_circle_chart :title_data="800" :series="['Phosphorus', 58.9]" />
      <semi_circle_chart :title_data="45" :series="['Electrical Conductivity', 58.9]" />
      <semi_circle_chart :title_data="80" :series="['Moisture', 58.9]" />
      <semi_circle_chart :title_data="25" :series="['temperature', 58.9]" />
      <semi_circle_chart :title_data="8" :series="['pH', 58.9]" />
    </div>
    <div class="">
      <h2 class="max-w-2xl text-xl font-bold tracking-tight text-center sm:text-2xl xl:max-w-none xl:flex-auto mt-2">Air properties.</h2>
      <div class="grid grid-cols-1 md:grid-cols-4 ">
        <semi_circle_chart :title_data="27" :series="['Temperature', 58.9]" />
        <semi_circle_chart :title_data="15" :series="['Humidity', 58.9]" />
      </div>
    </div>
  </div>

</template>