<script setup lang="ts">

</script>

<template>
  <div class="w-full h-auto flex flex-col gap-4">
    <div class="grid grid-cols-6 gap-2 w-full">
      <poster class="col-span-6 lg:col-span-2" :img="'/images/model1.png'" />
      <poster class="col-span-3 lg:col-span-2" :img="'/images/model2.png'" />
      <poster class="col-span-3 lg:col-span-2" :img="'/images/model1.png'" />
    </div>

    <div class="flex flex-col w-full items-center lg:w-1/5 mx-auto">
      <button class="flex justify-center w-full items-center bg-neutral-950 text-white px-5 py-2 text-sm">
        مشاهده کالکشن ها!
      </button>
      <span class="material-symbols-rounded text-[40px] font-bold cursor-pointer">
        <Icon class="mt-3" icon="caretDown" :size="42" />
      </span>
    </div>

   <div class="grid grid-cols-5 lg:flex-row-reverse w-full h-fit gap-3 lg:gap-0">
      <span class="font-light col-span-5 lg:col-span-2 text-[16px] text-justify lg:text-[32px]">
        اینجا فقط لباس نیست، اینجا جاییه که جسارت و خلاقیت، ترندها رو به استایل خاص تو تبدیل می‌کنن.
      </span>

     <hr class="w-full lg:w-[1px] col-span-5 lg:col-span-1 mx-auto lg:h-[100px] bg-neutral-200 lg:flex">

     <span class="font-light col-span-5 lg:col-span-2 text-[16px] text-justify lg:text-[32px]">
      ما در “هو” بهترین تجربه خرید رو براتون رقم میزنیم!
     </span>

   </div>

  </div>
</template>