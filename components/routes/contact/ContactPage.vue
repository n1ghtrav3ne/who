<script setup lang="ts">
 const test=ref("")
</script>

<template>
  <div class="flex flex-col">

    <div class="w-full flex justify-center h-[400px] bg-neutral-800">

      <span class="text-[40px] lg:text-[64px] text-neutral-50 font-light w-full h-full items-center flex justify-center">تماس با ما</span>

    </div>

    <div class="px-4 w-full flex flex-col gap-4 mt-4">

      <span class="text-[20px] font-light">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</span>

      <div class="w-full lg:w-[20%]">
        <TheInput title="نام و نام خانوادگی" placeholder="متن" v-model="test" />
      </div>

      <div class="w-full lg:w-[20%]">
        <TheInput title="موضوع" placeholder="متن" v-model="test" />
      </div>

      <div class="w-full lg:w-[30%]">
        <TheTextArea title="متن توضیحات" placeholder="موضوع" v-model="test" />
      </div>

      <div class="w-full lg:w-[10%]">
        <TheButton class="w-full" text="ارسال" button-type="fill" size="lg" />
      </div>

      <div class="flex flex-row gap-4 text-sm">

        <span>پشتیبانی</span>

        <span>اینستاگرام</span>

        <Icon icon="instagramLogo" color="#000000" />

      </div>

    </div>

  </div>
</template>