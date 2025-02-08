<script setup lang="ts">
const model=defineModel<string>({required:true});

const props=defineProps<{
    placeholder?:string
}>();
</script>

<template>
    <textarea 
        class="h-32 resize-y p-2
            border border-neutral-950 outline-none
            hover:border-2 focus:border-2"

        :placeholder="placeholder"
        v-model="model"></textarea>
</template>