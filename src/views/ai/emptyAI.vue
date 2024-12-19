<template>
  <div class="text-center mt-10 mb-32">
    <svg class="mx-auto size-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path vector-effect="non-scaling-stroke" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
    </svg>
    <h3 class="mt-2 text-sm font-semibold text-gray-900">No AI recommendation found</h3>
    <p class="mt-1 text-sm text-gray-500">This soil reading do not have an existing AI recommendation.</p>
    <div class="mt-4">
      <button @click="generate_ai_recommendation()" type="button" class="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        <PlusIcon v-if="!get_isLoading" class="-ml-0.5 mr-1.5 size-5" aria-hidden="true" />
        <svg v-else class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <span v-if="!get_isLoading">Generate AI recommendation</span>
        <span v-else>Generating AI recommendation ...</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { PlusIcon } from '@heroicons/vue/20/solid'
import { useAIStore } from '@/stores/ai/index'
import { storeToRefs } from 'pinia'

const aiStore = useAIStore()
const { generate_ai_recommendation } = aiStore
const { get_isLoading } = storeToRefs(aiStore)

</script>