<script setup lang="ts">
import model from "~/assets/image/model1.png"
</script>

<template>
  <div class="container flex flex-col">

    <span class="text-[56px] font-light text-center">کالکشن  جدید “هو”</span>

    <div class="grid grid-cols-3 gap-2 h-[400px] w-full">

      <poster :img="model" />
      <poster :img="model" />
      <poster :img="model" />
      <poster :img="model" />
      <poster :img="model" />

    </div>

  </div>
</template>

<style scoped>

</style>