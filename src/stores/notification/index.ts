import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useNotificationStore = defineStore("notificationStore", () => {
  const notificationStatus = ref(false);
  const count = ref(0);
  const msg = ref<string>("To be notification message");
  function toggleNotification(param: string, msgIn: string) {
    msg.value = msgIn;
    // alert(param)
    if (param === "success") {
      notificationStatus.value = !notificationStatus.value;
      setTimeout(() => {
        notificationStatus.value = !notificationStatus.value;
      }, 2500);
    }
  }

  return {  msg,  notificationStatus, toggleNotification };
});
