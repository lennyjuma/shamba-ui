<template>

  <div class="flex flex-col my-4 md:my-0 md:flex-row max-w-9xl mx-auto md:justify-center md:items-center">
    <tabs class="mr-auto ml-4" :tabw="tabs_arr" @current_tab=" args => changed_tab_event(args)"></tabs>
    <div class="flex flex-col  md:flex-row  md:space-x-2 ml-4 md:">
      <farm_drop_down @select_item="args => changed_farm_event(args)  " :items="get_shamba_drop_down" :title="`Farm`" class="md:ml-auto"/>
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
import Drop_down from '@/components/utils/drop_down.vue'
import type { rangeT, shambaDropDownT } from '@/types'
import Soil_table from '@/views/tables/soil_table.vue'
import Tabs from '@/components/navigation/tabs.vue'
import Air_table from '@/views/tables/air_table.vue'
import { useShambaStore } from '@/stores/shamba'
import { storeToRefs } from 'pinia'
import Farm_drop_down from '@/components/utils/farm_drop_down.vue'
import router from '@/router'
import { useSoilStore } from '@/stores/soil'
import { useAirStore } from '@/stores/air'

let shambaStore = useShambaStore()
let soilStore = useSoilStore()
let airStore = useAirStore()
const {fetchShamba} = shambaStore
const {fetchSoilByDeviceId} = soilStore
const {fetchAirByDeviceId} = airStore
const {get_shamba_drop_down} = storeToRefs(shambaStore)

const tabs_arr = ref([
  { name: 'Soil', href: '#', count: '52', current: true },
  { name: 'Air', href: '#', count: '6', current: false }
])

const range_date = (item:rangeT)=>{
  console.log(item)
}

onMounted(()=>{
  fetchShamba()
})

const current_tab = ref(0)
const changed_tab_event = (idx:number) =>{
  current_tab.value = idx
}
const changed_farm_event = (farm:shambaDropDownT) =>{
  fetchSoilByDeviceId(0,10,farm.id)
  fetchAirByDeviceId(0,10,farm.id)

}

</script>