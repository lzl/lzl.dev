import { query as q } from 'faunadb'
import cookie from 'cookie'

import { faunaClient, FAUNA_SECRET_COOKIE } from '@/utils/fauna-auth'

export const profileApi = async (faunaSecret) => {
  return await faunaClient(faunaSecret).query(
    q.Select(['data'], q.Get(q.Identity()))
  )
}

export default async function profile(req, res) {
  const cookies = cookie.parse(req.headers.cookie ?? '')
  const faunaSecret = cookies[FAUNA_SECRET_COOKIE]

  if (!faunaSecret) {
    return res.status(401).send('Auth cookie missing.')
  }

  const profile = await profileApi(faunaSecret)

  res.status(200).json(profile)
}
