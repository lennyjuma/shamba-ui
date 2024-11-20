<template>
  <div :id="title" class="`mx-auto max-w-9xl px-6 lg:px-8`">
    <drop_down @select_item="args => select_item_event(args)" :items="chart_type" :title="`Chart type`"/>
    <highcharts :options="chartOptions"></highcharts>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref, watch } from 'vue'
import Highcharts from 'highcharts';
import HighchartsVue from 'vue-highcharts';
import Drop_down from '@/components/utils/drop_down.vue'

interface ChartOptions {
  chart: {
    type: string;
  };
  tooltip?: {
    formatter: any
  };
  title: {
    text: string;
  };
  xAxis: {
    crosshair: boolean;
    tickInterval: number
    // categories: string[];
  };
  yAxis: {
    crosshair: boolean;
    title: {
      text: string;
    };
  };
  series: Array<{
    name: string;
    reading_date: string;
    data: number[];
  }>;
}

export default defineComponent({
  name: 'LineChartComponent',
  components: {
    Drop_down,
    highcharts: HighchartsVue.component,
  },

  props:["title","series","categories","x_axis_unit","crops"],
  setup(props) {
    const chart_type = ref(["Line chart","Bar chart","Bar horizontal chart"])
    const title = ref<string>(props.title);
    const cropStrying = ref("");
    const chartOptions = ref<ChartOptions>({
      chart: {
        type: 'line',
      },
      title: {
        text: props.title,
      },
      xAxis: {
        // categories: props.categories,
        crosshair:false,
        tickInterval:1
      },
      yAxis: {
        crosshair:true,
        title: {
          text: props.x_axis_unit,
        },
      },
      series: props.series,
      tooltip: {
        formatter: function () {
          let data = this.series.data
          let map = data.map(function (item:any) {return item.y; })
          let index = map.indexOf(this.y)
          //console.log(index);
          let category = props.categories[index]
          return `Date: <b>${category}</b><br/>Crop: <b>${cropStrying.value}</b><br/>Property: <b>${this.series.name}</b><br/>Value: <b>${this.y}</b>`;
        }
      }
    });

    const get_crop_names_per_farm = () => props.crops.forEach((crop:string)=>{
      const current_crop_names = cropStrying.value.length > 0 ? cropStrying.value + " ," : cropStrying.value
      cropStrying.value = `  ${current_crop_names} ${crop}`;
      return cropStrying.value;

    });

    watch(() => props.series, (newTitle) => {
      chartOptions.value.series = props.series;
      // chartOptions.value.xAxis.categories = props.categories;
      const charts = document.querySelectorAll(".highcharts-credits")
      //console.log("high charts",charts);
      charts.forEach(item=>{item.classList.add("hidden")})
    })
    watch(() => props.crops, (newTitle) => {
      //console.log("crops prop watch", props.crops);
      cropStrying.value = "";
      get_crop_names_per_farm()

    })
    onMounted(()=>{
      if (props.crops) {
        //console.log("crops prop mount", props.crops);
        get_crop_names_per_farm()
        const charts = document.querySelectorAll(".highcharts-credits")
        //console.log("high charts",charts);
        charts.forEach(item=>{item.classList.add("hidden")})
      }
    })


    const select_item_event = (item:string) => {
      if (item == "Line chart"){
        chartOptions.value.chart.type = "line";
      }else if (item == "Bar chart"){
        chartOptions.value.chart.type = "column";
      }else if (item == "Bar horizontal chart"){
        chartOptions.value.chart.type = "bar";
      }
    }

    return {
      chartOptions,
      chart_type,
      select_item_event,
      title
    };
  },
});
</script>
