<script setup lang="ts">
const props=defineProps(['img'])
</script>

<template>
  <div class="relative flex w-full h-full bg-no-repeat bg-contain items-center justify-center"
       :style="`background-image: url(${props.img})`">

    <div v-if="$slots.default">
      <slot />
    </div>

  </div>
</template>