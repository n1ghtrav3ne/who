<script setup lang="ts">

</script>
<template>
  <div
      @click="(e: Event) => e.target === e.currentTarget ? $emit('close') : null"
      class="fixed flex flex-col w-full h-screen bg-neutral-950 bg-opacity-45"
  >
    <div class="px-4 py-3 w-full bg-white flex flex-row items-center">

      <div class="flex flex-row gap-2 items-center pb-4 border-b border-b-neutral-950 w-1/3">

        <input class="w-full outline-0" type="text" placeholder="جستجو محصولات" />

        <span class="material-symbols-outlined cursor-pointer">west</span>

      </div>

    </div>

  </div>
</template>