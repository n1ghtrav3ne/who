<script setup lang="ts">
import exam3 from "assets/image/model2.png"
</script>

<template>
  <div class="grid grid-cols-2 w-full lg:mt-5">
    <poster @click="useRouter().push('/collection/products')" :img="'images/collExam1.webp'">
      <div class="w-full h-full border flex flex-col items-center relative justify-center text-neutral-50 cursor-pointer">
        <span class="text-[16px] lg:text-[64px] font-light">
          کالکشن جدید ۲۰۲۵
        </span>
        <span class="text-sm lg:text-lg underline cursor-pointer relative top-[30%]">
          خرید کنید
        </span>
      </div>
    </poster>

    <poster @click="useRouter().push('/collection/products')" img="/images/colExam2.webp">
      <div class="w-full h-full border flex flex-col items-center relative justify-center text-neutral-50 cursor-pointer">
        <span class="text-[16px] lg:text-[64px] font-light">
          کالکشن جدید ۲۰۲۵
        </span>
        <span class="text-sm lg:text-lg underline cursor-pointer relative top-[30%]">
          خرید کنید
        </span>
      </div>
    </poster>

    <div class="col-span-2 cursor-pointer h-[800px] lg:mt-6">
      <poster @click="useRouter().push('/collection/products')" :img="'/images/model2.webp'">
      <span class="w-full h-full flex justify-center items-center text-2xl lg:text-[64px] font-light text-neutral-50">
        کالکشن جدید ۲۰۲۵
      </span>
      </poster>
    </div>
  </div>
</template>