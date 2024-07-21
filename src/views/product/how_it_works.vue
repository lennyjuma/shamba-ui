<template>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div class="rounded-2xl bg-gray-50 px-6 py-16 sm:p-8">
        <div class="mx-auto max-w-xl lg:max-w-none">
          <div class="text-center">
            <h2 class="text-2xl font-bold tracking-tight text-gray-900">How it works</h2>
            <p class="mt-1 mx-auto max-w-2xl text-sm leading-6 text-gray-500">Three steps to use shamba lab.</p>
          </div>
          <div class="mx-auto mt-12 grid max-w-sm grid-cols-1 gap-x-8 gap-y-10 sm:max-w-none lg:grid-cols-3">
            <div v-for="incentive in incentives" :key="incentive.name" class="text-center sm:flex sm:text-left lg:block lg:text-center">
              <div class="sm:flex-shrink-0">
                <div class="flow-root">
                  <img class="mx-auto h-16 w-16" :src="incentive.imageSrc" alt="" />
                </div>
              </div>
              <div class="mt-3 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                <h3 class="text-sm font-medium text-gray-900">{{ incentive.name }}</h3>
                <p class="mt-2 text-sm text-gray-500">{{ incentive.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import result from "@/assets/svg/result-svgrepo-com.svg"
import switch_on from "@/assets/svg/switch_on.svg"
import insert from "@/assets/svg/soil_insert.svg"
const incentives = [
  {
    name: 'Switch on',
    imageSrc: switch_on,
    description: "Intuitive design, with a single push of a button, to make soil monitoring seamless.",
  },
  {
    name: 'Insert into soil',
    imageSrc: insert,
    description: "Follow simple steps by Sampling unlimited parts of your farm, with each datapoint captured instantly.",
  },
  {
    name: 'Get results',
    imageSrc: result,
    description:
      "Get reports and recommendations on your phone in realtime. .",
  },
]
</script>