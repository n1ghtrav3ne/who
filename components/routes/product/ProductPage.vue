<script setup lang="ts">
import image1 from "/images/image1.webp";
import image2 from "/images/image2.webp";
import image3 from "/images/image3.webp";
import Detail from "~/components/routes/product/Detail.vue";
import ProductCard from "~/components/global/ProductCard.vue";

const items = ref([image1, image2, image3]);

const sizeTable=ref(false)

const containerRef = ref(null);

const swiper = useSwiper(containerRef, {
  effect: 'slide',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

});

</script>

<template>
  <div class="flex flex-col">

    <div class="flex flex-col gap-6 lg:flex-row lg:gap-32">

      <ClientOnly>
        <swiper-container class="lg:w-1/2" ref="containerRef">
          <swiper-slide v-for="(item, index) in items" :key="index">
            <img :src="item" alt="image" />
          </swiper-slide>

          <div class="swiper-pagination lg:hidden"></div>

        </swiper-container>
      </ClientOnly>

      <div class="container flex flex-col gap-6 lg:mt-10 lg:w-[50%] lg:ml-20">

        <BreadCrumbs />

        <Detail @show="sizeTable=true" :available="true" />

      </div>

    </div>


    <span class="text-[32px] font-light text-center mt-20 mb-10">پیشنهاد ما به شما</span>

    <div class="grid grid-cols-2 gap-4 px-4 lg:grid-cols-4 lg:gap-8">

      <ProductCard v-for="index in 4"
                   :image="'/images/productImg.webp'"
                   title="محصول مورد نظر کد"
                   :code="1234"
                   :available="true"
                   :price="30000"
                   :discount-price="15000" />

    </div>

  </div>

  <PantsTableSize @close="sizeTable=false"
                  v-if="sizeTable" />
</template>
