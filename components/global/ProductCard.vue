<script setup lang="ts">
import type { ProductCardProps } from '~/types/components/ProductCard'

const props = defineProps<ProductCardProps>()

const discountPercent = computed(() =>
    100 - Math.floor((props.discountPrice! * 100) / props.price)
)

const isImageLoaded = ref(false)
</script>

<template>
  <div @click="useRouter().push(`/product/${code}`)" class="flex flex-col gap-2 cursor-pointer">
    <div
        class="bg-neutral-200 h-[180px] w-full rounded-xl overflow-hidden relative flex items-center justify-center lg:h-80"
        :class="{ 'opacity-40': !available }"
    >
      <!-- LOADING PLACEHOLDER -->
      <div
          v-if="!isImageLoaded && props.image"
          class="absolute inset-0 flex items-center justify-center bg-neutral-300 animate-pulse"
      >
        <div class="w-10 h-10 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
      </div>

      <!-- PRODUCT IMAGE -->
      <img
          v-if="props.image"
          :src="props.image"
          alt="product"
          class="h-full w-full object-cover transition-opacity duration-300"
          :class="{ 'opacity-0': !isImageLoaded, 'opacity-100': isImageLoaded }"
          @load="isImageLoaded = true"
          @error="isImageLoaded = true"
      />

      <div v-else class="text-neutral-400 text-sm">عکس موجود نیست</div>

      <div v-if="status === 'new'" class="absolute top-2 right-2 text-sm px-2 py-1">جدید</div>
      <div v-if="status === 'special'" class="absolute top-2 right-2 text-sm px-2 py-1">ویژه</div>
    </div>

    <div>
      <span>{{ title }}</span>
      <span> مورد نظر کد </span>
      <span>{{ code }}</span>
    </div>

    <template v-if="available">
      <div v-if="discountPrice" class="self-end text-sm flex gap-1">
        <span class="text-neutral-400 line-through">{{ price }}</span>
        <span class="text-red-600">{{ discountPercent }}%</span>
      </div>

      <div class="flex gap-1 justify-end">
        <span>{{ discountPrice || price }}</span>
        <span>تومان</span>
      </div>
    </template>

    <div v-else class="self-end text-neutral-400">ناموجود</div>
  </div>
</template>
