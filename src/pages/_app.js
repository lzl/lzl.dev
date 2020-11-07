import Head from 'next/head'
import { QueryCache, ReactQueryCacheProvider } from 'react-query'

import '@/styles/index.css'

const queryCache = new QueryCache()

function App({ Component, pageProps }) {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <Head>
        <meta charSet="utf-8" />
        <title>LZL · 李尊龙</title>
        <link rel="shortcut icon" href="/lzl.png" type="image/x-icon" />
      </Head>
      <Component {...pageProps} />
    </ReactQueryCacheProvider>
  )
}

export default App