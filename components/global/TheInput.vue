<script setup lang="ts">
import type { InputTypes, Variant } from '~/types/Input';

const props=withDefaults(defineProps<{
    variant:Variant,
    placeholder:string,
    type?:InputTypes
}>(),{
    type:"text"
});

const emits=defineEmits<{
    (event:'update:modelValue',value:string):void
}>();

const change=(event:Event)=>{
    const target=event.target as HTMLInputElement;
    emits("update:modelValue",target.value);
}
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

                :type="type" 
                :placeholder="placeholder"

                @change="change"
            >
        </div>

        <div class="flex gap-2">
            <slot />
        </div>
    </div>
</template>