import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type { air_chartsT, chartsT } from '@/types'
import { useRestController } from '@/compossables/Axios'
import router from '@/router'

export const useChartsStore = defineStore('charts_store', () => {
  const soil_path = 'analytics/soil'
  const air_path = 'analytics/air'
  const soil_chart = ref<chartsT>({} as chartsT);
  const air_chart = ref<air_chartsT>({} as air_chartsT);
  const get_soil_charts = computed(() => soil_chart.value);
  const get_air_charts = computed(() => air_chart.value);

  const fetch_soil_chart = (size:string) => {
    const deviceId = `${router.currentRoute.value.query["deviceId"]}`
    const url = `${soil_path}?size=${size}`;
    // const url = `${soil_path}?deviceID=${deviceId}&size=${size}`;
    useRestController(url, "get", {}).then(({ responseDTO }) => {
      // @ts-ignore
      soil_chart.value= responseDTO.value.data;
    });
    return soil_chart.value

  }

  const fetch_air_chart = (size:string) => {
    const deviceId = `${router.currentRoute.value.query["deviceId"]}`
    const url = `${air_path}?size=${size}`;
    // const url = `${air_path}?deviceID=${deviceId}&size=${size}`;
    useRestController(url, "get", {}).then(({ responseDTO }) => {
      // @ts-ignore
      air_chart.value= responseDTO.value.data;
    });
    return soil_chart.value

  }
  const fetch_charts = (size:string) => {
    fetch_soil_chart(size)
    fetch_air_chart(size)
  }



  return { get_soil_charts, get_air_charts , fetch_charts}
})
