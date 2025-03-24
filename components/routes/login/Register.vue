<script setup lang="ts">
const name=ref("")

const province=ref("")

const city=ref("")
</script>

<template>
  <div class="container w-full h-screen flex flex-col justify-center items-center gap-8 mx-auto lg:w-[25%]">

    <div class="flex flex-col gap-4 text-center">

      <span class="text-2xl font-light ">مشخصات کلی</span>

      <span class="text-sm text-neutral-300">نام و نام خانوادگی خود را وارد کنید</span>

    </div>

    <TheInput class="w-full"
              type="text"
              title="نام و نام خانوادگی"
              placeholder="متن"
              v-model="name" />

    <TheInput class="w-full"
              type="text"
              title="استان"
              placeholder="متن"
              v-model="province" />

    <TheInput class="w-full"
              type="text"
              title="شهر"
              placeholder="متن"
              v-model="city" />

    <TheButton class="w-full"
               button-type="fill"
               text="ادامه" />

  </div>
</template>