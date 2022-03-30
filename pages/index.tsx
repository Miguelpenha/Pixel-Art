import { v4 } from 'uuid'
import { Ipixel } from '../types'
import Head from 'next/head'
import { Container, Options, InputPixelsCount, ButtonEraser, ButtonReset, InputColor, PixelArt } from '../styles/pages'
import Pixel from '../components/pages/Pixel'
import { useEffect, useState, useRef } from 'react'

export default function Home() {
    const [color, setColor] = useState('#FF0000')
    const [pixelsCont, setPixelsCont] = useState(49)
    const [sizePixel, setSizePixel] = useState(80)
    const [pixels, setPixels] = useState<Ipixel[]>()
    const [eraser, setEraser] = useState(false)
    const ButtonResetRef = useRef<HTMLButtonElement>(null)
    const IconButtonResetRef = useRef<SVGSVGElement>(null)

    function makePixels(): Ipixel[] {
        let pixelsBrutos: Ipixel[] = []

        for (let cont = 0;cont<pixelsCont;cont++) {
            pixelsBrutos.push({
                id: v4(),
                color: '#cccccc'
            })
        }

        return pixelsBrutos
    }
    
    useEffect(() => setPixels(makePixels()), [pixelsCont])

    return (
        <>
            <Head>
                <title>Pixel Art</title>
            </Head>
            <Container>
                <Options>
                <ButtonReset title="Resetar" ref={ButtonResetRef} onClick={() => {
                        setPixels(makePixels())

                        if (ButtonResetRef.current && IconButtonResetRef.current) {
                            ButtonResetRef.current.style.padding = '6%'
                            IconButtonResetRef.current.style.fill = '#7FB2F0'
                            
                            setTimeout(() => {
                                if (ButtonResetRef.current && IconButtonResetRef.current) {
                                    ButtonResetRef.current.style.padding = '2%'
                                    IconButtonResetRef.current.style.fill = '#4E7AC7'
                                }
                            }, 300)
                        }
                    }}>
                        <svg ref={IconButtonResetRef} xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24">
                            <g>
                                <path d="M0,0h24v24H0V0z" fill="none"/>
                            </g>
                            <g>
                                <g>
                                    <path d="M6,13c0-1.65,0.67-3.15,1.76-4.24L6.34,7.34C4.9,8.79,4,10.79,4,13c0,4.08,3.05,7.44,7,7.93v-2.02 C8.17,18.43,6,15.97,6,13z M20,13c0-4.42-3.58-8-8-8c-0.06,0-0.12,0.01-0.18,0.01l1.09-1.09L11.5,2.5L8,6l3.5,3.5l1.41-1.41 l-1.08-1.08C11.89,7.01,11.95,7,12,7c3.31,0,6,2.69,6,6c0,2.97-2.17,5.43-5,5.91v2.02C16.95,20.44,20,17.08,20,13z"/>
                                </g>
                            </g>
                        </svg>
                    </ButtonReset>
                    <InputPixelsCount
                        min="3"
                        step="2"
                        type="number"
                        title="Pixels por pixels"
                        value={Math.sqrt(pixelsCont)}
                        onChange={ev => setPixelsCont(Number(ev.target.value)*Number(ev.target.value))}
                    />
                    <InputPixelsCount
                        type="number"
                        title="Tamaho do pixel"
                        value={sizePixel}
                        onChange={ev => setSizePixel(Number(ev.target.value))}
                    />
                    <ButtonEraser onClick={() => setEraser(!eraser)} active={eraser} title="Borracha">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                            <path d="M8.086 2.207a2 2 0 0 1 2.828 0l3.879 3.879a2 2 0 0 1 0 2.828l-5.5 5.5A2 2 0 0 1 7.879 15H5.12a2 2 0 0 1-1.414-.586l-2.5-2.5a2 2 0 0 1 0-2.828l6.879-6.879zm2.121.707a1 1 0 0 0-1.414 0L4.16 7.547l5.293 5.293 4.633-4.633a1 1 0 0 0 0-1.414l-3.879-3.879zM8.746 13.547 3.453 8.254 1.914 9.793a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 .707.293H7.88a1 1 0 0 0 .707-.293l.16-.16z"/>
                        </svg>
                    </ButtonEraser>
                    <InputColor type="color" value={color} onChange={ev => setColor(ev.target.value)} title="Escolher uma cor"/>
                </Options>
                <PixelArt rowsAndCollums={Math.sqrt(pixelsCont)}>
                    {pixels && pixels.map(pixel => (
                        <Pixel size={sizePixel} key={pixel.id} id={pixel.id} color={eraser ? '#cccccc' :color}/>
                    ))}
                </PixelArt>
            </Container>
        </>
    )
}