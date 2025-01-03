import { computed, ref } from 'vue'
import { defineStore, storeToRefs } from 'pinia'
import type { air_chartsT, chartsT } from '@/types'
import { useRestController } from '@/compossables/Axios'
import router from '@/router'
import { useRangeDateStore } from '@/stores/date'
import { useShambaStore } from '@/stores/shamba'
import { useNotificationStore } from '@/stores/notification'
import type { AxiosError } from 'axios'

export const useChartsStore = defineStore('charts_store', () => {

  const rangeDateStore = useRangeDateStore()
  const shambaStore = useShambaStore()
  const { toggleNotification } = useNotificationStore()
  const {get_end_date,get_start_date} = storeToRefs(rangeDateStore)
  const {get_shamba_current} = storeToRefs(shambaStore)

  const soil_path = 'analytics/soil'
  const air_path = 'analytics/air'
  const soil_chart = ref<chartsT>({} as chartsT);
  const air_chart = ref<air_chartsT>({} as air_chartsT);
  const get_soil_charts = computed(() => soil_chart.value);
  const get_air_charts = computed(() => air_chart.value);

  const fetch_soil_chart = (size:string, farmId?:string) => {
    let url = `${soil_path}?size=${size}`;
    url = appendURL(url)
    useRestController(url, "get", {}).then(({ responseDTO }) => {
      // @ts-ignore
      soil_chart.value= responseDTO.value.data;
    }).catch((error: AxiosError<any,any>) => {
      if (error.response && error.response.status === 400) {
        const error_description = error.response.data.description
        console.log("Received a 400 bad request. Redirecting to login page...", error_description);
        if(error_description == "You do not have any farms yet") {
          toggleNotification('error', "Please add a farm")
          router.push("/profile")
        }
      }
    });
    return soil_chart.value

  }

  const fetch_air_chart = (size:string, farmId?:string) => {
    let url = `${air_path}?size=${size}`;
    url = appendURL(url)
    useRestController(url, "get", {}).then(({ responseDTO }) => {
      // @ts-ignore
      air_chart.value= responseDTO.value.data;
    });
    return soil_chart.value

  }
  const fetch_charts = (size:string, farmId?:string) => {
    fetch_soil_chart(size)
    fetch_air_chart(size)
    console.log("request here")
  }

  const appendURL = (url:string) => {
    if(localStorage.getItem("active_shamba_id")){
      url = `${url}&farm_id=${localStorage.getItem("active_shamba_id")}`
    }
    if(localStorage.getItem("start_date") as string){
      url = `${url}&start=${localStorage.getItem("start_date") as string}`
    }
    if(localStorage.getItem("end_date") as string){
      url = `${url}&end=${localStorage.getItem("end_date") as string}`
    }
    return url;
  };



  return { get_soil_charts, get_air_charts , fetch_charts}
})
