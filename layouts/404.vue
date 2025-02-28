<template>
  <div class="flex flex-col w-full items-center gap-[62px] lg:gap-[101px] justify-center h-screen">

    <div class="flex flex-col items-center">
      <span class="text-[64px] font-light">{{404}}</span>
      <span class="text-2xl lg:text-[64px] font-light">صفحه مورد نظر یافت نشد</span>
    </div>

    <TheButton @click="useRouter().push('/')" text="رفتن به صفحه اصلی" button-type="fill">

      <template #prefix>
        <span class="material-symbols-outlined">
        home
        </span>
      </template>

    </TheButton>

  </div>
</template>

<script setup>
defineProps(['error'])
</script>