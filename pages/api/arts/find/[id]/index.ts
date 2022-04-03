import { NextApiRequest, NextApiResponse } from 'next'
import artsModels from '../../../../../models/art'
import connectDB from '../../../../../services/connectDB'
import { isValidObjectId } from 'mongoose'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        await connectDB()
        
        const { id } = req.query as { id: string }
    
        if (isValidObjectId(id)) {
            const art = await artsModels.findById(id)
    
            if (art) {
                res.json(art)
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