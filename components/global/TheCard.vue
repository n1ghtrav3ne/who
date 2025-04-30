<script setup lang="ts">
import model from "~/assets/image/model1.png"

const detail=reactive(
    {
      code:1234,
      style:"مشکی - XS",
      price:"۱,200,00۰"
    }
    )

const number=ref(0)
</script>

<template>
  <div class="fixed flex flex-row-reverse bg-neutral-400 w-full h-screen z-50 top-0 bg-opacity-40">

    <div class="flex flex-col gap-5 items-start w-full bg-white lg:w-[30%]">

      <span @click="$emit('close')" class="material-symbols-outlined mr-[5%] mt-7 cursor-pointer">
      close
      </span>

      <span class="text-[32px] font-bold container">سبد خرید</span>

      <div class="container flex flex-col gap-10 pb-10 h-[40%] w-full overflow-y-auto border-b border-b-neutral-200">

        <div v-for="index in 2" class="grid grid-cols-3 w-full gap-4">

          <div class="flex flex-row gap-2 col-span-2">

            <div class="w-[80px] h-[119px]">
              <Poster :img="model" />
            </div>

            <div class="flex flex-col gap-2 text-sm">

              <span>محصول مورد نظر کد{{detail.code}}</span>

              <span>{{detail.style}}</span>

              <span>{{detail.price}}</span>

              <span>تومان</span>

            </div>

          </div>

          <div class="flex flex-col justify-between">

            <div class="flex flex-row justify-between text-[16px] cursor-pointer select-none">

              <span @click="number++">+</span>

              <span>{{number}}</span>

              <span @click="number > 0 ? number-- : null">-</span>

            </div>

            <span class="material-symbols-outlined cursor-pointer">
            delete
            </span>

          </div>

        </div>

      </div>

      <div class="container flex flex-col gap-4">

        <div class="flex flex-row items-center text-[20px] font-bold justify-between">

          <span>جمع کل</span>

          <div class="flex flex-col">
            <span>۲,800,000</span>
            <span>تومان</span>
          </div>

        </div>

        <TheButton class="w-full" text="ادامه فرایند خرید" button-type="fill" size="lg" />

      </div>

    </div>

  </div>
</template>