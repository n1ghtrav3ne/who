<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  title: String,
  target: String,
})

const size = ['2xl', 'xl', 'l', 's']
const router = useRouter()

const routeHandler = () => {
  router.push(props.target as string)
}

const selectedOption = ref<'first' | 'second' | null>(null)

const selectOption = (option: 'first' | 'second') => {
  selectedOption.value = selectedOption.value === option ? null : option
}
</script>

<template>
  <div class="container flex flex-col gap-8 justify-center items-center w-full h-screen">
    <div class="flex text-center">
      <span class="text-2xl">
        سایز <span class="font-bold">{{ title }}</span>
        خود را وارد کنید تا بهترین انتخاب‌ها رو داشته باشید.
      </span>
    </div>

    <div class="flex gap-4 flex-col justify-center lg:items-center">

      <div class="flex items-center gap-2">
        <RadioButton text="انتخاب بر اساس اندازه گیری خودتان" @click="selectOption('first')" :selected="selectedOption === 'first'" />
      </div>

      <TheSelect class="w-full"
                 default-label="یک گزینه را انتخاب کنید"
                 title="سایز لباس (بالا تنه) خود را وارد کنید"
                 :disabled="selectedOption !== 'first'"
                 model-value="">
        <template #options>
          <span v-for="item in size" :key="item">{{ item }}</span>
        </template>
      </TheSelect>


      <div class="flex items-center gap-2">
        <RadioButton text="انتخاب بر اساس اندازه گیری خودتان" @click="selectOption('second')" :selected="selectedOption === 'second'" />
        <span class="text-blue-900 text-sm underline cursor-pointer">آموزش اندازه گیری</span>
      </div>

      <TheSelect class="w-full"
                 default-label="یک گزینه را انتخاب کنید"
                 title="سایز لباس (بالا تنه) خود را وارد کنید"
                 :disabled="selectedOption !== 'second'"
                 model-value="">
        <template #options>
          <span v-for="item in size" :key="item">{{ item }}</span>
        </template>
      </TheSelect>
    </div>

    <div class="flex flex-row gap-4 lg:gap-2 w-full md:w-[25%]">
      <TheButton @click="routeHandler" class="w-full" text="ادامه" button-type="fill" />
      <TheButton @click="routeHandler" class="w-full" text="رد کردن" button-type="outline" />
    </div>
  </div>
</template>
