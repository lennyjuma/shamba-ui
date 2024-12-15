<template>
  <div class="overfLow-hidden bg-white shadow-lg sm:rounded-lg max-w-7xl mx-auto my-5 sm:my-16">
    <div class="px-4 py-6 sm:px-6">
      <h3 class="text-lg/7 font-semibold text-gray-900">Soil properties </h3>
      <p class="mt-1 max-w-2xl text-sm/6 text-gray-600">Soil properties level status explanation and recommendation .</p>
    </div>
    <div class="border-t border-gray-100 mx-5">
      <dl class="divide-y divide-gray-100">
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-bold text-gray-900 sm:text-base">Nitrogen </dt>
          <dl class="sm:col-span-2 ml-1 space-y-1 sm:ml-0 sm:mt-0" >
            <div class="">
              <span class="text-sm font-medium text-gray-700">Status </span>
              <span class="pl-3 sm:pl-5 text-sm/6 text-gray-500  ">Low</span>
            </div>
            <div class=" ">
              <span class="text-sm font-medium text-gray-700">Importance </span>
              <span class="pl-3 sm:pl-5 text-sm/6 text-gray-500  ">Low nitrogen levels can limit maize growth, as it is a critical macronutrient.</span>
            </div>
            <div class=" ">
              <span class="text-sm font-medium text-gray-700">Recommendation </span>
              <span class="pl-3 sm:pl-5 text-sm/6 text-gray-500  ">Supplement with nitrogen-based fertilizers to meet crop demands.</span>
            </div>
          </dl>
        </div>
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-bold text-gray-900 sm:text-base">Potassium </dt>
          <dl class="sm:col-span-2 ml-1 space-y-1 sm:ml-0 sm:mt-0" >
            <div class="">
              <span class="text-sm font-medium text-gray-700">Status </span>
              <span class="pl-3 sm:pl-5 text-sm/6 text-gray-500  ">Low</span>
            </div>
            <div class=" ">
              <span class="text-sm font-medium text-gray-700">Importance </span>
              <span class="pl-3 sm:pl-5 text-sm/6 text-gray-500  ">Low nitrogen levels can limit maize growth, as it is a critical macronutrient.</span>
            </div>
            <div class=" ">
              <span class="text-sm font-medium text-gray-700">Recommendation </span>
              <span class="pl-3 sm:pl-5 text-sm/6 text-gray-500  ">Supplement with nitrogen-based fertilizers to meet crop demands.</span>
            </div>
          </dl>
        </div>
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-bold text-gray-900 sm:text-base">Phosphorus </dt>
          <dl class="sm:col-span-2 ml-1 space-y-1 sm:ml-0 sm:mt-0" >
            <div class="">
              <span class="text-sm font-medium text-gray-700">Status </span>
              <span class="pl-3 sm:pl-5 text-sm/6 text-gray-500  ">Low</span>
            </div>
            <div class=" ">
              <span class="text-sm font-medium text-gray-700">Importance </span>
              <span class="pl-3 sm:pl-5 text-sm/6 text-gray-500  ">Low nitrogen levels can limit maize growth, as it is a critical macronutrient.</span>
            </div>
            <div class=" ">
              <span class="text-sm font-medium text-gray-700">Recommendation </span>
              <span class="pl-3 sm:pl-5 text-sm/6 text-gray-500  ">Supplement with nitrogen-based fertilizers to meet crop demands.</span>
            </div>
          </dl>
        </div>

        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-900">About</dt>
          <dd class="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.</dd>
        </div>
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm/6 font-medium text-gray-900">Attachments</dt>
          <dd class="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            <ul role="list" class="divide-y divide-gray-100 rounded-md border border-gray-200">
              <li class="flex items-center justify-between py-4 pl-4 pr-5 text-sm/6">
                <div class="flex w-0 flex-1 items-center">
                  <PaperClipIcon class="size-5 shrink-0 text-gray-400" aria-hidden="true" />
                  <div class="ml-4 flex min-w-0 flex-1 gap-2">
                    <span class="truncate font-medium">resume_back_end_developer.pdf</span>
                    <span class="shrink-0 text-gray-400">2.4mb</span>
                  </div>
                </div>
                <div class="ml-4 shrink-0">
                  <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Download</a>
                </div>
              </li>
              <li class="flex items-center justify-between py-4 pl-4 pr-5 text-sm/6">
                <div class="flex w-0 flex-1 items-center">
                  <PaperClipIcon class="size-5 shrink-0 text-gray-400" aria-hidden="true" />
                  <div class="ml-4 flex min-w-0 flex-1 gap-2">
                    <span class="truncate font-medium">coverletter_back_end_developer.pdf</span>
                    <span class="shrink-0 text-gray-400">4.5mb</span>
                  </div>
                </div>
                <div class="ml-4 shrink-0">
                  <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Download</a>
                </div>
              </li>
            </ul>
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script setup>
import { PaperClipIcon } from '@heroicons/vue/20/solid'
</script>