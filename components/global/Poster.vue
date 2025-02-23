<script setup lang="ts">
const props=defineProps(['img'])
</script>

<template>
  <div class="container relative flex w-full h-full bg-no-repeat bg-cover items-center justify-center"
       :style="`background-image: url(${props.img})`">

    <div v-if="$slots.default">
      <slot />
    </div>

  </div>
</template>