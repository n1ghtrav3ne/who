<script setup lang="ts">
const number=ref(0)

const properties=ref(['مشخصات محصول','سایز ها','جنس محصول'])

const props=defineProps({
  available:Boolean
})
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

        <TheSelect title="انتخاب سایز" default-label="L (Large)" model-value="">
          <template #options>

            <span v-for="index in 3">md</span>

          </template>
        </TheSelect>

        <TheLink text="راهنمای سایز" />

      </div>

      <span class="text-[16px] font-light">
      ۱,400,000 تومان
      </span>

      <div class="flex flex-row justify-between items-center">

        <TheButton :text="number">
          <template #prefix>
            <span @click="number++" class="material-symbols-outlined">
            add
            </span>
          </template>

          <template #suffix>
            <span @click="number--" class="material-symbols-outlined">
            remove
            </span>
          </template>
        </TheButton>

        <TheButton button-type="fill" text="افزودن به سبد خرید" size="lg" />

    </div>

    <OpeningButton text="مشخصات" :items="properties" />

    </div>


    <TheButton v-else
               class="w-full lg:w-fit" text="موجود شد به من اطلاع بده"
               button-type="fill"
               size="lg">

      <template #suffix>
        <span class="material-symbols-outlined">
        notifications_active
        </span>
      </template>

    </TheButton>

  </div>
</template>