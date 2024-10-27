<template>
  <div class=" max-w-7xl">
    <highcharts :options="chartOptions"></highcharts>
  </div>
</template>

<script lang="ts">
import { ref, onMounted, watch } from 'vue'
import Highcharts from 'highcharts';
import HighchartsVue from 'vue-highcharts';
// import { Ref } from '@vue/composition-api';

export default {
  components: {
    highcharts: HighchartsVue.component
  },

  props:["title_data","series"],
  setup(props): { chartOptions: ref<Highcharts.Options> } {
    const color_scheme = (property:string, value: number) =>{
      let color = ''
      let value_format =  0
      if (property === 'Nitrogen' || property === 'Phosphorus' || property === 'Potassium' || property === 'Electrical Conductivity' ) {
        if(value >= 0 && value <= 500){
          color = 'red'
          value_format = 30
        }else if(value >= 501 && value <= 1500){
          color = 'orange'
          value_format = 60
        }else if( value >= 1501 && value <= 2000){
          color = 'green'
          value_format = 90
        }
      }
      else if (property === 'Temperature' ||property === 'temperature' || property === 'temp' ) {
        if(value >= -40 && value <= 0.0){
          color = 'red'
          value_format = 25
        }else if(value >= 0.1 && value <= 10.0){
          color = 'orange'
          value_format = 50
        }else if( value >= 10.1 && value <= 30.0){
          color = 'green'
          value_format = 75
        }else if( value >= 30.1 && value <= 80.0){
          color = 'red'
          value_format = 90
        }
      }
      else if (property === 'Moisture' || property === 'moisture' || property === 'Humidity'  ) {
        if(value >= 0 && value <= 10.0){
          color = 'red'
          value_format = 25
        }else if(value >= 11 && value <= 30.0){
          color = 'orange'
          value_format = 50
        }else if( value >= 31 && value <= 80.0){
          color = 'green'
          value_format = 75
        }else if( value >= 81 && value <= 100.0){
          color = 'red'
          value_format = 90
        }
      }else if(property === 'pH' ) {
        if(value >= 1 && value < 2){
          color = '#FF0000'
          value_format = 60
        }else if(value >= 2 && value < 3){
          color = '#FF7F00'
          value_format = 60
        }else if(value >= 3 && value < 4){
          color = '#FFBF00'
          value_format = 60
        }else if(value >= 4 && value < 5){
          color = '#FFFF00'
          value_format = 60
        }else if(value >= 5 && value < 6){
          color = '#BFFF00'
          value_format = 60
        }else if(value >= 6 && value < 7){
          color = '#80FF00'
          value_format = 60
        }else if(value >= 7 && value < 8){
          color = '#00FF00'
          value_format = 60
        }else if(value >= 8 && value < 9){
          color = '#00FF80'
          value_format = 85
        }else if(value >= 9 && value < 10){
          color = '#00FFFF'
          value_format = 85
        }else if(value >= 10 && value < 11){
          color = '#00BFFF'
          value_format = 85
        }else if(value >= 11 && value < 12){
          color = '#0080FF'
          value_format = 85
        }else if(value >= 12 && value < 13){
          color = '#0040FF'
          value_format = 85
        }else if(value >= 13 && value < 14){
          color = '#0000FF'
          value_format = 85
        }else if(value >= 11 && value < 15){
          color = '#8000FF'
          value_format = 85
        }else if(value >= 0 && value < 1){
          color = '#FF0000'
          value_format = 85
        }

      }
      else {
        color = 'blue'
        value_format = 60
      }

      return {
        name: property,
        y: value_format,
        color: color // Change color of this segment
      }

    }

    const chartOptions = ref<Highcharts.Options>({
      chart: {
        plotBackgroundColor: "white",
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
            y: 100 - color_scheme(props.series[0], props.series[1]).y,
            dataLabels: {
              enabled: false
            },
            color: '#f3f4f6'
          }
        ]
      }]
    });

    watch(() => props.series[1],()=>{
      if (chartOptions.value.series !== undefined){
        let chart_data = chartOptions.value.series[0].data
        chart_data[0] = color_scheme(props.series[0], props.series[1])
        chart_data[1].y = 100 - color_scheme(props.series[0], props.series[1]).y
        console.log("series prop", chart_data );
      }
      if (chartOptions.value.title !== undefined){
        chartOptions.value.title.text = props.title_data + "<br>  " + props.series[0]
      }

    })



    return { chartOptions };
  }
};
</script>
