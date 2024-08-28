<template>
  <div class="px-4 sm:px-6 lg:px-8 max-w-9xl mx-auto">

    <div class="-mx-4 mt-8 sm:-mx-0">
      <table class="min-w-full divide-y divide-gray-300">
        <thead>
        <tr>
          <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">Temperature</th>
          <th scope="col" class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell">Humidity</th>
          <th scope="col" class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell">Crop</th>
          <th scope="col" class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell">Date</th>
          <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Location</th>
        </tr>
        </thead>
        <tbody class="divide-y divide-gray-200 bg-white">
        <tr v-for="person in people" :key="person.email">
          <td class="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-0">
            {{ person.name }}
            <dl class="font-normal lg:hidden">
              <dt class="sr-only">Title</dt>
              <dd class="mt-1 truncate text-gray-700">{{ person.title }}</dd>
              <dt class="sr-only sm:hidden">Email</dt>
              <dd class="mt-1 truncate text-gray-500 sm:hidden">{{ person.email }}</dd>
            </dl>
          </td>
          <td class="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">{{ person.title }}</td>
          <td class="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">{{ person.email }}</td>
          <td class="px-3 py-4 text-sm text-gray-500">{{ person.role }}</td>
          <td class="border-t border-transparent', 'relative py-3.5 pl-3 pr-4 text-left font-medium sm:pr-6">
            <button @click="go_to_maps()" type="button" class="inline-flex items-center rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white" >
              Go to map
            </button>
          </td>

        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
const people = [
  { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
  // More people...
]

const go_to_maps = () => {
  window.open('https://maps.google.com/?q=-1.181423908681221, 36.935804866892255', '_blank');

}
</script>