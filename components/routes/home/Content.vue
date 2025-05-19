<script setup lang="ts">
import shoe from "/images/shoe.webp"

import clothes from "/images/clothes.webp"

import pants from "/images/pants.webp"

</script>

<template>
  <ClientOnly>
    <div class="grid grid-cols-2 lg:grid-cols-3 gap-y-8 lg:gap-y-0 w-full gap-3 lg:gap-5 p-5 lg:p-10 text-[20px] lg:text-[32px] font-light lg:font-bold text-neutral-50">

      <Poster :img="pants">
        <span class="flex justify-center items-center w-full h-full cursor-pointer">شلوار</span>
      </Poster>

      <Poster :img="shoe">
        <span class="flex justify-center items-center w-full h-full cursor-pointer">کتونی</span>
      </Poster>

      <Poster :img="clothes" class="col-span-2 lg:col-span-1">
        <span class="flex justify-center items-center w-full h-full cursor-pointer text-[16px] lg:text-[32px]">دسته بندی ها</span>
      </Poster>

    </div>
  </ClientOnly>
</template>