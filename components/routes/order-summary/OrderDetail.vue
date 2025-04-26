<script setup lang="ts">
const items=reactive([
  {
    title:"محصول مورد نظر کد ۱۲۳۴ سایز XS",
    number:2,
    price:"۱,200,00۰"
  },
  {
    title:"تخفیف",
    price:"۱۰۰"
  },
  {
    title:"هزینه ارسال(پست)",
    price:"۵۰,000"
  },
  {
    title:"قیمت نهایی",
    price:"۲,۴۰۰,000"
  },
])
</script>

<template>
  <div class="container flex flex-col gap-6 w-full h-[400px] lg:w-[30%]">

    <span class="text-2xl mx-auto font-light">جزئیات سفارش</span>

    <div class="flex flex-row justify-between border-b border-b-neutral-950 pb-1">

      <span class="text-sm">محصول</span>

      <span class="text-sm">تعداد</span>

      <span class="text-sm">قیمت کل</span>

    </div>

    <div v-for="(item,index) in items"
         :key="index"
         class="flex flex-row justify-between items-center text-sm"
          :class="{'font-bold':index===items.length-1}"
    >

      <span>{{item.title}}</span>

      <span>{{item.number}}</span>

      <span>
        {{item.price}}
        تومان
      </span>

    </div>

    <slot />

  </div>
</template>