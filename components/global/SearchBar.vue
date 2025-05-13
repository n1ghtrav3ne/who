<script setup lang="ts">
const show=defineModel("show",{
  type:Boolean,
  default:false,
});

const model=defineModel("modelValue",{
  type:String,
  default:"",
});

const showInput=ref(false);

const emit = defineEmits({
  search:(value:string)=>{
    return true
  }
});

watch(show, (newValue) => {
  if(newValue)
  {
    setTimeout(()=>{
      showInput.value = newValue;
    },50);
  }
});

watch(showInput, (newValue) => {
  if(!newValue)
  {
    setTimeout(()=>{
      show.value=false;
    },50);
  }
});

</script>

<template>
  <div
      @keydown.enter="$emit('search',model)"
      @click.self="show=false"
      class="fixed top-[45px] flex z-40 flex-col w-full h-screen bg-neutral-950 bg-opacity-45"
      v-if="show"
  ></div>
  <Transition>
    <div v-if="show" class="px-4 py-3 w-full fixed z-40 bg-white flex flex-row items-center">
      <div class="flex flex-row gap-2 items-center p-2 border-b border-b-neutral-950 w-full lg:w-1/3">
        <input
          v-model="model"
          class="w-full outline-0"
          type="text"
          placeholder="جستجو محصولات"
          @keyup.enter="$emit('search',model)"
        />

        <Icon @click="$emit('search',model)" icon="ArrowLeft" class="cursor-pointer" />
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: transform .3s ease;
}

.v-enter-from,
.v-leave-to
{
  transform:translateY(-50px);
}

.v-leave-from,
.v-enter-to
{
  transform:translateY(0);
}
</style>