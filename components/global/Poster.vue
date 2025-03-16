<script setup lang="ts">

const props = defineProps(['img']);
const loading = ref(true);
const error = ref(false);

const handleImageLoad = () => {
  loading.value = true;
};

const handleImageError = () => {
  loading.value = false;
  error.value = true;
};
</script>

<template>
  <div class="relative flex w-full h-full">

    <img
        v-if="loading && !error"
        class="w-full h-full"
        :src="props.img"
        alt="image"
        @load="handleImageLoad"
        @error="handleImageError"
    />

    <div v-if="!loading && !error" class="w-full h-full flex justify-center bg-neutral-200 items-center">
      <div class="spinner"></div>
    </div>

    <div v-if="error" class="w-full h-full flex justify-center bg-neutral-200 items-center">
      <span class="text-error-light text-sm">خطا در لود عکس</span>
    </div>

    <div v-if="$slots.default" class="absolute w-full h-full flex justify-center items-center">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #000;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>