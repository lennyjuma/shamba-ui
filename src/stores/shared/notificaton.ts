import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMainStore = defineStore('mainStore', () => {
  const successNotification = ref(false)
  const count = ref(0)
  const msg = ref<string>('')
  const doubleCount = computed(() => count.value * 2)
  function toggleNotification(param:string,msgT:string) {
    msg.value = msgT
    // alert(param)
    if (param === 'success') {
      successNotification.value = !successNotification.value
      setTimeout(()=>{
        successNotification.value = !successNotification.value
      },2500)
    }
  }


  return { count,msg, doubleCount, successNotification,toggleNotification }
})
