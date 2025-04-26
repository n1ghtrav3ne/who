<script setup lang="ts">

</script>

<template>
  <div class="container flex flex-col w-full gap-10 items-center">

    <div class="flex flex-col gap-6 items-center">

      <span class="text-2xl font-light text-error-light">پراخت ناموفق</span>

      <span class="text-sm">مشکلی در پرداخت یا ثبت سفارش پیش آمد.</span>

      <span class="text-sm">در صورت بروز مشکل با پشتیبانی تماس بگیرید</span>

      <span class="text-sm">شماره پیگیری: ۹۰۹۰۹۰۹۰۹ </span>

    </div>

    <div class="flex flex-col gap-2 w-full">

      <TheButton class="w-full"
                 text="تماس با پشتیبانی"
                 button-type="fill"
                 size="lg" />

      <TheButton class="w-full"
                 text="ورود به ناحیه کاربری"
                 button-type="outline"
                 size="lg" />

    </div>

  </div>
</template>
