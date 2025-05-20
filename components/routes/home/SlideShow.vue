<script setup lang="ts">
import image1 from "/images/image1.webp"

import image2 from "/images/image2.webp"

import image3 from "/images/image3.webp"

import slide from "/images/slide.webp"

import slide2 from "/images/aboutImg.webp"

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

      <swiper-slide>

        <div @click="useRouter().push('/collection')" class="h-[800px]">
          <Poster :img="slide">
            <span class="text-[40px] lg:text-[64px] text-neutral-50 font-light w-full h-full items-center flex justify-center">کالکشن جدید ۲۰۲۵</span>
          </Poster>
        </div>

      </swiper-slide>

      <swiper-slide>

        <div @click="useRouter().push('/collection')" class="h-[800px]">
          <Poster :img="slide2">
            <span class="text-[40px] lg:text-[64px] text-neutral-50 font-light w-full h-full items-center flex justify-center">کالکشن جدید ۲۰۲۵</span>
          </Poster>
        </div>

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