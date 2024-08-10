import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { soilT } from '@/types'

export const useSoilStore = defineStore('soil_store', () => {
  const soil = ref<soilT[]>([] as soilT[])
  const get_soil = computed(() => soil.value)


  return { get_soil }
})
