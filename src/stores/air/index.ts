import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { airT, paginationT, soilT } from '@/types'
import { useRestController } from '@/compossables/Axios'
import router from '@/router'

export const useAirStore = defineStore('air_store', () => {
  const path = 'air'
  const air = ref<airT[]>([] as airT[]);

  const pagination = ref<paginationT>({} as paginationT);
  const getPagination = computed(() => pagination.value);

  const get_air = computed(() => air.value);

  async function fetchAirByDeviceId(page:number,size:number) {
    const deviceId = `${router.currentRoute.value.query["deviceId"]}`;
    const url = `${path}/device?device_id=${deviceId}&page=${page}&size=${size}`;
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

  const changePage = (pageNumber: number,size:number) => {
    fetchAirByDeviceId( pageNumber,size).then();
  };


  return { get_air, fetchAirByDeviceId,getPagination ,changePage}
})
