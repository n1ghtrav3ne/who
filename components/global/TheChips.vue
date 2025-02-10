<script setup lang="ts">
import type {ChipsType} from "~/types/components/Chips";

const props = defineProps({
  text: String,
  size:{
    type: String as ()=>ChipsType,
  }
})
</script>
<template>
  <div class="flex flex-row w-fit text-neutral-600 items-center border border-neutral-900"
       :class="{'px-3 py-2 gap-2 text-[16px]':size=='desktop',
                'px-2 py-1 gap-1 text-[12px]':size=='mobile'}">

    <slot />

    <span>{{text}}</span>

  </div>
</template>