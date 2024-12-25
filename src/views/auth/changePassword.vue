<script setup lang="ts">
import CInput from '@/components/form/CInput.vue'
import { ref } from 'vue'
import type { change_pass_errorT, change_passT, form_validation_errorT, register_errorT, registerT } from '@/types'

const change_password = ref<change_passT>({} as change_passT)
const change_password_error = ref<change_pass_errorT>(
  {
    password:{} as form_validation_errorT,
    password_confirm:{} as form_validation_errorT
  } as change_pass_errorT)
const submit_payload = () =>{
  const validatePayload = validate_payload()
  let hasValidationErrors:boolean = true
  for (const [key, value] of Object.entries(validatePayload)) {
    if (value.status) {
      hasValidationErrors = false
    }
  }
  if (hasValidationErrors) {
    console.log("submitting payload")
  }else {
    console.log("validation errors occurred")
  }
}

const validate_payload = () =>{
  change_password_error.value.password.status = !change_password.value.password
  change_password_error.value.password.message = "Please enter password"
  change_password_error.value.password_confirm.status = !change_password.value.password_confirm
  change_password_error.value.password_confirm.message = "Please enter password confirmation"

  const password_match = change_password.value.password !== change_password.value.password_confirm
  if(password_match){
    // alert("Passwords do not match")
    change_password_error.value.password_confirm.message_extra = "Password do not match!"
    change_password_error.value.password.message_extra = "Password do not match!"
    change_password_error.value.password_confirm.status = true
    change_password_error.value.password.status = true
  }
  return change_password_error.value

}

const clear_payload = () =>{
  change_password.value = {} as registerT
  let htmlElement = document.getElementById("c_pass") as HTMLInputElement
  htmlElement.value = ""
}
</script>

<template>
  <div class="my-4 max-w-7xl mx-auto grid grid-rows-2 space-x-2">
    <CInput class="" :validation_error="change_password_error.password" v-model:input_value="change_password.password"
            placeholder="Enter your password" label_name="Password" input_type="password"/>

    <CInput class="" :validation_error="change_password_error.password_confirm" v-model:input_value="change_password.password_confirm"
            placeholder="Enter your password confirmations" label_name="Confirm password" input_type="password"/>
    <div class="mt-6 sm:col-span-2 flex items-center justify-end gap-x-6">
      <button @click="clear_payload()" type="button" class="text-sm font-semibold leading-6 text-gray-900">Clear</button>
      <button @click="submit_payload()" type="button"  class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Register</button>
    </div>
  </div>
</template>