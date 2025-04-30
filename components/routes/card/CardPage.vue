<script setup lang="ts">
import SummaryOfCard from "~/components/routes/card/SummaryOfCard.vue";
import ProductDetailDesktop from "~/components/routes/card/ProductDetailDesktop.vue";
import ProductDetailMobile from "~/components/routes/card/ProductDetailMobile.vue";
</script>

<template>
  <div class="p-[12px] flex flex-col w-full justify-between h-screen lg:flex-row lg:px-10 lg:pt-14">

    <ProductDetailDesktop class="hidden lg:flex" />

    <ProductDetailMobile class="flex lg:hidden" />

    <SummaryOfCard />

  </div>
</template>