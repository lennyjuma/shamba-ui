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
        text: 'Soil properties',
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      },
      yAxis: {
        title: {
          text: 'Amount',
        },
      },
      series: [
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
        },
        {
          name: 'Electrical Conductivity',
          data: [17.0, 26.9, 11.5, 29.5, 7.4, 13.5, 12.2, 3.5, 27.3, 18.3, 13.9, 9.6],
        },
      ],
    });

    return {
      chartOptions,
    };
  },
});
</script>
