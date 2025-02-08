<script setup lang="ts">
import type { InputTypes, Variant } from '~/types/Input';

const model=defineModel({required:true});

const props=withDefaults(defineProps<{
    variant?:Variant,
    placeholder?:string,
    type?:InputTypes
}>(),{
    type:"text",
    variant:'bordered'
});
</script>

<template>
    <div 
        class="flex items-center pl-2"
        :class="{
            'border-b border-b-black':variant=='underline',
            'border border-black':variant=='bordered'
        }"
    >
        <div class="grow">
            <input
                class="w-full outline-none p-2"

                v-model="model"
                :type="type" 
                :placeholder="placeholder"
            >
        </div>

        <div class="flex gap-2">
            <slot />
        </div>
    </div>
</template>