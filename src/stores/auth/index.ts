import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { loggedInT, loginT } from '@/types'
import router from '@/router'
import { useRestController } from '@/compossables/Axios'

export const useAuthStore = defineStore('auth', () => {
  const login_path = "v1/auth/login"
  const login_payload = ref<loginT>({} as loginT)
  const login_res = ref<loggedInT>({} as loggedInT)

  const get_login_res = computed(() => login_res.value)

  function login(payload:loginT) {
    const url = `${login_path}`;
    useRestController(url, "post", payload).then(({ responseDTO }) => {
      // @ts-ignore
      login_payload.value= responseDTO.value.data;
    });

  }
  return { login, get_login_res}
})
