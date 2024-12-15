<template>
  <div class="flex min-h-full my-40 flex-1 flex-col justify-center px-6  lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
<!--      <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Shamba lab" />-->
      <h2 class="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <div class="space-y-6"  >
        <CInput :label_name="'Email address'" :input_type="'email'" v-model:input_value="login_payload.email" :validation_error="login_validation_error.email" />
        <CInput :label_name="'Password'" :input_type="'password'" v-model:input_value="login_payload.password" :validation_error="login_validation_error.password" />

      <div>
          <button @click="sign_in(login_payload)" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">

import { reactive, ref } from 'vue'
import type { form_validation_errorT, login_errorT, loginT } from '@/types'
import { useAuthStore } from '@/stores/auth'
import { storeToRefs } from 'pinia'
import { useNotificationStore } from '@/stores/notification'
import CInput from '@/components/form/CInput.vue'

const login_payload = ref<loginT>({email:"",password:""} as loginT)
const login_validation_error = ref<login_errorT>({email:{} as form_validation_errorT,password:{} as form_validation_errorT} as login_errorT)

let authStore = useAuthStore()

const {login} = authStore
const {toggleNotification} = useNotificationStore()
const {get_login_res} = storeToRefs(authStore)

const sign_in =  (payload:loginT) => {
  login_validation_error.value.email.status = !payload.email
  login_validation_error.value.email.message = "Email is empty"
  login_validation_error.value.password.status = !payload.password
  login_validation_error.value.password.message = "Password is required"
  let hasValidationErrors:boolean = true
  for (const [key, value] of Object.entries(login_validation_error.value)) {
    if (value.status) {
      hasValidationErrors = false
    }
  }
  if (hasValidationErrors) {
    // login(payload)
    console.log('*** login ***')
  }


}

</script>
<style scoped>

</style>