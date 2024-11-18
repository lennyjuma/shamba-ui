<script setup lang="ts">
import Nav_bar from '@/components/navigation/Nav_bar.vue'
import Footer from '@/components/navigation/Footer.vue'
import Notification from '@/components/utils/notification.vue'
import { useNotificationStore } from '@/stores/notification'
import { storeToRefs } from 'pinia'
const notificationStore = useNotificationStore()
const {notificationStatus,msg} = storeToRefs(notificationStore)
</script>

<template>
  <notification v-if="notificationStatus" :msg="msg" class="z-50"/>
  <Nav_bar/>

  <RouterView />

  <Footer/>

</template>

