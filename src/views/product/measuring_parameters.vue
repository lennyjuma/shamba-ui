<template>
  <fieldset class="max-w-7xl mx-auto px-6 pb-8">
    <legend class="text-xl md:text-lg font-semibold leading-6 text-gray-900">Measuring parameters sensitivity</legend>
    <RadioGroup class="mt-3 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">

      <RadioGroupOption as="template"  value="kkk" v-slot="{ active, checked }">
        <div :class="[active ? 'border-indigo-600 ring-2 ring-indigo-600' : 'border-gray-300', 'relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none']">
          <span class="flex flex-1">
            <span class="flex flex-col">
              <span class="block text-sm font-medium text-gray-900"> Nitrogen/Phosphorus/Potassium </span>
              <span class="mt-1 flex items-center text-sm text-gray-500"> Measuring range: 1-1999 mg/kg(mg/L) </span>
              <span class="mt-1 flex items-center text-sm text-gray-500"> Resolution：1 mg/kg(mg/L) </span>
            </span>
          </span>
        </div>
      </RadioGroupOption>

      <RadioGroupOption as="template"  value="kkk" v-slot="{ active, checked }">
        <div :class="[active ? 'border-indigo-600 ring-2 ring-indigo-600' : 'border-gray-300', 'relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none']">
          <span class="flex flex-1">
            <span class="flex flex-col">
              <span class="block text-sm font-medium text-gray-900"> pH </span>
              <span class="mt-1 flex items-center text-sm text-gray-500"> Measuring range: 0-14 pH </span>
              <span class="mt-1 flex items-center text-sm text-gray-500"> Accuracy: ±0.01PH </span>
            </span>
          </span>
        </div>
      </RadioGroupOption>

      <RadioGroupOption as="template"  value="kkk" v-slot="{ active, checked }">
        <div :class="[active ? 'border-indigo-600 ring-2 ring-indigo-600' : 'border-gray-300', 'relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none']">
          <span class="flex flex-1">
            <span class="flex flex-col">
              <span class="block text-sm font-medium text-gray-900"> Conductivity (EC) </span>
              <span class="mt-1 flex items-center text-sm text-gray-500"> Measuring range: 0-2000us/cm </span>
              <span class="mt-1 flex items-start text-sm text-gray-500"> Accuracy：<div class="grid grid-rows-2">  <span>0-1000 us/cm range is ±1%</span>  <span>0-1000 us/cm range is ±1%</span> </div>
              </span>
            </span>
          </span>
        </div>
      </RadioGroupOption>

      <RadioGroupOption as="template"  value="kkk" v-slot="{ active, checked }">
        <div :class="[active ? 'border-indigo-600 ring-2 ring-indigo-600' : 'border-gray-300', 'relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none']">
          <span class="flex flex-1">
            <span class="flex flex-col">
              <span class="block text-sm font-medium text-gray-900"> Moisture </span>
              <span class="mt-1 flex items-center text-sm text-gray-500"> Measuring range: 0-100%RH </span>
              <span class="mt-1 flex items-start text-sm text-gray-500"> Accuracy：<div class="grid grid-rows-2">  <span>1% within 0-50%</span>  <span>2% within 50-100%</span> </div>
              </span>
            </span>
          </span>
        </div>
      </RadioGroupOption>

      <RadioGroupOption as="template"  value="kkk" v-slot="{ active, checked }">
        <div :class="[active ? 'border-indigo-600 ring-2 ring-indigo-600' : 'border-gray-300', 'relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none']">
          <span class="flex flex-1">
            <span class="flex flex-col">
              <span class="block text-sm font-medium text-gray-900"> Temperature </span>
              <span class="mt-1 flex items-center text-sm text-gray-500"> Measuring range:  -40℃ to 80℃ </span>
              <span class="mt-1 flex items-center text-sm text-gray-500"> Accuracy: ±0.5℃ (25℃)</span>
            </span>
          </span>
        </div>
      </RadioGroupOption>
    </RadioGroup>
  </fieldset>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RadioGroup, RadioGroupOption } from '@headlessui/vue'
import { CheckCircleIcon } from '@heroicons/vue/20/solid'

const mailingLists = [
  { id: 1, title: 'Nitrogen/Phosphorus/Potassium', description: 'Measuring range: 1-1999 mg/kg(mg/L)', users: '621 users' },
  { id: 2, title: 'Existing Customers', description: 'Last message sent 2 weeks ago', users: '1200 users' },
  { id: 3, title: 'Trial Users', description: 'Last message sent 4 days ago', users: '2740 users' },
]

const selectedMailingLists = ref(mailingLists[0])
</script>