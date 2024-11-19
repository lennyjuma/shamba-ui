<script setup lang="ts">
import Nav_bar from '@/components/navigation/Nav_bar.vue'
import Footer from '@/components/navigation/Footer.vue'
import { useNotificationStore } from '@/stores/notification'
useNotificationStore()
</script>

<template>
  <div class="flex-col absolute top-0 right-1.5 z-10" id="source_page">
  </div>

  <Nav_bar/>

  <RouterView />

  <Footer/>

</template>


