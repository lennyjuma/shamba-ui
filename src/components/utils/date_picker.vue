<template>
  <div class="">
    <h1 class="block text-sm font-medium leading-6 text-gray-900">Date range</h1>
    <VueDatePicker class="w-auto mt-1" :is-24="true" time-picker-inline v-model="date" range ></VueDatePicker>
  </div>

</template>

<script setup>
import { ref, onMounted, watch, defineEmits } from 'vue'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import { Listbox, ListboxLabel } from '@headlessui/vue'

const date = ref();

let emits = defineEmits(['range'])

// For demo purposes assign range from the current date
onMounted(() => {
  const startDate = new Date();
  const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
  date.value = [startDate, endDate];
})
watch(date, ()=>{
  const day_0 = date.value[0].getDate();
  const month_0 = date.value[0].getMonth() + 1;
  const year_0 = date.value[0].getFullYear();
  const time_0 = date.value[0].getHours();
  const mins_0 = date.value[0].getMinutes();

  const day_1 = date.value[1].getDate();
  const month_1 = date.value[1].getMonth() + 1;
  const year_1 = date.value[1].getFullYear();
  const time_1 = date.value[1].getHours();
  const mins_1 = date.value[1].getMinutes();
  const start_date = `${day_0}/${month_0}/${year_0} ${time_0}:${mins_0}`
  const end_date = `${day_1}/${month_1}/${year_1} ${time_1}:${mins_1}`

  const range = {
    start: start_date,
    end: end_date,
  }
  emits("range", range);
  // console.log(start_date,end_date)
})
</script>