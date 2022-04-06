import { useRouter } from 'next/router'
import api from '../../api'
import { Iart } from '../../types'
import Head from 'next/head'
import { Container } from '../../styles/pages/arts/id'

function Art() {
    const { query: { id } } = useRouter()
    const { data: art } = api<Iart>(`/api/arts/find/${id}`)

    return (
        <>
            <Head>
                <title>{art?.name}</title>
            </Head>
            <Container>
                <h1>{art?.name}</h1>
            </Container>
        </>
    )
}

export default Art