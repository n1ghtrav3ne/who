<script setup lang="ts">
const showNav = ref(false);
const showCard = ref(false);
const showSearch = ref(false);
const showCategory=ref(false)

const openCard = () => {
  showCard.value = true;
  showSearch.value = false;
  showNav.value = false;
  showCategory.value = false;
};

const openSearch = () => {
  showSearch.value = !showSearch.value;
  showCard.value = false;
  showNav.value = false;
  showCategory.value = false;
};

const toggleNav = () => {
  showNav.value = !showNav.value;
  if (showNav.value) {
    showCard.value = false;
    showSearch.value = false;
    showCategory.value = false;
  }
};

const openCategory=()=>{
  showCategory.value = !showCategory.value;
}
</script>

<template>
  <div class="bg-white select-none shadow fixed z-50 top-0 w-full grid grid-cols-12 items-center gap-2 py-4 px-3">
    <div class="col-span-4 hidden md:flex gap-5">
      <div>
        <NuxtLink class="cursor-pointer" href="/collection">کالکشن</NuxtLink>
      </div>
      <div>
        <span @click="openCategory" class="cursor-pointer">دسته بندی</span>
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

    <div @click.self="showCard=false" class="fixed flex flex-row-reverse bg-neutral-400 w-full h-screen z-50 top-0 bg-opacity-40"
         :class="showCard ? 'bg-opacity-45 translate-x-0' : 'bg-opacity-0 -translate-x-full'">
      <TheCard
          :show="showCard"
          @close="showCard = false"
      />
    </div>

    <SearchBar @search="useRouter().push('/category')"
               :show="showSearch"
               @close="showSearch = false"
                />

    <TheCategory @close="showCategory=false"
                 :class="showCategory ? 'translate-y-0 duration-300' : '-translate-y-full duration-300'"
    />

  </div>
</template>
