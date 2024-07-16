<template>
  <div class="bg-white">
    <div class="mx-auto mt-2 lg:mt-5 max-w-7xl py-10">
      <div class="mx-auto max-w-lg md:grid md:max-w-none md:grid-rows-2 md:gap-8">
        <div>
          <h2 class="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">Sales Support</h2>
          <div class="mt-3">
            <p class="text-lg text-gray-500">Reach out to us today and let's start a conversation that will lead to exciting opportunities for your business.</p>
          </div>
          <div class="mt-9">
            <div class="flex">
              <div class="flex-shrink-0">
                <PhoneIcon class="h-6 w-6 text-gray-400" aria-hidden="true" />
              </div>
              <div class="ml-3 text-base text-gray-500">
                <p>+25470523645</p>
                <p class="mt-1">Mon-Fri 8am to 6pm EAT</p>
              </div>
            </div>
            <div class="mt-6 flex">
              <div class="flex-shrink-0">
                <EnvelopeIcon class="h-6 w-6 text-gray-400" aria-hidden="true" />
              </div>
              <div class="ml-3 text-base text-gray-500">
                <p>support@shambalab.com</p>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-12 sm:mt-16 md:mt-0">
          <h2 class="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">Technical Support</h2>
          <div class="mt-3">
            <p class="text-lg text-gray-500">Reach out for expert support, troubleshooting, and guidance on all our products and services to ensure seamless operations.</p>
          </div>
          <div class="mt-9">
            <div class="flex">
              <div class="flex-shrink-0">
                <PhoneIcon class="h-6 w-6 text-gray-400" aria-hidden="true" />
              </div>
              <div class="ml-3 text-base text-gray-500">
                <p>+254706754174</p>
                <p class="mt-1">Mon-Fri 8am to 6pm EAT</p>
              </div>
            </div>
            <div class="mt-6 flex">
              <div class="flex-shrink-0">
                <EnvelopeIcon class="h-6 w-6 text-gray-400" aria-hidden="true" />
              </div>
              <div class="ml-3 text-base text-gray-500">
                <p>support@shambalab.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { EnvelopeIcon, PhoneIcon } from '@heroicons/vue/24/outline'
</script>