import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useRestController } from '@/compossables/Axios'
import type { Crop_payloadT, CropT } from '@/types'

export const useCropStore = defineStore('crop', () => {
  const path = "crop"
  const crops = ref<CropT[]>([] as CropT[])
  const get_crop = computed(() => crops.value)

  function fetch_crop() {
    useRestController(path,"get",{}).then(({ responseDTO })=>{
      // @ts-ignore
      crops.value= responseDTO.value.data
    })
  }

  function add_mimea_crop(payload:Crop_payloadT) {
    useRestController(path,"post",payload).then(()=> fetch_crop())
  }



  return { get_crop, fetch_crop, add_mimea_crop }
})
