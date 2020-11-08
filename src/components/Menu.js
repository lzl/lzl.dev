import Link from 'next/link'

const data = [
  {
    title: 'Google',
    url: 'https://google.com/ncr',
  },
  {
    title: 'Gmail',
    url: 'https://google.com/gmail',
  },
  {
    title: 'Roam Research',
    url: 'https://roamresearch.com/',
  },
  {
    title: 'Standard Notes',
    url: 'https://standardnotes.org/',
  },
  {
    title: 'GitHub',
    url: 'https://github.com/',
  },
  {
    title: 'Vercel',
    url: 'https://vercel.com/',
  },
  {
    title: 'Fauna',
    url: 'https://fauna.com/',
  },
]

export default function Menu() {
  return (
    <ul className="space-y-2">
      {data.map(({ title, url }) => (
        <li key={url}>
          <Link href={url}>
            <a>{title}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}
