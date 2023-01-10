import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from '../components/theme'
import { ApolloProvider } from '@apollo/client'
import { createAppSyncClient } from '../appsync/AppSyncClient';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ApolloProvider client={createAppSyncClient()}>
        <Component {...pageProps} />
      </ApolloProvider>
    </ChakraProvider>
  )
}
