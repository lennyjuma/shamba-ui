import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { ContactUsT } from '@/types'
import { useRestController } from '@/compossables/Axios'

export const useContactUSStore = defineStore('contact_us', () => {
  const contact_us_path = "contact-us"
  const contact_us = ref<ContactUsT>({} as ContactUsT)
  const get_contact_us = computed(() => contact_us.value)
  function post_contact_us(contact: ContactUsT) {
        const url = `${contact_us_path}`;
    useRestController(url, "post", contact)
  }

  return { get_contact_us, post_contact_us }
})
