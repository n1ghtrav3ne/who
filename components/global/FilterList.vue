<script setup lang="ts">
import ArrowButton from "~/components/global/ArrowButton.vue";

const showDropDown=ref(false)

</script>

<template>
  <div class="flex flex-row w-full items-center gap-2 text-xs relative mt-2 lg:text-sm">

    <div class="flex flex-row items-center lg:items-start">

      <CheckBox />

      <span class="sizeText mt-0.5">محصولات سایز شما</span>

    </div>

    <ArrowButton @click="showDropDown=!showDropDown" text="دسته بندی" />

    <ArrowButton text="تعداد بازدید" />

    <ArrowButton text="قیمت" />

    <DropDown v-if="showDropDown" @select="showDropDown=false" />

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