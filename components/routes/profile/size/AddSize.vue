<script setup lang="ts">
const props=defineProps({
  title:String,
  target:String,
})

const router = useRouter();

const navigate = () => {
  if (props.target) {
    router.push(props.target);
  }
};
</script>

<template>
    <div @click="navigate" class="flex flex-col gap-2 border-b border-neutral-100 px-2 py-1 cursor-pointer">

      <span class="text-sm text-neutral-400">{{title}}</span>

      <div class="flex flex-row items-center justify-between">

        <span class="text-[18px]">اضافه کردن سایز</span>

        <span class="material-symbols-outlined">
        add_circle
        </span>

      </div>

    </div>
</template>
