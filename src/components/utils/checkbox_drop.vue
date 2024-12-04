<template>
  <Listbox as="div" v-model="selected">
    <ListboxLabel class="block text-sm font-medium leading-6 text-gray-900">Crops</ListboxLabel>
    <div v-if="add_crop" class="mt-2 flex">
      <input v-model="crop_payload.name" type="text" name="farm_name" id="farm_name" autocomplete="given-name" placeholder="Enter crop name "
             class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
      <div id="price-currency" @click="add_crop = false" class="shrink-0 select-none text-base bg-white text-indigo-600 shadow-2xl hover:scale-105 rounded-md m-auto p-1.5 mx-2 font-medium sm:text-sm/6">Cancel</div>
      <div id="price-currency" @click="add_mimea()" class="shrink-0 select-none text-base text-white bg-indigo-600 rounded-md hover:scale-105 m-auto p-1.5 mx-2 font-medium sm:text-sm/6">Add crop</div>
    </div>
    <div v-if="!add_crop" class="relative mt-2">
      <ListboxButton class="relative flex space-x-2 w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
        <div v-show="selected_mimea.length > 0" v-for="(crop,index) in selected_mimea" :key="crop" class=" flex flex-row truncate">
          <p>{{ crop }}</p>
          <span v-if="selected_mimea.length -1 !== index" >,</span>
        </div>
        <span v-show="selected_mimea.length == 0" class="block truncate">Select crop(s)</span>
        <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
        </span>
      </ListboxButton>

      <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
        <ListboxOptions class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
          <div  class=" divide-y divide-gray-200 ">
            <div class="flex justify-between items-center mx-3">
              <div class="w-full mx-auto my-2 sm:max-w-xs">
                <label for="search" class="sr-only">Search</label>
                <div class="relative flex">
                  <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                      <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <input  v-model="query" id="search" name="search" class="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Search" type="search">
                </div>
              </div>
              <div class="min-w-0 flex-1 flex justify-center hidden text-sm leading-6">
                <label for="other" class="select-none flex text-white bg-indigo-600 rounded-md m-auto p-1.5 mx-2 font-medium mx-auto">Add crop</label>
              </div>
            </div>

            <div v-for="(person, personIdx) in people" :key="personIdx" class="relative flex items-start px-5 py-4">
              <div class="min-w-0 flex-1 text-sm leading-6">
                <label :for="`person-${person.id}`" class="select-none flex font-medium text-gray-900">{{ person.name }}</label>
              </div>
              <div  class="ml-3 flex h-6 items-center">
                <input v-model="selected" :id="`person-${person.id}`" :name="`person-${person.id}`" :value="person.id" placeholder="Select crop(s)" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
              </div>
            </div>
            <div @click="add_crop = true" class="relative flex items-start px-5 py-4">
              <div class="min-w-0 flex-1 flex justify-center text-sm leading-6">
                <label for="other" class="select-none flex text-white bg-indigo-600 rounded-md m-auto p-1.5 mx-2 font-medium mx-auto">New crop</label>
              </div>
              <div  class="ml-3 flex h-6 items-center">
                <input  id="`other`" name="other"   type="button" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
              </div>
            </div>

          </div>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>

<script setup lang="ts">
import { onBeforeMount, onMounted, ref, watch } from 'vue'
import { Listbox, ListboxButton, ListboxLabel, ListboxOptions } from '@headlessui/vue'
import {  ChevronUpDownIcon } from '@heroicons/vue/20/solid'
import { useCropStore } from '@/stores/crop'
import { storeToRefs } from 'pinia'
import type { Crop_payloadT, CropT } from '@/types'
import router from '@/router'

const props = defineProps(["selected_crops","selected_crops_id"])
const cropStore = useCropStore()
const {fetch_crop, add_mimea_crop} = cropStore
const {get_crop} = storeToRefs(cropStore)
const people = ref<CropT[]>([] as CropT[])
const emits = defineEmits(["select_crops","removedCrops","addedCrops"])

const selected = ref([] as string[])
const selected_mimea = ref([] as string[])
const add_crop = ref(false)
const query = ref('')
const crop_payload = ref<Crop_payloadT>({} as Crop_payloadT)

onBeforeMount(()=>{
  fetch_crop()
})
watch(query,()=>{
  console.log("query",query.value)
  people.value = query.value === ''
    ? get_crop.value
    : get_crop.value.filter((person) => {
      return person.name.toLowerCase().includes(query.value.toLowerCase())
    })
  console.log("names",people.value)
})
watch(get_crop, () => {
  people.value = get_crop.value
  console.log("get_crop component",get_crop.value)
})
watch(selected, (val) => {
  emits("select_crops", val)
  if (get_crop.value.length !== 0) {
    console.log("crop",get_crop.value)
    selected_mimea.value = get_crop.value.filter((crop) => val.includes(crop.id)).map((crop) => crop.name)
  }
  if( router.currentRoute.value.name == "Edit Farm") {
    const removed_crops = getArrayDiff(props.selected_crops_id, selected.value)
    const added_crops = getArrayDiff(selected.value, props.selected_crops_id)
    emits('addedCrops', added_crops)
    emits('removedCrops', removed_crops)
    console.log("added_crops",added_crops)
    console.log("removed_crops",removed_crops)
  }
})
watch(()=>props.selected_crops, () => {
  selected_mimea.value = props.selected_crops
  selected.value = props.selected_crops_id
  console.log("props.selected_crops",props.selected_crops)
})

const add_mimea= () => {
  add_crop.value = false
  add_mimea_crop(crop_payload.value)
}

function getArrayDiff(arr1:string[], arr2:string[]){
  return  arr1.filter(x => !arr2.includes(x));
}

</script>