<script setup lang="ts">

</script>
<template>
  <NavBar />
  <div class="container flex flex-col gap-8 lg:flex-row">
    <TheProfile />
    <NuxtPage class="w-full" />
  </div>
  <DesktopFooter class="hidden lg:flex" />
  <MobileFooter class="flex lg:hidden" />
</template>
