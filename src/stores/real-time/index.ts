import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type { airT, soilT } from '@/types'
import router from '@/router'
import { useRestController } from '@/compossables/Axios'

export const useRealTimeStore = defineStore('real_time', () => {
  const soil_path = "soil/latest"
  const air_path = "air/latest"
  const air = ref<airT>({  } as airT)
  const soil = ref<soilT>({  } as soilT)
  const getAir = computed(() => air.value )
  const getSoil = computed(() => soil.value )
  function fetchLatestAir() {
    const deviceId = `${router.currentRoute.value.query["deviceId"]}`;
    const url = `${air_path}?device_id=${deviceId}`;
    useRestController(url, "get", {}).then(({ responseDTO }) => {
      // @ts-ignore
      air.value= responseDTO.value.data;
    });

  }
  function fetchLatestSoil() {
    const deviceId = `${router.currentRoute.value.query["deviceId"]}`;
    const url = `${soil_path}?device_id=${deviceId}`;
    useRestController(url, "get", {}).then(({ responseDTO }) => {
      // @ts-ignore
      soil.value= responseDTO.value.data;
    });


  }

  return { getAir, getSoil, fetchLatestAir, fetchLatestSoil }
})
