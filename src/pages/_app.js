import Head from 'next/head'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { ChakraProvider } from '@chakra-ui/react'

import '@/styles/index.css'

const queryClient = new QueryClient()

function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <Head>
          <meta charSet="utf-8" />
          <title>LZL · 李尊龙</title>
          <link rel="shortcut icon" href="/lzl.png" type="image/x-icon" />
        </Head>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ChakraProvider>
  )
}

export default App
