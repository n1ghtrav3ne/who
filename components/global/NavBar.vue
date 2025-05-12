<script setup lang="ts">
const show=reactive({
  nav:false,
  card:false,
  search:false,
})

const openCard = () => {
  show.card = true;
  show.search = false;
  show.nav = false;
};

const openSearch = () => {
  show.search = !show.search;
  show.card = false;
  show.nav = false;
};

const toggleNav = () => {
  show.nav = !show.nav;
  if (show.nav) {
    show.card = false;
    show.search = false;
  }
};

</script>

<template>
  <div class="bg-white fixed z-50 top-0 w-full shadow-md grid grid-cols-12 items-center gap-2 py-4 px-3">
    <div class="col-span-4 hidden md:flex gap-5">
      <div>
        <NuxtLink class="cursor-pointer" href="/collection">کالکشن</NuxtLink>
      </div>
      <div>
        <NuxtLink class="cursor-pointer" href="/category">دسته بندی</NuxtLink>
      </div>
      <div>
        <span class="cursor-pointer select-none" @click="openSearch">جستجو</span>
      </div>
    </div>

    <div class="col-span-4 flex md:hidden gap-2 select-none">
      <Icon icon="list" @click="toggleNav" />
      <NavMenu
          @search="openSearch"
          @card="openCard"
          @close="show.nav = false"
          class="duration-300"
          :class="show.nav ? 'translate-x-0' : 'translate-x-full'"
      />
    </div>

    <div @click="useRouter().push('/')" class="col-span-4 text-center cursor-pointer">
      <TheLogo />
    </div>

    <div class="col-span-4 hidden md:flex justify-end gap-5">
      <div @click="openCard" class="cursor-pointer">سبد خرید</div>
      <div @click="useRouter().push('/profile/dashboard')" class="cursor-pointer">پروفایل</div>
    </div>

    <div class="col-span-4 flex md:hidden gap-[18px] justify-end">
      <Icon icon="shoppingBag" @click="openCard" />
      <Icon icon="MagnifyingGlass" @click="openSearch" />
    </div>
  </div>

  <div class="pt-[55px]">

    <div @click="show.card=false"
         class="fixed flex flex-row-reverse bg-neutral-400 w-full h-screen z-50 top-0 bg-opacity-40"
         :class="show.card ? 'bg-opacity-45 translate-x-0' : 'bg-opacity-0 -translate-x-full'">
      <TheCard
          :show="show.card"
          @close="show.card = false"
      />
    </div>

    <SearchBar @close="show.search = false" v-if="show.search" />
  </div>
</template>
