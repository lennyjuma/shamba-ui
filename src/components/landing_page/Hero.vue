<template>
  <main class="relative isolate h-3/4">
    <img :src="props.img_url" alt=""
         class="absolute inset-0 -z-40 h-full w-full object-cover object-cover" />
    <div class="absolute -z-10 inset-0 bg-gray-400/90 mix-blend-multiply" />
    <div class="mx-auto max-w-7xl px-6 py-32 text-left sm:py-52 lg:px-8">
      <p class="text-base font-semibold leading-8 capitalize text-white">Smart farm</p>
      <h1 class="mt-4 text-3xl font-bold tracking-tight uppercase text-white sm:text-5xl">Shamba Lab</h1>
      <p class="mt-4 text-semibold text-white sm:mt-6">{{props.description}}</p>
      <div class="mt-10 flex items-center justify-start gap-x-6">
        <router-link to="/contact" class="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">Lets talk</router-link>
        <router-link to="/product" class="text-sm/6 font-semibold text-white">Learn more <span aria-hidden="true">→</span></router-link>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">

const props = defineProps(['img_url', 'description'])
</script>
