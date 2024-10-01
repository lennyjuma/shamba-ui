<template>

  <div class="flex flex-col my-4 md:my-0 md:flex-row max-w-9xl mx-auto md:justify-center md:items-center">
    <tabs class="mr-auto ml-4" :tabw="tabs_arr" @current_tab=" args => changed_tab_event(args)"></tabs>
    <div class="flex flex-col  md:flex-row  md:space-x-2 ml-4 md:">
      <date_picker @range=" (args) => range_date(args)" class="md:mt-auto  my-2 md:my-0"/>
    </div>
  </div>
  <div v-show="current_tab == 0">
    <soil_table/>
  </div>
  <div v-show="current_tab == 1">
    <air_table/>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import Date_picker from '@/components/utils/date_picker.vue'
import type { rangeT } from '@/types'
import Soil_table from '@/views/tables/soil_table.vue'
import Tabs from '@/components/navigation/tabs.vue'
import Air_table from '@/views/tables/air_table.vue'
import { useShambaStore } from '@/stores/shamba'
import { storeToRefs } from 'pinia'
import { useSoilStore } from '@/stores/soil'
import { useAirStore } from '@/stores/air'

let shambaStore = useShambaStore()
let soilStore = useSoilStore()
let airStore = useAirStore()
const {fetchSoilByDeviceId} = soilStore
const {fetchAirByDeviceId} = airStore
const {get_shamba_current} = storeToRefs(shambaStore)

const tabs_arr = ref([
  { name: 'Soil', href: '#', count: '52', current: true },
  { name: 'Air', href: '#', count: '6', current: false }
])

const range_date = (item:rangeT)=>{
  console.log(item)
}


const current_tab = ref(0)
const changed_tab_event = (idx:number) =>{
  current_tab.value = idx
}
watch(get_shamba_current,()=>{
  let farmId = get_shamba_current.value.id
  fetchSoilByDeviceId(0,10,farmId)
  fetchAirByDeviceId(0,10,farmId)
})
</script>