<script setup lang="ts">
import type { InputTypes, Variant } from '~/types/Input';
// import VsxIcon from "vue-iconsax";

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
    <div class="flex">
        <div class="grow">
            <input
                class="w-full outline-none p-2"
                :class="{
                    'border-b border-b-black':variant=='underline',
                    'border border-black':variant=='bordered'
                }"

                :type="type" 
                :placeholder="placeholder"

                @change="change"
            >
        </div>

        <div>
            <!-- Actions -->
        </div>
    </div>
</template>