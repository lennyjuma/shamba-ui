<script setup lang="ts">
import { ExclamationCircleIcon } from '@heroicons/vue/16/solid'
import type { form_validation_errorT } from '@/types'
import { ref, defineProps } from 'vue'
const input_value = defineModel('input_value')
const props = defineProps<{
  input_type: string
  input_class_style?: string
  label_name: string
  placeholder?: string
  validation_error: form_validation_errorT ,
}>()

</script>

<template>
  <div>
    <label v-if="label_name" :for="label_name" class="block text-sm/6 font-medium ">{{ label_name }}</label>
    <div class="mt-2 grid grid-cols-1">
      <input v-model="input_value" :type="input_type" :name="label_name" :id="label_name + '_id' "
             :class="[validation_error.status ? 'border-red-600 ring-red-600 focus:ring-0 outline-red-300 placeholder:text-red-600  focus:outline-red-600' : '', input_class_style ,'placeholder:pl-1 col-start-1 row-start-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6']"
             :placeholder="validation_error.status ? validation_error.message : placeholder" aria-invalid="true" aria-describedby="email-error" />
      <ExclamationCircleIcon v-if="validation_error.status" class="pointer-events-none col-start-1 row-start-1 mr-3 size-5 self-center justify-self-end text-red-500 sm:size-4" aria-hidden="true" />
    </div>
    <p v-if="validation_error.status" class="mt-2 hidden text-sm text-red-600" id="email-error">{{validation_error.message}}</p>
  </div>
</template>
