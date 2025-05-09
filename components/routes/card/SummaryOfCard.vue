<script setup lang="ts">

</script>

<template>
  <div class="flex flex-col gap-8 w-full lg:w-[30%]">

    <span class="text-[20px] font-bold">مجموع سبد خرید</span>

    <div class="flex flex-row w-full items-center justify-between text-[16px]">

      <span class="font-light">قیمت سبد خرید</span>

      <span class="font-bold">۲,500,000تومان</span>

    </div>

    <div class="flex flex-row w-full items-center justify-between text-[16px]">

      <span class="font-light">تخفیف</span>

      <span class="font-bold">۲,500,000تومان</span>

    </div>

    <div class="flex flex-row w-full items-center justify-between text-[16px]">

      <span class="font-light">قیمت نهایی</span>

      <span class="font-bold">۱۰۰,000تومان</span>

    </div>

    <TheButton class="w-full"
               text="ادامه"
               button-type="fill"
               size="lg" />

  </div>
</template>