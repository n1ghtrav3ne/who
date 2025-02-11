<script setup lang="ts">
import type { Label } from '~/types/components/Label'

const props=defineProps({
  size:{
    type:String as ()=> Label,
  },
  bold:{
    type:Boolean,
    default:false
  },
  disabled:{
    type:Boolean,
    default:false
  },
  text:String,
})
</script>
<template>
  <div class="w-fit flex flex-row items-center gap-1"
       :class="{'text-[16px]':size=='lg',
                'text-sm':size=='md',
                'text-xs':size=='sm',
                'font-bold':bold}">

    <span class="text-neutral-950"
          :class="{'!text-neutral-300':disabled}"
    >
      {{text}}
    </span>

    <span class="pt-1.5 text-error-light"
          :class="{'!text-neutral-300':disabled}"
    >
      *
    </span>

  </div>
</template>
