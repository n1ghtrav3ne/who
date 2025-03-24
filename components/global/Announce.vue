<script setup lang="ts">
  const props=defineProps({
    text:String,
    continue:String,
    skip:String,
  })

  const targetRoute=()=>{
      useRouter().push(props.continue as string)
  }

  const skipRoute=()=>{
    useRouter().push(props.skip as string)
  }
</script>

<template>
  <div class="flex flex-col gap-8 items-center text-center w-full lg:w-[80%]">

    <span class="text-[16px] lg:text-2xl">{{text}}</span>

    <slot />

    <div class="flex flex-row gap-4 lg:gap-6 w-full lg:w-fit">

      <TheButton @click="targetRoute" class="w-full lg:w-fit" text="ادامه" button-type="fill" />

      <TheButton @click="skipRoute" class="w-full lg:w-fit" text="رد کردن" button-type="outline" />

    </div>

  </div>
</template>