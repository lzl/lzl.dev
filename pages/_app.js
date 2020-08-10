// import Head from 'next/head'
import '../styles/index.css'

function App({ Component, pageProps }) {
  return (
    <>
      {/* <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head> */}
      <Component {...pageProps} />
    </>
  )
}

export default App
