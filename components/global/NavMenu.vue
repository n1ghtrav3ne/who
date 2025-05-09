<script setup lang="ts">

</script>

<template>
  <div class="flex flex-col h-screen w-full px-5 bg-white fixed top-0 right-0 left-0 z-50 lg:hidden">

    <div class="flex flex-row h-[64px] justify-between items-center w-full">

      <Icon icon="x" @click="$emit('close')" />

      <span class="text-2xl font-light">
        WHO
      </span>

      <div class="flex flex-row items-center gap-[18px]">

        <Icon @click="$emit('card')" icon="shoppingBag" />

        <Icon @click="$emit('search')" icon="MagnifyingGlass" />

      </div>

    </div>

    <div class="flex flex-col text-sm gap-4 mt-[68px]">

      <div class="flex flex-row gap-2 px-6">

        <NuxtLink to="/category">دسته بندی</NuxtLink>

        <Icon icon="caretDown" :size="20" />

      </div>

      <div class="flex flex-row gap-2 px-6">

        <NuxtLink to="/collection">کالکشن‌ها</NuxtLink>

        <Icon icon="caretDown" :size="20" />

      </div>

    </div>

    <div class="flex flex-col gap-4 mt-12 text-sm">

      <NuxtLink to="/profile/dashboard">حساب کاربری</NuxtLink>

      <NuxtLink to="/about">درباره ما</NuxtLink>

      <NuxtLink to="/contact">تماس با ما</NuxtLink>

      <NuxtLink to="#">پشتیبانی</NuxtLink>

      <NuxtLink to="#">اینستاگرام</NuxtLink>

    </div>

  </div>
</template>
