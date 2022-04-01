import { Ipixel } from '../../../types'
import { Dispatch, FC, memo, SetStateAction, useState } from 'react'
import { Container } from './style'

interface Iprops {
    id: string
    color: string
    size: number
    pixels: Ipixel[]
    setPixels: Dispatch<SetStateAction<Ipixel[]>>
}

const Pixel: FC<Iprops> = ({ id, color, size, pixels, setPixels }) => {
    const [pixel, setPixel] = useState<Ipixel>({
        id,
        color: '#cccccc'
    })

    return <Container size={size} color={pixel.color} onClick={() => {
        setPixel(pixel => {
            return {
                ...pixel,
                color
            }
        })

        const pixelsBrutos: Ipixel[] = []

        pixels.map(pixelBruto => {
            if (pixelBruto.id === pixel.id) {
                pixelsBrutos.push(pixel)
            } else {
                pixelsBrutos.push(pixelBruto)
            }
        })

        setPixels(pixelsBrutos)
    }}/>
}

export default memo(Pixel)