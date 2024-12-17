import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Crop_payloadT } from '@/types'
import { useRestController } from '@/compossables/Axios'
import router from '@/router'
import { useNotificationStore } from '@/stores/notification'

export const useOTPStore = defineStore('otp_store', () => {
  const path = "otp/verify"
  const {toggleNotification} = useNotificationStore()
  function verify_Email() {
    const otp_id = router.currentRoute.value.query["otp_id"]
    const url = `${path}/email?otp_id=${otp_id}`
    useRestController(url,"post",{}).then(({ responseDTO }) =>{
      toggleNotification("success", responseDTO.value.data as string)
    }).catch((err:Error) => {
      toggleNotification("error", err.response.data.description as string)
    })
  }
  function verify_SMS(otp:string) {
    const url = `${path}/sms?otp=${otp}`
    useRestController(url,"post",{}).then(({ responseDTO }) =>{
      toggleNotification("success", responseDTO.value.data as string)
    }).catch((err:Error) => {
      toggleNotification("error", err.response.data.description as string)
    })
  }
  function generateNewOTP() {
    const url = `otp/generate`
    useRestController(url,"post",{}).then(({ responseDTO }) =>{
      toggleNotification("success", responseDTO.value.data as string)
    }).catch((err:Error) => {
      toggleNotification("error", err.response.data.description as string)
    })
  }
  return {verify_Email,verify_SMS,generateNewOTP}
})
