<script setup lang="ts">

</script>

<template>
  <div class="flex flex-col gap-4 w-full">

    <div class="flex flex-row items-center justify-between">

      <span class="text-[20px] font-bold">سفارش های من</span>

      <div class="flex flex-row items-center cursor-pointer">

        <span class="text-[16px] underline">مشاهده همه</span>

        <span class="material-symbols-outlined">
          arrow_back_ios
          </span>

      </div>

    </div>

    <div class="flex flex-row justify-between w-full">

      <div class="flex flex-col gap-2 items-center lg:flex-row">

        <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
          <path d="M9.51013 22.3184L36.0001 37.6483L62.3101 22.4083" stroke="black" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M36 64.8272V37.6172" stroke="black" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M64.83 27.51V44.4901C64.83 44.6401 64.83 44.76 64.8 44.91C62.7 43.08 60 42.0001 57 42.0001C54.18 42.0001 51.57 42.9901 49.5 44.6401C46.74 46.8301 45 50.2201 45 54.0001C45 56.2501 45.63 58.38 46.74 60.18C47.01 60.66 47.34 61.1101 47.7 61.5301L42.21 64.5601C38.79 66.4801 33.21 66.4801 29.79 64.5601L13.77 55.68C10.14 53.67 7.17004 48.6301 7.17004 44.4901V27.51C7.17004 23.37 10.14 18.3301 13.77 16.3201L29.79 7.44C33.21 5.52 38.79 5.52 42.21 7.44L58.23 16.3201C61.86 18.3301 64.83 23.37 64.83 27.51Z" stroke="black" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M69 54C69 57.6 67.41 60.81 64.92 63C62.79 64.86 60.03 66 57 66C50.37 66 45 60.63 45 54C45 50.22 46.74 46.83 49.5 44.64C51.57 42.99 54.18 42 57 42C63.63 42 69 47.37 69 54Z" stroke="black" stroke-width="4.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M57.75 50.25V54.75L54 57" stroke="black" stroke-width="4.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        <span class="hidden text-[20px] font-bold lg:flex">0 سفارش جاری</span>

        <span class="flex text-[16px] font-bold lg:hidden">0</span>

        <span class="flex text-[16px] font-bold lg:hidden">جاری</span>

      </div>

      <div class="flex flex-col gap-2 items-center lg:flex-row">

        <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
          <path d="M9.51013 22.3184L36.0001 37.6483L62.3101 22.4083" stroke="black" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M36 64.8272V37.6172" stroke="black" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M64.83 27.51V44.4901C64.83 44.6401 64.83 44.76 64.8 44.91C62.7 43.08 60 42.0001 57 42.0001C54.18 42.0001 51.57 42.9901 49.5 44.6401C46.74 46.8301 45 50.2201 45 54.0001C45 56.2501 45.63 58.38 46.74 60.18C47.01 60.66 47.34 61.1101 47.7 61.5301L42.21 64.5601C38.79 66.4801 33.21 66.4801 29.79 64.5601L13.77 55.68C10.14 53.67 7.17004 48.6301 7.17004 44.4901V27.51C7.17004 23.37 10.14 18.3301 13.77 16.3201L29.79 7.44C33.21 5.52 38.79 5.52 42.21 7.44L58.23 16.3201C61.86 18.3301 64.83 23.37 64.83 27.51Z" stroke="black" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M69 54C69 57.6 67.41 60.81 64.92 63C62.79 64.86 60.03 66 57 66C50.37 66 45 60.63 45 54C45 50.22 46.74 46.83 49.5 44.64C51.57 42.99 54.18 42 57 42C63.63 42 69 47.37 69 54Z" stroke="black" stroke-width="4.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M57.75 50.25V54.75L54 57" stroke="black" stroke-width="4.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        <span class="hidden text-[20px] font-bold lg:flex">0 سفارش تحویل شده</span>

        <span class="flex text-[16px] font-bold lg:hidden">0</span>

        <span class="flex text-[16px] font-bold lg:hidden">تحویل شده</span>

      </div>

      <div class="flex flex-col gap-2 items-center lg:flex-row">

        <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
          <path d="M66 45C66 56.61 56.61 66 45 66L48.15 60.75" stroke="black" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M6 27C6 15.39 15.39 6 27 6L23.85 11.25" stroke="black" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M41.1 13.3477L53.04 20.2476L64.86 13.3777" stroke="black" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M53.04 32.4549V20.2148" stroke="black" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M50.22 6.63L43.02 10.6199C41.4 11.5199 40.05 13.7998 40.05 15.6598V23.28C40.05 25.14 41.37 27.4199 43.02 28.3199L50.22 32.31C51.75 33.18 54.27 33.18 55.83 32.31L63.03 28.3199C64.65 27.4199 66 25.14 66 23.28V15.6598C66 13.7998 64.68 11.5199 63.03 10.6199L55.83 6.63C54.3 5.79 51.78 5.79 50.22 6.63Z" stroke="black" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M7.05002 46.3477L18.96 53.2476L30.81 46.3777" stroke="black" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M18.96 65.4549V53.2148" stroke="black" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M16.17 39.63L8.97002 43.6199C7.35002 44.5199 6 46.7998 6 48.6598V56.28C6 58.14 7.32002 60.4199 8.97002 61.3199L16.17 65.31C17.7 66.18 20.22 66.18 21.78 65.31L28.98 61.3199C30.6 60.4199 31.95 58.14 31.95 56.28V48.6598C31.95 46.7998 30.63 44.5199 28.98 43.6199L21.78 39.63C20.22 38.79 17.7 38.79 16.17 39.63Z" stroke="black" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        <span class="hidden text-[20px] font-bold lg:flex">0 سفارش مرجوع شده</span>

        <span class="flex text-[16px] font-bold lg:hidden">0</span>

        <span class="flex text-[16px] font-bold lg:hidden">مرجوع شده</span>

      </div>

    </div>

  </div>
</template>
