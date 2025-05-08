<script setup lang="ts">

type OrderStatus = 'pending' | 'delivered' | 'returned';

const props = defineProps<{
  status: OrderStatus;
}>();

</script>

<template>
  <div class="container flex flex-col gap-3 w-full lg:w-[50%]">

      <div class="w-full h-[8px] bg-neutral-100 overflow-hidden">

        <div
            class="h-full"
            :class="{
              'bg-neutral-950 w-1/2': status === 'pending',
              'bg-success-light w-full': status === 'delivered',
              'bg-error-light w-full': status === 'returned'
            }"
        ></div>
      </div>

    <div v-if="status==='delivered'" class="flex flex-row justify-between items-center">

      <div class="text-sm text-success-light">
        تحویل به مشتری
      </div>

      <Icon class="cursor-pointer"
            icon="checkCircle"
            color="#28A745" />

    </div>

    <div v-if="status==='pending'" class="flex flex-row justify-between items-center">

      <div class="text-sm text-neutral-950">
        در حال پردازش...
      </div>

      <Icon icon="repeat" />

    </div>

    <div v-if="status==='returned'" class="flex flex-row justify-between items-center">

      <div class="text-sm text-error-light">
        لغو شده
      </div>

      <Icon icon="xCircle" color="#DC3545" />

    </div>


  </div>
</template>
