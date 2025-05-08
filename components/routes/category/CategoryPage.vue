<script setup lang="ts">
import img from "~/assets/image/image1.jpg"
import ProductCard from "~/components/global/ProductCard.vue";
import ThePagination from "~/components/global/ThePagination.vue";
</script>

<template>
  <div class="px-4 pt-4 flex flex-col gap-6">

    <FilterList />

    <div class="grid grid-cols-2 gap-4 gap-y-10 lg:gap-y-16 lg:grid-cols-4 lg:gap-6">

      <ProductCard :image="img"
                   v-for="index in 4"
                   title="محصول مورد نظر کد"
                   status="new" :code="1234"
                   :available="true"
                   :price="30000"
                   :discount-price="15000" />

    </div>

    <div class="flex items-center flex-col w-full">
      <ThePagination :count="8" :model-value="8"/>
    </div>

  </div>
</template>