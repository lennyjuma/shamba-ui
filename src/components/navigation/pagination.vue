<template>
  <div
    class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
  >
    <div class="flex flex-1 justify-between sm:hidden">
      <div
        @click="fetchNewPage(1, 'previous')"
        class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
      >
        Previous
      </div>
      <div
        @click="fetchNewPage(1, 'next')"
        class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
      >
        Next
      </div>
    </div>
    <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
      <div>
        <p class="text-sm text-gray-700">
          Showing
          {{ " " }}
          <span class="font-medium">{{ first_row }}</span>
          {{ " " }}
          to
          {{ " " }}
          <span class="font-medium">{{ last_row }}</span>
          {{ " " }}
          of
          {{ " " }}
          <span class="font-medium">{{ getPagination.totalElements }}</span>
          {{ " " }}
          results
        </p>
      </div>
      <div>
        <nav
          class="isolate inline-flex -space-x-px rounded-md shadow-sm"
          aria-label="Pagination"
        >
          <div
            @click="fetchNewPage(1, 'previous')"
            class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          >
            <span class="sr-only">Previous</span>
            <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
          </div>

          <!-- Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
     Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" -->

          <div
            :key="idx"
            v-for="(pag, idx) in paginationSize"
            @click="fetchNewPage(idx)"
            :class="[getActivePage(idx)]"
            class="relative inline-flex items-center px-4 py-2 text-sm font-semibold"
          >
            {{ idx + 1 }}
          </div>
          <div
            @click="fetchNewPage(1, 'next')"
            class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          >
            <span class="sr-only">Next</span>
            <ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/20/solid";
import { onMounted, ref, watch } from "vue";
import type { paginationT } from "@/types";


const getPagination = ref<paginationT>({} as paginationT);
// const emits = defineEmits(["fetchTransaction"]);
const props = defineProps(["paginationData"]);
const emits = defineEmits({
  fetchTransaction(pageNumber: number) {
    return pageNumber;
  },
});
const first_row = ref(1);
const last_row = ref(1);
const paginationSize = ref([0]);
const fetchNewPage = (pageNumber: number, side: string = "middle") => {
  switch (side) {
    case "middle":
      emits("fetchTransaction", pageNumber);
      break;
    case "next":
      if (getPagination.value.last == false) {
        emits("fetchTransaction", getPagination.value.pageNumber + 1);
      }
      break;
    case "previous":
      if (getPagination.value.first == false) {
        emits("fetchTransaction", getPagination.value.pageNumber - 1);
      }
      break;
  }
};

const getActivePage = (param: number) => {
  const styleCurrent =
      "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
    styleDefault =
      "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0";
  if (param === getPagination.value.pageNumber) {
    return styleCurrent;
  } else {
    return styleDefault;
  }
};
const createArray = (numElements: number, f: (index: number) => any) => {
  const array = [];
  for (let i = 0; i < numElements; i++) {
    array.push(f(i));
  }
  return array;
};
onMounted(function () {
  console.log({ getPagination });
  getPagination.value = props.paginationData;
});
watch(
  () => props.paginationData,
  function () {
    console.log({ getPagination });
    getPagination.value = props.paginationData;
    paginationSize.value = [];
    first_row.value =
      getPagination.value.pageSize * getPagination.value.pageNumber + 1;
    last_row.value = first_row.value + getPagination.value.pageSize - 1;
    paginationSize.value = createArray(
      getPagination.value.totalPages,
      (i) => i
    );
  }
);
</script>
