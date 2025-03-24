<script setup lang="ts">
/// TODO: Remove example later
/** COMPONENT‌ EXAMPLE‌ USAGE
 * <TheSelect v-model="value" default-label="عنوان" title="عنوان">
        <template #options="{selectOption}">
            <div v-for="option in options" :key="option.b" @click="selectOption(option.a,option.b)">
                {{ option.a }}
            </div>
        </template>
    </TheSelect>
 */

 
import type { SelectProps } from '~/types/components/Select';

const props=defineProps<SelectProps>();
const model=defineModel({required:true});

const isOpen=ref<boolean>(false);
const currentOption=ref<string>();

const selectOption=(label:string,value:string)=>{
    model.value=value;
    currentOption.value=label;
    isOpen.value=false;
}
</script>

<template>
    <div class="cursor-pointer select-none w-72 flex flex-col gap-2"
         :class="{'opacity-40  pointer-events-none':disabled}">

        <div>
            {{title}}
        </div>

        <div @click="isOpen=!isOpen" class="relative border border-black py-1 px-3 flex justify-around items-center">
            <div>
                ic
            </div>

            <div class="text-neutral-400 grow text-center" :class="{'text-neutral-900':isOpen}">
                {{currentOption || defaultLabel}}
            </div>

            <div v-if="isOpen" @click.stop class="absolute w-full z-10 bg-white top-9 border border-black flex flex-col gap-4 px-4 py-2">
                <!-- Returns the handler so programmer can change the value -->
                <slot name="options" :selectOption="selectOption" />
            </div>

            <div>
                ar
            </div>
        </div>

        <div v-if="bottomLabel" class="text-neutral-300">
            {{bottomLabel}}
        </div>
    </div>
</template>