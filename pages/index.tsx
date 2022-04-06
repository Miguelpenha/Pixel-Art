import api from '../api'
import { Iart } from '../types'
import Head from 'next/head'
import { Container, ContainerIconAdd, IconAdd, Arts } from '../styles/pages'
import Link from 'next/link'
import Art from '../components/pages/Home/Art'

export default function Home() {
    const { data: arts } = api<Iart[]>('/api/arts/find')
    
    return (
        <>
            <Head>
                <title>Pixels Arts</title>
            </Head>
            <Container>
                <Link href="/arts/make" passHref>
                    <ContainerIconAdd title="Fazer nova pixel arte">
                        <IconAdd xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0V0z" fill="none"/>
                            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                        </IconAdd>
                    </ContainerIconAdd>
                </Link>
                <Arts>
                    {arts?.map(art => <Art art={art}/>)}
                </Arts>
            </Container>
        </>
    )
}