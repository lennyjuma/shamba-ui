import { ref, computed } from 'vue'
import { defineStore, storeToRefs } from 'pinia'
import type { paginationT, soilT } from '@/types'
import { useRestController } from '@/compossables/Axios'
import router from '@/router'
import { useRangeDateStore } from '@/stores/date'
import { useShambaStore } from '@/stores/shamba'

export const useSoilStore = defineStore('soil_store', () => {

  const rangeDateStore = useRangeDateStore()
  const {get_range_date, get_end_date,get_start_date} = storeToRefs(rangeDateStore)

  const path = 'soil'
  const soil = ref<soilT[]>([] as soilT[]);



  const pagination = ref<paginationT>({} as paginationT);
  const getPagination = computed(() => pagination.value);

  const get_soil = computed(() => soil.value);

  async function fetchSoilByDeviceId(page:number,size:number, farm_id ? : string) {

    let url = `${path}/device?page=${page}&size=${size}`;
    url = appendURL(url);
    useRestController(url, "get", {}).then(({ responseDTO }) => {
      // @ts-ignore
      const response = responseDTO.value.data
      soil.value= response.content;
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
    fetchSoilByDeviceId( pageNumber,size,farmId).then();
  };

  const appendURL = (url:string) => {
    if(localStorage.getItem("active_shamba_id")){
      url = `${url}&farm_id=${localStorage.getItem("active_shamba_id")}`
    }
    if(get_start_date.value !== undefined){
      url = `${url}&start=${get_start_date.value}`
    }
    if(get_end_date.value !== undefined){
      url = `${url}&end=${get_end_date.value}`
    }
    return url;
  };


  return { get_soil, fetchSoilByDeviceId,getPagination ,changePage}
})
