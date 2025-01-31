<script setup lang="ts">
import type { PaginationProps } from '~/types/Pagination';

const props=withDefaults(defineProps<PaginationProps>(),{
    groupSize:3
});

const emit=defineEmits<{
    (event:'update:current',value:number):void,
    (event:'change',value:number):void,
}>();


/* 
    This function returns the group of 
    buttons that should be rendered 
    based on current value and group size
*/
const buttonRange = computed(() => {
    const start=Math.max(1,Math.min(props.current-1,props.count-props.groupSize+1));
    const end=Math.min(start+props.groupSize-1,props.count);
    
    return Array.from({length:end-start+1},(_,i)=>start+i);
});

/*
    Changes the ref provided by parent component
    and also emits another event for developer 
    to use the value inside method or fetch some
    stuff if needed
*/ 
const changeIndex=(i:number)=>{
    if(i<1 || i>props.count)
        return;

    emit("update:current",i);
    emit("change",i);
}
</script>

<template>
    <div class="flex gap-2 items-center">
        <div
            @click="changeIndex(current-1)"

            :class="{'cursor-[default_!important] text-neutral-200':current<=1}"
            class="cursor-pointer select-none border flex justify-center items-center w-8 h-8 text-center border-[#E9EAEE] rounded-lg"
        >
            <!-- TODO: add icon --> 
             R
        </div>

        <div class="flex gap-2 text-md text-[#5B6176]">
            <template v-if="current>groupSize">
                <div
                    @click="changeIndex(1)"

                    class="cursor-pointer select-none border flex justify-center items-center w-8 h-8 text-center border-[#E9EAEE] rounded-lg"
                > 
                    1
                </div>

                <div class="select-none border flex justify-center items-center w-8 h-8 text-center border-[#E9EAEE] rounded-lg">
                    ...
                </div>
            </template>

            <div 
                v-for="i in buttonRange"
                :key="i"
                @click="changeIndex(i)"

                :class="{'bg-black text-white border-black':current==i}"
                class="cursor-pointer border select-none flex justify-center items-center w-8 h-8 text-center border-[#E9EAEE] rounded-lg"
            >
                {{i}}
            </div>

            <template v-if="current<count-groupSize">
                <div class="select-none border flex justify-center items-center w-8 h-8 text-center border-[#E9EAEE] rounded-lg">
                    ...
                </div>

                <div
                    @click="changeIndex(count)"
                    
                    class="cursor-pointer select-none border flex justify-center items-center w-8 h-8 text-center border-[#E9EAEE] rounded-lg"
                > 
                    {{count}}
                </div>
            </template>
        </div>

        <div
            @click="changeIndex(current+1)"
            class="cursor-pointer select-none border flex justify-center items-center w-8 h-8 text-center border-[#E9EAEE] rounded-lg"
            :class="{'cursor-[default_!important] text-neutral-200':current>=count}"
        >
            <!-- TODO: add icon -->
             L
        </div>
    </div>
</template>