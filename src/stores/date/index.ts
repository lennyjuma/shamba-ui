import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { rangeDateT } from '@/types'

export const useRangeDateStore = defineStore('range_date', () => {
  const range_date = ref<rangeDateT>()

  const get_range_date = computed(() => range_date.value);
  const set_range_date = (date: rangeDateT) => {
    range_date.value = date
  }
  return { get_range_date, set_range_date }
})
