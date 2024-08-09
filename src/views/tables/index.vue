<template>
  <div class="px-4 sm:px-6 lg:px-8 py-9 max-w-9xl mx-auto">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-base font-semibold leading-6 text-gray-900">Soil properties</h1>
        <p class="mt-2 text-sm text-gray-700">A table with recent soil properties readings</p>
      </div>
      <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
        <router-link  to="/charts"  class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Data analytics</router-link>
      </div>
    </div>
    <div class="-mx-4 mt-10 ring-1 ring-gray-300 sm:mx-0 sm:rounded-lg">
      <table class="min-w-full divide-y divide-gray-300">
        <thead>
        <tr>
          <th scope="col" class="md:hidden py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 ">Soil properties</th>
          <th scope="col" class="md:table-cell lg:hidden hidden py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 ">N/P/K</th>
          <th scope="col" class="md:table-cell lg:hidden hidden py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 ">Other properties</th>
          <th scope="col" class="hidden py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 lg:table-cell">Nitrogen</th>
          <th scope="col" class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell">Phosphorus</th>
          <th scope="col" class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell">Potassium</th>
          <th scope="col" class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell">Conductivity</th>
          <th scope="col" class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell">Moisture</th>
          <th scope="col" class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell">Temperature</th>
          <th scope="col" class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell">pH</th>
          <th scope="col" class="px-3 py-3.5 text-center text-sm font-semibold text-gray-900">Location</th>

        </tr>
        </thead>
        <tbody>
        <tr v-for="(soil, planIdx) in soil_properties" :key="soil.id">
          <td :class="[planIdx === 0 ? '' : 'border-t border-transparent', 'relative py-4 pl-4 pr-3 text-sm sm:pl-6']">
            <div class="font-medium text-gray-900 hidden lg:inline-block">
              {{ soil.nitrogen }} mg/kg
            </div>
            <div class="mt-1 flex flex-col text-gray-500 sm:block md:hidden">
              <span>N/P/K - {{ soil.nitrogen }} / {{ soil.phosphorous }} / {{ soil.potassium }} mg/kg</span>
              <div>Conductivity - {{ soil.conductivity }} µS/cm</div>
              <div>Moisture - {{ soil.moisture }} %</div>
              <div>Temperature - {{ soil.temperature }} °C</div>
              <div>pH - {{ soil.ph }} </div>
            </div>
            <div class="mt-1 flex flex-col text-gray-500 sm:hidden md:block lg:hidden">
              <div>Nitrogen - {{ soil.conductivity }} µS/cm</div>
              <div>Phosphorus - {{ soil.moisture }} %</div>
              <div>Potassium - {{ soil.temperature }} °C</div>
            </div>
            <div v-if="planIdx !== 0" class="absolute -top-px left-6 right-0 h-px bg-gray-200" />
          </td>
          <td :class="[planIdx === 0 ? '' : 'border-t border-gray-200', 'hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell']">{{ soil.phosphorous }} mg/kg</td>
          <td :class="[planIdx === 0 ? '' : 'border-t border-gray-200', 'hidden px-3 py-3.5 text-sm text-gray-500 md:table-cell lg:hidden']">
            <div>Conductivity - {{ soil.conductivity }} µS/cm</div>
            <div>Moisture - {{ soil.moisture }} %</div>
            <div>Temperature - {{ soil.temperature }} °C</div>
            <div>pH - {{ soil.ph }} </div>
          </td>
          <td :class="[planIdx === 0 ? '' : 'border-t border-gray-200', 'hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell']">{{ soil.potassium }} mg/kg</td>
          <td :class="[planIdx === 0 ? '' : 'border-t border-gray-200', 'hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell']">{{ soil.conductivity }} µS/cm</td>
          <td :class="[planIdx === 0 ? '' : 'border-t border-gray-200', 'hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell']">{{ soil.moisture }} %</td>
          <td :class="[planIdx === 0 ? '' : 'border-t border-gray-200', 'hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell']">{{ soil.temperature }} °C</td>
          <td :class="[planIdx === 0 ? '' : 'border-t border-gray-200', 'hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell']">{{ soil.ph }}</td>

          <td :class="[planIdx === 0 ? '' : 'border-t border-transparent', 'relative py-3.5 pl-3 pr-4 text-center font-medium sm:pr-6']">
            <button @click="go_to_maps()" type="button" class="inline-flex items-center rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white" :disabled="soil.isCurrent">
              Go to map<span class="sr-only">, {{ soil.name }}</span>
            </button>
            <div v-if="planIdx !== 0" class="absolute -top-px left-0 right-6 h-px bg-gray-200" />
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <pagination class="mt-2" />

  </div>
</template>

<script setup>
import Pagination from '@/components/navigation/pagination.vue'

const soil_properties = [
  {
    "createdAt": "2024-08-08T20:37:47.204006Z",
    "updatedAt": "2024-08-08T20:37:47.204006Z",
    "id": "05e7f8f8-5c29-4f13-905c-3702579e4f9e",
    "nitrogen": "18",
    "phosphorous": "956",
    "potassium": "16",
    "conductivity": "40",
    "moisture": "37.42",
    "temperature": "24.71",
    "deviceId": "865992037613876",
    "ph": "8.70"
  },
  {
    "createdAt": "2024-08-08T10:40:07.322968Z",
    "updatedAt": "2024-08-08T10:40:07.322968Z",
    "id": "09cb7643-56fb-423a-b8d7-cd009921dd41",
    "nitrogen": "13",
    "phosphorous": "375",
    "potassium": "20",
    "conductivity": "85",
    "moisture": "46.14",
    "temperature": "25.25",
    "deviceId": "865992037613876",
    "ph": "8.34"
  },
  {
    "createdAt": "2024-08-08T21:01:21.438817Z",
    "updatedAt": "2024-08-08T21:01:21.438817Z",
    "id": "0a280dd0-c61d-4d73-8427-9aaa06b220c6",
    "nitrogen": "17",
    "phosphorous": "645",
    "potassium": "16",
    "conductivity": "43",
    "moisture": "32.85",
    "temperature": "24.89",
    "deviceId": "865992037613876",
    "ph": "8.68"
  },
  {
    "createdAt": "2024-08-08T11:12:03.133298Z",
    "updatedAt": "2024-08-08T11:12:03.133298Z",
    "id": "0b0701f2-8faf-4eb7-aad5-38742f54c309",
    "nitrogen": "13",
    "phosphorous": "165",
    "potassium": "20",
    "conductivity": "86",
    "moisture": "51.85",
    "temperature": "25.04",
    "deviceId": "865992037613876",
    "ph": "8.40"
  },
  {
    "createdAt": "2024-08-09T07:23:37.345773Z",
    "updatedAt": "2024-08-09T07:23:37.345773Z",
    "id": "0c6ac576-e52e-4b64-9665-12f205e93360",
    "nitrogen": "15",
    "phosphorous": 34,
    "potassium": "18",
    "conductivity": "60",
    "moisture": "42.85",
    "temperature": "24.92",
    "deviceId": "865992037613876",
    "ph": "8.52"
  },
  {
    "createdAt": "2024-08-08T09:20:21.675782Z",
    "updatedAt": "2024-08-08T09:20:21.675782Z",
    "id": "0dea0505-488d-4938-b9b0-17fcd4af7da0",
    "nitrogen": "14",
    "phosphorous": 87,
    "potassium": "19",
    "conductivity": "70",
    "moisture": "63.85",
    "temperature": "21.81",
    "deviceId": "865992037613876",
    "ph": "8.14"
  },
  {
    "createdAt": "2024-08-08T16:52:18.817054Z",
    "updatedAt": "2024-08-08T16:52:18.817054Z",
    "id": "103a34dc-a960-4a58-8f2f-ff5cc7c1f55c",
    "nitrogen": "14",
    "phosphorous": "844",
    "potassium": "20",
    "conductivity": "78",
    "moisture": "44.14",
    "temperature": "24.59",
    "deviceId": "865992037613876",
    "ph": "8.35"
  },
  {
    "createdAt": "2024-08-07T23:26:27.930211Z",
    "updatedAt": "2024-08-07T23:26:27.930211Z",
    "id": "11317ca9-ed08-433b-8efd-3a96b7e8b121",
    "nitrogen": "10",
    "phosphorous": "87",
    "potassium": "24",
    "conductivity": "117",
    "moisture": "55.14",
    "temperature": "25.16",
    "deviceId": "865992037613876",
    "ph": "8.18"
  },
  {
    "createdAt": "2024-08-09T07:28:51.486407Z",
    "updatedAt": "2024-08-09T07:28:51.486407Z",
    "id": "12ff1773-54a8-4372-8f6c-536c1e9e5fb1",
    "nitrogen": "15",
    "phosphorous": "65",
    "potassium": "18",
    "conductivity": "61",
    "moisture": "42.85",
    "temperature": "24.86",
    "deviceId": "865992037613876",
    "ph": "8.50"
  },
  {
    "createdAt": "2024-08-08T17:55:59.203464Z",
    "updatedAt": "2024-08-08T17:55:59.203464Z",
    "id": "15f4b833-c61d-485a-902f-8e4ff8fc884a",
    "nitrogen": "14",
    "phosphorous": "234",
    "potassium": "20",
    "conductivity": "77",
    "moisture": "42.85",
    "temperature": "25.67",
    "deviceId": "865992037613876",
    "ph": "8.37"
  } // More soil_properties...
]
const go_to_maps = () => {
  window.open('https://maps.google.com/?q=-1.181423908681221, 36.935804866892255', '_blank');

}
</script>