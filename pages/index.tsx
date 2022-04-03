import { v4 } from 'uuid'
import { Iart, Ipixel } from '../types'
import Head from 'next/head'
import { Container, Options, InputName, InputPixelsCount, ButtonEraser, ButtonReset, ButtonDownload, InputColor, ButtonExport, FormImport, InputImport, ButtonImport, PixelArt } from '../styles/pages'
import Pixel from '../components/pages/Pixel'
import { useEffect, useState, useRef, FormEvent } from 'react'
import html2canvas from 'html2canvas'
import axios from 'axios'

export default function Home() {
    const [color, setColor] = useState('#FF0000')
    const [pixelsCont, setPixelsCont] = useState(49)
    const [sizePixel, setSizePixel] = useState(80)
    const [pixels, setPixels] = useState<Ipixel[]>([])
    const [eraser, setEraser] = useState(false)
    const ButtonResetRef = useRef<HTMLButtonElement>(null)
    const PixelArtRef = useRef<HTMLDivElement>(null)
    const IconButtonResetRef = useRef<SVGSVGElement>(null)
    const ButtonDownloadRef = useRef<HTMLAnchorElement>(null)
    const IconButtonDownloadRef = useRef<SVGSVGElement>(null)
    const [name, setName] = useState('Design sem nome')
    const [urlDownload, setUrlDownload] = useState<string>()

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

    useEffect(() => {
        async function print() {
            if (PixelArtRef.current) {
                const canvas = await html2canvas(PixelArtRef.current)

                setUrlDownload(canvas.toDataURL('image/png'))
            }
        }

        print().then()
    }, [pixels])

    function exportJSON() {     
        return JSON.stringify({
            name,
            pixelsCont,
            sizePixel,
            pixels
        })
    }

    async function exportModel() {
        const art = (await axios.post<Iart>('/api/arts/create', {
            name,
            pixelsCont,
            sizePixel,
            pixels
        } as Iart)).data

        return art._id
    }

    function importJSON(ev: FormEvent<HTMLFormElement>) {
        ev.preventDefault()

        interface Iinput extends Element {
            value?: string
        }

        const input: Iinput = ev.currentTarget[0]

        const importValue: Iart = JSON.parse(String(input.value))

        setName(String(importValue.name))
        setPixelsCont(importValue.pixelsCont)
        setSizePixel(importValue.sizePixel)
        input.value = ''
        setTimeout(() => setPixels(importValue.pixels), 1)
    }

    async function importModel(ev: FormEvent<HTMLFormElement>) {
        ev.preventDefault()

        interface Iinput extends Element {
            value?: string
        }
        
        const input: Iinput = ev.currentTarget[0]        
        const art: Iart = (await axios.get(`/api/arts/find/${input.value}`)).data
        
        setName(String(art.name))
        setPixelsCont(art.pixelsCont)
        setSizePixel(art.sizePixel)
        input.value = ''
        setTimeout(() => setPixels(art.pixels), 1)
    }

    return (
        <>
            <Head>
                <title>Pixel Art</title>
            </Head>
            <Container>
                <Options>
                    <InputName type="text" name="name" value={name} onChange={ev => setName(ev.target.value)}/>
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
                        <svg ref={IconButtonResetRef} xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24">
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
                    {urlDownload && (
                        <ButtonDownload ref={ButtonDownloadRef} title="Baixar imagem" href={urlDownload} download={name} onClick={() => {
                            if (ButtonDownloadRef.current && IconButtonDownloadRef.current) {
                                ButtonDownloadRef.current.style.padding = '6%'
                                IconButtonDownloadRef.current.style.fill = '#7FB2F0'
                                
                                setTimeout(() => {
                                    if (ButtonDownloadRef.current && IconButtonDownloadRef.current) {
                                        ButtonDownloadRef.current.style.padding = '2%'
                                        IconButtonDownloadRef.current.style.fill = '#4E7AC7'
                                    }
                                }, 300)
                            }
                        }}>
                            <svg ref={IconButtonDownloadRef} xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24">
                                <g>
                                    <rect fill="none" height="24" width="24"/>
                                </g>
                                <g>
                                    <path d="M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z M17,11l-1.41-1.41L13,12.17V4h-2v8.17L8.41,9.59L7,11l5,5 L17,11z"/>
                                </g>
                            </svg>
                        </ButtonDownload>
                    )}
                    <ButtonExport title="Exportar pixels em JSON" onClick={() => (
                        navigator.clipboard.writeText(exportJSON())
                    )}>Exportar pixels em JSON</ButtonExport>
                    <ButtonExport title="Exportar pixels por modelo" onClick={async () => (
                        navigator.clipboard.writeText(await exportModel())
                    )}>Exportar pixels por modelo</ButtonExport>
                    <FormImport onSubmit={importJSON}>
                        <InputImport type="text"/>
                        <ButtonImport title="Importar pixels por JSON">Importar pixels por JSON</ButtonImport>
                    </FormImport>
                    <FormImport onSubmit={importModel}>
                        <InputImport type="text"/>
                        <ButtonImport title="Importar pixels por modelo">Importar pixels por model</ButtonImport>
                    </FormImport>
                </Options>
                <PixelArt ref={PixelArtRef} rowsAndCollums={Math.sqrt(pixelsCont)}>
                    {pixels && pixels.map(pixel => (
                        <Pixel pixels={pixels} setPixels={setPixels} size={sizePixel} key={pixel.id} id={pixel.id} color={eraser ? '#cccccc' : color} pixelColor={pixel.color}/>
                    ))}
                </PixelArt>
            </Container>
        </>
    )
}