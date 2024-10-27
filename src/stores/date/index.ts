import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { DateT, rangeDateT } from '@/types'

export const useRangeDateStore = defineStore('range_date', () => {
  const range_date = ref<rangeDateT>({} as rangeDateT )
  const start_date = ref<string>()
  const end_date = ref<string>()

  const get_range_date = computed(() => range_date.value);
  const get_start_date = computed(() => start_date.value);
  const get_end_date = computed(() => end_date.value);
  const set_date = (date: string, state:string) => {
    if (state === 'start') {
      start_date.value = date
      range_date.value.start = date
    }else {
      end_date.value = date
      range_date.value.end = date
    }
  }
  return { get_range_date, set_date , get_end_date,get_start_date}
})
