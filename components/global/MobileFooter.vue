<script setup lang="ts">

</script>

<template>
  <div class="flex flex-col w-full gap-6 px-5 pt-14 pb-2">

    <div class="flex flex-col gap-6 text-[16px]">
      <span>اینستاگرام</span>
      <span>پشتیبانی</span>
    </div>

    <div class="flex flex-col gap-6 text-[16px]">
      <span @click="useRouter().push('/about')">درباره ما</span>
      <span @click="useRouter().push('/contact')">تماس با ما</span>
    </div>

    <div class="flex flex-col gap-2 font-light text-xs">
      <span>آدرس: کرمان - بلوارنصر - اول حمزه شمالی</span>
      <span>0913 199 9600</span>
    </div>

    <div class="flex justify-center text-2xl font-light pt-2 border-t border-neutral-200">
      <span>
        <TheLogo />
      </span>
    </div>

  </div>
</template>