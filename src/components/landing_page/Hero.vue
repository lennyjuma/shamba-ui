<template>
  <main class="relative isolate h-3/4">
    <img :src="props.img_url" alt=""
         class="absolute inset-0 -z-40 h-full w-full object-cover object-cover" />
    <div class="absolute -z-10 inset-0 bg-gray-400/90 mix-blend-multiply" />
    <div class="mx-auto max-w-7xl px-6 py-32 text-left sm:py-52 lg:px-8">
      <p class="text-base font-semibold leading-8 capitalize text-white">farm</p>
      <h1 class="mt-4 text-3xl font-bold tracking-tight uppercase text-white sm:text-5xl">Shamba Lab</h1>
      <p class="mt-4 text-semibold text-white sm:mt-6">{{props.description}}</p>
      <div class="mt-10 flex justify-start">
        <a href="#" class="text-sm text-white leading-7"><span aria-hidden="true">&larr;</span> Get yours soon</a>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">

const props = defineProps(['img_url', 'description'])
</script>
