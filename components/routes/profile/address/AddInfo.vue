<script setup lang="ts">
  const textArea=ref("")
  const test=ref('')
</script>

<template>
  <div class="flex flex-col gap-6 w-full items-center mx-auto lg:w-[30%]">

    <span class="text-2xl font-bold">آدرس جدید</span>

    <TheTextArea v-model="textArea" placeholder="نشانی پستی" />

    <TheSelect class="w-full" title="استان" default-label="استان" v-model="test" />

    <TheSelect class="w-full" title="استان" default-label="استان" v-model="test" />

    <div class="flex flex-row gap-2 justify-between items-center w-full">

      <TheInput class="w-full" title="پلاک" placeholder="متن" v-model="test" />

      <TheInput class="w-full" title="واحد" placeholder="واحد" v-model="test" />

    </div>

    <TheSelect class="w-full" title="استان" default-label="استان" v-model="test" />

    <TheButton @click="$emit('confirmed')" class="w-full" text="ثبت آدرس" button-type="fill" size="lg" />

  </div>
</template>