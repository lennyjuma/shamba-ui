<template>
  <div class="bg-white">
    <main class="isolate">
      <div class="mx-auto mt-5 max-w-7xl px-6 sm:mt-10 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h2 class="text-xl md:text-lg font-bold tracking-tight text-gray-900">Properties Shamba Lab monitors</h2>
        </div>
        <dl class="mx-auto mt-4 grid max-w-2xl  grid-cols-1 gap-x-8 gap-y-6 text-base leading-7 sm:grid-cols-2 lg:mx-auto lg:max-w-7xl lg:grid-cols-3">
          <div v-for="value in values" :key="value.name">
            <dt class="font-semibold text-gray-700">{{ value.name }}</dt>
            <dd class="mt-1 text-gray-500">{{ value.description }}</dd>
          </div>
        </dl>
      </div>

    </main>
  </div>
</template>

<script setup>


const values = [
  {
    name: 'Nitrogen',
    description:
      'Essential for leafy growth and overall plant health.',
  },
  {
    name: 'Phosphorus',
    description:
      'Critical for root development and flower/fruit production',
  },
  {
    name: 'Potassium',
    description:
      'Enhances disease resistance and water regulation.',
  },
  {
    name: 'Electrical Conductivity',
    description:
      'Indicates soil salinity, affecting water uptake.',
  },
  {
    name: 'Moisture',
    description:
      'Key for understanding soil water content.',
  },
  {
    name: 'Temperature',
    description:
      'Influences seed germination and microbial activity.',
  },
  {
    name: 'pH',
    description:
      'Affects nutrient availability and overall soil health.',
  },
]
</script>