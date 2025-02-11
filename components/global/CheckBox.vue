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
        class="w-4 h-4 select-none cursor-pointer rounded flex justify-center border-2 border-neutral-500 duration-200 items-center"
        :class="{
        'border-neutral-950 bg-neutral-950': isChecked,
        '!border-neutral-300 !cursor-not-allowed': disabled,
      }"
    >
      <!-- Checkmark -->
      <span
          v-if="isChecked"
          class="material-symbols-rounded text-lg font-bold"
          :class="{ 'text-white': isChecked }"
      >
        check
      </span>
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