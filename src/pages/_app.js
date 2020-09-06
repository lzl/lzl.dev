import Head from 'next/head'

import LeftRight from '@components/LeftRight'
import Menu from '@components/Menu'
import '@styles/index.css'

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>LZL · 李尊龙</title>
        <link rel="shortcut icon" href="/lzl.png" type="image/x-icon" />
      </Head>
      <LeftRight left={<Menu />} right={<Component {...pageProps} />} />
    </>
  )
}

export default App
