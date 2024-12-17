<template>
  <div class="flex min-h-full flex-col">
    <main class="mx-auto flex w-full max-w-7xl flex-auto flex-col justify-center px-6 py-24 sm:py-64 lg:px-8">
      <h1 class="mt-4 text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">Welcome on board</h1>
      <p class="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">Your email has been verified successfully.</p>
      <div class="sm:col-span-3 mt-10">
        <label for="country" class="block text-sm font-light leading-6 text-gray-900">Verified your phone number ?
          <router-link to="/verify/otp" class="text-indigo-600 font-medium text-base ">&emsp13;
            <span class="underline">Verify phone number</span>
          </router-link>
        </label>
      </div>
      <div class="mt-10 hidden">
        <router-link to="/" class="text-sm/7 font-semibold text-indigo-600"><span aria-hidden="true">&larr;</span> Back to home</router-link>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useOTPStore } from '@/stores/otp/index.js'

const {verify_Email} = useOTPStore()
onMounted(function() {
  verify_Email()
  console.log('emailverified')
})
</script>