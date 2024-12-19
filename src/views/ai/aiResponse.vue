<template>
  <div class="bg-white">
    <div class="mx-auto max-w-9xl py-8 sm:px-2 sm:py-2 lg:px-4 mt-2.5">
      <empty-a-i v-if="!ai.summary"/>
      <div v-else class="mx-auto max-w-2xl px-4 lg:max-w-none">
        <div class="max-w-9xl">
          <h2 class="text-3xl sm:text-4xl font-bold mt-2 tracking-tight text-gray-900">AI Analysis and Recommendation </h2>
          <p class="my-3 text-gray-500"><span class="text-gray-800">Summary :</span> {{ai.summary}}</p>
        </div>
        <soil-analysis  :analysis="ai.soilProperties"/>
        <fertiliser-recommendation  :recommendation="ai.fertilizer_recommendation"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import type { aisoilT,  } from '@/types/ai'
import FertiliserRecommendation from '@/views/ai/fertiliserRecommendation.vue'
import SoilAnalysis from '@/views/ai/soilAnalysis.vue'
import { useAIStore } from '@/stores/ai'
import { storeToRefs } from 'pinia'
import EmptyAI from '@/views/ai/emptyAI.vue'

const aiStore = useAIStore()
const { get_ai } = storeToRefs(aiStore)
const { fetch_ai_soil } = aiStore

const ai = ref<aisoilT>({} as aisoilT)
onMounted(function(){
  fetch_ai_soil()
})
watch(get_ai, (newVal) => {
  ai.value = newVal
})

</script>