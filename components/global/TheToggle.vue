<script lang="ts" setup>

const model=defineModel<boolean>({"required":true})

const emit=defineEmits<{
  (event:"update:modelValue",value:boolean):void
}>();

const toggle=()=>{
  model.value=!model.value;
}
</script>

<template>
  <div 
    @click="toggle" 

    class="relative w-[48px] h-[26px] cursor-pointer bg-[#E9EAEE] transition-colors duration-300 ease-out rounded-full"
    :class="{'bg-neutral-500':model}"
  >
    <div 
      class="absolute top-1/2 -translate-y-1/2 w-[18px] h-[18px] bg-[#AEB2C0] rounded-full transition-all duration-300 ease-out"
      :class="{'left-1':!model,'left-6 bg-neutral-100':model}"
    ></div>
  </div>
</template>