export interface ProductCardProps{
    title:string
    code:number|string
    discountPrice:number
    price:number
    available:boolean
    image?: string
    status?:string
}