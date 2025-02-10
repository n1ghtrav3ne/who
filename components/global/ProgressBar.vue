<script setup lang="ts">
import type {ProgressType} from "~/types/components/Progress";

const props=defineProps({
  progress:{
    type: Number,
    required: true,
    validator: (value: number) => value >= 0 && value <= 100,
  },
  size:{
    type:String as ()=> ProgressType,
    default:'md'
  },
  text:{
    type:String
  }
})
</script>
<template>
  <div class="flex flex-col w-[132px] gap-1"
       :class="{'size-[49px]':size=='xl',
                'size-[42px]':size=='lg',
                'size-[38px]':size=='md',
                'size-[34px]':size=='sm',
                'size-[32px]':size=='xs',}">

    <div class="w-full h-4 bg-neutral-400 overflow-hidden">

      <div class="bg-neutral-950 h-full" :style="{width:props.progress+'%'}">

      </div>

    </div>

    <div class="flex flex-row items-center w-full justify-between">

      <span class="text-xs"
            :class="{'!text-sm':size=='xl'}">
        {{text}}
      </span>

      <slot />

    </div>

  </div>
</template>