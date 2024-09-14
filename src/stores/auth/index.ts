import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { loggedInT, loginT, registerT } from '@/types'
import router from '@/router'
import { useRestController } from '@/compossables/Axios'

export const useAuthStore = defineStore('auth', () => {
  const login_path = "auth/"
  const login_payload = ref<loginT>({} as loginT)
  const loggedIn = ref(false)
  const login_res = ref<loggedInT>({} as loggedInT)
  const access_token = ref<string>();

  const get_login_res = computed(() => login_res.value)

  function get_access_token_from_local_storage() {
    const token = localStorage.getItem('access_token')
    if (token !== null && token !== undefined ) {
      // alert("token not null")
      return token.length > 0
    }else {
      // alert("token  null")
      return false
    }
  }

  const get_logged_status= computed(() => loggedIn.value || get_access_token_from_local_storage())

  function login(payload:loginT) {
    const url = `${login_path}/login`;
    useRestController(url, "auth", payload).then(({ responseDTO }) => {
      // @ts-ignore
      login_res.value= responseDTO.value.data;
      // @ts-ignore
      access_token.value = responseDTO.value.data.token;
      console.log(login_payload.value)
      if (access_token.value) {
        loggedIn.value = true;
        localStorage.removeItem("access_token");
        localStorage.setItem("access_token", access_token.value as string);
        localStorage.setItem("user_full_name" , login_res.value.fullName as string);
        localStorage.setItem("user_email", login_res.value.email as string);
      }
      router.push("/");

    });

  }
  function register(payload:registerT) {
    const url = `${login_path}/register`;
    useRestController(url, "auth", payload).then(({ responseDTO }) => {
      // @ts-ignore
      login_res.value= responseDTO.value.data;
      // @ts-ignore
      access_token.value = responseDTO.value.data.token;
      console.log(login_payload.value)
      if (access_token.value) {
        loggedIn.value = true;
        localStorage.removeItem("access_token");
        localStorage.setItem("access_token", access_token.value as string);
        localStorage.setItem("user_full_name" , login_res.value.fullName as string);
        localStorage.setItem("user_email", login_res.value.email as string);
      }
      router.push("/");

    });

  }
  const set_loggedIn_to_false = () =>{
    loggedIn.value = false;
    router.push("/"); // redirect to home after log out to make sure charts and tables are hidden
  }
  return { login, register, get_login_res, get_logged_status,set_loggedIn_to_false}
})
