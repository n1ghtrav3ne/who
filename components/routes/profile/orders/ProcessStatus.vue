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


    <span v-if="props.status==='delivered'" class="material-symbols-outlined text-green-600">
    check_circle
    </span>

    <span v-if="props.status==='delivered'" class="text-sm lg:text-[16px]">
      تحویل شده
    </span>


    <span v-if="props.status==='returned'" class="material-symbols-outlined text-error-light">
    cycle
    </span>

    <span v-if="props.status==='returned'" class="text-sm lg:text-[16px]">
      مرجوع شده
    </span>

  </div>
</template>