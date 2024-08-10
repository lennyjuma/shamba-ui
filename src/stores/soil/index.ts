import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { soilT } from '@/types'
import { useRestController } from '@/compossables/Axios'
import router from '@/router'

export const useSoilStore = defineStore('soil_store', () => {
  const path = 'soil'
  const soil = ref<soilT[]>([] as soilT[]);

  const get_soil = computed(() => soil.value);

  async function fetchSoilByDeviceId() {
    const deviceId = `${router.currentRoute.value.query["deviceId"]}`;
    const url = `${path}/device?device_id=${deviceId}&page=0&size=2`;
    useRestController(url, "get", {}).then(({ responseDTO }) => {
      // @ts-ignore
      soil.value= responseDTO.value.data.content;
    });
  }


  return { get_soil, fetchSoilByDeviceId }
})
