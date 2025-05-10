<script setup lang="ts">

</script>

<template>
  <div class="min-h-screen flex flex-col">
    <NavBar />
    <div class="flex-grow">
      <NuxtPage />
    </div>
    <DesktopFooter class="hidden lg:flex" />
    <MobileFooter class="flex lg:hidden" />
  </div>
</template>
