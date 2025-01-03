import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'
import type { loggedInT, loginT, registerT } from '@/types'
import router from '@/router'
import { useRestController } from '@/compossables/Axios'
import { useShambaStore } from '@/stores/shamba'
import { useNotificationStore } from '@/stores/notification'
import { AxiosError } from 'axios'

export const useAuthStore = defineStore('auth', () => {
  const shambaStore = useShambaStore()
  const notificationStore = useNotificationStore()
  const {fetchShamba} = shambaStore
  const {toggleNotification} = notificationStore

  const login_path = "auth/"
  const login_payload = ref<loginT>({} as loginT)
  const loggedIn = ref(false)
  const token = ref(localStorage.getItem('access_token'))
  const login_res = ref<loggedInT>({} as loggedInT)
  const access_token = ref<string>();

  const get_login_res = computed(() => login_res.value)
  const get_token = computed(() => token.value != null)


  const get_logged_status= computed(() => loggedIn.value || get_token)

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
        token.value = "jj"
        router.push("/");
        toggleNotification("success","Logged in successfully.")
      }

    }).catch((error: Error)=>{
      if (error.response.data.description == "Email or password is incorrect"){
        toggleNotification("error", error.response.data.description as string)
      }else {
        toggleNotification('error', 'Please check your credentials')
      }
    }).finally(()=>{
      if( loggedIn.value) {
        fetchShamba()
      }
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
        token.value = "jj"
        loggedIn.value = true;
        localStorage.removeItem("access_token");
        localStorage.setItem("access_token", access_token.value as string);
        localStorage.setItem("user_full_name" , login_res.value.fullName as string);
        localStorage.removeItem("active_shamba_id");
        localStorage.removeItem("active_shamba_name");
        localStorage.setItem("user_email", login_res.value.email as string);
      }
      router.push("/verify/otp");

      toggleNotification("success","Created account successfully.")

    }).catch((error: Error)=>{
      toggleNotification("error",error.response.data.description as string);
    })
  }
  const set_loggedIn_to_false = () =>{
    token.value = null
    localStorage.removeItem("access_token");
    localStorage.removeItem("active_shamba_id");
    localStorage.removeItem("active_shamba_name");
    loggedIn.value = false;
    router.push("/"); // redirect to home after log out to make sure charts and tables are hidden
  }
  watch(token, ()=>{
    // alert("tik tok")
  })
  return { login, register, get_login_res, get_logged_status,set_loggedIn_to_false}
})
