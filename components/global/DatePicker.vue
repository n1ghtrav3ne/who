<template>
  <div class="select-none w-fit">
    <!-- Date Selection Button -->
    <div
        @click="toggleCalendar"
        class="flex flex-row text-sm items-center h-[40px] px-5 w-fit mb-4 border border-neutral-950 gap-2 cursor-pointer"
    >

      <span class="material-symbols-outlined">
      calendar_month
      </span>

      {{ selectedDateText }}

      <span v-if="showCalendar" class="material-symbols-rounded font-bold">
      keyboard_arrow_up
      </span>

      <span v-else class="material-symbols-outlined">
      keyboard_arrow_down
      </span>


    </div>

    <!-- Calendar -->
    <div v-if="showCalendar" class="border p-4 w-[330px]">
      <!-- Step 1: Select Year -->
      <div v-if="step === 1">

        <div class="flex items-center justify-between mb-4">

          <div @click="decrementYear">
            <span class="material-symbols-rounded">
            arrow_forward_ios
            </span>
          </div>

          <span @click="step = 1" class="text-sm cursor-pointer">{{ selectedYear }}</span>

          <div @click="incrementYear">
            <span class="material-symbols-rounded">
            arrow_back_ios
            </span>
          </div>

        </div>

        <div class="grid grid-cols-3 gap-1">
          <span
              v-for="year in visibleYears"
              :key="year"
              @click="selectYear(year)"
              class="p-1 text-sm text-center cursor-pointer"
              :class="{ 'text-neutral-400': year === selectedYear }"
          >
            {{ year }}
          </span>
        </div>
      </div>

      <!-- Step 2: Select Month -->
      <div v-if="step === 2">

        <div class="flex items-center justify-between mb-4">

          <div @click="decrementYear">
            <span class="material-symbols-rounded">
            arrow_forward_ios
            </span>
          </div>

          <div class="flex flex-row items-center">

            <span @click="step = 1" class="text-sm cursor-pointer">{{ selectedYear }}</span>

            <span class="material-symbols-rounded font-bold">
            keyboard_arrow_down
            </span>

          </div>

          <div @click="incrementYear">
            <span class="material-symbols-rounded">
            arrow_back_ios
            </span>
          </div>

        </div>

        <div class="grid grid-cols-3 gap-1">
          <span
              v-for="(month, index) in months"
              :key="index"
              @click="selectMonth(index + 1)"
              class="p-1 text-sm text-center cursor-pointer"
          >
            {{ month }}
          </span>
        </div>
      </div>

      <!-- Step 3: Select Day -->
      <div v-if="step === 3">

        <div class="flex items-center justify-between">

          <div @click="decrementMonth">
            <span class="material-symbols-rounded">
            arrow_forward_ios
            </span>
          </div>

          <div class="flex flex-row text-sm items-center">

            <div class="flex flex-row items-center cursor-pointer px-2">
              <span @click="step = 1">{{ selectedYear }}</span>
              <span class="material-symbols-rounded">
              keyboard_arrow_down
              </span>
            </div>

            <div class="flex flex-row items-center cursor-pointer px-2">
              <span @click="step = 2">{{ months[selectedMonth - 1] }}</span>
              <span class="material-symbols-rounded">
              keyboard_arrow_down
              </span>
            </div>

          </div>

          <div @click="incrementMonth">
            <span class="material-symbols-rounded">
            arrow_back_ios
            </span>
          </div>

        </div>
        <div class="grid grid-cols-7 gap-2">
          <!-- Day Names -->
          <span
              v-for="dayName in dayNames"
              :key="dayName"
              class="p-3 text-center text-sm text-neutral-400"
          >
            {{ dayName }}
          </span>
          <!-- Days -->
          <span
              v-for="day in daysInMonth"
              :key="day"
              @click="selectDay(day)"
              class="p-1 text-sm text-center cursor-pointer"
              :class="{ 'bg-neutral-950 text-white': day === selectedDay }"
          >
            {{ day }}
          </span>
        </div>
      </div>

      <!-- Confirm and Cancel Buttons -->
      <div class="flex flex-row justify-end gap-2 mt-4 border-t pt-3">
        <button
            @click="cancelSelection"
            class="flex px-5 py-1.5 border border-neutral-950 text-sm text-center"
        >
          انصراف
        </button>

        <button
            @click="confirmDate"
            class="flex px-5 py-1.5 bg-neutral-950 text-white text-sm text-center"
        >
          تایید
        </button>

      </div>
    </div>
  </div>
</template>

<script setup>
import {getJalaliDate} from "~/utils/JalaliDate";

const today = new Date();
const jalaliDate = ref(getJalaliDate(today));
const step = ref(1);
const selectedYear = ref(jalaliDate.value.jy);
const selectedMonth = ref(null);
const selectedDay = ref(null);

// Display current year and the next 12 years
const visibleYears = computed(() => {
  const startYear = selectedYear.value;
  return Array.from({ length: 12 }, (_, i) => startYear + i);
});

const months = [
  "فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور",
  "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"
];

const dayNames = ["ش", "ی", "د", "س", "چ", "پ", "ج"];

const daysInMonth = computed(() => (selectedMonth ? getJalaliMonthDays(selectedYear.value, selectedMonth.value) : 0));

const showCalendar = ref(false);
const selectedDateText = ref("انتخاب تاریخ");

const toggleCalendar = () => {
  showCalendar.value = !showCalendar.value;
  if (showCalendar.value) {
    step.value = 1; // Reset to year selection when opening the calendar
  }
};

const selectYear = (year) => {
  selectedYear.value = year;
  step.value = 2;
};

const selectMonth = (month) => {
  selectedMonth.value = month;
  step.value = 3;
};

const selectDay = (day) => {
  selectedDay.value = day;
};

const confirmDate = () => {
  if (selectedDay.value && selectedMonth.value) {
    selectedDateText.value = ` ${selectedDay.value} ${months[selectedMonth.value - 1]} ${selectedYear.value}`;
    showCalendar.value = false; // Close the calendar after confirming
  }
};

const cancelSelection = () => {
  selectedYear.value = jalaliDate.value.jy;
  selectedMonth.value = null;
  selectedDay.value = null;
  selectedDateText.value = "انتخاب تاریخ";
  showCalendar.value = false; // Close the calendar on cancel
};

const incrementYear = () => {
  selectedYear.value += 1;
};

const decrementYear = () => {
  selectedYear.value -= 1;
};

const incrementMonth = () => {
  if (selectedMonth.value === 12) {
    selectedMonth.value = 1;
    selectedYear.value += 1;
  } else {
    selectedMonth.value += 1;
  }
};

const decrementMonth = () => {
  if (selectedMonth.value === 1) {
    selectedMonth.value = 12;
    selectedYear.value -= 1;
  } else {
    selectedMonth.value -= 1;
  }
};
</script>