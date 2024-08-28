import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { airT, soilT } from '@/types'

export const useRealTimeStore = defineStore('real_time', () => {
  const air = ref<airT>({  } as airT)
  const soil = ref<soilT>({  } as soilT)
  const getAir = computed(() => air.value )
  const getSoil = computed(() => soil.value )
  function fetchLatestAir() {

  }
  function fetchLatestSoil() {

  }

  return { getAir, getSoil, fetchLatestAir, fetchLatestSoil }
})
