import { Iart } from '../../types'
import { FC, useState, memo } from 'react'
import { Container, Header, Title, IconCopy, ContainerImage, Image, Footer, ContainerIconLike, IconLike, ContainerIconMark, IconMark , ContainerIconMore, IconMore } from './style'
import Link from 'next/link'

interface Iprops {
    art: Iart
}

const Art: FC<Iprops> = ({ art }) => {
    const [like, setLike] = useState(false)
    const [mark, setMark] = useState(false)

    return (
        <Container>
            <Header colors={art.colors} onClick={() => navigator.clipboard.writeText(art.name)}>
                <Title>{art.name}</Title>
                <IconCopy xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0V0z" fill="none"/>
                    <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
                </IconCopy>
            </Header>
            <Link href={`/arts/${art._id}`} passHref>
                <ContainerImage title="Ver arte">
                    <Image src={art.url} alt={art.name}/>
                </ContainerImage>
            </Link>
            <Footer>
                <ContainerIconLike title="Dar like">
                    <IconLike like={like} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" onClick={() => setLike(!like)}>
                        {like ? <>
                            <path d="M0 0h24v24H0V0z" fill="none"/>
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        </> : <>
                            <path d="M0 0h24v24H0V0z" fill="none"/>
                            <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/>
                        </>}
                    </IconLike>
                </ContainerIconLike>
                <ContainerIconMark title="Salvar para ver depois">
                    <IconMark mark={mark} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" onClick={() => setMark(!mark)}>
                        {mark ? <>
                            <path d="M0 0h24v24H0V0z" fill="none"/>
                            <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"/>
                        </> : <>
                            <path d="M0 0h24v24H0V0z" fill="none"/>
                            <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"/>
                        </>}
                    </IconMark>
                </ContainerIconMark>
                <ContainerIconMore onClick={() => console.log('Clicou')}>
                    <IconMore xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0V0z" fill="none"/>
                        <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                    </IconMore>
                </ContainerIconMore>
            </Footer>
        </Container>
    )
}

export default memo(Art)