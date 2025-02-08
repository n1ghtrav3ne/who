type Variant="bordered"|"underline";
type InputTypes="text"|"number"|"password";

export interface InputProps{
    variant?:Variant
    placeholder?:string
    type?:InputTypes
    disabled?:boolean
    errorMsg?:string
}