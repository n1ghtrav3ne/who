<script setup lang="ts">

import OrderDetail from "~/components/routes/order-summary/OrderDetail.vue";
</script>

<template>
  <div class="w-full h-screen mt-10 flex flex-col justify-center gap-[70px] lg:flex-row">

    <OrderDetail>

      <TheButton class="w-full mt-auto hidden lg:flex" text="پرداخت (درگاه پرداخت بانک ملت)" button-type="fill" />

    </OrderDetail>

    <div class="container flex flex-col gap-6 w-full h-[400px] lg:w-[30%]">

      <span class="text-2xl mx-auto font-light">آدرس</span>

      <div class="flex flex-row items-center justify-between">

        <span class="text-sm">کرمان - آزادگان ۲۹ - پلاک ۲۰ - واحد ۳</span>

        <span class="text-sm">000</span>

      </div>

      <TheButton @click="useRouter().push('/order-summary/address')" class="w-full lg:mt-10" text="آدرس جدید" button-type="outline" />

      <TheButton class="w-full mt-14 lg:mt-auto" text="ویرایش سفارش" button-type="outline" />

      <TheButton class="w-full flex lg:hidden" text="پرداخت (درگاه پرداخت بانک ملت)" button-type="fill" />

    </div>


  </div>
</template>
