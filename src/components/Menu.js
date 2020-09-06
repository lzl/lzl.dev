import Link from 'next/link'

const data = []

export default function Menu() {
  return data.map(({ title, url }) => (
    <ul key={url}>
      <li>
        <Link href={url}>
          <a>{title}</a>
        </Link>
      </li>
    </ul>
  ))
}
