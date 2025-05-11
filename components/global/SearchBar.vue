<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const active = () => {
  // Slight delay to ensure UI responds naturally
  setTimeout(() => {
    router.push('/category')
  }, 300)
  // Close the search component
  emit('close')
}

const emit = defineEmits(['close'])
</script>

<template>
  <div
      @click="(e: Event) => e.target === e.currentTarget ? $emit('close') : null"
      class="fixed top-[45px] flex z-50 flex-col w-full h-screen bg-neutral-950 bg-opacity-45"
      @keydown.enter="active"
  >
    <div class="px-4 py-3 w-full bg-white flex flex-row items-center">
      <div class="flex flex-row gap-2 items-center p-2 border-b border-b-neutral-950 w-full lg:w-1/3">
        <input
            class="w-full outline-0"
            type="text"
            placeholder="جستجو محصولات"
        />

        <Icon @click="active" icon="ArrowLeft" class="cursor-pointer" />
      </div>
    </div>
  </div>
</template>
