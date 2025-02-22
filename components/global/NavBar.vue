<script setup lang="ts">
    const showNav=ref<boolean>(false);
</script>

<template>
  <div class="bg-white shadow-md grid grid-cols-12 items-center gap-2 py-4 px-3">
    <div class="col-span-4 hidden md:flex gap-5">
      <div>
        <NuxtLink href="#">کالکشن</NuxtLink>
      </div>

      <div>
        <NuxtLink href="#">دسته بندی</NuxtLink>
      </div>

      <div>
        <NuxtLink href="#">جستجو</NuxtLink>
      </div>
    </div>

    <div class="col-span-4 flex md:hidden gap-2 select-none">
      <span class="cursor-pointer" @click="showNav = !showNav">
        nav
      </span>

        <NavMenu @close="showNav=false" class="duration-300" :class="showNav ? 'translate-x-0' : 'translate-x-full'" />

    </div>

    <div class="col-span-4 text-center">
      WHO
    </div>

    <div class="col-span-4 hidden md:flex justify-end gap-5">
      <div class="cursor-pointer">
        سبد خرید
      </div>

      <div class="cursor-pointer">
        پروفایل
      </div>
    </div>

    <div class="col-span-4 flex md:hidden gap-2 justify-end">
      <div>
        cart
      </div>

      <div>
        sear
      </div>
    </div>
  </div>
</template>