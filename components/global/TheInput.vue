<script setup lang="ts">
import type { InputProps } from '~/types/components/Input';

const model=defineModel({required:true});

const props=withDefaults(defineProps<InputProps>(),{
    type:"text",
    variant:'bordered'
});
</script>

<template>
    <div 
        class="flex items-center pl-2"
        :class="{
            //Normal style
            'border-b border-b-black':variant=='underline' && !disabled,
            'border border-black':variant=='bordered' && !disabled,

            //Disabled style
            'bg-neutral-200':disabled,
            'border-b border-b-neutral-400':variant=='underline' && disabled,
            'border border-neutral-400':variant=='bordered' && disabled,

            //Error style
            'border-b border-b-error-dark':variant=='underline' && errorMsg && !disabled,
            'border border-error-dark':variant=='bordered' && errorMsg && !disabled,
        }"
    >
        <div class="grow">
            <input
                class="w-full outline-none p-2"

                v-model="model"
                :type="type" 
                :placeholder="placeholder"

                :disabled="disabled"
            >
        </div>

        <div class="flex gap-2">
            <slot />
        </div>
    </div>
    <div v-if="!disabled && errorMsg" class="text-error-dark flex gap-1 items-center text-xs">
        <span class="pt-2">*</span>
        <span>{{ errorMsg }}</span>
    </div>
</template>