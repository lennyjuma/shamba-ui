import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useRestController } from '@/compossables/Axios'
import type { Crop_payloadT } from '@/types'
import type { aisoilT } from '@/types/ai'
import router from '@/router'

export const useAIStore = defineStore('ai', () => {
  const path = "ai"
  const ai = ref<aisoilT>({} as aisoilT)
  const get_ai = computed(() => ai.value)

  function fetch_ai_soil() {
    const reading_id = router.currentRoute.value.query["reading_id"]
    const path = `ai?soilReadingId=${reading_id}`
    useRestController(path,"get",{}).then(({ responseDTO })=>{
      // @ts-ignore
      ai.value= responseDTO.value.data
    })
  }

  function generate_ai_recommendation() {
    const reading_id = router.currentRoute.value.query["reading_id"]
    const path = `ai?soilReadingId=${reading_id}`
    useRestController(path,"get",{}).then(({ responseDTO })=>{
      // @ts-ignore
      ai.value= responseDTO.value.data
    })
  }



  return { get_ai,  generate_ai_recommendation, fetch_ai_soil }
})
