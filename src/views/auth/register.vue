<template>
  <div class="mx-auto max-w-7xl py-10 px-5">
    <div class="space-y-12">

      <div class="border-b border-gray-900/10 pb-12">
        <h2 class="text-base font-semibold leading-7 text-gray-900">Account registration</h2>
        <p class="mt-1 text-sm leading-6 text-gray-600">Use a permanent email address and phone number  where you can receive mail/sms.</p>

        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <CInput class="sm:col-span-3" :validation_error="reg_validation_error.f_name" v-model:input_value="register_payload.f_name"
                  placeholder="Enter your first name" :label_name="`First name`" :input_type="`text`"/>

          <CInput class="sm:col-span-3" :validation_error="reg_validation_error.l_name" v-model:input_value="register_payload.l_name"
                  placeholder="Enter your last  name" label_name="Last name" input_type="text"/>

          <CInput class="sm:col-span-3" :validation_error="reg_validation_error.email" v-model:input_value="register_payload.email"
                  placeholder="Enter your email address" label_name="Email address" input_type="email"/>

          <CInput class="sm:col-span-3" :validation_error="reg_validation_error.phoneNumber" v-model:input_value="register_payload.phoneNumber"
                  placeholder="Enter your contact number" label_name="Phone number" input_type="text"/>

          <CInput class="sm:col-span-3" :validation_error="reg_validation_error.password" v-model:input_value="register_payload.password"
                  placeholder="Enter your password" label_name="Password" input_type="password"/>

          <CInput class="sm:col-span-3" :validation_error="reg_validation_error.password_confirm" v-model:input_value="register_payload.password_confirm"
                  placeholder="Enter your password confirmations" label_name="Confirm password" input_type="password"/>

          <div class="sm:col-span-3">
            <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Country</label>
            <div class="mt-2">
              <select v-model="register_payload.country"  id="country" name="country" autocomplete="country-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                <option>Kenya</option>
                <option>Tanzania</option>
                <option>Uganda</option>
              </select>
            </div>
          <div class="sm:col-span-3 mt-4">
            <label for="country" class="block text-sm font-light leading-6 text-gray-900">Already have an account?
                <router-link to="/login" class="text-indigo-600 font-medium text-base ">&emsp13;
                  <span class="underline">Login</span>
                </router-link>
              </label>

            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-6 flex items-center justify-end gap-x-6">
      <button @click="clear_payload()" type="button" class="text-sm font-semibold leading-6 text-gray-900">Clear</button>
      <button @click="submit_payload()" type="button"  class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Register</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PhotoIcon, UserCircleIcon } from '@heroicons/vue/24/solid'
import { ref } from 'vue'
import type { form_validation_errorT, login_errorT, register_errorT, registerT } from '@/types/index.js'
import { useAuthStore } from '@/stores/auth'
import CInput from '@/components/form/CInput.vue'

let authStore = useAuthStore()
const {register} = authStore
const register_payload = ref<registerT>({} as registerT)
const reg_validation_error = ref<register_errorT>(
  {
    email:{} as form_validation_errorT,
    f_name:{} as form_validation_errorT,
    l_name:{} as form_validation_errorT,
    phoneNumber:{} as form_validation_errorT,
    password:{} as form_validation_errorT,
    password_confirm:{} as form_validation_errorT
  } as register_errorT)


const submit_payload = () =>{
  const validatePayload = validate_payload()
  let hasValidationErrors:boolean = true
  for (const [key, value] of Object.entries(validatePayload)) {
    if (value.status) {
      hasValidationErrors = false
    }
  }
  if (hasValidationErrors) {
    register(register_payload.value)
  }else {
    console.log("validation errors occurred")
  }
  // register(register_payload.value)
}
const validate_payload = () =>{
  reg_validation_error.value.email.status = !register_payload.value.email
  reg_validation_error.value.email.message = "Email address is empty"
  reg_validation_error.value.password.status = !register_payload.value.password
  reg_validation_error.value.password.message = "Please enter password"
  reg_validation_error.value.password_confirm.status = !register_payload.value.password_confirm
  reg_validation_error.value.password_confirm.message = "Please enter password confirmation"
  reg_validation_error.value.f_name.status = !register_payload.value.f_name
  reg_validation_error.value.f_name.message = "First name is empty"
  reg_validation_error.value.l_name.status = !register_payload.value.l_name
  reg_validation_error.value.l_name.message = "Last name is empty"
  reg_validation_error.value.phoneNumber.status = !register_payload.value.phoneNumber
  reg_validation_error.value.phoneNumber.message = "Please enter your phone number"
  const password_match = register_payload.value.password !== register_payload.value.password_confirm
  if(password_match){
    // alert("Passwords do not match")
    reg_validation_error.value.password_confirm.message_extra = "Password do not match!"
    reg_validation_error.value.password.message_extra = "Password do not match!"
    reg_validation_error.value.password_confirm.status = true
    reg_validation_error.value.password.status = true
  }
  return reg_validation_error.value

}
const clear_payload = () =>{
  register_payload.value = {} as registerT
  let htmlElement = document.getElementById("c_pass") as HTMLInputElement
  htmlElement.value = ""
}
</script>