<script setup lang="ts">

type ProcessStatus = 'pending' | 'delivered' | 'returned';

const props = defineProps<{
  status: ProcessStatus;
}>();
</script>

<template>
  <div class="flex flex-row items-center gap-3 w-full">

    <span v-if="props.status==='pending'" class="text-sm lg:text-[16px]">
      در حال پردازش
    </span>

    <Icon v-if="props.status==='delivered'"
          color="#28A745"
          icon="checkCircle" />

    <span v-if="props.status==='delivered'" class="text-sm lg:text-[16px]">
      تحویل شده
    </span>

    <Icon v-if="props.status==='returned'"
          icon="repeat"
          color="#DC3545" />

    <span v-if="props.status==='returned'" class="text-sm lg:text-[16px]">
      مرجوع شده
    </span>

  </div>
</template>