<script setup lang="ts">

import ArrowButton from "~/components/global/ArrowButton.vue";
</script>

<template>
  <div class="flex flex-row w-full items-center gap-4 text-xs lg:text-sm">

    <div class="flex flex-row">

      <CheckBox />

      <span class="sizeText">محصولات سایز شما</span>

    </div>

    <ArrowButton text="دسته بندی" />

    <ArrowButton text="تعداد بازدید" />

    <ArrowButton text="قیمت" />

  </div>
</template>
<style scoped>
.sizeText{
  background: linear-gradient(97deg, #D1CC53 -8.52%, #7C24C0 55.26%, #20ABBE 120.37%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>