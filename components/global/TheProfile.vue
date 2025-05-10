<script setup lang="ts">
const router = useRouter()
const route = useRoute()

const items = reactive([
  { name: 'پیشخوان', path: 'dashboard',icon:'house'},
  { name: 'سفارش های من', path: 'orders',icon:'shoppingBagOpen'},
  { name: 'سایز های من', path: 'size',icon:'ruler'},
  { name: 'مورد علاقه ها', path: 'favorites',icon:'heart'},
  { name: 'آدرس ها', path: 'address',icon:'Signpost'},
  { name: 'اطلاعات حساب کاربری', path: 'information',icon:'User'},
  { name: 'خروج', path: '',icon:'signOut'},
])

const showPopup = ref(false)

function selectItem(index: number) {
  if (items[index].name === 'خروج') {
    showPopup.value = true
  } else {
    router.push(items[index].path)
  }
}

const selectedIndex = computed(() => {
  return items.findIndex(item => route.path.includes(item.path))
})
</script>


<template>
  <div class="flex flex-col gap-6 w-full lg:w-[25%] lg:gap-[60px]">

    <div class="flex flex-col gap-4">

      <span class="text-[32px] font-bold">{{ items[selectedIndex]?.name }}</span>

      <span class="text-2xl font-light">محمد حسینی پور</span>

      <span class="text-[20px] font-light">۰۹۱۲ ۳۴۵ ۶۷۸۹</span>

    </div>


    <div class="flex flex-col border border-neutral-950 cursor-pointer">

      <div v-for="(item , index) in items" :key="index"
           @click="selectItem(index)"
           :class="{'border-[3px]':selectedIndex === index}"
           class="w-full px-6 py-3 flex flex-row gap-2 items-center text-[16px] border border-neutral-950 select-none"
      >

        <Icon :icon="item.icon" />

        {{item.name}}
      </div>

    </div>

  </div>

  <PopUp title="از حساب کاربری خارج می‌شوید؟"
         text="آیا اطمینان دارید از حساب کاربری‌تان خارج شوید؟"
         v-if="showPopup"
         @close="showPopup = false" />
</template>