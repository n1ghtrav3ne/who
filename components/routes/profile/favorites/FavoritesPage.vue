<script setup lang="ts">
import ProductCard from "~/components/global/ProductCard.vue";
</script>

<template>
  <div class="container grid grid-cols-2 gap-5 lg:gap-10 lg:w-full lg:grid-cols-4">
    <ProductCard v-for="index in 6"
                 image="/images/productImg.webp"
                 :key="index"
                 title="محصول مورد نظر کد"
                 :code="1234"
                 :available="true"
                 :price="30000"
                 :discount-price="15000"
                 class="flex-shrink-0" />
  </div>
</template>
