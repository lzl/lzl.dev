import Link from 'next/link'

const data = [
  {
    title: 'Google',
    url: 'https://google.com/',
  },
  {
    title: 'Gmail',
    url: 'https://mail.google.com/',
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
