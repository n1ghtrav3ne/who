<script setup lang="ts">

import AddSize from "~/components/routes/profile/size/AddSize.vue";
import ClothSize from "~/components/routes/customize/ClothSize.vue";
</script>

<template>
  <div class="container grid grid-rows-3 lg:grid-cols-2 gap-6">
    <AddSize title="سایز لباس (بالا تنه)" target="cloth" />
    <AddSize title="سایز شلوار" target="pants" />
    <AddSize class="lg:col-span-2 lg:w-1/2" title="سایز کفش" target="shoes" />
  </div>
</template>