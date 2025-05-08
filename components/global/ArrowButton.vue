<script setup lang="ts">

type TextSize="desktop"|"mobile"

const props=defineProps({
  items:{
    type:Array,
  },
  size:{
    type:String as ()=> TextSize,
    default:"desktop"
  },
  text:String
})

const show=ref(false)

const active=()=>{
  show.value=!show.value
}
</script>

<template>
  <div class="flex flex-col w-fit cursor-pointer select-none">

    <div @click="active" class="flex flex-row items-center gap-1 text-sm" :class="{'text-xs':size==='mobile'}">

      <span>{{text}}</span>

      <Icon icon="caretDown" :size="16" />

    </div>

    <div v-if="show" class="text-xs lg:text-sm flex flex-col gap-1">

      <div v-for="(item,index) in items" :key="index">

      <span>
        {{item}}
      </span>

      </div>

    </div>

  </div>
</template>
