import { NextApiRequest, NextApiResponse } from 'next'

import hello from './queues/hello'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { name } = JSON.parse(req.body)
  console.log(`🎅 Got a hello from ${name}`)
  await hello.enqueue(name, {
    id: name,
    delay: '30sec',
    repeat: {
      every: '10sec',
      times: 2, // 2 * 10sec = 20sec
    },
  })
  res.status(200).end()
}
