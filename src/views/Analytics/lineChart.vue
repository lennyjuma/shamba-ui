<template>
  <div :id="title" class="mx-auto max-w-9xl px-6 lg:px-8">
    <drop_down @select_item="args => select_item_event(args)" :items="chart_type" :title="`Chart type`" class=""/>
    <highcharts :options="chartOptions"></highcharts>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import Highcharts from 'highcharts';
import HighchartsVue from 'vue-highcharts';
import Drop_down from '@/components/utils/drop_down.vue'
import { i } from 'vite/dist/node/types.d-aGj9QkWt'

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
    Drop_down,
    highcharts: HighchartsVue.component,
  },

  props:["title","series","categories","x_axis_unit"],
  setup(props) {
    const chart_type = ref(["Line chart","Bar chart","Bar horizontal chart"])
    const title = ref<string>(props.title);
    const chartOptions = ref<ChartOptions>({
      chart: {
        type: 'line',
      },
      title: {
        text: props.title,
      },
      xAxis: {
        categories: props.categories,
      },
      yAxis: {
        title: {
          text: props.x_axis_unit,
        },
      },
      series: props.series,
    });

    watch(() => props.series, (newTitle) => {
      chartOptions.value.series = props.series;
      chartOptions.value.xAxis.categories = props.categories;
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
