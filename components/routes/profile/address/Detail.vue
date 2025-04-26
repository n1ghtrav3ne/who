<script setup lang="ts">
const items=reactive([
  {icon:'pedal_bike',title:'کرمان'},
  {icon:'mail',title:'۷۶۱۸۹۸۶۵۳۳'},
  {icon:'call',title:'۰۹۱۲ ۳۴۵ ۶۷۸۹'},
  {icon:'id_card',title:'محمد حسینی پور'},
])

</script>

<template>
  <div class="container flex flex-col gap-6 mt-10 border-b border-neutral-200">

    <span class="text-[16px]">کرمان، خیابان جهاد، کوچه شماره ۲۸، پلاک ۲۹، واحد ۴</span>

    <div class="flex flex-col gap-2 text-neutral-500 text-[16px]">

      <div v-for="(item,index) in items"
           :key="index"
           class="flex flex-row items-center gap-2">

        <span class="material-symbols-outlined">
        {{item.icon}}
        </span>

        <span>{{item.title}}</span>

      </div>

    </div>

    <div class="flex flex-row gap-4 w-full">

      <TheButton text="ویرایش آدرس" button-type="outline">
        <template #prefix>
          <span class="material-symbols-outlined">
          edit
          </span>
        </template>
      </TheButton>

      <TheButton @click="$emit('change')"
                 text="حذف آدرس"
                 button-type="outline">

        <template #prefix>
          <span class="material-symbols-outlined">
          delete
          </span>
        </template>

      </TheButton>

    </div>

  </div>
</template>