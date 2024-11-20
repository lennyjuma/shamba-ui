import { ref, computed } from 'vue'
import { defineStore, storeToRefs } from 'pinia'
import type { airT, paginationT, soilT } from '@/types'
import { useRestController } from '@/compossables/Axios'
import router from '@/router'
import { useRangeDateStore } from '@/stores/date'
import { useShambaStore } from '@/stores/shamba'

export const useAirStore = defineStore('air_store', () => {

  const rangeDateStore = useRangeDateStore()
  const shambaStore = useShambaStore()
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
    });
  }

  const changePage = (pageNumber: number,size:number,farmId?:string) => {
    fetchAirByDeviceId( pageNumber,size,farmId).then();
  };
  
  const appendURL = (url:string) => {
    if(localStorage.getItem("active_shamba_id")){
      url = `${url}&farm_id=${localStorage.getItem("active_shamba_id")}`
    }
    if(get_start_date.value !== undefined){
      url = `${url}&start=${get_start_date.value}`
    }
    if(get_end_date.value  !== undefined){
      url = `${url}&end=${get_end_date.value}`
    }
    return url;
  };


  return { get_air, fetchAirByDeviceId,getPagination ,changePage}
})
