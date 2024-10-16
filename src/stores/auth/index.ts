import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { loggedInT, loginT, registerT } from '@/types'
import router from '@/router'
import { useRestController } from '@/compossables/Axios'
import { useShambaStore } from '@/stores/shamba'

export const useAuthStore = defineStore('auth', () => {
  let shambaStore = useShambaStore()
  const {fetchShamba} = shambaStore

  const login_path = "auth/"
  const login_payload = ref<loginT>({} as loginT)
  const loggedIn = ref(false)
  const login_res = ref<loggedInT>({} as loggedInT)
  const access_token = ref<string>();

  const get_login_res = computed(() => login_res.value)


  const get_logged_status= computed(() => loggedIn.value || localStorage.getItem('access_token') != null)

  function login(payload:loginT) {
    const url = `${login_path}login`;
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
        localStorage.setItem("user_id", login_res.value.id as string);
        router.push("/");
      }

    }).finally(()=>{
      fetchShamba()
    });

  }
  function register(payload:registerT) {
    const url = `${login_path}register`;
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
