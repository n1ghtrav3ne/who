<script setup lang="ts">

const input = ref("");
const isSubmitted = ref(false);

const isValidPhoneNumber = (phone: string) => {
  const regex = /^(?:\+98|0)?9\d{9}$/;
  return regex.test(phone);
};

const isError = computed(() => {
  return isSubmitted.value && !isValidPhoneNumber(input.value);
});

const handleSubmit = () => {
  isSubmitted.value = true;
  if (!isError.value) {
    useRouter().push("verification");
  }
};

const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === "Enter") {
    handleSubmit();
  }
};
</script>

<template>
  <div class="container w-full h-screen flex flex-col justify-center items-center gap-8 mx-auto mb-32 lg:w-[25%]"
       @keydown="handleKeyDown">

      <span class="text-2xl font-light">ورود / ثبت نام</span>

      <div class="w-full">
        <TheInput
            v-model="input"
            placeholder="شماره موبایل خود را وارد کنید"
            :disabled="false"
            variant="bordered"
            :errorMsg="isError ? '*شماره وارد شده معتبر نیست.' : ''"
        >

          <Icon icon="xCircle" @click="input=''" class="cursor-pointer" />

        </TheInput>
      </div>

      <TheButton
          class="w-full"
          size="lg"
          :disabled="input.trim() === ''"
          button-type="fill"
          text="ادامه"
          @click="handleSubmit"
      />


  </div>
</template>