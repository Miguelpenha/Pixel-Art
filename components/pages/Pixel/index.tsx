import { Ipixel } from '../../../types'
import { FC, memo, useState } from 'react'
import { Container } from './style'

interface Iprops {
    id: string
    color: string
    size: number
}

const Pixel: FC<Iprops> = ({ id, color, size }) => {
    const [pixel, setPixel] = useState<Ipixel>({
        id,
        color: '#cccccc'
    })

    return <Container size={size} color={pixel.color} onClick={() => (
        setPixel(pixel => {
            return {
                ...pixel,
                color
            }
        })
    )}/>
}

export default memo(Pixel)