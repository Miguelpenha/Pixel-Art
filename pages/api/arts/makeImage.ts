import { NextApiRequest, NextApiResponse } from 'next'
import { Iart } from '../../../types'
import Handlebars from 'handlebars'
import path from 'path'
import fs from 'fs'
import chromium from 'chrome-aws-lambda'
import argsPuppeteer from '../../../argsPuppeteer'
const html2canvas = require('html2canvas')

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') { 
        const executablePath = await chromium.executablePath

        let browser = null

        if (!executablePath) {
            const puppeteer = require('puppeteer')

            browser = await puppeteer.launch({
                args: [...chromium.args, ...argsPuppeteer],
                defaultViewport: chromium.defaultViewport,
                headless: true,
                ignoreHTTPSErrors: true
            })
        } else {
            browser = await chromium.puppeteer.launch({
                args: [...chromium.args, ...argsPuppeteer],
                defaultViewport: chromium.defaultViewport,
                executablePath,
                headless: true,
                ignoreHTTPSErrors: true
            })
        }

        const page = await browser.newPage()
        await page.addScriptTag({url: 'https://html2canvas.hertzen.com/dist/html2canvas.js'})
        const { pixels, pixelsCont } = req.body as Iart

        const template = Handlebars.compile<{
            pixels: Iart['pixels'],
            sizeArt: number
        }>(fs.readFileSync(path.resolve(process.cwd(), 'public', 'views', 'makeImage.handlebars')).toString('utf-8'))

        await page.setContent(template({
            pixels,
            sizeArt: Math.sqrt(pixelsCont)
        }), {
            waitUntil: 'load'
        })

        const urlImageArt = await page.evaluate(async () => {
            const canvas = await html2canvas(document.getElementById('art') as HTMLElement)
            
            return canvas.toDataURL('image/png')
        })

        await browser.close()

        res.json({download: urlImageArt})
    } else {
        res.status(404).end()
    }
}