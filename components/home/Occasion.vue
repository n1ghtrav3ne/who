<script setup lang="ts">

import male from "~/assets/image/male.jpg"

import female from "~/assets/image/female.jpg"

</script>

<template>
  <ClientOnly>

    <span class="text-[16px] lg:text-[32px] font-light w-full flex justify-center relative top-3">بهترین ها برای ولنتاین</span>

    <div class="w-full lg:w-[90%] mx-auto grid grid-cols-2 gap-3 lg:gap-8 p-5 lg:p-10 text-neutral-50 text-[16px] lg:text-[32px] font-bold lg:font-light">

      <Poster :img="male">
        <span class="flex justify-center items-center w-full h-full cursor-pointer">مناسب آقایان</span>
      </Poster>

      <Poster :img="female">
        <span class="flex justify-center items-center w-full h-full cursor-pointer">مناسب بانوان</span>
      </Poster>

    </div>

  </ClientOnly>
</template>