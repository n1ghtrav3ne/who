<script setup lang="ts">
// import VsxIcon from "vue-iconsax";

type Variant="bordered"|"underline";

const props=defineProps<{
    variant:Variant,
    placeholder:string
}>();

const emits=defineEmits<{
    (event:'update:modelValue',value:string):void
}>();

const change=(event:Event)=>{
    const target=event.target as HTMLInputElement;
    emits("update:modelValue",target.value);
}
</script>

<template>
    <div v-if="variant=='underline'" class="flex">
        <div class="grow">
            <input
                class="border-b border-b-black w-full outline-none p-2"
                type="text" 
                :placeholder="placeholder"

                @change="change"
            >
        </div>

        <div>
            <!-- ICON -->
        </div>
    </div>

    <div v-else>
        <input
            class="border border-black w-full outline-none p-2"
            type="text" 
            :placeholder="placeholder"

            @change="change"
        >
    </div>
</template>