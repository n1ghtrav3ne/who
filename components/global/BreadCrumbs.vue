<script setup lang="ts">
const route = useRoute();
const crumbs = ref();

watch(
    () => route.path,
    (newPath) => {
      const pathArray = newPath.split('/').filter(Boolean);
      crumbs.value = pathArray.map((segment, index) => {
        const path = `/${pathArray.slice(0, index + 1).join('/')}`;
        const pageNumber = segment.match(/\d+/)?.[0];
        const title = pageNumber ? `صفحه ${pageNumber}` : `صفحه ${index + 1}`;
        return { path, title };
      });
    },
    { immediate: true }
);

const props=defineProps({
  size:{
    type:String,
    default:"md"
  }
})
</script>
<template>
  <div class="flex flex-row text-center w-fit mx-auto mt-10 items-center gap-2"
       :class="{'text-sm':size=='sm'}">
    <div>
      <NuxtLink to="/" class="flex flex-row items-center gap-2">
        <span class="material-symbols-outlined">
        home
        </span>
        <span>خانه</span>
      </NuxtLink>
    </div>

    <span class="material-symbols-outlined text-sm text-neutral-500 pt-1"> arrow_back_ios </span>

    <div v-for="(crumb, index) in crumbs" :key="index" class="flex items-center cursor-pointer">
      <div @click="useRouter().push(crumb.path)" :class="{ 'text-neutral-500': index === crumbs.length - 1 }">
        {{ crumb.title }}
      </div>
      <span v-if="index !== crumbs.length - 1" class="material-symbols-outlined text-sm text-neutral-500 pt-1">
        arrow_back_ios
      </span>
    </div>
  </div>
</template>
