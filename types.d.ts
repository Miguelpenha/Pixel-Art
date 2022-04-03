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
}