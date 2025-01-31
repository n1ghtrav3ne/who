<script setup lang="ts">
const currentIndex=ref(3);

const updateList=(i:number)=>{
  console.log(i/5);
  
}

</script>

<template>
  <div class="mt-10 mx-auto w-[600px]">
    <ThePagination :count="15" v-model:current="currentIndex" :groupSize="5" @change="updateList" />
  </div>
</template>

<style>
body
{
  direction: rtl;
}
</style>