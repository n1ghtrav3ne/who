<script setup lang="ts">
import Achievements from "~/components/routes/landing/Achievements.vue";
import Discount from "~/components/routes/landing/Discount.vue";
import Products from "~/components/routes/landing/Products.vue";
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

      <poster class="bg-center" :img="'/images/model1.png'" />
      <poster class="bg-center" :img="'/images/model2.png'" />
      <poster class="bg-center" :img="'/images/model1.png'" />


    </div>

  </div>
</template>