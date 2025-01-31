<script setup lang="ts">
const currentIndex=ref(1);

const updateList=(i:number)=>{
  console.log(i);
  
}

</script>

<template>
  <div class="mt-10 mx-auto w-[600px]">
    <ThePagination :count="7" v-model:current="currentIndex" @change="updateList" />
  </div>
</template>

<style>
body
{
  direction: rtl;
}
</style>