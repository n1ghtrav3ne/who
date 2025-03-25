<script setup lang="ts">
import Choose from "~/components/routes/customize/Choose.vue";
const announcement=ref(false)
</script>

<template>
  <div>

    <Choose v-if="announcement===false"
            @change="announcement=true"
            target=""
            title="کفش" />

    <div v-else
         class="container flex flex-col gap-8 items-center justify-center mx-auto text-center w-full h-screen lg:w-[80%]">

      <span class="text-[16px] lg:text-2xl">اطلاعات شما با موفقیت ثبت شد! حالا می‌توانید از پیشنهادات دقیق‌تر استفاده کنید. در صورت نیاز، سایزها رو در قسمت پروفایل ویرایش کنید.</span>

      <div class="flex flex-row gap-4 lg:gap-6 w-full lg:w-fit">

        <TheButton class="w-full lg:w-fit" text="ورود به سایت" button-type="fill" />

        <TheButton class="w-full lg:w-fit" text="ویرایش سایز ها" button-type="outline" />

      </div>

    </div>


  </div>
</template>
