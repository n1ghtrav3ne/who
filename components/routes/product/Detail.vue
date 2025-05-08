<script setup lang="ts">
const number=ref(0)

const properties=ref(['مشخصات محصول','سایز ها','جنس محصول'])

const props=defineProps({
  available:Boolean
})

const selectedSize = ref('')

const items=reactive([
  {size:'M',height:'100cm',width:'100cm'},
  {size:'L',height:'100cm',width:'100cm'},
  {size:'XL',height:'100cm',width:'100cm'},
  {size:'XXL',height:'100cm',width:'100cm'},
  {size:'100cm',height:'100cm',width:'100cm'},
])
</script>

<template>
  <div class="flex flex-col gap-9">

    <div class="flex flex-row justify-between items-center">

      <span class="text-[20px] font-bold">
        پافر کد ۱۲۳۴
      </span>

      <TheButton text="افزودن به مورد علاقه">
        <template #suffix>
          <Icon icon="heart" />
        </template>
      </TheButton>

    </div>

    <div v-if="available" class="flex flex-col gap-9">

      <div class="flex flex-col gap-4">

        <TheSelect v-model="selectedSize" title="انتخاب سایز" default-label="L (Large)">
          <template #options="{ selectOption }">
            <div v-for="size in ['S', 'M', 'L']" :key="size" @click="selectOption(size, size)">
              {{ size }}
            </div>
          </template>
        </TheSelect>

        <TheLink text="راهنمای سایز" />

      </div>

      <span class="text-[16px] font-light">
      ۱,400,000 تومان
      </span>

      <div class="flex flex-row gap-7 justify-between items-center">

        <div class="flex flex-row gap-4">

          <Icon @click="number++" icon="plus" color="#0A0A0A" weight="bold" />

          <span>{{number}}</span>

          <Icon @click="number > 0 ? number-- : null" icon="minus" color="#0A0A0A" weight="bold" />

        </div>

        <TheButton button-type="fill" text="افزودن به سبد خرید" size="lg" />

    </div>

      <OpeningButton text="مشخصات" :items="properties">

        <div class="flex flex-col w-[300px] lg:w-[400px]">

          <div class="bg-gray-200 px-6 py-3 flex flex-row justify-between border-b border-b-gray-200 text-sm font-light text-gray-500">

            <span>سایز</span>

            <span>قد کار</span>

            <span>عرض شانه</span>

          </div>

          <div v-for="(item,index) in items"
               :key="index"
               class="flex flex-row w-full py-4 px-6 text-gray-500 justify-between border-b border-b-gray-200">

            <span>{{item.size}}</span>

            <span>{{item.height}}</span>

            <span>{{item.width}}</span>

          </div>

        </div>

      </OpeningButton>

    </div>


    <TheButton v-else
               class="w-full lg:w-fit" text="موجود شد به من اطلاع بده"
               button-type="fill"
               size="lg">

      <template #suffix>
        <Icon icon="bellRinging" />
      </template>

    </TheButton>

  </div>
</template>