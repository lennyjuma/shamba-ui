<template>
  <highcharts :options="chartOptions"></highcharts>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';
import Highcharts from 'highcharts';
import HighchartsVue from 'vue-highcharts';
import { Ref } from '@vue/composition-api';

export default {
  components: {
    highcharts: HighchartsVue.component
  },
  setup(): { chartOptions: Ref<Highcharts.Options> } {
    const chartOptions = ref<Highcharts.Options>({
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: '221',
        align: 'center',
        verticalAlign: 'middle',
        y: 60
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      plotOptions: {
        pie: {
          dataLabels: {
            enabled: true,
            distance: -50,
            style: {
              fontWeight: 'bold',
              color: 'white'
            }
          },
          startAngle: -90,
          endAngle: 90,
          center: ['50%', '75%'],
          size: '110%'
        }
      },
      series: [{
        type: 'pie',
        name: 'Browser share',
        innerSize: '50%',
        data: [
          ['Chrome', 58.9],
          {
            name: 'Other',
            y: 41.1,
            dataLabels: {
              enabled: false
            }
          }
        ]
      }]
    });

    return { chartOptions };
  }
};
</script>
