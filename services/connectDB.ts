import mongoose from 'mongoose'

interface Icached {
    conn?: any
    promise?: any
}

let cached: Icached = {}

if (!cached) {
    cached = { conn: null, promise: null }
}

async function connectDB () {
    if (cached.conn) {
        return cached.conn
    }

    if (!cached.promise) {
        cached.promise = mongoose.connect(process.env.URL_MONGO).then(mongoose => mongoose)
    }

    cached.conn = await cached.promise

    return cached.conn
}

export default connectDB