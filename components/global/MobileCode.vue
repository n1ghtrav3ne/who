<script setup lang="ts">
import type { CodeInputProps } from '~/types/components/CodeInput';

const model=defineModel<string>();
const props=defineProps<CodeInputProps>();

/**
 * Contains all the input fields.
 */
const inputs=ref<Array<HTMLInputElement | null>>(Array(props.maxCharachters / props.characterPerInput)
                .fill(null));

/**
 * Update the model when any input changes.
 */
const inputHandler=(event:Event)=>{
    const target=event.target as HTMLInputElement;
    updateModel();

    const currentInputIndex=inputs.value.indexOf(target);

    if (target.value.length==props.characterPerInput && currentInputIndex<inputs.value.length-1) {
        inputs.value[currentInputIndex+1]?.focus();
    }
};


/** 
 * This function handle the Backspace button so the prev input  
 * will be focused when the current input is empty, also updates the model.
 */
const handleBackspace=(event:KeyboardEvent) => {
    const target=event.target as HTMLInputElement;
    const currentInputIndex=inputs.value.indexOf(target);

    if (event.key=='Backspace' && target.value.length==0 && currentInputIndex>0){
        inputs.value[currentInputIndex-1]?.focus();
    }

    updateModel();
};

/** Updates the model provided by parent component and concats all the inputs value together */
const updateModel=async()=>{
    model.value=inputs.value
        .filter(input => input && input.value)
        .map(input => input!.value)
        .join('');
};
</script>

<template>
    <div dir="ltr">
        <div class="flex flex-row-reverse gap-2">
            <div class="w-fit" v-for="(item, i) in maxCharachters / characterPerInput" :key="i">
                <input
                    :ref="(el) => inputs[i] = (el as HTMLInputElement)"
                    :maxlength="characterPerInput"
                    @input="inputHandler"
                    @keydown="handleBackspace"
                    type="text"
                    class="border-b text-center outline-none px-2 w-full py-1"
                    :class="{
                        'border-b-error-light text-error-light':errorMsg
                    }"
                />
            </div>
        </div>  
        <InputErrorMsg v-if="errorMsg" :text="errorMsg" />
    </div>
</template>