import { ref, computed } from 'vue'
import { defineStore, storeToRefs } from 'pinia'
import type { paginationT, soilT } from '@/types'
import { useRestController } from '@/compossables/Axios'
import router from '@/router'
import { useRangeDateStore } from '@/stores/date'
import { useShambaStore } from '@/stores/shamba'

export const useSoilStore = defineStore('soil_store', () => {

  const rangeDateStore = useRangeDateStore()
  const shambaStore = useShambaStore()
  const {get_range_date} = storeToRefs(rangeDateStore)
  const {get_shamba_current} = storeToRefs(shambaStore)

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
    console.log("get_shamba_current",get_shamba_current.value);
    if(JSON.stringify(get_shamba_current.value) !== "{}"){
      url = `${url}&farm_id=${get_shamba_current.value.id}`
    }
    if(get_range_date.value !== undefined){
      url = `${url}&start=${get_range_date.value.start}&end=${get_range_date.value.end}`
    }
    return url;
  };


  return { get_soil, fetchSoilByDeviceId,getPagination ,changePage}
})
