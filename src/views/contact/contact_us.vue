<template>
  <div class="relative isolate bg-white px-6 py-6 sm:py-12 lg:px-8">
    <div class="mx-auto max-w-xl lg:max-w-5xl">
      <h2 class="text-4xl font-bold tracking-tight text-gray-900">Get in touch</h2>
      <p class="mt-2 text-lg leading-8 text-gray-600">Fill out the form below, and one of our representatives will get back to you as soon as possible.</p>
      <div class="mt-8 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
        <form action="#" method="POST" class="lg:flex-auto">
          <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900">First name</label>
              <div class="mt-2.5">
                <input v-model="contact.fname" type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div>
              <label for="last-name" class="block text-sm font-semibold leading-6 text-gray-900">Last name</label>
              <div class="mt-2.5">
                <input v-model="contact.lname" type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div>
              <label for="budget" class="block text-sm font-semibold leading-6 text-gray-900">Email</label>
              <div class="mt-2.5">
                <input v-model="contact.email" id="budget" name="budget" type="text" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div>
              <label for="website" class="block text-sm font-semibold leading-6 text-gray-900">Phone number</label>
              <div class="mt-2.5">
                <input v-model="contact.phoneNumber" type="url" name="website" id="website" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">Message</label>
              <div class="mt-2.5">
                <textarea v-model="contact.message" id="message" name="message" rows="4" class="block w-full resize-none rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
          </div>
          <div class="mt-10">
            <button @click="postContactUS()" type="submit" class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Let’s talk</button>
            <button @click="getWhatsapp('254706086296')" type="submit" class="block w-full mt-2 rounded-md bg-green-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">Whatsapp</button>
          </div>
          <p class="mt-4 text-sm leading-6 text-gray-500">By submitting this form, I agree to the <a href="#" class="font-semibold text-indigo-600">privacy&nbsp;policy</a>.</p>
        </form>
      </div>
    </div>
  </div>
</template>

<script  setup lang="ts">

import { ref } from 'vue'
import type { ContactUsT } from '@/types'
import { useContactUSStore } from '@/stores/contact_us'

const contactUSStore = useContactUSStore()
const {post_contact_us} = contactUSStore
// const contact = ref<ContactUsT>({email:"bytebridge65@gmail.com",phoneNumber:"254706754174",fname:"Lenny",lname:"Juma",message:"Simultaneously, when we check the consumer console, we should have encountered the successful message of reading the message from the topic:"} as ContactUsT)
const contact = ref<ContactUsT>({} as ContactUsT)
const postContactUS = () => {
  post_contact_us(contact.value as ContactUsT)
}
const getWhatsapp = (phone_number:string) => {
  window.open(`https://api.whatsapp.com/send/?phone=${phone_number}&text=Hello shamba lab.&type=phone_number&app_absent=0`, '_blank');
}
</script>