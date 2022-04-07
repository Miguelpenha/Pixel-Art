import { NextApiRequest, NextApiResponse } from 'next'
import artsModels from '../../../models/art'
import connectDB from '../../../services/connectDB'
import { Iart } from '../../../types'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        await connectDB()
        
        const { name, pixels, pixelsCont, sizePixel, url } = req.body as Iart

        pixels.map((pixel, index) => pixels[index] = {
            ...pixel,
            color: pixel.color.toUpperCase()
        })

        interface Icolor {
            color: string
            quant: number
        }

        const colors: Icolor[] = []
        
        pixels.map(pixel => {
            let tem = false

            colors.map((color, index) => {
                if (pixel.color == color.color) {
                    colors[index] = {
                        ...colors[index],
                        quant: colors[index].quant+1
                    }

                    tem = true
                }
            })

            if (!tem) {
                colors.push({
                    color: pixel.color,
                    quant: 1
                })
            }
        })

        const colorsSelect: string[] = []

        colors.slice(0, 5).map(color => colorsSelect.push(color.color))
        
        artsModels.create({
            name,
            pixels,
            pixelsCont,
            sizePixel,
            url,
            colors: colorsSelect
        }).then(art => res.json(art))
    } else {
        res.status(404).end()
    }
}