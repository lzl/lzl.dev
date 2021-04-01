// import { query as q } from 'faunadb'

// import { serverClient, serializeFaunaCookie } from '@/utils/fauna-auth'

// export default async function signup(req, res) {
//   const { email, password } = await req.body

//   try {
//     if (!email || !password) {
//       throw new Error('Email and password must be provided.')
//     }
//     console.log(`email: ${email} trying to create user.`)

//     let user

//     try {
//       user = await serverClient.query(
//         q.Create(q.Collection('User'), {
//           credentials: { password },
//           data: { email },
//         })
//       )
//     } catch (error) {
//       console.error('Fauna create user error:', error)
//       throw new Error('User already exists.')
//     }

//     if (!user.ref) {
//       throw new Error('No ref present in create query response.')
//     }

//     const { profile, secret } = await serverClient.query(
//       q.Let(
//         {
//           ref: q.Login(user.ref, {
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
