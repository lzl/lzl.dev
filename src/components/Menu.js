import Link from 'next/link'

// const defaultMenu = [
//   {
//     title: 'Google',
//     url: 'https://google.com/ncr',
//   },
//   {
//     title: 'JavaScript',
//     url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
//   },
//   {
//     title: 'React',
//     url: 'https://reactjs.org/',
//   },
//   {
//     title: 'Next.js',
//     url: 'https://nextjs.org/',
//   },
//   {
//     title: 'Tailwind CSS',
//     url: 'https://tailwindcss.com/',
//   },
//   {
//     title: 'React Query',
//     url: 'https://github.com/tannerlinsley/react-query',
//   },
//   {
//     title: 'GitHub',
//     url: 'https://github.com/',
//   },
//   {
//     title: 'Vercel',
//     url: 'https://vercel.com/',
//   },
//   {
//     title: 'Fauna',
//     url: 'https://fauna.com/',
//   },
// ]

// export const authMenu = [
//   {
//     title: 'Login',
//     url: '/login',
//   },
//   {
//     title: 'Signup',
//     url: '/signup',
//   },
// ]

export const profileMenu = [
  // {
  //   title: 'Profile',
  //   url: '/profile',
  // },
  {
    title: 'State',
    url: '/state',
  },
  // {
  //   title: 'Table',
  //   url: '/table',
  // },
  // {
  //   title: 'Form',
  //   url: '/form',
  // },
]

export default function Menu({ data = profileMenu }) {
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
