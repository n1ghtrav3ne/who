<script setup lang="ts">
const props = defineProps({
  text: String,
  disabled: {
    type: Boolean,
    default: false,
  },
  isChecked: Boolean,
});
</script>

<template>
  <div class="flex flex-row h-6 w-fit items-center gap-2">

    <div
        @click="$emit('change')"
        class="min-w-4 min-h-4 select-none cursor-pointer rounded-full flex justify-center p border-2 border-neutral-500 duration-200 items-center"
        :class="{
        'border-neutral-950': isChecked,
        '!border-neutral-400 !cursor-not-allowed': disabled,
      }"
    >
      <div class="rounded-full bg-neutral-950 min-h-2 min-w-2 invisible" :class="{'!visible': isChecked}"></div>
    </div>

    <span
        @click="$emit('change')"
        class="text-sm pb-1.5 text-neutral-900 cursor-pointer select-none"
        :class="{
        'text-neutral-950': isChecked,
        '!text-neutral-300 !cursor-not-allowed': disabled,
      }"
    >
      {{ text }}
    </span>

    <slot />
  </div>
</template>
