import { ref, computed } from 'vue'
import { defineStore, storeToRefs } from 'pinia'
import type { airT, paginationT, soilT } from '@/types'
import { useRestController } from '@/compossables/Axios'
import router from '@/router'
import { useRangeDateStore } from '@/stores/date'

export const useAirStore = defineStore('air_store', () => {

  const rangeDateStore = useRangeDateStore()
  const {get_range_date} = storeToRefs(rangeDateStore)
  const path = 'air'
  const air = ref<airT[]>([] as airT[]);

  const pagination = ref<paginationT>({} as paginationT);
  const getPagination = computed(() => pagination.value);

  const get_air = computed(() => air.value);

  async function fetchAirByDeviceId(page:number,size:number, farm_id?:string) {

    let url = `${path}/device?page=${page}&size=${size}`;
    if (farm_id){
      url = `${url}&farm_id=${farm_id}`;
    }
    if(get_range_date.value !== undefined){
      console.log(`get_range_date: `, get_range_date.value);
      url = `${url}&start=${get_range_date.value.start}&end=${get_range_date.value.end}`;
    }
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


  return { get_air, fetchAirByDeviceId,getPagination ,changePage}
})
