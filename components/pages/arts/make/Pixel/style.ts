import styled from 'styled-components'

interface IContainer {
    color: string
    size: number
}

export const Container = styled.div<IContainer>`
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    background-color: ${props => props.color};
    border: 1px solid ${props => props.theme.backgroundColorSecondary};

    :hover {
        opacity: 0.5;
    }
`