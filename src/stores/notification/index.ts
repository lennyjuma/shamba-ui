import { ref, computed, createVNode, render, onMounted } from 'vue'
import { defineStore } from "pinia";
import Notification from '@/components/utils/notification.vue'

export const useNotificationStore = defineStore("notificationStore", () => {
  const notificationStatus = ref(false);
  const container = ref(null) as any  ;
  const componentCount = ref(0);
  const getnotificationStatus = computed(()=>notificationStatus.value )
  const count = ref(0);
  const msg = ref<string>("To be notification message");
  function toggleNotification(param: string, msgIn: string) {
    msg.value = msgIn;
    create_notification( msgIn,param)
  }

  // Ensure the container exists
  onMounted(() => {
    container.value = document.getElementById('source_page') as HTMLDivElement ;
  });

  function create_notification(msg:string,param:string) {
    // Create a unique div for each child component
    const childContainer = document.createElement('div');
    childContainer.id = `child-${componentCount.value++}`;
    container.value.appendChild(childContainer);

    // Create a vnode for the ChildComponent
    const vnode = createVNode(Notification, { msg: msg,status: param });

    // Render the vnode into the newly created container
    render(vnode, childContainer);
    // if (notificationStatus){
    //   setTimeout(()=>{
    //     // toggleNotification("ggg","kk")
    //   },1000)
    // }
  }

  return {  msg, getnotificationStatus, notificationStatus, toggleNotification };
});
