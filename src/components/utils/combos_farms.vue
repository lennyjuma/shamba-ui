<template>
  <Combobox as="div" v-model="selectedPerson" @update:modelValue="query = ''">
    <ComboboxLabel class="block text-sm font-medium leading-6 text-gray-900">{{ props.title }}</ComboboxLabel>
    <div class="relative mt-2">
      <ComboboxInput class="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Type to search crop name" @change="query = $event.target.value" @blur="query = ''" :display-value="(person) => person?.name" />
      <ComboboxButton class="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
        <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
      </ComboboxButton>

      <ComboboxOptions v-if="filteredCrop.length > 0" class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
        <ComboboxOption v-for="crop in filteredCrop" :key="crop.id" :value="crop" as="template" class="active" v-slot="{ active, selected }">
          <li :class="['relative cursor-default select-none py-2 pl-3 pr-9', active ? 'bg-indigo-600 text-white' : 'text-gray-900']">
            <span :class="['block truncate', selected && 'font-semibold']" >
              {{ crop.name }}
            </span>

            <span v-if="selected" :class="['absolute inset-y-0 right-0 flex items-center pr-4', active ? 'text-white' : 'text-indigo-600']">
              <CheckIcon class="h-5 w-5" aria-hidden="true" />
            </span>
          </li>
        </ComboboxOption>
      </ComboboxOptions>
    </div>
  </Combobox>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxLabel,
  ComboboxOption,
  ComboboxOptions,
} from '@headlessui/vue'
import { useShambaStore } from '@/stores/shamba'
import { storeToRefs } from 'pinia'
import type { CropT } from '@/types'
import { useCropStore } from '@/stores/crop'

const cropStore = useCropStore()
const {get_crop} = storeToRefs(cropStore)
const {fetch_crop} = cropStore
const items = ref<CropT[]>([] as CropT[])
interface itemsT {
  id: number
  name: string
}
let props = defineProps(["title", "items_prop", "selected_item"])
let emits = defineEmits(["selected_crop"])

const query = ref('')
const selectedPerson = ref<CropT>({} as CropT)
const filteredCrop = computed(() =>
  query.value === ''
    ? items.value
    : items.value.filter((person) => {
      return person.name.toLowerCase().includes(query.value.toLowerCase())
    })
)
onMounted(()=>{
  fetch_crop()

})

watch(selectedPerson,()=>{
  emits("selected_crop",[selectedPerson.value.id])
})
watch(()=>get_crop.value,()=>{
  items.value = get_crop.value
})

watch(()=>props.selected_item , ()=>{
  console.log("selected",props.selected_item[0])
  selectedPerson.value = props.selected_item[0]
})

</script>