<script setup lang="ts">
import BarChartComponent from '@/views/Analytics/barChart.vue'
import LineChart from '@/views/Analytics/lineChart.vue'
import Piechart from '@/views/Analytics/piechart.vue'
import PieChartComponent from '@/views/Analytics/piechart.vue'
import DonutChartComponent from '@/views/Analytics/donutChart.vue'
import { ref } from 'vue'
import Tabs from '@/components/navigation/tabs.vue'

const npk_categories = ref(
  [
    {
      name: 'Nitrogen',
      data: [5.0, 6.9, 6.5, 10.5, 8.4, 18.5, 25.2, 26.5, 6.3, 8.3, 13.9, 9.6],
    },
    {
      name: 'Phosphorus',
      data: [7.0, 3.9, 4.5, 14.5, 18.4, 11.5, 10.2, 8.5, 13.3, 18.3, 21.9, 19.6],
    },
    {
      name: 'Potassium',
      data: [13.0, 16.9, 9.5, 24.5, 11.4, 21.5, 15.2, 11.5, 23.3, 10.3, 13.9, 9.6],
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
      data: [5.0, 6.9, 6.5, 10.5, 8.4, 18.5, 25.2, 26.5, 6.3, 8.3, 13.9, 9.6],
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

const categories = ref(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],)
const current_tab = ref(0)
const changed_tab_event = (idx:number) =>{
  current_tab.value = idx
}
</script>

<template>
  <tabs @current_tab=" args => changed_tab_event(args)"></tabs>
  <div v-if="current_tab === 0">
    <line-chart :x_axis_unit="`mg/kg`" :title="`Nitrogen, Phosphorus , Potassium (N/P/K)`" :series="npk_categories" :categories="categories"/>
    <line-chart :x_axis_unit="`µS/cm`" :title="`Electrical Conductivity`" :series="conductivity_categories" :categories="categories"/>
    <line-chart :x_axis_unit="`Percentage (%)`" :title="`Moisture`" :series="moisture_categories" :categories="categories"/>
    <line-chart :x_axis_unit="`Degree celsius`" :title="`Soil temperature`" :series="temp_categories" :categories="categories"/>
    <line-chart :x_axis_unit="`pH amount`" :title="`pH`" :series="pH_categories" :categories="categories"/>
  </div>
  <div v-else-if="current_tab== 1">
    <BarChartComponent/>
  </div>
  <div v-else>
    <BarChartComponent/>
  </div>

</template>