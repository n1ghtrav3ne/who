<script setup lang="ts">
import exam1 from "assets/image/collExam1.png"

import exam2 from "assets/image/colExam2.png"

import exam3 from "assets/image/model2.png"
</script>

<template>
  <div class="grid grid-cols-2 w-full mt-5">

    <Poster @click="useRouter().push('/collection/products')" :img="exam1">
      <div class="w-full h-full border flex flex-col items-center relative justify-center text-neutral-50 cursor-pointer">

        <span class="text-[16px] lg:text-[64px] font-light">
          کالکشن جدید ۲۰۲۵
        </span>

        <span class="text-sm lg:text-lg underline cursor-pointer relative top-[30%]">
          خرید کنید
        </span>

      </div>
    </Poster>

    <Poster @click="useRouter().push('/collection/products')" :img="exam2">
      <div class="w-full h-full border flex flex-col items-center relative justify-center text-neutral-50 cursor-pointer">

        <span class="text-[16px] lg:text-[64px] font-light">
          کالکشن جدید ۲۰۲۵
        </span>

        <span class="text-sm lg:text-lg underline cursor-pointer relative top-[30%]">
          خرید کنید
        </span>

      </div>
    </Poster>

    <div class="col-span-2 mt-6 cursor-pointer h-[800px]">
      <Poster @click="useRouter().push('/collection/products')" :img="exam3">
      <span class="w-full h-full flex justify-center items-center text-2xl lg:text-[64px] font-light text-neutral-50">
        کالکشن جدید ۲۰۲۵
      </span>
      </Poster>
    </div>

  </div>
</template>