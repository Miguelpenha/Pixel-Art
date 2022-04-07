import { Ipixel } from '../../../../../types'
import { Dispatch, SetStateAction, FC, memo } from 'react'
import { Container } from './style'

interface Iprops {
    id: string
    color: string
    size: number
    pixels: Ipixel[]
    setPixels: Dispatch<SetStateAction<Ipixel[]>>
    pixelColor: string
}

const Pixel: FC<Iprops> = ({ id, color, size, pixels, setPixels, pixelColor }) => {
    return (
        <Container
            size={size}
            color={pixelColor}
            onClick={() => {
                const pixelsBrutos: Ipixel[] = []
                
                pixels.map(pixelBruto => {
                    if (pixelBruto.id === id) {
                        pixelsBrutos.push({
                            id,
                            color
                        })
                    } else {
                        pixelsBrutos.push(pixelBruto)
                    }
                })
        
                setPixels(pixelsBrutos)
            }}
        />
    )
}

export default memo(Pixel)