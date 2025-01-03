import { ref } from "vue";
import axios, { AxiosError } from "axios";
import router from "@/router";
import { useMainStore } from '@/stores/shared/notificaton'
import { useAuthStore } from '@/stores/auth'
import { useNotificationStore } from '@/stores/notification'

// by convention, composable function names start with "use"
export async function useRestController(
  uri: string,
  method: string,
  data: object,
  msg?: string
) {
  const notificationStore = useNotificationStore();
  const authStore = useAuthStore()
  const { toggleNotification } = notificationStore;
  const { set_loggedIn_to_false } = authStore;

  // @ts-ignore
  // const url = `http://embedded.me.com/api/v1/${uri}`;
  const baseUrl = `/api/`;

  const url = `${import.meta.env.VITE_SPRING_URL}${baseUrl}${uri}`;

  const responseDTO = ref({}); //make this a state

  const key = localStorage.getItem("access_token");
  if (method != "auth") {
    axios.defaults.headers.common["Authorization"] = `Bearer ${key}`;
  }



  function redirectToLoginAfter403(error: AxiosError<any, any>) {
    if (error.response && error.response.status === 403) {
      console.log("Received a 403 response. Redirecting to login page...");
      localStorage.removeItem("access_token");
      axios.defaults.headers.common["Authorization"] = "None";
      // router.push("/");
      set_loggedIn_to_false()
    }
    /*if (error.response && error.response.status === 400) {
      const error_description = error.response.data.description
      console.log("Received a 400 bad request. Redirecting to login page...", error_description);
      if(error_description == "You do not have any farms yet") {
        toggleNotification('error', error_description)
      }
    } */else {
      // console.log("Error:", error.message);
      console.log("Error: " + JSON.stringify(error) );
    }
  }

  switch (method) {
    case "get": {
      await axios
        .get(url)
        .then((response) => {

          responseDTO.value = response;
        })
        .catch((error: AxiosError) => {
          redirectToLoginAfter403(error);
          throw error;
        });
      break;
    }
    case "post": {
      await axios
        .post(url, data)
        .then(function (response) {
          responseDTO.value = response;
          console.log("Post response", response);
          // toggleNotification("success", `Created account !`);
        })
        .catch(function (error: AxiosError) {
          redirectToLoginAfter403(error);
          throw error;

        });
      break;
    }
    case "auth": {
      // alert("here")
      await axios
        .post(url, data)
        .then(function (response) {
          responseDTO.value = response;
          console.log("Post response", response);
          // toggleNotification("success", `Created account !`);
        })
        .catch(function (error: AxiosError<any,any>) {
          redirectToLoginAfter403(error);
          // alert("kkkk")
          throw error;
        });
      break;
    }
    case "update": {
      axios
        .put(url, data)
        .then(function (response) {
          responseDTO.value = response;
          if (response.status === 200) {
            toggleNotification("success", `${msg} updated !`);
          }
        })
        .catch(function (error) {
          redirectToLoginAfter403(error);
          throw error;
        });
      break;
    }
    case "delete": {
      axios
        .delete(url, data)
        .then(function (response) {
          responseDTO.value = response;

        })
        .catch(function (error) {
          redirectToLoginAfter403(error);
          throw error;
        });
      break;
    }
    default: {
      //statements;
      break;
    }
  }
  console.log("responseDTO",responseDTO)

  return {
    responseDTO,
  };
}
