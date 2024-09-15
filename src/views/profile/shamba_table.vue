<template>
  <div class="shamba_table max-w-7xl mx-auto">
    <div class="mx-auto  pt-9 pb-2 px-4 sm:px-6 lg:px-8">
      <div class="sm:flex sm:items-center">
        <div class="sm:flex-auto">
          <h1 class="text-base font-semibold leading-6 text-gray-900">Farms</h1>
          <p class="mt-2 text-sm text-gray-700">A list of registered farms, with the crops planted.</p>
        </div>
        <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <router-link to="/add_farm" type="button" class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add farm</router-link>
        </div>
      </div>
    </div>
    <div class="mt-2 flow-root overflow-hidden ring-1 ring-gray-300 sm:mx-0 sm:rounded-lg mb-3">
      <div class="mx-auto   px-4 sm:px-6 lg:px-8">
        <table class="w-full text-left">
          <thead class="bg-white">
          <tr>
            <th scope="col" class="relative isolate py-3.5 pr-3 text-left text-sm font-semibold text-gray-900">
              Name
              <div class="absolute inset-y-0 right-full -z-10 w-screen border-b border-b-gray-200" />
              <div class="absolute inset-y-0 left-0 -z-10 w-screen border-b border-b-gray-200" />
            </th>
            <th scope="col" class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell">Farming type</th>
            <th scope="col" class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 md:table-cell">Crop(s)</th>
            <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Location</th>
            <th scope="col" class="relative py-3.5 pl-3">
              <span class="sr-only">Edit</span>
            </th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="person in people" :key="person.email">
            <td class="relative py-4 pr-3 text-sm text-gray-900">
              {{ person.name }}
              <div class="absolute bottom-0 right-full h-px w-screen bg-gray-100" />
              <div class="absolute bottom-0 left-0 h-px w-screen bg-gray-100" />
            </td>
            <td class="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">{{ person.title }}</td>
            <td class="hidden px-3 py-4 text-sm text-gray-500 md:table-cell">{{ person.email }}</td>
            <td class="px-3 py-4 text-sm text-gray-500">{{ person.role }}</td>
            <td class="relative py-4 pl-3 text-right text-sm font-medium">
              <a href="#" class="text-indigo-600 hover:text-indigo-900"
              >Edit<span class="sr-only">, {{ person.name }}</span></a
              >
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const people = [
  { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
  { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
  { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
  { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
  { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
  { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
  { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
  { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
  { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
  { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
  // More people...
]
</script>