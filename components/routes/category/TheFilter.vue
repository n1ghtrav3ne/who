<script setup lang="ts">
import ArrowButton from "~/components/global/ArrowButton.vue";

</script>

<template>
  <div class="flex flex-row w-full items-center gap-2 text-xs relative mt-2 lg:gap-4 lg:text-sm">

    <div class="flex flex-row items-center lg:items-start">

      <CheckBox />

      <span class="sizeText mt-0.5">محصولات سایز شما</span>

    </div>

    <ArrowButton text="دسته بندی" />

    <ArrowButton text="تعداد بازدید" />

    <ArrowButton text="قیمت" />

  </div>
</template>
<style scoped>
.sizeText{
  background: linear-gradient(97deg, #0096FF 19.19%, #BB64FF 42.39%, #D753B5 77.84%, #EB7500 108.77%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>