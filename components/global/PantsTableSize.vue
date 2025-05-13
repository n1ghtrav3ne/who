<script setup lang="ts">

</script>

<template>
  <div @click.self="$emit('close')" class="fixed flex justify-center flex-col items-center z-50 top-0 w-full h-screen bg-neutral-950 bg-opacity-45">
    <div class="flex py-2 flex-col gap-2  px-2 bg-white">
      <Icon class="cursor-pointer" @click="$emit('close')" icon="x" />
      <span class="text-[20px] font-light">جدول سایزبندی شلوارها</span>
      <img class="object-contain h-[600px]" src="/images/sizeTable.webp" />
    </div>
  </div>
</template>