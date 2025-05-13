<script setup lang="ts">
  import female from "assets/image/female.jpg"
  import male from "assets/image/male.jpg"
  import FilterList from "~/components/global/FilterList.vue";
  import Poster from "~/components/global/Poster.vue";
  import ProductCard from "~/components/global/ProductCard.vue";
  import ThePagination from "~/components/global/ThePagination.vue";
</script>

<template>
  <div class="flex flex-col gap-6 lg:gap-8">

    <div class="flex flex-row relative">
      <poster img="/images/female.webp">
        <span class="text-[16px] lg:text-[32px] font-light text-neutral-50">Urban Style</span>
      </poster>

      <Poster img="/images/male.webp">
        <span class="text-[16px] lg:text-[32px] font-light text-neutral-50">Urban Style</span>
      </Poster>

      <div class="absolute flex flex-col gap-2 items-center justify-end text-sm lg:text-[20px] lg:font-bold text-neutral-50 w-full h-full bottom-8">
        <span>اسکرول کنید</span>

        <Icon icon="arrowDown" />

      </div>

    </div>

    <div class="flex flex-col gap-2 mr-6">
      <BreadCrumbs size="sm" />
      <FilterList />
    </div>

    <div class="p-6 grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">

      <ProductCard v-for="index in 4"
                   :image="'/images/productImg.webp'"
                   title="محصول مورد نظر کد"
                   :code="1234"
                   :available="true"
                   :price="30000"
                   :discount-price="15000" />

    </div>

    <div class="flex items-center flex-col w-full">
      <ThePagination :count="8" :model-value="1"/>
    </div>

  </div>
</template>