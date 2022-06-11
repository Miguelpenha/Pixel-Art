import { NextApiRequest, NextApiResponse } from 'next'
import { Iart } from '../../../types'
import Handlebars from 'handlebars'
import path from 'path'
import fs from 'fs'
import chromium from 'chrome-aws-lambda'
const html2canvas = require('html2canvas')

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') { 
        const browser = await chromium.puppeteer.launch({
            executablePath: await chromium.executablePath,
            args: ['--no-sandbox']
        })
        //const browser = await puppeteer.launch()
        const page = await browser.newPage()
        await page.addScriptTag({url: 'https://html2canvas.hertzen.com/dist/html2canvas.js'})
        await page.setRequestInterception(true)
        const { pixels, pixelsCont } = req.body as Iart

        const template = Handlebars.compile<{
            pixels: Iart['pixels'],
            sizeArt: number
        }>(fs.readFileSync(path.resolve(process.cwd(), 'public', 'views', 'makeImage.handlebars')).toString('utf-8'))

        await page.setContent(template({
            pixels,
            sizeArt: Math.sqrt(pixelsCont)
        }))

        const urlImageArt = await page.evaluate(async () => {
            const canvas = await html2canvas(document.getElementById('art') as HTMLElement)
            
            return canvas.toDataURL('image/png')
        })

        res.json({download: urlImageArt})
    } else {
        res.status(404).end()
    }
}