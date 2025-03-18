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

    <div @click="active" class="flex flex-row text-sm lg:text-[16px]">

      <span>{{text}}</span>

      <span v-if="show" class="material-symbols-rounded">
      remove
      </span>

      <span v-else class="material-symbols-rounded">
      add
      </span>

    </div>

    <div v-if="show" class="text-xs lg:text-sm flex flex-col gap-2">

      <div v-for="(item,index) in items" :key="index">

      <span>
        {{item}}
      </span>

      </div>

    </div>

  </div>
</template>
