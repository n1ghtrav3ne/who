<script setup lang="ts">
import type { CodeInputProps } from '~/types/components/CodeInput';

const model=defineModel<string>();
const props=defineProps<CodeInputProps>();

const inputs=ref<Array<HTMLInputElement|null>>(Array(props.maxCharachters/props.characterPerInput));

const changeInput=(event:KeyboardEvent)=>{
    const target=event.target as HTMLInputElement;

    if(target.value.length!=props.characterPerInput){
        return;
    }

    const currentInputIndex=inputs.value.indexOf(target);

    if(!model.value)
    {
        model.value="";
    }
    model.value+=inputs.value[currentInputIndex]?.value;

    if(currentInputIndex<inputs.value.length-1){
        inputs.value[currentInputIndex + 1]?.focus();
    }
}
</script>

<template>
    <div class="flex gap-2" dir="ltr">
        <div class="min-w-28 w-6" v-for="(item,i) in maxCharachters/characterPerInput" >
            <input
                    :ref="(el)=>inputs[i]=(el as HTMLInputElement)"
                    :maxlength="characterPerInput"
                    @keyup="changeInput($event)"
                    type="text" 
                    class="border-b border-b-red-600 text-center outline-none px-2 w-full py-1">
        </div>
    </div>
</template>