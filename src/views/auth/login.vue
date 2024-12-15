<template>
  <div class="flex min-h-full my-40 flex-1 flex-col justify-center px-6  lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
<!--      <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Shamba lab" />-->
      <h2 class="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <div class="space-y-6"  >
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div class="mt-2" :class="{ 'has-error': login_payload_error.password }">
            <input v-model="login_payload.email" id="email" name="email" type="email" autocomplete="email" required
                   :class="[login_payload_error.password ? 'border-red-600 ring-red-600' : '' ,'block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6']" />
            <span v-if="login_payload_error.email"  class="error-message">Please enter your email</span>
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
            <div class="text-sm">
              <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
            </div>
          </div>
          <div class="mt-2" :class="{ 'has-error': login_payload_error.password }">
            <input v-model="login_payload.password" id="password" name="password" type="password" autocomplete="current-password" required
                   :class="[login_payload_error.password ? 'border-red-600 ring-red-600' : '' ,'block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6']" />
            <span v-if="login_payload_error.password" class="error-message">Please enter your password</span>
          </div>
        </div>

        <div>
          <button @click="sign_in(login_payload)" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">

import { reactive, ref } from 'vue'
import type { login_errorT, loginT } from '@/types'
import { useAuthStore } from '@/stores/auth'
import { storeToRefs } from 'pinia'
import { useNotificationStore } from '@/stores/notification'

const login_payload = ref<loginT>({email:"",password:""} as loginT)
const login_payload_error = reactive<login_errorT>({} as login_errorT)

let authStore = useAuthStore()

const {login} = authStore
const {toggleNotification} = useNotificationStore()
const {get_login_res} = storeToRefs(authStore)

const sign_in =  (payload:loginT) => {
  login_payload_error.email = !payload.email
  login_payload_error.password = !payload.password
  const hasFalseValue = Object.values(login_payload_error).some(value => value === false);
  console.log(hasFalseValue,login_payload_error)
  if (hasFalseValue) {
    login(payload)
  }


}

</script>
<style scoped>

</style>