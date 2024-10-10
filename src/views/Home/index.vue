<template>
<!--  <Hero :img_url="`https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`"></Hero>-->
<slider_oooo/>
  <Incentives/>
  <Benefits/>
  <subscribe/>
</template>

<script setup lang="ts">
import Hero from '@/components/landing_page/Hero.vue'
import Incentives from '@/components/landing_page/Incentives.vue'
import Subscribe from "@/components/landing_page/subscribe.vue";
import Benefits from '@/views/Home/Benefits.vue'
import Slider from "@/views/swiper/slider.vue";
import Slider_oooo from "@/views/swiper/slider_oooo.vue";
</script>