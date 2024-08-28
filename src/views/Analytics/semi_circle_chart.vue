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



    const color_scheme = (property:string, value: number) =>{
      let color = ''
      if (property === 'Nitrogen' || property === 'Phosphorus' || property === 'Potassium' ) {
        if(value >= 0 && value <= 500){
          color = 'red'
        }else if(value >= 501 && value <= 1500){
          color = 'orange'
        }else if( value >= 1501 && value <= 2000){
          color = 'green'
        }
      }
      else if (property === 'Temperature' ||property === 'temperature' || property === 'temp' ) {
        if(value >= -40 && value <= 0.0){
          color = 'red'
        }else if(value >= 0.1 && value <= 10.0){
          color = 'orange'
        }else if( value >= 10.1 && value <= 30.0){
          color = 'green'
        }else if( value >= 30.1 && value <= 80.0){
          color = 'red'
        }
      }
      else if (property === 'Moisture' ||property === 'moisture'  ) {
        if(value >= 0 && value <= 10.0){
          color = 'red'
        }else if(value >= 11 && value <= 30.0){
          color = 'orange'
        }else if( value >= 31 && value <= 80.0){
          color = 'green'
        }else if( value >= 81 && value <= 100.0){
          color = 'red'
        }
      }else {
        color = 'blue'
      }

      return {
        name: property,
        y: value,
        color: color // Change color of this segment
      }

    }

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
          color_scheme(props.series[0], props.series[1]),
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
