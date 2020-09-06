import Head from 'next/head'
import LeftRight from '@components/LeftRight'

export default function Index({ children, frontMatter }) {
  const { title } = frontMatter
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <LeftRight right={children} />
    </>
  )
}
