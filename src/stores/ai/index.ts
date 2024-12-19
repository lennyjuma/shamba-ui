import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useRestController } from '@/compossables/Axios'
import type { Crop_payloadT } from '@/types'
import type { aisoilT } from '@/types/ai'

export const useAIStore = defineStore('ai', () => {
  const path = "ai"
  const ai = ref<aisoilT>({} as aisoilT)
  const get_ai = computed(() => ai.value)

  function fetch_ai_soil() {
    useRestController(path,"get",{}).then(({ responseDTO })=>{
      // @ts-ignore
      ai.value= responseDTO.value.data
    })
  }

  function generate_ai_recommendation(payload:Crop_payloadT) {
    useRestController(path,"post",payload);
  }



  return { get_ai,  generate_ai_recommendation, fetch_ai_soil }
})
