import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { shambaResT, shambaT } from '@/types'
import router from '@/router'
import { useRestController } from '@/compossables/Axios'

export const useShambaStore = defineStore('shamba', () => {
  const shamba_path = "shamba"
  const shamba_res = ref<shambaResT[]>({} as shambaResT[])

  const get_shamba_res = computed(() => shamba_res.value);

  const addShamba = (payload:shambaT) => {
    const url = `${shamba_path}`;
    useRestController(url, "post", payload)

  }
  const fetchShamba = () => {
    const url = `${shamba_path}`;
    useRestController(url, "get", {}).then(({ responseDTO }) => {
      // @ts-ignore
      shamba_res.value= responseDTO.value.data;
    });

  }

  return { addShamba,fetchShamba, get_shamba_res }
})
