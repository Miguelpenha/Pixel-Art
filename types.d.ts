export interface Itheme {
    color: string
    primary: string
    secondary: string
    backgroundColor: string
    backgroundColorSecondary: string
}

export interface Ipixel {
    id: string
    color: string
}

export interface Iart {
    _id: string
    name: string
    pixelsCont: number
    sizePixel: number
    pixels: Ipixel[]
    url: string
    colors: string[]
}