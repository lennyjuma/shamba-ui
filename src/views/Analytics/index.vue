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

let chartsStore = useChartsStore()

const {fetch_chart} = chartsStore
const {get_charts} = storeToRefs(chartsStore)

const npk_categories = ref(
  [
    {
      name: 'Nitrogen',
      data: [5000.0, 6.9, 6.5, 10.5, 80.4, 18.5, 250.2, 26.5, 6.3, 8.3, 1300.9, 9.6],
    },
    {
      name: 'Phosphorus',
      data: [1897.0, 3.9, 400.5, 14.5, 180.4, 11.5, 10.2, 80.5, 13.3, 1808.3, 521.9, 190.6],
    },
    {
      name: 'Potassium',
      data: [130.0, 160.9, 9.5, 24.5, 11.4, 210.5, 15.2, 110.5, 623.3, 100.3, 13.9, 9.6],
    }
  ]
)
const conductivity_categories = ref([
    {
      name: 'Conductivity',
      data: [5.0, 6.9, 6.5, 10.5, 8.4, 18.5, 25.2, 26.5, 6.3, 8.3, 13.9, 9.6],
    }
  ])
const moisture_categories = ref([
    {
      name: 'Moisture',
      data: ["855.0", "6.9", "6.5", 10.5, 8.4, 18.5, 25.2, 26.5, 6.3, 8.3, 13.9, 9.6],
    }
  ])
const temp_categories = ref([
    {
      name: 'Temperature',
      data: [5.0, 6.9, 6.5, 10.5, 8.4, 18.5, 25.2, 26.5, 6.3, 8.3, 13.9, 9.6],
    }
  ])
const pH_categories = ref([
    {
      name: 'pH',
      data: [5.0, 6.9, 6.5, 10.5, 8.4, 18.5, 25.2, 26.5, 6.3, 8.3, 13.9, 9.6],
    }
  ])
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
  pH_categories.value = get_charts.value.pH
  conductivity_categories.value = get_charts.value.conductivity
  temp_categories.value = get_charts.value.temp_categories

  console.log("Moisture",moisture_categories.value)
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