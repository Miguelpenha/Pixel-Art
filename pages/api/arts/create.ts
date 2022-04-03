import { NextApiRequest, NextApiResponse } from 'next'
import artsModels from '../../../models/art'
import connectDB from '../../../services/connectDB'
import { Iart } from '../../../types'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        await connectDB()
        
        const { name, pixels, pixelsCont, sizePixel, url } = req.body as Iart
        
        artsModels.create({
            name,
            pixels,
            pixelsCont,
            sizePixel,
            url
        }).then(art => res.json(art))
    } else {
        res.status(404).end()
    }
}