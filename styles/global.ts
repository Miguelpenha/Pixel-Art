import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    body {
        background: ${props => props.theme.backgroundColor};
    }

    * {
        margin: 0;
        padding: 0;
        color: ${props => props.theme.color};
        overflow: overlay;
        text-align: center;
        scrollbar-width: thin;
        box-sizing: border-box;
        scroll-behavior: smooth;
        transition-duration: 0.2s;
        font-family: 'Roboto', sans-serif;
        transition-timing-function: linear;
        scrollbar-color: ${props => props.theme.secondary} rgba(0, 0, 0, 0.4);
        
        ::-webkit-scrollbar {
            width: 12px;
        }

        ::-webkit-scrollbar-track {
            background: rgba(0, 0, 0, 0.4);
        }

        ::-webkit-scrollbar-thumb {
            border-radius: 16px;
            background-color: ${props => props.theme.backgroundColor};
        }
    }

    html, body, body>div:first-child, div#__next, div#__next>div {
        height: 100%;
    }
`