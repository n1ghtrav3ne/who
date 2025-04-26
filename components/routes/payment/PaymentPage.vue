<script setup lang="ts">
import PaymentError from "~/components/routes/payment/PaymentError.vue";
import PaymentSuccess from "~/components/routes/payment/PaymentSuccess.vue";

const status=ref(true)
</script>

<template>
  <div class="flex flex-col justify-center mx-auto h-screen w-full lg:w-[20%]">

    <PaymentError v-if="status===false" />

    <PaymentSuccess v-if="status===true" />

  </div>
</template>