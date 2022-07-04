import styled from 'styled-components'

export const Container = styled.main`
    
`

export const ContainerIconAdd = styled.a`
    width: 6%;
    float: right;
    margin-top: 2%;
    overflow: hidden;
    margin-right: 2%;
    border-radius: 50%;

    :hover {
        animation: 0.8s zoomInZoomOutPlusContainer;
        background-color: ${props => props.theme.secondary};
        
        svg {
            animation: 1.4s zoomInZoomOutSVG;
        }
    }

    @keyframes zoomInZoomOutSVG {
        50% {
            transform: scale(1.1);
        }
    }

    @keyframes zoomInZoomOutPlusContainer {
        50% {
            transform: scale(1.2);
        }
    }
`

export const IconAdd = styled.svg`
    width: 90%;
    fill: ${props => props.theme.color};
`

export const Arts = styled.div`
    width: 98%;
    margin: auto;
    display: grid;
    margin-bottom: 2%;
    grid-template-columns: 1fr 1fr 1fr 1fr;
`