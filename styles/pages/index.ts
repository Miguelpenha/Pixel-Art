import styled from 'styled-components'

export const Container = styled.main`
    
`

export const ContainerIconAdd = styled.a`
    width: 6%;
    float: right;
    margin-top: 2%;
    margin-right: 2%;
    border-radius: 50%;

    :hover {
        background-color: #EBEBEB;

        svg {
            transform: scale(1.1);
        }
    }
`

export const IconAdd = styled.svg`
    width: 90%;
    fill: #999999;
`

export const Arts = styled.div`
    width: 98%;
    margin: auto;
    display: grid;
    margin-bottom: 2%;
    grid-template-columns: 1fr 1fr 1fr 1fr;
`