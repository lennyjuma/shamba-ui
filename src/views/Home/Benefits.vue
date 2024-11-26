<template>
  <div class="bg-white py-8 sm:py-12">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-5xl lg:mx-0">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Benefits of Shamba Lab</h2>
        <p class="mt-6 text-lg leading-8 text-gray-600">Unlock the power of innovation and growth with Shamba Lab – where cutting-edge technology meets sustainable solutions for a greener tomorrow!.</p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-8 lg:max-w-none">
        <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          <div v-for="feature in features" :key="feature.name" class="flex flex-col">
            <div class="text-base font-semibold leading-7 text-gray-900 flex sm:flex-col">
              <div class="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                <component :is="feature.icon" class="h-6 w-6 te
                xt-white" aria-hidden="true" />
              </div>
              <div class="ml-2  sm:ml-0">{{ feature.name }}</div>
            </div>
            <dd class="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
              <p class="flex-auto">{{ feature.description }}</p>
              <p class="mt-6 hidden">
                <a :href="feature.href" class="text-sm font-semibold leading-6 text-indigo-600">Learn more <span aria-hidden="true">→</span></a>
              </p>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  ClockIcon,
  BanknotesIcon,
  CheckBadgeIcon,
  GlobeEuropeAfricaIcon,
  MapPinIcon,
  SignalIcon,
  RocketLaunchIcon,
  CloudIcon, FaceSmileIcon
} from '@heroicons/vue/24/outline'

const features = [
  {
    name: 'Enhanced Crop Yields',
    description:
      'ABy providing\n' +
      'precise and real-time data on soil health,\n' +
      'ShambaLab helps you optimize nutrient\n' +
      'management, leading to healthier plants and\n' +
      'increased crop yields.',
    icon: RocketLaunchIcon,
  },
  {
    name: 'Cost Efficiency',
    description:
      'Identify and address soil deficiencies and imbalances early, reducing the need for excess fertilizers and inputs, which saves money in the long run.',
    icon: BanknotesIcon,
  },
  {
    name: 'Informed Decision-Making',
    description:
      ' With accurate data on soil and environmental conditions, make well-informed decisions that improve crop management and farm productivity..',
    icon: CheckBadgeIcon,
  },
  {
    name: 'Time Savings',
    description:
      'Automated data collection and seamless online upload minimize manual labor and save valuable time, allowing you to focus on other essential farm activities.',
    icon: ClockIcon,
  },
  {
    name: 'Environmental Stewardship',
    description:
      'Optimize fertilizer use and water management, reducing environmental impact and promoting sustainable agriculture.',
    icon: GlobeEuropeAfricaIcon,
  },
  {
    name: 'Increased Resilience',
    description:
      'Monitor and adjust to changing environmental conditions, enhancing your farm’s resilience to climate variations and extreme weather events.',
    icon: CloudIcon,
  },
  {
    name: 'Precision Agriculture',
    description:
      'Utilize precise GPS-enabled data to manage different zones within your field effectively, tailoring practices to specific needs and boosting overall efficiency.',
    icon: MapPinIcon,
  },
  {
    name: 'User-Friendly Experience',
    description:
      'With an intuitive GUI and easy-to-use features, ShambaLab is accessible to farmers of all technical backgrounds, making advanced soil testing simple and straightforward..',
    icon: FaceSmileIcon,
  },
  {
    name: ' Remote Monitoring',
    description:
      'Access your data from anywhere, anytime, and receive real-time updates, enabling you to manage your farm even when you’re not on-site',
    icon: SignalIcon,
  },
]
</script>