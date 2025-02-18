<script setup lang="ts">
import type { ProductCardProps } from '~/types/components/ProductCard';

const props=defineProps<ProductCardProps>()

const discountPercent=computed(()=>100-((props.discountPrice*100)/props.price));
</script>

<template>
    <div class="flex flex-col gap-2">
        <div class="bg-neutral-500 h-80 relative"
            :class="{'opacity-40':!available}">
            <!-- IMAGE -->
             <div class="absolute top-2 right-2 text-sm">جدید</div>
        </div>

        <div>
            <span>{{title}} </span>
            <span>مورد نظر کد </span>
            <span>{{code}}</span>
        </div>

        <template v-if="available">
            <div v-if="discountPrice" class="self-end text-sm flex gap-1">
                <span class="text-neutral-400 line-through">{{price}}</span>
                <span class="text-red-600">{{discountPercent}}%</span>
            </div>

            <div class="flex gap-1">
                <span>{{discountPrice || price}}</span>
                <span>تومان</span>
            </div>
        </template>
        <div class="self-end text-neutral-400" v-else>
            ناموجود
        </div>
    </div>
</template>