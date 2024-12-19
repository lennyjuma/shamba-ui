<template>
  <div class="bg-white">
    <div class="mx-auto max-w-9xl py-8 sm:px-2 sm:py-2 lg:px-4 ">
      <div class="mx-auto max-w-2xl px-4 lg:max-w-none">
        <div class="max-w-9xl">
          <h2 class="text-4xl font-bold tracking-tight text-gray-900">AI Analysis and Recommendation </h2>
          <p class="mt-3 text-gray-500"><span class="text-gray-800">Summary :</span> {{ai.summary}}</p>
        </div>
<!--        <div class="mt-5 grid grid-cols-1 gap-x-8 gap-y-2 lg:grid-cols-2">
          <div v-for="(soil_property,id) in ai.soilProperties" :key="id" class="sm:flex lg:block">
            <div class="mt-4 rounded-md shadow-md px-4 py-2 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-2">
              <h3 :class="[ soil_property.name === `pH` ? '' : 'capitalize'   ,'text-base font-medium  text-gray-900']">{{ soil_property.name }}</h3>
              <dl class="sm:col-span-2 ml-1 sm:ml-0 sm:mt-0" >
                <div class="">
                  <span class="text-sm font-medium text-gray-900">Status </span>
                  <span class="pl-3 sm:pl-5 text-sm/6 text-gray-500  ">{{ soil_property.status  }}</span>
                </div>
                <div class=" ">
                  <span class="text-sm font-medium text-gray-700">Importance </span>
                  <span class="pl-3 sm:pl-5 text-sm/6 text-gray-500  ">{{ soil_property.importance }} </span>
                </div>
                <div class=" ">
                  <span class="text-sm font-medium text-gray-700">Recommendation </span>
                  <span class="pl-3 sm:pl-5 text-sm/6 text-gray-500  ">{{ soil_property.recommendation }}</span>
                </div>
              </dl>
            </div>
          </div>
        </div>-->
        <soil-analysis :analysis="ai.soilProperties"/>
        <fertiliser-recommendation :recommendation="ai.fertilizer_recommendation"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { aisoilT, SoilPropertiesT, soilPropertyConfigT } from '@/types/ai'
import FertiliserRecommendation from '@/views/ai/fertiliserRecommendation.vue'
import SoilAnalysis from '@/views/ai/soilAnalysis.vue'

const ai = ref<aisoilT>({
  "crop": "maize",
  "soilProperties": [
    {
      "status": "Low",
      "name": "nitrogen",
      "importance": "High",
      "recommendation": "Increase nitrogen levels to support vegetative growth and yield potential."
    },
    {
      "status": "Adequate",
      "name": "phosphorus",
      "importance": "High",
      "recommendation": "Adequate phosphorus levels; maintain current levels for optimal root development."
    },
    {
      "status": "Optimal",
      "name": "potassium",
      "importance": "High",
      "recommendation": "Potassium levels are sufficient for maize, no additional application required."
    },
    {
      "status": "Optimal",
      "name": "conductivity",
      "importance": "Moderate",
      "recommendation": "Maintain current levels as they are within the acceptable range for maize."
    },
    {
      "status": "Sufficient",
      "name": "moisture",
      "importance": "High",
      "recommendation": "Ensure consistent moisture levels through irrigation to prevent stress."
    },
    {
      "status": "Acceptable",
      "name": "temperature",
      "importance": "Moderate",
      "recommendation": "Monitor temperature as it is within acceptable range for maize growth."
    },
    {
      "status": "null",
      "name": "pH",
      "importance": "null",
      "recommendation": "null"
    }
  ],
  "summary": "The soil conditions are mostly adequate for maize; adjust nitrogen and manage pH for best results.",
  "fertilizer_recommendation": {
    "ideal_type_of_fertilizer": "Balanced NPK fertilizer with emphasis on nitrogen and phosphorus to support growth.",
    "suggested_nutrient_ratios": "A 10-20-10 NPK ratio is recommended to provide balanced nutrition for maize.",
    "application_rate": "Apply fertilizer at a rate of 150 kg/ha to meet nutrient requirements.",
    "application_method": "Broadcast application followed by incorporation into the soil to ensure even distribution.",
    "supplementary_practices": "Consider lime application to reduce soil pH and improve nutrient availability.",
    "importance_of_recommended": "Essential for optimizing maize yield by correcting nutrient imbalances in the soil."
  }
})
// const transformSoilProperties = (obj:SoilPropertiesT)=>{
//   Object.keys(obj).map((key:string) => ({
//     ...obj[key],
//     key, // Optional: include the original key if needed
//   }));
// }
</script>