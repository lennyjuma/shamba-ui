<script setup lang="ts">

import Technical_reviews from '@/components/landing_page/Technical_reviews.vue'
import Product_header from "@/views/product/product_header.vue";
import Product_details from "@/views/product/product_details.vue";
import Subscribe from "@/components/landing_page/subscribe.vue";
import Reviews from "@/views/product/Reviews.vue";
import How_it_works from '@/views/product/how_it_works.vue'
import Measuring_parameters from '@/views/product/measuring_parameters.vue'
</script>

<template>
  <product_header/>
  <product_details/>
  <measuring_parameters class="mt-6"/>
  <how_it_works/>
  <subscribe/>

</template>