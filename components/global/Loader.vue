<script setup>
import { Vue3Lottie } from 'vue3-lottie'
import animationData from '~/assets/animations/loader.json'
</script>
<template>
  <ClientOnly>
    <Vue3Lottie
        :animation-data="animationData"
        :width="300"
        :height="300"
        :loop="true"
        :autoplay="true"
    />
  </ClientOnly>
</template>
