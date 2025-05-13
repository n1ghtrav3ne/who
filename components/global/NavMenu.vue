<script setup lang="ts">
import itemsData from '~/assets/data/NavMenu.json'

const firstItems = ref(false)
const secondItems = ref<boolean[]>([])
const subItemHeights = ref<number[]>([])
const subItemRefs = ref<(HTMLElement | null)[]>([])
const showCollectionItems = ref(false)

const collectionItems=reactive(['کالکشن بهاری','کالکشن تابستونی','کالکشن پاییزی','کالکشن زمستانی'])

const selectedIndex = ref<number | null>(null)

const items = reactive(itemsData)

function setSubItemRef(index: number, el: Element | ComponentPublicInstance | null) {
  if (el instanceof HTMLElement) {
    subItemRefs.value[index] = el
  } else {
    subItemRefs.value[index] = null
  }
}

onMounted(() => {
  secondItems.value = Array(items.length).fill(false)
  subItemHeights.value = Array(items.length).fill(0)
  subItemRefs.value = Array(items.length).fill(null)
})

function showFirst() {
  firstItems.value = !firstItems.value
}

function showSecond(index: number) {
  if (selectedIndex.value === index) {
    selectedIndex.value = null
  } else {
    selectedIndex.value = index
  }

  nextTick(() => {
    const el = subItemRefs.value[index]
    if (el) {
      subItemHeights.value[index] = el.scrollHeight
    }
  })
}
</script>


<template>
  <div class="flex flex-col pb-4 h-screen w-full px-5 bg-white fixed top-0 right-0 left-0 z-50 overflow-auto lg:hidden">
    <div class="flex flex-row h-[64px] justify-between items-center w-full">
      <Icon icon="x" @click="$emit('close')" />
      <span class="text-2xl font-light"><TheLogo /></span>
      <div class="flex flex-row items-center gap-[18px]">
        <Icon @click="$emit('card')" icon="shoppingBag" />
        <Icon @click="$emit('search')" icon="MagnifyingGlass" />
      </div>
    </div>

    <div class="flex w-1/2 flex-col text-sm gap-4 mt-[68px]">
      <div class="flex w-full flex-row gap-2">
        <span @click="showFirst" class="cursor-pointer">دسته بندی</span>
        <Icon
            icon="caretDown"
            :size="20"
            color="#B0B0B0"
            :class="[ 'transition-transform duration-300', firstItems ? 'rotate-180' : 'rotate-0' ]"
        />
      </div>

      <div
          :class="firstItems ? 'max-h-screen' : 'max-h-0'"
          class="flex w-full flex-col overflow-hidden transition-all duration-300"
      >
        <div
            v-for="(item, index) in items"
            :key="index"
            class="flex flex-col gap-2 transition-all duration-300"
        >
          <div
              @click="showSecond(index)"
              class="flex justify-between items-center w-full px-6 py-2 text-sm border-b border-neutral-300 cursor-pointer"
          >
            <span>{{ item.category }}</span>
            <Icon
                icon="caretDown"
                :class="{ 'rotate-180': selectedIndex === index }"
                class="transition-transform duration-300"
                :size="20"
                color="#B0B0B0"
            />
          </div>

          <div
              :ref="el => setSubItemRef(index, el)"
              class="flex flex-col overflow-hidden transition-all duration-300"
              :style="{ height: selectedIndex === index ? subItemHeights[index] + 'px' : '0px' }"
          >
            <div
                v-for="(subItem, subIndex) in item.categoryItems"
                :key="subIndex"
                class="px-10 pb-2 py-2 opacity-0 translate-y-2 transition-all duration-300"
                :class="{ 'opacity-100 translate-y-0': selectedIndex === index }"
                :style="{ transitionDelay: selectedIndex === index ? subIndex * 60 + 'ms' : '0ms' }"
            >
              {{ subItem }}
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col w-full gap-2">
        <div @click="showCollectionItems = !showCollectionItems" class="flex flex-row gap-2 items-center cursor-pointer">
          <span>کالکشن‌ها</span>
          <Icon
              icon="caretDown"
              :size="20"
              color="#B0B0B0"
              class="transition-transform duration-300"
              :class="{ 'rotate-180': showCollectionItems }"
          />
        </div>

        <div
            class="flex flex-col gap-2 overflow-hidden transition-all duration-300"
            :class="showCollectionItems ? 'max-h-screen' : 'max-h-0'"
        >
          <NuxtLink
              v-for="(collection, index) in collectionItems"
              :key="index"
              to="/collection"
              @click="$emit('close')"
              class="px-10 pb-2 py-2 opacity-0 translate-y-2 transition-all duration-300"
              :class="{ 'opacity-100 translate-y-0': showCollectionItems }"
              :style="{ transitionDelay: showCollectionItems ? index * 60 + 'ms' : '0ms' }"
          >
            {{ collection }}
          </NuxtLink>
        </div>
      </div>

    </div>

    <div class="flex flex-col gap-4 mt-12 text-sm">
      <NuxtLink @click="$emit('close')" to="/profile/dashboard">حساب کاربری</NuxtLink>
      <NuxtLink @click="$emit('close')" to="/about">درباره ما</NuxtLink>
      <NuxtLink @click="$emit('close')" to="/contact">تماس با ما</NuxtLink>
      <NuxtLink to="#">پشتیبانی</NuxtLink>
      <NuxtLink to="#">اینستاگرام</NuxtLink>
    </div>
  </div>
</template>

