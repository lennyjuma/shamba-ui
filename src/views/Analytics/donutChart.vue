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
  plotOptions: {
    pie: {
      innerSize: string;
      depth: number;
    };
  };
  series: Array<{
    name: string;
    data: Array<{
      name: string;
      y: number;
    }>;
  }>;
}

export default defineComponent({
  name: 'DonutChartComponent',
  components: {
    highcharts: HighchartsVue.component,
  },
  setup() {
    const chartOptions = ref<ChartOptions>({
      chart: {
        type: 'pie',
      },
      title: {
        text: 'Browser market shares in January, 2021',
      },
      plotOptions: {
        pie: {
          innerSize: '50%', // Makes the pie chart a donut chart
          depth: 45,
        },
      },
      series: [
        {
          name: 'Browsers',
          data: [
            { name: 'Chrome', y: 61.41 },
            { name: 'Internet Explorer', y: 11.84 },
            { name: 'Firefox', y: 10.85 },
            { name: 'Edge', y: 4.67 },
            { name: 'Safari', y: 4.18 },
            { name: 'Sogou Explorer', y: 1.64 },
            { name: 'Opera', y: 1.6 },
            { name: 'QQ', y: 1.2 },
            { name: 'Other', y: 2.61 },
          ],
        },
      ],
    });

    return {
      chartOptions,
    };
  },
});
</script>
