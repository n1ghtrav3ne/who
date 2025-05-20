<script setup lang="ts">

import male from "/images/male.webp"

import female from "/images/female.webp"

</script>

<template>
  <ClientOnly>

    <span class="text-[16px] lg:text-[32px] font-light w-full flex justify-center relative top-3">بهترین ها برای ولنتاین</span>

    <div class="w-full lg:w-[90%] mx-auto grid grid-cols-2 gap-3 lg:gap-8 p-5 lg:p-10 text-neutral-50 text-[16px] lg:text-[32px] font-bold lg:font-light">

      <div @click="useRouter().push('/events')" class="h-[400px] lg:h-auto">
        <Poster :img="male">
          <span class="flex justify-center items-center w-full h-full cursor-pointer">مناسب آقایان</span>
        </Poster>
      </div>

      <div @click="useRouter().push('/events')" class="h-[400px] lg:h-auto">
        <Poster :img="female">
          <span class="flex justify-center items-center w-full h-full cursor-pointer">مناسب بانوان</span>
        </Poster>
      </div>

    </div>

  </ClientOnly>
</template>