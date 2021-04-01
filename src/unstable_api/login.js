// import { query as q } from 'faunadb'

// import { serverClient, serializeFaunaCookie } from '@/utils/fauna-auth'

// export default async function login(req, res) {
//   const { email, password } = await req.body

//   try {
//     if (!email || !password) {
//       throw new Error('Email and password must be provided.')
//     }

//     const { profile, secret } = await serverClient.query(
//       q.Let(
//         {
//           ref: q.Login(q.Match(q.Index('user_by_email'), email), {
//             password,
//           }),
//           profile: q.Select(
//             ['data'],
//             q.Get(q.Select(['instance'], q.Var('ref')))
//           ),
//           secret: q.Select(['secret'], q.Var('ref')),
//         },
//         {
//           profile: q.Var('profile'),
//           secret: q.Var('secret'),
//         }
//       )
//     )

//     if (!secret) {
//       throw new Error('No secret present in login query response.')
//     }

//     const cookieSerialized = serializeFaunaCookie(secret)

//     res.setHeader('Set-Cookie', cookieSerialized)
//     res.status(200).json(profile)
//   } catch (error) {
//     res.status(400).send(error.message)
//   }
// }
