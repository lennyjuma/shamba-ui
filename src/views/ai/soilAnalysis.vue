<template>
  <div class="border rounded-md border-gray-200 py-6 px-4 my-4">
    <div class="px-0">
      <h3 class="text-base/7 font-semibold text-gray-900">Soil readings analysis</h3>
      <p class="mt-1 max-w-2xl text-sm/6 text-gray-500">Personal details and application.</p>
    </div>
    <div class="mt-3 grid grid-cols-1 gap-x-8 gap-y-2 lg:grid-cols-2">
      <div v-for="(soil_property,id) in analysis" :key="id" class="sm:flex lg:block">
        <div class="mt-4 rounded-md shadow-sm px-4 py-2 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-2">
          <h3 :class="[ soil_property.name === `pH` ? '' : 'capitalize'   ,'text-base font-medium  text-gray-700']">{{ soil_property.name }}</h3>
          <dl class="sm:col-span-2 ml-1 sm:ml-0 sm:mt-0" >
            <div class="">
              <span class="text-sm font-medium text-gray-600">Status </span>
              <span class="pl-3 sm:pl-5 text-sm/6 text-gray-500  ">{{ soil_property.status  }}</span>
            </div>
            <div class=" ">
              <span class="text-sm font-medium text-gray-600">Importance </span>
              <span class="pl-3 sm:pl-5 text-sm/6 text-gray-500  ">{{ soil_property.importance }} </span>
            </div>
            <div class=" ">
              <span class="text-sm font-medium text-gray-600">Recommendation </span>
              <span class="pl-3 sm:pl-5 text-sm/6 text-gray-500  ">{{ soil_property.recommendation }}</span>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FertilizerRecommendation, soilPropertyConfigT } from '@/types/ai.js'
import { defineProps } from 'vue'
const props = defineProps<{
  analysis: soilPropertyConfigT[]
}>()
</script>