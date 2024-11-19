import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type { shambaDropDownT, shambaResT, shambaT, shambaUpdateT } from '@/types'
import router from '@/router'
import { useRestController } from '@/compossables/Axios'
import { useNotificationStore } from '@/stores/notification'

export const useShambaStore = defineStore('shamba', () => {
  const {toggleNotification} =  useNotificationStore()
  const shamba_path = "shamba"
  const shamba_res = ref<shambaResT[]>([] as shambaResT[])
  const current_shamba = ref<shambaDropDownT>({} as shambaDropDownT)

  const get_shamba_res = computed(() => shamba_res.value);
  const get_shamba_current = computed(() => current_shamba.value);
  const get_shamba_drop_down = computed( () => shamba_res.value.map(farm =>{
    return {
      id: farm.id,
      name: farm.name,
    }
  }));

  const addShamba = (payload:shambaT) => {
    const url = `${shamba_path}`;
    useRestController(url, "post", payload).then(()=>{
      router.push("/profile")
      // fetchShamba()
    }).catch((error: Error) => {
      console.log("error +++++++",error);
      toggleNotification("Error",error.response.data.description);
    })

  }

  const updateShamba = (payload:shambaUpdateT) => {
    const farm_id = router.currentRoute.value.query["farm_id"]
    const url = `${shamba_path}?farmId=${farm_id}`;
    useRestController(url, "update", payload)

  }
  const deleteShamba = (farm_id:string) => {
    const url = `${shamba_path}?farmId=${farm_id}`;
    useRestController(url, "delete", {}).then(()=>{
      window.location.reload()
      // router.push("/profile")
      // fetchShamba()
    })

  }
  const getShambaByID = ()  => {
    const farm_id = router.currentRoute.value.query["farm_id"]
    return shamba_res.value.filter((farm) => farm.id == farm_id)
  }


  const set_current_shamba = (payload:shambaDropDownT) => {
    current_shamba.value = payload

  }
  const fetchShamba = () => {
    const url = `${shamba_path}`;
    useRestController(url, "get", {}).then(({ responseDTO }) => {
      // @ts-ignore
      shamba_res.value= responseDTO.value.data;
      current_shamba.value.name = shamba_res.value[0].name;
      current_shamba.value.id = shamba_res.value[0].id;
    });

  }

  return {getShambaByID, addShamba,fetchShamba, get_shamba_res, get_shamba_drop_down,set_current_shamba,get_shamba_current,updateShamba,deleteShamba }
})
