<script setup lang="ts">
import type { ButtonType , Size } from "~/types/components/Button"

const props=defineProps({
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
  <div class="flex flex-row items-center w-fit cursor-pointer"
       :class="{
    'border border-black':buttonType=='outline',
    'bg-black text-white':buttonType=='fill',
    'px-6 size-[56px]':size=='xl',
    'px-[20px] size-[46px]':size=='lg',
    'px-[17px] size-[40px]':size=='md',
    'px-[13px] size-[32px]':size=='sm',
  }">

    <slot />

  </div>
</template>