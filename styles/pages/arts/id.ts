import styled from 'styled-components'
import Modal from 'react-modal'

export const Container = styled.main`
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const Title = styled.h1`
    margin-top: 1%;
`

export const ContainerArtImage = styled.div`
    width: 35%;
    display: flex;
    margin-top: 2%;
    overflow: hidden;
    position: relative;
`

export const ContainerIconOpen = styled.a`
    margin: 1%;
    width: 12%;
    z-index: 1;
    padding: 1%;
    display: flex;
    cursor: pointer;
    position: absolute;
    border-radius: 50%;
    
    :hover {
        background-color: ${props => props.theme.secondary};
    }
`

export const IconOpen = styled.svg`
    fill: ${props => props.theme.backgroundColorSecondary};
`

export const ArtImage = styled.img`
    width: 100%;
    cursor: zoom-in;

    :hover {
        transform: scale(1.1);
        filter: brightness(75%);
    }
`

interface IModalImage {
    zoom: boolean
}

export const ModalImage = styled(Modal)<IModalImage>`
    margin: auto;
    outline: none;
    display: flex;
    width: ${props => props.zoom ? 90 : 45}%;

    img {
        cursor: ${props => props.zoom ? 'zoom-out' : 'zoom-in'};
    }
`

export const ArtModalImage = styled.img`
    width: 100%;
    margin: auto;
    align-self: center;
`