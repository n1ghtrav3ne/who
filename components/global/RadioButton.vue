<script setup lang="ts">
const props = defineProps({
  text: String,
  disabled: {
    type: Boolean,
    default: false,
  },
});

const isChecked = ref(false);

const toggleButton = () => {
  if (!props.disabled) {
    isChecked.value = !isChecked.value;
  }
};
</script>

<template>
  <div class="flex flex-row h-6 w-fit items-center gap-2 mx-auto mt-10">

    <div
        @click="toggleButton"
        class="min-w-4 min-h-4 select-none cursor-pointer rounded-full flex justify-center p border-2 border-neutral-500 duration-200 items-center"
        :class="{
        'border-neutral-950': isChecked,
        '!border-neutral-400 !cursor-not-allowed': disabled,
      }"
    >

    <div class="rounded-full bg-neutral-950 min-h-2 min-w-2 invisible" :class="{'!visible': isChecked}">

    </div>

    </div>

    <!-- Label -->
    <span
        @click="toggleButton"
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