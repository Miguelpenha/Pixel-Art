import styled, { css } from 'styled-components'

export const Container = styled.div`
    width: 90%;
    display: flex;
    margin-top: 5%;
    flex-direction: column;
`

interface IHeader {
    colors: string[]
}

export const Header = styled.header<IHeader>`
    padding: 2%;
    display: flex;
    cursor: pointer;
    border-bottom: none;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    border: 2px solid ${props => props.theme.secondary};

    :hover {
        background-color: ${props => props.theme.secondary};

        svg {
            fill: ${props => props.theme.color};
        }

        span:after {
            transform: scaleX(1);
            transform-origin: bottom left;
        }
    }

    span {
        ${props => {
            let colorsNews = ''

            props.colors.map((color, index) => {
                colorsNews += `${color}${index === props.colors.length-1 ? '' : ', '}`
            })
            
            return css`
                background: -webkit-linear-gradient(60deg, ${colorsNews});
            `
        }}

        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`

export const Title = styled.span`
    margin: auto;
    font-size: 1.8vw;
    font-weight: bold;
    position: relative;
    color: ${props => props.theme.color};

    :after {
        left: 0;
        bottom: 0;
        content: '';
        width: 100%;
        height: 3px;
        position: absolute;
        transform: scaleX(0);
        transform-origin: bottom right;
        transition: transform 0.35s ease-out;
        background-color: ${props => props.theme.color};
    }
`

export const IconCopy = styled.svg`
    width: 6%;
    fill: ${props => props.theme.backgroundColor};
`

export const ContainerImage = styled.a`
    overflow: hidden;
    position: relative;
`

export const Image = styled.img`
    width: 100%;
    height: 100%;

    :hover {
        transform: scale(1.1);
        filter: brightness(75%);
    }
`

export const Footer = styled.footer`
    display: flex;
    padding: 2% 2%;
    overflow: hidden;
    border-top: none;
    align-items: center;
    align-content: center;
    justify-items: center;
    justify-content: center;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    border: 2px solid ${props => props.theme.secondary};
`

export const ContainerIconLike = styled.button`
    width: 12%;
    border: none;
    cursor: pointer;
    overflow: hidden;
    background-color: transparent;
`

interface IIconLike {
    like: boolean
}

export const IconLike = styled.svg<IIconLike>`
    fill: ${props => props.like ? '#E03B00' : props.theme.color};

    :hover {
        transform: scale(1.08);
    }
`

export const ContainerIconMark = styled.button`
    width: 12%;
    border: none;
    cursor: pointer;
    overflow: hidden;
    background-color: transparent;
`

interface IIconMark {
    mark: boolean
}

export const IconMark = styled.svg<IIconMark>`
    fill: ${props => props.mark ? props.theme.primary : props.theme.color};

    :hover {
        transform: scale(1.08);
    }
`

export const ContainerIconMore = styled.button`
    width: 12%;
    border: none;
    cursor: pointer;
    overflow: hidden;
    margin-left: auto;
    border-radius: 50%;
    background-color: transparent;
    
    :hover {
        animation: swing 1s;
        background-color: ${props => props.theme.secondary};
    }

    @keyframes swing {
        0% {
            border-radius: 50%;
            transform: translate(0px) rotate(0deg);
        }

        50% {
            border-top-left-radius: 50%;
            border-top-right-radius: 25%;
            transform: translate(6px) rotate(10deg);
        }

        70% {
            border-top-left-radius: 25%;
            border-top-right-radius: 50%;
            transform: translate(-6px) rotate(-10deg);
        }

        100% {
            border-radius: 50%;
            transform: translate(0px) rotate(0deg);
        }
    }
`

export const IconMore = styled.svg`
    width: 100%;
    fill: ${props => props.theme.color};
`