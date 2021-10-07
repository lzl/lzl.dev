import type { NextApiRequest, NextApiResponse } from 'next'

const counter = (req: NextApiRequest, res: NextApiResponse) => {
  const url = `${process.env.REDIS_API_URL}/incr/counter`
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.REDIS_API_TOKEN}`,
    },
  }

  return fetch(url, options)
    .then((r) => r.json())
    .then((data) => res.status(200).json(data.result))
}

export default counter
