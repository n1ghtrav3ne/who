<script setup lang="ts">

</script>

<template>
  <div class="w-full h-[420px] lg:h-[380px]">
    <poster img="/images/model2.webp" class="lg:bg-center">
      <div class="container flex items-center text-neutral-50 bg-neutral-950 bg-opacity-50 absolute w-full h-full top-0 right-0">
        <div class="flex flex-col justify-center gap-5 mr-[10%]">
          <span class="font-light text-[20px] lg:text-[32px] lg:font-light">تخفیف ویژه فقط تا این جمعه!</span>

          <div class="flex flex-col lg:flex-row gap-5">
            <span class="text-[20px] font-light lg:text-[32px] lg:font-light">
              ۳۵٪ تخفیف + هدیه ویژه
              فرصت رو از دست نده، همین حالا خرید کن!
            </span>

            <NuxtLink to="/collection" class="flex flex-row items-center w-fit gap-2 px-3 py-2 border border-neutral-50 cursor-pointer">
              <span class="text-sm">مشاهده تخفیفات</span>
              <span class="material-symbols-outlined">
                <VsxIcon iconName="ArrowLeft" />
              </span>
            </NuxtLink>

          </div>
        </div>
      </div>
    </poster>
  </div>
</template>