<script setup lang="ts">
  const userName=ref('')
  const phoneNumber=ref('')
  const email=ref('')
</script>

<template>
  <div class="container flex flex-col gap-10 border-b-neutral-200 border-b">

    <span class="text-[20px] font-normal lg:font-bold">ویرایش اطلاعات حساب کاربری</span>

    <div class="flex flex-col gap-6 w-full lg:w-[30%]">

      <TheInput v-model="userName"
                title="نام و نام خانوادگی"
                placeholder="نام و نام خانوادگی" />

      <TheInput v-model="phoneNumber"
                title="شماره تلفن"
                placeholder="متن" />

      <TheInput v-model="email"
                title="ایمیل (اختیاری)"
                placeholder="متن" />

      <div class="flex flex-row gap-4 w-full">

        <TheButton class="w-full"
                   text="انصراف"
                   size="lg"
                   button-type="outline">

          <template #prefix>
            <span class="material-symbols-outlined">
            cancel
            </span>
          </template>

        </TheButton>

        <TheButton class="w-full"
                   text="تایید"
                   size="lg"
                   button-type="fill">

          <template #prefix>
            <span class="material-symbols-outlined">
            check_circle
            </span>
          </template>

        </TheButton>

      </div>

    </div>

  </div>
</template>