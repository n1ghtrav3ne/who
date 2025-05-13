<script setup lang="ts">
import ColorPicker from "~/components/global/ColorPicker.vue";

const number=ref(0)

const props=defineProps({
  available:Boolean
})

const isFavorite = ref(false)

function toggleFavorite() {
  isFavorite.value = !isFavorite.value
}

const selectedSize = ref('')

</script>

<template>
  <div class="flex flex-col gap-9">

    <div class="flex flex-row justify-between items-center">

      <span class="text-[20px] font-bold">
        پافر کد ۱۲۳۴
      </span>

     <div @click="toggleFavorite" class="flex flex-row select-none items-center gap-1 text-xs text-neutral-500 cursor-pointer">
       <span :class="isFavorite ? 'text-neutral-950' : 'text-neutral-500'">افزودن به مورد علاقه</span>
       <Icon
           icon="heart"
           :color="isFavorite ? '#ef4444' : '#737373'"
            :filled="isFavorite"
       />
     </div>

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

        <span @click="$emit('show')" class="text-[#115EA3] text-sm cursor-pointer underline underline-offset-8">راهنمای سایز</span>

      </div>

      <ColorPicker />

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

      <OpeningButton text="مشخصات">
        <div class="flex flex-col gap-2 text-sm">
          <span>جنس:</span>
          <p>پارچه کتان با ترکیب ۹۵٪ کتان و ۵٪ الاستین (کشی) - نرم، بادوام و کمی کش‌دار برای راحتی بیشتر.</p>
        </div>

        <div class="flex flex-col gap-2 text-sm">
          <span>نحوه شست‌وشو:</span>
          <p>شست‌وشو با دست یا ماشین لباسشویی در دمای حداکثر ۳۰ درجه سانتی‌گراد، از سفیدکننده استفاده نشود، اتوکشی با دمای پایین (حداکثر ۱۱۰ درجه)، خشک‌شویی مجاز است، برای حفظ کیفیت، شلوار را پشت‌ورو کنید و با رنگ‌های مشابه بشویید.</p>
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