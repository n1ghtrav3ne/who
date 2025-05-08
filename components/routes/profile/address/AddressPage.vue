<script setup lang="ts">
import Detail from "~/components/routes/profile/address/Detail.vue";
import AddInfo from "~/components/routes/profile/address/AddInfo.vue";

const viewMode = ref<'detail' | 'add' | 'empty'>('detail');

const popUpStatus=ref(false)
</script>

<template>
  <div class="container flex flex-col gap-10">

    <div v-if="viewMode!=='add'" class="flex flex-row justify-between items-center w-full">

      <span class="font-bold text-[20px]">آدرس های من</span>

      <TheButton @click="viewMode='add'"
                 text="ثبت آدرس جدید"
                 button-type="outline"
      >
        <template #prefix>
          <Icon icon="mapPinLine" />
        </template>

      </TheButton>

    </div>

    <Detail @edit="viewMode='add'" @change="popUpStatus=true" v-if="viewMode==='detail'" />

    <AddInfo @confirmed="viewMode='detail'" v-if="viewMode==='add'" />

    <span v-if="viewMode==='empty'" class="text-[16px] mx-auto mt-10">هنوز آدرس ثبت نکردید.</span>

  </div>

  <PopUp @close="popUpStatus=false"
         v-if="popUpStatus"
         title="حذف آدرس"
         text="آیا از حذف این آدرس از لیست آدرس‌ها اطمینان دارید؟" />

</template>