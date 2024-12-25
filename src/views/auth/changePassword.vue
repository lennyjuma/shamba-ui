<script setup lang="ts">
import CInput from '@/components/form/CInput.vue'
import { ref } from 'vue'
import type { change_pass_errorT, change_passT, form_validation_errorT, register_errorT, registerT } from '@/types'

const change_password = ref<change_passT>({} as change_passT)
const change_password_error = ref<change_pass_errorT>(
  {
    password:{} as form_validation_errorT,
    old_password:{} as form_validation_errorT,
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
  change_password_error.value.password.status = !change_password.value.old_password
  change_password_error.value.old_password.message = "Please enter password"
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
  change_password.value = {} as change_passT
  change_password_error.value.password_confirm.status = false
  change_password_error.value.password.status = false
  change_password_error.value.old_password.status = false
}
</script>

<template>
  <div class="my-4  sm:max-w-7xl max-w-4xl px-3 sm:mx-auto grid grid-rows-2 space-x-4">
    <div class=" col-span-2  bg-white  py-5 ">
      <h1 class="text-base font-semibold text-gray-900">Change Password</h1>
      <p class="mt-1 text-sm/6 text-gray-500">Use a strong password with at least 8 characters.</p>
    </div>
    <div class="col-span-2 bg-white w-1/2 mx-auto ">
      <CInput class="col-span-2 sm:col-span-1" :validation_error="change_password_error.old_password" v-model:input_value="change_password.old_password"
              placeholder="Enter your old password" label_name="Old password" input_type="password"/>
    </div>

    <CInput class="col-span-2 sm:col-span-1" :validation_error="change_password_error.password" v-model:input_value="change_password.password"
            placeholder="Enter your new password" label_name="New password" input_type="password"/>

    <CInput class="col-span-2 sm:col-span-1" :validation_error="change_password_error.password_confirm" v-model:input_value="change_password.password_confirm"
            placeholder="Enter your new password confirmations" label_name="Confirm new password" input_type="password"/>
    <div class="mt-6 col-span-2 flex items-center justify-end gap-x-6">
      <button @click.prevent="clear_payload()" type="button" class="text-sm font-semibold leading-6 text-gray-900">Clear</button>
      <button @click.prevent="submit_payload()" type="button"
              class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline
              focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Update password</button>
    </div>
  </div>
</template>