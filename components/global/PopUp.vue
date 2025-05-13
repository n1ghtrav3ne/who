<script setup lang="ts">
const props = defineProps({
  title: String,
  text: String,
})
</script>

<template>
  <div class="fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center z-50">
    <div class="flex flex-col w-[400px] gap-2 lg:gap-10 px-4 py-[19px] bg-white rounded-xl shadow-lg">
      <div class="flex flex-row justify-between items-center">
        <span class="text-[16px] font-bold">{{ title }}</span>
        <Icon icon="x" @click="$emit('close')" class="cursor-pointer" />
      </div>

      <div class="flex flex-col gap-10 lg:gap-4">
        <span class="text-[16px] font-light">
          {{ text }}
        </span>

        <div class="flex flex-row justify-between lg:justify-end items-center gap-[14px]">
          <button @click="$emit('close')" class="text-center text-sm px-5 py-2 border w-full lg:w-fit">
            انصراف
          </button>
          <button @click="$emit('confirm')" class="text-center text-sm text-neutral-50 w-full lg:w-fit px-5 py-2 bg-neutral-950">
            حذف یا تایید
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
