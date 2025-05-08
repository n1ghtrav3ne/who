<script setup lang="ts">

import Announce from "~/components/global/Announce.vue";

const timeLeft = ref(60);

onMounted(() => {
  const interval = setInterval(() => {
    if (timeLeft.value > 0) {
      timeLeft.value--;
    } else {
      clearInterval(interval);
    }
  }, 1000);
});

const show=ref(false)
</script>

<template>
  <div class="px-4 w-full h-screen flex flex-col justify-center items-center">

    <div v-if="!show" class="flex flex-col items-center justify-center gap-8 w-full mb-32 lg:w-[25%]">

      <div class="flex flex-col gap-4">
        <span class="text-2xl font-light">رمز یکبار مصرف را وارد کنید</span>
        <span class="text-xs text-neutral-300">رمز یکبار مصرف به شماره 0912345678 ارسال شد.</span>
      </div>

      <MobileCode :max-charachters="4" :character-per-input="1" />

      <div class="flex flex-row justify-between gap-8 items-center text-xs text-neutral-300">
        <span>زمان باقی مانده تا ارسال مجدد رمز:</span>
        <span>{{ timeLeft }} ثانیه</span>
      </div>

      <TheButton @click="show=true" class="w-full" text="ادامه" button-type="fill" size="lg" />

      <div class="flex flex-row justify-between gap-8 items-center text-xs text-neutral-300">
        <span>شماره تلفن را اشتباه وارد کردید؟</span>
        <TheLink target="login" text="ویرایش" />
      </div>

    </div>

    <Announce v-else
        continue="/customize/clothes"
        skip="register"
        text="برای راحتی شما، می‌خواهیم پیشنهادات دقیقی بر اساس سایزتون داشته باشیم. اگر دوست داشتید، میتونید سایز خودتون رو وارد کنید، در غیر این صورت می‌تونید این مرحله رو رد کنید."
    >
      <span class="text-sm text-neutral-300">این اطلاعات برای پیدا کردن لباس‌ها و کفش‌های مناسب سایز شما استفاده می‌شود.</span>
    </Announce>

  </div>
</template>
