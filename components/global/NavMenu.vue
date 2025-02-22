<script setup lang="ts">
const emit=defineEmits(['close'])
</script>

<template>
  <div class="flex flex-col h-screen w-full px-5 bg-white fixed top-0 right-0 left-0 z-50 lg:hidden">

    <div class="flex flex-row h-[64px] justify-between items-center w-full">

      <span @click="emit('close')" class="material-symbols-rounded">
      close
      </span>

      <span class="text-2xl font-light">
        WHO
      </span>

      <div class="flex flex-row items-center gap-[18px]">

        <span class="material-symbols-rounded">
        local_mall
        </span>

        <span class="material-symbols-rounded">
        search
        </span>

      </div>

    </div>

    <div class="flex flex-col text-sm gap-4 mt-[68px]">

      <div class="flex flex-row gap-2 px-6">

        <span>دسته بندی</span>

        <span class="material-symbols-rounded">
        keyboard_arrow_down
        </span>

      </div>

      <div class="flex flex-row gap-2 px-6">

        <span>کالکشن‌ها</span>

        <span class="material-symbols-rounded">
        keyboard_arrow_down
        </span>

      </div>

    </div>

    <div class="flex flex-col gap-4 mt-12 text-sm">

      <NuxtLink to="#">حساب کاربری</NuxtLink>

      <NuxtLink to="#">درباره ما</NuxtLink>

      <NuxtLink to="#">تماس با ما</NuxtLink>

      <NuxtLink to="#">پشتیبانی</NuxtLink>

      <NuxtLink to="#">اینستاگرام</NuxtLink>

    </div>

  </div>
</template>
