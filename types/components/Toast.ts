export enum ToastPosition{
    TopRight=1,
    TopLeft=2,
    BottomRight=3,
    BottomLeft=4
}

export interface ToastProps{
    text:string
    position?:ToastPosition
    timer?:number
}