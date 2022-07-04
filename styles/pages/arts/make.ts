import styled, { css } from 'styled-components'

export const Container = styled.main`
    display: grid;
    grid-template-columns: 0.3fr 1.7fr;
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

export const InputName = styled.input`
    width: 90%;
    padding: 0.5%;
    font-size: 1vw;
    font-weight: bold;
    border-radius: 6px;
    color: ${props => props.theme.primary};
    border: 3px solid ${props => props.theme.primary};

    :focus {
        outline: none;
        border-radius: 10px;
    }
`

export const InputPixelsCount = styled.input`
    width: 50%;
    padding: 0.5%;
    font-size: 1.5vw;
    font-weight: bold;
    border-radius: 6px;
    color: ${props => props.theme.primary};
    border: 3px solid ${props => props.theme.primary};

    :focus {
        outline: none;
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
    background-color: ${props => props.active ? props.theme.secondary : 'transparent'};

    :hover {
        background-color: ${props => props.theme.secondary};
    }

    svg {
        fill: ${props => props.theme.primary};
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
        fill: ${props => props.theme.primary}
    }

    :hover {
        background-color: ${props => props.theme.secondary};
    }
`

export const ButtonDownload = styled.a`
    width: 40%;
    padding: 2%;
    border: none;
    cursor: pointer;
    border-radius: 50%;
    background-color: transparent;

    svg {
        fill: ${props => props.theme.primary};
    }

    :hover {
        background-color: ${props => props.theme.secondary};
    }
`

export const InputColor = styled.input`
    width: 40%;
    cursor: pointer;
    
    ::-webkit-color-swatch {
        border: 3px solid ${props => props.theme.primary};
    }

    ::-webkit-color-swatch-wrapper {
        padding: 0;
    }
`

export const ButtonExport = styled.button`
    padding: 3%;
    cursor: pointer;
    font-size: 1.2vw;
    font-weight: bold;
    border-radius: 10px;
    color: ${props => props.theme.primary};
    border: 2px solid ${props => props.theme.primary};
    background-color: ${props => props.theme.backgroundColor};
    
    :hover {
        background-color: ${props => props.theme.secondary};
    }
`

export const FormImport = styled.form`
    padding: 4%;
    margin-top: 5%;
    border-radius: 5px;
    border: 2px solid ${props => props.theme.primary};
`

export const InputImport = styled.input`
    width: 90%;
    margin: auto;
    padding: 0.5%;
    margin-top: 5%;
    display: block;
    font-size: 1vw;
    font-weight: bold;
    border-radius: 6px;
    color: ${props => props.theme.primary};
    border: 3px solid ${props => props.theme.primary};
    
    :focus {
        outline: none;
        border-radius: 10px;
    }
`

export const ButtonImport = styled.button`
    padding: 3%;
    margin-top: 10%;
    cursor: pointer;
    font-size: 1.2vw;
    margin-bottom: 5%;
    font-weight: bold;
    border-radius: 10px;
    color: ${props => props.theme.primary};
    border: 2px solid ${props => props.theme.primary};
    background-color: ${props => props.theme.backgroundColor};

    :hover {
        background-color: ${props => props.theme.secondary};
    }
`

interface IPixelArt {
    rowsAndCollums: number
}

export const PixelArt = styled.div<IPixelArt>`
    display: grid;
    width: fit-content;
    height: fit-content;
    grid-template-rows: repeat(${props => props.rowsAndCollums}, 0.0001fr);
    grid-template-columns: repeat(${props => props.rowsAndCollums}, 0.0001fr);
`