<script setup lang="ts">
import type { ButtonType , Size } from "~/types/components/Button"

const props=defineProps({
  text:{
    type: [String, Number] ,
  },
  buttonType:{
    type:String as ()=>ButtonType,
    default:"ghost"
  },
  size:{
    type:String as ()=>Size,
    default:"md"
  }
})
</script>
<template>
  <div class="flex flex-row gap-2 items-center justify-center w-fit cursor-pointer select-none"
  :class="{
    'border border-black':buttonType=='outline',
    'bg-black text-white':buttonType=='fill',
    'px-6 size-[56px] text-[16px]':size=='xl',
    'px-6 size-[46px] text-sm':size=='lg',
    'px-[20px] size-[40px] text-sm':size=='md',
    'px-[20px] size-[40px] text-xs !gap-1':size=='sm',
  }">

    <slot name="prefix" />

    <span>{{text}}</span>

    <slot name="suffix" />

  </div>
</template>