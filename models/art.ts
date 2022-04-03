import mongoose from 'mongoose'
import { Iart } from '../types'

const schema = new mongoose.Schema<Iart>({
    name: String,
    pixelsCont: Number,
    sizePixel: Number,
    pixels: [{
        id: String,
        color: String
    }]
})

const artsModels = mongoose.models.arts || mongoose.model<Iart>('arts', schema)

export default artsModels