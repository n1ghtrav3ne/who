<script setup lang="ts">

const prop=defineProps(['show'])

const detail=reactive(
    {
      code:1234,
      style:"مشکی - XS",
      price:"۱,200,00۰"
    }
)

const emit=defineEmits(['close'])

const number=ref(0)

function transfer(){
  setTimeout(() => {
    useRouter().push('/card')
  },300)
  emit('close')
}
</script>

<template>
    <div class="flex flex-col duration-200 gap-5 items-start w-full bg-white lg:w-[30%]"
         :class="show ? 'translate-x-0' : '-translate-x-full'">

      <Icon icon="X" @click="$emit('close')" class="mr-[5%] mt-7 cursor-pointer" />

      <span class="text-[32px] font-bold container">سبد خرید</span>

      <div class="container flex flex-col gap-10 pb-10 h-auto w-full overflow-y-auto border-b border-b-neutral-200">

        <div v-for="index in 2" class="grid grid-cols-3 w-full gap-4">

          <div class="flex flex-row gap-2 col-span-2">

            <div class="w-[80px] h-[119px]">
              <Poster :img="'/images/productImg.webp'" />
            </div>

            <div class="flex flex-col gap-2 text-sm">

              <span>محصول مورد نظر کد{{detail.code}}</span>

              <span>{{detail.style}}</span>

              <span>{{detail.price}}</span>

              <span>تومان</span>

            </div>

          </div>

          <div class="flex flex-col justify-between">

            <div class="flex flex-row justify-between text-[16px] cursor-pointer select-none">

              <Icon icon="plus" @click="number++" weight="bold" />

              <span>{{number}}</span>

              <Icon icon="minus" weight="bold" @click="number > 0 ? number-- : null" />

            </div>

            <Icon icon="trash" class="mr-auto" />

          </div>

        </div>

      </div>

      <div class="container flex flex-col gap-4">

        <div class="flex flex-row items-center text-[20px] font-bold justify-between">

          <span>جمع کل</span>

          <div class="flex flex-col">
            <span>۲,800,000</span>
            <span>تومان</span>
          </div>

        </div>

        <TheButton @click="transfer" class="w-full" text="ادامه فرایند خرید" button-type="fill" size="lg" />

      </div>

    </div>
</template>