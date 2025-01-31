<script setup lang="ts">
import type { PaginationProps } from '~/types/Pagination';

const props=defineProps<PaginationProps>();

const emit=defineEmits<{
    (event:'update:current',value:number):void,
    (event:'change',value:number):void,
}>();

const changeIndex=(i:number)=>{
    emit("update:current",i);
    emit("change",i);
}
</script>

<template>
    <div class="flex gap-2 items-center">
        <div
            :class="{'cursor-default text-neutral-200':current<=1}"
            class="cursor-pointer border flex justify-center items-center w-8 h-8 text-center border-[#E9EAEE] rounded-lg"
        >
            <!-- TODO: add icon --> 
             R
        </div>

        <div class="flex gap-2 text-md text-[#5B6176] cursor-pointer">
            <div 
                v-for="i in count"
                @click="changeIndex(i)"

                :class="{'bg-black text-white border-black':current==i}"
                class="border flex justify-center items-center w-8 h-8 text-center border-[#E9EAEE] rounded-lg"
            >
                {{i}}
            </div>
        </div>

        <div
            :class="{'cursor-default text-neutral-200':current>=count}"
            class="cursor-pointer border flex justify-center items-center w-8 h-8 text-center border-[#E9EAEE] rounded-lg"
        >
            <!-- TODO: add icon -->
             L
        </div>
    </div>
</template>