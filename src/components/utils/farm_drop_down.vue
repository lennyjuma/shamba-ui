<template v-if="false" >
  <Listbox as="div" v-model="selected">
    <ListboxLabel class="block text-sm font-medium leading-6 text-gray-900">{{ props.title }}</ListboxLabel>
    <div class="relative mt-2">
      <ListboxButton class="relative w-32 cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
        <span class="block truncate">{{ selected.name }}</span>
        <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
        </span>
      </ListboxButton>

      <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
        <ListboxOptions class="absolute z-10 mt-1 max-h-96 w-full  overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
          <ListboxOption as="template" v-for="item in props.items" :key="item.id" :value="item" v-slot="{ active, selected }">
            <li @click="select_item(item)" :class="[active ? 'bg-indigo-600 text-white' : 'text-gray-900', 'relative cursor-default select-none py-2 pl-8 pr-2']">
              <span :class="[selected ? 'font-semibold' : 'font-normal', 'block truncate']">{{ item.name }}</span>

              <span v-if="selected" :class="[active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 left-0 flex items-center pl-1.5']">
                <CheckIcon class="h-5 w-5" aria-hidden="true" />
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'
import type { shambaDropDownT } from '@/types'
import router from '@/router'
import { useShambaStore } from '@/stores/shamba'


let props = defineProps(["title","items"])
let emits = defineEmits(["select_item"])
const selected = ref<shambaDropDownT>({name:"Please add farms"} as shambaDropDownT)

let shambaStore = useShambaStore()
const {set_current_shamba} = shambaStore


function set_query_farm_id(item_id: string) {
  router.push({
    name: router.currentRoute.value.name, // Use the name of the route
    query: {
      farm_id: item_id // Set your desired query params here
    }
  })
}

const select_item = (item:shambaDropDownT) => {
  console.log(item)
  emits("select_item", item)
  set_query_farm_id(item.id)
  set_current_shamba(item)
}
watch( ()=> props.items ,() =>{
  console.log("watch shamba ********************")
  let active_shamba_name = localStorage.getItem("active_shamba_name")
  let active_shamba_id = localStorage.getItem("active_shamba_id") as string
  if (active_shamba_name){
    const index = props.items.findIndex((obj: shambaDropDownT) => obj.name === active_shamba_name);
    selected.value = props.items[index]
    setTimeout(function() {
      set_query_farm_id(active_shamba_id)
    },1000)
  }else if(props.items.length > 0){
    selected.value = props.items[0]
  }else {
    selected.value = {name: "Please add farm"} as shambaDropDownT
  }
})
// onMounted(() =>{
//   console.log( "post malone",props.items[0])
//   selected.value = props.items[0]
// })

</script>