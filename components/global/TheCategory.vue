<script setup lang="ts">
import itemsData from '~/assets/data/NavMenu.json'

const selectedIndex = ref<number | null>(null)
const animateIn = ref(false)
const isVisible = ref(false)

const selectedItems = computed(() =>
    selectedIndex.value !== null ? itemsData[selectedIndex.value].categoryItems : []
)

function selectCategory(index: number) {
  if (selectedIndex.value === index) return

  animateIn.value = false
  isVisible.value = false

  setTimeout(() => {
    selectedIndex.value = index
    nextTick(() => {
      isVisible.value = true
      requestAnimationFrame(() => {
        animateIn.value = true
      })
    })
  }, 200)
}
</script>


<template>
  <div class="flex flex-row fixed w-full h-fit z-40 bg-white pb-8 bg-opacity-80 backdrop-blur-lg px-10 py-4 ">
    <div class="flex flex-col w-[30%] gap-2 border-neutral-300">
      <Icon @click="$emit('close')"
            icon="x"
            :size="24"
            class="cursor-pointer" />
      <div class="flex flex-col">
        <div
            v-for="(item, index) in itemsData"
            :key="index"
            class="px-6 py-3 flex flex-row justify-between text-sm border-b border-b-neutral-300 text-neutral-950 items-center cursor-pointer"
            @click="selectCategory(index)"
        >
          <span>{{ item.category }}</span>
          <Icon v-if="selectedIndex===index" icon="caretLeft" :size="20" />
        </div>
      </div>
    </div>

    <div class="relative pt-6 pr-2 w-full ml-auto overflow-hidden ">
      <div
          class="w-[30%] h-1/2 flex flex-col flex-wrap items-start transition-all duration-200 ease-in-out"
          :class="animateIn ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'"
      >
        <div
            v-for="(subItem, subIndex) in selectedItems"
            :key="subIndex"
            class="text-sm px-4 py-2 cursor-pointer"
        >
          {{ subItem }}
        </div>
      </div>
    </div>
  </div>
</template>