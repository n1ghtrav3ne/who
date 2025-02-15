<script setup lang="ts">
    const props=defineProps<{
        text:string
    }>();
</script>

<template>
    <div class="text-error-dark flex gap-1 items-center text-xs">
        <span class="pt-2">*</span>
        <span>{{ text }}</span>
    </div>
</template>