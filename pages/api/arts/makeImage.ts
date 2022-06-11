import { NextApiRequest, NextApiResponse } from 'next'
import { Iart } from '../../../types'
import Handlebars from 'handlebars'
import path from 'path'
import fs from 'fs'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') { 
        if (!req.body.download) {
            const { pixels, pixelsCont } = req.body as Iart
  
            const template = Handlebars.compile<{
                title: string,
                pixels: Iart['pixels'],
                sizeArt: number
            }>(fs.readFileSync(path.resolve(process.cwd(), 'public', 'views', 'makeImage.handlebars')).toString('utf-8'))
            
            res.setHeader('Content-Type', 'text/html; charset=utf-8')
            res.write(template({
                title: 'asd',
                pixels,
                sizeArt: Math.sqrt(pixelsCont)
            }))

            res.end()
        } else {
            const { download } = req.body as {
                download: string
            }

            res.json({ download })
        }
    } else {
        res.status(404).end()
    }
}