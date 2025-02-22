<script setup lang="ts">

</script>
<template>
  <div class="flex flex-col min-h-screen">
    <NavBar />
    <NuxtPage />
    <DesktopFooter class="hidden lg:flex" />
    <MobileFooter class="flex lg:hidden" />
  </div>
</template>