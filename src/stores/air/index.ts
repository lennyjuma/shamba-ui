import { ref, computed } from 'vue'
import { defineStore, storeToRefs } from 'pinia'
import type { airT, paginationT, soilT } from '@/types'
import { useRestController } from '@/compossables/Axios'
import router from '@/router'
import { useRangeDateStore } from '@/stores/date'
import { useShambaStore } from '@/stores/shamba'
import type { AxiosError } from 'axios'
import { useNotificationStore } from '@/stores/notification'

export const useAirStore = defineStore('air_store', () => {

  const rangeDateStore = useRangeDateStore()
  const shambaStore = useShambaStore()
  const notificationStore = useNotificationStore()
  const {toggleNotification} = notificationStore
  const {get_end_date,get_start_date} = storeToRefs(rangeDateStore)
  const {get_shamba_current} = storeToRefs(shambaStore)
  const path = 'air'
  const air = ref<airT[]>([] as airT[]);

  const pagination = ref<paginationT>({} as paginationT);
  const getPagination = computed(() => pagination.value);

  const get_air = computed(() => air.value);

  async function fetchAirByDeviceId(page:number,size:number, farm_id?:string) {

    let url = `${path}/device?page=${page}&size=${size}`;
    url = appendURL(url)
    useRestController(url, "get", {}).then(({ responseDTO }) => {
      // @ts-ignore
      const response = responseDTO.value.data
      air.value= response.content;
      pagination.value = {
        totalPages: response.totalPages as number,
        totalElements: response.totalElements as number,
        pageNumber: response.pageable.pageNumber as number,
        pageSize: response.pageable.pageSize as number,
        first: response.first as boolean,
        last: response.last as boolean,
      };
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
  }

  const changePage = (pageNumber: number,size:number,farmId?:string) => {
    fetchAirByDeviceId( pageNumber,size,farmId).then();
  };
  
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


  return { get_air, fetchAirByDeviceId,getPagination ,changePage}
})
