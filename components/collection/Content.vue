<script setup lang="ts">
import male from "~/assets/image/male.jpg"

import female from "~/assets/image/female.jpg"

import slide from "~/assets/image/slide.jpg"
</script>

<template>
  <div class="grid grid-cols-2 w-full mt-5">

    <Poster :img="male">
      <div class="w-full h-full border flex flex-col items-center relative justify-center text-neutral-50">

        <span class="text-[16px] lg:text-[64px] font-light">
          کالکشن جدید ۲۰۲۵
        </span>

        <span class="text-sm lg:text-lg underline cursor-pointer relative top-[30%]">
          خرید کنید
        </span>

      </div>
    </Poster>

    <Poster :img="female">
      <div class="w-full h-full border flex flex-col items-center relative justify-center text-neutral-50">

        <span class="text-[16px] lg:text-[64px] font-light">
          کالکشن جدید ۲۰۲۵
        </span>

        <span class="text-sm lg:text-lg underline cursor-pointer relative top-[30%]">
          خرید کنید
        </span>

      </div>
    </Poster>

    <Poster :img="slide" class="col-span-2">
      <span class="w-full h-full flex justify-center items-center text-2xl lg:text-[64px] font-light text-neutral-50">
        کالکشن جدید ۲۰۲۵
      </span>
    </Poster>

  </div>
</template>