<script setup lang="ts">
const items=[
  {
    title:"محصولات اورجینال",
    text:"اصالت کالا تضمین‌شده، یا وجه شما بازگردانده می‌شود.",
    icon:"check_circle"
  },
  {
    title:"تضمین رضایت",
    text:"اگر اندازه نبود، به‌راحتی تعویضش کن!",
    icon:"account_circle"
  },
  {
    title:"جدید‌ترین استایل ها، هرروز",
    text:"مجموعه‌های ما همیشه به‌روز و مطابق با ترندهاست.",
    icon:"shopping_basket"
  },
  {
    title:"ارسال سریع",
    text:"سفارش‌ها رو در سریع ترین زمان ممکن دریافت کنین!",
    icon:"delivery_truck_speed"
  },
]
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full">

    <div v-for="(item,index) in items" :key="index" class="flex flex-col gap-[6px] w-[85%]">

      <div class="flex flex-row gap-1 items-center">

        <span class="material-symbols-outlined">
          {{item.icon}}
        </span>

        <span class="text-sm font-bold lg:text-2xl">
          {{item.title}}
        </span>

      </div>

      <span class="font-light text-sm lg:text-[20px]">
        {{item.text}}
      </span>

    </div>

  </div>
</template>