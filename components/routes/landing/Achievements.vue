<script setup lang="ts">

const items=[
  {
    title:"محصولات اورجینال",
    text:"اصالت کالا تضمین‌شده، یا وجه شما بازگردانده می‌شود.",
    icon:"ShieldTick"
  },
  {
    title:"تضمین رضایت",
    text:"اگر اندازه نبود، به‌راحتی تعویضش کن!",
    icon:"UserTick"
  },
  {
    title:"جدید‌ترین استایل ها، هرروز",
    text:"مجموعه‌های ما همیشه به‌روز و مطابق با ترندهاست.",
    icon:"ShoppingCart"
  },
  {
    title:"ارسال سریع",
    text:"سفارش‌ها رو در سریع ترین زمان ممکن دریافت کنین!",
    icon:"TruckFast"
  },
]
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full">

    <div v-for="(item,index) in items" :key="index" class="flex flex-col gap-[6px] w-[85%]">

      <div class="flex flex-col gap-1">

        <div class="material-symbols-outlined">
          <VsxIcon :iconName="item.icon" :size="32" type="linear" />
        </div>

        <div class="text-sm font-bold lg:text-xl">
          {{item.title}}
        </div>

      </div>

      <span class="font-light text-sm lg:text-[20px]">
        {{item.text}}
      </span>

    </div>

  </div>
</template>