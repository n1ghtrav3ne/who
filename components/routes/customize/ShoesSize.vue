<script setup lang="ts">
import Choose from "~/components/routes/customize/Choose.vue";
const announcement=ref(false)
</script>

<template>
  <div class="flex h-screen w-full">

    <div v-if="!announcement" class="flex px-4 text-center w-full mb-[30%] mx-auto justify-center flex-col gap-2 items-center mt-10 lg:w-[40%]">

      <span class="text-2xl">سایز <span class="font-bold">کفش</span> خود را وارد کنید تا بهترین انتخاب‌ها رو داشته باشید.</span>

      <div class="flex flex-row gap-2 items-center mt-8">

        <span class="text-sm">سایز کفش خود را وارد کنید</span>

        <TheLink text="آموزش اندازه گیری" />

      </div>

      <TheSelect default-label="یک گزینه را انتخاب کنید"
                 model-value="">
        <template #options="{ selectOption }">
          <div v-for="size in ['S', 'M', 'L']" :key="size" @click="selectOption(size, size)">
            {{ size }}
          </div>
        </template>
      </TheSelect>

      <div class="flex flex-row gap-2 mt-4 w-full mx-auto justify-center lg:w-1/2">

        <TheButton @click="announcement=true" class="w-full" text="ادامه" button-type="fill" size="lg" />

        <TheButton @click="announcement=true" class="w-full" text="رد کردن" button-type="outline" size="lg" />

      </div>

    </div>

    <div v-else
         class="container flex flex-col gap-8 items-center justify-center mx-auto text-center w-full h-screen lg:w-[80%]">

      <span class="text-[16px] lg:text-2xl">اطلاعات شما با موفقیت ثبت شد! حالا می‌توانید از پیشنهادات دقیق‌تر استفاده کنید. در صورت نیاز، سایزها رو در قسمت پروفایل ویرایش کنید.</span>

      <div class="flex flex-row gap-4 lg:gap-6 w-full lg:w-fit">

        <TheButton @click="useRouter().push('/')" class="w-full lg:w-fit" text="ورود به سایت" button-type="fill" />

        <TheButton class="w-full lg:w-fit" text="ویرایش سایز ها" button-type="outline" />

      </div>

    </div>


  </div>
</template>
