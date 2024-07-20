<script setup lang="ts">
import BarChartComponent from '@/views/Analytics/barChart.vue'
import LineChart from '@/views/Analytics/lineChart.vue'
import Piechart from '@/views/Analytics/piechart.vue'
import PieChartComponent from '@/views/Analytics/piechart.vue'
import DonutChartComponent from '@/views/Analytics/donutChart.vue'
</script>

<template>
  <line-chart/>
  <BarChartComponent/>
  <PieChartComponent/>
  <DonutChartComponent/>
</template>