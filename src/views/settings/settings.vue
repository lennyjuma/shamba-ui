<template>

  <div class="mx-auto max-w-7xl lg:flex lg:gap-x-16 lg:px-8">
    <main class="px-4 py-8 sm:px-6 lg:flex-auto lg:px-8 lg:py-12 sm:mx-8">
      <div class="mx-auto max-w-2xl space-y-8 sm:space-y-16 lg:mx-0 lg:max-w-none">
        <div class="mx-6">
          <h2 class="text-lg font-semibold text-gray-900">Profile</h2>
          <p class="mt-1 text-sm/6 text-gray-500">Use accurate information, results will be sent to this contacts</p>

          <dl class="mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm/6">
            <div class="pt-6 sm:flex">
              <dt class="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">Full name</dt>
              <dd class="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                <div class="text-gray-900 capitalize">{{ user_full_name() }}</div>
              </dd>
            </div>
            <div class="pt-6 sm:flex">
              <dt class="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">Email address</dt>
              <dd class="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                <div class="text-gray-900">{{ user_email() }}</div>
<!--                <button type="button" class="font-semibold text-indigo-600 hover:text-indigo-500">Update</button>-->
              </dd>
            </div>
            <div class="pt-6 sm:flex">
              <dt class="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">Phone number</dt>
              <dd class="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                <div class="text-gray-900">+254706755253</div>
<!--                <button type="button" class="font-semibold text-indigo-600 hover:text-indigo-500">Update</button>-->
              </dd>
            </div>
            <div class="pt-6 flex">
              <dt class="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">Password</dt>
              <dd class="ml-auto flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                <router-link to="/change_password" type="button" class="font-semibold text-white rounded-md px-2 py-1 bg-indigo-600 hover:bg-indigo-500">Change password</router-link>
              </dd>
            </div>
          </dl>
        </div>

        <div class="mx-6">
          <h2 class="text-lg font-semibold text-gray-900">Farms</h2>
          <p class="mt-1 text-sm/6 text-gray-500">Farms connected to your account.</p>
          <ul role="list" class="mt-6 divide-y divide-gray-100 border-t border-gray-200 text-sm/6">
            <li class="flex justify-between gap-x-6 py-6">
              <div class="font-medium text-gray-900">Fram 1</div>
              <button type="button" class="font-semibold text-indigo-600 hover:text-indigo-500">Update</button>
            </li>
            <li class="flex justify-between gap-x-6 py-6">
              <div class="font-medium text-gray-900">Fram 2</div>
              <button type="button" class="font-semibold text-indigo-600 hover:text-indigo-500">Update</button>
            </li>
            <li class="flex justify-between gap-x-6 py-6">
              <div class="font-medium text-gray-900">Fram 3</div>
              <button type="button" class="font-semibold text-indigo-600 hover:text-indigo-500">Update</button>
            </li>
          </ul>

          <div class="flex border-t border-gray-100 pt-6">
            <button type="button" class="text-sm/6 font-semibold text-indigo-600 hover:text-indigo-500"><span aria-hidden="true">+</span> Add another farm</button>
          </div>
        </div>

        <div class="mx-6">
          <h2 class="text-lg font-semibold text-gray-900">Notification</h2>
          <p class="mt-1 text-sm/6 text-gray-500">Configure how to receive notifications.</p>
          <dl class="mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm/6">
            <SwitchGroup as="div" class="flex pt-6">
              <SwitchLabel as="dt" class="flex-none pr-6 text-gray-900 sm:w-64" passive>Soil results sms</SwitchLabel>
              <dd class="flex flex-auto items-center justify-end">
                <Switch v-model="automaticTimezoneEnabled" :class="[automaticTimezoneEnabled ? 'bg-indigo-600' : 'bg-gray-200', 'flex w-8 cursor-pointer rounded-full p-px ring-1 ' +
                 'ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ' +
                  'focus-visible:outline-indigo-600']">
                  <span aria-hidden="true" :class="[automaticTimezoneEnabled ? 'translate-x-3.5' : 'translate-x-0', 'size-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 ' +
                   'transition duration-200 ease-in-out']" />
                </Switch>
              </dd>
            </SwitchGroup>
            <SwitchGroup as="div" class="flex pt-6">
              <SwitchLabel as="dt" class="flex-none pr-6 text-gray-900 sm:w-64" passive>Soil results email</SwitchLabel>
              <dd class="flex flex-auto items-center justify-end">
                <Switch v-model="automaticTimezoneEnabled" :class="[automaticTimezoneEnabled ? 'bg-indigo-600' : 'bg-gray-200', 'flex w-8 cursor-pointer rounded-full p-px ring-1 ' +
                 'ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ' +
                  'focus-visible:outline-indigo-600']">
                  <span aria-hidden="true" :class="[automaticTimezoneEnabled ? 'translate-x-3.5' : 'translate-x-0', 'size-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 ' +
                   'transition duration-200 ease-in-out']" />
                </Switch>
              </dd>
            </SwitchGroup>
            <SwitchGroup as="div" class="flex pt-6">
              <SwitchLabel as="dt" class="flex-none pr-6 text-gray-900 sm:w-64" passive>Shamba lab news email</SwitchLabel>
              <dd class="flex flex-auto items-center justify-end">
                <Switch v-model="automaticTimezoneEnabled" :class="[automaticTimezoneEnabled ? 'bg-indigo-600' : 'bg-gray-200', 'flex w-8 cursor-pointer rounded-full p-px ring-1 ' +
                 'ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ' +
                  'focus-visible:outline-indigo-600']">
                  <span aria-hidden="true" :class="[automaticTimezoneEnabled ? 'translate-x-3.5' : 'translate-x-0', 'size-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 ' +
                   'transition duration-200 ease-in-out']" />
                </Switch>
              </dd>
            </SwitchGroup>
          </dl>

        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel, Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue'
import { Bars3Icon } from '@heroicons/vue/20/solid'
import {
  BellIcon,
  CreditCardIcon,
  CubeIcon,
  FingerPrintIcon,
  UserCircleIcon,
  UsersIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'


const automaticTimezoneEnabled = ref(true)
// get username from local storage
const user_full_name = () => localStorage.getItem('user_full_name');

const user_email = () => localStorage.getItem('user_email');

</script>