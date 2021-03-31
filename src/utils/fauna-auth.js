// import faunadb from 'faunadb'
// import cookie from 'cookie'

// export const FAUNA_SECRET_COOKIE = 'user_token'

// export const serverClient = new faunadb.Client({
//   secret: process.env.FAUNA_SERVER_KEY,
// })

// // Used for any authed requests.
// export const userClient = (secret) =>
//   new faunadb.Client({
//     secret,
//   })

// export const serializeFaunaCookie = (userSecret) => {
//   const cookieSerialized = cookie.serialize(FAUNA_SECRET_COOKIE, userSecret, {
//     sameSite: 'lax',
//     secure: process.env.NODE_ENV === 'production',
//     maxAge: 72576000,
//     httpOnly: true,
//     path: '/',
//   })
//   return cookieSerialized
// }
