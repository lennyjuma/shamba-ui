<template>
  <swiper-container
      :slides-per-view="1"
      :space-between="spaceBetween"
      :centered-slides="true"
      :autoplay="{duration: 300}"
      :pagination="{
      hideOnClick: true
    }"
      :breakpoints="{
      768: {
        slidesPerView: 1,
      },
    }"
      @swiperprogress="onProgress"
      @swiperslidechange="onSlideChange"
  >
    <swiper-slide v-for="cont in contents">
      <hero :img_url="cont.img" :description="cont.description"/>
    </swiper-slide>
  </swiper-container>
</template>

<script setup>
import { register } from 'swiper/element/bundle';
import {ref} from "vue";
import Hero from "@/components/landing_page/Hero.vue";

register();
const spaceBetween = 10;
const onProgress = (e) => {
  const [swiper, progress] = e.detail;
  console.log(progress)
};

const onSlideChange = (e) => {
  console.log('slide changed')
}
const contents = ref([
  {
    img: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Use the right fertiliser during plantation of your plants"
  },
  {
    img: "https://images.unsplash.com/photo-1508302730834-a3786a6c951d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Use the right fertiliser during top dressing"
  },
  {
    img: "https://images.unsplash.com/photo-1490072978022-b167e41f8e6f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Make your plants healthier, get healthy leaves"
  },
  {
    img: "https://images.unsplash.com/photo-1519897831810-a9a01aceccd1?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Make the roots strong and healthy"
  }
])

</script>
