import { GetStaticPaths, GetStaticProps } from 'next'
import axios from 'axios'
import { Iart } from '../../types'
import { FC } from 'react'
import api from '../../services/api'
import { useState } from 'react'
import Head from 'next/head'
import { Container, Title, ContainerArtImage, ContainerIconOpen, IconOpen, ArtImage, ModalImage, ArtModalImage } from '../../styles/pages/arts/id'
import Link from 'next/link'

interface Iprops {
    id: string
}

export const getStaticPaths: GetStaticPaths = async () => {
    const { data: arts } = await axios.get<Iart[]>(`${process.env.NEXT_PUBLIC_DOMINIO}/api/arts/find`)

    const paths = arts.map(art => ({
        params: {
            id: art._id
        }
    }))

    return {
        paths,
        fallback: true
    }
}

export const getStaticProps: GetStaticProps = async context => {
    const { id } = context.params as unknown as Iprops

    return {
        props: { id }
    }
}

const Art: FC<Iprops> = ({ id }) => {
    const { data: art } = api<Iart>(`${process.env.NEXT_PUBLIC_DOMINIO}/api/arts/find/${id}`)
    const [modalImageOpen, setModalImageOpen] = useState(false)
    const [modalImageZoom, setModalImageZoom] = useState(false)

    const closeModal = () => setModalImageOpen(false)
    
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon"/>
                <title>{art?.name}</title>
            </Head>
            <Container>
                <Title>{art?.name}</Title>
                <ContainerArtImage title="Dar Zoom" onClick={event => {
                    event.stopPropagation()
                    event.cancelable = true

                    setModalImageOpen(true)
                }}>
                    {!modalImageOpen && (
                        <Link href={`/api/arts/find/${art?._id}/image`} passHref>
                            <ContainerIconOpen title="Abrir imagem" target="_blank" onClick={event => {
                                event.stopPropagation()
                                event.cancelable = true
                            }}>
                                <IconOpen xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                                    <path d="M9 42Q7.8 42 6.9 41.1Q6 40.2 6 39V9Q6 7.8 6.9 6.9Q7.8 6 9 6H22.95V9H9Q9 9 9 9Q9 9 9 9V39Q9 39 9 39Q9 39 9 39H39Q39 39 39 39Q39 39 39 39V25.05H42V39Q42 40.2 41.1 41.1Q40.2 42 39 42ZM19.1 31.05 17 28.9 36.9 9H25.95V6H42V22.05H39V11.15Z"/>
                                </IconOpen>
                            </ContainerIconOpen>
                        </Link>
                    )}
                    <ArtImage src={art?.url}/>
                </ContainerArtImage>
                <ModalImage
                    zoom={modalImageZoom}
                    isOpen={modalImageOpen}
                    onRequestClose={closeModal}
                    style={{
                        overlay: { display: 'flex', cursor: 'pointer', backgroundColor: 'rgba(0, 0, 0, 0.1)' }
                    }}
                >
                    <ArtModalImage
                        src={art?.url}
                        title={modalImageZoom ? 'Tirar Zoom' : 'Dar Zoom'}
                        onClick={() => setModalImageZoom(!modalImageZoom)}
                    />
                </ModalImage>
            </Container>
        </>
    )
}

export default Art