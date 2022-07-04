import styled from 'styled-components'

interface IContainer {
    size?: number
    borderSize?: number
}

export const Container = styled.span<IContainer>`
    top: 50%;
    left: 50%;
    overflow: hidden;
    transform: 50% 50%;
    border-radius: 50%;
    position: absolute;
    display: inline-block;
    width: ${props => props.size || 100}px;
    height: ${props => props.size || 100}px;
    
    &:after {
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        content: '';
        margin: auto;
        position: absolute;
        border-radius: 50%;
        transform-origin: center center;
        animation: rotation 0.5s linear infinite;
        border: ${props => props.borderSize || 6}px solid;
        border-color: transparent #0085FF #0085FF;
    }

    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }
`