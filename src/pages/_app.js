import Head from 'next/head'
import { Provider as ReduxProvider } from 'react-redux'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import '@/styles/index.css'
import store from '@/redux/store'

const queryClient = new QueryClient()

function App({ Component, pageProps }) {
  return (
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <Head>
          <meta charSet="utf-8" />
          <title>LZL · 李尊龙</title>
          <link rel="shortcut icon" href="/lzl.png" type="image/x-icon" />
        </Head>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ReduxProvider>
  )
}

export default App
