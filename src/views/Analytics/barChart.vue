<template>
  <div class="mx-auto max-w-9xl px-6 lg:px-8">
    <highcharts :options="chartOptions"></highcharts>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Highcharts from 'highcharts';
import HighchartsVue from 'vue-highcharts';

interface ChartOptions {
  chart: {
    type: string;
  };
  title: {
    text: string;
  };
  xAxis: {
    categories: string[];
  };
  yAxis: {
    title: {
      text: string;
    };
  };
  series: Array<{
    name: string;
    data: number[];
  }>;
}

export default defineComponent({
  name: 'BarChartComponent',
  components: {
    highcharts: HighchartsVue.component,
  },
  setup() {
    const chartOptions = ref<ChartOptions>({
      chart: {
        type: 'column',
      },
      title: {
        text: 'Air properties',
      },
      xAxis: {
        categories: ['January', 'February', 'March'],
      },
      yAxis: {
        title: {
          text: 'Fruit eaten',
        },
      },
      series: [
        {
          name: 'Humidity',
          data: [1, 30, 4],
        },
        {
          name: 'Temperature',
          data: [5, 7, 3],
        },
      ],
    });

    return {
      chartOptions,
    };
  },
});
</script>