<script setup lang="ts">
  const items=reactive([
    'پیشخوان',
    'سفارش های من',
    'سایز های من',
    'مورد علاقه ها',
    'آدرس ها',
    'اطلاعات حساب کاربری',
    'خروج'
  ])

  const selectedIndex = ref(0);

  function selectItem(index: number) {
    selectedIndex.value = index;
  }
</script>

<template>
  <div class="flex flex-col gap-6 w-full lg:w-[25%] lg:gap-[60px]">

    <div class="flex flex-col gap-4">

      <span class="text-[32px] font-bold">پروفایل</span>

      <span class="text-2xl font-light">محمد حسینی پور</span>

      <span class="text-[20px] font-light">۰۹۱۲ ۳۴۵ ۶۷۸۹</span>

    </div>


    <div class="flex flex-col border border-neutral-950">

      <div v-for="(item , index) in items" :key="index"
           @click="selectItem(index)"
           :class="{'border-[3px]':selectedIndex === index}"
           class="w-full px-6 py-3 flex flex-row gap-2 items-center text-[16px] border border-neutral-950 select-none"
      >
        <span class="material-symbols-outlined">
        home
        </span>

        {{item}}
      </div>

    </div>

  </div>
</template>