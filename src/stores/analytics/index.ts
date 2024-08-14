import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type { chartsT } from '@/types'
import { useRestController } from '@/compossables/Axios'
import router from '@/router'

export const useChartsStore = defineStore('charts_store', () => {
  const path = 'analytics'
  const charts = ref<chartsT[]>([] as chartsT[]);
  const get_charts = computed(() => charts.value);

  const fetch_chart = () => {
    const deviceId = `${router.currentRoute.value.query["deviceId"]}`
    const url = `${path}?deviceID=${deviceId}`;
    useRestController(url, "get", {}).then(({ responseDTO }) => {
      // @ts-ignore
      charts.value= responseDTO.value.data;
    });
    return charts.value

  }



  return { get_charts ,fetch_chart}
})
