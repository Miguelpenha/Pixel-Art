import { FC } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import Head from 'next/head'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

const PixelArt: FC<AppProps> = ({ Component, pageProps }) => {
  return (
      <ThemeProvider theme={theme}>
        <Head>
          <meta charSet="UTF-8"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </Head>
        <Component {...pageProps}/>
        <GlobalStyle/>
      </ThemeProvider>
  )
}

export default PixelArt