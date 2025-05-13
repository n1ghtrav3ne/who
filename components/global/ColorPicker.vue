<script setup lang="ts">
  const colors=['#000000','#5A3939','#3C55AC','#3E6E2E']

  const selectedColor=ref(0)

  const select=(index:number)=>{
    selectedColor.value=index
  }
</script>

<template>
  <div class="flex flex-row gap-3">

    <div v-for="(color,index) in colors"
         @click="select(index)"
         :style="{ backgroundColor: color }"
         class="w-[20px] h-[20px] flex justify-center items-center cursor-pointer border border-neutral-200">
      <Icon v-if="selectedColor===index" icon="check" :size="18" color="#ffffff" />
    </div>


  </div>
</template>