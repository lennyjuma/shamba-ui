<template>
  <div class="w-full">
    <h1 class="block text-sm font-medium leading-6 text-gray-900">{{ props.name }}</h1>
    <VueDatePicker class=" mt-1 " @date-update="handleDate" @cleared="clearDate()" :is-24="true" time-picker-inline v-model="date" :placeholder="`Pick ${props.name.toLowerCase()}`" ></VueDatePicker>
  </div>

</template>

<script setup lang="ts">
import { ref, onMounted, watch, defineEmits } from 'vue'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import { useRangeDateStore } from '@/stores/date/index'

let rangeDateStore = useRangeDateStore()
const {set_date} = rangeDateStore

const startDate = new Date();
const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
const date = ref();

let emits = defineEmits(['range'])
let props = defineProps(['name','state'])


const handleDate = (date:Date) => {

  console.log("Date wwwwwwwwwwwwww", date)
  const day_0 = date.getDate();
  const month_0 = date.getMonth() + 1;
  const year_0 = date.getFullYear();
  const time_0 = date.getHours();
  const mins_0 = date.getMinutes();

  const start_date = `${day_0}/${month_0}/${year_0} ${time_0}:${mins_0}`
  set_date(start_date,props.state)
  emits("range","ss");
  console.log("Date bla bla", start_date)
}
/*
watch(date, ()=>{
  const day_0 = date[0].getDate();
  const month_0 = date[0].getMonth() + 1;
  const year_0 = date[0].getFullYear();
  const time_0 = date[0].getHours();
  const mins_0 = date[0].getMinutes();

  const day_1 = date[1].getDate();
  const month_1 = date[1].getMonth() + 1;
  const year_1 = date[1].getFullYear();
  const time_1 = date[1].getHours();
  const mins_1 = date[1].getMinutes();
  const start_date = `${day_0}/${month_0}/${year_0} ${time_0}:${mins_0}`
  const end_date = `${day_1}/${month_1}/${year_1} ${time_1}:${mins_1}`

  const range = {
    start: start_date,
    end: end_date,
  }
  set_range_date(range)
  emits("range", range);
  console.log("Date bla bla", date[0])

})*/
onMounted(()=>{

  if(props.name.toLowerCase() == "start date"){
    const start_date = localStorage.getItem("start_date") as string
    getDate(start_date)
  }else {
    const end_date = localStorage.getItem("end_date")  as string
    getDate(end_date)
  }
})
const getDate = (dateString:string) => {
  if (dateString !== null ) {
  const [datePart, timePart] = dateString.split(' ');

// Split the date into day, month, and year
  const [day, month, year] = datePart.split('/').map(Number);

// Split the time into hours and minutes
  const [hours, minutes] = timePart.split(':').map(Number);

// Create the Date object
  const dateR = new Date(year, month - 1, day, hours, minutes);
  date.value = dateR;

  }
}
function clearDate(){
  if(props.name.toLowerCase() == "start date"){
    localStorage.removeItem("start_date")
    set_date("clear",props.state)
    emits("range","ss");
  }else {
    localStorage.removeItem("end_date")
    set_date("clear",props.state)
    emits("range","ss");
  }


}
</script>