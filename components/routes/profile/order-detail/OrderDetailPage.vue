<script setup lang="ts">
import model from "~/assets/image/model1.png"
import ProcessBar from "~/components/routes/profile/order-detail/ProcessBar.vue";
import {use} from "h3";
</script>

<template>
  <div class="container flex flex-col w-full">

    <div class="flex flex-row gap-2 items-center text-[20px] font-bold mb-4 lg:mb-0">

      <Icon @click="useRouter().push('/profile/orders')" icon="caretRight" weight="bold" />

      <span>
        جزئیات سفارش
      </span>

    </div>

      <ProcessBar status="delivered" />

    <div class="container flex gap-3 flex-col border-b text-sm w-full lg:w-[80%] lg:text-[16px]">

      <div class="flex flex-row gap-3">

        <span class="w-full">
          کد سفارش: ۱۲۳۴
        </span>

        <span class="w-full">
          تاریخ ثبت سفارش ۲۹ بهمن ۱۴۰۳
        </span>

      </div>

      <div class="flex flex-row gap-3">

        <span class="w-full">
          تحویل گیرنده: محمد حسینی پور
        </span>

        <span class="w-full">
          شماره موبایل: ۰۹۱۲۳۴۵۶۷۸۹
        </span>

      </div>

    </div>

    <div class="container flex gap-3 flex-col border-b text-sm w-full lg:w-[80%] lg:text-[16px]">

      <div class="flex flex-row gap-3">

        <span class="w-full">
          مبلغ ۸۹۳،۰۰۰ تومان
        </span>

        <span class="w-full">
          پرداخت اینترنتی
        </span>

      </div>

      <div class="flex flex-row gap-3">

        <span class="w-full">
          هزینه ارسال: ۵۰،۰۰۰ تومان
        </span>

        <span class="w-full">
          شماره موبایل: ۰۹۱۲۳۴۵۶۷۸۹
        </span>

      </div>

    </div>

    <div class="container flex gap-3 flex-row border-b text-sm w-full lg:w-[80%] lg:text-[16px]">

      <div class="w-[81px] h-[111px]">
        <Poster :img="model" />
      </div>

      <div class="flex flex-col justify-between">

        <span>
          محصول مورد نظر کد ۱۲۳۴ سایز XS
        </span>

        <span>
          رنگ طوسی
        </span>

        <span>
          مبلغ ۸۹۳،۰۰۰ تومان
        </span>

      </div>

    </div>


  </div>
</template>
