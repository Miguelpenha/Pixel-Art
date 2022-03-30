import styled, { css } from 'styled-components'

export const Container = styled.main`
    display: grid;
    grid-template-columns: 0.2fr 1.8fr;
`

export const Options = styled.nav`
    padding: 2%;
    height: 100%;
    display: flex;
    padding-bottom: 80%;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
`

export const InputPixelsCount = styled.input`
    width: 50%;
    padding: 0.5%;
    color: #4E7AC7;
    font-size: 1.5vw;
    font-weight: bold;
    border-radius: 6px;
    border: 3px solid #4E7AC7;

    :focus {
        outline: none;
        color: #7FB2F0;
        border-color: #7FB2F0;
        border-radius: 10px;
    }
`

interface IButtonEraser {
    active: boolean
}

export const ButtonEraser = styled.button<IButtonEraser>`
    width: 40%;
    border: none;
    cursor: pointer;
    border-radius: 50%;
    padding: ${props => props.active ? 6 : 2}%;
    background-color: ${props => props.active ? '#bfbfbf' : 'transparent'};

    svg {
        fill: ${props => props.active ? '#7FB2F0' : '#4E7AC7'};
    }

    :hover {
        ${props => !props.active && css`
            background-color: #d3d3d3;
        `}
    }
`

export const ButtonReset = styled.button`
    width: 40%;
    padding: 2%;
    border: none;
    cursor: pointer;
    border-radius: 50%;
    background-color: transparent;

    svg {
        fill: #4E7AC7
    }

    :hover {
        background-color: #d3d3d3;
    }
`

export const InputColor = styled.input`
    width: 40%;
    
    ::-webkit-color-swatch {
        border: 3px solid #4E7AC7;
    }

    ::-webkit-color-swatch-wrapper {
        padding: 0;
    }
`

interface IPixelArt {
    rowsAndCollums: number
}

export const PixelArt = styled.div<IPixelArt>`
    display: grid;
    grid-template-columns: repeat(${props => props.rowsAndCollums}, 0.0001fr);
    grid-template-rows: repeat(${props => props.rowsAndCollums}, 0.0001fr);
`