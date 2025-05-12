<script setup lang="ts">
import model from "assets/image/model1.png";
import model2 from "assets/image/model2.png";
</script>

<template>
  <div class="w-full h-auto flex flex-col gap-4">
    <div class="w-full lg:hidden">
      <Poster :img="model" />
    </div>

    <div class="grid grid-cols-2 lg:grid-cols-3 gap-2 w-full">
      <poster :img="model" />
      <poster :img="model2" />
      <poster :img="model" />
    </div>

    <div class="flex flex-col w-full items-center lg:w-1/5 mx-auto">
      <button class="flex justify-center w-full items-center bg-neutral-950 text-white px-5 py-2 text-sm">
        مشاهده کالکشن ها!
      </button>
      <span class="material-symbols-rounded text-[40px] font-bold cursor-pointer">
        <Icon class="mt-3" icon="caretDown" :size="42" />
      </span>
    </div>

   <div class="flex flex-col lg:flex-row-reverse w-full h-fit gap-[26px]">
      <span class="font-light text-[16px] lg:text-[32px] lg:w-[60%]">
        اینجا فقط لباس نیست، اینجا جاییه که جسارت و خلاقیت، ترندها رو به استایل خاص تو تبدیل می‌کنن.
      </span>

     <hr class="w-full bg-neutral-200 lg:hidden">

     <hr class="w-[1px] hidden h-[100px] bg-neutral-200 lg:flex">

     <span class="font-light text-[16px] lg:text-[32px]">
      ما در “هو” بهترین تجربه خرید رو براتون رقم میزنیم!
     </span>

   </div>

  </div>
</template>