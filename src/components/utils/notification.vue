<template>
  <!-- Global notification live region, render this permanently at the end of the document -->
  <div aria-live="assertive" :id="uuid" class="pointer-events-none px-3 sm:px-1 w-96 flex items-end my-2 sm:items-start">
    <div class="flex w-full flex-col items-center space-y-4 sm:items-end">
      <!-- Notification panel, dynamically insert this into the live region when it needs to be displayed -->
      <transition enter-active-class="transform ease-out duration-300 transition" enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2" enter-to-class="translate-y-0 opacity-100 sm:translate-x-0" leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
        <div v-if="show" class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black/5">
          <div class="p-4">
            <div class="flex items-start">
              <div class="shrink-0">
                <CheckCircleIcon v-if="props.status.toLowerCase() == 'success'" class="size-6 text-green-400" aria-hidden="true" />
                <ExclamationCircleIcon v-if="props.status.toLowerCase() == 'error'" class="size-6 text-red-400" aria-hidden="true" />
              </div>
              <div class="ml-3 w-0 flex-1 pt-0.5">
                <p class="text-sm font-medium capitalize text-gray-900">{{ props.status }} !</p>
                <p class="mt-1 text-sm text-gray-500">{{props.msg}}.</p>
              </div>
              <div class="ml-4 flex shrink-0">
                <button type="button" @click="show = false" class="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  <span class="sr-only">Close</span>
                  <XMarkIcon class="size-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { CheckCircleIcon , ExclamationCircleIcon} from '@heroicons/vue/24/outline'
import { XMarkIcon } from '@heroicons/vue/20/solid'
import { useNotificationStore } from '@/stores/notification/index.js'
import { storeToRefs } from 'pinia'
let notificationStore = useNotificationStore()
const {notificationStatus} = storeToRefs(notificationStore)
const show = ref(true)
const uuid = ref(Math.random())
let props = defineProps(["msg","status"])
onMounted(function(){
  console.log("+++++++++++++++  " + uuid.value + "++++++++++++++++++",notificationStatus.value)
  if (notificationStatus){
    setTimeout(()=>{
      const child = document.getElementById(uuid.value);
      let parentElement = child.parentElement as HTMLDivElement
      parentElement.remove()
    },3500)
  }
})
</script>