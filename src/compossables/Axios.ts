import { ref } from "vue";
import axios, { AxiosError } from "axios";
import router from "@/router";
import { useMainStore } from '@/stores/shared/notificaton'

// by convention, composable function names start with "use"
export async function useRestController(
  uri: string,
  method: string,
  data: object,
  msg?: string
) {
  const notificationStore = useMainStore();
  const { toggleNotification } = notificationStore;

  // @ts-ignore
  // const url = `http://embedded.me.com/api/v1/${uri}`;
  const baseUrl = `/api/v1/`;

  const url = `${import.meta.env.VITE_SPRING_URL}${baseUrl}${uri}`;

  const responseDTO = ref({}); //make this a state

  const key = localStorage.getItem("access_token");
  if (method !== "auth") {
    axios.defaults.headers.common["Authorization"] = `Bearer ${key}`;
  }


  function redirectToLoginAfter403(error: AxiosError<unknown, any>) {
    if (error.response && error.response.status === 403) {
      console.log("Received a 403 response. Redirecting to login page...");
      localStorage.removeItem("access_token");
      axios.defaults.headers.common["Authorization"] = "None";
      router.push("login");
    } else {
      console.log("Error:", error.message);
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
        });
      break;
    }
    case "post": {
      await axios
        .post(url, data)
        .then(function (response) {
          responseDTO.value = response;
          console.log("Post response", response);
          toggleNotification("success", `Created account !`);
        })
        .catch(function (error: AxiosError) {
          redirectToLoginAfter403(error);
        });
      break;
    }
    case "auth": {
      await axios
        .post(url, data)
        .then(function (response) {
          responseDTO.value = response;
          console.log("Post response", response);
          toggleNotification("success", `Created account !`);
        })
        .catch(function (error: AxiosError) {
          redirectToLoginAfter403(error);
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
        });
      break;
    }
    case "delete": {
      //statements;
      break;
    }
    default: {
      //statements;
      break;
    }
  }

  return {
    responseDTO,
  };
}
