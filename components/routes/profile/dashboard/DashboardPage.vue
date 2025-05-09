<script setup lang="ts">

import Order from "~/components/routes/profile/dashboard/Order.vue";
import ProductCard from "~/components/global/ProductCard.vue";
import img from "~/assets/image/productImg.jpg"

const show=ref(false);
</script>

<template>
  <div class="container flex flex-col gap-12">

    <Order />

    <div class="flex flex-col gap-4 mt-4">

      <span class="text-[16px] font-bold lg:text-[20px]">مورد علاقه ها</span>

      <div v-if="show"
           class="flex flex-nowrap gap-8 select-none pr-5 overflow-x-auto lg:gap-12 w-full">
        <ProductCard :image="img"
                     v-for="index in 8"
                     :key="index"
                     title="محصول مورد نظر کد"
                     :code="1234"
                     :available="true"
                     :price="30000"
                     :discount-price="15000"
                     class="flex-shrink-0" />
      </div>

      <div v-else class="gap-1 text-[16px] font-light lg:text-[20px]">

        <span>محصولی به مورد علاقه ها اضافه نکردید.</span>

        <span @click="useRouter().push('/category')"
              class="underline cursor-pointer"
        >
          مشاهده محصولات
        </span>

      </div>

    </div>

    <div class="flex flex-col gap-4">

      <span class="text-[16px] font-bold lg:text-[20px]">خرید های پر تکرار</span>

      <div v-if="show"
           class="flex flex-nowrap gap-8 select-none pr-5 overflow-x-auto lg:gap-12 w-full">
        <ProductCard :image="img"
                     v-for="index in 8"
                     :key="index"
                     title="محصول مورد نظر کد"
                     :code="1234"
                     :available="true"
                     :price="30000"
                     :discount-price="15000"
                     class="flex-shrink-0" />
      </div>

      <div v-else class="text-[16px] font-light gap-1 lg:text-[20px]">

        <span>هنوز خرید نکرده اید!</span>

        <span @click="useRouter().push('/category')"
              class="underline cursor-pointer"
        >
          خرید کنید
        </span>

      </div>

    </div>

  </div>
</template>
