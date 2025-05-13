<script setup lang="ts">
import ProcessStatus from "~/components/routes/profile/orders/ProcessStatus.vue";

const items=reactive(['جاری','تحویل شده','مرجوع شده'])

const available=ref(true)

const selectedIndex=ref(0)

const toggleIndex=(index:number)=>{
  selectedIndex.value=index
}
</script>

<template>
  <div class="container flex flex-col">

    <div class="flex flex-row justify-between w-full text-sm lg:text-[16px]">

      <span v-for="(item , index) in items" :key="index"
            @click="toggleIndex(index)"
            class="w-full text-neutral-300 border-b border-neutral-950 cursor-pointer pb-3"
            :class="{'border-b-[3px] text-neutral-950':selectedIndex === index}"
      >
        {{item}}
      </span>

    </div>

    <NuxtLink to="/order-detail/1" v-if="available" v-for="item in 3" class="container flex flex-col gap-3 border-b">

      <div class="flex flex-row justify-between w-full text-sm lg:text-[16px]">

        <span>کد سفارش: ۱۲۳۴</span>

        <Icon icon="caretLeft" />

      </div>

      <div class="flex flex-row w-full text-sm lg:text-[16px]">

        <ProcessStatus status="delivered" />

        <span class="text-sm text-neutral-400 w-full lg:text-[16px]">
        ۲۹ بهمن ۱۴۰۳
        </span>

      </div>

      <div class="flex gap-4 flex-nowrap overflow-x-auto w-full">

        <div v-for="item in 2" class="w-[56px] h-[76px] flex-shrink-0">
          <Poster img="/images/productImg.webp" alt="image" />
        </div>

      </div>

    </NuxtLink>

    <span v-else
          class="text-[20px] text-neutral-950 font-light mx-auto mt-[20%]"
    >هنوز سفارشی ندادید!
    </span>

  </div>
</template>
