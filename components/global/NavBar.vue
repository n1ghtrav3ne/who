<script setup lang="ts">
    const showNav=ref<boolean>(false);
</script>

<template>
  <div class="bg-white shadow-md grid grid-cols-12 items-center gap-2 py-4 px-3">
    <div class="col-span-4 hidden md:flex gap-5">
      <div>
        <NuxtLink href="#">کالکشن</NuxtLink>
      </div>

      <div>
        <NuxtLink href="#">دسته بندی</NuxtLink>
      </div>

      <div>
        <NuxtLink href="#">جستجو</NuxtLink>
      </div>
    </div>

    <div class="col-span-4 flex md:hidden gap-2 select-none">
      <span class="cursor-pointer" @click="showNav = !showNav">
        nav
      </span>

      <Transition name="slide">
        <div v-if="showNav" class="fixed top-0 left-0 h-screen w-full">
          <div
            @click.self="showNav=false"
            class="fixed top-0 left-0 h-screen w-full bg-neutral-700/70 transition-opacity duration-300"
            :class="{'opacity-0':!showNav,'opacity-100':showNav}"
          ></div>

          <div class="inner fixed h-screen w-44 bg-white p-3 translate-x-0 transition-all duration-300">
            <div>
              <span class="cursor-pointer" @click="showNav=false">
                cl
              </span>
            </div>

            <div>
              دسته
            </div>
          </div>
        </div>
      </Transition>
    </div>

    <div class="col-span-4 text-center">
      WHO
    </div>

    <div class="col-span-4 hidden md:flex justify-end gap-5">
      <div class="cursor-pointer">
        سبد خرید
      </div>

      <div class="cursor-pointer">
        پروفایل
      </div>
    </div>

    <div class="col-span-4 flex md:hidden gap-2 justify-end">
      <div>
        cart
      </div>

      <div>
        sear
      </div>
    </div>
  </div>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
}

.slide-enter-active .inner,
.slide-leave-active .inner {
  transition: transform 0.3s ease;
}

.slide-enter-to .inner,
.slide-leave-from .inner {
  transform: translateX(0);
}

.slide-enter-from .inner,
.slide-leave-to .inner {
  @apply translate-x-44;
}
</style>