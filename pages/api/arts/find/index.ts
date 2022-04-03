import { NextApiRequest, NextApiResponse } from 'next'
import artsModels from '../../../../models/art'
import connectDB from '../../../../services/connectDB'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        await connectDB()

        const arts = await artsModels.find()
    
        res.json(arts)
    } else {
        res.status(404).end()
    }
}