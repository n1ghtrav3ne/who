<script setup lang="ts">
import type {Link} from "~/types/components/Link"

const props=defineProps({
  disabled:{
    type:Boolean,
    default:false
  },
  text:String,
  size:{
    type:String as ()=>Link,
    default:"md"
  },
  light:{
    type:Boolean,
    default:false
  },
  target:String
})

const targetRoute=()=>{
  if (!props.disabled) {
    useRouter().push(props.target as string)
  }
}
</script>
<template>
  <div @click="targetRoute" class="w-fit">
    <span class="text-link-default underline underline-offset-[6px] cursor-pointer"
          :class="{'text-[16px]':size=='lg',
                   'text-sm':size=='md',
                   'text-xs':size=='sm',
                   'text-neutral-300':disabled,
                   'font-[300]':light}">
      {{text}}
    </span>
  </div>
</template>