<script setup lang="ts">
import model from "assets/image/model1.png";
import model2 from "assets/image/model2.png";
import Achievements from "~/components/landing/Achievements.vue";
import Discount from "~/components/landing/Discount.vue";
import Products from "~/components/landing/Products.vue";
</script>

<template>
  <div class="container mx-auto flex flex-col gap-10">

    <span class="text-[56px] font-light text-center">کالکشن  جدید “هو”</span>

    <Products />

    <span class="text-2xl font-light">چرا هو؟</span>

    <Achievements />

    <Discount />

    <span class="text-[20px] font-light text-center lg:text-2xl">دسته بندی ها</span>

    <div class="grid grid-cols-1 lg:grid-cols-3 w-full gap-8 h-[700px] overflow-y-auto">

      <Poster class="bg-center" :img="model2" />
      <Poster class="bg-center" :img="model" />
      <Poster class="bg-center" :img="model2" />


    </div>

  </div>
</template>