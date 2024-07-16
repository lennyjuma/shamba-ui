<script setup lang="ts">

import Technical_reviews from '@/components/landing_page/Technical_reviews.vue'
import Product_header from "@/views/product/product_header.vue";
import Product_capability from "@/views/product/product_capability.vue";
import Product_details from "@/views/product/product_details.vue";
import Subscribe from "@/components/landing_page/subscribe.vue";
import Reviews from "@/views/product/Reviews.vue";
</script>

<template>
  <product_header/>
  <product_capability/>
<!--  <product_details/>-->
  <Technical_reviews/>
  <Reviews/>
  <subscribe/>

</template>