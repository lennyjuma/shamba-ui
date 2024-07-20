<template>
  <div>
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
        type: 'bar',
      },
      title: {
        text: 'Fruit Consumption',
      },
      xAxis: {
        categories: ['Apples', 'Bananas', 'Oranges'],
      },
      yAxis: {
        title: {
          text: 'Fruit eaten',
        },
      },
      series: [
        {
          name: 'Jane',
          data: [1, 0, 4],
        },
        {
          name: 'John',
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

<style scoped>
/* Add any styles for your component here */
</style>
