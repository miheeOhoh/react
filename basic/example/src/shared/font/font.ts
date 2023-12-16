import {Public_Sans, Roboto} from "next/font/google";
export const publicSans = Public_Sans({
    subsets: ['latin'],
    display:'swap',
    variable:'--publicSans-font'
})

export const roboto = Roboto({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
    variable:'--roboto-font'
})


export const fontType = {
    roboto:"--roboto-font"
} as const