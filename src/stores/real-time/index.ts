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
  const getLatestAir = computed(() => air.value )
  const getLatestSoil = computed(() => soil.value )

  function fetchLatestAir(farmId?:string) {
    let url = `${air_path}`;
    if(farmId){
      url = `${air_path}?farm_id=${farmId}`
    }
    useRestController(url, "get", {}).then(({ responseDTO }) => {
      // @ts-ignore
      air.value= responseDTO.value.data;
    });

  }
  function fetchLatestSoil(farmId?:string) {
    let url = `${soil_path}`;
    if(farmId){
      url = `${soil_path}?farm_id=${farmId}`
    }
    useRestController(url, "get", {}).then(({ responseDTO }) => {
      // @ts-ignore
      soil.value= responseDTO.value.data;
    });


  }

  function fetchLatestData(farmId?:string){
    if(farmId) {
      fetchLatestSoil(farmId)
      fetchLatestAir(farmId)
    }else{
      fetchLatestSoil()
      fetchLatestAir()
    }
  }

  return { getLatestAir, getLatestSoil, fetchLatestData }
})
