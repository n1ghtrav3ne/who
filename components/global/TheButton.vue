<script setup lang="ts">
import type { ButtonType , Size } from "~/types/Button"

const props=defineProps({
  text:{
    type:String,
  },
  buttonType:{
    type:String as PropType <ButtonType>,
    default:"ghost"
  },
  size:{
    type:String as PropType <Size>,
    default:"md"
  }
})
</script>
<template>
  <div class="flex flex-row gap-2 items-center text-sm size-[40px] px-[20px] w-fit cursor-pointer"
  :class="{
    'border border-black':buttonType=='outline',
    'bg-black text-white':buttonType=='fill',
    'px-6 size-[56px] text-[16px]':size=='xl',
    'px-6 size-[46px] text-sm':size=='lg',
    'px-[20px] size-[40px] text-xs':size=='sm',

  }">

    <slot name="prefix" />

    <span>{{text}}</span>

    <slot name="suffix" />

  </div>
</template>