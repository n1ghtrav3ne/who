<script setup lang="ts">

const props = defineProps(['img']);
const isLoaded = ref(true);
const error = ref(false);

const handleImageLoad = () => {
  isLoaded.value=true;
};

const handleImageError = () => {
  isLoaded.value = false;
  error.value=true;
};
</script>

<template>
  <div class="relative flex w-full h-full">

    <NuxtImg
        v-if="isLoaded"
        class="w-full h-full object-cover"
        :src="props.img"
        alt=""
        @load="handleImageLoad"
    />

    <div v-if="!isLoaded" class="absolute inset-0 h-32 bg-[rgba(0_0_0_.4)] animate-pulse rounded"></div>

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