<script setup lang="ts">
  const props=defineProps({
    items:{
      type:Array,
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

    <div @click="active" class="flex flex-row text-sm gap-1 items-center lg:text-[16px]">

      <span>{{text}}</span>

      <Icon v-if="show" icon="minus" :size="20" weight="bold" />

      <Icon v-else icon="plus" :size="20" weight="bold" />

    </div>

    <div v-if="show" class="text-xs lg:text-sm flex flex-col gap-2">

      <div v-for="(item,index) in items" :key="index">

      <span>
        {{item}}
      </span>

      </div>

      <slot />

    </div>

  </div>
</template>
