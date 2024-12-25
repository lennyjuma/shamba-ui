<template>
  <div class="bg-white">
    <div class="mx-auto max-w-9xl px-6 py-4 sm:py-6 lg:px-8 lg:py-6 my-5">
      <div class="mx-auto  max-w-7xl  divide-y divide-gray-900/10">
        <h2 class="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
        <dl class="mt-10 space-y-6 divide-y divide-gray-900/10">
          <Disclosure as="div" v-for="faq in faqs" :key="faq.question" class="pt-6" v-slot="{ open }">
            <dt>
              <DisclosureButton class="flex w-full items-start justify-between text-left text-gray-900">
                <span class="text-base font-semibold leading-7">{{ faq.question }}</span>
                <span class="ml-6 flex h-7 items-center">
                  <PlusSmallIcon v-if="!open" class="h-6 w-6" aria-hidden="true" />
                  <MinusSmallIcon v-else class="h-6 w-6" aria-hidden="true" />
                </span>
              </DisclosureButton>
            </dt>
            <DisclosurePanel as="dd" class="mt-2 pr-12">
              <p class="text-base leading-7 text-gray-600">{{ faq.answer }}</p>
            </DisclosurePanel>
          </Disclosure>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/vue/24/outline'

const faqs = [
  {
    question: "Why is regular soil testing necessary?",
    answer:
      "Regular soil testing enhances agricultural and gardening soil productivity by detecting nutrient shortages and recommending the appropriate supplements for optimal growth. It also serves as a diagnostic tool for issues such as nutrient and salt excess, high pH, insufficient organic material, and inadequate drainage..",
  },
  {
    question: "When and how often should I test?",
    answer:
      "Soils can be tested any time during the year. However, allow enough time for the analysis and for fertilizer and lime application after initial analysis. Lime reacts slowly and, if possible, it should be mixed with the soil two to three months before planting. A soil test should be conducted at least 1 time every year and multiple times depending on the crop rotation schedule or as recommended by an agronomist.",
  },
  {
    question: "How do i get the result?",
    answer:
      "Results on basic soil analysis are available on site.",
  },
]
</script>