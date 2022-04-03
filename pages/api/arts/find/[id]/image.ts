import { NextApiRequest, NextApiResponse } from 'next'
import artsModels from '../../../../../models/art'
import connectDB from '../../../../../services/connectDB'
import { isValidObjectId } from 'mongoose'
import { Iart } from '../../../../../types'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        await connectDB()
        
        const { id } = req.query as { id: string }
    
        if (isValidObjectId(id)) {
            const art: Iart | null = await artsModels.findById(id)
            
            if (art) {
                const chunks = Buffer.from(art.url.replace('data:image/png;base64,', ''), 'base64')
                
                res.setHeader('content-type', 'image/png')

                res.end(chunks)
            } else {
                res.json({ error: 'Essa arte não existe' })
            }    
        } else {
            res.json({ error: 'Essa arte não existe' })
        }
    } else {
        res.status(404).end()
    }
}