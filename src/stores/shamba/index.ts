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
      toggleNotification("success",`${payload.name} has been successfully added`);
      // fetchShamba()
    }).catch((error: Error) => {
      console.log("error +++++++",error);
      // @ts-ignore
      toggleNotification("Error",error.response.data.description);
    }).finally(function() {
      setTimeout(function() {
        fetchShamba()
      },2500)
    })

  }

  const updateShamba = (payload:shambaUpdateT) => {
    const farm_id = router.currentRoute.value.query["farm_id"]
    const url = `${shamba_path}?farmId=${farm_id}`;
    useRestController(url, "update", payload)

  }
  const deleteShamba = (farm_id:string,farm_name:string) => {
    const url = `${shamba_path}?farmId=${farm_id}`;
    useRestController(url, "delete", {}).then(()=>{
      toggleNotification("success",`${farm_name} has been successfully deleted`);
    }).finally(()=>{
      setTimeout(function() {
        fetchShamba()
      },2000)

    })

  }
  const getShambaByID = ()  => {
    const farm_id = router.currentRoute.value.query["farm_id"]
    return shamba_res.value.filter((farm) => farm.id == farm_id)
  }


  const set_current_shamba = (payload:shambaDropDownT) => {
    current_shamba.value = payload
    localStorage.setItem("active_shamba_name", payload.name as string);
    localStorage.setItem("active_shamba_id", payload.id as string);

  }
  const fetchShamba = () => {
    const url = `${shamba_path}`;
    useRestController(url, "get", {}).then(({ responseDTO }) => {
      // @ts-ignore
      shamba_res.value= responseDTO.value.data;
      // current_shamba.value.name = shamba_res.value[0].name;
      // current_shamba.value.id = shamba_res.value[0].id;
    });

  }

  return {getShambaByID, addShamba,fetchShamba, get_shamba_res, get_shamba_drop_down,set_current_shamba,get_shamba_current,updateShamba,deleteShamba }
})
