<script setup>
  const items=reactive([
    {label:"فیلتر براساس"},
    {label:"جدیدترین"},
    {label:"پربازدیدترین"},
    {label:"محبوب ترین"},
    {label:"پرفروش ترین"},
    {label:"ارزان ترین"},
    {label:"گران ترین"},
  ])

  const emit = defineEmits(['select'])

  const selectedItem=ref(0)

  const chooseItem=(index)=>{
    selectedItem.value=index
    setTimeout(()=>{
      emit('select', index)
    },300)
  }
</script>

<template>
  <div class="flex flex-col gap-2 bg-white rounded shadow-2xl w-[95%] absolute top-12 py-2 z-40 lg:w-[20%] lg:right-[15%] lg:top-6">

    <div @click="chooseItem(index)" v-for="(item,index) in items"
         :key="index"
         class="flex flex-row items-center gap-2 text-sm px-2 py-1 cursor-pointer">

      <Icon :class="selectedItem===index ? 'opacity-100' : 'opacity-0'" icon="check" :size="20" />

      <span>{{item.label}}</span>

    </div>

  </div>
</template>