<script setup lang="ts">
const model=defineModel<string>({required:true});

const props=defineProps<{
    title?:String,
    placeholder?:string
}>();
</script>

<template>
  <div class="flex w-full flex-col gap-1">

    <div v-if="props.title" class="flex flex-row text-sm gap-1">
      <span>{{title}}</span>
      <span class="text-error-light">*</span>
    </div>

     <textarea
         class="h-32 resize-y p-2 w-full
            border border-neutral-950 outline-none
            hover:border-2 focus:border-2"

         :placeholder="placeholder"
         v-model="model"></textarea>
  </div>
</template>