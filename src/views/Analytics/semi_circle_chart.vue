<template>
  <div class=" max-w-7xl">
    <highcharts :options="chartOptions"></highcharts>
  </div>
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

  props:["title_data","series"],
  setup(props): { chartOptions: Ref<Highcharts.Options> } {
    const chartOptions = ref<Highcharts.Options>({
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text:props.title_data + "<br>  " + props.series[0] ,
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
            enabled: false,
            distance: -30,
            style: {
              fontWeight: 'bold',
              color: 'white'
            }
          },
          startAngle: -90,
          endAngle: 90,
          center: ['50%', '75%'],
          size: '105%'
        }
      },
      series: [{
        type: 'pie',
        name: 'Value',
        innerSize: '70%',
        data: [
          props.series,
          {
            name: 'Deficit',
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
