<script setup lang="ts">
import image1 from "assets/image/image1.jpg"

import image2 from "assets/image/image2.jpg"

import image3 from "assets/image/image3.jpg"

import slide from "assets/image/slide.jpg"

type hero ="hero1"|"hero2"

const props=defineProps({
  type:{
    type:String as ()=>hero,
    default:"hero1"
  },
})

const containerRef = ref(null)

const swiper = useSwiper(containerRef, {
  effect: 'slide',
  loop: true,
  autoplay: {
    delay: 5000,
  },
})
</script>

<template>
  <ClientOnly>
    <swiper-container v-if="type=='hero1'"
                      class="h-[730px] lg:h-fit cursor-pointer"
                      ref="containerRef"
                      :init="false">

      <swiper-slide v-for="index in 3">

        <Poster :img="slide">

          <span class="text-[40px] lg:text-[64px] text-neutral-50 font-light w-full h-full items-center flex justify-center">کالکشن جدید ۲۰۲۵</span>

        </Poster>

      </swiper-slide>

    </swiper-container>



    <div v-if="type=='hero2'"
         class="w-full grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 text-neutral-50 text-[16px] lg:text-[32px] font-light">

      <Poster :img="image1">
        <span class="w-full h-full flex flex-col justify-end items-center pb-10 lg:pb-20 bg-neutral-700 bg-opacity-20 cursor-pointer">
          پرفروش های پاییز
        </span>
      </Poster>

      <Poster :img="image2" class="order-first lg:order-none col-span-2 lg:col-span-1">
        <span class="w-full h-full flex items-center justify-center !text-2xl lg:text-[32px] bg-neutral-700 bg-opacity-20 cursor-pointer">
          Style your Life with “WHO”
        </span>
      </Poster>

      <Poster :img="image3">
        <span class="w-full h-full flex flex-col justify-end items-center pb-10 lg:pb-20 bg-neutral-700 bg-opacity-20 cursor-pointer">
          پرفروش های پاییز
        </span>
      </Poster>

    </div>

  </ClientOnly>
</template>