<template>
  <swiper-container class="h-auto"
                    :scrollbar="{ hide: false,}"
                    :slides-per-view="1"
                    :space-between="spaceBetween"
                    :centered-slides="true"
                    :autoplay="{delay: 100}"
                    :loop="true"
                    :breakpoints="{
      768: {
        slidesPerView: 1,
      },
    }"
                    @swiperprogress="onProgress"
                    @swiperslidechange="onSlideChange"
  >
    <swiper-slide > <hero :img_url="cont.img" :description="cont.description"/> </swiper-slide>
    <swiper-slide > <hero :img_url="cont.img" :description="cont.description"/> </swiper-slide>
    <swiper-slide > <hero :img_url="cont.img" :description="cont.description"/> </swiper-slide>
    <swiper-slide > <hero :img_url="cont.img" :description="cont.description"/> </swiper-slide>
    <swiper-slide > <hero :img_url="cont.img" :description="cont.description"/> </swiper-slide>
    <swiper-slide > <hero :img_url="cont.img" :description="cont.description"/> </swiper-slide>

  </swiper-container>
</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue';

import {register} from 'swiper/element/bundle';
import Hero from "@/components/landing_page/Hero.vue";

register();

onMounted(()=>{
  register()
})

const spaceBetween = 10;
const onProgress = (e) => {
  const [swiper, progress] = e.detail;
  console.log(progress)
};

const onSlideChange = (e) => {
  console.log('slide changed')
}
const cont = {
  img: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  description: "Use the right fertiliser during plantation of your plants"
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