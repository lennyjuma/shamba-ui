import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { ContactUsT } from '@/types'
import { useRestController } from '@/compossables/Axios'
import type { AxiosError } from 'axios'
import { useNotificationStore } from '@/stores/notification'

export const useContactUSStore = defineStore('contact_us', () => {
  const {toggleNotification} = useNotificationStore()
  const contact_us_path = "contact-us"
  const contact_us = ref<ContactUsT>({} as ContactUsT)
  const get_contact_us = computed(() => contact_us.value)
  function post_contact_us(contact: ContactUsT) {
        const url = `${contact_us_path}`;
    useRestController(url, "post", contact).catch((error:AxiosError<Any,Any>) => {
      toggleNotification("error", error.response.data.description as string)
    })
  }
  return { get_contact_us, post_contact_us }
})
