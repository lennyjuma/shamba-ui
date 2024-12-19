<template>
  <div class="border rounded-md border-gray-200 py-6 px-4 my-4">
    <div class="px-0">
      <h3 class="text-base/7 font-semibold text-gray-900">Fertiliser Recommendation</h3>
      <p class="mt-1 max-w-2xl text-sm/6 text-gray-500">Personal details and application.</p>
    </div>
    <div class="mt-6 border-t border-gray-100">
      <dl class="divide-y divide-gray-100">
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm/6 font-medium text-gray-900">Ideal fertiliser to use </dt>
          <dd class="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{{ recommendation.ideal_type_of_fertilizer }}</dd>
        </div>
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm/6 font-medium text-gray-900">Suggested nutrients ratio</dt>
          <dd class="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{{ recommendation.suggested_nutrient_ratios }}</dd>
        </div>
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm/6 font-medium text-gray-900">Application rate</dt>
          <dd class="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{{ recommendation.application_rate }}</dd>
        </div>
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm/6 font-medium text-gray-900">Application method</dt>
          <dd class="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{{ recommendation.application_method }}</dd>
        </div>
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm/6 font-medium text-gray-900">Supplementary practices</dt>
          <dd class="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{{ recommendation.supplementary_practices  }}</dd>
        </div>
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm/6 font-medium text-gray-900">Importance of this recommendation</dt>
          <dd class="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{{ recommendation.importance_of_recommended  }}</dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FertilizerRecommendation } from '@/types/ai.js'
import { defineProps } from 'vue'
const props = defineProps<{
  recommendation: FertilizerRecommendation
}>()
</script>