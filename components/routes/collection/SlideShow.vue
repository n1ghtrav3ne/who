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
    <swiper-container ref="containerRef"
                      :init="false">

      <swiper-slide v-for="index in 3">

        <div class="h-auto w-full cursor-pointer">
          <poster @click="useRouter().push('/collection/products')" :img="'images/collectionImg.webp'">

            <div class="flex flex-col h-full justify-center items-center w-full">

              <span class="text-[40px] lg:text-[64px] text-neutral-50 font-light w-full h-full items-center flex justify-center">کالکشن جدید ۲۰۲۵</span>

              <div class="flex flex-col items-center gap-6 relative mb-12 lg:gap-16">

                <span class="text-white text-xs underline lg:text-[18px]">خرید کنید</span>

                <Icon icon="arrowDown" color="#ffffff" :size="24" />

              </div>

            </div>

          </poster>
        </div>

      </swiper-slide>

    </swiper-container>

  </ClientOnly>
</template>