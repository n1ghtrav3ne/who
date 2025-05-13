<script setup lang="ts">
const number=ref(0)
</script>

<template>
  <div class="container flex w-full flex-col gap-10 lg:w-[50%]">

    <span class="text-[32px] font-bold">سبد خرید</span>

    <div class="flex flex-col gap-6 w-full">

      <div class="grid grid-cols-6 border-b w-full border-b-neutral-950 pb-2 text-[20px] font-light">

        <span class="col-span-2">محصول</span>

        <span>قیمت</span>

        <span>تعداد</span>

        <span>قیمت کل</span>

      </div>

      <div v-for="index in 2" class="w-full grid grid-cols-6 place-items-center text-sm gap-10">

        <div class="flex flex-row gap-2 col-span-2 items-center">

          <div class="w-[80px] h-[119px]">
            <poster img="/images/productImg.webp" />
          </div>

          <div class="flex flex-col gap-2">

            <span>محصول مورد نظر کد ۱۲۳۴</span>

            <span>مشکی - XS</span>

          </div>

        </div>

        <span>۱,200,00۰ تومان</span>


        <div class="flex flex-row justify-between gap-4 text-[16px] cursor-pointer select-none">

          <span @click="number++">+</span>

          <span>{{number}}</span>

          <span @click="number > 0 ? number-- : null">-</span>

        </div>

        <span>۲,۴00,00۰ تومان</span>

        <Icon icon="trash" />

      </div>


    </div>

  </div>
</template>
