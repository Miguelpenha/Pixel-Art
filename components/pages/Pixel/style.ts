import styled from 'styled-components'

interface IContainer {
    color: string
    size: number
}

export const Container = styled.div<IContainer>`
    border: 1px solid #929292;
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    background-color: ${props => props.color};

    :hover {
        opacity: 0.5;
    }
`