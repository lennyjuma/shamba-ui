<script setup lang="ts">
import BarChartComponent from '@/views/Analytics/barChart.vue'
import LineChart from '@/views/Analytics/lineChart.vue'
import PieChartComponent from '@/views/Analytics/piechart.vue'
import DonutChartComponent from '@/views/Analytics/donutChart.vue'
import Piechart from '@/views/Analytics/piechart.vue'
import { onBeforeMount, onMounted, ref, watch } from 'vue'
import Tabs from '@/components/navigation/tabs.vue'
import { useChartsStore } from '@/stores/analytics'
import { storeToRefs } from 'pinia'
import type { seriesT } from '@/types'

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
const soil_categories = ref(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],)
const air_categories = ref(['Sep', 'Oct', 'Nov', 'Dec'],)
const current_tab = ref(0)
const changed_tab_event = (idx:number) =>{
  current_tab.value = idx
}

onBeforeMount(()=>{
 fetch_chart()
})
watch(get_charts,()=>{
  let npk_series = [];
  npk_series.push(get_charts.value.nitrogen)
  npk_series.push(get_charts.value.potassium)
  npk_series.push(get_charts.value.phosphorus)
  console.log("npk_series",npk_series)
  npk_categories.value = npk_series
  moisture_categories.value = get_charts.value.moisture
  pH_categories.value = get_charts.value.ph
  conductivity_categories.value = get_charts.value.conductivity
  temp_categories.value = get_charts.value.temperature
})
</script>

<template>
  <tabs @current_tab=" args => changed_tab_event(args)"></tabs>
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
  <div v-else>
  </div>

</template>