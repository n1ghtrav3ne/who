<script setup lang="ts">
import type { PaginationProps } from '~/types/Pagination';

const props=defineProps<PaginationProps>();

</script>

<template>
    <div class="flex gap-2 items-center">
        <div class="cursor-pointer border flex justify-center items-center w-8 h-8 text-center border-[#E9EAEE] rounded-lg">
            <!-- TODO: add icon --> 
             R
        </div>

        <div class="flex gap-2 text-md text-[#5B6176] cursor-pointer">
            <div 
                class="border flex justify-center items-center w-8 h-8 text-center border-[#E9EAEE] rounded-lg"
            >
                1
            </div>
        </div>

        <div class="cursor-pointer border flex justify-center items-center w-8 h-8 text-center border-[#E9EAEE] rounded-lg">
            <!-- TODO: add icon -->
             L
        </div>
    </div>
</template>