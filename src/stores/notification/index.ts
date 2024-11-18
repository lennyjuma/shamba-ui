import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useNotificationStore = defineStore("notificationStore", () => {
  const successNotification = ref(false);
  const count = ref(0);
  function toggleNotification(param: string, msgIn: string) {
    msg.value = msgIn;
    // alert(param)
    if (param === "success") {
      successNotification.value = !successNotification.value;
      setTimeout(() => {
        successNotification.value = !successNotification.value;
      }, 2500);
    }
  }

  return {  msg, successNotification, toggleNotification };
});
