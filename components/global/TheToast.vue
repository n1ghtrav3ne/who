<script setup lang="ts">
import { ToastPosition, type ToastProps } from '~/types/components/Toast';

const show=defineModel<boolean>()

const props=withDefaults(defineProps<ToastProps>(),{
    position:ToastPosition.TopRight,
    timer:3.5
});

const timerId=ref<NodeJS.Timeout|null>(null);

watch([show,()=>props.text],([newShow,newText])=>{
    if(newShow || newText)
    {
        if(timerId.value!=null)
        {
            clearTimeout(timerId.value)
        }
        timerId.value=setTimeout(()=>{
            show.value=false;
        },props.timer*1000);
    }
});
</script>

<template>
    <div
        v-if="show"
        class="fixed w-72 h-12 px-3 bg-neutral-950 flex items-center justify-between"
        :class="{
            'top-3 left-3':position==ToastPosition.TopLeft,
            'top-3 right-3':position==ToastPosition.TopRight,
            'bottom-3 left-3':position==ToastPosition.BottomLeft,
            'bottom-3 right-3':position==ToastPosition.BottomRight,
            }"
        >
        <div class="flex gap-1">
            <div class="text-success-light">
                I
            </div>

            <div class="text-neutral-50">
                {{text}}
            </div>
        </div>

        <div class="text-neutral-50">
            <slot />
        </div>
    </div>
</template>