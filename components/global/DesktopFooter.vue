<script setup lang="ts">

</script>

<template>
  <div class="flex flex-col gap-2 w-full px-10 pb-8 pt-[72px]">

    <div class="flex flex-row justify-between items-center cursor-pointer text-[16px]">

      <div class="flex flex-row items-center gap-10">

        <span>اینستاگرام</span>

        <span>پشتیبانی</span>

      </div>

      <span>
        <TheLogo />
      </span>

      <div class="flex flex-row items-center gap-10">

        <span @click="useRouter().push('/contact')">تماس با ما</span>

        <span @click="useRouter().push('/about')">درباره ما</span>

      </div>

    </div>

    <div class="flex flex-row justify-center gap-10 font-light">

      <span>آدرس: کرمان - بلوارنصر - اول حمزه شمالی</span>

      <span>0913 199 9600</span>

    </div>

  </div>
</template>