<script setup lang="ts">

import CollectionImg from "~/assets/image/collectionImg.png"

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
    <swiper-container class="h-[730px] lg:h-fit cursor-pointer"
                      ref="containerRef"
                      :init="false">

      <swiper-slide v-for="index in 3">

        <Poster @click="useRouter().push('/collection/products')" :img="CollectionImg">

          <div class="flex flex-col h-full justify-center items-center w-full">

            <span class="text-[40px] lg:text-[64px] text-neutral-50 font-light w-full h-full items-center flex justify-center">کالکشن جدید ۲۰۲۵</span>

            <div class="flex flex-col items-center gap-12 relative mb-4">

              <span class="text-white text-[18px] underline">خرید کنید</span>

              <Icon icon="arrowDown" color="#ffffff" :size="32" />

            </div>

          </div>

        </Poster>

      </swiper-slide>

    </swiper-container>

  </ClientOnly>
</template>