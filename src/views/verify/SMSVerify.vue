<script setup lang="ts">

import CInput from '@/components/form/CInput.vue'
import { ref, watch } from 'vue'
import type { form_validation_errorT } from '@/types'
import { useOTPStore } from '@/stores/otp'

const otp_err = ref<form_validation_errorT>({status:false,message: "OTP is required"} as form_validation_errorT)
const otp = ref("")

const {verify_SMS,generateNewOTP} = useOTPStore()

const verify_phone_number = () => {
  otp_err.value.status = !otp.value
  console.log("verify phone number")
  const status = otp.value.toString().length > 6 // check otp size
  if(status) {
    console.log("otp: ", otp.value)
    otp_err.value.status = true
  }

  if (!otp_err.value.status) {
    verify_SMS(otp.value)
  }
}
watch(otp,()=>{
  // console.log("otp: ", otp.value)
  const status = otp.value.toString().length > 5
  otp_err.value.status = status
  if(status) {
    otp_err.value.message_extra = 'OTP contains extra characters'
  }
})
</script>

<template>
  <div class="max-w-xl w-full flex-col items-center mx-auto   my-20">
    <div class="flex flex-col  md:flex-row    md:justify-evenly md:items-center">
      <CInput placeholder="Enter the OTP sent to your phone." v-model:input_value="otp" :validation_error="otp_err"
              input_type="number" label_name="One Time Password (OTP)" input_class_style=" " class=" flex-grow justify-self-center  md:w-1/2 px-4"/>
      <button @click="verify_phone_number()" :class="[otp_err.message_extra && otp_err.status ? 'mt-2 md:my-auto' : 'mt-2 md:mt-auto']"
              :disabled="!!(otp_err.message_extra && otp_err.status)" class="flex mx-auto w-1/2 md:w-auto  justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Verify OTP</button>
    </div>

    <div class="mt-5 flex flex-col sm:flex-row  justify-center space-y-1 items-center">
      <label for="country" class="block text-left text-sm font-light leading-6 text-gray-900">OTP expired ?
        <button @click="generateNewOTP()" class="text-indigo-600 font-medium">&emsp13; <span class="underline">Generate new OTP</span>
        </button>
      </label>

    </div>

  </div>

</template>