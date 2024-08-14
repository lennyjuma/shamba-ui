<script setup lang="ts">
import LineChart from '@/views/Analytics/lineChart.vue'

import { onBeforeMount, onMounted, ref, watch } from 'vue'
import Tabs from '@/components/navigation/tabs.vue'
import { useChartsStore } from '@/stores/analytics'
import { storeToRefs } from 'pinia'
import type { seriesT } from '@/types'
import Drop_down from '@/components/utils/drop_down.vue'

let chartsStore = useChartsStore()

const {fetch_chart} = chartsStore
const {get_charts} = storeToRefs(chartsStore)

const npk_categories = ref<seriesT[]>([] as seriesT[])
const conductivity_categories = ref<seriesT[]>([] as seriesT[])
const moisture_categories = ref<seriesT[]>([] as seriesT[])
const temp_categories = ref<seriesT[]>([] as seriesT[])
const pH_categories = ref<seriesT[]>([] as seriesT[])
const air_temp_series = ref([
  {
    name: 'Temperature',
    data: [21, 30, 24,40],
  }
])
const air_humidity_series = ref([
  {
    name: 'Humidity',
    data: [21, 30, 34 ,15],
  }
])
const air_categories = ref(['Sep', 'Oct', 'Nov', 'Dec'],)
const current_tab = ref(0)
const changed_tab_event = (idx:number) =>{
  current_tab.value = idx
}

onBeforeMount(()=>{
 fetch_chart()
})
watch(get_charts,()=>{
  // data must be an array
  npk_categories.value = [get_charts.value.nitrogen,get_charts.value.potassium,get_charts.value.phosphorus]
  moisture_categories.value =[ get_charts.value.moisture]
  pH_categories.value = [get_charts.value.ph]
  conductivity_categories.value = [get_charts.value.conductivity]
  temp_categories.value = [get_charts.value.temperature]
  console.log(get_charts.value.categories)
})

const farms = ref(["Farm1","Farm2","Farm3","Farm3","Farm5","Farm6","Farm7","Farm8","Farm9"])
const frequency = ref(["5","10","15","20","25","30","35"])
const date = ref(["Last month","Last three months","Last six months","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"])
</script>

<template>
  <div class="flex max-w-9xl mx-auto justify-center items-center">
    <tabs class="mr-auto" @current_tab=" args => changed_tab_event(args)"></tabs>
    <div class="flex space-x-2">
      <drop_down :items="farms" :title="`Farm`" class="ml-auto"/>
      <drop_down :items="date" :title="`Date`" class="ml-auto"/>
      <drop_down :items="frequency" :title="`Frequency`" class="ml-auto"/>
    </div>
  </div>

  <div v-if="current_tab === 0">
    <line-chart :x_axis_unit="`mg/kg`" :title="`Nitrogen, Phosphorus , Potassium (N/P/K)`" :series="npk_categories" :categories="get_charts.categories"/>
    <line-chart :x_axis_unit="`µS/cm`" :title="`Electrical Conductivity`" :series="conductivity_categories" :categories="get_charts.categories"/>
    <line-chart  :x_axis_unit="`Percentage (%)`" :title="`Moisture`" :series="moisture_categories" :categories="get_charts.categories"/>
    <line-chart :x_axis_unit="`Degree celsius`" :title="`Soil temperature`" :series="temp_categories" :categories="get_charts.categories"/>
    <line-chart  :x_axis_unit="`pH amount`" :title="`pH`" :series="pH_categories" :categories="get_charts.categories"/>
  </div>
  <div v-else-if="current_tab== 1">
    <line-chart :x_axis_unit="`Percentage (%)`" :title="`Humidity`" :series="air_humidity_series" :categories="air_categories" />
    <line-chart  :x_axis_unit="`Degree celsius`" :title="`Temperature`" :series="air_temp_series" :categories="air_categories"  />
  </div>
  <div v-else>
  </div>

</template>