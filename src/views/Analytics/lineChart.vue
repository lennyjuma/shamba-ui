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
  name: 'LineChartComponent',
  components: {
    highcharts: HighchartsVue.component,
  },
  setup() {
    const chartOptions = ref<ChartOptions>({
      chart: {
        type: 'line',
      },
      title: {
        text: 'Monthly Average Temperature',
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      },
      yAxis: {
        title: {
          text: 'Temperature (°C)',
        },
      },
      series: [
        {
          name: 'Tokyo',
          data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
        }
      ],
    });

    return {
      chartOptions,
    };
  },
});
</script>
