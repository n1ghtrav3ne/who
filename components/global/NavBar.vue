<script setup lang="ts">
const showNav = ref(false);
const showCard = ref(false);
const showSearch = ref(false);

const openCard = () => {
  showCard.value = true;
  showSearch.value = false;
  showNav.value = false;
};

const openSearch = () => {
  showSearch.value = true;
  showCard.value = false;
  showNav.value = false;
};

const toggleNav = () => {
  showNav.value = !showNav.value;
  if (showNav.value) {
    showCard.value = false;
    showSearch.value = false;
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
        <span class="cursor-pointer" @click="openSearch">جستجو</span>
      </div>
    </div>

    <div class="col-span-4 flex md:hidden gap-2 select-none">
      <Icon icon="list" @click="toggleNav" />
      <NavMenu
          @search="openSearch"
          @card="openCard"
          @close="showNav = false"
          class="duration-300"
          :class="showNav ? 'translate-x-0' : 'translate-x-full'"
      />
    </div>

    <div @click="useRouter().push('/')" class="col-span-4 text-center cursor-pointer">
      WHO
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
    <TheCard
        @close="showCard = false"
        class="duration-300"
        :class="showCard ? 'translate-x-0' : '-translate-x-full'"
    />

    <SearchBar @close="showSearch = false" v-if="showSearch" />
  </div>
</template>
