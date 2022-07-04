import { FC, HTMLAttributes } from 'react'
import { Container } from './style'

interface Iprops {
    size?: number
    borderSize?: number
    style?: HTMLAttributes<HTMLSpanElement>['style']
}

const Loading: FC<Iprops> = props => {
    return (
        <Container {...props}/>
    )
}

export default Loading