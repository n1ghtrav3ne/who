<script setup lang="ts">
import model from "~/assets/image/productImg.jpg"

const number=ref(0)
</script>

<template>
  <div class="container flex w-full flex-col gap-10 lg:w-[50%]">

    <span class="text-[32px] font-bold">سبد خرید</span>

    <div class="flex flex-col gap-6 w-full">

      <div class="flex flex-row items-center justify-between border-b w-full border-b-neutral-950 pb-2 text-[20px] font-light">

        <span>محصول</span>

        <span>تعداد</span>

      </div>

      <div class="flex flex-col gap-6 w-full h-[400px] overflow-auto">

        <div v-for="index in 5" class="w-full flex flex-row text-sm gap-2">

          <div class="flex flex-row gap-2">

            <div class="w-[80px] h-[119px]">
              <Poster :img="model" />
            </div>

            <div class="flex flex-col gap-2">

              <span>محصول مورد نظر کد ۱۲۳۴</span>

              <span>مشکی - XS</span>

              <span>۱,200,00۰ تومان</span>

            </div>

          </div>


          <div class="flex flex-col mr-auto justify-between">

            <div class="flex flex-row gap-4 text-[16px] cursor-pointer select-none">

              <span @click="number++">+</span>

              <span>{{number}}</span>

              <span @click="number > 0 ? number-- : null">-</span>

            </div>

            <Icon icon="trash" class="mr-auto" />

          </div>

        </div>

      </div>

    </div>

  </div>
</template>
